"use client";

import { useMemo, useState } from "react";
import { CORPUS_MAP, type CorpusVolume } from "@/lib/lineage";
import { LINEAGE, LINEAGE_CHAPTER } from "@/lib/data";

const STATUS_LABELS: Record<CorpusVolume["status"], string> = {
  primary: "Primary Source",
  foundational: "Foundational",
  operative: "Operative",
  system: "System",
  myth: "Mythography",
  encounter: "Encounter",
  scholarly: "Scholarly",
};

const STATUS_ORDER: CorpusVolume["status"][] = [
  "primary",
  "foundational",
  "operative",
  "system",
  "myth",
  "encounter",
  "scholarly",
];

export function Lineage() {
  const [filter, setFilter] = useState<CorpusVolume["status"] | "all">("all");

  const grouped = useMemo(() => {
    const out: Record<string, CorpusVolume[]> = {};
    for (const status of STATUS_ORDER) {
      const items = CORPUS_MAP.filter((c) => c.status === status);
      if (items.length) out[status] = items;
    }
    return out;
  }, []);

  const visible = useMemo(() => {
    if (filter === "all") return grouped;
    return { [filter]: grouped[filter] ?? [] };
  }, [filter, grouped]);

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="text-center">
        <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
          ⚭ The Lineage ⚭
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-7xl">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)",
            }}
          >
            The Line I Hold
          </span>
        </h1>
        <p className="mt-4 mx-auto max-w-2xl font-serif text-base italic leading-relaxed text-[#ebdcc4]/70 md:text-lg">
          Where the priesthood comes from, the books that grounded it, and the
          working corpus I read from. Mapped honestly, including what I do not endorse.
        </p>
      </div>

      {/* The founding circle */}
      <section className="mt-20">
        <p className="text-center font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
          ☾ {LINEAGE_CHAPTER.title} ☾
        </p>
        <p className="mt-2 text-center font-serif text-sm italic text-[#ebdcc4]/60">
          {LINEAGE_CHAPTER.locator} · Opened {LINEAGE_CHAPTER.openedDate}
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center font-serif text-base leading-relaxed text-[#ebdcc4]/80">
          {LINEAGE_CHAPTER.summary}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {LINEAGE.map((f) => (
            <article
              key={f.name}
              className="rounded-xl border border-red-950/40 bg-black/40 p-6 backdrop-blur transition hover:border-[#c8977a]/50"
            >
              <h3 className="font-display text-2xl font-semibold text-[#ebdcc4]">{f.name}</h3>
              <p className="mt-1 font-caps text-[10px] uppercase tracking-[0.3em]" style={{ color: "#c8977a" }}>
                {f.role}
              </p>
              <p className="mt-3 font-serif text-sm leading-relaxed text-[#ebdcc4]/80">{f.significance}</p>
              {f.link && (
                <a
                  href={f.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-caps text-[10px] uppercase tracking-[0.35em] text-[#c8977a] hover:text-[#ebdcc4]"
                >
                  Reference →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* The reading corpus */}
      <section className="mt-24">
        <div className="text-center">
          <p className="font-caps text-[11px] uppercase tracking-[0.5em]" style={{ color: "#c8977a" }}>
            ⚭ The Reading Corpus ⚭
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide md:text-4xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #c8977a 100%)" }}
            >
              Books of the Tradition
            </span>
          </h2>
          <p className="mt-3 mx-auto max-w-2xl font-serif text-sm italic text-[#ebdcc4]/65">
            Mapped by function, not by date. A primary source does different work than a
            modern systematizer; an encounter-text does different work than an operative manual.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <FilterBtn active={filter === "all"} onClick={() => setFilter("all")} label="All" />
          {STATUS_ORDER.map((s) => (
            grouped[s] && (
              <FilterBtn
                key={s}
                active={filter === s}
                onClick={() => setFilter(s)}
                label={STATUS_LABELS[s]}
              />
            )
          ))}
        </div>

        <div className="mt-10 space-y-12">
          {STATUS_ORDER.filter((s) => visible[s]?.length).map((status) => (
            <div key={status}>
              <h3 className="font-caps text-xs uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
                ◐ {STATUS_LABELS[status]} ◐
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {visible[status]?.map((v) => (
                  <article
                    key={`${v.title}-${v.author}`}
                    className="flex flex-col rounded-xl border border-red-950/40 bg-black/40 p-5 backdrop-blur transition hover:border-[#c8977a]/50"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-display text-xl font-semibold leading-tight text-[#ebdcc4]">
                        {v.title}
                      </h4>
                      {v.year && (
                        <span className="shrink-0 font-caps text-[9px] uppercase tracking-[0.3em] text-[#ebdcc4]/45">
                          {v.year}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-caps text-[10px] uppercase tracking-[0.3em]" style={{ color: "#c8977a" }}>
                      {v.author}
                    </p>
                    <p className="mt-1 font-serif text-xs italic text-[#ebdcc4]/55">{v.tradition}</p>
                    <p className="mt-3 font-serif text-sm leading-relaxed text-[#ebdcc4]/80">{v.what_it_is}</p>
                    <div className="mt-4 border-t border-red-950/40 pt-3">
                      <p className="font-caps text-[9px] uppercase tracking-[0.3em] text-[#ebdcc4]/45">From the seat</p>
                      <p className="mt-1 font-serif text-sm italic text-[#ebdcc4]/85">{v.how_it_lands}</p>
                    </div>
                    {v.link && (
                      <a
                        href={v.link}
                        className="mt-3 self-start font-caps text-[10px] uppercase tracking-[0.35em] text-[#c8977a] hover:text-[#ebdcc4]"
                      >
                        Open →
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FilterBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 font-caps text-[10px] uppercase tracking-[0.3em] transition ${
        active
          ? "border-[#c8977a] bg-red-950/30 text-[#ebdcc4]"
          : "border-red-950/40 text-[#ebdcc4]/55 hover:border-[#c8977a]/50 hover:text-[#ebdcc4]/85"
      }`}
    >
      {label}
    </button>
  );
}
