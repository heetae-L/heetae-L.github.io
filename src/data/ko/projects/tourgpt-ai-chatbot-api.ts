import type { ProjectData } from "../../types";

export const tourgptAiChatbotApi: ProjectData = {
  slug: "tourgpt-ai-chatbot-api",
  category: "AI",
  icon: "bot",
  title: "TourGPT Travel AI Q&A API",
  summary: "Python/Flask 기반 여행 Q&A API를 만들고 Azure OpenAI 호출, 응답 상태 설계, Oracle 저장, Docker/Nomad 운영 검증까지 연결한 AI API 프로젝트입니다.",
  tags: ["Python", "Flask", "Azure OpenAI", "Docker"],
  featured: true,
  homeOrder: 2,
  overview:
    "사내 Java/Spring 중심 환경에서 Python 기반 GPT API를 운영 가능한 형태로 올리기 위해 Flask API, Azure OpenAI 연동, 대화 이력 저장, Docker/GitLab CI/Nomad 배포 검증까지 수행했습니다.",
  role: [
    "국내 여행 Q&A 서비스 범위와 요청/응답 JSON 구조 설계",
    "여행 질문 판별과 답변 생성을 분리한 2단계 GPT 호출 흐름 구현",
    "운영 환경의 proxy, Oracle client, logging, health check 검증"
  ],
  contributions: [
    "질문 적합성 판별과 답변 생성을 분리해 서비스 범위 통제",
    "대화 이력 저장과 세션 cache 구조 구성",
    "Docker image, GitLab CI, Nomad job, health check 기반 운영 배포 검증",
    "초기 AI API 운영화 과정에서 secret 분리, dependency 재현성, schema validation 개선 포인트 도출"
  ],
  architecture: ["Client", "Flask API", "Azure OpenAI", "Session Store", "Nomad Deploy"]
};
