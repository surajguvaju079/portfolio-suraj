import type { ClientWork } from "./types";
export const clientWork: readonly ClientWork[] = [
  {
    id: "trailmaker", name: "Trailmaker Consultancy", category: "Education consultancy",
    summary: "Shipped a Next.js website with responsive service and destination sections, SEO metadata, and structured data.",
    href: "https://trailmakerchadanichowk.com.np",
    image: { src: "/images/clients/trailmaker-desktop.webp", width: 1440, height: 1000, alt: "Trailmaker Consultancy live website, desktop homepage" },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "nipponbashi", name: "NipponBashi", category: "Japanese language institute",
    summary: "Delivered a migrated Next.js website with navigation improvements, SEO configuration, and structured metadata.",
    href: "https://nipponbashi.com.np",
    image: { src: "/images/clients/nipponbashi-desktop.webp", width: 1440, height: 1000, alt: "NipponBashi live website, desktop homepage" },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "standard-interior", name: "Standard Interior", category: "Interior design studio",
    summary: "Shipped a responsive Next.js website presenting services and a project portfolio, with SEO metadata.",
    href: "https://standardinterior.com.np",
    image: { src: "/images/clients/standard-interior-desktop.webp", width: 1440, height: 1000, alt: "Standard Interior live website, desktop homepage" },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];
