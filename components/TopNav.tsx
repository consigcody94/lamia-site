"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LINKS } from "@/lib/data";

const NAV = [
  { href: "#teachings", label: "Teachings" },
  { href: "#services", label: "Services" },
  { href: "#writings", label: "Writings" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "bg-[#0d0709]/85 backdrop-blur-md border-b border-red-950/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <span className="font-caps text-xs uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>
            ⚭ Os Lamia ⚭
          </span>
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 font-caps text-[10px] uppercase tracking-[0.3em] text-[#ebdcc4]/60 transition hover:bg-red-900/20 hover:text-[#a8a09b]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={LINKS.contact}
          className="hidden rounded-full border border-[#c8977a]/50 bg-red-950/20 px-5 py-2 font-caps text-[10px] uppercase tracking-[0.3em] text-[#a8a09b] transition hover:border-[#c8977a] hover:bg-red-950/30 md:block"
        >
          Seek Counsel
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden rounded border border-red-950/40 px-3 py-1.5 text-[#a8a09b]"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col border-t border-red-950/40 bg-[#0d0709]/95 px-4 py-3 lg:hidden">
          {NAV.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-caps text-xs uppercase tracking-[0.3em] text-[#ebdcc4]/70"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={LINKS.contact}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded border border-[#c8977a]/50 bg-red-950/20 py-2 text-center font-caps text-xs uppercase tracking-[0.3em] text-[#a8a09b]"
            >
              Seek Counsel
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
