"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LINKS, PRIEST } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-20 md:px-8 md:pt-32 md:pb-28"
    >
      {/* pentagram glow behind portrait */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 candle"
          style={{
            background:
              "radial-gradient(ellipse 45% 55% at 35% 55%, rgba(139,0,0,0.35), transparent 65%), radial-gradient(ellipse 25% 20% at 15% 72%, rgba(255,168,90,0.15), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        {/* PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div
            className="absolute -inset-3 rounded-[1.2rem] blur-2xl moon-pulse"
            style={{
              background:
                "radial-gradient(ellipse at 40% 50%, rgba(139,0,0,0.6), rgba(90,0,0,0.25) 50%, transparent 80%)",
            }}
          />
          <div className="relative overflow-hidden rounded-[1rem] border border-[#b84040]/30 shadow-[0_30px_80px_-20px_rgba(139,0,0,0.7)]">
            <Image
              src="/os-lamia-portrait.png"
              alt={`${PRIEST.name}, ${PRIEST.title}`}
              width={1024}
              height={1536}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0606]/40" />
          </div>
        </motion.div>

        {/* TITLE BLOCK */}
        <div className="flex flex-col md:pl-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[11px] uppercase tracking-[0.55em] md:text-xs"
            style={{ color: "#b84040" }}
          >
            ⚭ {PRIEST.location} ⚭
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-wider md:text-5xl lg:text-6xl"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #f5ecd7 0%, #e8a8a8 30%, #b84040 60%, #5a0000 100%)",
              }}
            >
              High Priest
              <br />
              of Lilith
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.55 }}
            className="mt-6 font-display text-base uppercase tracking-[0.4em] md:text-lg"
            style={{ color: "#dcd6cf" }}
          >
            {PRIEST.name}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.7 }}
            className="mt-6 max-w-xl font-serif text-base italic leading-relaxed text-[#f5ecd7]/80 md:text-lg"
          >
            {PRIEST.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.85 }}
            className="mt-4 max-w-xl font-serif text-base leading-relaxed text-[#f5ecd7]/70"
          >
            {PRIEST.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 rounded-full border px-8 py-3.5 font-display text-xs uppercase tracking-[0.35em] shadow-[0_0_40px_-10px_rgba(139,0,0,0.9)] transition"
              style={{
                borderColor: "rgba(184,64,64,0.7)",
                background:
                  "linear-gradient(180deg, rgba(139,0,0,0.35), rgba(90,0,0,0.35))",
                color: "#f5ecd7",
              }}
            >
              🕯️ Seek Counsel
            </a>
            <a
              href="#teachings"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-red-950/50 bg-black/40 px-8 py-3.5 font-display text-xs uppercase tracking-[0.35em] text-[#f5ecd7]/80 transition hover:border-[#b84040]/60 hover:text-[#dcd6cf]"
            >
              Teachings of Lilith ↓
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.6 }}
            className="mt-10 font-serif text-[10px] italic tracking-[0.3em] text-[#b84040]/70"
          >
            {PRIEST.sigilGreeting}
          </motion.p>

          <div className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#f5ecd7]/30">
            — traditional invocation of Lilith
          </div>
        </div>
      </div>
    </section>
  );
}
