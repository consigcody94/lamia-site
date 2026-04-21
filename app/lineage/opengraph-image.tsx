import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Lineage — Books of the Tradition";
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
            "radial-gradient(ellipse at 18% 12%, rgba(114,31,53,0.45), transparent 55%), linear-gradient(180deg, #0d0709 0%, #050202 100%)",
          color: "#ebdcc4",
          padding: "70px",
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.5em", color: "#c8977a", textTransform: "uppercase" }}>
          ⚭ The Lineage ⚭
        </div>
        <div style={{ fontSize: 130, color: "#ebdcc4", marginTop: 20, fontWeight: 600 }}>
          The Line I Hold
        </div>
        <div style={{ fontSize: 28, marginTop: 30, color: "#a8a09b", letterSpacing: "0.05em", maxWidth: 1000 }}>
          From the founding circle of the Greater Church of Lucifer through the primary
          Gnostic and Kabbalistic sources to the contemporary system-makers.
        </div>
        <div style={{ fontSize: 22, letterSpacing: "0.35em", color: "#c8977a", textTransform: "uppercase", marginTop: 60 }}>
          lilitu.org/lineage
        </div>
      </div>
    ),
    { ...size },
  );
}
