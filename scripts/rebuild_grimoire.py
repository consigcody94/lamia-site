"""
Rebuild lib/liber-lilith.json from the re-extracted PDF pages.

Steps per chapter:
  1. Collect pages between its roman numeral and the next chapter's numeral.
  2. Strip running headers ("LIBER LILITH", "THE GRIMOIRE"), page numbers.
  3. Strip the roman numeral line itself.
  4. Detach the drop cap (single letter line near start) and prepend it to the
     opening paragraph.
  5. Repair common OCR joins ("offorbidden" -> "of forbidden", "Thefirst" -> "The first", etc.).
  6. Collapse soft-wrapped lines into real paragraphs (blank line = paragraph break).
"""
from __future__ import annotations
from pathlib import Path
import json
import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

PAGES_DIR = Path(r"C:\Users\Ajs\Desktop\lamia-site\scripts\pages")
OUT_JSON = Path(r"C:\Users\Ajs\Desktop\lamia-site\lib\liber-lilith.json")

# 22 chapters — page ranges from the roman-numeral scan.
# Format: (roman_as_printed_by_OCR, start_page, end_page_inclusive)
CHAPTERS = [
    # (roman_as_printed_by_OCR, start_page, end_page, override_dropcap_if_missing)
    ("I",      30,  31,  None),
    ("II",     32,  35,  None),
    ("Ill",    36,  39,  None),  # OCR read III as Ill
    ("IV",     40,  44,  None),
    ("V",      45,  49,  None),
    ("VI",     50,  53,  "A"),   # PDF lost the "A" drop cap
    ("VII",    54,  56,  "A"),   # PDF lost the "A" drop cap
    ("VIII",   57,  60,  None),
    ("IX",     61,  64,  None),
    ("X",      65,  68,  None),
    ("XI",     69,  73,  None),
    ("XII",    74,  77,  None),
    ("XIII",   78,  84,  None),
    ("XIV",    85,  90,  "T"),   # PDF lost the "T" drop cap
    ("XV",     91,  95,  None),
    ("XVI",    96,  99,  None),
    ("XVII",   100, 105, None),
    ("XVIII",  106, 110, None),
    ("XIX",    111, 114, None),
    ("XX",     115, 119, None),
    ("XXI",    120, 125, None),
    ("XXII",   126, 131, None),
]

# Hebrew-letter mapping kept from existing JSON
HEBREW = [
    ("א", "Aleph", "A", 1),
    ("ב", "Beth", "B", 2),
    ("ג", "Gimel", "G", 3),
    ("ד", "Daleth", "D", 4),
    ("ה", "Heh", "H", 5),
    ("ו", "Vav", "V", 6),
    ("ז", "Zayin", "Z", 7),
    ("ח", "Cheth", "Ch", 8),
    ("ט", "Teth", "T", 9),
    ("י", "Yod", "Y", 10),
    ("כ", "Kaph", "K", 20),
    ("ל", "Lamed", "L", 30),
    ("מ", "Mem", "M", 40),
    ("נ", "Nun", "N", 50),
    ("ס", "Samekh", "S", 60),
    ("ע", "Ayin", "O", 70),
    ("פ", "Peh", "P", 80),
    ("צ", "Tzaddi", "Tz", 90),
    ("ק", "Qoph", "Q", 100),
    ("ר", "Resh", "R", 200),
    ("ש", "Shin", "Sh", 300),
    ("ת", "Tav", "Th", 400),
]

