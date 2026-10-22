import { site } from "@/content/site";
import Container from "./ui/Container";
export default function About() {
  return <section id="about" className="section about-section"><Container className="about-grid">
    <div><p className="eyebrow"><span className="section-number">05</span>About</p><h2>Engineering with<br />product context.</h2></div>
    <div className="about-copy"><p>I’m Suraj, a software engineer based in Nepal. I work across APIs, mobile applications, data workflows, and deployment.</p>
      <p>I’m interested in the decisions that make software useful and dependable: how it behaves offline, how systems coordinate, and how changes reach users.</p>
      <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-link">Explore my public work <span aria-hidden="true">↗</span></a>
    </div>
  </Container></section>;
}
