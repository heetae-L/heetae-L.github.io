import type { ProjectData } from "../../types";

export const ktoHyugashopQualityReporting: ProjectData = {
  slug: "kto-hyugashop-quality-reporting",
  categories: ["development", "operations"],
  icon: "cart",
  title: "한국관광공사(KTO) 휴가샵 Web/App 커머스 서비스 개발",
  summary:
    "한국관광공사(KTO) 휴가샵 Web/App 커머스 서비스에서 사용자·관리자·고객사 기능과 상품·주문·포인트·통계 데이터 흐름을 연결하는 기능 프로젝트 개발",
  meta: {
    sourceType: "Professional Work",
    company: "SK M&Service",
    service: "한국관광공사(KTO) 휴가샵",
    period: "2024 - Present",
    role: "Software Engineer",
    scope: ["Web/App", "Admin", "Oracle", "Batch", "Statistics"],
    relatedExperience: "skmns"
  },
  tags: ["Java", "Spring Boot", "Oracle", "Batch", "Redis"],
  featured: true,
  homeOrder: 4,
  overview:
    "한국관광공사(KTO) 휴가샵은 근로자 휴가지원사업 참여 근로자가 여행 적립 포인트로 국내 여행·숙박·레저 상품을 구매하는 휴가 복지 Web/App 커머스 서비스.\n\n사용자 웹·앱의 상품 탐색, 주문/포인트 사용, 검색/노출 흐름과 관리자 화면, 고객사 포털, API, DB/Batch, 통계/리포트 흐름이 함께 연결되는 구조.\n\n2024년 4월부터 휴가샵 서비스 담당 축으로 전환되어 사용자 기능, 운영 기능, 고객사 기능 개발과 화면/DB/Batch 반영 흐름 개선을 수행.",
  problem:
    "휴가샵 기능 변경은 단일 화면 작업으로 끝나지 않고 사용자 화면, 관리자 화면, 고객사 포털, API, DB/Batch, 검색/통계 데이터가 함께 움직이는 구조.\n\n여행 적립 포인트는 근로자 20만원, 기업 10만원, 정부 10만원이 합산된 40만원 구조이며 내부 데이터에서는 재원별 포인트 기준이 분리된다. 주문, 사용, 취소, 통계 집계 시 단순 금액 합산이 아니라 포인트 재원 기준과 서비스 화면 반영 기준을 함께 맞춰야 하는 서비스.",
  role: [
    "한국관광공사(KTO) 휴가샵 Web/App 커머스 서비스 개발/운영 담당",
    "Web/App, 관리자 화면, 고객사 포털, API, DB/Batch 흐름을 함께 다루며 기능 요구사항 정리 및 개발 범위 조율",
    "상품/주문/포인트/통계 데이터가 화면과 운영 기능에 반영되는 흐름을 연결해 서비스 기능 개발",
    "부적합 상품 관리, 메시지 대상 업로드, 국회요구자료 통계, 일일 리포트 등 운영 기능 프로젝트 개발",
    "KTO/휴가샵 담당 업무를 유지하면서 여행·레저 제휴 연동과 상품/검색 기준 정비까지 책임 범위 확장"
  ],
  contributions: [
    "근로자·기업·정부 재원별 포인트 구조를 주문/포인트 사용내역과 통계 기준에 반영해 포인트 흐름을 구분 가능한 형태로 정리",
    "부적합 상품 관리 기능에서 키워드 기준 후보 상품 확인, 운영자 판정, 노출 제외 흐름을 연결해 상품 관리와 검색 노출 기준 구현",
    "대표상품/중복상품/검색 노출 기준 정비를 휴가샵 상품·검색 데이터 보강 사례로 정리",
    "Redis 기반 Spring Session과 Spring Cache를 사용하는 서비스에서 로그인 세션과 숙소 검색·외부 API 응답 캐시 흐름을 분석하고 관련 기능 개발·운영",
    "고객사 참여자 선등록, DB 프로시저 기반 회원 생성, KCB 본인인증, 회원정보 활성화로 이어지는 가입 흐름을 코드·SQL 기준으로 분석",
    "국회요구자료 통계 산출 기능에서 주문·포인트 원천 데이터를 일자, 상품 유형, 지역, 포인트 그룹 기준으로 재구성하고 조회/엑셀 출력 흐름 구현",
    "일일 리포트 원천 데이터 적재와 통계 화면 기준을 확장해 참여 기업/근로자, 구매/취소, 잔여 포인트 구간 확인 흐름 보강",
    "메시지 발송 대상 엑셀 업로드 기능으로 반복 대량 처리 업무를 관리자 기능으로 전환"
  ],
  troubleshooting: [
    "국회요구자료 통계 기능에서 주문·포인트 거래 원천, 참여자 기준, 상품 유형, 지역, 포인트 그룹 기준을 함께 맞춰야 하는 통계 산출 흐름 정리",
    "근로자·기업·정부 재원별 포인트가 섞인 거래 데이터를 단순 합산하지 않고 통계 조회와 엑셀 산출 기준에 맞게 재구성",
    "일일 리포트 원천 데이터, 주문/포인트 사용내역, 공공 통계 화면이 같은 기준으로 해석되도록 데이터 확인 지점 분리"
  ],
  results: [
    "한국관광공사(KTO) 휴가샵 Web/App 커머스 서비스에서 사용자 기능, 관리자 기능, 포인트/통계 데이터 흐름을 연결하는 기능 프로젝트 구현",
    "국회요구자료 통계, 주문/포인트 사용내역, 일일 리포트 등 공공 통계·리포트 산출 흐름을 조회/엑셀 출력 가능한 기능으로 구현",
    "반복 대량 처리 업무를 엑셀 업로드 기능으로 전환하고, 부적합 상품 관리와 상품/검색 기준 정비를 운영 기능으로 구현",
    "KTO/휴가샵 서비스 담당 범위 위에서 여행·레저 제휴 연동까지 확장하며 복지·여행 커머스 백엔드 책임 범위 확대"
  ],
  sectionLabels: {
    problem: "Service Context",
    contributions: "Representative Feature Projects",
    troubleshooting: "Deep Dive"
  },
  techStack: [
    "Java",
    "Spring Boot",
    "Oracle",
    "MyBatis",
    "SQL",
    "Batch",
    "Redis",
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
  architectureNote: "휴가샵 Web/App 서비스와 사용자, 운영, 고객사, API, DB, Batch 데이터 흐름을 연결하는 구조"
};