# Common OCR joins in this book (typographic italics + tight kerning drops the space)
OCR_FIXES = [
    # Where the italicized word ran into the next word
    (r"\boffor\b", "of for"),
    (r"\boffor bidden\b", "of forbidden"),
    (r"\boffor bidden\b", "of forbidden"),
    (r"\bofforbidden\b", "of forbidden"),
    (r"\bThefirst\b", "The first"),
    (r"\bthefirst\b", "the first"),
    (r"\bofMethusael\b", "of Methusael"),
    (r"\bbroughtforth\b", "brought forth"),
    (r"\bissuedforth\b", "issued forth"),
    (r"\bsprangforth\b", "sprang forth"),
    (r"\bcameforth\b", "came forth"),
    (r"\bcalledforth\b", "called forth"),
    (r"\bgoingforth\b", "going forth"),
    (r"\bgoforth\b", "go forth"),
    (r"\bbeforeher\b", "before her"),
    (r"\bafterher\b", "after her"),
    (r"\bwithher\b", "with her"),
    (r"\bunto her\b", "unto her"),
    (r"\btowardher\b", "toward her"),
    (r"\bupon her\b", "upon her"),
    (r"\bintoher\b", "into her"),
    (r"\bfromher\b", "from her"),
    (r"\bherfrom\b", "her from"),
    (r"\binhisprayer\b", "in his prayer"),
    (r"\bhefalls\b", "he falls"),
    (r"\bhefrom\b", "he from"),
    (r"\bherbirth\b", "her birth"),
    (r"\bhe has sometimes\b", "he has sometimes"),
    (r"\bbefulfilled\b", "be fulfilled"),
    (r"\bwas bom\b", "was born"),
    (r"\bhalftimes\b", " and a half times"),
    (r"three and one\s+halftimes", "three and one-half times"),
    (r"\bcoib\b", "coil"),
    (r"\bfashioned\b", "fashioned"),
    (r"\bhaveforgotten\b", "have forgotten"),
    (r"\bloveinhisprayer\b", "love in his prayer"),
    # Standalone cleanup: "Samael" italicized passages often run together
    (r"\bhewandered\b", "he wandered"),
    (r"\bisknown\b", "is known"),
    # "even beside divine Autogene himself What has been" — missing period
    (r"(\bdivine Autogene himself) (What has been)", r"\1. \2"),
    # More compounds collected from the full-text review
    (r"\bshewas\b", "she was"),
    (r"\banduse\b", "and use"),
    (r"\ballwhite\b", "all white"),
    (r"\brefrainedfrom\b", "refrained from"),
    (r"\bandthirty\b", " and thirty"),
    (r"\bfornicationamong\b", "fornication among"),
    (r"\bwasZillah\b", "was Zillah"),
    (r"\bofBarbelonfrom\b", "of Barbelon from"),
    (r"\bher face\b", "her face"),
    (r"\bravish her\b", "ravish her"),
    (r"\bonehundred\b", "one hundred"),
    (r"\banger burned\b", "anger burned"),
    (r"\bfallen upon\b", "fallen upon"),
    (r"\bwept bitterly\b", "wept bitterly"),
    (r"\bmadeknown\b", "made known"),
    (r"\bbom\b", "born"),
    (r"\bfoundhis\b", "found his"),
    (r"\bfollowhis\b", "follow his"),
    (r"\bconnection with\b", "connection with"),
    # Smart double quotes sometimes converted to straight — normalize both ways
    (r"''", "\""),
    # More compounds caught in the audit pass
    (r"\bbutforgetfulness\b", "but forgetfulness"),
    (r"\bdescentfrom\b", "descent from"),
    (r"\bthefullness\b", "the fullness"),
    (r"\bpreparedfor\b", "prepared for"),
    (r"\baflame\b", "a flame"),
    (r"\banger burned\b", "anger burned"),
    # Residual OCR noise sequences (repeated circle/dot characters from diagrams)
    (r"\b[ao][aoc]{6,}\w*\b", ""),
    (r"\boo{4,}\b", ""),
    (r"\bc[oc]{6,}\w*\b", ""),
    (r"\ba{6,}\b", ""),
    # Lines that became empty after noise removal — collapse the whitespace that's left
    (r"\s{2,}", " "),
]

# Pattern for unreadable mangled-Hebrew lines in the PDF. These lines are mostly
# made of non-alphabetic punctuation, digits, and short letter clumps with
# superscript markers. They are not Tyson's English text — they are the OCR's
# failed attempt to read Hebrew glyphs. We replace them with a clear marker.
RE_GARBAGE_HEBREW = re.compile(
    r"""^[\s\"\'\(\)\[\]\{\}\|\*\,\.\!\?\-\–\—\:\;\^\~\`\\\/\<\>\=\+\#\@\&\%\$\d]*
        [A-Za-z\"\'\*\,\.\s\d\^\|\(\)\[\]\{\}\|\*\,\.\!\?\-\–\—\:\;\^\~\`\\\/\<\>\=\+\#\@\&\%\$]{3,120}$""",
    re.VERBOSE,
)

