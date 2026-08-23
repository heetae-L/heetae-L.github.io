import type { ExperienceData } from "../types";

export const experience: ExperienceData = {
  eyebrow: "Career",
  title: "Work Experience",
  description:
    "복지·여행 이커머스의 상품·주문·검색 흐름을 백엔드 서비스와 외부 제휴 연동으로 설계·구현하고, 신뢰성 있게 운영해 온 커리어",
  items: [
    {
      period: "2021.12 - Present",
      startDate: "2021-12-06",
      company: "SK m&service",
      role: "Software Engineer",
      featured: true,
      homeOrder: 1,
      homeBullets: [
        "복지·여행 이커머스 플랫폼에서 API, Batch, DB, 검색 노출, 관리자 기능을 연결하는 백엔드 서비스 구현",
        "상품·주문·검색 데이터 흐름과 외부 제휴 연동 구조를 서비스 관점에서 설계·구현",
        "Python/Flask, Azure OpenAI 기반 여행 AI Q&A API를 구축하고 Docker, GitLab CI, Nomad 배포 검증까지 수행"
      ],
      bullets: [
        "2026년부터 여행/레저 제휴 연동에서 상품·주문 수집 API/Batch와 검색 노출 흐름을 주도하고, 한국관광공사(KTO) 휴가샵 웹·앱 서비스 기능 개발을 병행",
        "주문 저장과 후속 처리의 트랜잭션 경계를 분리해 후속 처리 실패가 주문 트랜잭션에 영향을 주지 않도록 개선",
        "2025년부터 한국관광공사(KTO) 휴가샵 업무를 유지하면서 여행/레저 제휴 연동으로 책임 범위를 확장하고, 외부 제휴사와 연결되는 상품·주문·검색 데이터 처리 흐름을 이커머스 서비스 기준으로 체계화",
        "2024.04부터 한국관광공사(KTO) 휴가샵 웹·앱 이커머스 서비스에서 사용자/관리자/고객사 기능과 API, DB/배치, 포인트/통계 흐름을 연결해 구현",
        "2023년 하반기 여행 AI Q&A API TF에서 전사 최초 Python/Flask, Azure OpenAI 기반 AI API 프로젝트를 개발하고 Docker, GitLab CI, Nomad 배포 검증까지 end-to-end로 수행",
        "2022.02부터 Benepia 복지 이커머스 서비스에서 고객사별 복지몰 차별화 기능을 개발하고 공통 플랫폼 흐름과 연결",
        "ISMS/e-privacy 보안 진단 대응 과정에서 XSS/CSRF, 접근제어, 인증/세션, 정보노출 취약점을 서비스 영향 범위에 맞춰 조치"
      ]
    },
    {
      period: "2020.11 - 2021.06",
      startDate: "2020-11-09",
      endDate: "2021-06-11",
      company: "한성기업",
      role: "Software Engineer",
      featured: true,
      homeOrder: 2,
      bullets: [
        "식품 제조/유통 기업의 물류·주문 관련 사내 업무 웹 시스템을 개발한 첫 실무 경력",
        "주문정보 프로그램의 사용자 접근 범위를 업무 역할에 맞게 확장하며 내부 업무 흐름과 데이터 처리 구조를 경험"
      ]
    }
  ]
};
