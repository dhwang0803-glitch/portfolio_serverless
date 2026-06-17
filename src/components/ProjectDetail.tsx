import Link from "next/link";
import type { Project } from "@/domain";
import { Markdown } from "./Markdown";
import { PdfViewer } from "./PdfViewer";
import { coverLayer, coverSrc } from "@/lib/placeholder";

export function ProjectDetail({ project, index = 0 }: { project: Project; index?: number }) {
  const pdfs = project.attachments.filter((a) => a.kind === "pdf");
  const others = project.attachments.filter((a) => a.kind !== "pdf");

  return (
    <main>
      <header
        className="detail__cover"
        style={{ backgroundImage: coverLayer(coverSrc(project.slug, project.thumbnail), index) }}
      >
        <div className="detail__cover-inner">
          <p className="detail__date">{project.date}</p>
          <h1 className="detail__title serif">{project.title}</h1>
        </div>
      </header>

      <article className="article">
        <p className="detail__summary">{project.summary}</p>
        <div className="detail__meta">
          {project.tags?.map((tag) => (
            <span key={tag} className="pcard__tag">
              {tag}
            </span>
          ))}
          {project.github && (
            <a className="contact__link" href={project.github} target="_blank" rel="noopener noreferrer">
              ↗ GitHub
            </a>
          )}
        </div>

        {project.summarySlide?.kind === "pdf" && (
          <section className="detail__summary-slide">
            <PdfViewer href={project.summarySlide.href} title={`${project.title} 1장 요약`} />
          </section>
        )}

        <div className="markdown">
          <Markdown source={project.body} />
        </div>

        {pdfs.length > 0 && (
          <section className="detail__attachments">
            <h2 className="detail__section-title serif">문서</h2>
            {pdfs.map((a) => (
              <div key={a.href}>
                <p>{a.label}</p>
                <PdfViewer href={a.href} title={a.label} />
              </div>
            ))}
          </section>
        )}

        {others.length > 0 && (
          <section className="detail__downloads">
            <h2 className="detail__section-title serif">첨부 파일</h2>
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

        <Link href="/#projects" className="detail__back">
          ← 프로젝트 목록으로
        </Link>
      </article>
    </main>
  );
}
