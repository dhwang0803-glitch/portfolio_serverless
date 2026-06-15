import type { ProjectSummary } from "@/domain";
import { ProjectCard } from "./ProjectCard";

export function ProjectGallery({ projects }: { projects: ProjectSummary[] }) {
  return (
    <section className="gallery">
      <h2 className="section__title">프로젝트</h2>
      {projects.length === 0 ? (
        <p className="gallery__empty">
          아직 등록된 프로젝트가 없습니다. <code>content/projects/&lt;slug&gt;/index.md</code>를 추가하세요.
        </p>
      ) : (
        <div className="gallery__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
