"use client";

import { motion } from "framer-motion";
import { LINKS, SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b84040]/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.55em]" style={{ color: "#b84040" }}>
            ⚭ The Work I Hold ⚭
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide md:text-5xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #f5ecd7 0%, #e8a8a8 40%, #b84040 100%)" }}
            >
              Services & Sacred Work
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-base italic leading-relaxed text-[#f5ecd7]/65">
            I do not mediate between you and Lilith — she needs no mediator. My work is to hold
            ritual space for your descent, to witness the shedding, and to guard the fire.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="relative flex flex-col overflow-hidden rounded-xl border border-red-950/40 bg-gradient-to-br from-black/50 via-red-950/10 to-black/60 p-8 backdrop-blur"
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-3xl"
                  style={{
                    borderColor: "rgba(184,64,64,0.5)",
                    color: "#b84040",
                    background: "radial-gradient(circle, rgba(139,0,0,0.3), transparent 70%)",
                    textShadow: "0 0 18px rgba(139,0,0,0.9)",
                  }}
                >
                  {s.glyph}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-wide text-[#f5ecd7]">
                    {s.name}
                  </h3>
                  <p className="mt-1 font-display text-[10px] uppercase tracking-[0.3em]" style={{ color: "#dcd6cf" }}>
                    {s.format}
                  </p>
                </div>
              </div>
              <p className="mt-5 font-serif text-sm leading-relaxed text-[#f5ecd7]/75">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={LINKS.contact}
            className="inline-flex items-center gap-3 rounded-full border px-10 py-4 font-display text-xs uppercase tracking-[0.4em] shadow-[0_0_50px_-10px_rgba(139,0,0,0.9)] transition"
            style={{
              borderColor: "rgba(184,64,64,0.8)",
              background:
                "linear-gradient(180deg, rgba(139,0,0,0.35), rgba(90,0,0,0.45))",
              color: "#f5ecd7",
            }}
          >
            🕯️ Request Counsel
          </a>
          <p className="mt-4 font-serif text-[11px] italic text-[#f5ecd7]/45">
            All inquiries are read personally. Not all seekers are taken on.
          </p>
        </div>
      </div>
    </section>
  );
}
