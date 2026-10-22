import type { Project } from "./types";
export const projects: readonly Project[] = [
  {
    id: "team-bhariya", name: "Team Bhariya", category: "Production logistics platform",
    status: "Production · mobile releases live",
    showcase: {
      statement: "Logistics, from mobile workflows to live releases.",
      summary: "Mobile and backend engineering for a logistics platform, including live mobile release workflows.",
    },
    summary: "Mobile and backend engineering for a logistics platform, connecting day-to-day product workflows with reliable release delivery.",
    contributions: [
      "React Native and Expo development, Android App Links, OTP verification, and password-reset flows.",
      "Backend architecture, MongoDB optimization, and push notification reliability.",
      "Live EAS Build and Update workflows across development, preview, and production profiles, with release channels and API compatibility.",
    ],
    stack: ["React Native", "Expo", "MongoDB", "EAS"], featured: true,
  },
  {
    id: "lenden-pos", name: "Lenden POS", category: "Offline-first restaurant operations",
    status: "Product engineering",
    summary: "Restaurant software that coordinates local and remote data, connects to physical hardware, and supports real-time ordering.",
    contributions: [
      "Delta synchronization, cursor pagination, and queued operations for offline-first workflows.",
      "Native Kotlin Android printing service, thermal printers, and barcode scanner integrations.",
      "Interactive floor layouts, QR-based table ordering, and real-time restaurant operations.",
    ],
    stack: ["React Native", "Kotlin", "SQLite", "Node.js"], featured: true,
  },
  {
    id: "gadibazar", name: "GadiBazar", category: "Vehicle marketplace",
    status: "Deployed · staging-named infrastructure",
    summary: "Marketplace backend and deployment work spanning listings, auctions, verification, transactions, and media storage.",
    contributions: [
      "Node.js and Express APIs with PostgreSQL and Prisma for marketplace workflows.",
      "MinIO image storage, Docker Compose, AWS EC2 Ubuntu, and Nginx reverse proxy.",
      "GitHub Actions with IAM/OIDC deployment authentication, request logging, error handling, and database backup operations.",
    ],
    stack: ["Node.js", "PostgreSQL", "Prisma", "AWS"], featured: true,
  },
  {
    id: "sajilo-nirman", name: "Sajilo Nirman", category: "Construction materials marketplace",
    status: "Mobile engineering",
    summary: "React Native marketplace development with oRPC integration and advanced messaging interactions.",
    contributions: ["Chat lazy loading, reply navigation, reactions, and media attachments."],
    stack: ["React Native", "TypeScript", "oRPC"], featured: false,
  },
  {
    id: "smart-bus", name: "Smart Bus", category: "Real-time tracking & ML-based ETA",
    status: "Academic project",
    summary: "An academic project combining live bus locations with arrival-time predictions using a Random Forest Regressor.",
    contributions: ["Node.js, Redis Pub/Sub, and Socket.IO tracking with a Python/FastAPI ETA service and React Native app."],
    stack: ["Node.js", "Redis", "FastAPI", "React Native"], featured: false,
    link: { href: "https://github.com/surajguvaju079/smart-bus-backend", label: "Public backend repository" },
  },
];
