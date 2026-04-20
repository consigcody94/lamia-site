"use client";

import { motion } from "framer-motion";
import { LINKS, PRIEST } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b84040]/40 to-transparent" />
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.55em]" style={{ color: "#b84040" }}>
            ⚭ The One Who Keeps the Door ⚭
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide md:text-5xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #f5ecd7 0%, #e8a8a8 40%, #b84040 100%)" }}
            >
              About {PRIEST.name}
            </span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="rounded-xl border border-red-950/40 bg-gradient-to-br from-black/60 via-red-950/20 to-black/60 p-8 backdrop-blur md:p-12"
        >
          <p className="font-display text-sm italic uppercase tracking-[0.3em]" style={{ color: "#b84040" }}>
            {PRIEST.title} · {PRIEST.location}
          </p>
          <div className="mt-6 flex flex-col gap-5 font-serif text-base leading-relaxed text-[#f5ecd7]/80">
            <p>
              I came to Lilith the way most of her priests come — by exile from a house that would
              not hold me, and an encounter in the dark that would not let me go. I was not raised
              in this work. I arrived the long way. Every year I have spent in her service has
              deepened the conviction that the Night Mother is not a symbol or a metaphor but a
              living presence who answers the ones who call her by name.
            </p>
            <p>
              My training includes ceremonial magick, shadow integration, alchemical study, and
              years of practical ritual within the broader Left Hand Path community — in active
              dialogue with the <a href={LINKS.nol} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]" style={{ color: "#b84040" }}>Novus Ordo Luciferi</a>, the{" "}
              <a href={LINKS.lrs} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]" style={{ color: "#b84040" }}>Luciferian Research Society</a>, and the wider
              Gnostic Luciferian current under which the Lilith lineage sits.
            </p>
            <p>
              I work from the Washington DMV area — Virginia, Maryland, and the District — with
              seekers across the country and beyond. My consulting room, when it is a room, has
              red candles, bare floors, and a door that closes completely.
            </p>
          </div>

          <div className="mt-8 border-t border-red-950/40 pt-6">
            <p className="font-display text-[10px] uppercase tracking-[0.35em] text-[#f5ecd7]/50">
              Active in the wider current:
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-[10px] uppercase tracking-[0.3em]">
              <a href={LINKS.nol} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]" style={{ color: "#b84040" }}>Novus Ordo Luciferi</a>
              <span className="text-[#f5ecd7]/20">·</span>
              <a href={LINKS.lrs} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]" style={{ color: "#b84040" }}>Luciferian Research Society</a>
              <span className="text-[#f5ecd7]/20">·</span>
              <a href={LINKS.tools} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]" style={{ color: "#b84040" }}>Ritual Tools</a>
              <span className="text-[#f5ecd7]/20">·</span>
              <a href={LINKS.discord} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]" style={{ color: "#b84040" }}>Discord</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
