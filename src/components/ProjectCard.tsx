import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card ${project.featured ? "project-featured" : "project-compact"}`} aria-labelledby={`project-${project.id}`}>
    <div className="project-identity">
      <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
      <div><p className="eyebrow">{project.category}</p><h3 id={`project-${project.id}`}>{project.name}</h3></div>
      <span className="project-status">{project.status}</span>
    </div>
    <div className="project-details">
      <p className="project-summary">{project.summary}</p>
      <ul className="contribution-list">{project.contributions.map(text => <li key={text}>{text}</li>)}</ul>
      <div className="project-bottom">
        <ul className="stack-list" aria-label="Technologies">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
        {project.link && <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="text-link">{project.link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>}
      </div>
    </div>
  </article>;
}
