import type { Project } from "@/content/types";

export default function FlagshipShowcase({ project }: { project: Project }) {
  return (
    <article className="flagship-showcase" aria-labelledby={`project-${project.id}`}>
      <div className="flagship-composition">
        <h3 id={`project-${project.id}`}>{project.name}</h3>
        <p className="flagship-statement">{project.showcase?.statement}</p>
      </div>
      <div className="flagship-caption">
        <div>
          <p className="flagship-caption-title">{project.category}</p>
          <p className="flagship-status">{project.status}</p>
        </div>
        <p className="flagship-summary">{project.showcase?.summary ?? project.summary}</p>
      </div>
    </article>
  );
}
