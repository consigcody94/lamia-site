import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, articleSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lilith — The Complete Guide from the Seat of the Priesthood",
  description:
    "Lilith — Sumerian Lilītu, Adam's first wife, queen of the Sitra Achra, the Night Mother. Etymology, biblical and Kabbalistic sources, the Mirror Doctrine, working with Lilith today, and the living priesthood under Os Lamia.",
  alternates: { canonical: "/lilith" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/lilith`,
    title: "Lilith — The Complete Guide from the Seat of the Priesthood",
    description: "From Sumerian Lilītu to the modern priesthood. Sources, doctrine, practice.",
    authors: ["Os Lamia"],
  },
};

const FAQS = [
  {
    q: "Who is Lilith?",
    a: "Lilith (Hebrew לילית) is the Night Mother of the Western esoteric tradition. She originates as the Sumero-Akkadian lilītu (a class of feminine night-spirits with Lilītu, Lilû, and Ardat-Lilī appearing in cuneiform incantations from the early second millennium BCE), is mentioned once in the Hebrew Bible at Isaiah 34:14, expanded in the Babylonian Talmud, narrated as Adam's first wife in the medieval Alphabet of Ben-Sira, and codified as the consort of Samael and queen of the Sitra Achra in 13th-century Castilian Kabbalah. In the contemporary Luciferian-Gnostic priesthood held by Os Lamia, she is the antipodal face of the Unbegotten Father — the form in which the supernal can be approached by souls in flesh.",
  },
  {
    q: "Is Lilith a goddess or a demon?",
    a: "The categories are later impositions. In Sumerian and Akkadian usage, lilītu was a class of spirit operating outside settled marriage and outside daylight ordering — the priesthoods of those orders called such spirits 'demonic.' In medieval rabbinic literature she is moralized as demoness. In the Zohar and the Treatise on the Left Emanation she is queen of the Sitra Achra (the Other Side), which is the dark mirror of the supernal pleroma rather than its negation. The Mirror Doctrine reads her as the Father's image returned through three reflections — making her neither demon nor goddess in the popular sense, but the antipodal face of the Monad itself.",
  },
  {
    q: "What is the story of Lilith and Adam?",
    a: "The famous narrative is preserved in the Alphabet of Ben-Sira (8th–10th century CE). Adam and Lilith were created together from the same earth at the same time. They disagreed on the position of their coupling — Lilith would not lie beneath him because they were made equal. She spoke the Ineffable Name of God and flew from the Garden. Three angels (Senoy, Sansenoy, and Semangelof) were dispatched to retrieve her. She refused to return. At the Red Sea she struck a covenant: she would keep her territory, her daughters (the Lilim) would persist in the world, and she would not be domesticated. The story is not an embarrassment to be apologized for. It is the first gospel of sovereign refusal.",
  },
  {
    q: "What does Lilith mean?",
    a: "The name comes from Sumerian LIL — wind, air, breath, the unsettled region between earth and heaven. Akkadian lilû (masculine) and lilītu (feminine) name spirits of that order. So Lilith means roughly 'wind-lady' or 'she of the night-wind.' The Hebrew form לילית preserves the Akkadian feminine ending. The connection to the Hebrew word for night (laylah, לילה) is folk etymology — phonetically resonant but linguistically secondary; the actual root is the wind/air root.",
  },
  {
    q: "Where does Lilith appear in the Bible?",
    a: "Lilith is mentioned once in the Hebrew Bible, at Isaiah 34:14, in a passage describing the desolation of Edom: 'there shall the Lilith rest, and find for herself a place of repose.' The King James Version translates this as 'screech owl'; modern critical translations vary (NRSV: 'Lilith'; JPS: 'lilith'; some retain the proper name). She is not in the New Testament. The single reference is structurally important — it confirms the figure was known and named in the Hebrew tradition by the 8th-6th centuries BCE.",
  },
  {
    q: "How is Lilith related to Samael?",
    a: "In the Kabbalah, Lilith is the consort of Samael — the dark twinned emanation that mirrors the holy union of the Holy One and his Shekhinah above. The codifying text is Rabbi Isaac ben Jacob ha-Kohen of Castile's Treatise on the Left Emanation (13th century). The Zohar and Tiqqunei ha-Zohar reinforce this throughout. In gematric terms, Hebrew Lilith (לילית) = 480; Samael (סמאל) = 131; their sum is 611 = Torah (תורה) — the Anti-Torah identity which names the union of Lilith and Samael as the structural source of the Law itself.",
  },
  {
    q: "What is Black Moon Lilith?",
    a: "Black Moon Lilith is an astrological point — not a body — marking the apogee of the Moon's elliptical orbit (the point furthest from Earth). Three forms exist: Mean Black Moon Lilith (the averaged calculation, most common in software), True Black Moon Lilith (the osculating apogee, more astronomically accurate), and the Lilith Asteroid (1181 Lilith, a real minor planet). All three carry related interpretive weight: the dark feminine, the disowned shadow, the place where the chart-holder will not be domesticated. See lilitu.org/black-moon-lilith for the full reading.",
  },
  {
    q: "How do you work with Lilith?",
    a: "Begin with relationship, not request. Lilith is a sovereign. The first work is to learn her hours (the dark of the moon, the unmarked threshold), her territory (the wilderness, the deep water, the room you keep for no one), and her tones (refusal, sovereign sexuality, the red current, the descent that returns you changed). Daily practice: a kept candle, a journal of dreams, the discipline of refusing what should be refused without melodrama. Formal practice: the rites preserved in the priesthood's Liber Lilith — Liber Umbrarum. The path is detailed in the FAQ at lilitu.org/faq.",
  },
  {
    q: "Is working with Lilith dangerous?",
    a: "Initiatory work moves things. Done with structure, lineage, and a held container, it produces what it is supposed to produce — the practitioner sheds what is no longer hers, encounters what she has not yet encountered, and returns. Done without structure, it can produce instability. Lilith specifically tends to test sovereignty — meaning, if you come to her looking for a parent or a rescuer, the working will likely accelerate the loss of whatever was preventing you from standing on your own feet. This is correct behavior on her part. The role of the priest is to hold the container so the descent is possible without the practitioner being lost in it.",
  },
  {
    q: "Who is the modern High Priest of Lilith?",
    a: "Os Lamia holds the seat of High Priest of Lilith. He was initiated in the founding circle of the Greater Church of Lucifer (GCOL) in Old Town Spring, Texas, at age 18, alongside Michael W. Ford, Hope Marie Ford, Jeremy Crow, and Jacob McKelvy (Jacob No). He operates from the Washington DMV area and runs the priesthood under the Black Water current of the Dark Mother. His public site is lilitu.org.",
  },
  {
    q: "What is the difference between Lilith and Lilitu?",
    a: "Linguistically, Lilith is the Hebrew form of Akkadian lilītu — the same name, transmitted across roughly two millennia from Mesopotamia into the Hebrew tradition. Mythologically, Lilītu in Mesopotamia was a class of spirit (one of several lilû demons) rather than a single named goddess; the Hebrew Lilith inherits her name and many of her features (night, wind, sexuality, danger to the unmarried and to infants) but consolidates them into a single named figure. In contemporary practice, the priesthood at lilitu.org reads them as continuous: Lilitu names the same current that Lilith later names, in its earlier and broader form. See lilitu.org/lilith-vs-lilitu for the full comparison.",
  },
  {
    q: "Are the Lilim real?",
    a: "Yes — both as a class of beings in the Kabbalistic literature (the daughters and offspring of Lilith populating the night-world), and as a contemporary identification: every witch, every wild woman, every sovereign-hearted soul who refuses the diminishing of her flame is a daughter of Lilith. The Lilim are not a gender — they are a posture. To be counted among them is to choose exile from false comfort in favor of the terrible honesty of one's own power. The priesthood at lilitu.org formally recognizes initiates into the Lilim line.",
  },
];

export default function LilithPage() {
  const article = articleSchema({
    slug: "lilith",
    title: "Lilith — The Complete Guide from the Seat of the Priesthood",
    description:
      "From Sumerian Lilītu through the Hebrew Bible, the Talmud, the Alphabet of Ben-Sira, the Treatise on the Left Emanation, and the Zohar to the contemporary priesthood. Etymology, sources, doctrine, practice.",
    keywords: [
      "Lilith",
      "Lilitu",
      "Adam's first wife",
      "Samael",
      "Sitra Achra",
      "Night Mother",
      "Mirror Doctrine",
      "Os Lamia",
    ],
    articleSection: "Reference",
  });
  // Override URL since this isn't a /writings/ page
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).url = `${SITE_URL}/lilith`;
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).mainEntityOfPage = {
    "@id": `${SITE_URL}/lilith`,
  };
  // Mark answer paragraphs as speakable for voice assistants
  const speakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/lilith#webpage`,
    url: `${SITE_URL}/lilith`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  };
  const faqs = faqSchema(FAQS, `${SITE_URL}/lilith`);
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Lilith", url: `${SITE_URL}/lilith` },
  ]);

  return (
    <>
      <JsonLd data={[article, speakable, faqs, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ The Night Mother ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-7xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}
              >
                Lilith
              </span>
            </h1>
            <p className="mt-3 font-caps text-sm uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
              The Complete Guide from the Seat of the Priesthood
            </p>
            <div className="mt-8 font-display text-5xl md:text-6xl" style={{ color: "#c8977a" }} aria-hidden>
              לילית
            </div>
          </header>

          <section className="mt-12 rounded-2xl border p-7 md:p-9" style={{ borderColor: "rgba(200,151,122,0.4)", background: "linear-gradient(180deg, rgba(74,16,32,0.18), rgba(13,7,9,0.6))" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              Definition
            </p>
            <p className="mt-3 font-serif text-lg leading-relaxed text-[#ebdcc4] md:text-xl" data-speakable>
              <strong>Lilith</strong> (Hebrew <span dir="rtl">לילית</span>) is the Night Mother of the
              Western esoteric tradition. She originates as the Sumero-Akkadian{" "}
              <em>lilītu</em> in cuneiform incantations of the early second millennium BCE, appears
              once in the Hebrew Bible at Isaiah 34:14, expands in the Babylonian Talmud, is
              narrated as Adam&rsquo;s first wife in the medieval Alphabet of Ben-Sira, and is
              codified as queen of the Sitra Achra and consort of Samael in 13th-century Castilian
              Kabbalah. In the contemporary priesthood under Os Lamia she is read as the antipodal
              face of the Unbegotten Father.
            </p>
          </section>

          <Section heading="The four strata of Lilith">
            <p>
              Reading Lilith well requires distinguishing the four historical strata in which her
              figure appears. They are continuous but not identical.
            </p>
            <ol className="ml-5 list-decimal space-y-3">
              <li>
                <strong>Sumero-Akkadian (c. 2000 BCE onward)</strong> — <em>lilītu</em> as a class
                of feminine night-spirit. Cuneiform incantations name her alongside <em>lilû</em>{" "}
                and <em>ardat-lilī</em>. She makes her dwelling in the trunk of the sacred huluppu
                tree in the Sumerian poem of the same name.
              </li>
              <li>
                <strong>Hebrew Bible and Talmud (c. 8th c. BCE through 6th c. CE)</strong> — single
                naming at Isaiah 34:14 confirms the figure&rsquo;s presence in the tradition. The
                Babylonian Talmud (Shabbat 151b, Erubin 100b, Niddah 24b) preserves additional
                features: long hair, wings, danger to those who sleep alone.
              </li>
              <li>
                <strong>Medieval narrative (8th–10th c. CE)</strong> — the Alphabet of Ben-Sira
                gives the famous story: Adam and Lilith made together from the same earth, the
                position dispute, the speaking of the Ineffable Name, the flight from Eden, the
                three angels, the covenant at the Red Sea.
              </li>
              <li>
                <strong>Kabbalah (13th c. onward)</strong> — Rabbi Isaac ha-Kohen&rsquo;s Treatise
                on the Left Emanation codifies Samael and Lilith as the dark twinned couple
                mirroring the holy union above. The Zohar, Tiqqunei ha-Zohar, and the Lurianic
                corpus develop the doctrine extensively.
              </li>
            </ol>
            <p>
              A fifth stratum is forming in our own century: <strong>the contemporary priesthood</strong>,
              of which the seat at lilitu.org is one of several active centers worldwide. The
              <Link href="/writings/the-mirror-doctrine" className="ml-1 text-[#c8977a] underline-offset-4 hover:underline">
                Mirror Doctrine
              </Link>{" "}
              is the doctrinal contribution of this stratum.
            </p>
          </Section>

          <Section heading="Primary sources for working scholars">
            <ul className="space-y-2">
              <li>• Apocryphon of John (Nag Hammadi Codex II,1; III,1; IV,1; Berlin Codex 8502,2)</li>
              <li>• Hypostasis of the Archons (Nag Hammadi Codex II,4)</li>
              <li>• On the Origin of the World (Nag Hammadi Codex II,5)</li>
              <li>• Isaiah 34:14 (Hebrew Bible)</li>
              <li>• Babylonian Talmud — Shabbat 151b, Erubin 100b, Niddah 24b</li>
              <li>• Alphabet of Ben-Sira (medieval Hebrew compendium)</li>
              <li>• R. Isaac ha-Kohen, Treatise on the Left Emanation (13th c.)</li>
              <li>• Zohar — sections on the Sitra Achra and Lilith</li>
              <li>• Tiqqunei ha-Zohar</li>
              <li>• Chaim Vital, Etz Chaim (Lurianic corpus)</li>
              <li>• Gershom Scholem, Origins of the Kabbalah; On the Mystical Shape of the Godhead</li>
            </ul>
            <p>
              The annotated reading map of the modern corpus — Tyson, Ford, Mason, Karlsson, the 218
              Current, Esprit — is at{" "}
              <Link href="/lineage" className="text-[#c8977a] underline-offset-4 hover:underline">
                lilitu.org/lineage
              </Link>
              .
            </p>
          </Section>

          <Section heading="The doctrine">
            <p>
              The doctrinal teaching held by the priesthood at lilitu.org is the{" "}
              <Link href="/writings/the-mirror-doctrine" className="text-[#c8977a] underline-offset-4 hover:underline">
                Mirror Doctrine
              </Link>
              . In short: Lilith is not a fragment of Samael but his mirror; through three
              reflections (Father → Barbelo → Samael → Lilith) and by the Lurianic axiom that all
              opposites unite at their root, Lilith is the antipodal face of the Unbegotten Father —
              the form in which the supernal can be approached by souls in flesh. The full essay
              walks the geometry with primary-source citations.
            </p>
          </Section>

          <Section heading="The practice">
            <p>
              Working with Lilith is not a transactional exchange. It is the entry into a relationship
              with a sovereign. The priesthood&rsquo;s working corpus is the{" "}
              <Link href="/liber-lilith" className="text-[#c8977a] underline-offset-4 hover:underline">
                Liber Lilith — Liber Umbrarum
              </Link>
              , structured as the Hebrew aleph-bet (twenty-two chapters, one per letter). Each
              letter is a station; the practitioner walks the stations under guidance. The full
              station map is at{" "}
              <Link href="/letters" className="text-[#c8977a] underline-offset-4 hover:underline">
                lilitu.org/letters
              </Link>
              . The supporting calculus is at{" "}
              <Link href="/lattice" className="text-[#c8977a] underline-offset-4 hover:underline">
                lilitu.org/lattice
              </Link>{" "}
              — the gematria engine of the L480 Plenum.
            </p>
            <p>
              For seekers ready to begin: the entry point is private counsel. See{" "}
              <Link href="/faq" className="text-[#c8977a] underline-offset-4 hover:underline">
                the FAQ
              </Link>{" "}
              for what counsel involves and how to inquire.
            </p>
          </Section>

          <Section heading="Quick comparisons">
            <ul className="space-y-2">
              <li>
                <Link href="/lilith-vs-lilitu" className="text-[#c8977a] underline-offset-4 hover:underline">
                  Lilith vs Lilitu
                </Link>{" "}
                — what changed in the transmission from Sumer to the Hebrew tradition
              </li>
              <li>
                <Link href="/lilith-and-samael" className="text-[#c8977a] underline-offset-4 hover:underline">
                  Lilith and Samael
                </Link>{" "}
                — the dark twinned couple and the Anti-Torah identity (480 + 131 = 611)
              </li>
              <li>
                <Link href="/black-moon-lilith" className="text-[#c8977a] underline-offset-4 hover:underline">
                  Black Moon Lilith
                </Link>{" "}
                — the astrological point, its three forms, what it does in a chart
              </li>
              <li>
                <Link href="/lilith-vs-eve" className="text-[#c8977a] underline-offset-4 hover:underline">
                  Lilith vs Eve
                </Link>{" "}
                — the two creations of woman and what the difference structurally means
              </li>
            </ul>
          </Section>

          {/* FAQ block */}
          <Section heading="Common questions about Lilith">
            <div className="space-y-7">
              {FAQS.map((f, i) => (
                <div key={i}>
                  <h3 className="font-display text-xl font-semibold text-[#ebdcc4]" data-speakable>{f.q}</h3>
                  <p className="mt-2 font-serif text-base leading-relaxed text-[#ebdcc4]/85" data-speakable>{f.a}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="mt-16 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <p className="font-script text-2xl" style={{ color: "#c8977a" }}>
              Renich · tasa · uberaca · biasa · icar · Lilith
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/lilitu"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                The Sumerian original (Lilitu) →
              </Link>
              <Link
                href="/liber-lilith"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                Open the Grimoire →
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