# More targeted: detect lines where the ratio of non-alphabetic to total characters
# is high AND the line contains short uppercase clumps with numbers (footnote markers).
# Characteristic Hebrew transliteration tokens used by Tyson for sacred names.
# When a line has 3+ of these it's a transliteration footnote, not prose.
HEBREW_TRANSLIT_TOKENS = {
    "IHV", "IVH", "HIV", "HVI", "VIH", "VHI",  # permutations of Tetragrammaton letters
    "IHVH", "YHVH", "ShDI", "AMTh", "AHIH", "ShDY",
    "SNVI", "SNSNVI", "SMNGLVPh", "Senoi", "Sansenoi", "Samangeloph",
    "BIMAMN", "HThNIN", "AShR", "GMITTVN", "LVIThN", "NChSh",
    "BChRBV", "HQShH", "VHGDVLH", "VHChZQH", "AaQLThVN", "Gamitton",
    "Shaddai", "Ehyeh", "Yahweh", "Jehovah", "Adonai", "QRV", "ShTU",
    "BRCh", "VAaL", "VHRG", "Varoq", "Vatosh", "Heywah", "Qaru",
}

def _translit_token_count(s: str) -> int:
    tokens = re.findall(r"[A-Za-z]{2,}", s)
    return sum(1 for t in tokens if t in HEBREW_TRANSLIT_TOKENS)


def is_mangled_hebrew(line: str) -> bool:
    s = line.strip()
    if len(s) < 4:
        return False
    # Strong signal: 2+ distinctive transliteration tokens
    if _translit_token_count(s) >= 2:
        return True
    # If line is mostly English words, it's fine.
    words = re.findall(r"[A-Za-z]{3,}", s)
    english_chars = sum(len(w) for w in words)
    if english_chars / max(len(s), 1) > 0.55:
        return False
    # Signature of mangled Hebrew: lots of punctuation, digits, caps with numbers
    # like "MOO DT,2.J" or "*I3003.3" or "O^H3m.4"
    punct_digit_hits = len(re.findall(r"[\^\*\|\\\/\(\)\[\]\{\}\"\'\`\~\,\.]{1,}|\d", s))
    caps_with_digit = bool(re.search(r"[A-Z]{1,4}\d+\.?\s?", s))
    short_clumps = len(re.findall(r"\b[A-Za-z]{1,2}\d*\b", s))
    if caps_with_digit and (punct_digit_hits >= 3 or short_clumps >= 3):
        return True
    # Lines that look like pure symbol soup
    if re.fullmatch(r"[\s\W\d]+", s):
        return True
    return False


