import { experience } from "@/content/experience";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
export default function Experience() {
  return <section id="experience" className="section"><Container>
    <SectionHeading number="04" eyebrow="Experience" title="Growing scope. Grounded execution." description="From mobile implementation to full-stack delivery, product architecture, and technical leadership." />
    <ol className="experience-list">{experience.map((item, index) => <li key={`${item.company}-${item.role}`} className="experience-item">
      <div className="experience-company"><span className="experience-marker">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.company}</h3><p>{item.location}</p></div></div>
      <div className="experience-role"><div className="experience-role-heading"><h4>{item.role}</h4>{item.current && <span className="current-label">Current role</span>}</div><ul>{item.contributions.map(text => <li key={text}>{text}</li>)}</ul></div>
    </li>)}</ol>
  </Container></section>;
}
