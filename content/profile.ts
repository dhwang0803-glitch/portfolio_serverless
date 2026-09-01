import type { Profile } from "@/domain";

// 프로필 콘텐츠 SSOT — 본인 정보로 수정하세요.
export const profile: Profile = {
  name: "황대원",
  headline: "AI-Native 엔지니어 · 풀스택 · ML 개발자",
  about: `고객의 업무를 데이터로 진단하고, 비전문가와 개발자 사이를 잇는 일을 해왔습니다.

캐나다 회계법인에서 고객사 데이터를 분석해 문제를 정의하고 해결책을 합의·실행했고, LG전자 사이니지 협력사에서 SQA로 복잡한 제품의 이슈를 발굴하고 현장의 요구를 개발자가 다룰 수 있는 명세로 옮겼습니다. 이후 LG헬로비전 DX School AX 전문가 과정에서 멀티에이전트 워크플로우 자동화 플랫폼(FlowIt)과 NILM 기반 에너지 진단 시스템(와트이쓔)을 설계·구현하며, 실패 지점을 지표로 정의하고 개선하는 방식을 익혔습니다.

지금은 개인지식관리 도구 옵시디언의 AI 자동화 플러그인을 오픈소스로 만들어 공개하고 있습니다. 자동화해야 할 업무를 먼저 겪고 그것을 다룰 기술을 나중에 익힌 순서가, 제가 AX에서 일하고 싶은 이유입니다.`,
  email: "dhwang0803@gmail.com",
  github: "https://github.com/dhwang0803-glitch",
  resumeHref: "/resume/resume.pdf",
  // 카테고리 순서가 화면 표시 순서 (TechStack은 등장 순서를 유지).
  techStack: [
    // 1. AI Engineering — 모델링·데이터 분석
    { name: "PyTorch", category: "AI Engineering" },
    { name: "NILM 시계열 분해", category: "AI Engineering" },
    { name: "CNN · TDA", category: "AI Engineering" },

    // 2. AI Software — RAG·GraphRAG 등 LLM 활용 서비스
    { name: "RAG · GraphRAG", category: "AI Software" },
    { name: "임베딩 (BGE-M3 · SBERT · CLIP)", category: "AI Software" },
    { name: "멀티에이전트 · 워크플로우 자동화 (LangGraph)", category: "AI Software" },
    { name: "AI 평가 (LLM-as-Judge)", category: "AI Software" },
    { name: "LLM 서빙 (vLLM)", category: "AI Software" },

    // 3. AI Native Engineering — 프롬프트·컨텍스트·하네스 엔지니어링
    { name: "프롬프트 엔지니어링", category: "AI Native Engineering" },
    { name: "컨텍스트 엔지니어링", category: "AI Native Engineering" },
    { name: "하네스 엔지니어링", category: "AI Native Engineering" },
    { name: "Spec 주도 개발 (SDD)", category: "AI Native Engineering" },
    { name: "TDD (Red-Green-Refactor)", category: "AI Native Engineering" },
    { name: "MCP", category: "AI Native Engineering" },
    { name: "클린 아키텍처", category: "AI Native Engineering" },

    // 4. 백엔드 (AI 협업)
    { name: "Python", category: "백엔드", tier: "ai-collab" },
    { name: "FastAPI", category: "백엔드", tier: "ai-collab" },
    { name: "Celery", category: "백엔드", tier: "ai-collab" },
    { name: "Redis", category: "백엔드", tier: "ai-collab" },
    { name: "PostgreSQL", category: "백엔드", tier: "ai-collab" },
    { name: "pgvector (벡터DB)", category: "백엔드", tier: "ai-collab" },
    { name: "Neo4j (Graph DB)", category: "백엔드", tier: "ai-collab" },
    { name: "TimescaleDB", category: "백엔드", tier: "ai-collab" },

    // 5. 프론트엔드 (AI 협업)
    { name: "Next.js", category: "프론트엔드", tier: "ai-collab" },
    { name: "TypeScript", category: "프론트엔드", tier: "ai-collab" },
    { name: "React", category: "프론트엔드", tier: "ai-collab" },
    { name: "Tailwind CSS", category: "프론트엔드", tier: "ai-collab" },

    // 6. 인프라 (AI 협업)
    { name: "Docker", category: "인프라", tier: "ai-collab" },
    { name: "Google Cloud Platform", category: "인프라", tier: "ai-collab" },
    { name: "Terraform", category: "인프라", tier: "ai-collab" },

    // 7. 품질·테스트 (AI 협업)
    { name: "Playwright E2E", category: "품질·테스트", tier: "ai-collab" },
    { name: "테스트 자동화", category: "품질·테스트", tier: "ai-collab" },

    // 8. 협업 툴
    { name: "Git · GitHub", category: "협업 툴" },
    { name: "Slack", category: "협업 툴" },
    { name: "Jira", category: "협업 툴" },
    { name: "Notion", category: "협업 툴" },

    // 9. Soft Skills
    { name: "AI PM · 프로젝트 리딩", category: "Soft Skills" },
    { name: "요구사항 분석", category: "Soft Skills" },
    { name: "고객 대면 문제 해결", category: "Soft Skills" },
  ],
  // 자격증 (최신순) — 별도 Certifications 섹션에서 렌더.
  certifications: [
    { date: "2026.03", name: "데이터분석 준전문가 (ADsP)", issuer: "한국데이터산업진흥원" },
    { date: "2025.12", name: "정보처리기사", issuer: "한국산업인력공단" },
    { date: "2024.04", name: "ISTQB Foundation Level", issuer: "International Software Testing Qualifications Board" },
    { date: "2023.02", name: "IELTS 6.5", issuer: "어학 · 글로벌 커뮤니케이션" },
  ],
};
