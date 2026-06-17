import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Attachment, Project, ProjectSummary } from "@/domain";

// 콘텐츠 루트: 빌드 시 process.cwd()는 프로젝트 루트.
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

interface FrontmatterAttachment {
  label: string;
  file: string;
  kind?: Attachment["kind"];
}

function inferKind(file: string): Attachment["kind"] {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".pdf") return "pdf";
  if (ext === ".pptx" || ext === ".ppt") return "pptx";
  return "other";
}

function readProjectDir(slug: string): { data: Record<string, unknown>; body: string } {
  const file = path.join(PROJECTS_DIR, slug, "index.md");
  if (!fs.existsSync(file)) {
    throw new Error(`[content] 프로젝트 콘텐츠를 찾을 수 없습니다: ${file}`);
  }
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  if (!data.title || !data.summary || !data.date) {
    throw new Error(`[content] ${slug}/index.md frontmatter에 title/summary/date가 필요합니다.`);
  }
  return { data, body: content };
}

function toSummary(slug: string, data: Record<string, unknown>): ProjectSummary {
  return {
    slug,
    title: String(data.title),
    summary: String(data.summary),
    date: String(data.date),
    thumbnail: data.thumbnail ? String(data.thumbnail) : undefined,
    github: data.github ? String(data.github) : undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined,
  };
}

/** 모든 프로젝트 슬러그. */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

/** 모든 프로젝트 요약 (date 내림차순). */
export function getAllProjects(): ProjectSummary[] {
  return getAllSlugs()
    .map((slug) => toSummary(slug, readProjectDir(slug).data))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 단일 프로젝트 상세 (본문 + 첨부 포함). */
export function getProject(slug: string): Project {
  const { data, body } = readProjectDir(slug);
  const rawAttachments = Array.isArray(data.attachments)
    ? (data.attachments as FrontmatterAttachment[])
    : [];
  const attachments: Attachment[] = rawAttachments.map((a) => ({
    label: a.label,
    href: `/projects/${slug}/assets/${a.file}`,
    kind: a.kind ?? inferKind(a.file),
  }));

  // summarySlide: 1장 요약 슬라이드 파일명(assets/ 내) → 본문 위 인라인 노출.
  const summarySlide: Attachment | undefined = data.summarySlide
    ? {
        label: "1장 요약",
        href: `/projects/${slug}/assets/${String(data.summarySlide)}`,
        kind: inferKind(String(data.summarySlide)),
      }
    : undefined;

  return { ...toSummary(slug, data), body, summarySlide, attachments };
}
