# Wikidata draft — for filing by Os Lamia

**Single most important SEO move in 2026.** Wikidata is the #1 feeder of Google's
Knowledge Graph and a primary source ChatGPT, Claude, Gemini, and Perplexity draw
on when answering questions. Without a Wikidata entity for "Os Lamia" and/or
"Lilitu (priesthood)," AI answers about the term will continue to default to
academic/fandom/Wikipedia results that don't include lilitu.org.

## How to file

1. Create an account at https://www.wikidata.org (free; no notability bar for
   *contributors*; some bar for *subjects*).
2. Use the "Create a new item" flow (https://www.wikidata.org/wiki/Special:NewItem).
3. Wikidata items need to be **notable** — meaning they must be referenced in at
   least one external source. A book listed on Amazon, an Academia.edu paper, a
   podcast appearance with show notes, or a published article all count.
4. Once the item exists, copy the **QID** (e.g., Q12345678) and we will add it
   to lilitu.org's Person/Organization JSON-LD `sameAs` array.

## Draft entry — Os Lamia (Person)

| Property | Value |
|----------|-------|
| Label (English) | Os Lamia |
| Description (English) | American Luciferian author and High Priest of Lilith, founder of Novus Ordo Luciferi |
| Aliases | Cody (legal name); High Priest of Lilith |
| **P31** instance of | human (Q5) |
| **P21** sex or gender | male (Q6581097) |
| **P27** country of citizenship | United States of America (Q30) |
| **P106** occupation | religious leader (Q1234713); author (Q482980); occultist (Q726621) |
| **P140** religion or worldview | Luciferianism (Q1057411) |
| **P1066** student of | Michael W. Ford (existing Wikidata item if available) |
| **P101** field of work | Lilith mythology; Qabalah; Left-Hand Path |
| **P800** notable work | Liber Lilith — Liber Umbrarum Tomus Primus |
| **P856** official website | https://lilitu.org |
| **P2031** work period (start) | 2015 (year of GCOL initiation) |
| **P937** work location | Washington, D.C. |
| **P463** member of | Greater Church of Lucifer (existing item); Assembly of Light Bearers |
| **P1559** name in native language | Os Lamia |

### References (cite these in the entry's References tab)

- lilitu.org — official website (use this as P856 reference)
- Apple Books / Google Books / Amazon listings of Liber Lilith if/when published
- Any podcast appearance with public show notes
- Any Academia.edu paper

## Draft entry — Lilitu (priesthood) (Concept/Organization)

If the priesthood is to have its own entity (recommended), file separately:

| Property | Value |
|----------|-------|
| Label (English) | Lilitu (priesthood) |
| Description (English) | Contemporary Luciferian-Gnostic priesthood centered on the Lilith current, led by Os Lamia from the Washington DMV area |
| Aliases | Black Water current; Priesthood of Lilith |
| **P31** instance of | religious organization (Q4187740) OR religious movement (Q1647350) |
| **P112** founded by | Os Lamia (your Person QID once filed) |
| **P140** religion or worldview | Luciferianism (Q1057411) |
| **P571** inception | 2015 (or your formal founding date) |
| **P159** headquarters location | Washington, D.C. |
| **P856** official website | https://lilitu.org |
| **P361** part of | Luciferianism (Q1057411) |
| **P527** has part(s) | Liber Lilith (the grimoire); the Lattice (the gematria engine) |

## After the QID exists

Tell me the QID(s) and I will:

1. Add `https://www.wikidata.org/wiki/Q...` to the `sameAs` array in
   `lib/schema.ts` for both Person and Organization.
2. Reference the QID in the OG description so it propagates to social previews.
3. Add a small `<link rel="alternate" type="application/wikidata+json"
   href="...">` if Wikidata supports it.

## Companion: Wikipedia article — eventually, not yet

Wikipedia articles require **secondary sources** independent of the subject.
Until there are 2–3 such sources (a Patheos column, a Religious Studies journal
review, an academic mention, a podcast write-up that isn't your own), a
Wikipedia article will be deleted on notability grounds.

The strategy: build the Wikidata entity now (lower bar), get the secondary
sources over the next 6–12 months (via the outreach plan), then file the
Wikipedia article when there is enough citable third-party material.