# Inline garbage patterns — short strings embedded in otherwise valid text.
INLINE_GARBAGE_PATTERNS = [
    # Magic square / diagram repeated-letter noise
    r"\b[ao][aoc]{6,}[a-z]*\b",
    r"\bo{4,}\b",
    r"\bc[oc]{6,}[a-z]*\b",
    r"\ba{6,}\b",
    # Mangled-Hebrew superscript markers embedded in prose:  "10*0^", "*Ht77", "/*HTS7", "133.\"", "l6", "n.17"
    r"\d+\*\d*\^?",
    r"\*[A-Z][a-z]?\d+",
    r"\/\*[A-Z]+\d+",
    r"\b[a-z]?\d+\s*[\"']",
    r"\bn\.\s*\d{1,3}\b",
    # Hebrew transliteration footnote fragments left inline:
    # "'IHV 2hiv 3vih 4ivh 5hvi 6vhi 7ih \"ihvh 9ihvh"
    # " IHVH 2 ,IH 2 2 IHVH"
    # " LVIThN 6 NChSh BRCh 7 VAaL LVIThN 8 NChSh AaQLThVN VHRG ATh"
    r"(\s['\"]?[A-Z]{2,}[a-z]{0,3}(\s+\d+)?){3,}",
    # Literal strings seen in the audit output
    r"\bNIN AShR [^.]*?(\d\s)+[A-Z]{1,4}\b",
    r"\bSMNGLVPh[^.]*?\bShaddai[^.]*?(\d\s)*[A-Z]{1,4}\b",
    r"\bLVIThN\b.*?\bVHRG ATh\b",
    # Mangled Hebrew inline with typical shapes: "MOO DT,2.J", "OH 3im.9", "^y.5", "^yi.7", "pO^py 1703.8"
    r"[A-Za-z\^]*\^[A-Za-z]*[,.]?\d*\.?\d*",
    r"\b[A-Z]{2,4}\s+[A-Z]{1,3}[,.]?\d+\.?[A-Z]?\b",
    r"\b[A-Z]{2}\s+\d{3,4}[,.]?\d*\b",
    r"\bOH\s+\d+[a-z]+[,.]?\d+\b",
    r"\bpO\S{1,6}\s+\d+\.\d+\b",
    # Specific transliteration-run pattern:  "HT' / PH,2 m,3 / gather"  -- mangled between legit words
    r"[A-Z]{1,2}['\"]?\s*/\s*[A-Z]{1,3}[,.]?\d*(\s+[a-z]{1,2}[,.]?\d*)*\s*/?",
    # Mixed-case Tetragrammaton permutations (lowercase "ihv", "vih", "ivh", "hvi", "vhi", "ih", "hiv")
    r"(\s['\"]?\d*(?:hiv|vih|ivh|hvi|vhi|ih|ihvh|iav)(?:\s+\d*[a-z]{2,4}){2,})",
    # Runs of vowel-only garbage ("i i i i", "e e e e", "a a a a")
    r"(?:\s+[iaeou]){4,}",
    r"\b[iaeou]{6,}\b",
    # OCR-corrupt page numbers at end of paragraph: standalone "lOl", " no", " in" following garbage
    r"\s+lOl\s*$",
    # Greek-vowel invocation garbage (multi-line vowels like "OOOOOOOOOO DUDDDOJU (10.0.0.0.0. (U W W C O")
    r"O{4,}\s*[A-Z]{3,}",
    r"\([0-9.]+\.\s*\(",
    r"\(U\s+W\s+W\s+C\s+O[\sCUOA-Z]+",
]

