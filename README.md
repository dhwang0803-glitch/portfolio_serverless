# portfolio_serverless

백엔드 없는 정적 포트폴리오 웹사이트 — Next.js(App Router, 정적 export) + Vercel.

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 정적 export → out/
```

## 콘텐츠 추가

- **프로젝트**: `content/projects/<slug>/index.md` 추가 (frontmatter + 본문).
  첨부 파일은 `public/projects/<slug>/assets/`에 두고 frontmatter `attachments`로 참조.
- **프로필/기술스택/연락처/이력서**: `content/profile.ts` 수정.
- **이력서 PDF**: `public/resume/resume.pdf` 교체.

## 구조

```
content/        콘텐츠 SSOT (profile + projects/<slug>/index.md)
src/domain/     타입 SSOT
src/content/    콘텐츠 로딩 (gray-matter)
src/components/ UI
src/app/        페이지 (/, /projects/[slug])
docs/           PRD · 위키(context) · 구현명세(specs)
```

설계 배경과 규칙은 `CLAUDE.md`, `docs/PRD.md`, `docs/context/`, `docs/specs/` 참조.
AI-Native Engineering 하니스는 [AI_Native_Kit](https://github.com/dhwang0803/AI_Native_Kit)로 세팅됨.

## 배포

Vercel에 연결하면 `next build`(정적 export) 산출물이 자동 배포된다.
