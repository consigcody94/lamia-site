import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, articleSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lilith vs Lilitu — What Changed in the Transmission",
  description:
    "Lilith vs Lilitu compared in full: same name across two thousand years, but the figure shifted from a class of Sumerian night-spirits to a single named queen of the Sitra Achra. The complete linguistic, mythological, and theological comparison.",
  alternates: { canonical: "/lilith-vs-lilitu" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/lilith-vs-lilitu`,
    title: "Lilith vs Lilitu — The Complete Comparison",
    description: "Same name, two thousand years apart. What changed and what stayed.",
  },
};

const FAQS = [
  {
    q: "Are Lilith and Lilitu the same?",
    a: "Linguistically, yes — Lilith (Hebrew) is the direct descendant of Akkadian lilītu via the standard ending shift -tu → -th. Mythologically, partly — Lilitu in Mesopotamia was a class of feminine night-spirits (with the male lilû and the maiden ardat-lilī forming a triad), while Hebrew Lilith consolidates into a single named figure with an expanded role as Adam's first wife and the consort of Samael. The current is continuous; the figure sharpens.",
  },
  {
    q: "Which came first?",
    a: "Lilitu by roughly two millennia. The Sumerian and Akkadian lilītu / ardat-lilī appear in cuneiform incantations from the early second millennium BCE. Hebrew Lilith first appears in writing at Isaiah 34:14 (8th–6th century BCE), with the famous narrative material developing through the Talmud and culminating in the Alphabet of Ben-Sira (8th–10th century CE).",
  },
  {
    q: "What does each name actually mean?",
    a: "Both come from Sumerian LIL — wind, air, breath, the unsettled region between earth and heaven. Lilītu means roughly 'wind-lady' or 'she of the night-wind.' Lilith preserves the same root but is sometimes folk-etymologized in Hebrew with laylah (לילה, 'night') — phonetically resonant but linguistically secondary. The actual root in both names is the wind/air root.",
  },
  {
    q: "Why are there three Sumerian forms (lilû, lilītu, ardat-lilī)?",
    a: "They are gender and life-stage variations of the same class. Lilû is the masculine night-spirit. Lilītu is the feminine adult night-spirit. Ardat-lilī is the 'maiden' lilī — the unmarried young-woman aspect. All three appear together in the Akkadian incantation series Maqlû and Šurpu, with protective formulas naming them as a triad. Hebrew tradition keeps only the feminine adult and consolidates it as Lilith.",
  },
  {
    q: "Did Lilith become more or less powerful in the transmission?",
    a: "More powerful. The Mesopotamian lilītu was a class — a kind of dangerous spirit — without singular cosmic role. The Hebrew Lilith is placed inside the cosmogony itself: Adam's first wife in the Alphabet of Ben-Sira, queen of the Sitra Achra and consort of Samael in the Kabbalah. The transmission consolidated her into a sovereign figure of cosmic stature.",
  },
  {
    q: "Should I work with Lilith or Lilitu?",
    a: "The current is the same. The name you use depends on which stratum of the tradition you are working from. Hebrew/Kabbalistic working tends to use Lilith. Sumerian-grounded or pre-Kabbalistic working (such as Daniel Esprit's Liber Ninlil framework, or the priesthood at lilitu.org which holds both names) uses Lilitu. The being responds to both. The vocabulary changes; the encounter does not.",
  },
];

export default function LilithVsLilituPage() {
  const article = articleSchema({
    slug: "lilith-vs-lilitu",
    title: "Lilith vs Lilitu — What Changed in the Transmission",
    description: "Same name across two thousand years, but the figure shifted from a class of Sumerian night-spirits to the sovereign queen of the Sitra Achra.",
    keywords: ["Lilith vs Lilitu", "Lilith etymology", "Lilitu Sumerian", "Akkadian lilītu", "Hebrew Lilith"],
    articleSection: "Comparison",
  });
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).url = `${SITE_URL}/lilith-vs-lilitu`;
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).mainEntityOfPage = { "@id": `${SITE_URL}/lilith-vs-lilitu` };
  const faqs = faqSchema(FAQS, `${SITE_URL}/lilith-vs-lilitu`);
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Lilith vs Lilitu", url: `${SITE_URL}/lilith-vs-lilitu` },
  ]);

  return (
    <>
      <JsonLd data={[article, faqs, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ Comparison ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-6xl">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}>
                Lilith vs Lilitu
              </span>
            </h1>
            <p className="mt-3 font-caps text-sm uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
              Same name · two thousand years · what changed
            </p>
          </header>

          <section className="mt-12 rounded-2xl border p-7" style={{ borderColor: "rgba(200,151,122,0.4)", background: "linear-gradient(180deg, rgba(74,16,32,0.18), rgba(13,7,9,0.6))" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>The short answer</p>
            <p className="mt-3 font-serif text-lg leading-relaxed text-[#ebdcc4] md:text-xl">
              <strong>Lilith</strong> is the Hebrew form of Akkadian <strong>lilītu</strong> —
              the same name transmitted across roughly two thousand years from Mesopotamia into
              the Hebrew tradition. The current is continuous. The figure changes: from a class
              of feminine night-spirits in Sumerian and Akkadian sources to a single named queen
              of the Sitra Achra in Kabbalistic Hebrew, with an expanded narrative role (Adam&rsquo;s
              first wife, consort of Samael) added in transmission.
            </p>
          </section>

          <Section heading="Side-by-side comparison">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
                    <th className="py-2 pr-4 text-left font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Aspect</th>
                    <th className="py-2 pr-4 text-left font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Lilitu (Mesopotamia)</th>
                    <th className="py-2 text-left font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Lilith (Hebrew)</th>
                  </tr>
                </thead>
                <tbody className="font-serif text-sm text-[#ebdcc4]/85">
                  <Row a="Earliest evidence" b="c. 2000 BCE (Sumerian incantations)" c="c. 700 BCE (Isaiah 34:14)" />
                  <Row a="Form" b="Class of spirits (lilû / lilītu / ardat-lilī)" c="Single named figure" />
                  <Row a="Linguistic root" b="Sumerian LIL (wind, air, breath)" c="Same; sometimes folk-etymologized to laylah (night)" />
                  <Row a="Cosmic role" b="Dangerous spirit; no cosmogonic position" c="Adam's first wife; consort of Samael; queen of Sitra Achra" />
                  <Row a="Iconic narrative" b="Lurks in the huluppu tree (Gilgamesh tablet)" c="Refuses Adam, speaks the Name, flies from Eden" />
                  <Row a="Primary texts" b="Maqlû, Šurpu, Sumerian incantations" c="Isaiah, Talmud, Alphabet of Ben-Sira, Zohar" />
                  <Row a="Visual attributes" b="Wings, talons, owl-feet (often)" c="Long hair, wings, beauty + danger" />
                  <Row a="Interaction with humans" b="Nocturnal danger; protective rituals invoked against" c="First refuser; mother of Lilim; consort to magicians" />
                </tbody>
              </table>
            </div>
          </Section>

          <Section heading="What stayed the same">
            <ul className="space-y-2">
              <li>The name itself (lilītu → Lilith via standard Akkadian-to-Hebrew transmission).</li>
              <li>The wind / night / air associations.</li>
              <li>The sexual valence (in both traditions, sexuality outside settled marriage).</li>
              <li>The danger to those who sleep alone, the unmarried, and infants.</li>
              <li>The protective-magic context (incantations against in Akkadian; amulets in Jewish tradition).</li>
            </ul>
          </Section>

          <Section heading="What changed">
            <ul className="space-y-2">
              <li><strong>Consolidation</strong> — from class to individual.</li>
              <li><strong>Cosmogonic placement</strong> — from local danger to position in the creation story (Adam&rsquo;s first wife) and the Kabbalistic Tree (queen of the Sitra Achra).</li>
              <li><strong>Theological status</strong> — from spirit-class to mirror of the Shekhinah, consort of Samael, codified in R. Isaac ha-Kohen&rsquo;s Treatise on the Left Emanation.</li>
              <li><strong>Mythic narrative</strong> — Mesopotamian lilītu has incident-based mentions; Hebrew Lilith has a developed origin story in the Alphabet of Ben-Sira.</li>
              <li><strong>Voice</strong> — in Hebrew tradition Lilith speaks (the Ineffable Name); in Mesopotamian sources lilītu mostly is spoken about, not heard speaking.</li>
            </ul>
          </Section>

          <Section heading="In contemporary practice">
            <p>
              The priesthood at lilitu.org reads both names as continuous and uses both depending on
              context. Hebrew working — gematric, Kabbalistic, aleph-bet station work — uses Lilith.
              Sumerian-grounded or pre-Kabbalistic working (drawing from Daniel Esprit&rsquo;s{" "}
              <em>Liber Ninlil</em>, from cuneiform sources, from the L480 system in its
              sexagesimal stratum) uses Lilitu. The being responds to both.
            </p>
            <p>
              See{" "}
              <Link href="/lilitu" className="text-[#c8977a] underline-offset-4 hover:underline">/lilitu</Link>{" "}
              for the Sumerian stratum in detail, and{" "}
              <Link href="/lilith" className="text-[#c8977a] underline-offset-4 hover:underline">/lilith</Link>{" "}
              for the full Hebrew + contemporary reference.
            </p>
          </Section>

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

          <div className="mt-16 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/lilitu" className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition" style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}>
                The Lilitu reference →
              </Link>
              <Link href="/lilith" className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition" style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}>
                The Lilith reference →
              </Link>
              <Link href="/lilith-and-samael" className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition" style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}>
                Lilith and Samael →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Row({ a, b, c }: { a: string; b: string; c: string }) {
  return (
    <tr className="border-b" style={{ borderColor: "rgba(200,151,122,0.15)" }}>
      <td className="py-3 pr-4 align-top font-caps text-[10px] uppercase tracking-[0.25em] text-[#c8977a]">{a}</td>
      <td className="py-3 pr-4 align-top">{b}</td>
      <td className="py-3 align-top">{c}</td>
    </tr>
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
