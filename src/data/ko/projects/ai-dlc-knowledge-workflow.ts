import type { ProjectData } from "../../types";

export const aiDlcKnowledgeWorkflow: ProjectData = {
  "slug": "ai-dlc-knowledge-workflow",
  "categories": [
    "ai"
  ],
  "icon": "brain",
  "featured": true,
  "homeOrder": 3,
  "title": "AI-DLC & AI Harness: AI 활용 업무 환경 구성",
  "summary": "업무 지식과 검증 기준을 구조화해, AI를 분석·문서화·지식 재사용에 일관되게 활용하는 환경을 구성했습니다.",
  "meta": {
    "sourceType": "Personal Workflow",
    "service": "AI-DLC / AI Harness",
    "role": "Workflow Owner",
    "scope": [
      "Knowledge Design",
      "Codex",
      "Claude Code",
      "Human-in-the-loop"
    ]
  },
  "tags": [
    "AI-DLC",
    "AI Harness",
    "Knowledge Design",
    "Human-in-the-loop"
  ],
  "overview": "업무 분석부터 검증, 커뮤니케이션, 지식 업데이트까지 AI를 활용하는 개인 업무 흐름을 구성했습니다.\n\nCodex와 Claude Code가 공통 업무 맥락과 판단 기준을 참고하도록 지식을 정리하고, 도구와 세션이 바뀌어도 작업을 이어갈 수 있게 개선했습니다.\n\nAI가 제안한 내용은 실제 근거로 확인하고, 검증된 판단 기준을 다음 업무에 재사용하는 방식으로 운영합니다.",
  "problem": "복잡한 업무는 여러 시스템과 판단 기준이 연결돼 있어, 도구나 세션이 바뀔 때 배경을 다시 설명하고 이전 판단을 복원해야 했습니다. 반복해서 사용할 업무 지식과 현재 상태, 확인 기준을 일관되게 관리할 필요가 있었습니다.",
  "role": [
    "반복 업무에서 필요한 맥락과 작업 규칙을 정의하고 AI 활용 흐름을 설계·개선",
    "AI가 공통 업무 지식과 판단 기준을 참고하도록 지식 구조와 관리 원칙 구성",
    "AI의 제안을 실제 근거로 확인하고, 재사용할 지식과 후속 행동 결정"
  ],
  "contributions": [
    "분석에 필요한 업무 맥락과 확인 기준을 정리해 AI가 참고할 범위 구성",
    "현재 상태와 확인된 사실, 추가 확인 사항을 구분해 다음 작업으로 연결",
    "검증된 판단과 오류 사례를 공통 지식에 반영해 반복 업무에 재사용"
  ],
  "devops": [
    "도구와 세션이 달라져도 공통 업무 지식을 참고하도록 구성",
    "업무 지식, 작업 상태, 검증 기준의 역할을 정리해 관리",
    "반복 사용 중 발견한 문제를 바탕으로 작업 규칙과 확인 절차 개선"
  ],
  "troubleshooting": [
    "AI의 원인 후보를 실제 근거와 대조해 판단",
    "확인되지 않은 내용은 추가 검증 항목으로 남기고 확인한 범위를 명시",
    "틀린 판단의 이유와 확인 기준을 기록해 다음 분석에 참고"
  ],
  "results": [
    "도구와 세션이 바뀌어도 업무 맥락을 이어갈 수 있는 공통 지식과 작업 기준 구성",
    "확인된 판단 기준을 다음 분석과 반복 업무에 재사용할 수 있도록 정리",
    "분석·검증·문서화·지식 업데이트를 연결하는 업무 흐름 마련"
  ],
  "sectionLabels": {
    "devops": "AI Harness 구성",
    "troubleshooting": "판단과 검증"
  },
  "techStack": [
    "Codex",
    "Claude Code",
    "Markdown",
    "AI Harness",
    "Knowledge Design",
    "Human-in-the-loop"
  ],
  "architecture": [
    "업무 맥락",
    "AI 분석 지원",
    "근거 확인",
    "결과 정리",
    "지식 재사용"
  ],
  "architectureNote": "Context → Analyze → Verify → Communicate → Learn"
};
