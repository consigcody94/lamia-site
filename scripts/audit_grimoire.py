"""Audit the rebuilt grimoire JSON for residual OCR issues."""
import json, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

d = json.load(open(r"C:/Users/Ajs/Desktop/lamia-site/lib/liber-lilith.json", encoding="utf-8"))

# Load an English word list from a simple dictionary for compound detection.
# Without a dictionary, use a heuristic: very long single words are suspicious.
suspect_words = {}
for ci, ch in enumerate(d["chapters"]):
    for pi, p in enumerate(ch["paragraphs"]):
        # Suspicious: lowercase-only runs 11+ chars
        for m in re.finditer(r"\b[a-z]{11,}\b", p):
            w = m.group()
            suspect_words.setdefault(w, []).append((ci + 1, pi))

# Filter out known-OK long words
OK_LONG = {
    "beginning", "understanding", "unspeakable", "unknowable", "concealed",
    "everflowing", "foreknowledge", "heavenly", "foreshadowed", "proclaimed",
    "blasphemed", "imprudent", "incompleteness", "throughout", "magnificence",
    "splendour", "lovemaking", "countenance", "intelligence", "seductions",
    "firmament", "deathless", "wickedness", "illuminated", "interceded",
    "whispered", "consummation", "continually", "compassion", "appearance",
    "appearances", "transformed", "transgression", "firstborn", "menstruous",
    "menstruation", "voluptuous", "impregnated", "congregation", "sovereign",
    "resplendent", "companions", "bedchamber", "fornication", "generations",
    "copulation", "passionate", "inflammation", "pomegranate", "forbidden",
    "everlasting", "perversity", "circumstance", "circumstances", "inhabited",
    "forbearance", "perpetual", "enveloped", "resurrected", "perpetually",
    "ineffable", "innumerable", "inexpressible", "extraordinary", "serpentine",
    "penitence", "deliverance", "witnessing", "recognition", "insoluble",
    "considered", "confinement", "consolation", "expectation", "instruction",
    "importance", "immediately", "invocation", "invocations", "banishing",
    "extraction", "experience", "experiences", "establishing", "confinement",
    "appearances", "wilderness", "brightness", "cleanliness", "openness",
    "inscription", "inscriptions", "description", "descriptions", "quickening",
    "strangling", "enumerating", "intensifies", "knowledge", "punishing",
    "thundering", "consecrating", "congregating", "consummating", "propagate",
    "propagated", "penetrating", "penetration", "meditation", "meditations",
    "intoxicated", "intoxication", "worshipped", "worshippers", "ministering",
    "pestilence", "omniscient", "suppression", "suppressions", "satiated",
    "satisfaction", "unsatisfied", "unquenched", "unquenchable", "perpetuated",
    "deceitful", "possessed", "possession", "diminished", "diminishment",
    "misfortune", "misfortunes", "beneficence", "completeness", "innocently",
    "contemptible", "disfigured", "mournful", "mournfully", "powerful",
    "powerfully", "heightened", "vehement", "vehemently", "devastation",
    "disasters", "wearying", "wearied", "coverings", "multitude", "multitudes",
    "immortal", "immortals", "immortality", "generation", "contentment",
    "complement", "complementary", "inhabitants", "dwellings", "dwelling",
    "pilgrimage", "offerings", "offering", "sacrifices", "sacrifice",
    "ceremonies", "ceremonial", "ceremonially", "ceremonial", "intercourse",
    "debauchery", "debaucheries", "encompassing", "encompassed", "circumstances",
    "encompass", "entwined", "encounter", "encountered", "encountering",
    "abandoned", "abandonment", "abandoning", "discover", "discovery",
    "discovers", "discovered", "discovering", "wickedness", "corruption",
    "darkness", "immediate", "remarkable", "conversation", "conversations",
    "contentment", "discontentment", "virginity", "demonstrate", "demonstrated",
    "demonstrating", "abomination", "abominations", "anointed", "anointing",
    "anointment", "anointments", "remembrance", "remembrances", "remembering",
    "descending", "descended", "descending", "descendants", "expansion",
    "expanding", "inexhaustible", "impatient", "impatiently", "impossibility",
    "eternally", "eternity", "unbroken", "unprotected", "unprotecting",
    "approaching", "approached", "approach", "approaches", "supplication",
    "supplications", "attendants", "attending", "attended", "contemplate",
    "contemplation", "contemplated", "contemplating", "contemplative",
    "obliteration", "obliterate", "obliterated", "obliterating", "substance",
    "substances", "permanence", "impermanence", "unconditional", "conditional",
    "preparation", "preparations", "prepared", "preparing", "innumerable",
    "overwhelming", "overwhelmed", "overwhelmingly", "commandments", "commanded",
    "instruction", "instructions", "instructed", "instructing", "prescriptions",
    "prescription", "prescribed", "prescribing", "pronouncement", "pronouncements",
    "pronounced", "pronouncing", "expressions", "expression", "expressed",
    "expressing", "commandment", "nevertheless", "whichsoever", "whatsoever",
    "whensoever", "wheresoever", "thereafter", "everything", "nothing",
    "something", "undertaking", "undertakings", "undertaken", "accomplished",
    "accomplishment", "accomplishing", "accompaniment", "accomplishments",
    "assembled", "assembling", "assemblage", "assemblages", "monstrous",
    "monstrously", "monstrosity", "monstrosities", "compulsion", "compulsions",
    "compulsive", "compulsively", "conceivable", "inconceivable", "inconceivably",
    "respectively", "respective", "unrespectable", "vessel", "vessels",
    "conquered", "conquering", "conqueror", "conquerors", "worshipping",
    "solemnity", "solemnly", "spirits", "demonstrated", "seduction", "seductions",
    "seductive", "seductively", "sanctified", "sanctification", "sanctifying",
    "unsanctified", "companionship", "relationships", "relationship",
    "unprecedented", "unprecedentedly", "procreation", "procreating",
    "reproduction", "reproductions", "reproducing", "reproductive",
    "fructified", "fructifying", "condescended", "condescending", "condescension",
    "perpetuating", "perpetuation", "perpetuate", "perpetuated", "perpetually",
    "transformations", "transformation", "hospitality", "hospitable",
    "unrecognizable", "unrecognized", "recognized", "recognizing", "recognizable",
    "recognition", "establishment", "establishments", "established", "establishing",
    "proclamation", "proclamations", "proclaiming", "proclaimed", "proclaims",
    "exhortation", "exhortations", "exhorted", "exhorting", "strenuously",
    "strenuous", "resolutely", "resolute", "resolving", "resolved", "resolves",
    "unflagging", "unflagginly", "transcended", "transcendent", "transcendence",
    "transcendental", "transcending", "excellent", "excellently", "excellence",
    "excellences", "majestic", "majestically", "majesty", "majesties",
    "omnipotence", "omnipotent", "omnipresent", "omnipresence", "omniscience",
    "superior", "superiority", "superiors", "superlative", "superlatively",
    "inferiority", "inferiorities", "uncrowned", "uncrowning", "unwatered",
    "unwavering", "unwaveringly", "conjunction", "conjunctions", "conjunct",
    "disjunction", "disjunctions", "conjugation", "conjugations", "conjugal",
    "continuing", "continue", "continues", "continuity", "continuously",
    "continuation", "continuations", "continental", "discontent", "discontented",
    "discontentment", "discontinuity", "discontinued", "discontinuing",
    "sufficiency", "insufficient", "sufficiency", "proficiency", "inefficiency",
    "efficiency", "efficient", "efficiently", "inefficiently", "omnipresent",
    "omnipresence", "omniscience", "omniscient", "commiseration", "commiserated",
    "commiserating", "marketplace", "marketplaces", "threshhold", "threshold",
    "thresholds", "crossroads", "outpouring", "outpourings", "outpoured",
    "downpouring", "downpourings", "downpoured", "purification", "purifications",
    "purified", "purifying", "unpurified", "defilement", "defilements", "defiled",
    "defiling", "unquestionable", "unquestionably", "questionable", "questionably",
    "inscription", "inscriptions", "invocation", "invocations", "provocation",
    "provocations", "provocative", "provocatively", "evocation", "evocations",
    "transmigration", "transmigrations", "transmigrated", "transmigrating",
    "interpretation", "interpretations", "interpreting", "interpreted",
    "unnoticed", "unnoticeable", "unnoticeably", "undisturbed", "undisturbing",
    "inexhaustibly", "inexhaustible", "undefeated", "undefeatable", "undefeat",
    "untroubled", "untroubling", "untroubled", "disturbed", "disturbance",
    "disturbances", "disturbing", "undisturbed", "disagreement", "disagreements",
    "disagree", "disagreed", "disagreeing", "disagreeable", "disagreeably",
    "extinguished", "extinguish", "extinguishes", "extinguishing",
}

