import csv
import time
import argparse
import re
from playwright.sync_api import sync_playwright

def extract_emails_from_page(page):
    """Try to find emails on the current page"""
    emails = set()
    
    # 1. Look for mailto links
    try:
        mailto_links = page.locator('a[href^="mailto:"]').all()
        for link in mailto_links:
            href = link.get_attribute("href")
            if href:
                email = href.replace("mailto:", "").split("?")[0]
                if "@" in email:
                    emails.add(email)
    except:
        pass
        
    # 2. Look for email text pattern
    try:
        content = page.content()
        # Simple regex for email extraction
        found = re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', content)
        for email in found:
            # Filter out common junk image extensions or js files mistakenly matched
            if not any(x in email.lower() for x in ['.png', '.jpg', '.jpeg', '.gif', '.js', '.css', 'sentry', 'example']):
                emails.add(email)
    except:
        pass
        
    return list(emails)

def visit_website_for_email(browser, url):
    """Visit a website and try to find an email address"""
    if not url or "google.com" in url:
        return "N/A"
        
    try:
        context = browser.new_context(user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
        page = context.new_page()
        # Fast timeout - we don't want to get stuck on one site
        page.goto(url, timeout=15000, wait_until="domcontentloaded")
        
        emails = extract_emails_from_page(page)
        
        # If no emails, try to find a "Contact" link and click it
        if not emails:
            try:
                contact_link = page.locator("a", has_text=re.compile("contact|about", re.IGNORECASE)).first
                if contact_link.count() > 0:
                    contact_url = contact_link.get_attribute("href")
                    if contact_url:
                        # Handle relative URLs
                        if not contact_url.startswith("http"):
                            contact_url = url.rstrip("/") + "/" + contact_url.lstrip("/")
                        
                        page.goto(contact_url, timeout=10000, wait_until="domcontentloaded")
                        emails = extract_emails_from_page(page)
            except:
                pass
                
        page.close()
        context.close()
        
        return ", ".join(emails) if emails else "N/A"
    except Exception as e:
        print(f"Failed to scrape site {url}: {e}")
        return "N/A"

def scrape_google_maps(search_term, headless=True):
    results = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=headless)
        page = browser.new_page()
        
        print(f"Searching for: {search_term}")
        try:
            page.goto("https://www.google.com/maps", timeout=60000)
            
            # Try multiple selectors for search box
            search_box = page.locator("input#searchboxinput").or_(page.locator("input[name='q']")).or_(page.locator("input[aria-label='Search Google Maps']"))
            search_box.first.wait_for(state="visible", timeout=30000)
            search_box.first.fill(search_term)
            search_box.first.press("Enter")
        except Exception as e:
            print(f"Error during search init: {e}")
            page.screenshot(path="error_search.png")
            raise e
        
        # Wait for results to load
        print("Waiting for results...")
        try:
            page.wait_for_selector('div[role="feed"], div[aria-label*="Results"]', timeout=30000)
        except Exception as e:
            print("Could not find results feed. Taking screenshot...")
            page.screenshot(path="error_results.png")
        
        # Scroll to load more results
        feed_selector = 'div[role="feed"]'
        try:
            for i in range(5):
                page.evaluate(f'document.querySelector("{feed_selector}").scrollBy(0, 1000)')
                time.sleep(2)
        except:
            pass
            
        print("Extracting leads...")
        
        locators = page.locator('div[role="article"]').or_(page.locator('div[role="feed"] > div > div[jsaction]'))
        count = locators.count()
        print(f"Found {count} potential leads")
        
        # We'll use a second browser context for visiting websites in parallel if needed, 
        # but for simplicity we'll do it sequentially here or use the same browser
        
        for i in range(count):
            try:
                item = locators.nth(i)
                text_content = item.text_content()
                if not text_content:
                    continue
                    
                lines = text_content.split('\n')
                name = lines[0] if lines else "Unknown"
                
                # Try to get links
                links = item.locator("a").all()
                maps_link = ""
                website_link = ""
                
                for link in links:
                    href = link.get_attribute("href")
                    if not href:
                        continue
                        
                    if "google.com/maps" in href:
                        maps_link = href
                    elif "http" in href and "google.com" not in href:
                         website_link = href
                
                # If we didn't find website link on the card directly, sometimes it's hidden under a button
                # For this basic version, we rely on visible links. 
                # Deep scraping Google Maps usually requires clicking each card.
                
                # STRATEGY: Click the card to get details (Website)
                try:
                    item.click()
                    # Wait for details panel
                    page.wait_for_selector('div[role="main"]', timeout=2000)
                    
                    # Look for website button in details
                    # Common aria-labels: "Website", "Open website"
                    website_btn = page.locator('a[data-item-id="authority"]').or_(page.locator('a[aria-label*="Website"]'))
                    if website_btn.count() > 0:
                        website_link = website_btn.first.get_attribute("href")
                except:
                    pass

                print(f"Processing: {name} | Website: {website_link}")
                
                email = "N/A"
                if website_link:
                    print(f"  -> Visiting {website_link} to find email...")
                    email = visit_website_for_email(browser, website_link)
                    print(f"  -> Found: {email}")

                business_data = {
                    "Name": name,
                    "Website": website_link or "N/A",
                    "Email": email,
                    "Maps_Link": maps_link
                }
                
                results.append(business_data)
                
            except Exception as e:
                print(f"Error processing item {i}: {e}")
                
        browser.close()
        
    return results

def main():
    parser = argparse.ArgumentParser(description='Google Maps Lead Scraper')
    parser.add_argument('query', type=str, help='Search query (e.g., "Restaurants in Chicago")')
    parser.add_argument('--headless', action='store_true', help='Run in headless mode')
    
    args = parser.parse_args()
    
    data = scrape_google_maps(args.query, headless=args.headless)
    
    filename = f"leads_{args.query.replace(' ', '_')}.csv"
    
    if data:
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=["Name", "Website", "Email", "Maps_Link"])
            writer.writeheader()
            writer.writerows(data)
        print(f"Saved {len(data)} leads to {filename}")
    else:
        print("No leads found.")

if __name__ == "__main__":
    main()
