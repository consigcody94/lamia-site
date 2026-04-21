"use client";

import { useMemo, useState } from "react";
import {
  calculate,
  factorize,
  divisors,
  isPrime,
  digitalRoot,
  weavings,
  findByValue,
  findNearby,
  findLandmark,
  ALEPH_BET,
  LANDMARKS,
  type Script,
  type HebrewMethod,
} from "@/lib/gematria";

type Tab = "calc" | "lookup" | "letters" | "landmarks";

export function Lattice() {
  const [tab, setTab] = useState<Tab>("calc");

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="text-center">
        <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
          ⚭ The Lattice ⚭
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-7xl">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)",
            }}
          >
            Lattice of the Plenum
          </span>
        </h1>
        <p className="mt-4 mx-auto max-w-2xl font-serif text-base italic leading-relaxed text-[#ebdcc4]/70 md:text-lg">
          Gematria across Hebrew, Greek, and English Qaballa. Reverse lookup against
          the corpus of names. Prime decomposition into the Weavings of the L480 Plenum.
          A working tool for those who walk the letters.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-12 flex flex-wrap justify-center gap-2 border-b border-red-950/40 pb-3">
        {([
          ["calc", "Calculate"],
          ["lookup", "Reverse Lookup"],
          ["letters", "The Aleph-Bet"],
          ["landmarks", "Landmarks"],
        ] as const).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`rounded-full border px-5 py-2 font-caps text-[10px] uppercase tracking-[0.35em] transition ${
              tab === k
                ? "border-[#c8977a] bg-red-950/30 text-[#ebdcc4]"
                : "border-red-950/40 text-[#ebdcc4]/55 hover:border-[#c8977a]/50 hover:text-[#ebdcc4]/85"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {tab === "calc" && <Calculator />}
        {tab === "lookup" && <ReverseLookup />}
        {tab === "letters" && <AlephBetGrid />}
        {tab === "landmarks" && <LandmarksGrid />}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   CALCULATOR
   ───────────────────────────────────────────────────────── */
function Calculator() {
  const [word, setWord] = useState("לילית");
  const [script, setScript] = useState<Script>("hebrew");
  const [method, setMethod] = useState<HebrewMethod>("standard");

  const result = useMemo(() => calculate(word, script, method), [word, script, method]);
  const factors = useMemo(() => factorize(result.total), [result.total]);
  const div = useMemo(() => divisors(result.total), [result.total]);
  const wvs = useMemo(() => weavings(result.total), [result.total]);
  const matches = useMemo(() => findByValue(result.total).filter((e) => e.word !== word), [result.total, word]);
  const landmark = useMemo(() => findLandmark(result.total), [result.total]);
  const nearby = useMemo(() => findNearby(result.total, 5), [result.total]);

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      {/* Input column */}
      <div>
        <label className="block">
          <span className="font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>
            Enter a word
          </span>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            dir={script === "hebrew" ? "rtl" : "ltr"}
            className="mt-2 w-full rounded-lg border border-red-950/40 bg-black/40 px-4 py-3 font-display text-2xl text-[#ebdcc4] outline-none transition focus:border-[#c8977a]/70"
          />
        </label>

        <div className="mt-5 flex flex-wrap gap-2">
          {(["hebrew", "greek", "english"] as Script[]).map((s) => (
            <button
              key={s}
              onClick={() => setScript(s)}
              className={`rounded-full border px-4 py-1.5 font-caps text-[10px] uppercase tracking-[0.3em] transition ${
                script === s
                  ? "border-[#c8977a] bg-red-950/30 text-[#ebdcc4]"
                  : "border-red-950/40 text-[#ebdcc4]/55 hover:border-[#c8977a]/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {script === "hebrew" && (
          <div className="mt-3 flex flex-wrap gap-2">
            {(["standard", "sofit", "ordinal"] as HebrewMethod[]).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`rounded-full border px-3 py-1 font-caps text-[9px] uppercase tracking-[0.3em] transition ${
                  method === m
                    ? "border-[#c8977a]/80 bg-red-950/20 text-[#c8977a]"
                    : "border-red-950/40 text-[#ebdcc4]/45 hover:border-[#c8977a]/40"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        )}

        <p className="mt-4 font-caps text-[10px] uppercase tracking-[0.3em] text-[#ebdcc4]/45">
          {result.method}
        </p>

        {result.letters.length > 0 && (
          <div className="mt-6 rounded-lg border border-red-950/40 bg-black/30 p-4">
            <p className="font-caps text-[10px] uppercase tracking-[0.3em] text-[#ebdcc4]/55">Per-letter breakdown</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {result.letters.map((l, i) => (
                <span
                  key={i}
                  className="inline-flex flex-col items-center rounded border border-[#c8977a]/30 bg-red-950/20 px-3 py-2"
                >
                  <span className="font-display text-2xl text-[#ebdcc4]">{l.ch}</span>
                  <span className="mt-1 font-caps text-[10px] tracking-[0.2em] text-[#c8977a]">{l.value}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {result.ignored.length > 0 && (
          <p className="mt-3 font-caps text-[9px] uppercase tracking-[0.3em] text-[#a8425a]/70">
            Ignored: {result.ignored.join(" · ")}
          </p>
        )}
      </div>

      {/* Result column */}
      <div>
        <div className="rounded-2xl border border-[#c8977a]/40 bg-gradient-to-b from-red-950/20 to-black/40 p-6 text-center">
          <p className="font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>
            Total Value
          </p>
          <div className="mt-3 font-display text-7xl font-semibold" style={{ color: "#ebdcc4", textShadow: "0 0 24px rgba(200,151,122,0.3)" }}>
            {result.total}
          </div>
          {landmark && (
            <p className="mt-3 font-serif text-base italic text-[#c8977a]">
              {landmark.label} — <span className="text-[#ebdcc4]/70">{landmark.notes}</span>
            </p>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center text-xs">
          <Stat label="Prime?" value={isPrime(result.total) ? "Yes" : "No"} />
          <Stat label="Digital Root" value={digitalRoot(result.total).toString()} />
          <Stat label="Divisors" value={div.length.toString()} />
          <Stat label="Factors" value={factors.length === 0 ? "—" : factors.length.toString()} />
        </div>

        {factors.length > 0 && (
          <div className="mt-5 rounded-lg border border-red-950/40 bg-black/30 p-4">
            <p className="font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Prime Factorization</p>
            <p className="mt-2 font-display text-xl text-[#ebdcc4]">{factors.join(" × ")}</p>
          </div>
        )}

        {wvs.length > 0 && (
          <div className="mt-4 rounded-lg border border-[#c8977a]/30 bg-black/30 p-4">
            <p className="font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Weavings</p>
            {wvs.map((w, i) => (
              <div key={i} className="mt-2 flex items-baseline justify-between gap-3">
                <div>
                  <span className="font-display text-base text-[#ebdcc4]">{w.name}</span>
                  {w.meaning && <span className="ml-2 font-serif text-xs italic text-[#ebdcc4]/55">{w.meaning}</span>}
                </div>
                <span className="font-display text-lg text-[#c8977a]">
                  {w.factors.join(" × ")} = {w.product}
                </span>
              </div>
            ))}
            {wvs.length >= 3 && (
              <p className="mt-3 border-t border-red-950/40 pt-2 font-caps text-[9px] uppercase tracking-[0.3em] text-[#ebdcc4]/55">
                Sum of Weavings ={" "}
                <span className="text-[#c8977a]">{wvs.reduce((s, w) => s + w.product, 0)}</span>
              </p>
            )}
          </div>
        )}

        {matches.length > 0 && (
          <div className="mt-4 rounded-lg border border-red-950/40 bg-black/30 p-4">
            <p className="font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">
              Other words at this value
            </p>
            <ul className="mt-2 space-y-1">
              {matches.map((e, i) => (
                <li key={i} className="font-serif text-sm text-[#ebdcc4]/85">
                  <span dir={e.script === "hebrew" ? "rtl" : "ltr"} className="font-display text-lg text-[#ebdcc4]">{e.word}</span>
                  <span className="ml-2 text-[#ebdcc4]/55">{e.translit} — {e.meaning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {nearby.length > 0 && (
          <div className="mt-4 rounded-lg border border-red-950/30 bg-black/20 p-4">
            <p className="font-caps text-[9px] uppercase tracking-[0.3em] text-[#ebdcc4]/45">Nearby (±5)</p>
            <ul className="mt-2 space-y-0.5 text-xs text-[#ebdcc4]/65">
              {nearby.slice(0, 5).map((e, i) => (
                <li key={i}>
                  <span className="text-[#c8977a]">{e.value}</span> · {e.translit} ({e.meaning})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-red-950/40 bg-black/30 px-3 py-2">
      <p className="font-caps text-[8px] uppercase tracking-[0.3em] text-[#ebdcc4]/50">{label}</p>
      <p className="mt-1 font-display text-base text-[#ebdcc4]">{value}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   REVERSE LOOKUP — search by number
   ───────────────────────────────────────────────────────── */
function ReverseLookup() {
  const [target, setTarget] = useState("480");
  const [scriptFilter, setScriptFilter] = useState<Script | "all">("all");
  const value = parseInt(target, 10);
  const matches = useMemo(() => {
    if (isNaN(value)) return [];
    return findByValue(value, scriptFilter === "all" ? undefined : [scriptFilter]);
  }, [value, scriptFilter]);
  const nearby = useMemo(() => (isNaN(value) ? [] : findNearby(value, 10)), [value]);
  const factors = useMemo(() => (isNaN(value) ? [] : factorize(value)), [value]);
  const wvs = useMemo(() => (isNaN(value) ? [] : weavings(value)), [value]);
  const landmark = useMemo(() => (isNaN(value) ? undefined : findLandmark(value)), [value]);

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
      <div>
        <label className="block">
          <span className="font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>
            Enter a number
          </span>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-2 w-full rounded-lg border border-red-950/40 bg-black/40 px-4 py-3 font-display text-3xl text-[#ebdcc4] outline-none transition focus:border-[#c8977a]/70"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {(["all", "hebrew", "greek", "english"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setScriptFilter(s)}
              className={`rounded-full border px-3 py-1 font-caps text-[9px] uppercase tracking-[0.3em] transition ${
                scriptFilter === s
                  ? "border-[#c8977a] bg-red-950/30 text-[#ebdcc4]"
                  : "border-red-950/40 text-[#ebdcc4]/55"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {!isNaN(value) && (
          <>
            {landmark && (
              <div className="mt-6 rounded-lg border border-[#c8977a]/40 bg-red-950/20 p-4">
                <p className="font-caps text-[10px] uppercase tracking-[0.4em] text-[#c8977a]">{landmark.label}</p>
                <p className="mt-2 font-serif text-sm text-[#ebdcc4]/85">{landmark.notes}</p>
              </div>
            )}
            {factors.length > 0 && (
              <p className="mt-4 font-caps text-[10px] uppercase tracking-[0.3em] text-[#ebdcc4]/65">
                Factors: <span className="text-[#c8977a]">{factors.join(" × ")}</span>
              </p>
            )}
            {wvs.length > 0 && (
              <div className="mt-3 space-y-1">
                {wvs.map((w, i) => (
                  <p key={i} className="font-caps text-[10px] uppercase tracking-[0.3em] text-[#ebdcc4]/65">
                    {w.name}: <span className="text-[#c8977a]">{w.factors.join(" × ")} = {w.product}</span>
                  </p>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <div>
        <p className="font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>
          Words at {isNaN(value) ? "—" : value}
        </p>
        {matches.length === 0 && !isNaN(value) && (
          <p className="mt-3 font-serif text-sm italic text-[#ebdcc4]/55">
            No exact matches in the corpus. The lattice has gaps; the corpus grows.
          </p>
        )}
        <div className="mt-3 space-y-2">
          {matches.map((e, i) => (
            <CorpusRow key={i} entry={e} />
          ))}
        </div>

        {nearby.length > 0 && (
          <>
            <p className="mt-8 font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>
              Nearby
            </p>
            <div className="mt-3 space-y-2">
              {nearby.slice(0, 8).map((e, i) => (
                <CorpusRow key={i} entry={e} compact />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CorpusRow({ entry, compact }: { entry: ReturnType<typeof findByValue>[number]; compact?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3 rounded border border-red-950/40 bg-black/30 px-3 py-2">
      <div>
        <span dir={entry.script === "hebrew" ? "rtl" : "ltr"} className="font-display text-xl text-[#ebdcc4]">
          {entry.word}
        </span>
        <span className="ml-2 font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">{entry.translit}</span>
        {!compact && entry.notes && (
          <p className="mt-0.5 font-serif text-xs italic text-[#ebdcc4]/55">{entry.notes}</p>
        )}
        <p className={`${compact ? "mt-0" : "mt-0.5"} font-serif text-sm text-[#ebdcc4]/75`}>{entry.meaning}</p>
      </div>
      <span className="shrink-0 font-display text-lg text-[#c8977a]">{entry.value}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   THE ALEPH-BET — 22 letter stations
   ───────────────────────────────────────────────────────── */
function AlephBetGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  const letter = selected !== null ? ALEPH_BET[selected] : null;

  return (
    <div>
      <p className="text-center font-serif text-base italic text-[#ebdcc4]/65">
        The 22 letters of the Hebrew aleph-bet — each a station on the path,
        each a chapter of the <em>Liber Lilith · Liber Umbrarum</em>.
      </p>

      <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11">
        {ALEPH_BET.map((l, i) => (
          <button
            key={l.letter}
            onClick={() => setSelected(i)}
            className={`group flex flex-col items-center rounded-lg border px-3 py-4 transition ${
              selected === i
                ? "border-[#c8977a] bg-red-950/40"
                : "border-red-950/40 bg-black/30 hover:border-[#c8977a]/60 hover:bg-red-950/20"
            }`}
          >
            <span className="font-display text-3xl text-[#ebdcc4] transition group-hover:text-[#c8977a]">{l.letter}</span>
            <span className="mt-1 font-caps text-[9px] uppercase tracking-[0.25em] text-[#c8977a]">{l.name}</span>
            <span className="mt-1 font-display text-xs text-[#ebdcc4]/60">{l.value}</span>
          </button>
        ))}
      </div>

      {letter && (
        <div className="mt-10 rounded-2xl border border-[#c8977a]/40 bg-gradient-to-b from-red-950/20 to-black/40 p-8">
          <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
            <div className="text-center">
              <div className="font-display text-9xl text-[#ebdcc4]" style={{ textShadow: "0 0 30px rgba(200,151,122,0.4)" }}>
                {letter.letter}
              </div>
              <p className="mt-2 font-caps text-[11px] uppercase tracking-[0.4em] text-[#c8977a]">
                {letter.ordinal} · {letter.name}
              </p>
              <p className="mt-1 font-display text-xl text-[#c8977a]">value {letter.value}</p>
            </div>
            <div>
              <p className="font-serif text-lg italic text-[#ebdcc4]/85">{letter.meaning}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {letter.path && <Field label="Path" value={letter.path} />}
                {letter.planet && <Field label="Planet" value={letter.planet} />}
                {letter.zodiac && <Field label="Zodiac" value={letter.zodiac} />}
                {letter.element && <Field label="Element" value={letter.element} />}
                {letter.qliphoth && <Field label="Shadow" value={letter.qliphoth} />}
                <Field label="Translit" value={letter.translit} />
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-red-950/40 bg-black/30 px-3 py-2">
      <dt className="font-caps text-[9px] uppercase tracking-[0.3em] text-[#ebdcc4]/45">{label}</dt>
      <dd className="mt-0.5 font-serif text-sm text-[#ebdcc4]/85">{value}</dd>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   LANDMARKS — known sacred numbers
   ───────────────────────────────────────────────────────── */
function LandmarksGrid() {
  return (
    <div>
      <p className="text-center font-serif text-base italic text-[#ebdcc4]/65">
        Known landmarks of the lattice — numbers that recur across traditions.
        Click any value to bring it into the calculator.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {LANDMARKS.map((l) => (
          <div
            key={l.value}
            className="rounded-lg border border-red-950/40 bg-black/30 p-4 transition hover:border-[#c8977a]/60"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl text-[#c8977a]">{l.value}</span>
              <span className="font-caps text-[9px] uppercase tracking-[0.3em] text-[#ebdcc4]/55">
                {l.label}
              </span>
            </div>
            <p className="mt-2 font-serif text-xs leading-relaxed text-[#ebdcc4]/70">{l.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
