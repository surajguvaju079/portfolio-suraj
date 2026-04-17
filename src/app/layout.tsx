import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = "https://surajguvaju.com.np";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "Suraj Guvaju | Full-Stack Engineer & Software Developer – Nepal",
    template: "%s | Suraj Guvaju",
  },
  description:
    "Suraj Guvaju is a Full-Stack Software Engineer from Nepal with 5+ years of experience building scalable web applications using React, Next.js, Node.js, TypeScript, AWS, and more. Available for remote work worldwide.",
  keywords: [
    "Suraj Guvaju",
    "Full-Stack Developer Nepal",
    "Software Engineer Nepal",
    "React Developer Nepal",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Engineer",
    "Web Developer Kathmandu",
    "Remote Software Engineer Nepal",
    "Hire Full-Stack Developer",
    "React Next.js TypeScript Portfolio",
    "AWS DevOps Engineer",
    "Full-Stack Engineer Portfolio",
    "Freelance Developer Nepal",
    "surajguvaju",
  ],
  authors: [{ name: "Suraj Guvaju", url: BASE_URL }],
  creator: "Suraj Guvaju",
  publisher: "Suraj Guvaju",
  category: "technology",

  // ── Canonical & Alternates ─────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Suraj Guvaju – Full-Stack Engineer",
    title: "Suraj Guvaju | Full-Stack Engineer & Software Developer",
    description:
      "Full-Stack Engineer from Nepal crafting world-class web applications. 5+ years · 50+ projects · React, Next.js, Node.js, AWS & more. Open to remote opportunities worldwide.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Suraj Guvaju – Full-Stack Engineer",
        type: "image/png",
      },
      {
        url: `${BASE_URL}/og-image-square.png`,
        width: 1200,
        height: 1200,
        alt: "Suraj Guvaju – Full-Stack Engineer",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@surajguvaju", // update if you have a Twitter handle
    creator: "@surajguvaju",
    title: "Suraj Guvaju | Full-Stack Engineer",
    description:
      "Full-Stack Engineer from Nepal. React · Next.js · Node.js · AWS. Building digital excellence. Open to remote work worldwide.",
    images: [`${BASE_URL}/og-image.png`],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "aca9ecc45bcfbbd3",
  },

  // ── Icons ────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // ── Manifest ──────────────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── App links ────────────────────────────────────────────────────────────
  appLinks: {
    web: {
      url: BASE_URL,
      should_fallback: true,
    },
  },

  // ── Referrer ──────────────────────────────────────────────────────────────
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect for performance (also helps SEO via Core Web Vitals) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD: Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Suraj Guvaju",
              url: BASE_URL,
              image: `${BASE_URL}/og-image.png`,
              jobTitle: "Full-Stack Software Engineer",
              description:
                "Full-Stack Engineer from Nepal with 2+ years of experience building scalable applications using React, Next.js, Node.js, TypeScript, AWS, and more.",
              sameAs: [
                "https://github.com/surajguvaju079",
                "https://np.linkedin.com/in/surajguvaju",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "Go",
                "AWS",
                "Docker",
                "Kubernetes",
                "PostgreSQL",
                "MongoDB",
                "GraphQL",
                "Terraform",
              ],
              alumniOf: [],
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open to Work",
              },
            }),
          }}
        />

        {/* JSON-LD: WebSite schema (enables sitelinks searchbox) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Suraj Guvaju",
              url: BASE_URL,
              description:
                "Portfolio of Suraj Guvaju – Full-Stack Engineer from Nepal",
              author: {
                "@type": "Person",
                name: "Suraj Guvaju",
              },
            }),
          }}
        />

        {/* JSON-LD: ProfilePage schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              dateCreated: "2024-01-01T00:00:00Z",
              dateModified: new Date().toISOString(),
              mainEntity: {
                "@type": "Person",
                name: "Suraj Guvaju",
                identifier: "surajguvaju",
                description:
                  "Full-Stack Engineer from Nepal. React, Next.js, Node.js, TypeScript, AWS.",
                sameAs: [
                  "https://github.com/surajguvaju079",
                  "https://np.linkedin.com/in/surajguvaju",
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased noise-overlay`}>
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
