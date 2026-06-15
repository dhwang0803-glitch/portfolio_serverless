# Project MAP

> 프로젝트 최상위 폴더 **지도**. 새 최상위 폴더가 생길 때만 갱신. (`docs` 브랜치에서만 편집)

## 최상위 구조 (정적 Next.js 사이트 — 단일 배포)

```
portfolio_serverless/
├── content/                 # 콘텐츠 SSOT (정적 데이터 + 마크다운 + 첨부)
│   ├── profile.ts           #   프로필/기술스택/연락처
│   └── projects/<slug>/     #   포트폴리오 1건 = 디렉토리 1개 (index.md + assets/)
├── public/                  # 정적 자산 (이력서/첨부 PDF 등)
├── src/
│   ├── domain/              #   타입 SSOT (Project, Profile) — 프레임워크 무관
│   ├── content/             #   콘텐츠 로딩 레이어 (fs + gray-matter)
│   ├── components/          #   UI 프레젠테이션
│   └── app/                 #   Next.js App Router 페이지 (Composition Root)
├── docs/
│   ├── PRD.md
│   ├── context/             #   위키 (결정/아키텍처) — docs 브랜치 전용
│   └── specs/               #   구현 명세 (domain/content/ui)
├── _agent_templates/        # TDD/리뷰 서브에이전트 (AI_Native_Kit)
└── _module_templates/       # 모듈 README 템플릿
```

> 백엔드/서버리스 함수 없음. 빌드 타임 정적 생성(SSG) + Vercel 배포.

## 브랜치 전략

| 브랜치 | 용도 |
|--------|------|
| `main` | 안정 브랜치 (Vercel 프로덕션) |
| `feature/*` | 기능 단위 개발 |
| `docs` | 위키 편집 전용 (`docs/context/`) |

## 관련 문서

- 아키텍처: [`architecture.md`](./architecture.md)
- 설계 결정: [`decisions.md`](./decisions.md)
