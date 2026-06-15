import Link from "next/link";
import type { ProjectSummary } from "@/domain";

export function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card">
      <span className="card__date">{project.date}</span>
      <h3 className="card__title">{project.title}</h3>
      <p className="card__summary">{project.summary}</p>
      {project.tags && project.tags.length > 0 && (
        <ul className="card__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="card__tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <span className="card__more">자세히 보기 →</span>
    </Link>
  );
}
