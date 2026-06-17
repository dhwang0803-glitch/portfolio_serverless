// 포트폴리오 도메인 타입 — 프레임워크 무관 SSOT.

/** 첨부 파일 (PDF / PPTX 등) */
export interface Attachment {
  label: string;
  href: string;
  kind: "pdf" | "pptx" | "other";
}

/** 갤러리 카드용 요약 */
export interface ProjectSummary {
  slug: string;
  title: string;
  summary: string;
  thumbnail?: string;
  date: string; // "YYYY-MM" 또는 "YYYY-MM-DD"
  github?: string;
  tags?: string[];
}

/** 상세 페이지용 (요약 + 본문 + 첨부) */
export interface Project extends ProjectSummary {
  body: string; // 마크다운 본문
  summarySlide?: Attachment; // 1장 요약 슬라이드 — 본문 위에 인라인으로 먼저 노출
  attachments: Attachment[];
}
