import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Lattice } from "@/components/Lattice";
import { JsonLd } from "@/components/JsonLd";
import { latticeSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Lattice · Gematria & the Plenum · Os Lamia",
  description:
    "Working tool of the priesthood. Gematria across Hebrew (standard, sofit, ordinal), Greek isopsephy, and English Qaballa. Reverse lookup against the corpus of names. Prime decomposition into the Weavings of the L480 Plenum. The 22 letter stations of the aleph-bet.",
  alternates: { canonical: "/lattice" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/lattice`,
    title: "The Lattice — Gematria of the Plenum",
    description: "Hebrew, Greek, English Qaballa gematria. Reverse lookup. L480 Weavings. 22 aleph-bet stations.",
  },
};

export default function LatticePage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Lattice", url: `${SITE_URL}/lattice` },
  ]);
  return (
    <>
      <JsonLd data={[latticeSchema(), crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <Lattice />

        <div className="mx-auto mt-24 max-w-3xl border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
          <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
            ☾ Return ☾
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/liber-lilith"
              className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
              style={{
                borderColor: "rgba(200,151,122,0.5)",
                color: "#c8977a",
                background: "rgba(114,31,53,0.15)",
              }}
            >
              To the Grimoire →
            </Link>
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
