import type { ExperienceData } from "../types";

export const experience: ExperienceData = {
  eyebrow: "Career",
  title: "Work Experience",
  description:
    "물류/주문 내부 시스템에서 시작해 복지·여행 플랫폼의 백엔드, 제휴 연동, 데이터 흐름 개선으로 확장해 온 경력입니다.",
  items: [
    {
      period: "2021.12 - Present",
      company: "SK m&service",
      role: "Software Engineer",
      featured: true,
      homeOrder: 1,
      bullets: [
        "SK m&service의 복지·여행 플랫폼에서 여행/레저 제휴 연동의 주문수집 API, 상품수집 배치, 검색 노출 흐름을 API·Batch·DB 관점으로 분석하고 개선",
        "2026년부터 여행/레저 제휴 연동 메인 담당으로 신규 연동 온보딩, 오류 원인 분리, 대외 커뮤니케이션을 주도",
        "여행 AI Q&A API를 Python/Flask와 Azure OpenAI 기반으로 구축하고 Docker·GitLab CI·Nomad 배포 검증 수행",
        "Benepia와 한국관광공사(KTO) 휴가샵 관련 서비스에서 웹·모바일·관리자·DB를 넘나드는 기능 개선, 리포트/데이터 품질, ISMS 대응 경험 축적"
      ]
    },
    {
      period: "2020.11 - 2021.06",
      company: "한성기업",
      role: "Software Engineer",
      featured: true,
      homeOrder: 2,
      bullets: [
        "식품 제조/유통 기업의 물류·주문 관련 사내 업무 웹 시스템 개발 및 운영",
        "내부 사용자 요청을 처리하며 업무 화면과 데이터 흐름이 실제 운영에 연결되는 방식을 경험"
      ]
    }
  ]
};
