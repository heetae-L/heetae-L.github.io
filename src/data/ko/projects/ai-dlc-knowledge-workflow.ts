import type { ProjectData } from "../../types";

export const aiDlcKnowledgeWorkflow: ProjectData = {
  slug: "ai-dlc-knowledge-workflow",
  category: "AI",
  icon: "brain",
  title: "AI-DLC: AI-Assisted Engineering Workflow",
  summary: "업무 맥락, 이슈 원인, 처리 기준을 Markdown 기반 지식으로 정리한 AI-assisted 분석 흐름 개인 프로젝트",
  tags: ["Markdown", "AI", "Knowledge Base", "Workflow"],
  featured: true,
  homeOrder: 3,
  overview: "회사에서 경험한 복잡한 업무 흐름을 그대로 공개하지 않고, 이슈 분석 방식과 의사결정 기준을 재사용 가능한 개인 지식 체계로 정리",
  role: [
    "업무 단위별 Markdown 문서 구조와 TODO 관리 기준 설계",
    "AI가 읽기 쉬운 형태로 문제 배경, 원인 후보, 확인 결과를 분리",
    "공개 포트폴리오에 옮길 수 있는 표현과 내부 정보로 남겨야 할 내용을 구분"
  ],
  contributions: [
    "흩어진 경험을 프로젝트 단위의 case study 후보로 정리",
    "AI 협업 시 같은 내용을 반복 설명하지 않도록 컨텍스트 허브 구성",
    "기술 경험을 과장하지 않고 채용자가 이해하기 쉬운 언어로 재구성하는 기준 마련"
  ],
  architecture: ["Work Notes", "Markdown Hub", "AI Review", "Human Editing", "Portfolio Content"]
};
