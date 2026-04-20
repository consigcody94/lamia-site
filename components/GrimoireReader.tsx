"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Chapter {
  hebrew: string;
  name: string;
  translit: string;
  gematria: number;
  paragraphs: string[];
}

interface Props {
  prologue: string[];
  chapters: Chapter[];
}

type Key = "prologue" | `ch${number}`;

export function GrimoireReader({ prologue, chapters }: Props) {
  const [active, setActive] = useState<Key>("prologue");

  const currentChapter =
    active === "prologue" ? null : chapters[Number(active.slice(2))];
  const currentParas = active === "prologue" ? prologue : currentChapter?.paragraphs ?? [];

  return (
    <div className="grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
      {/* Index */}
      <nav className="md:sticky md:top-24 md:self-start">
        <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
          ☾ Index ☾
        </p>
        <ul className="mt-5 flex flex-col gap-1">
          <IndexItem
            active={active === "prologue"}
            onClick={() => setActive("prologue")}
            roman="—"
            label="Prologue"
          />
          {chapters.map((c, i) => (
            <IndexItem
              key={c.name}
              active={active === `ch${i}`}
              onClick={() => setActive(`ch${i}` as Key)}
              roman={romanize(i + 1)}
              hebrew={c.hebrew}
              label={`The ${c.name} Chapter`}
            />
          ))}
        </ul>
      </nav>

      {/* Reader */}
      <div className="min-w-0">
        <AnimatePresence mode="wait">
          <motion.article
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border p-8 backdrop-blur md:p-10"
            style={{
              borderColor: "rgba(200,151,122,0.25)",
              background:
                "linear-gradient(165deg, rgba(13,7,9,0.85) 0%, rgba(50,10,20,0.3) 45%, rgba(13,7,9,0.9) 100%)",
            }}
          >
            {active === "prologue" ? (
              <>
                <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
                  ☾ Prologue ☾
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#ebdcc4" }}>
                  Before the Alphabet
                </h2>
              </>
            ) : (
              currentChapter && (
                <div className="flex items-baseline gap-5">
                  <span
                    className="font-display text-6xl leading-none md:text-7xl"
                    style={{ color: "#c8977a", textShadow: "0 0 24px rgba(200,151,122,0.4)" }}
                  >
                    {currentChapter.hebrew}
                  </span>
                  <div>
                    <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
                      Chapter · Gematria {currentChapter.gematria}
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#ebdcc4" }}>
                      The {currentChapter.name} Chapter
                    </h2>
                    <p className="mt-1 font-caps text-[11px] uppercase tracking-[0.35em]" style={{ color: "#a8a09b" }}>
                      {currentChapter.translit}
                    </p>
                  </div>
                </div>
              )
            )}

            <div className="mt-8 space-y-5">
              {currentParas.length === 0 ? (
                <p className="font-serif italic text-[#ebdcc4]/60">
                  This chapter was sealed and its text is not contained in this edition.
                </p>
              ) : (
                currentParas.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "font-serif text-lg leading-[1.9] text-[#ebdcc4]/85 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:float-left first-letter:pr-3 first-letter:pt-1"
                        : "font-serif text-lg leading-[1.9] text-[#ebdcc4]/85"
                    }
                    style={i === 0 ? ({ "--first-color": "#c8977a" } as React.CSSProperties) : undefined}
                  >
                    {i === 0 ? <span style={{ color: "#c8977a" }}>{p.charAt(0)}</span> : null}
                    {i === 0 ? p.substring(1) : p}
                  </p>
                ))
              )}
            </div>

            {/* Chapter footer ornament */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c8977a]/50" />
              <span className="font-script text-xl" style={{ color: "#c8977a" }}>❦</span>
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c8977a]/50" />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}

function IndexItem({
  active, onClick, roman, hebrew, label,
}: {
  active: boolean;
  onClick: () => void;
  roman: string;
  hebrew?: string;
  label: string;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-baseline gap-2.5 rounded px-2 py-1 text-left transition"
        style={{
          background: active ? "rgba(114,31,53,0.25)" : "transparent",
        }}
      >
        <span
          className="font-caps text-[9px] uppercase tracking-[0.3em] w-8 shrink-0"
          style={{ color: active ? "#e4b89c" : "rgba(200,151,122,0.55)" }}
        >
          {roman}
        </span>
        {hebrew && (
          <span
            className="font-display text-lg shrink-0"
            style={{ color: active ? "#e4b89c" : "#c8977a" }}
          >
            {hebrew}
          </span>
        )}
        <span
          className="font-serif text-sm leading-snug"
          style={{ color: active ? "#ebdcc4" : "rgba(235,220,196,0.6)" }}
        >
          {label}
        </span>
      </button>
    </li>
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