filtered = {w: locs for w, locs in suspect_words.items() if w not in OK_LONG}
print(f"Found {len(filtered)} suspect long words (possible joins):")
for w in sorted(filtered.keys()):
    print(f"  {w}  (at {filtered[w][:3]}{'...' if len(filtered[w])>3 else ''})")

# Also find lines with unusual punctuation patterns (remaining garbage)
print("\n\nLines with suspicious symbol density:")
for ci, ch in enumerate(d["chapters"]):
    for pi, p in enumerate(ch["paragraphs"]):
        # Find substrings with unusual punctuation runs
        for m in re.finditer(r'["\'\*\^\|\\/]{2,}\S*|\S*[0-9]{2,}\S*', p):
            s = m.group()
            if len(s) > 3 and len(s) < 40:
                # Ignore legit multi-digit numbers from Tyson (e.g., "1,000")
                if re.fullmatch(r"[\d,\.]+", s):
                    continue
                print(f"  Ch{ci+1} p{pi}: {s!r}")

# Final: check any paragraph ending mid-sentence (no period/exclamation/question mark)
print("\n\nParagraphs not ending in terminal punctuation:")
for ci, ch in enumerate(d["chapters"]):
    for pi, p in enumerate(ch["paragraphs"]):
        if p and p[-1] not in ".!?\"':":
            print(f"  Ch{ci+1} p{pi} (last 60): ...{p[-60:]!r}")
