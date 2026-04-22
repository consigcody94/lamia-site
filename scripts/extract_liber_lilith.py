"""
Re-extract Liber Lilith (Donald Tyson) from PDF, pages 29-131, preserving
Hebrew unicode. Writes raw pages to scripts/pages/*.txt so we can see what's
actually there before rebuilding the JSON.
"""
from pathlib import Path
import sys
import io

# Force UTF-8 on Windows stdout
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

import pypdf

PDF = r"C:\Users\Ajs\Downloads\Liber Lilith - Donald Tyson (1).pdf"
OUT = Path(r"C:\Users\Ajs\Desktop\lamia-site\scripts\pages")
OUT.mkdir(parents=True, exist_ok=True)

reader = pypdf.PdfReader(PDF)
total = len(reader.pages)
print(f"Total pages: {total}")

# PDF page indices are 0-based; user said grimoire starts at page 29 (1-based), ends 131.
# So indices 28 through 130 inclusive.
start, end = 28, 130

for i in range(start, min(end + 1, total)):
    try:
        text = reader.pages[i].extract_text() or ""
    except Exception as e:
        text = f"[extract error: {e}]"
    # Page number displayed on the file is the 1-based PDF page
    fname = OUT / f"page_{i+1:03d}.txt"
    fname.write_text(text, encoding="utf-8")

print(f"Wrote {end - start + 1} pages to {OUT}")
