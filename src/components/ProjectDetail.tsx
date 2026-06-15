import Link from "next/link";
import type { Project } from "@/domain";
import { Markdown } from "./Markdown";
import { PdfViewer } from "./PdfViewer";

export function ProjectDetail({ project }: { project: Project }) {
  const pdfs = project.attachments.filter((a) => a.kind === "pdf");
  const others = project.attachments.filter((a) => a.kind !== "pdf");

  return (
    <article className="detail">
      <Link href="/#projects" className="detail__back">
        ← 프로젝트 목록
      </Link>

      <header className="detail__head">
        <span className="detail__date">{project.date}</span>
        <h1 className="detail__title">{project.title}</h1>
        <p className="detail__summary">{project.summary}</p>
        <div className="detail__meta">
          {project.tags?.map((tag) => (
            <span key={tag} className="card__tag">
              {tag}
            </span>
          ))}
          {project.github && (
            <a className="btn" href={project.github} target="_blank" rel="noopener noreferrer">
              ↗ GitHub
            </a>
          )}
        </div>
      </header>

      <div className="panel">
        <div className="detail__body">
          <Markdown source={project.body} />
        </div>
      </div>

      {pdfs.length > 0 && (
        <section className="detail__attachments">
          <div className="section__head">
            <span className="section__kicker">문서</span>
            <span className="section__line" />
          </div>
          {pdfs.map((a) => (
            <div key={a.href}>
              <p className="detail__attachment-label">{a.label}</p>
              <PdfViewer href={a.href} title={a.label} />
            </div>
          ))}
        </section>
      )}

      {others.length > 0 && (
        <section className="detail__downloads">
          <div className="section__head">
            <span className="section__kicker">첨부 파일</span>
            <span className="section__line" />
          </div>
          <ul>
            {others.map((a) => (
              <li key={a.href}>
                <a href={a.href} download>
                  ⬇ {a.label} ({a.kind})
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
