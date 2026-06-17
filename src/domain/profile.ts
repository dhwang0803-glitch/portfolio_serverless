// 프로필 도메인 타입.

export interface TechItem {
  name: string;
  category?: string; // 예: "Frontend", "Backend", "Infra"
}

export interface Certification {
  date: string; // "YYYY.MM" 취득연월
  name: string; // 자격증명
  issuer: string; // 발급기관
}

export interface Profile {
  name: string;
  headline: string; // 한 줄 소개
  about: string; // 자기소개 (마크다운 허용)
  email: string;
  github?: string;
  resumeHref?: string; // 이력서 다운로드 경로
  techStack: TechItem[];
  certifications?: Certification[]; // 자격증 (최신순)
}
