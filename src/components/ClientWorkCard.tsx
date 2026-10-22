import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ClientWork } from "@/content/types";
export default function ClientWorkCard({ client }: { client: ClientWork }) {
  return <article className={`client-card client-${client.id} ${client.image ? "has-image" : "text-only"}`}>
    {client.image && <a href={client.href} target="_blank" rel="noopener noreferrer" className="client-preview" aria-label={`Visit ${client.name} website`}>
      <Image src={client.image.src} alt={client.image.alt} width={client.image.width} height={client.image.height} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 50vw, 600px" />
    </a>}
    <div className="client-copy">
      <div className="client-meta"><span className="eyebrow">{client.category}</span><span className="shipped-label">Shipped</span></div>
      <h3>{client.name}</h3><p>{client.summary}</p>
      <ul className="stack-list" aria-label="Technologies">{client.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <a href={client.href} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Visit website: ${client.name}`}>Visit website<ArrowUpRight size={17} aria-hidden="true" /></a>
    </div>
  </article>;
}
