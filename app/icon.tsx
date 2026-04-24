import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0B",
          borderRadius: 96,
        }}
      >
        <svg viewBox="0 0 96 72" width={420} height={316}>
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
      </div>
    ),
    { ...size }
  );
}
