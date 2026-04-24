import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Falcon Ads — Estratégia, Tráfego, Resultados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(60% 60% at 20% 30%, rgba(13,110,253,0.35), transparent 70%), radial-gradient(50% 50% at 80% 20%, rgba(0,200,83,0.28), transparent 70%), radial-gradient(50% 60% at 70% 90%, rgba(255,214,0,0.22), transparent 70%), #0B0B0B",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg viewBox="0 0 96 72" width={120} height={90}>
            <defs>
              <linearGradient id="w" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#0D6EFD" />
                <stop offset="55%" stopColor="#00C853" />
                <stop offset="100%" stopColor="#FFD600" />
              </linearGradient>
              <linearGradient id="h" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="100%" stopColor="#0D6EFD" />
              </linearGradient>
            </defs>
            <path
              d="M4 42 C 16 14, 42 8, 68 18 L 78 22 L 62 30 C 52 24, 38 24, 26 34 Z"
              fill="url(#w)"
            />
            <path d="M22 42 L 48 40 C 40 36, 34 36, 28 40 Z" fill="#FFD600" />
            <path
              d="M28 44 C 36 32, 56 28, 78 32 L 84 38 L 74 40 L 80 46 C 68 50, 52 50, 42 48 L 34 54 C 30 54, 26 50, 28 44 Z"
              fill="url(#h)"
            />
            <path d="M80 36 L 92 38 L 82 44 Z" fill="#FFD600" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1 }}>
              FALCON ADS
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#8A94A6",
                marginTop: 10,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Estratégia · Tráfego · Resultados
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 34,
              color: "#8A94A6",
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            Sites estratégicos que
          </span>
          <span
            style={{
              fontSize: 82,
              fontWeight: 900,
              letterSpacing: -2,
              lineHeight: 1.02,
              maxWidth: 1000,
              backgroundImage:
                "linear-gradient(90deg, #0D6EFD 0%, #00C853 55%, #FFD600 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            geram clientes, não só visitas.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 24,
            color: "#CCCCCC",
            fontSize: 22,
          }}
        >
          <span>Landing Pages · Sites Institucionais · SEO</span>
          <span style={{ color: "#00C853", fontWeight: 700 }}>falconads.com.br</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
