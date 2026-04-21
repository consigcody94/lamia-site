import type { Metadata } from "next";
import Link from "next/link";
import grimoire from "@/lib/liber-lilith.json";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { GrimoireReader } from "@/components/GrimoireReader";
import { JsonLd } from "@/components/JsonLd";
import { bookSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Liber Lilith · The Grimoire · Os Lamia",
  description:
    "Liber Lilith — Liber Umbrarum Tomus Primus. The grimoire of the Lilith priesthood, structured as the Hebrew aleph-bet. Twenty-two chapters revealed by Lilith, Queen of the Harlots, unto Lamech in the line of Cain. Compiled and bound by Os Lamia, High Priest of Lilith.",
  alternates: { canonical: "/liber-lilith" },
  openGraph: {
    type: "book",
    url: `${SITE_URL}/liber-lilith`,
    title: "Liber Lilith — Liber Umbrarum Tomus Primus",
    description: "The grimoire of the Lilith priesthood, twenty-two chapters of the Hebrew aleph-bet.",
    authors: ["Os Lamia"],
  },
};

export default function LiberLilithPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Liber Lilith", url: `${SITE_URL}/liber-lilith` },
  ]);
  return (
    <>
      <JsonLd data={[bookSchema(), crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ☾ Liber Umbrarum · Tomus Primus ☾
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-7xl">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)",
                }}
              >
                {grimoire.title}
              </span>
            </h1>
            <p className="mt-3 font-caps text-sm uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
              {grimoire.subtitle}
            </p>
            <div
              className="mt-8 font-script text-4xl md:text-5xl"
              style={{ color: "#c8977a" }}
              aria-hidden
            >
              לילית
            </div>
            <p className="mx-auto mt-8 max-w-2xl font-serif text-base italic leading-relaxed text-[#ebdcc4]/75 md:text-lg">
              {grimoire.attribution}
            </p>
            <blockquote className="mx-auto mt-10 max-w-xl border-y py-6" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
              <p className="font-serif text-xl italic leading-relaxed text-[#ebdcc4] md:text-2xl">
                &ldquo;{grimoire.opening}&rdquo;
              </p>
              <p className="mt-4 font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>
                {grimoire.openingAttr}
              </p>
            </blockquote>
            <p className="mt-8 font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              Compiled · Translated · Bound
            </p>
            <p className="mt-1 font-caps text-[10px] uppercase tracking-[0.45em] text-[#ebdcc4]/40">
              Privatim Impressum · Hosted by Os Lamia
            </p>
          </div>

          <div className="my-16 flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c8977a]/40 to-[#c8977a]/60" />
            <span className="font-script text-2xl" style={{ color: "#c8977a" }}>❦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c8977a]/40 to-[#c8977a]/60" />
          </div>

          <GrimoireReader
            prologue={grimoire.prologue}
            chapters={grimoire.chapters}
          />

          <div className="mt-24 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              ☾ Return ☾
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/#writings"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{
                  borderColor: "rgba(200,151,122,0.5)",
                  color: "#c8977a",
                  background: "rgba(114,31,53,0.15)",
                }}
              >
                ← To the Writings
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{
                  borderColor: "rgba(200,151,122,0.5)",
                  color: "#c8977a",
                  background: "rgba(114,31,53,0.15)",
                }}
              >
                Seek Counsel with Os Lamia
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
