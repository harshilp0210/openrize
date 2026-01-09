from PIL import Image
import sys
import os

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Get the bounding box of the non-zero regions
        bbox = img.getbbox()
        
        if bbox:
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Successfully cropped image. New size: {cropped_img.size}")
        else:
            print("Image is empty or fully transparent.")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = r"C:\Users\harsh\.gemini\antigravity\scratch\openrize\public\logo.png"
    crop_image(input_file, input_file)
