"""Parse the extracted Liber Lilith text into structured chapters.
Each chapter is titled after a Hebrew letter. Output: JSON for the Next page."""
import re, json, sys
from pathlib import Path

SRC = Path(__file__).parent / "liber.txt"
DST = Path("lib/liber-lilith.json")
DST.parent.mkdir(parents=True, exist_ok=True)

text = SRC.read_text(encoding="utf-8")

# The 22 Hebrew letters, their transliteration, English spelling, and numeric value.
LETTERS = [
    ("א", "Aleph",   "A",    1),
    ("ב", "Beth",    "B",    2),
    ("ג", "Gimel",   "G",    3),
    ("ד", "Daleth",  "D",    4),
    ("ה", "Heh",     "H",    5),
    ("ו", "Vav",     "V",    6),
    ("ז", "Zayin",   "Z",    7),
    ("ח", "Cheth",   "Ch",   8),
    ("ט", "Teth",    "T",    9),
    ("י", "Yod",     "Y",   10),
    ("כ", "Kaph",    "K",   20),
    ("ל", "Lamed",   "L",   30),
    ("מ", "Mem",     "M",   40),
    ("נ", "Nun",     "N",   50),
    ("ס", "Samekh",  "S",   60),
    ("ע", "Ayin",    "O",   70),
    ("פ", "Peh",     "P",   80),
    ("צ", "Tzaddi",  "Tz",  90),
    ("ק", "Qoph",    "Q",  100),
    ("ר", "Resh",    "R",  200),
    ("ש", "Shin",    "Sh", 300),
    ("ת", "Tav",     "Th", 400),
]

# Collapse multi-space runs in pdftotext output; they correspond to column alignment.
def clean_line(s: str) -> str:
    return re.sub(r"\s{2,}", " ", s.replace("\u200f", "").replace("\u200e", "")).strip()

lines = text.split("\n")

# Find each chapter's starting line. pdftotext renders chapter titles like
# "T h e A L E P H    C h ap t er" on a line, often with wide spacing.
# Normalize by collapsing all whitespace and searching for "<NAME> Chapter" case-insensitive.
def norm(s: str) -> str:
    return re.sub(r"\s+", "", s).upper()

# First, find the "PART THE FIRST" / "PART THE SECOND" etc. positions to scope.
# The content proper starts somewhere after the index.
# Approach: iterate letters IN ORDER, find first match after the last match.
starts = []
cursor = 0
for heb, name, translit, gematria in LETTERS:
    target = norm(f"The {name} Chapter")
    alt = norm(f"{name} Chapter")
    idx = None
    # search AFTER cursor, prefer matches that are standalone titles (not in the index)
    for i in range(cursor, len(lines)):
        n = norm(lines[i])
        if target in n or alt in n:
            # filter out index-table-of-contents lines (they list roman numerals)
            if re.search(r"\b[IVX]{1,5}\b", lines[i]):
                continue
            idx = i
            break
    if idx is not None:
        starts.append((heb, name, translit, gematria, idx))
        cursor = idx + 1
    else:
        starts.append((heb, name, translit, gematria, None))

# Build chapters: text is from start[i] to start[i+1]
chapters = []
for i, (heb, name, translit, gematria, start) in enumerate(starts):
    if start is None:
        chapters.append({
            "hebrew": heb, "name": name, "translit": translit,
            "gematria": gematria, "paragraphs": [],
        })
        continue
    end = next((starts[j][4] for j in range(i + 1, len(starts)) if starts[j][4] is not None), len(lines))
    body = lines[start + 1 : end]

    # Join lines, collapse whitespace, split into paragraphs by blank-line groups.
    buf = []
    cur = []
    for ln in body:
        c = clean_line(ln)
        if not c:
            if cur:
                buf.append(" ".join(cur))
                cur = []
        else:
            cur.append(c)
    if cur:
        buf.append(" ".join(cur))

    # Filter very short / page-number / header fragments
    paras = [p for p in buf if len(p) > 40 and not re.fullmatch(r"[IVXLCDM\s.,\-·]+", p)]

    chapters.append({
        "hebrew": heb,
        "name": name,
        "translit": translit,
        "gematria": gematria,
        "paragraphs": paras[:60],  # cap per chapter for page size
    })

# Also capture a "prologue" — everything before chapter Aleph
first = next((s[4] for s in starts if s[4] is not None), None)
prologue = []
if first is not None:
    buf, cur = [], []
    for ln in lines[:first]:
        c = clean_line(ln)
        if not c:
            if cur:
                buf.append(" ".join(cur)); cur = []
        else:
            cur.append(c)
    if cur:
        buf.append(" ".join(cur))
    prologue = [p for p in buf if len(p) > 30]

out = {
    "title": "Liber Lilith",
    "subtitle": "The Grimoire",
    "attribution": "Revealed in dream by the Queen of the Harlots unto Lamech, son of Methusael, son of Mehujael, son of Irad, son of Enoch, son of Cain the Accursed — written upon papyrus in the script of the angels, sealed in clay beneath the earth of Canaan, and copied faithfully for the consolation of his solitude by Solon of Alexandria.",
    "opening": "Hearken unto me and I will teach you wisdom that has not been spoken since the beginning.",
    "openingAttr": "Lilith, unto Lamech",
    "prologue": prologue[:20],
    "chapters": chapters,
}

DST.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"wrote {DST} with {len(chapters)} chapters, {sum(len(c['paragraphs']) for c in chapters)} paragraphs")
