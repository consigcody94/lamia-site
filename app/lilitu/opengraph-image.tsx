import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lilitu — Meaning, History, and the Living Priesthood";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
            "radial-gradient(ellipse at 18% 12%, rgba(114,31,53,0.55), transparent 55%), linear-gradient(180deg, #0d0709 0%, #050202 100%)",
          color: "#ebdcc4",
          padding: "70px",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.5em", color: "#c8977a", textTransform: "uppercase" }}>
          ⚭ The Reference ⚭
        </div>
        <div style={{ fontSize: 130, color: "#ebdcc4", marginTop: 20, fontWeight: 600 }}>Lilitu</div>
        <div
          style={{
            fontSize: 32,
            marginTop: 14,
            color: "#a8a09b",
            letterSpacing: "0.08em",
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          Meaning · History · The Living Priesthood
        </div>
        <div
          style={{
            fontSize: 80,
            color: "#c8977a",
            marginTop: 36,
            textShadow: "0 0 30px rgba(200,151,122,0.5)",
          }}
        >
          לילית
        </div>
        <div style={{ fontSize: 22, marginTop: 36, color: "#ebdcc4", letterSpacing: "0.05em" }}>
          {"Akkadian lilītu · Hebrew Lilith · Value 480 · Plenum"}
        </div>
        <div style={{ fontSize: 22, letterSpacing: "0.35em", color: "#c8977a", textTransform: "uppercase", marginTop: 50 }}>
          lilitu.org
        </div>
      </div>
    ),
    { ...size },
  );
}
