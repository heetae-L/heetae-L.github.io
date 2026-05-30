import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  category: "Integration",
  icon: "cart",
  title: "Partner Order/Product Integration",
  summary: "외부 파트너 주문/상품 데이터를 내부 시스템과 안정적으로 연동한 백엔드 프로젝트입니다.",
  tags: ["Java", "Spring", "Oracle", "MyBatis"],
  featured: true,
  homeOrder: 1,
  overview:
    "외부 파트너의 주문 및 상품 데이터를 수집하고 내부 운영 시스템과 동기화하는 API와 배치 흐름을 설계했습니다.",
  role: [
    "연동 API 요청/응답 모델 설계",
    "배치 처리 흐름과 예외 처리 정책 정리",
    "운영 중 발생한 데이터 불일치 원인 분석"
  ],
  contributions: [
    "중복 처리와 실패 재시도 기준을 명확하게 분리",
    "운영자가 추적 가능한 로그와 상태 값을 추가",
    "데이터 정합성 검증 쿼리와 점검 흐름 개선"
  ],
  architecture: ["Partner API", "Collector API", "Queue", "Batch Processor", "Oracle DB"]
};
