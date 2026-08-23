import type { TechStackData } from "../types";

export const techStack: TechStackData = {
  eyebrow: "Skills",
  title: "Tech Stack",
  description: "Backend · Web · Database · CI/CD · AI",
  groups: [
    {
      id: "backend",
      icon: "server",
      title: "Backend",
      summary: "Java 기반 서비스 API · 업무 로직",
      featured: true,
      homeOrder: 1,
      items: [
        { name: "Java", description: "서비스 API와 업무 로직 구현에 사용하는 주력 언어" },
        { name: "Spring Boot", description: "서비스 API와 백엔드 애플리케이션 개발에 사용" },
        { name: "Spring Framework", description: "기존 서비스 구조와 업무 로직 개발에 사용" },
        {
          name: "Spring Transaction",
          description: "서비스 처리 간 트랜잭션 경계를 분석하고 실패 영향 범위를 분리"
        },
        { name: "REST API", description: "서비스 기능과 외부 시스템 연동 API 구현" },
        { name: "Batch", description: "정기 처리, 데이터 수집, 후처리성 업무 흐름 구현" },
        {
          name: "Java Concurrency",
          description:
            "CompletableFuture·전용 Thread Pool과 WebFlux 기반 병렬 검색 구조가 적용된 서비스 개발·운영 및 흐름 분석"
        }
      ]
    },
    {
      id: "web",
      icon: "code",
      title: "Web",
      summary: "JSP 화면 · JavaScript 인터랙션",
      featured: true,
      homeOrder: 2,
      items: [
        { name: "JSP", description: "Java 기반 서버 렌더링 업무 화면 개발" },
        { name: "JavaScript", description: "화면 동작과 사용자 입력 처리 구현" },
        { name: "jQuery", description: "기존 서비스 화면의 DOM 처리와 이벤트 제어" },
        { name: "AJAX", description: "화면 단위 비동기 요청과 부분 갱신 처리" },
        { name: "JSTL", description: "JSP 화면의 조건, 반복, 데이터 출력 처리" }
      ]
    },
    {
      id: "database",
      icon: "database",
      title: "Database",
      summary: "Oracle · SQL · Redis",
      featured: true,
      homeOrder: 3,
      items: [
        { name: "Oracle", description: "주문·상품·포인트·통계 데이터 저장/조회 구조 구현에 사용하는 주요 DB" },
        { name: "MyBatis", description: "SQL 중심 업무 로직과 Java 객체 매핑에 사용" },
        { name: "SQL", description: "데이터 정합성 검증, 리포트 기준 쿼리 작성, 배치 결과 분석" },
        { name: "PL/SQL / Procedure", description: "DB 내부 처리 로직과 배치 후처리 흐름 분석" },
        { name: "MERGE", description: "기준 데이터 반영과 대량 데이터 보정 처리" },
        {
          name: "Redis",
          description: "Spring Session과 조회 결과 캐시에 Redis가 적용된 서비스 개발·운영 경험"
        }
      ]
    },
    {
      id: "cicd-deploy",
      icon: "cloud",
      title: "CI/CD & Deploy",
      summary: "빌드 · 배포 · 컨테이너 · 런타임",
      featured: true,
      homeOrder: 4,
      items: [
        { name: "GitLab CI/CD", description: "빌드/배포 파이프라인 구성과 배포 검증" },
        { name: "Jenkins", description: "CI/CD job 기반 빌드와 배포 흐름 사용" },
        { name: "Docker", description: "애플리케이션 컨테이너 실행 환경 구성과 검증" },
        { name: "Tomcat", description: "Java 웹 애플리케이션 실행 런타임" },
        { name: "Maven / WAR", description: "Java 프로젝트 빌드와 배포 패키징" },
        { name: "Linux", description: "서버 로그 분석, 설정 점검, 런타임 이슈 대응" }
      ]
    },
    {
      id: "ai-llm",
      icon: "brain",
      title: "AI / LLM",
      summary: "AI 활용 개발 흐름 · LLM API 연동",
      featured: true,
      homeOrder: 5,
      items: [
        { name: "AI-assisted Engineering", description: "이슈 분석, 문서화, 검증 흐름에 AI를 활용하는 개발 방식" },
        { name: "AI-DLC", description: "업무 맥락, 코드 흐름, 테스트 케이스를 AI가 읽을 수 있는 지식으로 구조화" },
        { name: "Prompt Design", description: "서비스 목적에 맞는 입력 조건과 응답 기준 설계" },
        { name: "Structured AI Response", description: "AI 응답을 서비스에서 처리 가능한 JSON 구조로 설계" },
        { name: "OpenAI API", description: "LLM 요청/응답 흐름과 오류 처리 기준 구현" },
        { name: "Azure OpenAI", description: "LLM API 기반 기능 연동과 응답 생성 흐름 구현" }
      ]
    },
    {
      id: "python",
      icon: "code",
      title: "Python",
      summary: "API 프로토타입 · AI API 연동",
      featured: false,
      items: [
        { name: "Python", description: "API 프로토타이핑과 AI API 연동 구현에 사용" },
        { name: "Flask", description: "경량 API 서버와 요청/응답 처리 구조 구현" },
        { name: "pip", description: "Python dependency 구성과 재현 가능한 실행 환경 관리" },
        { name: "Oracle Client", description: "Python 애플리케이션에서 Oracle 연결 검증" }
      ]
    },
    {
      id: "enterprise-systems",
      icon: "briefcase",
      title: "Enterprise Systems",
      summary: "기업 업무 시스템 · 내부 실행 환경",
      featured: false,
      items: [
        { name: "WebSquare", description: "사내 업무 화면 개발 경험" },
        { name: "DB2", description: "기업 내부 시스템의 데이터 조회와 업무 흐름 분석" },
        { name: "RPG(IBM)", description: "기존 기간계 시스템과 연결된 업무 환경 경험" },
        { name: "Windows / Office Runtime", description: "현업 사용자 환경과 내부 업무 시스템 실행 환경 분석" }
      ]
    }
  ]
};