def strip_inline_garbage(text: str) -> str:
    for pat in INLINE_GARBAGE_PATTERNS:
        text = re.sub(pat, " ", text)
    # Strip clusters of known transliteration tokens embedded in prose.
    # Pattern: up to 80 chars of junk containing 2+ token hits, bounded by sentence break.
    def _drop_translit_run(match: re.Match) -> str:
        run = match.group(0)
        if _translit_token_count(run) >= 2:
            return " "
        return run
    # Greedy runs of junky translit-heavy text
    text = re.sub(
        r"(?:[\s,\.\"\'\d]*(?:[A-Z][A-Za-z]{2,8}|[A-Z]{2,}[a-z]{0,3})\s*(?:,\s*[A-Za-z]+)?){2,}",
        _drop_translit_run,
        text,
    )
    # Single stray translit tokens at end of paragraph, e.g. "... I know your IHV"
    text = re.sub(
        r"(?:\s+(?:'|\")?(?:[A-Z]{2,}[a-z]{0,3}|\d+[A-Za-z]{2,})(?:,\s*[A-Za-z]+)?){2,}\s*$",
        "",
        text,
    )
    # Collapse whitespace
    text = re.sub(r"\s{2,}", " ", text)
    # Orphan punctuation
    text = re.sub(r"\s+([,\.])", r"\1", text)
    text = re.sub(r",(\s*[,\.])", r"\1", text)
    # Trailing orphan comma/quote/paren
    text = re.sub(r"[,\s\"']+$", "", text)
    # Strip orphan page-number tails that OCR read as letter-shapes ("no"=110, "in"=111, "lOl"=101).
    # Only strip if preceded by actual punctuation (so we don't eat real words "no" or "in").
    text = re.sub(r"([.!?”\"])\s+(?:no|in|lOl|ll[oi]|ll\d)\s*$", r"\1", text, flags=re.IGNORECASE)

    # Greek-vowel invocation garbage — catches only clearly-mangled sequences.
    # Must contain MULTIPLE distinctive tokens (not individually, like "ill" which
    # appears in legitimate English words like "mill", "will", "still").
    # Distinctive tokens only: aico, eiS, aEi, EiS, (XEi, (CO, tnnru
    DISTINCTIVE = r"(?:aico|eiS|aEi|EiS|\(XEi|\(CO|tnnru)"
    text = re.sub(
        rf"(?:\s*[mM]?\s*\([0-9.]+[,.]?)?\s*(?:,\s*)?(?:\btea\s*,\s*)?{DISTINCTIVE}(?:[\s,.]+(?:tea|aico|eiS|ova|ill|eee|ooo|tnnru|aEi|EiS|\(XEi|\(CO))+",
        " [vowel-name invocation — see print edition]",
        text,
    )

    # Collapse any remaining 3+ single-vowel-letter runs (" i i i i " / " e e e e ")
    text = re.sub(r"(?:\s+[iaeouIAEOU]){3,}\b", " ", text)

    # Collapse "On the [ordinal] strip write: [GARBAGE]" sequences into an editorial note.
    # The whole block (first through eleventh) is a list of Hebrew words that OCR destroyed.
    text = re.sub(
        r"On the first strip write:.+?(?=\s[A-Z][a-z]{3,}\s+(?:a|the|he|she|it|they)\b|$)",
        "The eleven strips are each inscribed with a sacred Hebrew word — the list of inscriptions is given in the print edition. ",
        text,
        flags=re.DOTALL,
    )

    # Gesture-direction labels like "HP,4 PH,5 PH,6/ gather you in the left hand"
    # These are Hebrew directional names the OCR mangled; strip them but keep the English gloss.
    text = re.sub(
        r"[A-Z]{1,3}\s*,\s*\d+(?:\s*[,/\s]\s*[A-Z]{1,3}\s*,?\s*\d+)*\s*/?\s*",
        "",
        text,
    )

    # Trailing translit chain: "I know your 'IHV \"ihvh 9ihvh" or "I know your true name, verily your name is: [tokens]"
    # Strip runs of mixed-case translit tokens attached to the end.
    text = re.sub(
        r"\s*['\"]?[IVHh]{2,4}[\"']?(?:\s+\d*[IVHh]{2,4})+\s*['\"]?\s*$",
        "",
        text,
    )
    # Strip any remaining "9ihvh" / "'IHV" trailing tokens
    text = re.sub(r"\s+\d*['\"]?[ivhIVH]{2,5}['\"]?\s*$", "", text)

    # Final whitespace/punctuation cleanup
    text = re.sub(r"\s{2,}", " ", text)
    text = re.sub(r"\s+([,\.;:])", r"\1", text)
    text = re.sub(r"[,\s]+$", "", text)

    # Targeted post-process cleanups for known surviving fragments
    # "for you.,3 / gather" → "for you. Gather"
    text = re.sub(r"\.\s*[,;]\s*\d+\s*/\s*", ". ", text)
    # Mangled Hebrew clusters with footnote markers: "' pBC'nrn,5 rr.6"
    # Pattern: apostrophe/quote + mixed-case garbage + comma-digit
    text = re.sub(r"[''\"]\s*[a-zA-Z]{1,4}[''\"]?[a-zA-Z]{1,4},\d+\s+[a-z]{1,3}\.\d+", " ", text)
    text = re.sub(r"(?<=\w\s)[a-zA-Z'\"]{2,6}[,.]\d+(?:\s+[a-zA-Z'\"]{2,6}[,.]\d+){1,}", " ", text)
    # Orphan short mixed-case clumps with leading apostrophe/quote before English resumes:
    # "Powerful ' pBC He looks" → "Powerful. He looks"
    text = re.sub(
        r"[''\"]\s*[a-zA-Z]{2,5}(?=\s+[A-Z][a-z])",
        ".",
        text,
    )
    # Stray "pBC" and similar 3-char mixed-case tokens left alone
    text = re.sub(r"(?<=\s)[a-z][A-Z]{2}(?=\s)", "", text)
    text = re.sub(r"(?<=\s)[A-Z][a-z][A-Z](?=\s)", "", text)
    # Stray "fP / m imil V9." type fragments (Hebrew gesture direction labels).
    # Every token is word-boundaried so we don't chew parts of English words.
    text = re.sub(r"(?:\s|^)(?:\bfP\b|\bHP\b|\bPH\b|\bHT\b|\biV\b|\bmil\b|\bV\d+\b|\bm\s+i[mivl]\b)\s*[/.,\s]*\d*(?:\s+(?:\bfP\b|\bHP\b|\bPH\b|\bHT\b|\biV\b|\bmil\b|\bV\d+\b|\bm\s+i[mivl]\b)\s*[/.,\s]*\d*)*\.?", " ", text)
    # "I know your 'IHV \"ihvh" trailing fragments after restoration failed
    text = re.sub(r"\s+['\"]?\d*[IVHivh]{3,6}['\"]?(?:\s+['\"]?\d*[IVHivh]{2,6}['\"]?)*\s*$", "", text)
    # Stray "midst oftheArchons" → "midst of the Archons"
    text = re.sub(r"\boftheArchons\b", "of the Archons", text)
    text = re.sub(r"\boftheLilim\b", "of the Lilim", text)

    text = re.sub(r"\s{2,}", " ", text).strip()
    return text


