import type { Profile } from "@/domain";

// 프로필 콘텐츠 SSOT — 본인 정보로 수정하세요.
export const profile: Profile = {
  name: "황대원",
  headline: "AI-Native 엔지니어 · 풀스택 · ML 개발자",
  about: `고객의 업무를 데이터로 진단하고, AI로 일하는 방식을 바꾸는 엔지니어입니다.

회계에서 QA로, 다시 AI로 직무를 옮겨오며 매번 새로운 도메인을 빠르게 습득했습니다.
멀티에이전트 워크플로우 자동화(FlowIt), NILM 에너지 진단(와트이쓔), 멀티모달 추천·광고
시스템(LG헬로비전) 등에서 PM/조장으로 설계를 주도했고, 백엔드·ML·프론트엔드를
가로지릅니다. Clean Architecture와 AI Native 엔지니어링(하니스·컨텍스트 엔지니어링)으로
품질을 보장하는 방식을 즐깁니다.`,
  email: "dhwang0803@gmail.com",
  github: "https://github.com/dhwang0803",
  resumeHref: "/resume/resume.pdf",
  techStack: [
    { name: "Python", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "FastAPI", category: "Backend" },
    { name: "LangGraph", category: "AI/Agent" },
    { name: "GraphRAG / Neo4j", category: "AI/Agent" },
    { name: "PyTorch", category: "ML" },
    { name: "CLIP / YOLO", category: "ML" },
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "PostgreSQL + pgvector", category: "Data" },
    { name: "GCP (Cloud Run)", category: "Infra" },
    { name: "Docker", category: "Infra" },
  ],
};
