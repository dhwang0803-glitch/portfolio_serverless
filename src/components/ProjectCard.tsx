import Link from "next/link";
import type { ProjectSummary } from "@/domain";
import { coverLayer, coverSrc } from "@/lib/placeholder";

export function ProjectCard({ project, index }: { project: ProjectSummary; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="pcard">
      <div
        className="pcard__cover"
        style={{ backgroundImage: coverLayer(coverSrc(project.slug, project.thumbnail), index) }}
      />
      <div className="pcard__body">
        <span className="pcard__date">{project.date}</span>
        <h3 className="pcard__title serif">{project.title}</h3>
        <p className="pcard__summary">{project.summary}</p>
        {project.tags && project.tags.length > 0 && (
          <ul className="pcard__tags">
            {project.tags.map((tag) => (
              <li key={tag} className="pcard__tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
        <span className="pcard__more">View Project →</span>
      </div>
    </Link>
  );
}