# Hebrew transliteration footnote block (bottom of a page). Looks like:
#   'BIVMHHVA " IPQDIHVH 3 BChRBV HQShH 4 VHGDVLH VHChZQH
# These CAN be kept and reformatted, but for now we strip them and note the source.
RE_TRANSLIT_FOOTNOTE = re.compile(
    r"^\s*['\"]?[A-Z][A-Za-z]{3,}\s+['\"]?\s*[A-Z][A-Za-z]{3,}(\s+\d+\s+[A-Z][A-Za-z]{2,}){2,}"
)

RUNNING_HEADS = {"LIBER LILITH", "THE GRIMOIRE", "Part One", "LIBER LILITH: THE GRIMOIRE"}

# A "page number" line is just digits, possibly with whitespace.
RE_PAGENUM = re.compile(r"^\s*\d{1,4}\s*$")
# A drop cap is a single capital letter (or small cluster) on its own line.
RE_DROPCAP = re.compile(r"^[A-Z][a-z]?$")


def clean_page_text(text: str, strip_roman: str | None = None) -> str:
    """Remove running headers, page numbers, mangled Hebrew, and the chapter's roman numeral."""
    out_lines: list[str] = []
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            out_lines.append("")
            continue
        if line in RUNNING_HEADS:
            continue
        if RE_PAGENUM.match(line):
            continue
        if strip_roman is not None and line == strip_roman:
            continue
        # Drop the mangled-Hebrew garbage lines (OCR couldn't read Hebrew, produced noise)
        if is_mangled_hebrew(line):
            continue
        # Drop the transliteration footnote blocks at page bottoms
        if RE_TRANSLIT_FOOTNOTE.match(line):
            continue
        out_lines.append(line)
    return "\n".join(out_lines)


def extract_dropcap(lines: list[str]) -> tuple[str | None, list[str]]:
    """If the first non-empty line is a single capital letter, treat it as drop-cap.

    Return (dropcap_letter_or_None, remaining_lines_without_dropcap_line).
    """
    i = 0
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i < len(lines) and RE_DROPCAP.match(lines[i].strip()):
        dropcap = lines[i].strip()
        return dropcap, lines[:i] + lines[i + 1 :]
    return None, lines


def join_soft_wrapped(lines: list[str]) -> list[str]:
    """Merge soft-wrapped lines into paragraphs. Blank line = hard break."""
    paragraphs: list[str] = []
    buf: list[str] = []
    for line in lines:
        s = line.strip()
        if not s:
            if buf:
                paragraphs.append(" ".join(buf).strip())
                buf = []
            continue
        buf.append(s)
    if buf:
        paragraphs.append(" ".join(buf).strip())
    return [p for p in paragraphs if p]


