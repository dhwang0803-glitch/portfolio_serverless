---
title: "와트이쓔 — NILM 기반 실시간 에너지 진단 AI 에이전트"
summary: "집 전체 전력을 22종 가전별 사용량으로 분해(NILM)하고, 멀티에이전트 AI가 절감 행동과 캐시백 미션을 제안하는 자율 에너지 진단 시스템. 2026 기후에너지환경부 AX 아이디어 경진대회 출품작."
date: "2026-06"
tags: ["NILM", "PyTorch", "FastAPI", "LangGraph", "Neo4j"]
attachments:
  - label: "발표자료 (PPTX)"
    file: "watt-issue.pptx"
    kind: "pptx"
---

## 역할

**DL · 백엔드 (3인, 2026.05~06)** · 기후에너지환경부 AX 경진대회 출품 — NILM 모델 학습·추론 파이프라인, FastAPI 백엔드, DB 파이프라인(단기/장기 메모리 기반 사용 패턴 누적) 담당.

## 문제

전기요금은 보이지만 어떤 가전을 줄여야 할지는 보이지 않는다. 분전반 단일 신호만으로는 원인 가전을 알 수 없고, 한전 캐시백도 "무엇을 줄여야 받는지" 행동 가이드가 없다.

## 핵심 기술

- **NILM 전력 분해**: 분전반 30Hz aggregate active_power를 22종 가전별 시계열로 분해하는 딥러닝 앙상블. 가전군별 specialized backbone + 후처리(OFF suppression, hysteresis, per-house calibration).
  - 성과: 누적 사용량 오차(Aggregate SAE) **17.6% → 1.35%**, 주요 가전 사용구간 탐지(Top-7 event F1) **0.81 → 0.98** (Joint MAE 14.76W).
- **상태 모니터링 엔진**: 가전 모드 구조에 따라 W-range / TDA / Cycle HMM / PWM HMM을 선택 적용해 "어떤 상태로 동작 중인가"를 의미 단위로 분류. (세탁기 전환 3215회 → 2회로 정리, 서모스탯 duty cycle 5단계 분리.)
- **단기/장기 메모리**: 시간 단위 raw 이벤트 → 자정 압축 → EWM(α=0.2) 가구별 기준값 누적으로 평소 대비 과다 사용 감지.
- **멀티에이전트 추천 (Neo4j KG + LLM)**: Signal Layer(결정적) + Diagnosis/Mission/Evaluator 에이전트. Anthropic "Building effective agents" 4패턴(Prompt Chaining·Routing·Parallelization·Evaluator-Optimizer) 적용.
  - 성과: 추천 품질 **KG+LLM 94.0%** (Prompt only 64.3% / Prompt+LLM 79.3%).

## 스택

Python · PyTorch (CNN/TDA Encoder · HMM · GMM) · FastAPI · TimescaleDB(PostgreSQL) · React · LangGraph · Neo4j · Docker · GCP
