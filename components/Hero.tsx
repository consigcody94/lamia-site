"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LINKS, PRIEST } from "@/lib/data";
import { PortraitFrame } from "./PortraitFrame";
import { Serpent } from "./Ornaments";

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
              "radial-gradient(ellipse 45% 55% at 35% 55%, rgba(114,31,53,0.35), transparent 65%), radial-gradient(ellipse 25% 20% at 15% 72%, rgba(186,107,58,0.15), transparent 70%)",
          }}
        />
        {/* Flanking serpents on desktop, low opacity blend */}
        <Serpent className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-25 xl:block" size={70} />
        <Serpent className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-25 xl:block" size={70} flip />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        {/* PORTRAIT — subject-tight cutout, no box, no glow over the figure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative mx-auto w-full max-w-[480px]"
        >
          <PortraitFrame className="p-2 md:p-3">
            <Image
              src="/os-lamia-portrait.png"
              alt={`${PRIEST.name}, ${PRIEST.title}`}
              width={1024}
              height={1536}
              priority
              className="relative block h-auto w-full"
            />
          </PortraitFrame>
        </motion.div>

        {/* TITLE BLOCK */}
        <div className="flex flex-col md:pl-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-caps text-[11px] uppercase tracking-[0.55em] md:text-xs"
            style={{ color: "#c8977a" }}
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
                  "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)",
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
            style={{ color: "#a8a09b" }}
          >
            {PRIEST.name}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.7 }}
            className="mt-6 max-w-xl font-serif text-base italic leading-relaxed text-[#ebdcc4]/80 md:text-lg"
          >
            {PRIEST.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.85 }}
            className="mt-4 max-w-xl font-serif text-base leading-relaxed text-[#ebdcc4]/70"
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
              className="inline-flex items-center justify-center gap-3 rounded-full border px-8 py-3.5 font-caps text-xs uppercase tracking-[0.35em] shadow-[0_0_40px_-10px_rgba(114,31,53,0.9)] transition"
              style={{
                borderColor: "rgba(200,151,122,0.7)",
                background:
                  "linear-gradient(180deg, rgba(114,31,53,0.35), rgba(74,16,32,0.35))",
                color: "#ebdcc4",
              }}
            >
              ☾ Seek Counsel
            </a>
            <a
              href="#teachings"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-red-950/50 bg-black/40 px-8 py-3.5 font-caps text-xs uppercase tracking-[0.35em] text-[#ebdcc4]/80 transition hover:border-[#c8977a]/60 hover:text-[#a8a09b]"
            >
              Teachings of Lilith ↓
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.6 }}
            className="mt-10 font-script text-2xl tracking-normal md:text-3xl"
            style={{ color: "#c8977a" }}
          >
            {PRIEST.sigilGreeting}
          </motion.p>

          <div className="mt-2 font-caps text-[9px] uppercase tracking-[0.35em] text-[#ebdcc4]/35">
            ☾ traditional invocation of Lilith ☾
          </div>
        </div>
      </div>
    </section>
  );
}
