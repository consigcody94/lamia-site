import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lilitu · Os Lamia · High Priest of Lilith";
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
            "radial-gradient(ellipse at 18% 12%, rgba(114,31,53,0.55), transparent 55%), radial-gradient(ellipse at 82% 88%, rgba(186,107,58,0.18), transparent 55%), linear-gradient(180deg, #0d0709 0%, #050202 100%)",
          color: "#ebdcc4",
          padding: "70px",
          textAlign: "center",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.5em",
            color: "#c8977a",
            textTransform: "uppercase",
          }}
        >
          ⚭ Lilitu ⚭
        </div>
        <div
          style={{
            fontSize: 200,
            color: "#ebdcc4",
            marginTop: 20,
            textShadow: "0 0 50px rgba(200,151,122,0.6)",
            fontWeight: 600,
          }}
        >
          לילית
        </div>
        <div
          style={{
            fontSize: 64,
            marginTop: 30,
            color: "#ebdcc4",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          Os Lamia
        </div>
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.4em",
            color: "#a8a09b",
            textTransform: "uppercase",
            marginTop: 18,
          }}
        >
          High Priest of Lilith
        </div>
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.35em",
            color: "#c8977a",
            textTransform: "uppercase",
            marginTop: 60,
          }}
        >
          lilitu.org
        </div>
      </div>
    ),
    { ...size },
  );
}
