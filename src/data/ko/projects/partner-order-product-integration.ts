import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  category: "Integration",
  icon: "cart",
  title: "여행·레저 제휴 연동 플랫폼",
  summary:
    "다수의 여행·숙박·레저 제휴사를 주문·상품·검색 흐름에 연결하고, 복수 제휴사의 주문 데이터와 대규모 상품 pool을 API·배치·DB·검색 노출 기준으로 검증한 백엔드 연동 플랫폼 프로젝트",
  tags: ["Java", "Spring", "Oracle", "Batch"],
  featured: true,
  homeOrder: 1,
  overview:
    "복지·여행 커머스 플랫폼에서 외부 제휴사의 주문·취소 데이터, 상품 정보, 검색 노출, 외부 이동 흐름을 내부 API·배치·DB·검색 구조와 연결.\n\n복수 제휴사의 주문·상품 데이터가 실시간 API와 정기 배치를 통해 반복 처리되는 환경에서 API 응답, 배치 보정, DB 저장, 예외 데이터 재처리, 상품 정규화, 검색 노출 기준을 함께 검증해 서비스 데이터 신뢰성을 강화.\n\n핵심은 단건 기능 개발이 아니라 신규 제휴사를 빠르게 온보딩하고, 제휴사별로 다른 연동 조건을 공통 검증 흐름으로 흡수한 백엔드 연동 플랫폼화.",
  problem:
    "제휴사마다 API 응답 형식, 파일 전송 방식, 상품 유형, 검색 조건, 접속 조건이 달라 단순 연동 구현만으로는 일관된 서비스 품질 확보가 어려운 구조.\n\n데이터가 수신되어도 실제 주문·상품·검색 노출까지 일관되게 반영되는지 보장해야 했고, API·배치·DB·검색 흐름을 end-to-end로 검증하는 기준이 필요.",
  role: [
    "한국관광공사(KTO) 휴가샵 서비스 개발을 병행하면서 여행·레저 제휴 연동 영역까지 책임 범위 확장",
    "2026년부터 신규 제휴 연동 온보딩을 설계·주도하고, 연동 품질 기준과 대외 공유 기준 수립을 담당",
    "사업팀·외부 제휴사와의 기술 커뮤니케이션을 표준화해 요청·응답, 데이터 상태, 접속 조건을 일관된 형식으로 전달"
  ],
  contributions: [
    "실시간 주문 API와 일배치가 공존하는 구조에서 주문·취소·보정 데이터의 정합성 검증 기준을 설계",
    "복수 제휴사의 주문·상품 데이터 흐름에서 API 응답, 배치 보정, DB 저장, 예외 데이터 재처리 기준을 수립",
    "대규모 상품 pool의 파일 수신부터 적재·정규화·후처리·검색 노출까지 이어지는 end-to-end 데이터 검증 흐름을 표준 절차로 정립",
    "검색 검증 호출과 사용자 외부 이동 경로를 분리해 검색 품질과 제휴사 이동 품질을 독립적으로 검증 가능한 구조 마련",
    "상품 데이터가 정상 적재된 이후에도 검색 결과가 중복·상이 노출되는 문제를 상품 수집, 데이터 정규화, 검색 레코드 생성, 화면 노출 단계로 분리해 분석 기준 확립",
    "신규 제휴 온보딩에 필요한 점검 항목을 재사용 가능한 체크리스트와 연동 검증 가이드로 표준화"
  ],
  troubleshooting: [
    "파일 수신 여부에 머물지 않고 데이터 적재, 정규화, 후처리, 검색 레코드 생성, 서비스 노출까지 이어지는 검증 체계를 구성",
    "검색 결과 중복·상이 노출 문제를 상품 수집, 데이터 정규화, 검색 레코드 생성, 화면 노출 단계로 분리해 원인 분석 기준 정립",
    "수집 방향과 검증 방향을 분리해 제휴사 연동 불일치 원인을 데이터, API 응답, 접속 조건 계층으로 분류",
    "반복 검증 사례와 절차를 Markdown 지식 베이스로 구조화하고, AI-DLC에서 제안된 원인 후보를 코드·쿼리·테스트로 검증"
  ],
  results: [
    "제휴사별 개별 대응을 공통 검증 체계로 전환해 신규 연동 준비 속도와 안정성 개선",
    "주문·상품·검색 데이터 흐름의 관측 지점을 명확히 해 데이터 불일치 발생 시 원인 추적 범위 축소",
    "실시간 API와 정기 배치를 통해 반복 유입되는 대규모 주문·상품 데이터에 대해 API·배치·DB·검색 노출 기준을 일관되게 관리하는 검증 체계 확보",
    "사업팀·제휴사와 공유 가능한 기술 기준을 정리해 연동 협업 품질 강화"
  ],
  devops: [
    "환경별 연동 설정을 분리해 테스트 안정성과 서비스 리스크 관리 기준 정립",
    "제휴사 호출 방향, 데이터 검증 기준, 접속 조건을 분리해 연동 품질 판단 기준 명확화",
    "배치 실행, 예외 이력, DB 저장, 검색 레코드 생성 여부를 서비스 데이터 검증 체크포인트로 표준화"
  ],
  sectionLabels: {
    devops: "Integration Reliability"
  },
  techStack: ["Java", "Spring", "Oracle", "MyBatis", "REST API", "Batch", "SQL", "Data Pipeline"],
  architecture: [
    "External Partner Systems",
    "Order API / Product Files",
    "API & Batch Ingestion",
    "Product Normalization / Oracle Flow",
    "Search Records / Validation API",
    "Service Exposure / External Redirect"
  ],
  architectureNote: "API / Batch / DB / Search Reliability Checks"
};
