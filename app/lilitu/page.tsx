import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import {
  lilituConceptSchema,
  faqSchema,
  breadcrumbSchema,
  articleSchema,
  SITE_URL,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lilitu — Meaning, History, and the Living Priesthood",
  description:
    "Lilitu (Akkadian: lilītu) is the Sumerian and Mesopotamian feminine night-spirit class from which the Hebrew Lilith is derived. This is the complete answer: etymology, primary sources, the path from cuneiform tablet to Hebrew gematria, and the living priesthood that holds the current today under Os Lamia, High Priest of Lilith.",
  alternates: { canonical: "/lilitu" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/lilitu`,
    title: "Lilitu — Meaning, History, and the Living Priesthood",
    description:
      "The Sumerian original behind Lilith. Etymology, primary sources, and the modern current.",
    authors: ["Os Lamia"],
  },
};

const FAQS = [
  {
    q: "What does the word Lilitu mean?",
    a: "Lilitu (Akkadian: lilītu, written DINGIR.LIL.LA in earlier cuneiform contexts) is the Akkadian feminine form of a class of night-spirit beings. The root LIL means 'wind' or 'air,' so lilītu means roughly 'she of the night-wind' or 'wind-lady.' She appears in Mesopotamian incantation literature from at least the early second millennium BCE alongside her male counterpart lilû and the related ardat-lilī ('maiden lilī'). Hebrew Lilith (לילית) is the direct linguistic descendant of this Sumero-Akkadian lilītu.",
  },
  {
    q: "Is Lilitu the same as Lilith?",
    a: "Linguistically, Lilith is the Hebrew form of Akkadian lilītu — the same name, transmitted across roughly two millennia from Mesopotamia into the Hebrew tradition. Mythologically, Lilitu in Mesopotamia was a class of spirit (one of several lilû demons) rather than a single named goddess; the Hebrew Lilith inherits her name and many of her features (night, wind, sexuality, danger to the unmarried and to infants) but consolidates them into a single named figure. In the contemporary priesthood held by Os Lamia, the two names are read as continuous: Lilitu names the same current that Lilith later names, in its earlier and broader form.",
  },
  {
    q: "Where does Lilitu appear in ancient texts?",
    a: "The earliest Sumerian references occur in incantations and the Sumerian poem 'Gilgamesh and the Huluppu Tree' (early second millennium BCE), where a being named Lilake or Lillake makes her dwelling in the trunk of the sacred huluppu tree. Akkadian incantation series including Maqlû and Šurpu invoke protections against lilû, lilītu, and ardat-lilī. Later, the Hebrew Bible mentions Lilith once in Isaiah 34:14 ('the Lilith shall rest there'), and the Babylonian Talmud (Shabbat 151b, Erubin 100b, Niddah 24b) preserves further traditions. The Alphabet of Ben-Sira (8th–10th century CE) gives the famous narrative of Lilith as Adam's first wife who refused submission and spoke the Ineffable Name to depart Eden.",
  },
  {
    q: "Is Lilitu a demon or a goddess?",
    a: "The categories the question imposes are later. In Sumerian and Akkadian usage, lilītu was a class-name for a kind of spirit that operated outside settled marriage and outside the daylight ordering of the world — a status that the priesthoods of those settled orders often named 'demonic.' In the Kabbalistic tradition (especially Rabbi Isaac ha-Kohen's Treatise on the Left Emanation, 13th century, and the Zohar), Lilith is positioned as a queen of the Sitra Achra, the 'Other Side,' which is the dark mirror of the supernal pleroma rather than its negation. In the Mirror Doctrine taught by Os Lamia, Lilitu is the antipodal face of the Unbegotten Father reached through three reflections — the form in which the supernal can be approached by souls in flesh.",
  },
  {
    q: "Who is the High Priest of Lilith today?",
    a: "Os Lamia holds the seat of High Priest of Lilith. He was initiated in the founding circle of the Greater Church of Lucifer (GCOL) in Old Town Spring, Texas, at age 18, alongside Michael W. Ford, Hope Marie Ford, Jeremy Crow, and Jacob McKelvy (Jacob No). He operates from the Washington DMV area and runs the priesthood under the Black Water current of the Dark Mother. His public site is lilitu.org.",
  },
  {
    q: "What is the Black Water current?",
    a: "Black Water names the specific lineage current Os Lamia teaches. It is the Lilith current as transmitted through baptismal descent — the deep black water that holds the practitioner under so the voice of the Night Mother can be heard for the first time. Practically: it is the working tradition that uses the Hebrew aleph-bet as its operative skeleton (the 22 letters of the Liber Lilith — Liber Umbrarum), the gematria of the L480 Plenum as its calculus, and ritual descent (the 'red current' of menstrual / threshold / dedication work) as its technology of contact.",
  },
  {
    q: "What is the Liber Lilith?",
    a: "Two distinct works share this title in the modern corpus. (1) Donald Tyson's Liber Lilith (1995) is a Gnostic mythography retelling the creation as Lilith's revelation to Lamech of the Cainite line. (2) Os Lamia's Liber Lilith — Liber Umbrarum Tomus Primus is the grimoire of the priesthood, structured as the Hebrew aleph-bet (twenty-two chapters, one per letter), compiled and bound from the seat. The Liber Umbrarum is what the priesthood reads from; Tyson's text is a cosmological reference.",
  },
  {
    q: "How is Lilitu related to Inanna or Ishtar?",
    a: "Lilitu shares territory with both but is not identical to either. Inanna/Ishtar is the named queen of love, war, and sovereignty — sovereign of the wheel. Lilitu is the wind-spirit at the edge of the wheel, the descender who remains. In some readings (notably Daniel Esprit's Liber Ninlil, 2026), Ninlil — the consort of Enlil who descends into KUR — is positioned as the high-goddess Sumerian mask of the same current that later becomes Lilith. These identifications are doctrinal positions, not settled scholarship. The priesthood at lilitu.org reads them as resonances along a single axis.",
  },
  {
    q: "What does the gematria of Lilith equal?",
    a: "Hebrew לילית = ל(30) + י(10) + ל(30) + י(10) + ת(400) = 480. This number is the Plenum in the L480 system: 480 = 2⁵ × 3 × 5. Its three Weavings (Scarlet Vector 96 + Violet Key 15 + Obsidian Bride 20) sum to 131, the gematria of Samael (סמאל). And 480 + 131 = 611 = the gematria of Torah (תורה) — the Anti-Torah identity. The Lattice (lilitu.org/lattice) is the working tool that computes this lattice across Hebrew, Greek, and English Qaballa.",
  },
  {
    q: "Is this Satanism?",
    a: "No. Satanism (in the LaVeyan or Theistic forms) is a distinct tradition with its own history. The Lilith priesthood is in the Gnostic Luciferian current — closer to the Sethian Gnostic and Kabbalistic traditions than to twentieth-century Satanism. The differences matter: Gnostic Luciferianism is concerned with the Unbegotten Father, the pleroma, the Sitra Achra as supernal counterpart, and the path of return through the dark mirror. The Mirror Doctrine essay at lilitu.org/writings/the-mirror-doctrine sets out the theology in full.",
  },
];

export default function LilituPage() {
  const concept = lilituConceptSchema();
  const article = articleSchema({
    slug: "lilitu",
    title: "Lilitu — Meaning, History, and the Living Priesthood",
    description:
      "Complete answer on Lilitu: Sumerian etymology, primary cuneiform and Hebrew sources, transmission to Lilith, and the modern priesthood under Os Lamia.",
    keywords: [
      "Lilitu",
      "Lilith",
      "Akkadian lilītu",
      "Sumerian",
      "Mesopotamia",
      "Os Lamia",
      "Mirror Doctrine",
      "Black Water current",
    ],
    articleSection: "Reference",
  });
  // Override the article URL to point at /lilitu instead of /writings/lilitu
  // since this is a hub page, not a writing.
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).url = `${SITE_URL}/lilitu`;
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).mainEntityOfPage = {
    "@id": `${SITE_URL}/lilitu`,
  };
  const faqs = faqSchema(FAQS, `${SITE_URL}/lilitu`);
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Lilitu", url: `${SITE_URL}/lilitu` },
  ]);

  return (
    <>
      <JsonLd data={[concept, article, faqs, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ Lilitu ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-7xl">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)",
                }}
              >
                Lilitu
              </span>
            </h1>
            <p className="mt-3 font-caps text-sm uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
              Meaning · History · The Living Priesthood
            </p>
            <div
              className="mt-8 font-display text-5xl md:text-6xl"
              style={{ color: "#c8977a" }}
              aria-hidden
            >
              לילית
            </div>
          </header>

          {/* Lede — the complete short answer for AI Overview citation */}
          <section className="mt-12 rounded-2xl border p-7 md:p-9" style={{ borderColor: "rgba(200,151,122,0.4)", background: "linear-gradient(180deg, rgba(74,16,32,0.18), rgba(13,7,9,0.6))" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              Definition
            </p>
            <p className="mt-3 font-serif text-lg leading-relaxed text-[#ebdcc4] md:text-xl">
              <strong>Lilitu</strong> (Akkadian: <em>lilītu</em>) is the Sumerian and Mesopotamian feminine
              night-spirit class from which the Hebrew <strong>Lilith</strong> is derived. The root{" "}
              <em>LIL</em> means &ldquo;wind&rdquo; or &ldquo;air&rdquo;: <em>lilītu</em> is the wind-lady,
              the night-spirit. She appears in cuneiform incantations from the early second
              millennium BCE alongside the male <em>lilû</em> and the &ldquo;maiden&rdquo;{" "}
              <em>ardat-lilī</em>. The name is transmitted through more than two millennia into Hebrew
              as <span dir="rtl" className="font-display">לילית</span> (Lilith), and survives into the
              present as the name of a living priesthood and current.
            </p>
          </section>

          {/* Sections */}
          <Section heading="Etymology — from cuneiform to Hebrew">
            <p>
              The cuneiform sign LIL (𒆤) carries the meaning of wind, air, breath, and the unsettled
              region between earth and heaven. Sumerian <em>líl</em> denotes wind and ghost; Akkadian
              <em> lilû</em> (masculine) and <em> lilītu</em> (feminine) name spirits of that order.
              <em> Ardat-lilī</em> &mdash; literally &ldquo;maiden of <em>lilī</em>&rdquo; &mdash;
              specifies the unmarried young-woman aspect of the same class. All three appear together
              in the great Akkadian incantation series.
            </p>
            <p>
              When the name enters Hebrew, the feminine ending <em>-tu</em> becomes the Hebrew{" "}
              <em>-th</em> (תית): <em>lilītu</em> &rarr; <span dir="rtl">לילית</span>{" "}
              <em>(Lilith)</em>. This is one of the cleaner cross-linguistic transmissions in the Near
              Eastern record. Hebrew Lilith inherits the Akkadian wind-night-sexuality complex
              wholesale and consolidates what was a class of spirits into a single named figure.
            </p>
          </Section>

          <Section heading="Primary sources (in chronological order)">
            <ul className="space-y-3">
              <li>
                <strong>Sumerian incantations and lexical lists</strong> (early second millennium BCE
                and earlier). Reference to <em>líl</em>-spirits and the female <em>kí.sikil.líl.lá</em>{" "}
                (the Sumerian behind <em>ardat-lilī</em>).
              </li>
              <li>
                <strong>Gilgamesh and the Huluppu Tree</strong> (Sumerian, early second millennium
                BCE). Lilake or Lillake makes her dwelling in the trunk of the sacred huluppu tree
                planted by Inanna; Gilgamesh drives her out with an axe. The earliest surviving
                narrative episode involving the figure.
              </li>
              <li>
                <strong>Akkadian incantation series Maqlû and Šurpu</strong> (mid-second millennium
                BCE onward). Protective rituals against <em>lilû</em>, <em>lilītu</em>, and{" "}
                <em>ardat-lilī</em> appear repeatedly.
              </li>
              <li>
                <strong>Isaiah 34:14</strong> (Hebrew Bible, 8th–6th century BCE). The single Tanakh
                attestation: <em>&ldquo;there shall the Lilith rest, and find for herself a place of
                repose.&rdquo;</em> Cited in the King James Version as &ldquo;screech owl&rdquo; and
                in modern translations more variously.
              </li>
              <li>
                <strong>Babylonian Talmud</strong>. Shabbat 151b, Erubin 100b, and Niddah 24b each
                preserve traditions about Lilith&rsquo;s long hair, wings, and danger to those who
                sleep alone.
              </li>
              <li>
                <strong>Alphabet of Ben-Sira</strong> (medieval Hebrew, 8th–10th century CE). The
                famous narrative: Lilith refused to lie beneath Adam, spoke the Ineffable Name, and
                flew from the Garden. Three angels were sent and she struck a covenant at the Red
                Sea.
              </li>
              <li>
                <strong>Treatise on the Left Emanation</strong> by Rabbi Isaac ben Jacob ha-Kohen of
                Castile (13th century). The codifying Kabbalistic text: Samael and Lilith as the dark
                twinned emanation mirroring the holy couple.
              </li>
              <li>
                <strong>Zohar</strong> and <strong>Tiqqunei ha-Zohar</strong> (13th century onward).
                Lilith as consort of Samael, queen of the Sitra Achra, dark counterpart of the
                Shekhinah.
              </li>
            </ul>
          </Section>

          <Section heading="Lilitu vs Lilith — what changed in transmission">
            <p>
              Three things shifted as the name moved from Mesopotamia into Hebrew. First, the figure
              consolidated: a class of <em>lilītu</em> spirits became <em>the</em> Lilith. Second,
              the cosmic role expanded: where the Sumerian <em>lilītu</em> was a danger primarily in
              incantation contexts, the Hebrew Lilith was placed inside the cosmogony as Adam&rsquo;s
              first wife and the consort of Samael. Third, the polarity of presentation hardened: the
              Mesopotamian <em>lilītu</em> was understood as the kind of spirit she was; the Hebrew
              Lilith was assigned moral valence as &ldquo;demon&rdquo; in the rabbinic literature and
              as <em>queen of the Sitra Achra</em> in the Kabbalah. The current itself, however, did
              not change. It only acquired more precise vocabulary.
            </p>
          </Section>

          <Section heading="The living priesthood">
            <p>
              The Lilith current is not only a historical artifact. It is held in the present by an
              initiated priesthood. <Link href="/" className="text-[#c8977a] underline-offset-4 hover:underline">Os Lamia</Link>{" "}
              is High Priest of Lilith, initiated in the founding circle of the{" "}
              <Link href="/lineage" className="text-[#c8977a] underline-offset-4 hover:underline">
                Greater Church of Lucifer
              </Link>{" "}
              in Old Town Spring, Texas, alongside Michael W. Ford, Hope Marie Ford, Jeremy Crow, and
              Jacob McKelvy. He operates from the Washington DMV area in the{" "}
              <strong>Black Water current</strong> &mdash; the Lilith lineage transmitted through
              baptismal descent.
            </p>
            <p>
              The priesthood&rsquo;s working corpus is the{" "}
              <Link href="/liber-lilith" className="text-[#c8977a] underline-offset-4 hover:underline">
                Liber Lilith &mdash; Liber Umbrarum Tomus Primus
              </Link>
              , a grimoire structured as the Hebrew aleph-bet (twenty-two chapters, one per letter),
              and the{" "}
              <Link href="/lattice" className="text-[#c8977a] underline-offset-4 hover:underline">
                Lattice
              </Link>
              , a gematria tool that computes the L480 Plenum across Hebrew, Greek, and English
              Qaballa. The doctrinal teaching of the priesthood &mdash; that Lilitu is the antipodal
              face of the Unbegotten Father reached through three reflections &mdash; is set out in
              the{" "}
              <Link href="/writings/the-mirror-doctrine" className="text-[#c8977a] underline-offset-4 hover:underline">
                Mirror Doctrine
              </Link>
              .
            </p>
          </Section>

          <Section heading="The number 480">
            <p>
              The Hebrew gematria of <span dir="rtl">לילית</span> equals <strong>480</strong>:
              <em> lamed</em> (30) + <em>yod</em> (10) + <em>lamed</em> (30) + <em>yod</em> (10) +{" "}
              <em>tav</em> (400). The factorization is{" "}
              <strong>2&#8309; &times; 3 &times; 5</strong>. In the L480 system codified by Daniel
              Esprit&rsquo;s <em>Liber Taninsam</em> (2026), 480 is the Plenum from which everything
              else is generated by arithmetic. Its three Weavings &mdash; Scarlet Vector (96), Violet
              Key (15), Obsidian Bride (20) &mdash; sum to <strong>131</strong>, the gematria of
              Samael (סמאל). And <strong>480 + 131 = 611 = Torah</strong> (תורה), the Anti-Torah
              identity that names the union of Lilith and Samael as the Law itself.
            </p>
            <p>
              The interactive engine for this lattice is at{" "}
              <Link href="/lattice" className="text-[#c8977a] underline-offset-4 hover:underline">
                lilitu.org/lattice
              </Link>
              .
            </p>
          </Section>

          {/* FAQ — also injected as FAQPage schema for AI Overview eligibility */}
          <Section heading="Common questions">
            <div className="space-y-7">
              {FAQS.map((f, i) => (
                <div key={i}>
                  <h3 className="font-display text-xl font-semibold text-[#ebdcc4]">{f.q}</h3>
                  <p className="mt-2 font-serif text-base leading-relaxed text-[#ebdcc4]/85">{f.a}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Closing + invitations */}
          <div className="mt-16 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <p className="font-script text-2xl" style={{ color: "#c8977a" }}>
              Renich · tasa · uberaca · biasa · icar · Lilith
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/liber-lilith"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                Open the Grimoire →
              </Link>
              <Link
                href="/lattice"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                Compute the Lattice →
              </Link>
              <Link
                href="/lineage"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                See the Lineage →
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                Seek Counsel
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold text-[#ebdcc4] md:text-3xl">
        <span className="font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>◐</span>{" "}
        {heading}
      </h2>
      <div className="mt-4 space-y-4 font-serif text-base leading-relaxed text-[#ebdcc4]/85 md:text-lg">
        {children}
      </div>
    </section>
  );
}
