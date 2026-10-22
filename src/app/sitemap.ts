// src/app/sitemap.ts
// Next.js App Router dynamic sitemap — place this file at src/app/sitemap.ts

import { MetadataRoute } from "next";

const BASE_URL = "https://surajguvaju.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Main page ───────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },

    // ── Anchor sections (treated as separate signals by some crawlers) ──────
    {
      url: `${BASE_URL}/#about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#experience`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── Static assets ────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/resume.pdf`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/ghosttag/privacy-policy`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
