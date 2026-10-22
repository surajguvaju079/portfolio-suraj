import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import Container from "./ui/Container";
export default function Footer() {
  return <footer className="site-footer"><Container className="footer-inner">
    <p>© {new Date().getFullYear()} {site.name}</p><p className="footer-note">Thoughtful systems. Useful products.</p>
    <nav aria-label="Social links">
      <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={14} aria-hidden="true" /></a>
      <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={14} aria-hidden="true" /></a>
      <a href={`mailto:${site.email}`}>Email<ArrowUpRight size={14} aria-hidden="true" /></a>
    </nav>
  </Container></footer>;
}
