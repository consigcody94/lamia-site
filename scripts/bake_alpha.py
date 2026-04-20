"""
Bake a feathered radial alpha mask directly into the portrait PNG.
No CSS mask needed afterwards - the PNG itself has transparent corners.
"""
import sys
from PIL import Image, ImageDraw, ImageFilter

SRC = "public/os-lamia-portrait.png"
DST = "public/os-lamia-portrait-feathered.png"

img = Image.open(SRC).convert("RGBA")
W, H = img.size
print(f"source: {W}x{H}")

# Create a single-channel mask image: full-opacity ellipse on black
mask = Image.new("L", (W, H), 0)
draw = ImageDraw.Draw(mask)

# Ellipse tuned to enclose the face + upper torso of the subject.
# Image is 1024x1536 (2:3), subject centered horizontally, head ~upper-third.
cx, cy = W // 2, int(H * 0.40)
rx, ry = int(W * 0.44), int(H * 0.48)
draw.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=255)

# Feather the mask - large Gaussian blur creates a very soft transition.
mask = mask.filter(ImageFilter.GaussianBlur(radius=min(W, H) * 0.11))

# Multiply feathered mask into the image's alpha channel (preserve any existing alpha).
orig_alpha = img.split()[3]
new_alpha = Image.eval(Image.blend(mask, mask, 0), lambda _: 0)  # placeholder
# Simpler: multiply in floats via a compose
import numpy as np
orig_a = np.asarray(orig_alpha, dtype=np.float32) / 255.0
mask_a = np.asarray(mask, dtype=np.float32) / 255.0
final_a = np.clip(orig_a * mask_a, 0.0, 1.0)
final_a = (final_a * 255).astype(np.uint8)
final_alpha = Image.fromarray(final_a, mode="L")

r, g, b, _ = img.split()
out = Image.merge("RGBA", (r, g, b, final_alpha))
out.save(DST, format="PNG", optimize=True)

import os
print(f"wrote: {DST}  ({os.path.getsize(DST) // 1024} KB)")
