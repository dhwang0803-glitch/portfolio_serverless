import type { ProjectSummary } from "@/domain";
import { ProjectCard } from "./ProjectCard";

export function ProjectGallery({ projects }: { projects: ProjectSummary[] }) {
  if (projects.length === 0) {
    return (
      <p className="gallery__empty">
        아직 등록된 프로젝트가 없습니다. <code>content/projects/&lt;slug&gt;/index.md</code>를 추가하세요.
      </p>
    );
  }
  return (
    <div className="gallery__grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
