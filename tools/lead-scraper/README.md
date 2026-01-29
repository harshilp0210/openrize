# Google Maps Lead Scraper

This tool helps you Scrape leads from Google Maps to finding potential clients.

## Setup

1.  Open this directory in your terminal:
    ```powershell
    cd tools/lead-scraper
    ```

2.  Install dependencies:
    ```powershell
    pip install -r requirements.txt
    playwright install
    ```

## Usage

Run the scraper by providing a search query in quotes:

```powershell
python scraper.py "Restaurants in Elk Grove Village IL"
```

## Output

The script will generate a CSV file (e.g., `leads_Restaurants_in_Elk_Grove_Village_IL.csv`) in the same directory containing the scraped data.
