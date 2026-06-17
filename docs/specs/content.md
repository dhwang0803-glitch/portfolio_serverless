# content — 구현 명세

- **작성일**: 2026-06-15
- **상태**: Reviewed
- **참조**: `docs/PRD.md`, `docs/specs/domain.md`

> 콘텐츠 로딩 레이어 (repository 역할). `content/` 디렉토리/데이터를 읽어 **domain 타입**으로 반환.
> 빌드 타임(Node)에서만 동작 — Server Component / `generateStaticParams`에서 호출.

## 모듈 역할

파일 기반 콘텐츠(프로필 데이터 + 프로젝트 마크다운)를 도메인 타입으로 변환해 공급한다.
UI는 파일 시스템을 직접 모른다 — 이 레이어를 통해서만 접근.

## 콘텐츠 소스 레이아웃

```
content/
├── profile.ts                     # Profile 객체 (typed)
└── projects/<slug>/
    ├── index.md                   # frontmatter + 마크다운 본문
    └── assets/*.pdf|pptx          # 첨부 원본 (빌드 시 public으로 노출 경로 매핑)
```

`index.md` frontmatter 계약:
```yaml
title: string
summary: string
date: "YYYY-MM"
thumbnail?: string
github?: string
tags?: string[]
summarySlide?: string                    # 1장 요약 슬라이드 파일명(assets/ 내) — 본문 위 인라인 노출
attachments?: [{ label, file, kind }]   # file = assets/ 내 파일명
```

## 함수 (`src/content/`)

### projects.ts

```ts
import type { Project, ProjectSummary } from "@/domain";

// 모든 프로젝트 요약 (date 내림차순) — 갤러리용
export function getAllProjects(): ProjectSummary[];

// 단일 프로젝트 상세 (본문 + 첨부 포함). 없으면 throw.
export function getProject(slug: string): Project;

// 정적 경로 생성용
export function getAllSlugs(): string[];
```

구현 노트:
- `content/projects/` 하위 디렉토리를 `fs.readdirSync`로 열거, 각 `index.md`를
  `gray-matter`로 파싱 → frontmatter + body.
- `attachments[].file` → `href = /projects/<slug>/assets/<file>`로 매핑(빌드 시 public 복사
  또는 정적 라우트). MVP는 `public/projects/<slug>/assets/`에 두고 그대로 링크.
- 날짜 파싱 실패/필수 필드 누락 시 명확한 에러 메시지로 throw (빌드를 깨서 조기 발견).

### profile.ts

```ts
import type { Profile } from "@/domain";
export function getProfile(): Profile;   // content/profile.ts 데이터 반환
```

## 의존성

- Upstream: `src/domain`, `gray-matter`, Node `fs`/`path`
- Downstream: `src/app` (페이지에서 로드)

## 디렉토리

```
src/content/
├── projects.ts
└── profile.ts
```
