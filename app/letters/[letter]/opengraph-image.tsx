import { ImageResponse } from "next/og";
import { letterBySlug } from "@/lib/letter-content";

export const runtime = "edge";
export const alt = "Letter Station — Lilitu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Params {
  params: Promise<{ letter: string }>;
}

export default async function Image({ params }: Params) {
  const { letter } = await params;
  const l = letterBySlug(letter);
  if (!l) {
    return new ImageResponse(
      (
        <div style={{ display: "flex", width: "100%", height: "100%", background: "#0d0709", color: "#ebdcc4" }} />
      ),
      { ...size },
    );
  }
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(114,31,53,0.4), transparent 65%), linear-gradient(180deg, #0d0709 0%, #050202 100%)",
          color: "#ebdcc4",
          padding: "60px",
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.5em", color: "#c8977a", textTransform: "uppercase" }}>
          {`⚭ Station ${l.ordinal} of 22 ⚭`}
        </div>
        <div
          style={{
            fontSize: 380,
            color: "#ebdcc4",
            lineHeight: 1,
            marginTop: 10,
            textShadow: "0 0 50px rgba(200,151,122,0.65)",
            fontWeight: 600,
          }}
        >
          {l.letter}
        </div>
        <div style={{ fontSize: 80, color: "#ebdcc4", marginTop: 10, fontWeight: 600 }}>{l.name}</div>
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.05em",
            color: "#a8a09b",
            marginTop: 14,
          }}
        >
          {`${l.literalMeaning} · value ${l.value}`}
        </div>
        <div style={{ fontSize: 20, letterSpacing: "0.35em", color: "#c8977a", textTransform: "uppercase", marginTop: 36 }}>
          {`lilitu.org/letters/${l.translit}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
