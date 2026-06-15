---
title: "LG 헬로비전 — 멀티모달 VOD 추천·광고 시스템"
summary: "ALS 협업필터링 + CLIP/SBERT 멀티모달 유사도로 하이브리드 VOD를 추천하고, YOLO·CLIP·STT·OCR 4종 앙상블로 영상 속 음식/관광지를 인식해 맥락 광고를 노출하는 시스템."
date: "2026-04"
github: "https://github.com/dhwang0803-glitch/dxshcool"
tags: ["Python", "FastAPI", "Next.js", "CLIP", "YOLO", "ALS"]
attachments:
  - label: "최종 발표자료 (PDF)"
    file: "lg-hellovision-vod.pdf"
    kind: "pdf"
---

## 역할

**조장(PM) · 기획 · 풀스택** (5인, 2026.02~04) — 프로젝트 기획과 PM, 추천/광고 파이프라인 및 프론트·백엔드 개발. 데이터 규모: VOD 16.9만 · 사용자 24.2만 · 시청이력 399만 건.

## 문제

LG 헬로비전 VOD 추천 만족도가 업계 평균·IPTV 대비 낮았다. 시청 맥락에 맞는 추천과 지역 콘텐츠 연계로 만족도와 광고 효율을 동시에 끌어올린다.

## 핵심 기술

- **하이브리드 VOD 추천 (3-Layer)**: ALS 행렬분해(implicit, factors=128) CF + CLIP(512D)·SBERT(384D) 멀티모달 벡터 유사도 + 태그 리랭킹.
  - 앙상블 가중치 α=0.4 최적화 → **Genre Precision@10 91.2%** (α=0.3 대비 +40%p).
  - 콜드스타트 3단계(인기 기반 → 연령대 보충 → 개인화)와 K-Means 5개 세그먼트 페르소나 기반 LLM 추천 문구 생성.
- **영상 인식 맥락 광고**: YOLO11s(한식 71종 파인튜닝, mAP@0.5 0.990) · CLIP(115 쿼리 제로샷) · Whisper STT · EasyOCR 4종 멀티모달 앙상블.
  - 멀티시그널 스코어링(Score = YOLO+STT+CLIP+OCR, ≥3 & 신호 2종↑ 트리거) → 음식은 제철장터 채널 연계, 관광지는 지역 축제 GIF 매칭.
- **AI Native 개발**: Figma/Notion MCP 연동으로 자연어 UI 디자인, CLAUDE.md + TDD 에이전트, Playwright E2E 테스트 자동화.

## 스택

Python · FastAPI · PostgreSQL + pgvector · Next.js · TypeScript · Tailwind CSS · YOLO11s · CLIP · Whisper · EasyOCR · ALS(implicit) · Gemma 2 · GCP(Cloud Run)
