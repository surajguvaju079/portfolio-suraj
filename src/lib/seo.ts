import type { Metadata } from "next";
import { site } from "@/content/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: `${site.description} Based in Nepal, open to international remote engineering opportunities and selected client work.`,
  alternates: { canonical: site.url },
  authors: [{ name: site.name, url: site.url }], creator: site.name,
  openGraph: { type: "website", locale: "en_US", url: site.url, siteName: site.name, title: `${site.name} | ${site.role}`, description: site.description },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.role}`, description: site.description },
  robots: { index: true, follow: true },
  verification: { google: "aca9ecc45bcfbbd3" },
  icons: { icon: "/favicon.ico" },
};
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url, jobTitle: site.role,
      description: site.description, email: site.email, sameAs: [site.github, site.linkedin],
      address: { "@type": "PostalAddress", addressCountry: "NP" } },
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: `${site.name} — Engineering Portfolio`,
      url: site.url, description: site.description, author: { "@id": `${site.url}/#person` }, inLanguage: "en" },
  ],
};
