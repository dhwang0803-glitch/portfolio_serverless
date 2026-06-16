# ui (components + pages) — 구현 명세

- **작성일**: 2026-06-15
- **상태**: Reviewed
- **참조**: `docs/PRD.md`, `docs/specs/domain.md`, `docs/specs/content.md`

> 프레젠테이션 컴포넌트 + Next.js App Router 페이지(Composition Root).
> 컴포넌트는 domain 타입을 props로 받는다 — content/fs를 직접 호출하지 않는다(페이지가 주입).

## 컴포넌트 (`src/components/`)

| 컴포넌트 | props | 역할 |
|---------|-------|------|
| `AboutSection` | `{ profile: Profile }` | 이름·한줄소개·자기소개 |
| `TechStack` | `{ items: TechItem[] }` | 기술스택(카테고리별 가로 배너 행 — 카테고리 라벨 + 뱃지) |
| `ProjectCard` | `{ project: ProjectSummary }` | 갤러리 1장 요약 카드 (→ `/projects/<slug>` 링크) |
| `ProjectGallery` | `{ projects: ProjectSummary[] }` | 카드 그리드 |
| `ProjectDetail` | `{ project: Project }` | 상세 본문(마크다운) + 첨부 + GitHub 링크 |
| `PdfViewer` | `{ href: string }` | PDF 인라인 미리보기(iframe) + 다운로드 |
| `ContactInfo` | `{ email: string; github?: string }` | 이메일(mailto)·GitHub |
| `ResumeButton` | `{ href: string }` | 이력서 다운로드 버튼 |
| `Markdown` | `{ source: string }` | `react-markdown` 래퍼 |

PDF/PPTX 정책: `PdfViewer`는 `kind==="pdf"`만 iframe 미리보기. PPTX 등은 `ProjectDetail`이
다운로드 링크로만 렌더.

## 페이지 (`src/app/`)

### layout.tsx
- 공통 레이아웃(헤더: 이름/네비, 푸터: ContactInfo). `metadata` 설정.

### page.tsx (홈, `/`)
```
const profile = getProfile();
const projects = getAllProjects();
→ <AboutSection profile> + <TechStack items={profile.techStack}>
  + <ProjectGallery projects> + <ResumeButton href={profile.resumeHref}>
```

### projects/[slug]/page.tsx (상세, `/projects/[slug]`)
```
export function generateStaticParams() → getAllSlugs().map(slug => ({ slug }))
const project = getProject(params.slug);
→ <ProjectDetail project>
export function generateMetadata() → 프로젝트 title 기반
```

## 의존성

- Upstream: `src/domain`, `src/content`(페이지만), `react-markdown`
- Downstream: 없음 (최외곽)
- 규칙: **components는 `src/content`를 import하지 않는다** — 데이터는 페이지가 주입(의존성 방향 유지).

## 디렉토리

```
src/
├── components/  (위 컴포넌트들 .tsx)
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/[slug]/page.tsx
└── styles/  (선택)
```
