import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { LETTER_TEACHINGS } from "@/lib/letter-content";

export const metadata: Metadata = {
  title: "The 22 Letter Stations · Liber Umbrarum · Lilitu",
  description:
    "The twenty-two stations of the Hebrew aleph-bet as walked in the Lilith current. One chapter per letter from the Liber Lilith — Liber Umbrarum Tomus Primus, by Os Lamia, High Priest of Lilith.",
  alternates: { canonical: "/letters" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/letters`,
    title: "The 22 Letter Stations of the Lilith Priesthood",
    description: "One station per Hebrew letter. The skeleton of the Liber Lilith.",
  },
};

export default function LettersIndex() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/letters#list`,
    name: "The 22 Letter Stations",
    numberOfItems: LETTER_TEACHINGS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: LETTER_TEACHINGS.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${l.name} (${l.letter}) — value ${l.value}`,
      url: `${SITE_URL}/letters/${l.translit}`,
    })),
  };
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Letters", url: `${SITE_URL}/letters` },
  ]);

  return (
    <>
      <JsonLd data={[itemListSchema, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ The 22 Stations ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-7xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}
              >
                The Letter Stations
              </span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl font-serif text-base italic leading-relaxed text-[#ebdcc4]/70 md:text-lg">
              The twenty-two letters of the Hebrew aleph-bet, each a chapter of the{" "}
              <em>Liber Lilith — Liber Umbrarum</em>, walked by the priesthood from the seat.
            </p>
          </header>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {LETTER_TEACHINGS.map((l) => (
              <Link
                key={l.translit}
                href={`/letters/${l.translit}`}
                className="group flex flex-col rounded-xl border border-red-950/40 bg-black/40 p-5 backdrop-blur transition hover:border-[#c8977a]/60 hover:bg-red-950/20"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl text-[#ebdcc4] transition group-hover:text-[#c8977a]">
                    {l.letter}
                  </span>
                  <span className="font-caps text-[10px] uppercase tracking-[0.3em] text-[#ebdcc4]/55">
                    {l.ordinal} · {l.value}
                  </span>
                </div>
                <p className="mt-3 font-display text-lg font-semibold text-[#ebdcc4]">{l.name}</p>
                <p className="mt-1 font-caps text-[9px] uppercase tracking-[0.3em]" style={{ color: "#c8977a" }}>
                  {l.literalMeaning}
                </p>
                <p className="mt-3 font-serif text-xs italic leading-relaxed text-[#ebdcc4]/65">
                  {l.archetype}
                </p>
                <span className="mt-4 font-caps text-[10px] uppercase tracking-[0.35em] transition group-hover:tracking-[0.45em]" style={{ color: "#c8977a" }}>
                  Open the station →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              ☾ The Stations Open Into the Grimoire ☾
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
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
                Compute on the Lattice →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
