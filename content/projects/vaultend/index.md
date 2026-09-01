---
title: "Vaultend — Obsidian AI 자동화 플러그인 (오픈소스)"
summary: "노트가 쌓일수록 태그는 흩어지고 링크는 끊겨 검색이 안 되는 상태가 되는 문제에서 출발한 개인지식관리(PKM) 도구용 플러그인. AI가 노트를 분석해 태그·링크를 제안하고, 중복 태그를 병합하며, 끊긴 링크·고아 노트를 탐지한다."
date: "2026-07"
tags: ["TypeScript", "Obsidian Plugin", "AI", "Open Source"]
github: "https://github.com/dhwang0803-glitch/Vaultend"
---

## 역할

**개인 개발 · 기획/설계/구현 전 과정 (1인, 2026.07~현재)** — 문제 정의부터 아키텍처 설계, 멀티 프로바이더 AI 통합, 테스트, 오픈소스 배포까지 전 과정을 단독 수행.

## 문제

노트가 쌓일수록 태그는 흩어지고, 링크는 끊기고, 검색이 안 되는 상태가 된다. 수작업 정리는 노트가 수백 개를 넘으면 사실상 불가능하다. 자동화해야 할 업무를 먼저 겪고 그것을 다루는 도구를 만들고 싶었다.

## 핵심 기술

### 노트 정리 — AI 태그·링크 자동 제안

기존 태그와의 신뢰도 기반 선택(≥0.7), 새 태그는 기존과 의미적 중복 없이 생성. 제안 링크는 실제 볼트 노트 존재 여부를 검증해 환각 링크를 차단한다.

![노트 정리 시연](/projects/vaultend/assets/organize-note.gif)

### 태그 정리 — 2단계 중복 감지·병합

Stage 1: 문자열 정규화(대소문자, 하이픈, 복수형). Stage 2: AI 임베딩 유사도로 언어 간 중복 감지. 병합 시 영향받는 모든 노트의 프론트매터를 자동 업데이트한다.

![태그 정리 시연](/projects/vaultend/assets/organize-tags.gif)

### 볼트 유지보수 — AI 불필요, 로컬 분석

끊어진 링크·빈 노트(Critical), 고아 노트·중복(Warning), 태그 누락(Info)을 심각도별로 분류. 배치 아카이브·삭제·제외 지원, 삭제된 노트는 콘텐츠 백업 후 원클릭 복원.

![볼트 유지보수 시연](/projects/vaultend/assets/run-maintenance.gif)

### 설계 원칙

- **적용 전 사용자 검토, 전 작업 Undo**: 민감정보는 전송 전 필터링 — AI 제안 링크는 실제 볼트 존재 여부를 검증해 환각 링크를 차단.
- **멀티 프로바이더**: OpenAI·Gemini·로컬 Ollama·OpenAI 호환 커스텀 엔드포인트 지원.
- **비용 투명성**: 모든 AI 호출에서 토큰 사용량·예상 비용 표시.

## 스택

TypeScript · Obsidian Plugin API · Vitest · esbuild · OpenAI / Gemini / Ollama (멀티 프로바이더)
