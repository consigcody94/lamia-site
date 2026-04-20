import { LINKS, PRIEST } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-red-950/50 bg-black/60 px-4 py-14 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
        <div className="font-display text-xs uppercase tracking-[0.55em]" style={{ color: "#b84040" }}>
          ⚭ {PRIEST.name} ⚭
        </div>
        <p className="font-display text-[10px] uppercase tracking-[0.45em] text-[#f5ecd7]/45">
          {PRIEST.title} · {PRIEST.location}
        </p>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-display text-[10px] uppercase tracking-[0.35em] text-[#f5ecd7]/55">
          <a href="#teachings" className="transition hover:text-[#dcd6cf]">Teachings</a>
          <a href="#services" className="transition hover:text-[#dcd6cf]">Services</a>
          <a href="#writings" className="transition hover:text-[#dcd6cf]">Writings</a>
          <a href="#about" className="transition hover:text-[#dcd6cf]">About</a>
          <a href="#contact" className="transition hover:text-[#dcd6cf]">Contact</a>
        </nav>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-display text-[10px] uppercase tracking-[0.3em]" style={{ color: "#b84040" }}>
          <a href={LINKS.contact} className="transition hover:text-[#dcd6cf]">Email</a>
          <span className="text-[#f5ecd7]/20">·</span>
          <a href={LINKS.discord} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]">Discord</a>
          <span className="text-[#f5ecd7]/20">·</span>
          <a href={LINKS.nol} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]">NOL</a>
          <span className="text-[#f5ecd7]/20">·</span>
          <a href={LINKS.lrs} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]">LRS</a>
          <span className="text-[#f5ecd7]/20">·</span>
          <a href={LINKS.tools} target="_blank" rel="noopener" className="transition hover:text-[#dcd6cf]">Ritual Tools</a>
        </div>
        <p className="font-serif text-[11px] italic text-[#b84040]/60 mt-2">
          {PRIEST.sigilGreeting}
        </p>
        <p className="font-display text-[10px] uppercase tracking-[0.35em] text-[#f5ecd7]/30">
          © {year} {PRIEST.name} · Under the Mother's Mark
        </p>
      </div>
    </footer>
  );
}
