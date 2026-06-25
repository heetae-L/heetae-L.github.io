import type { ProjectData } from "../../types";

export const travelAiQaApi: ProjectData = {
  slug: "travel-ai-qa-api",
  categories: ["development", "ai", "operations", "devops"],
  icon: "bot",
  title: "여행 AI Q&A API 구축",
  summary:
    "2023년 ChatGPT 초기 확산기에 전사 첫 Python/Flask 기반 TourGPT Gateway API Server를 구축하고 GPT-3.5 Turbo(Azure OpenAI), Oracle, Docker/GitLab CI/Nomad 운영 배포까지 연결한 프로젝트",
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
    "2023년 ChatGPT가 막 서비스 적용 대상으로 떠오르던 시점에 GPT-3.5 Turbo 기반 여행 Q&A 기능의 핵심 처리 서버인 TourGPT Gateway API Server를 신규 구축.\n\n휴가샵 모바일 화면은 AI 여행정보의 사용자 접점이고, 직접 구현 범위는 그 뒤에서 호출을 받아 질문 범위 판별, GPT 답변 생성, 응답 JSON 구성, 대화 이력 저장을 처리하는 Python/Flask 기반 Gateway API Server.\n\n기존 휴가샵/Benepia 서버 코드에 기능을 합친 방식이 아니라, 별도 Docker container로 실행되는 Python API 서버를 구성해 기존 서비스 API 뒤에 연결.\n\nJava/Spring Boot 중심의 기존 운영 환경에서 전사 첫 Python/Flask 기반 GPT API Server를 맡아 지정된 Azure OpenAI 환경을 사용한 GPT 호출, 응답 상태 체계, Oracle 이력 저장, Docker image, GitLab CI, Nomad job, health check까지 연결.\n\nPython 웹 API 운영 배포 레퍼런스가 사실상 전무한 상태에서 API 구현, 런타임 구성, CI/CD, 운영 검증 기준을 처음부터 만들어 간 프로젝트.",
  problem:
    "ChatGPT와 GPT-3.5 Turbo를 서비스 기능으로 연결하던 2023년에는 지금처럼 LLM API 적용 패턴, structured response, 운영 배포 사례가 정리되어 있지 않던 상황.\n\n기존 사내 서비스는 Java/Spring Boot 계열 중심이라 Python/Flask Gateway API Server를 별도 컨테이너로 운영 서버에 올리는 기준, Docker image 구성, 배포 job, health check, 로그 경로, Oracle client, proxy 설정까지 새로 잡아야 하는 과제.\n\n단순 GPT 호출 데모가 아니라 모바일/서비스 API에서 호출 가능한 Gateway API Server, 응답 상태 체계, 대화 이력 저장, 운영 배포 검증을 모두 포함한 전사 첫 Python 기반 AI API 구축 업무.",
  role: [
    "전사 첫 Python/Flask 기반 TourGPT Gateway API Server의 API 구현과 응답 JSON 구조 설계 주도",
    "국내 여행 Q&A 서비스 범위, 요청/응답 JSON 구조, 상태 코드, 오류·차단 메시지 기준 설계",
    "지정된 Azure OpenAI 환경에서 GPT-3.5 Turbo 호출, 질문 범위 판별, 답변 생성, 응답 JSON 구성, 대화 이력 저장, 세션 cache 흐름 구현",
    "Docker image, GitLab CI, Nomad job, 로그 경로, health check, proxy, Oracle client는 인프라팀과 런타임 검증 기준을 맞춤"
  ],
  contributions: [
    "TourGPT Gateway API Server에서 질문 적합성 판별과 답변 생성을 2단계 GPT 호출로 분리해 국내 여행 도메인에 맞지 않는 질문을 서버 계층에서 제어",
    "AI 응답을 모바일/서비스 API가 처리 가능한 status, answer, keywords, system message 구조로 정리",
    "모바일 화면의 질문 입력, 로딩, 답변 결과, 이용방법 안내 흐름에 맞춰 Gateway 응답 상태와 안내 메시지 기준을 연결",
    "대화 이력을 Oracle에 저장하고 세션별 최근 맥락을 cache로 유지하는 API 상태 관리 구조 구성",
    "사내에 Python 서비스 운영 배포 기준이 없는 상태에서 dependency, Oracle client, Docker base image, GitLab CI, Nomad job, 환경별 config를 직접 검증",
    "proxy, logging, health check, canary/rollback 조건을 운영 배포 체크포인트로 분리해 Python API의 실제 실행 기준 마련",
    "민감 설정 분리, dependency 재현성, 응답 schema validation처럼 초기 GPT API 운영화 과정에서 필요한 개선 기준 도출"
  ],
  troubleshooting: [
    "GPT-3.5 Turbo 응답이 의도한 JSON 구조를 벗어나는 상황을 고려해 검증·보정 흐름과 프롬프트 조정 기준 마련",
    "사내 네트워크 proxy와 Azure OpenAI 호출 방식 차이를 분리해 API 호출 실패 원인을 네트워크, 인증, 응답 처리 계층으로 구분",
    "일일 질문 제한, 국내 여행 범위, 개인정보 입력 주의, 답변 한계 고지를 Gateway 응답 상태값과 서비스 안내 메시지 기준으로 함께 정리",
    "Oracle client와 Python container runtime 조합을 반복 검증해 개발/운영 환경별 접속 리스크 축소",
    "Docker image, package 설치, 로그 volume, Nomad resource/service check를 하나씩 맞추며 Python 서비스 운영 레퍼런스 부재를 돌파",
    "health check 경로와 배포 검증 흐름을 추가해 단순 실행 성공을 운영 반영 가능한 서비스 기준으로 확장"
  ],
  results: [
    "전사 첫 Python/Flask 기반 TourGPT Gateway API Server를 요구사항 정리부터 API 구현, DB 연동, 컨테이너 실행, CI/CD, Nomad 배포 검증까지 end-to-end로 구축",
    "ChatGPT 초기 확산기에 GPT-3.5 Turbo를 실제 서비스형 Gateway API Server로 연결하며 AI 기능을 사용자 화면, 서비스 API, 운영 DB, 배포 런타임까지 확장",
    "모바일 진입점, 대화 시작, 이용방법, 응답 대기, 답변 결과까지 이어지는 사용자 흐름 뒤에서 동작하는 핵심 Gateway 계층을 구현",
    "Java/Spring Boot 중심 조직에서 Python 서비스 실행 기준과 운영 검증 흐름을 새로 만들며 후속 Python/AI API 도입의 기술 기준 확보",
    "AI API 구현, Python runtime, Oracle 연동, Docker/GitLab CI/Nomad 배포 검증을 연결하며 신규 기술을 서비스 실행 기준까지 확장"
  ],
  devops: [
    "Python/Flask 기반 TourGPT Gateway API Server를 별도 Docker container로 패키징하고, GitLab CI build/deploy job 실행 흐름을 구성",
    "개발/운영 branch, 환경별 config, image tag, 로그 volume, resource, service check를 분리해 운영 배포 가능한 실행 구조 설계",
    "기존 휴가샵/Benepia 운영 환경에 독립 실행 컨테이너로 붙일 수 있도록 Python dependency와 Oracle client 재현 제약을 Docker base image, package 구성, proxy 설정 검증으로 해결",
    "Nomad docker driver, health check, canary, auto revert 조건은 인프라팀과 함께 검증해 Python API를 배포·관측·복구 기준을 가진 서비스로 정리",
    "인프라팀과 배포 실행 방식과 장애 대응 기준을 맞추며 사내에 없던 Python API 런타임 레퍼런스를 구축"
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
    "TourGPT Gateway API Server (Python/Flask)",
    "Scope Classifier / Response JSON Rules",
    "Azure OpenAI GPT-3.5 Turbo",
    "Oracle Q/A History",
    "Docker Container / GitLab CI",
    "Nomad Runtime / Health Check / Canary"
  ],
  architectureNote: "휴가샵 AI여행정보 + TourGPT Gateway API Server + Azure OpenAI + Container Runtime",
  screenshots: [
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-entry.jpg",
      alt: "휴가샵 모바일 메인에서 AI여행정보 메뉴가 노출된 화면",
      title: "Mobile Entry Point",
      caption: "TourGPT Gateway API Server가 연결된 AI 여행정보의 모바일 진입점. 사용자 질문은 이 접점에서 시작해 서비스 API를 거쳐 Gateway API Server로 전달",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-chat-start.jpg",
      alt: "AI 여행정보 초기 대화 화면",
      title: "Chat Start",
      caption: "TourGPT Gateway API Server 호출 전 사용자 질문을 받는 대화 시작 화면. 이후 질문은 Gateway API Server에서 범위 판별과 GPT 답변 생성 흐름으로 처리",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-guide.jpg",
      alt: "AI 여행정보 이용방법 안내 화면",
      title: "Usage Policy",
      caption: "질문 제한, 국내 여행 범위, 개인정보 입력 주의, 답변 한계가 TourGPT Gateway API Server의 응답 상태와 안내 메시지 기준으로 연결되는 정책 화면",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-loading.jpg",
      alt: "AI 여행정보 답변 생성 중 로딩 화면",
      title: "Loading State",
      caption: "TourGPT Gateway API Server가 Azure OpenAI GPT-3.5 Turbo 호출을 처리하는 동안 노출되는 대기 상태. timeout과 응답 상태 처리를 고려한 사용자 피드백 흐름",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-answer.jpg",
      alt: "AI 여행정보 질문과 답변 결과 화면",
      title: "Answer Result",
      caption: "Azure OpenAI GPT-3.5 Turbo 응답을 TourGPT Gateway API Server가 서비스 응답 계약으로 가공해 모바일 채팅형 UI에 노출한 결과 화면. 긴 답변, 상태 메시지, 이력 저장까지 고려한 API 응답 흐름",
      width: 903,
      height: 3516
    }
  ]
};
