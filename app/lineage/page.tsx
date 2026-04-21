import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Lineage } from "@/components/Lineage";
import { JsonLd } from "@/components/JsonLd";
import { lineageCollectionSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Lineage · Books of the Tradition · Os Lamia",
  description:
    "The line Os Lamia holds and the books that ground it. From the founding circle of the Greater Church of Lucifer through the primary Gnostic and Kabbalistic sources (Apocryphon of John, Treatise on the Left Emanation, Zohar) to the contemporary Qliphothic system-makers. Mapped honestly from the seat of the priesthood.",
  alternates: { canonical: "/lineage" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/lineage`,
    title: "The Lineage — Books of the Tradition",
    description: "Founding circle of GCOL plus a 19-volume reading corpus mapped from the seat.",
  },
};

export default function LineagePage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Lineage", url: `${SITE_URL}/lineage` },
  ]);
  return (
    <>
      <JsonLd data={[lineageCollectionSchema(), crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <Lineage />

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
              href="/lattice"
              className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
              style={{
                borderColor: "rgba(200,151,122,0.5)",
                color: "#c8977a",
                background: "rgba(114,31,53,0.15)",
              }}
            >
              To the Lattice →
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
              Seek Counsel
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
