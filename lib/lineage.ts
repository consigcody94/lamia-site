/* ═══════════════════════════════════════════════════════════════════════
   THE LINEAGE — the Lilith corpus, mapped from the seat
   For the Lineage / Reading List page.
   ══════════════════════════════════════════════════════════════════════ */

export interface CorpusVolume {
  title: string;
  author: string;
  year?: string;
  tradition: string;
  what_it_is: string;
  how_it_lands: string;
  status: "foundational" | "operative" | "encounter" | "system" | "myth" | "scholarly" | "primary";
  link?: string;
}

export const CORPUS_MAP: CorpusVolume[] = [
  /* ───── Primary sources of the tradition ───── */
  {
    title: "Apocryphon of John",
    author: "Sethian Gnostic, anonymous",
    year: "c. 2nd century CE",
    tradition: "Sethian Gnosticism",
    what_it_is:
      "The foundational Barbeloite text. Names Barbelo as the first emanation, the Mother-Father, the supernal mirror. Identifies Yaldabaoth/Saklas/Samael as the blind demiurge.",
    how_it_lands:
      "The first reflection in the Mirror Doctrine. Read this before anything modern. Preserved in the Nag Hammadi codices.",
    status: "primary",
  },
  {
    title: "Hypostasis of the Archons",
    author: "Sethian Gnostic, anonymous",
    year: "c. 3rd century CE",
    tradition: "Sethian Gnosticism",
    what_it_is:
      "Nag Hammadi Codex II,4. States plainly that Samael is the blind god, the ignorant archon. Establishes the second reflection.",
    how_it_lands:
      "Where the Sethian texts name Samael without ambiguity. Essential for the Mirror Doctrine.",
    status: "primary",
  },
  {
    title: "Treatise on the Left Emanation",
    author: "Rabbi Isaac ben Jacob ha-Kohen of Castile",
    year: "13th century",
    tradition: "Castilian Kabbalah",
    what_it_is:
      "The foundational Kabbalistic text on Samael and Lilith as the dark twinned emanation, mirroring the holy couple above. Codifies the third reflection.",
    how_it_lands:
      "Scholem's translation and commentary in *Origins of the Kabbalah* is the working English text. The seat of the Mirror Doctrine's Kabbalistic side.",
    status: "primary",
  },
  {
    title: "Zohar (Sitra Achra passages)",
    author: "Attrib. Moses de León",
    year: "c. 13th century",
    tradition: "Spanish Kabbalah",
    what_it_is:
      "The greatest book of the Kabbalah. The Sitra Achra and Lilith passages establish her as untouchable by lower forces and as consort of Samael.",
    how_it_lands:
      "Walk it slowly. The Pritzker translation is the modern standard. Tiqqunei ha-Zohar adds the structural correspondences.",
    status: "primary",
  },
  {
    title: "Etz Chaim",
    author: "Chaim Vital, recording the Arizal",
    year: "16th century",
    tradition: "Lurianic Kabbalah",
    what_it_is:
      "The Lurianic system. Establishes the doctrine that all opposites unite at their root — kol ha-hafachim mit'achdim bi-shorsham — which is the operative axiom of the Mirror Doctrine.",
    how_it_lands:
      "Dense, technical, indispensable. The Tree of Life partzufim are how the chain works mechanically.",
    status: "primary",
  },
  {
    title: "Alphabet of Ben-Sira",
    author: "Anonymous",
    year: "8th–10th century",
    tradition: "Medieval Hebrew",
    what_it_is:
      "Preserves the older story: Lilith as Adam's first wife who refused the missionary position, spoke the Ineffable Name, and flew from Eden.",
    how_it_lands:
      "The narrative kernel of the priesthood. Short, strange, foundational.",
    status: "primary",
  },

  /* ───── Foundational modern systematizers ───── */
  {
    title: "Bible of the Adversary",
    author: "Michael W. Ford",
    year: "2007 / rev. 2015",
    tradition: "Luciferian / Left Hand Path",
    what_it_is:
      "Ford's systematic Luciferian framework. Lilith as Black Goddess of the Nightside. The grounding text from which the modern American Luciferian current was built.",
    how_it_lands:
      "My initiator's text. The lineage I was raised in. Read alongside Wisdom of Eosphoros.",
    status: "foundational",
  },
  {
    title: "Liber HVHI — Magick of the Adversary",
    author: "Michael W. Ford",
    year: "2005",
    tradition: "Luciferian / Qliphothic",
    what_it_is:
      "Ford's deep Qliphothic working manual. Sphere by sphere through the Tree of Death, Lilith at Gamaliel.",
    how_it_lands:
      "The operative companion to the Bible of the Adversary. For initiates who want the practice.",
    status: "operative",
  },
  {
    title: "Adversarial Light: Magick of the Nephilim",
    author: "Michael W. Ford",
    year: "2009",
    tradition: "Luciferian / Vampyric",
    what_it_is:
      "Lilith and Cain mythology re-cast in the Adversarial current. The Nephilim line as bearers of the dark gnosis.",
    how_it_lands:
      "Reads alongside the Cainite material in Liber Lilith. Strong on the lineage descent.",
    status: "operative",
  },
  {
    title: "Wisdom of Eosphoros",
    author: "Michael W. Ford",
    year: "2015",
    tradition: "Luciferian Philosophy",
    what_it_is:
      "The philosophical backbone of the modern Luciferian current. What we believe, why we believe it, how it differs from inverted Christianity.",
    how_it_lands:
      "If a seeker wants to understand the philosophy before the practice, this is the door.",
    status: "foundational",
  },

  /* ───── The other temples and currents ───── */
  {
    title: "Lilith: Dark Feminine Archetype",
    author: "Asenath Mason (ed.)",
    year: "2017",
    tradition: "Draconian Tradition (Temple of Ascending Flame)",
    what_it_is:
      "The most respected modern anthology on Lilith specifically. Multi-voiced practitioner essays from the Temple of Ascending Flame.",
    how_it_lands:
      "Asenath holds the Priestess seat of the contemporary international scene. Her work is rigorous and field-tested.",
    status: "encounter",
  },
  {
    title: "Rites of Lilith",
    author: "Asenath Mason",
    year: "2018",
    tradition: "Draconian Tradition",
    what_it_is:
      "Practical workings with Lilith from inside the Draconian framework.",
    how_it_lands:
      "For practitioners who want a compact, well-tested ritual sequence. Read with the Bible of the Adversary.",
    status: "operative",
  },
  {
    title: "Qabalah, Qliphoth and Goetic Magic",
    author: "Thomas Karlsson",
    year: "2009",
    tradition: "Dragon Rouge (Sweden)",
    what_it_is:
      "Karlsson is one of the few LHP authors with academic credentials (PhD in history of religions, Stockholm). His Qabalah-Qliphoth synthesis is the most rigorous in the genre.",
    how_it_lands:
      "Read for the system, not the Lilith focus. Lilith is one of many figures here, but the framework is unmatched.",
    status: "scholarly",
  },
  {
    title: "Liber Azerate",
    author: "N.A-A.218 / Frater 414, Temple of the Black Light",
    year: "2002",
    tradition: "Anti-Cosmic Gnosticism (218 Current)",
    what_it_is:
      "The most uncompromising anti-cosmic Gnosis text in modern LHP. Lilith plays a central role. Deliberately title-less authorship.",
    how_it_lands:
      "Edge of the field. Read with awareness of its associations and intensity. Not a beginner's text.",
    status: "operative",
  },

  /* ───── Liber Lilith line ───── */
  {
    title: "Liber Lilith",
    author: "Donald Tyson",
    year: "1995",
    tradition: "Gnostic Mythography",
    what_it_is:
      "Tyson's extended Gnostic creation myth retold from Lilith's perspective, framed as revelation to Lamech of the Cainite line.",
    how_it_lands:
      "Beautiful prose, scholarly cosmology. Tyson is a researcher, not an initiate; treat as cosmology reference, not working manual. The other Liber Lilith on this site, the Liber Umbrarum, is something different.",
    status: "myth",
  },
  {
    title: "Liber Lilith — Liber Umbrarum Tomus Primus",
    author: "Os Lamia",
    year: "in progress",
    tradition: "Gnostic Luciferian, Black Water Current",
    what_it_is:
      "The grimoire structured as the Hebrew aleph-bet. Twenty-two letters, twenty-two stations, the path walked from the seat of the priesthood.",
    how_it_lands:
      "The book this site exists to bear. Read at the Liber Lilith page; cross-reference the Lattice for the letter-stations.",
    status: "operative",
    link: "/liber-lilith",
  },

  /* ───── Recent / emerging ───── */
  {
    title: "Liber Taninsam",
    author: "Daniel Esprit",
    year: "Feb 2026",
    tradition: "Mathematical Qliphothic",
    what_it_is:
      "A mathematical grimoire built on the gematria of Lilith (480). Three Weavings — Scarlet Vector (96), Violet Key (15), Obsidian Bride (20) — sum to Samael (131). Anti-Torah identity: 480 + 131 = 611.",
    how_it_lands:
      "Sharp, novel, untested by lineage. The L480 arithmetic is genuinely interesting; the lack of organizational footprint means the formulas have not been field-tested. Engage as a sharp side-text.",
    status: "system",
  },
  {
    title: "Liber Ninlil",
    author: "Daniel Esprit",
    year: "Feb 2026",
    tradition: "Sumerian-Qliphothic Synthesis",
    what_it_is:
      "Companion to Liber Taninsam. Argues Ninlil is Lilith's pre-Kabbalistic Sumerian mask; the membrane-keeper of TIT, the unnumbered who moves across the order. Pushes the current 2,000 years deeper than the Hebrew strata.",
    how_it_lands:
      "The Ninlil-as-Lilith identification is the boldest historical claim in modern Lilith scholarship. Worth reading even if the system arguments leave you cold.",
    status: "system",
  },

  /* ───── Scholarly secondary ───── */
  {
    title: "Origins of the Kabbalah",
    author: "Gershom Scholem",
    year: "1962 / Eng. 1987",
    tradition: "Academic Kabbalah",
    what_it_is:
      "The single most important secondary work on the formation of Kabbalistic thought. Includes translation of and commentary on R. Isaac ha-Kohen's Treatise on the Left Emanation.",
    how_it_lands:
      "When you need to ground the tradition for someone who needs academic citation. Pair with his On the Mystical Shape of the Godhead.",
    status: "scholarly",
  },
  {
    title: "On the Mystical Shape of the Godhead",
    author: "Gershom Scholem",
    year: "1991",
    tradition: "Academic Kabbalah",
    what_it_is:
      "Essays on the Sitra Achra, the Shekhinah, the doctrine of opposites. The clearest scholarly framework for the Mirror Doctrine.",
    how_it_lands:
      "The essay on Sitra Achra is required reading for anyone teaching this material publicly.",
    status: "scholarly",
  },
];
