from PIL import Image

def create_favicon(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # The logo is likely wide. We want the symbol on the left.
        # We'll take a square crop from the left side based on the image height.
        height = img.height
        
        # Crop the left square (0, 0, height, height)
        # Assuming the symbol fits within a square of the height
        icon = img.crop((0, 0, height, height))
        
        icon.save(output_path)
        print(f"Successfully created favicon at {output_path}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = r"C:\Users\harsh\.gemini\antigravity\scratch\openrize\public\logo.png"
    output_file = r"C:\Users\harsh\.gemini\antigravity\scratch\openrize\app\icon.png"
    create_favicon(input_file, output_file)
