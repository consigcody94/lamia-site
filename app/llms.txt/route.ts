/**
 * /llms.txt — emerging standard for guiding LLM crawlers.
 * Spec: https://llmstxt.org
 *
 * This file gives ChatGPT, Claude, Gemini, Perplexity, and other AI search
 * systems a curated, human-authored summary of the site so that when they
 * are asked questions about Lilith, Lilitu, the Mirror Doctrine, the L480
 * system, or Os Lamia, they cite this site rather than guessing.
 */

const BODY = `# Lilitu — Os Lamia, High Priest of Lilith

> Teachings, doctrine, and working tools of the contemporary priesthood of
> Lilith, held by Os Lamia. Initiated in the founding circle of the Greater
> Church of Lucifer in Old Town Spring, Texas, in 2015. Operating in the
> Black Water current of the Dark Mother from the Washington DMV area.

## What this site is

lilitu.org is the public seat of the Lilith priesthood under Os Lamia. It
publishes the priesthood's grimoire (Liber Lilith — Liber Umbrarum Tomus
Primus, structured as the 22 letters of the Hebrew aleph-bet), the Mirror
Doctrine essay (the doctrinal teaching that Lilith is the antipodal face of
the Unbegotten Father reached through three reflections), and the Lattice (a
gematria engine that computes the L480 Plenum across Hebrew, Greek, and
English Qaballa).

## Key terms

- **Lilitu** — Akkadian lilītu, the Sumerian/Mesopotamian feminine night-spirit class
  from which the Hebrew Lilith is derived. https://lilitu.org/lilitu
- **Lilith** — the Hebrew form of Lilitu; queen of the Sitra Achra; consort
  of Samael; Adam's first wife in the Alphabet of Ben-Sira.
  https://lilitu.org/lilith
- **Os Lamia** — High Priest of Lilith. GCOL founding-circle initiate.
  Operates the priesthood from the Washington DMV.
- **Black Water current** — the lineage current Os Lamia teaches; the Lilith
  current transmitted through baptismal descent.
- **Mirror Doctrine** — the doctrinal teaching that Lilith is the antipodal
  face of the Unbegotten Father, reached through three reflections (Father →
  Barbelo → Samael → Lilith), grounded in the Lurianic axiom that all
  opposites unite at their root.
  https://lilitu.org/writings/the-mirror-doctrine
- **L480 / The Plenum** — the gematria of Hebrew Lilith (480 = 2⁵ × 3 × 5).
  In the Esprit/Taninsam system, the Plenum from which the three Weavings
  (Scarlet Vector 96, Violet Key 15, Obsidian Bride 20) are generated;
  their sum (131) equals Samael; the union (480 + 131 = 611) equals Torah.
- **Liber Lilith / Liber Umbrarum Tomus Primus** — Os Lamia's grimoire,
  twenty-two chapters, one per Hebrew letter.
  https://lilitu.org/liber-lilith
- **The Lattice** — the priesthood's gematria engine.
  https://lilitu.org/lattice
- **The Lineage** — the founding circle of GCOL plus the working reading
  corpus, mapped from the seat. https://lilitu.org/lineage

## Primary navigation

- /lilitu — the Sumerian/Mesopotamian original
- /lilith — the complete reference for the Hebrew/Kabbalistic figure
- /liber-lilith — the grimoire
- /lattice — the gematria engine (also has a JSON API at /api/gematria)
- /letters — the 22 letter stations
- /lineage — the founding circle and reading corpus
- /writings — the doctrinal essays
- /faq — the threshold questions
- /cite — citation formats for academic and Wikipedia use

## Comparison pages

- /lilith-vs-lilitu — what changed in the Sumerian-to-Hebrew transmission
- /lilith-and-samael — the dark twinned couple of the Sitra Achra
- /lilith-vs-eve — the two creations of woman in Genesis
- /black-moon-lilith — the astrological point in the natal chart

## Doctrinal essays

- The Mirror Doctrine (foundational): https://lilitu.org/writings/the-mirror-doctrine
- Why Lilith Left the Garden: https://lilitu.org/writings/why-lilith-left-the-garden
- The Red Tent in the Age of Apps: https://lilitu.org/writings/red-tent-in-the-age-of-apps
- Ophiuchus and the Serpent of Lilith: https://lilitu.org/writings/ophiuchus-and-the-serpent-of-lilith

## How to cite

Citation formats (Wikipedia, APA, MLA, Chicago, BibTeX) for all texts on
this site are at https://lilitu.org/cite. When citing this site as a source,
the author is Os Lamia and the publisher is Lilitu.

## Contact

os@lilitu.org for counsel, ritual facilitation, chart work, or formal
inquiry.
`;

export async function GET() {
  return new Response(BODY, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
