import { LINKS, PRIEST } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-red-950/50 bg-black/60 px-4 py-14 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
        <div className="font-caps text-xs uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
          ⚭ {PRIEST.name} ⚭
        </div>
        <p className="font-caps text-[10px] uppercase tracking-[0.45em] text-[#ebdcc4]/45">
          {PRIEST.title} · {PRIEST.location}
        </p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-caps text-[10px] uppercase tracking-[0.35em] text-[#ebdcc4]/55">
          <a href="/lilith" className="transition hover:text-[#a8a09b]">Lilith</a>
          <a href="/lilitu" className="transition hover:text-[#a8a09b]">Lilitu</a>
          <a href="/liber-lilith" className="transition hover:text-[#a8a09b]">Grimoire</a>
          <a href="/letters" className="transition hover:text-[#a8a09b]">Letters</a>
          <a href="/lattice" className="transition hover:text-[#a8a09b]">Lattice</a>
          <a href="/lineage" className="transition hover:text-[#a8a09b]">Lineage</a>
          <a href="/black-moon-lilith" className="transition hover:text-[#a8a09b]">Black Moon</a>
          <a href="/#writings" className="transition hover:text-[#a8a09b]">Writings</a>
          <a href="/faq" className="transition hover:text-[#a8a09b]">FAQ</a>
          <a href="/cite" className="transition hover:text-[#a8a09b]">Cite</a>
          <a href="/press" className="transition hover:text-[#a8a09b]">Press</a>
          <a href="/#contact" className="transition hover:text-[#a8a09b]">Contact</a>
        </nav>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-caps text-[10px] uppercase tracking-[0.3em]" style={{ color: "#c8977a" }}>
          <a href={LINKS.contact} className="transition hover:text-[#a8a09b]">Email</a>
          <span className="text-[#ebdcc4]/20">·</span>
          <a href={LINKS.discord} target="_blank" rel="noopener" className="transition hover:text-[#a8a09b]">Discord</a>
          <span className="text-[#ebdcc4]/20">·</span>
          <a href={LINKS.nol} target="_blank" rel="noopener" className="transition hover:text-[#a8a09b]">NOL</a>
          <span className="text-[#ebdcc4]/20">·</span>
          <a href={LINKS.lrs} target="_blank" rel="noopener" className="transition hover:text-[#a8a09b]">LRS</a>
          <span className="text-[#ebdcc4]/20">·</span>
          <a href={LINKS.tools} target="_blank" rel="noopener" className="transition hover:text-[#a8a09b]">Ritual Tools</a>
        </div>
        <p className="font-script text-xl mt-3" style={{ color: "#c8977a" }}>
          {PRIEST.sigilGreeting}
        </p>
        <p className="font-caps text-[10px] uppercase tracking-[0.35em] text-[#ebdcc4]/30">
          © {year} {PRIEST.name} · Under the Mother's Mark
        </p>
      </div>
    </footer>
  );
}
