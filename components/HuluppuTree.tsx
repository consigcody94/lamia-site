"use client";

interface Props {
  size?: number;
  className?: string;
  /** When true, render tiny version suitable for nav icon (hides flourishes) */
  compact?: boolean;
}

/**
 * The Huluppu tree — from the Sumerian epic "Inanna and the Huluppu Tree"
 * (c. 2100 BCE, roughly a millennium before Genesis). After Inanna plants
 * the tree in her garden, three beings take up residence: a serpent that
 * "knows no charm" in the roots, the Anzu bird in the branches, and
 * Lilitu (Lilith) in the trunk. All three of Lilith's oldest emblems
 * rooted to a single tree.
 *
 * Rendered here as an SVG heraldic device for Os Lamia's oracle portal.
 */
export function HuluppuTree({ size = 200, className = "", compact = false }: Props) {
  const w = size;
  const h = (size * 300) / 200;
  return (
    <svg
      viewBox="0 0 200 300"
      width={w}
      height={h}
      className={className}
      role="img"
      aria-label="The Huluppu Tree — serpent at the roots, Anzu in the branches, Lilith in the trunk"
    >
      <defs>
        <linearGradient id="huluppu-trunk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e4b89c" />
          <stop offset="40%" stopColor="#c8977a" />
          <stop offset="100%" stopColor="#4a2810" />
        </linearGradient>
        <linearGradient id="huluppu-branch" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a07a5a" />
          <stop offset="50%" stopColor="#e4b89c" />
          <stop offset="100%" stopColor="#a07a5a" />
        </linearGradient>
        <radialGradient id="huluppu-hollow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#1a0a10" />
          <stop offset="70%" stopColor="#0d0709" />
          <stop offset="100%" stopColor="#2a1420" />
        </radialGradient>
        <linearGradient id="huluppu-leaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e4b89c" />
          <stop offset="100%" stopColor="#7a5230" />
        </linearGradient>
        <radialGradient id="huluppu-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff5d0" />
          <stop offset="60%" stopColor="#c8977a" />
          <stop offset="100%" stopColor="#5a3010" />
        </radialGradient>
      </defs>

      {/* Moon halo crowning the tree */}
      {!compact && (
        <circle cx="100" cy="30" r="16" fill="url(#huluppu-moon)" opacity="0.6" style={{ filter: "blur(1.5px)" }} />
      )}

      {/* Background branch spread — fills canopy */}
      <g stroke="url(#huluppu-branch)" strokeWidth="2.2" fill="none" strokeLinecap="round">
        {/* central limb */}
        <path d="M 100 100 Q 100 80, 100 55" />
        {/* left limbs */}
        <path d="M 100 95 Q 80 82, 58 70 Q 52 66, 48 58" />
        <path d="M 100 100 Q 74 98, 52 92 Q 40 88, 34 80" />
        <path d="M 100 108 Q 78 115, 58 118 Q 46 120, 38 128" />
        {/* right limbs */}
        <path d="M 100 95 Q 120 82, 142 70 Q 148 66, 152 58" />
        <path d="M 100 100 Q 126 98, 148 92 Q 160 88, 166 80" />
        <path d="M 100 108 Q 122 115, 142 118 Q 154 120, 162 128" />
      </g>

      {/* Leaf clusters */}
      {!compact && (
        <g fill="url(#huluppu-leaf)" opacity="0.85">
          <path d="M 45 55 Q 52 48, 58 55 Q 52 62, 45 55 Z" />
          <path d="M 35 78 Q 42 72, 48 78 Q 42 84, 35 78 Z" />
          <path d="M 30 124 Q 37 118, 43 124 Q 37 130, 30 124 Z" />
          <path d="M 155 55 Q 148 48, 142 55 Q 148 62, 155 55 Z" />
          <path d="M 165 78 Q 158 72, 152 78 Q 158 84, 165 78 Z" />
          <path d="M 170 124 Q 163 118, 157 124 Q 163 130, 170 124 Z" />
          <path d="M 94 52 Q 100 46, 106 52 Q 100 58, 94 52 Z" />
        </g>
      )}

      {/* Trunk */}
      <path
        d="M 92 100
           L 95 115
           Q 94 140, 92 160
           Q 90 185, 88 210
           Q 86 230, 90 248
           L 110 248
           Q 114 230, 112 210
           Q 110 185, 108 160
           Q 106 140, 105 115
           L 108 100 Z"
        fill="url(#huluppu-trunk)"
        stroke="#2d1808"
        strokeWidth="1"
      />

      {/* Bark texture lines */}
      <g stroke="#2d1808" strokeWidth="0.6" fill="none" opacity="0.55">
        <path d="M 94 120 Q 96 140, 94 168 Q 92 195, 94 230" />
        <path d="M 100 115 Q 102 145, 100 175 Q 98 205, 100 240" />
        <path d="M 106 120 Q 104 140, 106 168 Q 108 195, 106 230" />
      </g>

      {/* Lilith's hollow — the dwelling in the trunk */}
      <ellipse cx="100" cy="175" rx="10" ry="14" fill="url(#huluppu-hollow)" stroke="#0d0709" strokeWidth="0.8" />
      {!compact && (
        <>
          {/* Faint eye glints inside — Lilith watching from within */}
          <circle cx="97" cy="172" r="0.9" fill="#c8977a" opacity="0.85" />
          <circle cx="103" cy="172" r="0.9" fill="#c8977a" opacity="0.85" />
        </>
      )}

      {/* Roots spreading */}
      <g stroke="url(#huluppu-trunk)" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M 90 248 Q 70 260, 40 272 Q 32 278, 28 288" />
        <path d="M 92 248 Q 78 262, 62 280" />
        <path d="M 100 250 L 100 290" />
        <path d="M 108 248 Q 122 262, 138 280" />
        <path d="M 110 248 Q 130 260, 160 272 Q 168 278, 172 288" />
      </g>
      {/* Root tendrils fine */}
      <g stroke="url(#huluppu-trunk)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.7">
        <path d="M 40 272 Q 36 276, 32 282" />
        <path d="M 62 280 Q 60 286, 58 292" />
        <path d="M 138 280 Q 140 286, 142 292" />
        <path d="M 160 272 Q 164 276, 168 282" />
      </g>

      {/* SERPENT — coiled through the roots (no charm, sleepless) */}
      <g>
        <path
          d="M 55 278
             Q 72 270, 88 280
             Q 100 290, 112 280
             Q 128 270, 145 278
             Q 152 282, 148 288
             Q 140 292, 132 286
             Q 120 280, 108 290
             Q 100 298, 92 290
             Q 80 280, 68 286
             Q 60 292, 52 288
             Q 48 282, 55 278 Z"
          fill="url(#huluppu-trunk)"
          stroke="#2d1808"
          strokeWidth="0.7"
        />
        {/* Head */}
        <path d="M 143 278 Q 150 272, 158 275 Q 160 282, 152 284 Q 146 284, 143 278 Z" fill="url(#huluppu-trunk)" stroke="#2d1808" strokeWidth="0.6" />
        {/* Eye */}
        <circle cx="151" cy="278" r="0.8" fill="#0d0709" />
        {/* Tongue */}
        <path d="M 159 279 L 162 281 M 159 279 L 162 277" stroke="#8a2b2b" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        {/* Scale marks along body */}
        <g stroke="#2d1808" strokeWidth="0.45" fill="none" opacity="0.7">
          <path d="M 72 282 L 75 278" />
          <path d="M 82 285 L 85 281" />
          <path d="M 95 286 L 98 282" />
          <path d="M 108 285 L 111 281" />
          <path d="M 122 282 L 125 278" />
          <path d="M 135 282 L 138 278" />
        </g>
      </g>

      {/* ANZU BIRD — perched at the crown */}
      <g>
        {/* body */}
        <path
          d="M 92 52
             C 84 52, 80 58, 82 64
             L 82 68
             C 82 74, 92 76, 92 76
             C 92 76, 102 76, 102 68
             L 102 64
             C 104 58, 100 52, 92 52 Z"
          fill="url(#huluppu-branch)"
          stroke="#2d1808"
          strokeWidth="0.6"
          transform="translate(8, 0)"
        />
        {/* head turn */}
        <circle cx="104" cy="50" r="6" fill="url(#huluppu-branch)" stroke="#2d1808" strokeWidth="0.5" />
        {/* wings (subtle outspread) */}
        <path d="M 92 62 Q 82 58, 72 66" stroke="url(#huluppu-branch)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M 108 62 Q 118 58, 128 66" stroke="url(#huluppu-branch)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* eye */}
        <circle cx="106" cy="49" r="1.1" fill="#0d0709" />
        <circle cx="106" cy="49" r="0.35" fill="#e4b89c" />
        {/* beak */}
        <path d="M 109 50 L 113 51 L 109 52 Z" fill="#8a2b2b" />
        {/* tufts */}
        <path d="M 102 44 L 103 40 L 105 44 Z" fill="url(#huluppu-branch)" />
        <path d="M 107 44 L 108 40 L 110 44 Z" fill="url(#huluppu-branch)" />
      </g>

      {/* Ground line — subtle earth indication */}
      {!compact && (
        <path
          d="M 10 290 L 190 290"
          stroke="url(#huluppu-branch)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
          opacity="0.35"
        />
      )}
    </svg>
  );
}
