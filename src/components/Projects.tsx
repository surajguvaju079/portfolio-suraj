import { projects } from "@/content/projects";
import Container from "./ui/Container";
import FlagshipShowcase from "./FlagshipShowcase";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return <section id="work" className="section editorial-work" aria-labelledby="work-title"><Container>
    <h2 id="work-title" className="editorial-work-heading">Selected engineering work</h2>
    <div className="project-grid">{projects.map((project, index) => project.id === "team-bhariya" ? <FlagshipShowcase key={project.id} project={project} /> : <ProjectCard key={project.id} project={project} index={index} />)}</div>
  </Container></section>;
}
