import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  categories: ["development", "integration", "operations"],
  icon: "cart",
  title: "여행·레저 제휴 연동 플랫폼",
  summary:
    "외부 여행·숙박·레저 제휴사의 주문·상품 연동을 개발하고, 트랜잭션 분리와 비정상 응답 격리로 API·배치 처리의 안정성을 개선한 백엔드 프로젝트",
  meta: {
    sourceType: "Professional Work",
    company: "SK M&Service",
    service: "여행·레저 제휴 연동",
    period: "2025 - Present",
    role: "Software Engineer",
    scope: ["Partner API", "Batch", "Oracle", "Search"],
    relatedExperience: "skmns"
  },
  tags: ["Java", "Spring Boot", "Oracle", "Batch", "Java Concurrency"],
  featured: true,
  homeOrder: 1,
  overview:
    "복지·여행 커머스 플랫폼에서 외부 여행·숙박·레저 제휴사의 주문·취소 수집 API, 상품 수집 배치, 통합검색과 외부 이동 흐름을 연결한 백엔드 연동 프로젝트.\n\n실시간 주문 수집과 누락 보정 배치가 함께 동작하고, 상품은 적재·정규화·검색 데이터 생성을 거쳐 서비스에 반영되는 환경. 제휴사마다 다른 응답 형식과 상품 조건을 내부 처리 흐름에 맞춰 연동하고, DB 반영과 실제 검색 결과까지 확인.\n\n신규 제휴 연동 개발과 기존 처리 구조의 안정성 개선을 함께 담당. 트랜잭션 경계 분리, 비정상 응답 격리, 검색 데이터 추적을 통해 외부 연동의 예외가 핵심 서비스 처리에 미치는 영향을 줄이는 데 집중.",
  problem:
    "제휴사마다 API 응답 형식, 상품 데이터와 접속 조건이 달라 각 연동의 예외를 고려한 처리가 필요.\n\n수집 단계의 성공만으로는 주문 저장과 상품 검색 노출까지 정상 반영됐는지 판단하기 어려워, API·배치·DB 처리 결과를 연결해 확인할 기준이 필요.",
  role: [
    "2025년 KTO/휴가샵 서비스 개발과 병행하며 제휴 연동 담당 범위를 넓혔고, 2026년부터 여행·레저 제휴 연동을 전담",
    "신규 연동의 요구사항 확인부터 API·배치 개발, 오픈 전 검증과 운영 오류 분석까지 주도",
    "사업팀·외부 제휴사와 요청·응답 규격, 데이터 반영 결과와 접속 조건을 조율하고, 확인한 코드·데이터를 근거로 기술적인 판단과 대응 방향을 제시"
  ],
  contributions: [
    "실시간 주문 수집 API와 누락 보정 배치의 처리 흐름을 개발·개선하고, 주문·취소 상태와 DB 반영 결과를 검증",
    "상품 수집·적재·정규화·검색 데이터 생성 흐름을 분석하고, 제휴사별 상품 반영과 예외 데이터 재처리 기준을 정리",
    "비동기 통합검색의 작업 등록 순서를 안정화하고, CompletableFuture·WebClient 호출 경로의 타임아웃·결과 취합 흐름을 분석해 신규 제휴 API 연동에 적용",
    "검색 API 호출과 사용자 외부 이동 흐름을 구분해 메뉴 노출·제휴사 설정·인증·접속 조건을 단계별로 검증",
    "신규 연동의 요청·응답 규격, 예외 사례와 오픈 전 점검 항목을 재사용 가능한 가이드로 문서화"
  ],
  troubleshooting: [
    "주문 저장과 후속 처리의 트랜잭션 경계를 분리해 후속 처리 실패가 주문 트랜잭션에 영향을 주지 않도록 개선. 기존 동기 처리 흐름과 변경 범위를 고려해, 주문 저장 완료 후 후속 처리를 호출하는 별도 Facade를 설계·구현",
    "제휴사 응답의 필수 필드·배열·가격 형식을 검증하고 파싱 예외를 제휴사 단위로 격리해 일부 비정상 응답이 전체 검색 실패로 확산되지 않도록 개선",
    "상품 매핑은 정상인데 검색 결과가 의도와 다르게 노출되는 현상을 분석. 매핑 데이터와 후처리·검색 데이터 생성 과정을 구분해 추적하고, 추가 검색상품이 생성되는 구간을 확인해 원인을 분리"
  ],
  results: [
    "후속 처리와 제휴사 응답 오류의 영향 범위를 분리해 주문 처리와 통합검색의 안정성을 개선",
    "수집부터 검색 노출까지 확인 지점을 정리해 데이터 불일치의 원인 추적과 재처리 판단 기준 확보",
    "제휴사별 연동 규격과 예외 사례를 공통 검증 절차·체크리스트로 정리해, 신규 제휴 온보딩에 재사용할 수 있는 검증 기준을 구축"
  ],
  devops: [
    "환경별 연동 설정과 호출 방향을 구분해 외부 API 오류를 응답 처리·네트워크·접속 조건으로 나눠 진단",
    "배치 실행 이력과 DB 반영 결과를 연결해 예외 데이터의 재처리 여부와 정상 반영을 확인",
    "연동 규격과 검증 사례를 Markdown으로 구조화하고, AI가 제안한 원인 후보를 직접 코드·쿼리·테스트로 확인한 뒤 업무에 반영"
  ],
  sectionLabels: {
    devops: "Integration Reliability"
  },
  techStack: [
    "Java",
    "Spring Boot",
    "Spring Transaction",
    "Oracle",
    "MyBatis",
    "REST API",
    "Batch",
    "SQL",
    "Data Pipeline",
    "Java Concurrency",
    "CompletableFuture",
    "ThreadPoolTaskExecutor",
    "WebFlux",
    "WebClient"
  ],
  architecture: [
    "External Partner Systems",
    "Order API / Product Files",
    "API & Batch Ingestion",
    "Product Normalization / Oracle Flow",
    "Elasticsearch Search Records",
    "Parallel Partner Validation APIs",
    "Service Exposure / External Redirect"
  ],
  architectureNote: "API / Batch / DB / Elasticsearch / Partner API Reliability Checks"
};
