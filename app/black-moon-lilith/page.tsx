import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, articleSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Black Moon Lilith — Meaning, Three Forms, How It Works in Your Chart",
  description:
    "Black Moon Lilith is the apogee of the Moon's orbit — the farthest point. Three forms exist (Mean, True, Asteroid 1181). Each marks where you will not be domesticated. Complete reference from the seat of the Lilith priesthood.",
  alternates: { canonical: "/black-moon-lilith" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/black-moon-lilith`,
    title: "Black Moon Lilith — The Complete Astrological Reference",
    description: "What it is, the three forms, what it does in your chart, how to read it.",
    authors: ["Os Lamia"],
  },
};

const FAQS = [
  {
    q: "What is Black Moon Lilith?",
    a: "Black Moon Lilith is an astrological point — not a physical body — marking the apogee of the Moon's elliptical orbit, the point furthest from Earth. The Moon's orbit is not a perfect circle; it is an ellipse with two foci. One focus is Earth itself; the other (the empty focus) is Black Moon Lilith. Astrologers read it as the place where the chart-holder encounters the disowned dark feminine, refuses domestication, and finds her sovereign edge.",
  },
  {
    q: "What are the three forms of Black Moon Lilith?",
    a: "Three. (1) Mean Black Moon Lilith — the averaged calculation of the lunar apogee, ignoring perturbations. Most astrology software defaults to this. (2) True Black Moon Lilith (also called osculating apogee) — the actual instantaneous apogee position accounting for perturbations. More astronomically accurate; moves more erratically. (3) Asteroid 1181 Lilith — a real minor planet discovered in 1927 by Benjamin Jekhowsky, named for Lilith the figure rather than for the lunar apogee. All three carry related interpretive weight; serious astrologers read all three.",
  },
  {
    q: "What does Black Moon Lilith mean in your chart?",
    a: "Black Moon Lilith marks the area of life where you will not be domesticated, will not perform compliance, will not surrender sovereignty for comfort. In a natal chart its sign and house show the territory where the chart-holder's wildness lives — usually the area she has been most pressured to tame and where the pressure produces the most clear, sharp refusal. In transit it marks moments where this same edge is being activated externally.",
  },
  {
    q: "Black Moon Lilith in the houses",
    a: "Each of the twelve houses receives Lilith's mark differently. 1st house: the wild self, visible refusal in the body and presentation. 2nd: sovereign relationship to value, money, the body. 3rd: speech that cannot be made polite. 4th: the family of origin as the place where the first refusal was learned. 5th: erotic and creative sovereignty. 6th: refusal to perform productivity-as-virtue. 7th: relationships that fail unless the partner can hold the wildness. 8th: sex, death, and shared resources as the deepest territory. 9th: the worldview that does not fit the inherited religion. 10th: a public face that refuses the script. 11th: the chosen tribe over the assigned community. 12th: the unconscious as the room where the dark feminine speaks first.",
  },
  {
    q: "Black Moon Lilith in the signs",
    a: "Aries: the fight as sovereignty. Taurus: the body as temple, refusing to be objectified. Gemini: speech that cuts. Cancer: the mother-line, broken or reclaimed. Leo: the spotlight on her own terms or not at all. Virgo: the disciplined refusal, the priestess. Libra: relationships only on equal footing. Scorpio: the deepest territory, sex and death held together. Sagittarius: the worldview that scandalizes the orthodox. Capricorn: the ladder she will not climb on terms set by others. Aquarius: the outsider as the seat. Pisces: the dissolved boundary that nevertheless holds.",
  },
  {
    q: "Is Black Moon Lilith good or bad?",
    a: "Neither. It is a pressure point. Whether the chart-holder experiences it as gift or affliction depends almost entirely on whether she has met the territory it names. Unmet, Black Moon Lilith material erupts as compulsive behavior, repeated relationship patterns, and the sense of being unseen. Met, the same material becomes the seat of her sovereignty — the place she will not negotiate, and which therefore cannot be taken from her.",
  },
  {
    q: "How do I find my Black Moon Lilith?",
    a: "Any free astrology calculator will show it. Astro.com offers the most accurate calculation; under the natal chart settings, enable 'Mean Black Moon Lilith,' 'True Black Moon Lilith,' and the asteroid 1181 Lilith. Note all three positions. The sign tells you what register the wildness operates in; the house tells you where it lives in your life. Aspects to natal planets show what activates it.",
  },
  {
    q: "What is the difference between Lilith asteroid and Black Moon Lilith?",
    a: "Black Moon Lilith is a calculated point — the lunar apogee — with no physical body. Asteroid 1181 Lilith is a real minor planet (a small asteroid orbiting in the asteroid belt) named for the mythological figure. They have related interpretations because they share the name and the symbolic resonance, but they move differently and are calculated differently. Practitioners often find the asteroid gives more grounded, embodied readings while Black Moon gives more archetypal, shadow-work readings.",
  },
  {
    q: "What is the Dark Moon Lilith?",
    a: "Dark Moon Lilith (also called Waldemath Black Moon) is a third Lilith point sometimes used in older astrology — a hypothetical second moon proposed by Georg Waldemath in the late 19th century. It has been astronomically disconfirmed (the second moon doesn't exist), but the calculated position is still used by some astrologers as a symbolic point. It is much less common in modern practice than Mean and True Black Moon Lilith.",
  },
  {
    q: "How does Black Moon Lilith relate to the priesthood of Lilith?",
    a: "The priesthood at lilitu.org reads Black Moon Lilith as the natal signature of the call. Strong Black Moon placements (conjunct the Sun, Moon, ASC, MC, or Venus; tight aspects to natal personal planets; emphasized house position) often appear in the charts of those drawn to the Lilith current. The placement is not a credential — many called souls have unremarkable Black Moon placements — but it is a frequent marker. Os Lamia offers chart and timing work that includes Black Moon Lilith analysis as part of the priesthood's services. See the FAQ at lilitu.org/faq.",
  },
];

export default function BlackMoonLilithPage() {
  const article = articleSchema({
    slug: "black-moon-lilith",
    title: "Black Moon Lilith — Meaning, Three Forms, How It Works in Your Chart",
    description:
      "Black Moon Lilith is the apogee of the Moon's orbit. Three forms exist. This is the complete reference from the seat of the Lilith priesthood.",
    keywords: ["Black Moon Lilith", "Lilith astrology", "lunar apogee", "Lilith asteroid 1181", "natal Lilith"],
    articleSection: "Astrology",
  });
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).url = `${SITE_URL}/black-moon-lilith`;
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).mainEntityOfPage = {
    "@id": `${SITE_URL}/black-moon-lilith`,
  };
  const faqs = faqSchema(FAQS, `${SITE_URL}/black-moon-lilith`);
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Black Moon Lilith", url: `${SITE_URL}/black-moon-lilith` },
  ]);

  return (
    <>
      <JsonLd data={[article, faqs, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ The Apogee ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-6xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}
              >
                Black Moon Lilith
              </span>
            </h1>
            <p className="mt-3 font-caps text-sm uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
              Three forms · twelve signs · twelve houses · what it means in your chart
            </p>
          </header>

          <section className="mt-12 rounded-2xl border p-7 md:p-9" style={{ borderColor: "rgba(200,151,122,0.4)", background: "linear-gradient(180deg, rgba(74,16,32,0.18), rgba(13,7,9,0.6))" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              Definition
            </p>
            <p className="mt-3 font-serif text-lg leading-relaxed text-[#ebdcc4] md:text-xl">
              <strong>Black Moon Lilith</strong> is an astrological point — not a body — marking the
              apogee of the Moon&rsquo;s elliptical orbit (the point furthest from Earth). The Moon
              moves around Earth in an ellipse; Earth sits at one focus, and the empty focus is
              Black Moon Lilith. In a natal chart its sign and house show the territory where the
              chart-holder will not be domesticated — where she is, finally and irreducibly,
              herself.
            </p>
          </section>

          <Section heading="The three forms — read all of them">
            <ul className="space-y-3">
              <li>
                <strong>Mean Black Moon Lilith</strong> — the averaged calculation, ignoring
                perturbations. The default in most astrology software. Smooth, archetypal,
                consistent.
              </li>
              <li>
                <strong>True Black Moon Lilith</strong> (osculating apogee) — the actual instantaneous
                apogee position accounting for orbital perturbations. More astronomically accurate,
                moves more erratically. Often gives sharper, more situational readings.
              </li>
              <li>
                <strong>Asteroid 1181 Lilith</strong> — a real minor planet discovered in 1927 by
                Benjamin Jekhowsky, named for the mythological figure. Behaves more like a personal
                planet; readings tend to be more embodied and grounded.
              </li>
            </ul>
            <p>
              Serious chart work uses all three. They commonly cluster in nearby degrees but
              sometimes spread across signs, in which case the spread itself is meaningful — the
              chart-holder&rsquo;s wildness operates differently in archetypal versus embodied
              registers.
            </p>
          </Section>

          <Section heading="Black Moon Lilith in the signs (brief)">
            <ul className="space-y-1.5">
              <li><strong>Aries</strong> — the fight as sovereignty</li>
              <li><strong>Taurus</strong> — the body as temple, refusing to be objectified</li>
              <li><strong>Gemini</strong> — speech that cuts</li>
              <li><strong>Cancer</strong> — the mother-line, broken or reclaimed</li>
              <li><strong>Leo</strong> — the spotlight on her own terms or not at all</li>
              <li><strong>Virgo</strong> — the disciplined refusal, the priestess</li>
              <li><strong>Libra</strong> — relationships only on equal footing</li>
              <li><strong>Scorpio</strong> — the deepest territory, sex and death held together</li>
              <li><strong>Sagittarius</strong> — the worldview that scandalizes the orthodox</li>
              <li><strong>Capricorn</strong> — the ladder she will not climb on terms set by others</li>
              <li><strong>Aquarius</strong> — the outsider as the seat</li>
              <li><strong>Pisces</strong> — the dissolved boundary that nevertheless holds</li>
            </ul>
          </Section>

          <Section heading="Black Moon Lilith in the houses (brief)">
            <ul className="space-y-1.5">
              <li><strong>1st</strong> — the wild self, visible refusal in body and presentation</li>
              <li><strong>2nd</strong> — sovereign relationship to value, money, the body</li>
              <li><strong>3rd</strong> — speech that cannot be made polite</li>
              <li><strong>4th</strong> — the family of origin as the place where the first refusal was learned</li>
              <li><strong>5th</strong> — erotic and creative sovereignty</li>
              <li><strong>6th</strong> — refusal to perform productivity-as-virtue</li>
              <li><strong>7th</strong> — relationships that fail unless the partner can hold the wildness</li>
              <li><strong>8th</strong> — sex, death, and shared resources as the deepest territory</li>
              <li><strong>9th</strong> — the worldview that does not fit the inherited religion</li>
              <li><strong>10th</strong> — a public face that refuses the script</li>
              <li><strong>11th</strong> — the chosen tribe over the assigned community</li>
              <li><strong>12th</strong> — the unconscious as the room where the dark feminine speaks first</li>
            </ul>
          </Section>

          <Section heading="Aspects to natal planets — what they activate">
            <p>
              Aspects from Black Moon Lilith to natal planets show how and where the wildness gets
              triggered.
            </p>
            <ul className="space-y-2">
              <li><strong>BML conjunct Sun</strong> — the wildness IS the identity. Cannot be hidden.</li>
              <li><strong>BML conjunct Moon</strong> — emotional life centered on the disowned feminine.</li>
              <li><strong>BML conjunct Venus</strong> — love and sexuality on her terms or not at all.</li>
              <li><strong>BML conjunct Mars</strong> — fight as sacred. The warrior priestess axis.</li>
              <li><strong>BML conjunct Mercury</strong> — speech as the cut, the truth that ends rooms.</li>
              <li><strong>BML conjunct Pluto</strong> — total transformation, the descent that returns nothing recognizable.</li>
              <li><strong>BML conjunct ASC</strong> — the wildness presents in the body and first impression.</li>
              <li><strong>BML conjunct MC</strong> — public vocation in the dark feminine territory.</li>
              <li><strong>Squares and oppositions</strong> — productive friction between the wildness and another life-area; the seeker must integrate or fragment.</li>
              <li><strong>Trines and sextiles</strong> — the wildness flows; risk of underestimating its weight.</li>
            </ul>
          </Section>

          <Section heading="How to find your own Black Moon Lilith">
            <p>
              Any free astrology calculator will show it. <a href="https://www.astro.com" target="_blank" rel="noopener" className="text-[#c8977a] underline-offset-4 hover:underline">Astro.com</a>{" "}
              offers the most flexible calculation. Under the natal chart settings, enable
              &ldquo;Mean Black Moon Lilith,&rdquo; &ldquo;True Black Moon Lilith,&rdquo; and the
              asteroid &ldquo;1181 Lilith.&rdquo; Note the sign, house, and any aspects to natal
              personal planets (Sun, Moon, Mercury, Venus, Mars), the angles (ASC, MC), and the
              outer planets (Pluto especially).
            </p>
            <p>
              For deeper reading: chart-and-timing work is one of the formal services Os Lamia
              offers. The reading includes Black Moon Lilith analysis (all three forms), sidereal
              13-sign Sun position with Ophiuchus emphasis where applicable, and timing
              recommendations for any work the chart-holder may want to begin in the Lilith
              current. See the{" "}
              <Link href="/faq" className="text-[#c8977a] underline-offset-4 hover:underline">FAQ</Link>{" "}
              for what counsel involves.
            </p>
          </Section>

          {/* FAQ block */}
          <Section heading="Common questions about Black Moon Lilith">
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
            <p className="font-script text-2xl" style={{ color: "#c8977a" }}>
              Renich · tasa · uberaca · biasa · icar · Lilith
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/lilith"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                The Lilith Reference →
              </Link>
              <Link
                href="/writings/ophiuchus-and-the-serpent-of-lilith"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                Ophiuchus + Lilith →
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                Chart Reading
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
