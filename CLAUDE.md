# Portfolio (Serverless) — Claude Code 지침

## 프로젝트 개요

백엔드 없는 **순수 정적 포트폴리오 웹사이트**. Next.js(App Router) + `output: export`로
정적 생성하여 Vercel 배포. 메인에 소개·기술스택·프로젝트 갤러리, 클릭 시 상세 페이지.
상세 정의는 `docs/PRD.md`, 구현 명세는 `docs/specs/`.

---

## 아키텍처 (의존성 방향 — 절대 위반 금지)

Clean Architecture의 **의존성 방향 원칙**을 정적 프론트엔드 규모로 적용 (ADR-0001).
모노레포(packages/modules/services) 아님.

```
src/domain/      타입 SSOT (Project, Profile)         ← 최내곽, 프레임워크 무관
   ↑
src/content/     콘텐츠 로딩 (fs + gray-matter)         ← domain만 의존
   ↑
src/components/  UI 프레젠테이션                        ← domain 타입만 props로
   ↑
src/app/         Next.js 페이지 (Composition Root)      ← content 로드 + components 조립
```

### 금지
- `src/components/`에서 `src/content/`(또는 `fs`) 직접 import 금지 — 데이터는 **페이지가 주입**.
- `src/domain/`에 React/Next 등 프레임워크 import 금지 (순수 타입).
- 컴포넌트 자체 타입 재정의 금지 — `src/domain` SSOT 사용.

---

## 구현 명세 (docs/specs) — SSOT

| 파일 | 무엇 |
|------|------|
| `docs/specs/domain.md` | 타입 SSOT |
| `docs/specs/content.md` | 콘텐츠 로딩 + frontmatter 계약 |
| `docs/specs/ui.md` | 컴포넌트 + 페이지 |

> 코드와 spec이 어긋나면 같은 PR에서 spec을 갱신한다.

---

## 콘텐츠 추가 방법

- **새 프로젝트**: `content/projects/<slug>/index.md` 생성 (frontmatter: `title`,
  `summary`, `date`, 선택 `github`/`tags`/`attachments`) + 본문 작성. 첨부는
  `public/projects/<slug>/assets/`에 두고 frontmatter `attachments[].file`로 참조.
- **프로필/기술스택/연락처/이력서**: `content/profile.ts` 수정.
- **PDF**는 상세에서 인라인 미리보기, **PPTX**는 다운로드 링크.

---

## 기술 스택 / 컨벤션

- Next.js 15 (App Router, `output: 'export'`), React 19, TypeScript(strict)
- 콘텐츠: gray-matter(frontmatter) + react-markdown(본문)
- 빌드/검증: `npm run build` (정적 export → `out/`)
- 경로 별칭: `@/*` → `src/*`, `@content/*` → `content/*`
- 함수/컴포넌트 props에 타입 명시. 파일명: 컴포넌트 PascalCase, 그 외 camelCase.

---

## 위키 (docs/context) — 결정/아키텍처 SSOT

- `MAP.md`(구조 지도) · `architecture.md`(레이어/흐름) · `decisions.md`(ADR 인덱스).
- **`docs/context/`는 `docs` 브랜치에서만 편집** (코드 PR과 분리). `docs/specs/`는 코드와 함께 갱신.

---

## 슬래시 커맨드 (`.claude/commands/`)

| 커맨드 | 용도 |
|--------|------|
| `/spec-design` | PRD → 설계 → 모듈 spec → 스캐폴딩 |
| `/pr-report` | 커밋 → 보안점검 → 위키감사 → PR |
| `/pr-3axis-review` | PR 3축 리뷰 |
| `/adr` | 새 ADR 생성 + 인덱스 갱신 (`docs` 브랜치) |

---

## 보안

- 비밀키/토큰 하드코딩 금지. `.env`, `*.pem`, `*.key`, `.claude/settings.local.json`은 `.gitignore`에 포함됨.
- 정적 사이트이므로 런타임 시크릿 없음. 외부 링크(github/email)만 노출.
