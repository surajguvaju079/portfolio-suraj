// src/app/opengraph-image.tsx
// Next.js App Router auto-generates /og-image.png from this file at build time.
// No external image needed — this IS the og-image.
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Suraj Guvaju – Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#9ca3af", fontSize: 16 }}>
            Available for remote opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Suraj Guvaju
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            background: "linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 32,
          }}
        >
          Full-Stack Engineer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            maxWidth: 700,
            lineHeight: 1.6,
            marginBottom: 48,
          }}
        >
          Building world-class applications from Nepal.
          React · Next.js · Node.js · TypeScript · AWS
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 40 }}>
          {[
            { value: "5+", label: "Years" },
            { value: "50+", label: "Projects" },
            { value: "30+", label: "Clients" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 36, fontWeight: 700, color: "white" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: 14, color: "#6b7280", textTransform: "uppercase", letterSpacing: 2 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 18,
            color: "#6366f1",
            fontWeight: 500,
          }}
        >
          surajguvaju.com.np
        </div>
      </div>
    ),
    { ...size }
  );
}
