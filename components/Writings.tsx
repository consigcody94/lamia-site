"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WRITINGS } from "@/lib/data";

export function Writings() {
  return (
    <section id="writings" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
            ⚭ From the Black Book ⚭
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide md:text-5xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 40%, #c8977a 100%)" }}
            >
              Writings
            </span>
          </h2>
        </div>

        {/* Featured: Liber Lilith grimoire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-10"
        >
          <Link
            href="/liber-lilith"
            className="group relative block overflow-hidden rounded-2xl border p-10 md:p-14"
            style={{
              borderColor: "rgba(200,151,122,0.45)",
              background:
                "linear-gradient(160deg, rgba(13,7,9,0.95) 0%, rgba(74,16,32,0.35) 45%, rgba(13,7,9,0.95) 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 candle"
              style={{
                background:
                  "radial-gradient(ellipse 50% 60% at 30% 40%, rgba(114,31,53,0.3), transparent 60%), radial-gradient(ellipse 40% 40% at 85% 80%, rgba(186,107,58,0.1), transparent 70%)",
              }}
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[auto_minmax(0,1fr)_auto]">
              <div
                className="font-display text-8xl md:text-9xl"
                style={{ color: "#c8977a", textShadow: "0 0 30px rgba(200,151,122,0.5)" }}
                aria-hidden
              >
                לילית
              </div>
              <div>
                <p className="font-caps text-[10px] uppercase tracking-[0.5em]" style={{ color: "#c8977a" }}>
                  ☾ Complete Grimoire · 22 Chapters ☾
                </p>
                <h3 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}
                  >
                    Liber Lilith
                  </span>
                </h3>
                <p className="mt-2 font-caps text-[11px] uppercase tracking-[0.4em]" style={{ color: "#a8a09b" }}>
                  The Grimoire · Liber Umbrarum Tomus Primus
                </p>
                <p className="mt-5 max-w-xl font-serif text-base italic leading-relaxed text-[#ebdcc4]/80">
                  The mysteries of forbidden knowledge revealed by Lilith, Queen of the Harlots,
                  unto Lamech in the line of Cain. Twenty-two chapters, one for each letter of the
                  Hebrew aleph-bet. Hosted and compiled by Os Lamia.
                </p>
              </div>
              <span
                className="hidden shrink-0 font-caps text-[11px] uppercase tracking-[0.4em] transition group-hover:tracking-[0.5em] md:block"
                style={{ color: "#c8977a" }}
              >
                Open →
              </span>
            </div>
            <div className="relative mt-6 font-caps text-[11px] uppercase tracking-[0.4em] md:hidden" style={{ color: "#c8977a" }}>
              Open the Grimoire →
            </div>
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {WRITINGS.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="group flex flex-col rounded-xl border border-red-950/40 bg-black/40 p-6 backdrop-blur transition hover:border-[#c8977a]/50"
            >
              <span className="font-caps text-[9px] uppercase tracking-[0.4em]" style={{ color: "rgba(200,151,122,0.75)" }}>
                {w.tag}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-wide text-[#ebdcc4] group-hover:text-[#a8a09b]">
                {w.title}
              </h3>
              <p className="mt-1 font-serif text-sm italic text-[#ebdcc4]/50">{w.subtitle}</p>
              <p className="mt-4 flex-1 font-serif text-sm leading-relaxed text-[#ebdcc4]/75">
                {w.excerpt}
              </p>
              <span className="mt-5 font-caps text-[11px] uppercase tracking-[0.3em] transition group-hover:tracking-[0.4em]" style={{ color: "#c8977a" }}>
                Read More →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
