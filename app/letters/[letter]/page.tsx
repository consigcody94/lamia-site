import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL, ID } from "@/lib/schema";
import { LETTER_TEACHINGS, letterBySlug } from "@/lib/letter-content";
import { ALEPH_BET } from "@/lib/gematria";

interface Params {
  params: Promise<{ letter: string }>;
}

export function generateStaticParams() {
  return LETTER_TEACHINGS.map((l) => ({ letter: l.translit }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { letter } = await params;
  const l = letterBySlug(letter);
  if (!l) return { title: "Letter not found" };
  const title = `${l.name} (${l.letter}) — Letter Station ${l.ordinal} · Lilitu`;
  const description = `${l.name}, the ${l.literalMeaning.toLowerCase()}. Hebrew letter ${l.letter}, value ${l.value}, ordinal ${l.ordinal}. ${l.archetype}. ${l.station.split(". ")[0]}.`;
  return {
    title,
    description,
    alternates: { canonical: `/letters/${l.translit}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/letters/${l.translit}`,
      title,
      description,
      authors: ["Os Lamia"],
    },
  };
}

export default async function LetterStationPage({ params }: Params) {
  const { letter } = await params;
  const l = letterBySlug(letter);
  if (!l) return notFound();

  // Find the matching aleph-bet entry for path/planet/zodiac/element details
  const meta = ALEPH_BET.find((a) => a.translit.toLowerCase() === l.translit);

  // Previous and next letters for navigation
  const idx = LETTER_TEACHINGS.findIndex((x) => x.translit === l.translit);
  const prev = LETTER_TEACHINGS[idx - 1];
  const next = LETTER_TEACHINGS[idx + 1];

  const articleSchemaForLetter = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/letters/${l.translit}#article`,
    headline: `${l.name} (${l.letter}) — Letter Station ${l.ordinal}`,
    description: l.station,
    url: `${SITE_URL}/letters/${l.translit}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/letters/${l.translit}` },
    image: `${SITE_URL}/os-lamia-portrait.png`,
    author: { "@id": ID.person },
    publisher: { "@id": ID.organization },
    inLanguage: "en",
    datePublished: "2026-04-21",
    dateModified: "2026-04-21",
    keywords: [l.name, l.letter, "Hebrew aleph-bet", "Lilith", "Lilitu", "Qabalah", "Liber Umbrarum"].join(", "),
    articleSection: "Letter Stations",
    isPartOf: {
      "@id": ID.grimoire,
    },
  };
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Letters", url: `${SITE_URL}/letters` },
    { name: l.name, url: `${SITE_URL}/letters/${l.translit}` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchemaForLetter, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ Station {l.ordinal} of 22 ⚭
            </p>
            <div
              className="mt-8 font-display text-[12rem] leading-none md:text-[16rem]"
              style={{ color: "#ebdcc4", textShadow: "0 0 40px rgba(200,151,122,0.45)" }}
              aria-hidden
            >
              {l.letter}
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-wider md:text-6xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}
              >
                {l.name}
              </span>
            </h1>
            <p className="mt-3 font-caps text-sm uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
              {l.pronunciation} · value {l.value} · ordinal {l.ordinal}
            </p>
          </header>

          {/* Quick facts grid */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            <Fact label="Literal Meaning" value={l.literalMeaning} />
            <Fact label="Archetype" value={l.archetype} />
            <Fact label="Path Summary" value={l.pathSummary} />
            {meta?.planet && <Fact label="Planet" value={meta.planet} />}
            {meta?.zodiac && <Fact label="Zodiac" value={meta.zodiac} />}
            {meta?.element && <Fact label="Element" value={meta.element} />}
            {meta?.qliphoth && <Fact label="Shadow" value={meta.qliphoth} />}
          </div>

          {/* Teaching */}
          <Section heading="The Station">
            <p>{l.station}</p>
          </Section>

          <Section heading="In the Lilith Current">
            <p>{l.inLilith}</p>
          </Section>

          <Section heading="Working Note">
            <p className="italic">{l.workingNote}</p>
          </Section>

          {/* Resonant words */}
          {l.resonantWords && l.resonantWords.length > 0 && (
            <Section heading="Resonant Words at This Station">
              <ul className="space-y-3 not-italic">
                {l.resonantWords.map((w, i) => (
                  <li key={i} className="flex items-baseline justify-between gap-3 rounded border border-red-950/40 bg-black/30 px-4 py-3">
                    <div>
                      <span dir="rtl" className="font-display text-2xl text-[#ebdcc4]">{w.hebrew}</span>
                      <span className="ml-2 font-caps text-[10px] uppercase tracking-[0.3em]" style={{ color: "#c8977a" }}>
                        {w.translit}
                      </span>
                      <p className="mt-1 font-serif text-sm text-[#ebdcc4]/75">{w.meaning}</p>
                    </div>
                    <span className="shrink-0 font-display text-2xl text-[#c8977a]">{w.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm not-italic">
                <Link href={`/lattice`} className="font-caps text-[10px] uppercase tracking-[0.35em] text-[#c8977a] hover:text-[#ebdcc4]">
                  → Compute more words on the Lattice
                </Link>
              </p>
            </Section>
          )}

          {/* Prev/Next nav */}
          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t pt-8" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            {prev ? (
              <Link
                href={`/letters/${prev.translit}`}
                className="inline-flex items-center gap-3 rounded-full border px-5 py-2 font-caps text-[10px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                ← {prev.name} ({prev.letter})
              </Link>
            ) : (
              <span />
            )}
            <Link
              href="/letters"
              className="font-caps text-[10px] uppercase tracking-[0.4em] text-[#ebdcc4]/55 hover:text-[#c8977a]"
            >
              All 22 Stations
            </Link>
            {next ? (
              <Link
                href={`/letters/${next.translit}`}
                className="inline-flex items-center gap-3 rounded-full border px-5 py-2 font-caps text-[10px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                {next.name} ({next.letter}) →
              </Link>
            ) : (
              <Link
                href="/liber-lilith"
                className="inline-flex items-center gap-3 rounded-full border px-5 py-2 font-caps text-[10px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                Into the Grimoire →
              </Link>
            )}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-red-950/40 bg-black/30 px-4 py-3">
      <p className="font-caps text-[9px] uppercase tracking-[0.3em] text-[#ebdcc4]/45">{label}</p>
      <p className="mt-1 font-serif text-base text-[#ebdcc4]/85">{value}</p>
    </div>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-caps text-xs uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
        ◐ {heading} ◐
      </h2>
      <div className="mt-4 space-y-4 font-serif text-base leading-relaxed text-[#ebdcc4]/85 md:text-lg">
        {children}
      </div>
    </section>
  );
}