def repair_ocr(text: str) -> str:
    for pat, repl in OCR_FIXES:
        text = re.sub(pat, repl, text)
    # Normalize multi-space to single space
    text = re.sub(r"[ \t]+", " ", text)
    return text


def build_chapter_paragraphs(roman_ocr: str, start: int, end: int, override_dropcap: str | None = None) -> list[str]:
    all_text_lines: list[str] = []
    first_page = True
    for page_num in range(start, end + 1):
        p = PAGES_DIR / f"page_{page_num:03d}.txt"
        if not p.exists():
            continue
        raw = p.read_text(encoding="utf-8")
        cleaned = clean_page_text(raw, strip_roman=roman_ocr if first_page else None)
        first_page = False
        all_text_lines.extend(cleaned.splitlines())
        all_text_lines.append("")  # ensure page boundary is a paragraph break

    # Detach drop cap from the very top of the chapter
    dropcap, lines = extract_dropcap(all_text_lines)

    # If the PDF lost the drop cap entirely, use the override
    if dropcap is None and override_dropcap:
        dropcap = override_dropcap

    # Collapse into paragraphs
    paragraphs = join_soft_wrapped(lines)

    # Prepend the drop cap onto the first paragraph
    if dropcap and paragraphs:
        first = paragraphs[0]
        # If the first word already starts with the dropcap letter, don't double it
        if first and first[:1].lower() != dropcap.lower():
            if first and first[0].islower():
                paragraphs[0] = dropcap + first
            else:
                paragraphs[0] = dropcap + " " + first

    # OCR repair on each paragraph
    paragraphs = [repair_ocr(p) for p in paragraphs]
    # Strip inline garbage (residual Hebrew footnote fragments, diagram noise)
    paragraphs = [strip_inline_garbage(p) for p in paragraphs]

    # Trim empties
    paragraphs = [p for p in paragraphs if p.strip()]
    return paragraphs


def main() -> None:
    chapters_out = []
    for idx, (roman, start, end, override_dropcap) in enumerate(CHAPTERS):
        heb, name, translit, gematria = HEBREW[idx]
        paragraphs = build_chapter_paragraphs(roman, start, end, override_dropcap)
        chapters_out.append({
            "hebrew": heb,
            "name": name,
            "translit": translit,
            "gematria": gematria,
            "paragraphs": paragraphs,
        })
        first_40 = (paragraphs[0][:80] if paragraphs else "—").replace("\n", " ")
        print(f"Ch {idx+1:02d} ({heb} {name}): {len(paragraphs)} paragraphs — opens: {first_40!r}")

    doc = {
        "title": "Liber Lilith",
        "subtitle": "The Grimoire",
        "attribution": "Revealed in dream by the Queen of the Harlots unto Lamech, son of Methusael, son of Mehujael, son of Irad, son of Enoch, son of Cain the Accursed — written upon papyrus in the script of the angels, sealed in clay beneath the earth of Canaan, and copied faithfully for the consolation of his solitude by Solon of Alexandria.",
        "opening": "Hearken unto me and I will teach you wisdom that has not been spoken since the beginning.",
        "openingAttr": "Lilith, unto Lamech",
        "prologue": [
            "LIBER UMBRARUM · TOMUS PRIMUS",
            "THE GRIMOIRE",
            "Being the mysteries of forbidden knowledge revealed by Lilith, Queen of the Harlots, unto Lamech, son of Methusael, in the line of Cain the Accursed — and copied faithfully from the script of the angels by Solon of Alexandria.",
            "COMPILED · TRANSLATED · BOUND ❦",
            "Hearken unto me and I will teach you wisdom that has not been spoken since the beginning.",
            "— LILITH, UNTO LAMECH",
        ],
        "chapters": chapters_out,
    }

    OUT_JSON.write_text(json.dumps(doc, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nWrote {OUT_JSON}")


if __name__ == "__main__":
    main()
