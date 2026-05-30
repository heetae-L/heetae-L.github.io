import type { ExperienceData } from "../types";

export const experience: ExperienceData = {
  eyebrow: "Career",
  title: "Work Experience",
  description:
    "실제 운영 환경에서 백엔드 시스템을 개발하고 유지보수한 경험을 중심으로 정리합니다.",
  items: [
    {
      period: "2021.02 - Present",
      company: "Example Company",
      role: "Software Engineer",
      featured: true,
      homeOrder: 1,
      bullets: [
        "주문/상품 데이터 연동 API 설계 및 운영",
        "Oracle 기반 대용량 데이터 처리 로직 개선",
        "장애 원인 분석과 재발 방지를 위한 운영 도구 개선",
        "외부 서비스 연동과 배치 처리 안정화"
      ]
    }
  ]
};
