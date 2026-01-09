from PIL import Image
import os

def create_icons():
    # Input logo (transparent version)
    input_path = os.path.join("public", "logo-v4.png")
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return

    img = Image.open(input_path)
    
    # 1. PWA Icons
    sizes = [(192, 192), (512, 512)]
    for w, h in sizes:
        # Create a centered square canvas
        # Since the logo is wide, we'll fit it within the width and center vertically
        canvas = Image.new('RGBA', (w, h), (0, 0, 0, 0))
        
        # Calculate resize ensuring it fits
        ratio = min(w / img.width, h / img.height)
        new_size = (int(img.width * ratio), int(img.height * ratio))
        resized_img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Center position
        pos = ((w - new_size[0]) // 2, (h - new_size[1]) // 2)
        canvas.paste(resized_img, pos)
        
        output_path = os.path.join("public", f"icon-{w}.png")
        canvas.save(output_path, "PNG")
        print(f"Saved {output_path}")

    # 2. Favicon (app/icon.png)
    # For favicon, we might want just the icon part if possible, 
    # but for now we'll scale the whole thing to keep it simple as per request.
    icon_size = (32, 32)
    icon_canvas = Image.new('RGBA', icon_size, (0, 0, 0, 0))
    ratio = min(32 / img.width, 32 / img.height)
    new_size = (int(img.width * ratio), int(img.height * ratio))
    resized_icon = img.resize(new_size, Image.Resampling.LANCZOS)
    pos = ((32 - new_size[0]) // 2, (32 - new_size[1]) // 2)
    icon_canvas.paste(resized_icon, pos)
    
    icon_output = os.path.join("app", "icon.png")
    icon_canvas.save(icon_output, "PNG")
    print(f"Saved {icon_output}")

if __name__ == "__main__":
    create_icons()
