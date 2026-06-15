import type { Metadata } from "next";
import { getAllProjects, getAllSlugs, getProject } from "@/content/projects";
import { ProjectDetail } from "@/components/ProjectDetail";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Next.js 15: params는 Promise.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: `${project.title} — Portfolio`, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  // 카드와 동일한 폴백 그라데이션을 쓰도록 갤러리 순서 기준 index 전달.
  const index = getAllProjects().findIndex((p) => p.slug === slug);
  return <ProjectDetail project={project} index={index < 0 ? 0 : index} />;
}
