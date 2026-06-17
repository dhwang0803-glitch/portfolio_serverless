# domain — 구현 명세

- **작성일**: 2026-06-15
- **상태**: Reviewed
- **참조**: `docs/PRD.md`, `docs/context/adr/ADR-0001` (스택 결정)

> 프레임워크 무관 순수 타입 SSOT. content/components/app 모두 이 타입을 사용한다.

## 모듈 역할

포트폴리오 도메인 모델(타입)의 단일 정의. 다른 레이어가 자체 타입을 재정의하지 않는다.

## 타입 (`src/domain/`)

### project.ts

```ts
// 첨부 파일 (PDF/PPTX 등)
export interface Attachment {
  label: string;          // 표시명
  href: string;           // /projects/<slug>/assets/<file> 또는 public 경로
  kind: "pdf" | "pptx" | "other";
}

// 갤러리 카드용 요약 (목록에서 사용)
export interface ProjectSummary {
  slug: string;           // URL 식별자
  title: string;
  summary: string;        // 1~2줄 요약
  thumbnail?: string;     // 카드 썸네일 경로 (public)
  date: string;           // YYYY-MM 또는 YYYY-MM-DD
  github?: string;        // 저장소 URL
  tags?: string[];
}

// 상세 페이지용 (요약 + 본문 + 첨부)
export interface Project extends ProjectSummary {
  body: string;           // 마크다운 본문 (상세)
  summarySlide?: Attachment; // 1장 요약 슬라이드 — 본문 위 인라인 노출
  attachments: Attachment[];
}
```

### profile.ts

```ts
export interface TechItem {
  name: string;
  category?: string;      // 예: "Frontend", "Infra"
}

export interface Certification {
  date: string;           // "YYYY.MM" 취득연월
  name: string;           // 자격증명
  issuer: string;         // 발급기관
}

export interface Profile {
  name: string;
  headline: string;       // 한 줄 소개
  about: string;          // 자기소개 (마크다운 허용)
  email: string;          // mailto 대상
  github?: string;
  resumeHref?: string;    // 이력서 다운로드 경로 (예: /resume/resume.pdf)
  techStack: TechItem[];
  certifications?: Certification[]; // 자격증 (최신순)
}
```

### index.ts

```ts
export * from "./project";
export * from "./profile";
```

## 의존성

- Upstream: 없음 (최내곽)
- Downstream: `src/content`, `src/components`, `src/app`

## 디렉토리

```
src/domain/
├── project.ts
├── profile.ts
└── index.ts
```
