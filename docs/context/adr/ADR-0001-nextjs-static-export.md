# ADR-0001: Next.js 정적 export 채택 (React+Vite 대신), 모노레포 미적용

- **Status**: Accepted
- **Date**: 2026-06-15
- **Deciders**: @dhwang0803
- **Tags**: area/frontend, layer/architecture

## Context

백엔드 없는 정적 포트폴리오 사이트. 요구: 포트폴리오마다 1개의 상세 페이지(`/projects/<slug>`),
메인의 갤러리, 파일(PDF/PPTX) 첨부, Vercel 배포. 프론트엔드 후보로 Next.js와 React+Vite를
모두 선호했다. 또한 조직 표준(AI_Native_Kit)은 Clean Architecture **모노레포**(packages/
modules/services)를 기본 프리셋으로 제공한다.

## Decision

1. **Next.js(App Router) + `output: 'export'` 정적 생성**을 채택한다.
2. **모노레포(packages/modules/services)는 적용하지 않는다.** 단일 정적 배포이므로
   `src/{domain,content,components,app}` **레이어 구조**로 Clean Architecture의
   의존성 방향 원칙만 가져간다.

## Consequences

### Positive
- 파일 기반 라우팅으로 `/projects/[slug]` + `generateStaticParams`가 자연스럽다.
- SSG·이미지 처리·Vercel 배포가 1급 지원.
- 도메인 타입 SSOT + 단방향 의존성으로 콘텐츠/UI 분리 유지.

### Negative / Trade-offs
- Next.js 빌드 체계 종속(React+Vite보다 무거움). 정적 사이트엔 충분히 수용 가능.
- 모노레포 프리셋과 디렉토리 구조가 달라, 조직 공통 도구(에이전트/커맨드)는 레이어
  기준으로 해석해 적용해야 한다.

### Follow-ups
- AI_Native_Kit에 "frontend/static" 프리셋 추가 검토 (모노레포 가정이 정적 사이트에 과함).

## Alternatives Considered

- **React + Vite**: 가볍지만 파일 기반 라우팅/SSG가 기본 제공이 아님 → react-router +
  수동 프리렌더 필요. "프로젝트마다 1페이지" 요구에 손이 더 감 → 기각.
- **Clean Architecture 모노레포 그대로**: use-case/port/adapter/서비스 계층은 백엔드 없는
  정적 사이트에 과설계 → 기각, 레이어 원칙만 채택.

## References

- `docs/PRD.md`, `docs/specs/{domain,content,ui}.md`
