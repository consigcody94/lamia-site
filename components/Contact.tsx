"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-2xl border border-[#b84040]/40 p-10 text-center shadow-[0_0_80px_-20px_rgba(139,0,0,0.6)] md:p-16"
          style={{
            background:
              "linear-gradient(160deg, rgba(10,6,6,0.95) 0%, rgba(50,0,0,0.35) 50%, rgba(10,6,6,0.95) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 candle"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(139,0,0,0.35), transparent 60%), radial-gradient(circle at 50% 100%, rgba(255,168,90,0.12), transparent 55%)",
            }}
          />
          <div className="relative">
            <p className="font-display text-[11px] uppercase tracking-[0.55em]" style={{ color: "#b84040" }}>
              ⚭ The Threshold ⚭
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-wide md:text-5xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #f5ecd7 0%, #e8a8a8 40%, #b84040 100%)" }}
              >
                Knock, and Name Yourself
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#f5ecd7]/80">
              I read every inquiry personally. Tell me who you are, what draws you to the Dark Mother,
              and what you are seeking. If the current answers, we will meet.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={LINKS.contact}
                className="inline-flex items-center gap-3 rounded-full border px-10 py-4 font-display text-xs uppercase tracking-[0.4em] shadow-[0_0_50px_-10px_rgba(139,0,0,1)] transition"
                style={{
                  borderColor: "#b84040",
                  background:
                    "linear-gradient(180deg, rgba(139,0,0,0.5), rgba(90,0,0,0.5))",
                  color: "#f5ecd7",
                }}
              >
                🕯️ Send Word
              </a>
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-full border border-red-950/50 bg-black/50 px-10 py-4 font-display text-xs uppercase tracking-[0.4em] text-[#f5ecd7]/80 transition hover:border-[#b84040]/60 hover:text-[#dcd6cf]"
              >
                Join the Discord
              </a>
            </div>
            <p className="mt-8 font-serif text-[11px] italic text-[#f5ecd7]/45">
              In-person work prioritized for Washington, Maryland, and Northern Virginia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
