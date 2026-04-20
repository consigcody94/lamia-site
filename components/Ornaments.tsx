"use client";

/* ═══════════════════════════════════════════════════════════════════════
   Ornamental SVG components for the Lamia site.
   All stroke-based, use rose-gold gradient, blend naturally with the page.
   ══════════════════════════════════════════════════════════════════════ */

const GRADIENT = (
  <defs>
    <linearGradient id="rose-gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#fff5d0" stopOpacity="0.85" />
      <stop offset="45%" stopColor="#e4b89c" />
      <stop offset="100%" stopColor="#7a5230" />
    </linearGradient>
    <linearGradient id="rose-gold-horiz" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#7a5230" stopOpacity="0.6" />
      <stop offset="50%" stopColor="#e4b89c" />
      <stop offset="100%" stopColor="#7a5230" stopOpacity="0.6" />
    </linearGradient>
  </defs>
);

/* ─── SERPENT — curled vertical ornament, for corners and column sides ─── */
export function Serpent({ className = "", size = 80, flip = false }: { className?: string; size?: number; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 260"
      width={size}
      height={(size * 260) / 100}
      className={className}
      aria-hidden
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      {GRADIENT}
      {/* Body sinuous curve */}
      <path
        d="M 50 10
           C 30 30, 80 60, 50 90
           C 20 120, 80 150, 50 180
           C 20 210, 70 230, 50 250"
        stroke="url(#rose-gold)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Scale texture — small diamond pattern along body */}
      <g stroke="url(#rose-gold)" strokeWidth="0.7" fill="none" opacity="0.55">
        <path d="M 42 25 L 50 30 L 58 25" />
        <path d="M 58 55 L 50 60 L 42 55" />
        <path d="M 42 85 L 50 90 L 58 85" />
        <path d="M 58 115 L 50 120 L 42 115" />
        <path d="M 42 145 L 50 150 L 58 145" />
        <path d="M 58 175 L 50 180 L 42 175" />
        <path d="M 42 205 L 50 210 L 58 205" />
      </g>
      {/* Head */}
      <g>
        <path
          d="M 40 4 Q 50 0 60 4 Q 62 10 58 14 Q 50 18 42 14 Q 38 10 40 4 Z"
          fill="url(#rose-gold)"
        />
        {/* forked tongue */}
        <path d="M 50 16 L 48 22 M 50 16 L 52 22 M 48 22 L 46 25 M 52 22 L 54 25" stroke="#8a2b2b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* eye */}
        <circle cx="46" cy="8" r="1.2" fill="#0d0709" />
      </g>
      {/* Tail taper */}
      <path
        d="M 50 250 Q 48 254 46 258"
        stroke="url(#rose-gold)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── OWL — small heraldic owl for dividers ─── */
export function Owl({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} className={className} aria-hidden>
      {GRADIENT}
      {/* Body */}
      <path
        d="M 30 6
           C 14 6, 6 18, 8 30
           C 8 36, 12 39, 17 37
           L 17 42
           C 17 52, 43 52, 43 42
           L 43 37
           C 48 39, 52 36, 52 30
           C 54 18, 46 6, 30 6 Z"
        fill="url(#rose-gold)"
        stroke="#5a3810"
        strokeWidth="0.5"
      />
      {/* Ear tufts */}
      <path d="M 14 10 L 17 3 L 20 10 Z" fill="url(#rose-gold)" />
      <path d="M 40 10 L 43 3 L 46 10 Z" fill="url(#rose-gold)" />
      {/* Eyes */}
      <circle cx="22" cy="20" r="4.5" fill="#0d0709" />
      <circle cx="38" cy="20" r="4.5" fill="#0d0709" />
      <circle cx="22" cy="20" r="1.8" fill="#e4b89c" />
      <circle cx="38" cy="20" r="1.8" fill="#e4b89c" />
      <circle cx="21.3" cy="19" r="0.6" fill="#fff5d0" />
      <circle cx="37.3" cy="19" r="0.6" fill="#fff5d0" />
      {/* Beak */}
      <path d="M 30 26 L 27 32 L 33 32 Z" fill="#8a2b2b" />
      {/* Chest feathers */}
      <g stroke="#5a3810" strokeWidth="0.5" fill="none" opacity="0.55">
        <path d="M 20 42 Q 30 46 40 42" />
        <path d="M 22 47 Q 30 50 38 47" />
      </g>
    </svg>
  );
}

/* ─── CRESCENT MOON — solo moon for accents ─── */
export function CrescentMoon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} aria-hidden>
      {GRADIENT}
      <path
        d="M 26 6 A 14 14 0 1 0 26 34 A 10 10 0 1 1 26 6 Z"
        fill="url(#rose-gold)"
        style={{ filter: "drop-shadow(0 0 4px rgba(200,151,122,0.45))" }}
      />
    </svg>
  );
}

