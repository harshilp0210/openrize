from PIL import Image
import os

def create_icons():
    # Input logo (the square mark provided by user)
    input_path = os.path.join("public", "logo-mark.png")
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return

    img = Image.open(input_path)
    
    # 1. PWA Icons (192, 512)
    sizes = [(192, 192), (512, 512)]
    for w, h in sizes:
        # Resize using LANCZOS for best quality
        resized_img = img.resize((w, h), Image.Resampling.LANCZOS)
        
        output_path = os.path.join("public", f"icon-{w}.png")
        resized_img.save(output_path, "PNG")
        print(f"Saved {output_path}")

    # 2. Favicon (app/icon.png) - Next.js will generate favicon.ico from this
    # 512x512 is good for app/icon.png as Next.js handles resizing
    icon_output = os.path.join("app", "icon.png")
    # We can just use the 512 version or original if it's square
    img.resize((512, 512), Image.Resampling.LANCZOS).save(icon_output, "PNG")
    print(f"Saved {icon_output}")

if __name__ == "__main__":
    create_icons()
