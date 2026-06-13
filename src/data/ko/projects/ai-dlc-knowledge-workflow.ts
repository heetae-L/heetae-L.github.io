import type { ProjectData } from "../../types";

export const aiDlcKnowledgeWorkflow: ProjectData = {
  slug: "ai-dlc-knowledge-workflow",
  category: "AI",
  icon: "brain",
  title: "AI-DLC: AI-Assisted Engineering Workflow",
  summary:
    "AI-DLC를 Context -> Analyze -> Verify -> Communicate -> Learn 흐름으로 운영하는 개인 AI-assisted engineering workflow",
  tags: ["Markdown", "Codex", "Claude Code", "Human-in-the-loop"],
  featured: true,
  homeOrder: 3,
  overview:
    "AI-DLC는 AI를 단순 질의응답 도구로 쓰는 방식이 아니라, 업무 접수부터 분석, 검증, 커뮤니케이션, 지식 업데이트까지 이어지는 개발 생명주기에 AI를 통합한 개인 엔지니어링 워크플로우.\n\n반복되는 연동 이슈, 테스트 오류, 데이터 반영 문제를 매번 새로 설명하지 않도록 업무 맥락, 판단 기준, 확인 절차를 Markdown 기반 지식으로 구조화하고, Codex/Claude Code가 같은 기준을 참조하도록 정리.\n\n핵심은 AI가 결론을 대신 내리는 자동화가 아니라, AI가 제안한 원인 후보와 확인 순서를 사람이 코드, 쿼리, 배치 흐름, 테스트 결과로 검증하는 human-in-the-loop 구조.",
  problem:
    "실무 이슈는 규격, 코드, 데이터, 배치, 외부 커뮤니케이션이 함께 얽혀 있어 같은 유형의 문제도 도구와 세션마다 다른 방식으로 해석되기 쉬운 구조.\n\n동시에 민감한 운영 정보를 그대로 활용할 수 없기 때문에, AI가 읽을 수 있는 업무 맥락과 사람이 직접 검증해야 하는 내부 근거를 구분하는 체계가 필요.",
  role: [
    "연동 규격, 코드 흐름, 테스트 케이스, 오류 사례를 AI가 읽을 수 있는 Markdown 업무 지식으로 구조화",
    "Codex와 Claude Code가 동일한 업무 맥락을 참조하도록 진입 라우팅, 에이전트 규칙, 도메인 문서, 접근 경계를 분리",
    "AI가 제안한 원인 후보를 컨트롤러, 서비스 로직, 배치, SQL, DB 상태, 테스트 결과 기준으로 재검증",
    "외부 제휴사 메일, Jira 댓글, 위키 문안에서 공개 가능한 설명과 내부 구현 정보를 분리"
  ],
  contributions: [
    "Context -> Analyze -> Verify -> Communicate -> Learn 흐름으로 업무 접수, 원인 후보 분석, 검증, 커뮤니케이션, 지식 업데이트 단계를 분리",
    "업무 유형별로 규격, 코드, 데이터 상태, 테스트 결과, 커뮤니케이션 맥락을 분리해 원인 후보와 확인 순서를 정리",
    "AI가 제안한 후보를 바로 결론으로 쓰지 않고 반증 가능한 확인 항목으로 바꿔 코드·쿼리·테스트 검증 루프에 연결",
    "AI가 만든 메일/Jira/위키 초안을 내부 구현 노출 없이 재현 정보, 확인 요청, 다음 액션 중심의 커뮤니케이션 문안으로 재구성",
    "새 오류 케이스와 AI 오판 결과를 다시 Markdown 지식 베이스에 반영해 다음 분석에서 재사용 가능한 기준으로 누적"
  ],
  devops: [
    "진입 라우팅(entry routing)으로 질문 유형별 우선 참조 문서를 지정해 AI가 필요한 업무 맥락부터 찾도록 구성",
    "에이전트 규칙(agent rules)으로 조회/쓰기 원칙, 변경 전 확인, 지식 업데이트 기준을 고정해 도구별 작업 원칙을 일관화",
    "규격 문서와 도메인 지식을 분리해 필드, 응답 코드, 테스트 케이스, 시스템 흐름을 목적별로 참조 가능하게 구성",
    "접근 경계(access boundary)를 따로 두어 접속 값, 권한 정보, 내부 로그 원문 없이도 업무 흐름과 판단 기준을 설명할 수 있는 구조 마련"
  ],
  troubleshooting: [
    "AI 답변은 최종 결론이 아니라 원인 후보와 확인 순서로만 사용하고, 실제 판단은 코드·쿼리·테스트 결과로 검증",
    "AI가 요청값, 접속 조건, 데이터 반영 조건을 원인 후보로 제안하면 실제 코드·쿼리·테스트 결과로 반증하거나 확정한 뒤 검증된 기준만 지식 베이스에 반영",
    "API, 배치, 데이터, 네트워크, 테스트 절차 중 어느 계층의 문제인지 먼저 구분해 확인 범위가 불필요하게 넓어지지 않도록 정리",
    "외부 제휴사에 전달 가능한 표현과 내부 구현 확인용 표현을 분리해 기술 커뮤니케이션 리스크를 낮추는 기준 수립",
    "정량 지표는 측정 기준을 별도로 정의하고, 공개 페이지에서는 분석 재사용성·문서화 품질·검증 루프 중심으로 효과 설명"
  ],
  results: [
    "동일 유형 이슈 재분석 시 이전 맥락과 검증 기준을 다시 설명하는 단계를 줄이고 세션 간 분석 기준 유지",
    "AI 원인 후보를 검증 가능한 확인 항목으로 바꿔 유사 케이스에서 확인 순서와 판단 기준을 재사용",
    "메일/Jira/위키 작성 흐름을 재현 정보, 확인 요청, 다음 액션 중심으로 정리해 기술 커뮤니케이션 초안 품질 안정화",
    "AI API 구축 경험(TourGPT)과 별개로, AI를 실무 분석·문서화·검증 루틴에 적용하는 개발 방식의 차별화 포인트 확보"
  ],
  sectionLabels: {
    devops: "Context Routing",
    troubleshooting: "Human-in-the-loop Verification"
  },
  techStack: [
    "Markdown",
    "Codex",
    "Claude Code",
    "Knowledge Base",
    "Context Routing",
    "Human-in-the-loop",
    "API / Batch Context",
    "Technical Writing"
  ],
  architecture: [
    "Work Request / Issue",
    "Markdown Knowledge Base",
    "AI Root-cause Candidates",
    "Code / Query / Test Verification",
    "Mail / Jira / Wiki Draft",
    "Knowledge Update"
  ],
  architectureNote: "Context -> Analyze -> Verify -> Communicate -> Learn"
};
