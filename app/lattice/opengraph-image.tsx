import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Lattice — Gematria of the Plenum";
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
            "radial-gradient(ellipse at 50% 100%, rgba(200,151,122,0.18), transparent 70%), linear-gradient(180deg, #0d0709 0%, #050202 100%)",
          color: "#ebdcc4",
          padding: "70px",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.5em", color: "#c8977a", textTransform: "uppercase" }}>
          ⚭ The Lattice ⚭
        </div>
        <div
          style={{
            fontSize: 120,
            color: "#ebdcc4",
            marginTop: 20,
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          Gematria of the Plenum
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 50,
            alignItems: "baseline",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 100, color: "#c8977a" }}>96</div>
            <div style={{ fontSize: 18, letterSpacing: "0.3em", color: "#a8a09b", textTransform: "uppercase", marginTop: 6 }}>
              Scarlet Vector
            </div>
          </div>
          <div style={{ fontSize: 60, color: "#ebdcc4" }}>+</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 100, color: "#c8977a" }}>15</div>
            <div style={{ fontSize: 18, letterSpacing: "0.3em", color: "#a8a09b", textTransform: "uppercase", marginTop: 6 }}>
              Violet Key
            </div>
          </div>
          <div style={{ fontSize: 60, color: "#ebdcc4" }}>+</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 100, color: "#c8977a" }}>20</div>
            <div style={{ fontSize: 18, letterSpacing: "0.3em", color: "#a8a09b", textTransform: "uppercase", marginTop: 6 }}>
              Obsidian Bride
            </div>
          </div>
          <div style={{ fontSize: 60, color: "#ebdcc4" }}>=</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 100, color: "#ebdcc4", textShadow: "0 0 30px rgba(200,151,122,0.6)" }}>131</div>
            <div style={{ fontSize: 18, letterSpacing: "0.3em", color: "#c8977a", textTransform: "uppercase", marginTop: 6 }}>
              Samael
            </div>
          </div>
        </div>
        <div style={{ fontSize: 22, letterSpacing: "0.35em", color: "#c8977a", textTransform: "uppercase", marginTop: 60 }}>
          lilitu.org/lattice
        </div>
      </div>
    ),
    { ...size },
  );
}
