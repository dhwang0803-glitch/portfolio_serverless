---
title: "FlowIt — Multi-Agent 에이전틱 워크플로우 자동화 플랫폼"
summary: "자연어 요청을 AI가 워크플로우로 조립·검증·실행하는 멀티에이전트 플랫폼. 암묵지를 재사용 가능한 스킬로 자산화하고, 온톨로지 GraphRAG로 노드 선택 품질을 보장한다."
date: "2026-06"
tags: ["Python", "FastAPI", "LangGraph", "GraphRAG", "Clean Architecture"]
attachments:
  - label: "발표자료 (PPTX)"
    file: "flowit.pptx"
    kind: "pptx"
---

## 역할

**PM · 백엔드 · 프론트엔드 (조장)** — 아키텍처 설계, AI Native 하니스 엔지니어링, 멀티에이전트 오케스트레이션 전반을 주도.

## 문제

자동화 도구는 늘었지만 업무 노하우는 여전히 사람에게 갇혀 있다. FlowIt은 "암묵지를 시스템 속 스킬로, 스킬을 워크플로우로" 전환해 전문가의 노하우를 팀 전체의 실행 역량으로 확장한다.

## 핵심 기술

- **Clean Architecture · 모노레포**: 자연어 요청 → 62종 노드 카탈로그 조합 → 워크플로우 자동 생성 → 위상정렬 실행.
- **멀티에이전트 (Main Orchestrator + 3 Sub-Agent · 5 Modal 앱)**: Supervisor가 9종 intent를 결정론적으로 라우팅하고, Composer/Skills Builder/Personalization을 동적 위임하는 닫힌 루프.
- **온톨로지 GraphRAG**: 평탄 벡터 검색의 한계(노드 호환성·필수 연결 미반영)를 Neo4j 그래프 확장(vector seed → 1-hop expand → ground truth 제약)으로 해소. QA 정량지표 0.45 → 0.75.
- **AI Native 하니스 엔지니어링**: 9종 에이전트 템플릿으로 TDD(Red→Green→Refactor) 자동화, 2중 검증(LLM-as-Judge QA≥8 + GraphValidator 7종).
- **Skills Builder**: 업무 문서(SOP) → 재사용 스킬. 2단계 추출(메타→상세), 결정적 스켈레톤, 2-md(SKILL.md + COMPOSER.md) 이중 저장.

## 스택

Python · FastAPI · LangGraph · Gemma 4 · BGE-M3 · Neo4j AuraDB · PostgreSQL + pgvector · Modal GPU · GCP(Cloud Run/SQL) · Next.js
