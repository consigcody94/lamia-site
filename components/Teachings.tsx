"use client";

import { motion } from "framer-motion";
import { TEACHINGS } from "@/lib/data";

export function Teachings() {
  return (
    <section id="teachings" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
            ⚭ The Teachings of Lilith ⚭
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide md:text-5xl">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 40%, #c8977a 100%)",
              }}
            >
              Six Pillars of the Dark Mother
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-base italic leading-relaxed text-[#ebdcc4]/65">
            The tradition I teach is living, practical, and rooted in direct contact with the
            current. These are the six pillars every seeker is asked to meet before the deeper
            work begins.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEACHINGS.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-red-950/40 bg-gradient-to-br from-black/60 via-red-950/15 to-black/60 p-6 backdrop-blur transition hover:border-[#c8977a]/50"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(114,31,53,0.2), transparent 60%)",
                }}
              />
              <div
                className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full border text-2xl leading-none"
                style={{
                  borderColor: "rgba(200,151,122,0.45)",
                  color: "#c8977a",
                  background: "radial-gradient(circle, rgba(114,31,53,0.25), transparent 70%)",
                  textShadow: "0 0 16px rgba(114,31,53,0.8)",
                }}
              >
                {t.glyph}
              </div>
              <h3 className="relative font-display text-xl font-semibold tracking-wide text-[#ebdcc4]">
                {t.title}
              </h3>
              <p className="relative mt-1 font-serif text-xs italic uppercase tracking-[0.25em]" style={{ color: "#c8977a" }}>
                {t.epithet}
              </p>
              <p className="relative mt-4 font-serif text-sm leading-relaxed text-[#ebdcc4]/75">
                {t.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
