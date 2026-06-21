import type { ProjectData } from "../../types";

export const benepiaServiceOperations: ProjectData = {
  slug: "benepia-service-operations",
  categories: ["development", "operations"],
  icon: "briefcase",
  title: "Benepia 복지 커머스 플랫폼 개발",
  summary:
    "여러 고객사가 공통 플랫폼 위에서 서로 다른 복지 정책으로 운영되는 Benepia 복지 커머스를 개발·운영하고, 고객사별 기능과 ISMS/e-privacy 보안 조치까지 함께 다룬 서비스",
  meta: {
    sourceType: "Professional Work",
    company: "SK M&Service",
    service: "Benepia",
    period: "2022.02 - 2024.03",
    role: "Software Engineer",
    scope: ["Java", "Spring", "Oracle", "Web/Mobile", "ISMS"],
    relatedExperience: "skmns"
  },
  tags: ["Java", "Spring", "Oracle", "MyBatis", "JSP", "jQuery"],
  featured: false,
  overview:
    "Benepia는 금융·공공·통신 계열 등 여러 고객사 복지몰이 공통 플랫폼 위에서 각기 다른 복지 정책, 메뉴, 신청 흐름, 카드/동의 기준으로 운영되는 복지 커머스 플랫폼.\n\n2022년 2월 정규직 전환 이후 2024년 3월까지 Benepia를 메인 업무 축으로 담당하며 고객사별 기능 개발, Web/Mobile 화면 변경, 백오피스 기능, 내부 처리/API, DB 반영, ISMS/e-privacy 보안 조치를 함께 처리.\n\n핵심은 공통 플랫폼의 안정성을 유지하면서 고객사별 정책과 예외 요구사항을 서비스 기능으로 구현하고, 화면·운영 기능·데이터 저장·보안 영향 범위를 함께 검증한 업무.",
  problem:
    "Benepia의 고객사 요청은 화면 문구나 메뉴 변경처럼 보여도 실제로는 공통 플랫폼 위에 고객사별 예외 정책을 얹는 작업. 한 고객사의 메뉴, 카드, 신청, 동의 흐름 변경이 공통 서비스 동선과 다른 고객사 설정에 영향을 줄 수 있는 구조.\n\n복지카드, 예약/신청, 개인정보 보완, 마케팅 동의, 공공 복지 메뉴처럼 데이터 정합성이 중요한 기능은 화면 변경뿐 아니라 DB 상태, 이력 데이터, 운영 조회 기준, ISMS/e-privacy 보안 진단 영향 범위까지 함께 확인해야 하는 서비스.",
  role: [
    "Benepia 복지 커머스 플랫폼의 고객사별 기능 개발/운영 담당",
    "금융·공공·통신 계열 고객사 정책을 공통 플랫폼 구조에 맞춰 기능 범위, 내부 처리/API, 데이터 반영 범위로 분해",
    "복지카드 변경, 예약/신청, 개인정보 보완, 약관/동의, 공공 복지 메뉴 등 주요 기능을 고객사별 운영 조건에 맞춰 구현",
    "ISMS/e-privacy 보안 조치에서 인증, 세션, 권한, 정보노출, XSS/CSRF 영향 범위를 확인하고 기존 서비스 흐름 보존",
    "KTO/휴가샵과 여행·레저 제휴 연동으로 확장되기 전, 복지 커머스 플랫폼의 공통 기능·고객사 예외·보안 영향 범위를 함께 보는 개발 관점 형성"
  ],
  contributions: [
    "금융 고객사 복지카드 변경/추가 기능에서 고객사 제휴 카드 마스터, 회원 선택 이력, PC/Mobile 카드 변경 흐름, 카드 통신 이력 구조를 함께 확인",
    "고객사 임직원 대상 진료 예약과 예방접종 등 건강/의료성 신청 기능에서 예약 가능 기간, 접수 기간, 시간대 정원, 중복 신청 제한, 개인정보 동의, 신청 이력 흐름을 연결",
    "개인정보 필수값 입력 유도와 마케팅 활용 동의 개선에서 로그인 이후 본인인증, 회원정보 보완, 약관/동의 저장, 채널별 수신 상태를 함께 처리",
    "공공 복지 메뉴 신설에서 신청 차수, 신청 본문, 첨부파일, 처리 상태, 이력, 관리자 조회 흐름을 신청자 화면과 백오피스에 맞춰 구성",
    "고객사별 웹/모바일 메뉴, 화면, 오픈 요청을 공통 Benepia 운영 흐름 위에서 반영하며 고객사 정책과 공통 서비스 구조의 충돌을 줄임"
  ],
  devops: [
    "Oracle DB와 MyBatis/SQL 기반으로 내부 처리/API, 회원, 신청, 동의, 이력 데이터의 조회/저장 흐름과 운영 추적 가능 여부를 기능 단위로 검증",
    "공통 플랫폼 위 고객사별 예외 기능이 기존 메뉴, 신청, 동의, 이력 흐름에 미치는 영향 범위를 확인하고 릴리즈 리스크를 분리",
    "ISMS/e-privacy 조치에서 인증, 세션, 권한, 정보노출, XSS/CSRF 등 보안 리스크 항목을 서비스 기능 영향과 함께 점검"
  ],
  troubleshooting: [
    "한 고객사 예외 정책을 반영할 때 공통 플랫폼과 다른 고객사 동선에 영향이 가지 않도록 메뉴, 신청, 동의, 이력 변경 범위를 분리해 적용",
    "PC/Mobile과 백오피스가 함께 바뀌는 기능에서 사용자에게 보이는 값과 운영자가 관리하는 값의 불일치 가능성을 먼저 확인",
    "보안 점검 항목 반영 시 기존 로그인, 신청, 조회, 동의 저장 흐름이 유지되는지 함께 검증"
  ],
  results: [
    "금융·공공·통신 계열 고객사 요구사항을 공통 복지 커머스 플랫폼 위의 서비스 기능으로 구현",
    "복지카드, 예약/신청, 개인정보/동의, 공공 복지 메뉴 등 주요 기능 영역에서 화면, 백오피스, 내부 처리/API, DB 이력 흐름을 연결",
    "현재값과 변경 이력을 함께 관리하는 이력형 데이터 구조를 복지카드·신청·동의 기능에 적용해 운영 추적과 문의 대응이 가능한 형태로 정리",
    "공공 복지 신청 등 관리자 조회 화면에서 민감 항목을 마스킹 처리해 ISMS/e-privacy 기준과 운영 편의를 함께 충족",
    "ISMS/e-privacy 보안 조치를 기존 로그인, 신청, 조회, 동의 저장 흐름을 깨지 않도록 반영"
  ],
  sectionLabels: {
    problem: "Service Context",
    contributions: "Representative Feature Areas",
    devops: "Technical Scope",
    troubleshooting: "Engineering Focus"
  },
  techStack: [
    "Java",
    "Spring",
    "JSP",
    "JavaScript",
    "jQuery",
    "Oracle",
    "MyBatis",
    "SQL",
    "PC / Mobile Web",
    "Admin / Backoffice",
    "ISMS / e-privacy"
  ],
  architecture: ["Benepia Welfare Commerce Platform"],
  architectureGroups: [
    {
      title: "User Channel",
      items: ["PC Web", "Mobile Web", "Customer-specific Menus", "Application / Inquiry Flow"]
    },
    {
      title: "Operations Channel",
      items: ["Backoffice / Admin", "Customer Settings", "Request Management", "Operational Verification"]
    },
    {
      title: "Feature Domains",
      items: ["Welfare Card", "Reservation / Application", "Consent / Campaign", "Public Welfare Menu"]
    },
    {
      title: "Data Foundation",
      items: ["Oracle DB", "MyBatis / SQL", "Internal Processing / API", "History Tables", "Member / Consent / Request Data"]
    },
    {
      title: "Security / Compliance",
      items: ["ISMS / e-privacy", "Auth / Session", "XSS / CSRF", "Information Exposure Checks"]
    }
  ],
  architectureVariant: "hub",
  architectureCoreLabel: "Service Core",
  architectureNote:
    "공통 Benepia 복지몰 플랫폼 위에 고객사별 정책, 화면 기능, 백오피스, 데이터 저장, 보안 기준을 연결하는 구조"
};
