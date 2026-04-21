import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Lineage } from "@/components/Lineage";

export const metadata: Metadata = {
  title: "The Lineage · Books of the Tradition · Os Lamia",
  description:
    "The line I hold and the books that ground it. From the founding circle of the Greater Church of Lucifer through the primary Gnostic and Kabbalistic sources to the contemporary Qliphothic system-makers. Mapped honestly from the seat of the priesthood.",
};

export default function LineagePage() {
  return (
    <>
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
