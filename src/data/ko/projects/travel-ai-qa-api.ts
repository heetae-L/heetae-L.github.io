import type { ProjectData } from "../../types";

export const travelAiQaApi: ProjectData = {
  slug: "travel-ai-qa-api",
  categories: ["development", "ai", "operations", "devops"],
  icon: "bot",
  title: "여행 AI Q&A API 구축",
  summary:
    "사내 첫 Python/Flask 기반 여행 AI Q&A API를 구축하고, Azure OpenAI 연동부터 대화 이력 저장·Docker 패키징·운영 배포 검증까지 주도",
  meta: {
    sourceType: "Professional Work / TF",
    company: "SK M&Service",
    service: "여행 AI Q&A API",
    period: "2023",
    role: "Software Engineer",
    scope: ["Python", "Flask", "Azure OpenAI", "Docker", "GitLab CI", "Nomad"],
    relatedExperience: "skmns"
  },
  tags: ["Python", "Flask", "Azure OpenAI", "Docker/Nomad"],
  featured: true,
  homeOrder: 2,
  overview:
    "2023년 ChatGPT의 서비스 적용이 시작되던 시기에 사내 첫 Python/Flask 기반 여행 AI Q&A Gateway API를 신규 구축.\n\n당시 주력인 Java/Spring 외에 Python·Flask와 Azure OpenAI를 새로 익히며 요구사항 구체화, API 설계·구현, DB 연동과 운영 배포 검증을 주도. 사내에 Python 웹 API 배포 레퍼런스가 없는 환경에서 인프라팀과 실행·배포 기준을 마련.\n\n기존 서비스 API에서 호출하는 독립 서버로 구성해 질문 범위 판별, 답변 생성, 응답 JSON 구성과 대화 이력 저장을 구현하고, 별도 Docker 컨테이너에서 실행·배포까지 연결.",
  problem:
    "국내 여행 범위를 벗어난 질문을 구분하고, 형식이 일정하지 않은 모델 응답을 서비스가 처리할 수 있는 상태값과 JSON으로 제공해야 하는 과제. 질문 판별 결과가 실제 답변 생성과 안내 메시지 처리로 이어지도록 API 계약을 설계할 필요.\n\nPython 서비스의 운영 배포 사례가 없는 Java/Spring 중심 환경에서 컨테이너 실행, Oracle 연결, 외부 AI API 호출, 로그와 상태 점검을 함께 검증해야 하는 상황. 개발 환경에서 동작한 API를 실제 서비스가 호출할 수 있는 배포 구성으로 완성하는 것이 핵심 과제.",
  role: [
    "CTO와의 2인 TF에서 요구사항 구체화, API 설계·구현, DB 연동과 배포 검증을 주도",
    "담당 범위는 모바일 서비스가 호출하는 Gateway API로, 질문 판별·답변 생성·응답 상태 처리와 이력 저장을 구현",
    "인프라팀과 컨테이너 실행, 외부 API·DB 연결, 상태 점검과 롤백 조건을 함께 검증"
  ],
  contributions: [
    "질문 범위 판별과 답변 생성을 2단계 Azure OpenAI 호출로 분리. 국내 여행 조건에 맞는 질문만 답변 생성으로 보내고, 범위 외 질문은 안내 메시지로 응답하도록 서비스 흐름을 설계",
    "정상·범위 외·오류 응답을 상태값과 JSON 구조로 구분하고 답변·키워드·안내 메시지를 구성해, 기존 서비스에서 응답에 맞는 화면과 메시지를 처리할 수 있도록 API 계약을 정의",
    "질문·답변 이력은 Oracle에 저장하고 세션별 최근 대화 맥락은 프로세스 내 LRU 캐시로 관리해, 이력 보존과 요청 간 대화 맥락 관리를 각각 구현",
    "기존 서비스 API와 연결되는 독립 Gateway를 별도 Docker 컨테이너로 구성하고, 요청 수신부터 모델 호출·응답 반환·DB 저장까지 연동 검증"
  ],
  troubleshooting: [
    "모델의 질문 판별 응답이 일정한 JSON 형식을 따르지 않는 문제에 대응해 파싱·검증·보정 로직을 구현하고 프롬프트를 반복 조정. 판별 결과를 서비스의 답변 생성·안내 분기에 사용할 수 있도록 처리",
    "외부 AI API 호출 실패 시 Azure OpenAI의 호출·인증 방식과 네트워크 Proxy 적용을 구분해 원인을 확인하고, 실행환경의 연결 조건에 맞춰 설정을 조정",
    "Python 패키지와 Oracle Client가 컨테이너에서 함께 동작하도록 이미지 구성과 연결 설정을 반복 검증하고, 개발·운영 환경의 실행 차이를 해결"
  ],
  results: [
    "여행 질문 판별부터 답변 생성·이력 저장까지 처리하는 사내 첫 Python 기반 AI API를 기존 서비스에서 호출하고 운영 배포할 수 있는 형태로 완성",
    "API 기능뿐 아니라 로그·상태 점검·롤백 조건까지 포함한 실행 구성을 검증하고, 후속 Python 서비스 도입 시 참고할 배포 사례 확보",
    "새로운 언어와 AI API를 학습해 서비스 요구사항, 백엔드 구현과 운영 환경 검증까지 연결한 프로젝트를 주도"
  ],
  devops: [
    "Docker 이미지와 GitLab CI 빌드·배포 작업을 구성해 Python API를 컨테이너 빌드부터 배포 실행까지 연결",
    "개발·운영 환경별 설정과 Nomad 실행 구성을 분리하고, Python 의존성·Oracle Client가 포함된 컨테이너의 실행 조건을 검증",
    "컨테이너 외부 로그 저장과 설정 주입 방식을 구성해 배포 후 실행 상태와 오류 원인을 확인할 수 있는 기반 마련",
    "상태 확인 엔드포인트를 구현하고 인프라팀과 Health Check·Canary·롤백 조건을 검증해 배포 후 점검과 복구 기준을 마련"
  ],
  sectionLabels: {
    screenshots: "Service Screenshots",
    devops: "DevOps & Runtime Validation"
  },
  techStack: [
    "Python 3.10",
    "Flask",
    "Azure OpenAI",
    "GPT-3.5 Turbo",
    "OpenAI Python SDK",
    "Oracle",
    "Oracle Client / cx_Oracle",
    "LRU Cache",
    "Docker",
    "GitLab CI",
    "Nomad",
    "Health Check / Canary",
    "Prompt Design",
    "Structured AI Response"
  ],
  architecture: [
    "휴가샵 Mobile Entry",
    "Chat UI / Usage Policy",
    "Service API Bridge",
    "AI Q&A Gateway API (Python/Flask)",
    "Scope Classifier / Response JSON Rules",
    "Azure OpenAI GPT-3.5 Turbo",
    "Oracle Q/A History",
    "Docker Container / GitLab CI",
    "Nomad Runtime / Health Check / Canary"
  ],
  architectureNote: "휴가샵 AI여행정보 + AI Q&A Gateway API + Azure OpenAI + Container Runtime",
  screenshots: [
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-entry.jpg",
      alt: "휴가샵 모바일 메인에서 AI여행정보 메뉴가 노출된 화면",
      title: "Mobile Entry Point",
      caption: "여행 AI Q&A 기능으로 연결되는 모바일 진입 화면. 담당 API가 기존 서비스 뒤에서 질문을 처리",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-chat-start.jpg",
      alt: "AI 여행정보 초기 대화 화면",
      title: "Chat Start",
      caption: "사용자 질문을 입력하는 화면. 서버에서 질문 범위를 판별한 뒤 답변 생성을 진행",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-guide.jpg",
      alt: "AI 여행정보 이용방법 안내 화면",
      title: "Usage Policy",
      caption: "국내 여행 범위와 이용 조건을 안내하는 서비스 화면. 범위 외 응답과 안내 메시지 설계 시 참고",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-loading.jpg",
      alt: "AI 여행정보 답변 생성 중 로딩 화면",
      title: "Loading State",
      caption: "AI 답변을 기다리는 서비스 화면. 모델 호출 결과는 Gateway API의 응답으로 전달",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-answer.jpg",
      alt: "AI 여행정보 질문과 답변 결과 화면",
      title: "Answer Result",
      caption: "AI 답변과 안내 메시지를 보여주는 화면. Gateway API에서 생성한 응답 데이터를 기존 서비스가 표시",
      width: 903,
      height: 3516
    }
  ]
};
