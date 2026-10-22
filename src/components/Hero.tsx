import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <Container>
        <p className="editorial-intro">{site.name} <span>Software Engineer</span></p>
        <h1 id="hero-title">{site.headline}</h1>
        <div className="editorial-hero-bottom">
          <div className="editorial-hero-copy">
            <p className="editorial-lead">{site.description}</p>
            <p className="editorial-availability">Based in {site.location}. Open to remote engineering opportunities and selected client work.</p>
            <a href={`mailto:${site.email}`} className="editorial-email">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <a href="#work" className="editorial-work-link">Explore my work <ArrowDown size={20} aria-hidden="true" /></a>
        </div>
      </Container>
    </section>
  );
}
