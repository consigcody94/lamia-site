"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Writing } from "@/lib/data";
import { CrescentMoon } from "./Ornaments";

export function ArticleReader({ writing }: { writing: Writing }) {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mb-12 text-center"
      >
        <Link
          href="/#writings"
          className="inline-flex items-center gap-2 font-caps text-[10px] uppercase tracking-[0.4em] transition hover:text-[#e4b89c]"
          style={{ color: "#c8977a" }}
        >
          ← Back to Writings
        </Link>
        <p className="mt-8 font-caps text-[10px] uppercase tracking-[0.5em]" style={{ color: "#c8977a" }}>
          ☾ {writing.tag} · {writing.readTime} ☾
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-wider md:text-6xl">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)",
            }}
          >
            {writing.title}
          </span>
        </h1>
        <p className="mt-5 font-serif text-base italic md:text-lg" style={{ color: "#a8a09b" }}>
          {writing.subtitle}
        </p>
      </motion.header>

      {/* Ornamental divider */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-transparent to-[#c8977a]/60" />
        <span className="font-script text-2xl" style={{ color: "#c8977a" }}>❦</span>
        <span className="h-px flex-1 max-w-[140px] bg-gradient-to-l from-transparent to-[#c8977a]/60" />
      </div>

      {/* Intro — large leading paragraph with drop cap */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7 }}
        className="font-serif text-xl leading-[1.85] text-[#ebdcc4]/90 md:text-2xl"
      >
        <span
          className="float-left mr-3 mt-1 font-display leading-[0.82]"
          style={{
            fontSize: "5.5rem",
            color: "#c8977a",
            textShadow: "0 0 18px rgba(200,151,122,0.35)",
          }}
        >
          {writing.intro.charAt(0)}
        </span>
        {writing.intro.slice(1)}
      </motion.p>

      {/* Sections */}
      <div className="mt-12 space-y-10">
        {writing.sections.map((s, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.04 }}
          >
            {i > 0 && (
              <div className="mb-10 flex items-center justify-center gap-3" aria-hidden>
                <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#c8977a]/40" />
                <CrescentMoon size={18} />
                <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#c8977a]/40" />
              </div>
            )}
            {s.heading && (
              <h2
                className="mb-5 font-display text-2xl font-semibold md:text-3xl"
                style={{
                  color: "#e4b89c",
                }}
              >
                <span
                  className="mr-3 font-caps text-[10px] uppercase tracking-[0.45em]"
                  style={{ color: "#c8977a" }}
                >
                  {romanize(i + 1)}
                </span>
                {s.heading}
              </h2>
            )}
            <div className="space-y-5 font-serif text-lg leading-[1.9] text-[#ebdcc4]/85">
              {s.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            {s.pullQuote && (
              <figure className="my-10">
                <blockquote
                  className="relative border-y py-6 font-serif text-xl italic leading-relaxed md:text-2xl"
                  style={{
                    color: "#ebdcc4",
                    borderColor: "rgba(200,151,122,0.3)",
                  }}
                >
                  <span
                    className="absolute -left-1 top-0 font-display text-6xl leading-none"
                    style={{ color: "rgba(200,151,122,0.25)" }}
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <span className="block pl-8">{s.pullQuote}</span>
                </blockquote>
              </figure>
            )}
          </motion.section>
        ))}
      </div>

      {/* Closing ornament + signature */}
      <div className="mt-16 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
        <p
          className="font-script text-3xl md:text-4xl"
          style={{ color: "#c8977a" }}
        >
          {writing.closing}
        </p>
        <p className="mt-4 font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
          Os Lamia · High Priest of Lilith
        </p>
      </div>

      {/* Footer nav */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        <Link
          href="/#writings"
          className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
          style={{
            borderColor: "rgba(200,151,122,0.5)",
            color: "#c8977a",
            background: "rgba(114,31,53,0.15)",
          }}
        >
          ← More Writings
        </Link>
        <Link
          href="/liber-lilith"
          className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
          style={{
            borderColor: "rgba(200,151,122,0.5)",
            color: "#c8977a",
            background: "rgba(114,31,53,0.15)",
          }}
        >
          The Grimoire →
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
    </article>
  );
}

function romanize(n: number): string {
  const map: [number, string][] = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  for (const [v, s] of map) {
    while (n >= v) { out += s; n -= v; }
  }
  return out;
}
