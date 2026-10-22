import type { Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
export { metadata } from "@/lib/seo";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-sora", display: "swap" });
export const viewport: Viewport = { themeColor: "#080F16", colorScheme: "dark", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${sora.variable}`}>
    <a href="#main-content" className="skip-link">Skip to content</a><StructuredData /><Navigation />
    <main id="main-content" tabIndex={-1}>{children}</main><Footer />
  </body></html>;
}
