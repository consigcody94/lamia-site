"use client";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Ornamental gold frame for the priest portrait.
 * Double rose-gold border, four corner filigree flourishes,
 * crescent-moon finial at the top, lunar sigil at the bottom.
 * Styled as SVG overlay with pointer-events-none so the image underneath is untouched.
 */
export function PortraitFrame({ children, className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 140"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="frame-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbe9a5" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#c8977a" />
            <stop offset="100%" stopColor="#7a5230" />
          </linearGradient>
          <linearGradient id="frame-gold-light" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff5d0" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#e4b89c" />
            <stop offset="100%" stopColor="#a07a5a" />
          </linearGradient>
        </defs>
        {/* Outer border */}
        <rect
          x="1"
          y="1"
          width="98"
          height="138"
          fill="none"
          stroke="url(#frame-gold)"
          strokeWidth="0.45"
          vectorEffect="non-scaling-stroke"
        />
        {/* Inner border (inset) */}
        <rect
          x="2.2"
          y="2.2"
          width="95.6"
          height="135.6"
          fill="none"
          stroke="url(#frame-gold-light)"
          strokeWidth="0.22"
          strokeOpacity="0.7"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Corner filigree ornaments — rendered as absolutely-positioned SVGs so aspect is preserved */}
      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />
      <CornerOrnament position="bl" />
      <CornerOrnament position="br" />

      {/* Crown finial at top */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <TopFinial />
      </div>

      {/* Moon sigil at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <BottomSigil />
      </div>
    </div>
  );
}

function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const placement: Record<typeof position, string> = {
    tl: "top-0 left-0",
    tr: "top-0 right-0 scale-x-[-1]",
    bl: "bottom-0 left-0 scale-y-[-1]",
    br: "bottom-0 right-0 scale-x-[-1] scale-y-[-1]",
  };
  return (
    <svg
      aria-hidden
      viewBox="0 0 60 60"
      className={`pointer-events-none absolute h-14 w-14 md:h-20 md:w-20 ${placement[position]}`}
    >
      <defs>
        <linearGradient id={`corner-${position}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff5d0" />
          <stop offset="45%" stopColor="#e4b89c" />
          <stop offset="100%" stopColor="#7a5230" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke={`url(#corner-${position})`}
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        {/* Outer curl */}
        <path d="M 6 6 Q 30 6 30 30 Q 30 6 6 30" />
        {/* Inner curl */}
        <path d="M 10 10 Q 22 12 22 22 Q 22 12 12 22" />
        {/* Spiral dot ornament */}
        <circle cx="30" cy="30" r="1.2" fill={`url(#corner-${position})`} stroke="none" />
        {/* Small tails */}
        <path d="M 22 22 Q 18 24 16 30" />
        <path d="M 22 22 Q 24 18 30 16" />
        {/* Outer cross stroke */}
        <path d="M 4 4 L 10 4 M 4 4 L 4 10" strokeWidth="1.8" />
      </g>
    </svg>
  );
}

function TopFinial() {
  return (
    <svg aria-hidden viewBox="0 0 80 40" className="h-10 w-20 md:h-14 md:w-28">
      <defs>
        <linearGradient id="finial-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5d0" />
          <stop offset="55%" stopColor="#c8977a" />
          <stop offset="100%" stopColor="#5a3010" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#finial-gold)" strokeWidth="1.3" strokeLinecap="round">
        {/* Crescent moon at center */}
        <path
          d="M 40 12 A 7 7 0 1 0 40 26 A 5 5 0 1 1 40 12 Z"
          fill="url(#finial-gold)"
          stroke="none"
          style={{ filter: "drop-shadow(0 0 4px rgba(200,151,122,0.6))" }}
        />
        {/* Flourish left */}
        <path d="M 6 20 Q 18 14 28 20" />
        <path d="M 10 24 Q 20 22 28 24" opacity="0.7" />
        {/* Flourish right */}
        <path d="M 52 20 Q 62 14 74 20" />
        <path d="M 52 24 Q 60 22 70 24" opacity="0.7" />
        {/* Small orbs */}
        <circle cx="6" cy="20" r="1.3" fill="url(#finial-gold)" stroke="none" />
        <circle cx="74" cy="20" r="1.3" fill="url(#finial-gold)" stroke="none" />
      </g>
    </svg>
  );
}

function BottomSigil() {
  return (
    <svg aria-hidden viewBox="0 0 80 40" className="h-9 w-20 md:h-12 md:w-28">
      <defs>
        <linearGradient id="sigil-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8977a" />
          <stop offset="55%" stopColor="#e4b89c" />
          <stop offset="100%" stopColor="#7a5230" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#sigil-gold)" strokeWidth="1.2" strokeLinecap="round">
        {/* Flourish left */}
        <path d="M 6 20 Q 18 26 28 20" />
        <path d="M 10 16 Q 20 18 28 16" opacity="0.7" />
        {/* Central diamond with star inside */}
        <path d="M 40 10 L 48 20 L 40 30 L 32 20 Z" fill="rgba(200,151,122,0.25)" />
        <path d="M 40 14 L 44 20 L 40 26 L 36 20 Z" fill="url(#sigil-gold)" stroke="none" />
        {/* Flourish right */}
        <path d="M 52 20 Q 62 26 74 20" />
        <path d="M 52 16 Q 60 18 70 16" opacity="0.7" />
        {/* Orbs */}
        <circle cx="6" cy="20" r="1.2" fill="url(#sigil-gold)" stroke="none" />
        <circle cx="74" cy="20" r="1.2" fill="url(#sigil-gold)" stroke="none" />
      </g>
    </svg>
  );
}
