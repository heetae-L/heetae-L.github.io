import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  category: "Integration",
  icon: "cart",
  title: "Travel & Leisure Partner Integration",
  summary: "여행·숙박·레저 제휴사의 주문·상품·검색 연동 흐름을 API, Batch, DB, Search 관점으로 연결하고 운영 이슈를 원인 단위로 분리한 대표 프로젝트입니다.",
  tags: ["Java", "Spring", "Oracle", "Batch"],
  featured: true,
  homeOrder: 1,
  overview:
    "복지·여행 플랫폼의 여행·레저 제휴 연동 영역에서 주문수집 API, 상품수집 배치, 숙박상품 매핑, 검색 노출, 외부 이동, IP whitelist 흐름을 함께 다뤘습니다.",
  role: [
    "2025년 한국관광공사(KTO) 휴가샵 업무와 별도로 병행하며 제휴 연동 영역 확장",
    "2026년부터 여행/레저 제휴 연동 메인 담당으로 신규 연동 온보딩과 운영 이슈 대응 주도",
    "사업팀과 외부 제휴사 커뮤니케이션에 필요한 기술 확인과 재현 정보 정리"
  ],
  contributions: [
    "실시간 주문 API와 주문 일배치의 정합성 확인 기준 정리",
    "상품수집 이후 원천 적재, 상품 반영, 후처리, 검색 데이터 생성 흐름 분리",
    "숙박상품 매핑이 정상이어도 검색 결과가 다르게 노출되는 문제를 데이터 생성과 화면 호출 흐름으로 추적",
    "운영/개발 IP whitelist 분리와 네트워크 조건 확인으로 연동 리스크 완화"
  ],
  architecture: ["Partner API", "Order Collector", "Product Batch", "Oracle DB", "Search Exposure"]
};
