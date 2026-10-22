import { clientWork } from "@/content/client-work";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ClientWorkCard from "./ClientWorkCard";
export default function SelectedClientWork() {
  return <section id="clients" className="section"><Container>
    <SectionHeading number="03" eyebrow="Selected client work" title="Good work, out in the world." description="Shipped websites for education and service businesses, with responsive layouts, clear navigation, and considered search metadata." />
    <div className="client-grid">{clientWork.map(client => <ClientWorkCard client={client} key={client.id} />)}</div>
  </Container></section>;
}
