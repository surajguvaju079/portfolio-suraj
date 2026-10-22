import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
const capabilities = [
  { title: "Backend & real-time systems", description: "APIs, authentication, database coordination, marketplace workflows, and real-time delivery.", evidence: "GadiBazar · Team Bhariya · Smart Bus" },
  { title: "Mobile & offline workflows", description: "React Native applications, synchronization, queued operations, deep linking, and native Android hardware integrations.", evidence: "Lenden POS · Team Bhariya · Sajilo Nirman" },
  { title: "Infrastructure & releases", description: "Containerized deployments, environment management, CI/CD authentication, and mobile build and update workflows.", evidence: "GadiBazar · Team Bhariya" },
  { title: "Product architecture & leadership", description: "Connecting technical decisions to product workflows and coordinating delivery across application and infrastructure boundaries.", evidence: "Team Bhariya · Full-stack delivery" },
];
export default function EngineeringCapabilities() {
  return <section id="capabilities" className="section capabilities-section"><Container>
    <SectionHeading number="02" eyebrow="Engineering capabilities" title="Engineering across the product lifecycle." description="Working across the boundaries where applications, data, devices, and delivery meet." />
    <div className="capability-grid">{capabilities.map((item, index) => <article key={item.title} className="capability">
      <span className="capability-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p>
      <a href="#work" className="capability-evidence">{item.evidence}<ArrowUpRight size={15} aria-hidden="true" /></a>
    </article>)}</div>
  </Container></section>;
}
