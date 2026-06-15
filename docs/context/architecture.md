# Architecture

> 레이어/흐름/경계를 기술. (`docs` 브랜치에서만 편집)

## 레이어 (의존성 방향: 안쪽 ← 바깥쪽)

Clean Architecture의 **의존성 방향 원칙**을 정적 프론트엔드 규모에 맞게 적용한다.
(packages/modules/services 모노레포는 단일 정적 배포에 과해 채택하지 않음 — ADR-0001.)

```
src/domain/        타입 SSOT (Project, Profile, Attachment)   ← 최내곽, 프레임워크 무관
   ↑
src/content/       콘텐츠 로딩 (fs + gray-matter → domain 타입)  ← domain만 의존 (repository 역할)
   ↑
src/components/    UI 프레젠테이션 (domain 타입을 props로)        ← content/fs 직접 호출 금지
   ↑
src/app/           Next.js 페이지 (Composition Root)            ← content 로드 + components 조립
```

- **규칙**: `components`는 `content`를 import하지 않는다. 데이터는 **페이지가 주입**한다.
- `content`는 빌드 타임(Node)에서만 동작 — Server Component / `generateStaticParams`.

## 데이터 흐름 (빌드 타임)

```
content/profile.ts + content/projects/<slug>/index.md
   │  (fs.read + gray-matter 파싱)
   ▼
src/content (getProfile / getAllProjects / getProject)  → domain 타입
   │
   ▼
src/app/page.tsx (홈)            → AboutSection · TechStack · ProjectGallery · ResumeButton
src/app/projects/[slug]/page.tsx → ProjectDetail (Markdown 본문 + PdfViewer + 첨부)
   │  (next build, output: export)
   ▼
out/ 정적 HTML + 자산  → Vercel 배포
```

## 경계 및 계약

| 경계 | 인터페이스 | SSOT |
|------|-----------|------|
| 콘텐츠 ↔ 코드 | `index.md` frontmatter 계약 (title/summary/date/github/attachments) | `docs/specs/content.md` |
| content ↔ ui | domain 타입 (props) | `docs/specs/domain.md` |
| 페이지 라우팅 | `/`, `/projects/[slug]` | `docs/specs/ui.md` |

## 관련 문서

- 설계 결정: [`decisions.md`](./decisions.md) · 파일 맵: [`MAP.md`](./MAP.md)