/* ─── LILITH SIGIL — stylized traditional sigil of Lilith ─── */
export function LilithSigil({ size = 120, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} className={className} aria-hidden>
      {GRADIENT}
      <g fill="none" stroke="url(#rose-gold)" strokeWidth="1.5" strokeLinecap="round">
        {/* Outer circle */}
        <circle cx="80" cy="80" r="74" strokeWidth="1.2" opacity="0.55" />
        <circle cx="80" cy="80" r="68" strokeWidth="0.8" opacity="0.35" />
        {/* Central diamond */}
        <path d="M 80 22 L 138 80 L 80 138 L 22 80 Z" strokeWidth="1.3" />
        {/* Crescent moons at N, S, E, W points (traditional Lilith sigil features crescents) */}
        <path d="M 76 16 A 6 6 0 1 0 76 28 A 4 4 0 1 1 76 16 Z" fill="url(#rose-gold)" stroke="none" />
        <path d="M 84 144 A 6 6 0 1 1 84 132 A 4 4 0 1 0 84 144 Z" fill="url(#rose-gold)" stroke="none" />
        <path d="M 144 84 A 6 6 0 1 1 132 84 A 4 4 0 1 0 144 84 Z" fill="url(#rose-gold)" stroke="none" />
        <path d="M 16 76 A 6 6 0 1 0 28 76 A 4 4 0 1 1 16 76 Z" fill="url(#rose-gold)" stroke="none" />
        {/* Inner cross of dots */}
        <circle cx="80" cy="80" r="3" fill="url(#rose-gold)" stroke="none" />
        <circle cx="80" cy="50" r="1.6" fill="url(#rose-gold)" stroke="none" />
        <circle cx="80" cy="110" r="1.6" fill="url(#rose-gold)" stroke="none" />
        <circle cx="50" cy="80" r="1.6" fill="url(#rose-gold)" stroke="none" />
        <circle cx="110" cy="80" r="1.6" fill="url(#rose-gold)" stroke="none" />
        {/* Interior cross arms */}
        <path d="M 80 50 L 80 110 M 50 80 L 110 80" strokeWidth="0.8" opacity="0.6" />
        {/* Small star accents between the diamond arms */}
        <path d="M 40 40 L 44 40 M 42 38 L 42 42" />
        <path d="M 120 40 L 124 40 M 122 38 L 122 42" />
        <path d="M 40 120 L 44 120 M 42 118 L 42 122" />
        <path d="M 120 120 L 124 120 M 122 118 L 122 122" />
      </g>
    </svg>
  );
}

/* ─── ALL-IN-ONE ORNAMENT DIVIDER — serpent · flourish · owl · moon · owl · flourish · serpent ─── */
export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex w-full max-w-3xl items-center justify-center gap-3 ${className}`} aria-hidden>
      {/* left serpent (small) */}
      <svg viewBox="0 0 30 60" width="22" height="44" className="shrink-0">
        {GRADIENT}
        <path
          d="M 15 2 Q 5 12, 15 20 Q 25 28, 15 38 Q 5 48, 15 58"
          stroke="url(#rose-gold)"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M 11 0 Q 15 -2 19 0 Q 19 5 15 6 Q 11 5 11 0 Z" fill="url(#rose-gold)" />
      </svg>
      {/* filigree */}
      <span className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-[#c8977a]/50 to-[#c8977a]/70" />
      {/* owl */}
      <Owl size={28} />
      {/* moon */}
      <CrescentMoon size={24} />
      {/* owl */}
      <Owl size={28} />
      {/* filigree */}
      <span className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent via-[#c8977a]/50 to-[#c8977a]/70" />
      {/* right serpent (mirrored) */}
      <svg viewBox="0 0 30 60" width="22" height="44" className="shrink-0" style={{ transform: "scaleX(-1)" }}>
        {GRADIENT}
        <path
          d="M 15 2 Q 5 12, 15 20 Q 25 28, 15 38 Q 5 48, 15 58"
          stroke="url(#rose-gold)"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M 11 0 Q 15 -2 19 0 Q 19 5 15 6 Q 11 5 11 0 Z" fill="url(#rose-gold)" />
      </svg>
    </div>
  );
}

/* ─── SECTION CREST — Lilith sigil + vertical flourishes on sides, used for section heads ─── */
export function SectionCrest({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto flex items-center justify-center ${className}`} aria-hidden>
      <svg viewBox="0 0 80 40" width="120" height="60" className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:block">
        {GRADIENT}
        <path d="M 2 20 Q 20 10, 40 20 M 6 26 Q 22 22, 40 26" stroke="url(#rose-gold-horiz)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7" />
      </svg>
      <LilithSigil size={64} />
      <svg viewBox="0 0 80 40" width="120" height="60" className="absolute -right-16 top-1/2 -translate-y-1/2 hidden md:block">
        {GRADIENT}
        <path d="M 78 20 Q 60 10, 40 20 M 74 26 Q 58 22, 40 26" stroke="url(#rose-gold-horiz)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
  );
}
