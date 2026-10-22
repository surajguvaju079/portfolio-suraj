# Suraj Guvaju — Engineering Portfolio

Next.js 16 App Router portfolio using React 19, TypeScript, Tailwind CSS 4, Inter, and Lucide icons.

## Development and validation

- `npm run dev` — local development
- `npm run lint` — ESLint
- `./node_modules/.bin/tsc --noEmit --incremental false` — TypeScript check
- `npm run build` — production build
- `npm run start` — serve a production build

## Content and architecture

Identity lives in `src/content/site.ts`. Engineering projects, clients, and experience have typed records in `src/content/`. Static sections are Server Components; only mobile navigation uses a client boundary. Reusable UI lives in `src/components/ui/`.

Tailwind resets and shared styles use explicit cascade layers. Tokens and responsive presentation live in `src/app/globals.css`.

## Publication rules

Canonical: https://surajguvaju.com.np. Contact: surajguvaju0@gmail.com.

Do not publish unsupported metrics or private repository links. Smart Bus is academic. GadiBazar is deployed with staging-named infrastructure; do not claim production maturity or completed monitoring. Team Bhariya's mobile release workflows are live.

Résumé download remains absent until an approved PDF exists. Case-study routes are outside Phase 3A. Use approved product imagery or text-led cards. Client screenshots, when available, are actual website views stored under `public/images/clients/`.

SEO metadata and JSON-LD share `src/lib/seo.ts`. Sitemap lists only the homepage; Next metadata routes generate social images.

## Screenshot provenance

Desktop (1440×1000) and mobile (390×844) client screenshots were captured from the actual deployed Trailmaker Consultancy, NipponBashi, and Standard Interior websites on 2026-10-11. The homepage displays optimized desktop WebP images; mobile captures are retained for future presentation. No generated application imagery is used.

## Deployment

Actual hosting configuration is not established in this repository. Phase 3A is local-only, with no deployment, commit, or push.
