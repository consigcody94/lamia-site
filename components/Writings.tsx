"use client";

import { motion } from "framer-motion";
import { WRITINGS } from "@/lib/data";

export function Writings() {
  return (
    <section id="writings" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.55em]" style={{ color: "#b84040" }}>
            ⚭ From the Black Book ⚭
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide md:text-5xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #f5ecd7 0%, #e8a8a8 40%, #b84040 100%)" }}
            >
              Writings
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {WRITINGS.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="group flex flex-col rounded-xl border border-red-950/40 bg-black/40 p-6 backdrop-blur transition hover:border-[#b84040]/50"
            >
              <span className="font-display text-[9px] uppercase tracking-[0.4em]" style={{ color: "rgba(184,64,64,0.75)" }}>
                {w.tag}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-wide text-[#f5ecd7] group-hover:text-[#dcd6cf]">
                {w.title}
              </h3>
              <p className="mt-1 font-serif text-sm italic text-[#f5ecd7]/50">{w.subtitle}</p>
              <p className="mt-4 flex-1 font-serif text-sm leading-relaxed text-[#f5ecd7]/75">
                {w.excerpt}
              </p>
              <span className="mt-5 font-display text-[11px] uppercase tracking-[0.3em] transition group-hover:tracking-[0.4em]" style={{ color: "#b84040" }}>
                Read More →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
