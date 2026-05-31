import type { ProjectData } from "../../types";

export const ktoHyugashopQualityReporting: ProjectData = {
  slug: "kto-hyugashop-quality-reporting",
  category: "Operations",
  icon: "chart",
  title: "한국관광공사(KTO) 휴가샵 서비스 운영 개발",
  summary: "한국관광공사(KTO) 휴가샵과 Benepia 운영 과정에서 데이터 정합성, 리포트, 관리자 기능, ISMS 대응을 함께 다룬 서비스 품질 개선 경험",
  tags: ["Java", "Oracle", "Report", "Operations"],
  featured: true,
  homeOrder: 4,
  overview: "한국관광공사(KTO) 휴가샵 관련 서비스 운영 과정에서 웹/모바일/관리자 화면, RawData, 리포트, 고객 응대 데이터가 서로 맞물리는 흐름을 정리.\n\n상품 품질, 통계, 리포트, 운영 데이터 기준을 함께 다룬 서비스 품질 개선 경험",
  role: [
    "한국관광공사(KTO) 휴가샵과 Benepia 서비스의 기능 개선 및 운영 이슈 대응",
    "관리자 화면, 데이터 조회, 리포트 생성 흐름 확인",
    "ISMS 대응 과정에서 필요한 점검 자료와 시스템 영향 범위 확인"
  ],
  contributions: [
    "정산·리포트·고객 응대에 필요한 데이터 기준 확인",
    "운영 이슈를 화면, DB, 배치, 외부 연동 관점으로 분리해 원인 추적",
    "반복 요청을 줄이기 위한 데이터 확인 절차와 운영 문서 정리"
  ],
  architecture: ["Service UI", "Admin", "Oracle DB", "Report", "Operation Review"]
};
