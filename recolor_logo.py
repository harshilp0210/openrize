from PIL import Image
import colorsys

def recolor_logo(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        pixels = img.load()
        
        # Coffee color target (approximate)
        # Coffee is a dark orange/brown. Hue ~ 25 degrees.
        target_hue = 25 / 360.0 # 0.07
        
        for y in range(img.height):
            for x in range(img.width):
                r, g, b, a = pixels[x, y]
                
                if a == 0:
                    continue
                
                # Convert to HSV
                h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
                
                # Check if pixel is "Blueish"
                # Blue hue is roughly 0.55 to 0.75 (200 to 270 degrees)
                if 0.5 < h < 0.75:
                    # Shift hue to coffee (brown/orange)
                    new_h = target_hue
                    
                    # Convert back to RGB
                    nr, ng, nb = colorsys.hsv_to_rgb(new_h, s, v)
                    pixels[x, y] = (int(nr*255), int(ng*255), int(nb*255), a)
        
        img.save(output_path)
        print(f"Successfully recolored logo to {output_path}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = r"C:\Users\harsh\.gemini\antigravity\scratch\openrize\public\logo.png"
    # We overwrite the logo directly or create a new one to test. Let's overwrite as requested.
    # But for safety, let's backup first? No, user wants it changed.
    output_file = r"C:\Users\harsh\.gemini\antigravity\scratch\openrize\public\logo.png"
    recolor_logo(input_file, output_file)
