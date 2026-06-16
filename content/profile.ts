import type { Profile } from "@/domain";

// 프로필 콘텐츠 SSOT — 본인 정보로 수정하세요.
export const profile: Profile = {
  name: "황대원",
  headline: "AI-Native 엔지니어 · 풀스택 · ML 개발자",
  about: `회계와 QA를 거쳐 AI로 커리어를 전환하고 있는 엔지니어입니다.

캐나다 회계법인에서 고객 데이터를 분석해 문제를 진단하고 합의를 이끌었고, LG전자 사이니지 협력사에서 SQA로 복잡한 제품의 품질을 파고들며 현장과 개발자를 조율했습니다. 지금은 AI 부트캠프에서 그 경험을 토대로 멀티에이전트 워크플로우 자동화(FlowIt)와 멀티모달 추천·광고 시스템(LG헬로비전 연계)을 PM/조장으로, NILM 에너지 진단(와트이쓔)을 DL·백엔드로 설계·구현했습니다.

백엔드·ML·프론트엔드를 가로지르고, Clean Architecture와 AI Native 엔지니어링으로 품질을 보장하는 방식을 좋아합니다. 고객의 문제를 데이터로 진단하고 비전문가와 개발자를 잇는 일 — 그게 제가 AX에서 하고 싶은 일입니다.`,
  email: "dhwang0803@gmail.com",
  github: "https://github.com/dhwang0803",
  resumeHref: "/resume/resume.pdf",
  // 카테고리 순서가 화면 표시 순서 (TechStack은 등장 순서를 유지).
  techStack: [
    // 1. AI Engineering — 모델링·데이터 분석
    { name: "PyTorch", category: "AI Engineering" },
    { name: "CNN", category: "AI Engineering" },
    { name: "TDA", category: "AI Engineering" },
    { name: "파인튜닝", category: "AI Engineering" },
    { name: "YOLO11 · CLIP (비전)", category: "AI Engineering" },

    // 2. AI Software — RAG·GraphRAG 등 LLM 활용 서비스
    { name: "LangGraph", category: "AI Software" },
    { name: "GraphRAG", category: "AI Software" },
    { name: "RAG (pgvector)", category: "AI Software" },
    { name: "멀티에이전트 오케스트레이션", category: "AI Software" },

    // 3. AI Native Engineering — 프롬프트·컨텍스트·하네스 엔지니어링
    { name: "프롬프트 엔지니어링", category: "AI Native Engineering" },
    { name: "컨텍스트 엔지니어링", category: "AI Native Engineering" },
    { name: "하네스 엔지니어링", category: "AI Native Engineering" },
    { name: "클린 아키텍처", category: "AI Native Engineering" },
    { name: "MCP", category: "AI Native Engineering" },
    { name: "TDD 에이전트 자동화", category: "AI Native Engineering" },

    // 4. Backend
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "PostgreSQL + pgvector", category: "Backend" },
    { name: "TimescaleDB", category: "Backend" },
    { name: "Neo4j AuraDB", category: "Backend" },
    { name: "Docker · Modal GPU", category: "Backend" },
    { name: "GCP (Cloud Run/SQL)", category: "Backend" },

    // 5. Frontend
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
  ],
};
