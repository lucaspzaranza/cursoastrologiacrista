import { ImageResponse } from "next/og";

// ─── CONFIG ───────────────────────────────────────────────────────────────────

export const runtime = "edge";

export const alt = "Curso de Astrologia Cristã";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ─── OG IMAGE ─────────────────────────────────────────────────────────────────
//
// The hero image is 2481x3561 (portrait). Scaled to 1200px wide it becomes
// ~1722px tall. We align the flex container to the top so only the first
// 630px of height are visible — no centering, no cropping from the middle.

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "flex-start",
          overflow: "hidden",
          backgroundColor: "#080e1f",
        }}
      >
        <img
          src="http://localhost:3000/hero.jpg" // ← replace with your real domain on deploy
          style={{
            width: "1200px",
            height: "1322px", // proportional height: 3561 * (1200 / 2481)
            flexShrink: 0,
            marginTop: "-150px", // offset equivalent to Tailwind bottom-20
          }}
        />
      </div>
    ),
    { ...size }
  );
}