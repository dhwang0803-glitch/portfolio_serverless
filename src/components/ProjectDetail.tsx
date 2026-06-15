import Link from "next/link";
import type { Project } from "@/domain";
import { Markdown } from "./Markdown";
import { PdfViewer } from "./PdfViewer";

export function ProjectDetail({ project }: { project: Project }) {
  const pdfs = project.attachments.filter((a) => a.kind === "pdf");
  const others = project.attachments.filter((a) => a.kind !== "pdf");

  return (
    <article className="detail">
      <Link href="/" className="detail__back">
        ← 목록으로
      </Link>

      <header className="detail__header">
        <h1 className="detail__title">{project.title}</h1>
        <span className="detail__date">{project.date}</span>
        {project.github && (
          <a className="detail__github" href={project.github} target="_blank" rel="noopener noreferrer">
            ↗ GitHub
          </a>
        )}
      </header>

      <p className="detail__summary">{project.summary}</p>

      <div className="detail__body">
        <Markdown source={project.body} />
      </div>

      {pdfs.length > 0 && (
        <section className="detail__attachments">
          <h2 className="section__title">문서</h2>
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
          <h2 className="section__title">첨부 파일</h2>
          <ul>
            {others.map((a) => (
              <li key={a.href}>
                <a href={a.href} download>
                  ↓ {a.label} ({a.kind})
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
