import type { ProjectData } from "../../types";

export const ktoHyugashopQualityReporting: ProjectData = {
  slug: "kto-hyugashop-quality-reporting",
  category: "Commerce",
  icon: "cart",
  title: "한국관광공사(KTO) 휴가샵 Web/App 커머스 서비스 개발",
  summary:
    "한국관광공사(KTO) 휴가샵 Web/App 커머스 서비스에서 사용자·관리자·고객사 기능과 상품·주문·포인트·통계 데이터 흐름을 연결하는 기능 프로젝트 설계·구현",
  tags: ["Java", "Spring", "Oracle", "Batch"],
  featured: true,
  homeOrder: 4,
  overview:
    "한국관광공사(KTO) 휴가샵은 근로자 휴가지원사업 참여 근로자가 여행 적립 포인트로 국내 여행·숙박·레저 상품을 구매하는 휴가 복지 Web/App Commerce Service.\n\n휴가샵 Web/App의 상품 탐색, 주문/포인트 사용, 검색/노출 흐름과 admin/customer portal, API, DB/batch, 통계/리포트 흐름이 함께 연결되는 구조.\n\n2024년 4월부터 휴가샵 서비스의 사용자 채널과 운영 채널을 함께 담당하며 기능 개발, 데이터 기준 정비, 화면/batch 연계 흐름 개선을 수행.",
  problem:
    "휴가샵 서비스는 단일 화면 변경으로 끝나지 않고 Web/App, admin, customer portal, API, DB/batch, 검색/통계 데이터가 함께 움직이는 구조.\n\n여행 적립 포인트는 근로자 20만원, 기업 10만원, 정부 10만원이 합산된 40만원 구조이고 내부 데이터에서는 재원별 포인트 기준이 나뉜다. 주문, 사용, 취소, 통계 집계 시 단순 금액 합산보다 포인트 기준과 서비스 화면 반영 기준을 함께 확인해야 하는 도메인.",
  role: [
    "한국관광공사(KTO) 휴가샵 Web/App Commerce Service 개발/운영 담당",
    "Web/App, admin screen, customer portal, API, DB/batch flow를 함께 확인하며 기능 요구사항과 데이터 기준 설계",
    "상품/주문/포인트/통계 데이터가 화면과 운영 기능에 반영되는 흐름을 확인하고 서비스 기능 개발",
    "여행/레저 제휴 연동과 별개로 KTO/휴가샵 서비스 담당 업무를 유지하며 상품/검색 기준 정비까지 수행"
  ],
  contributions: [
    "부적합 상품 관리 기능에서 키워드 기준 후보 상품 확인, 운영자 판정, 노출 제외 흐름을 연결해 상품 관리와 검색 노출 기준을 구현",
    "메시지 발송 대상 엑셀 업로드 기능으로 관리자 대량 처리와 반복 운영 작업을 시스템화",
    "국회 요구자료 통계 기능에서 주문·포인트 거래 원천을 일자·상품유형·지역·포인트 그룹 기준으로 재구성하고 조회/엑셀까지 이어지는 공공기관 보고용 통계 흐름 구현",
    "일일 리포트 원천 데이터 적재와 통계 화면 기준을 확장해 참여 기업/근로자, 구매/취소, 잔여 포인트 구간 확인 흐름 개선",
    "근로자/기업/정부 재원별 포인트 구분 구조를 고려해 주문/포인트 사용내역과 통계 기준 확인",
    "대표상품/중복상품/검색 노출 기준 정비를 통해 휴가샵 상품 데이터와 서비스 노출 흐름 개선"
  ],
  troubleshooting: [
    "사용자 웹·앱의 상품 탐색, 주문, 포인트 사용 흐름과 운영자·고객사 화면의 관리 흐름을 함께 담당",
    "상품, 주문, 포인트, 회원, 통계 데이터가 API, Oracle DB, 배치, 리포트 화면으로 이어지는 흐름을 확인",
    "기능 변경 시 사용자 화면, 관리자 화면, 고객사 화면, 통계 기준, 검색/노출 기준에 미치는 영향을 함께 검토"
  ],
  results: [
    "공공기관 기반 휴가 복지 commerce의 Web/App과 operations/customer channel을 연결하는 서비스 기능 개발",
    "상품, 주문, 포인트, 통계 데이터가 화면, 관리자 기능, 배치 흐름에 일관되게 반영되도록 서비스 데이터 기준 강화",
    "메시지 대상 업로드, 국회 요구자료 통계, 일일 리포트, 상품/검색 기준 정비를 실제 운영 기능으로 구현",
    "KTO/휴가샵 서비스 담당 범위 위에서 여행·레저 제휴 연동까지 확장하며 복지·여행 커머스 백엔드 책임 범위 확대"
  ],
  sectionLabels: {
    problem: "Service Context",
    contributions: "Representative Feature Projects",
    troubleshooting: "Service Ownership"
  },
  techStack: [
    "Java",
    "Spring",
    "Oracle",
    "MyBatis",
    "SQL",
    "Batch",
    "Admin / Customer Portal",
    "Report / Source Data",
    "Point Funding Logic"
  ],
  architecture: [
    "한국관광공사(KTO) 휴가샵 Web/App Service"
  ],
  architectureGroups: [
    {
      title: "User Channel",
      items: ["Product Search / Exposure", "Orders / Cancellations", "Point Use / Balance"]
    },
    {
      title: "Operations Channel",
      items: ["Product / Exposure Management", "Operator Bulk Processing", "Message Target Management"]
    },
    {
      title: "Customer / Reporting Channel",
      items: ["Customer Admin", "Order / Point Views", "Statistics / Public-sector Reporting"]
    },
    {
      title: "Service Integration Layer",
      items: ["Screen APIs", "Search API Calls", "Admin / Customer Feature Integration"]
    },
    {
      title: "Data Processing Foundation",
      items: ["Oracle DB", "Batch / Raw Data", "Order / Point / Statistics Criteria"]
    }
  ],
  architectureVariant: "hub",
  architectureCoreLabel: "Core Service",
  architectureNote: "휴가샵 Web/App Service connecting user, operations, customer, API, DB, and batch data criteria"
};
