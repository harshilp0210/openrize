import csv
import smtplib
import argparse
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(sender_email, sender_password, recipient_email, subject, body):
    try:
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Subject'] = subject

        msg.attach(MIMEText(body, 'plain'))

        # Connect to Gmail SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, recipient_email, text)
        server.quit()
        return True
    except Exception as e:
        print(f"Failed to send to {recipient_email}: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description='Auto Email Sender')
    parser.add_argument('csv_file', type=str, help='Path to leads CSV file')
    parser.add_argument('--email', type=str, required=True, help='Your Gmail address')
    parser.add_argument('--password', type=str, required=True, help='Your Gmail App Password')
    
    args = parser.parse_args()

    # Strategy 1 Template
    subject_template = "Quick question about {Name}'s reviews"
    body_template = """Hi,

I was looking for a place to eat in Elk Grove Village and came across {Name} on Google Maps.

I noticed you have a great rating, but I saw two things that might be costing you customers:

1. Your website loads a bit slow on mobile.
2. Your competitors are getting reviews this week, which is pushing them higher in the search results.

I run search audits for local businesses and I made a quick video showing exactly how you can fix this in 5 minutes.

Mind if I send it over? No pitch, just wanted to share the findings.

Best,

Harshil
Openrize.com
"""

    with open(args.csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        leads = list(reader)
        
    print(f"Found {len(leads)} leads. Starting outreach...")
    
    for lead in leads:
        name = lead.get('Name', 'Business Owner')
        email = lead.get('Email', 'N/A')
        
        if not email or email == 'N/A':
            print(f"Skipping {name} (No email found)")
            continue
            
        # Handle multiple emails found by scraper
        email_to_use = email.split(',')[0].strip()
        
        subject = subject_template.format(Name=name)
        body = body_template.format(Name=name)
        
        print(f"Sending to {name} ({email_to_use})...")
        
        success = send_email(args.email, args.password, email_to_use, subject, body)
        
        if success:
            print("  -> Sent! ✅")
        else:
            print("  -> Failed ❌")
            
        # Sleep to avoid spam filters
        time.sleep(5)

if __name__ == "__main__":
    main()
