import type { Metadata } from "next";
import { getAllSlugs, getProject } from "@/content/projects";
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
  return <ProjectDetail project={project} />;
}
