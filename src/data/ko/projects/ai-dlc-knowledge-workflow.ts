import type { ProjectData } from "../../types";

export const aiDlcKnowledgeWorkflow: ProjectData = {
  slug: "ai-dlc-knowledge-workflow",
  categories: ["ai"],
  icon: "brain",
  title: "AI-DLC: Personal AI-Assisted Engineering Workflow",
  summary:
    "AI-DLC를 Context -> Analyze -> Verify -> Communicate -> Learn 흐름으로 운영하는 personal AI-assisted engineering workflow",
  tags: ["Markdown", "Codex", "Claude Code", "Human-in-the-loop"],
  featured: true,
  homeOrder: 3,
  overview:
    "AI-DLC는 AI를 단순 질의응답 도구로 쓰는 방식이 아니라, 업무 접수부터 분석, 검증, 커뮤니케이션, 지식 업데이트까지 이어지는 개발 생명주기에 AI를 통합하기 위해 직접 정의한 개인 엔지니어링 워크플로우.\n\n반복되는 연동 이슈, 테스트 오류, 데이터 반영 문제를 매번 새로 설명하지 않도록 업무 맥락, 판단 근거, 확인 절차를 Markdown 기반 지식으로 체계화하고, Codex/Claude Code가 같은 원칙을 참조하도록 정리.\n\n핵심은 AI가 결론을 대신 내리는 자동화가 아니라, AI가 제안한 원인 후보와 확인 순서를 사람이 코드, 쿼리, 배치 흐름, 테스트 결과로 검증하는 human-in-the-loop 구조.",
  problem:
    "실무 이슈는 규격, 코드, 데이터, 배치, 외부 커뮤니케이션이 함께 얽혀 있어 같은 유형의 문제도 도구와 세션마다 다른 방식으로 해석되기 쉬운 구조.\n\n동시에 민감한 운영 정보를 그대로 활용할 수 없기 때문에, AI가 읽을 수 있는 업무 맥락과 사람이 직접 검증해야 하는 내부 근거를 구분하는 체계가 필요.",
  role: [
    "연동 규격, 코드 흐름, 테스트 케이스, 오류 사례를 AI가 읽을 수 있는 Markdown 업무 지식으로 구조화",
    "Codex와 Claude Code가 동일한 업무 맥락을 참조하도록 진입 라우팅, 에이전트 규칙, 도메인 문서, 접근 경계를 목적별로 배치",
    "AI가 제안한 원인 후보를 컨트롤러, 서비스 로직, 배치, SQL, DB 상태, 테스트 결과를 근거로 재검증",
    "외부 제휴사 메일, Jira 댓글, 위키 문안에서 공개 가능한 설명과 내부 구현 정보를 명확히 구분"
  ],
  contributions: [
    "Context 단계에서 업무 요청, 관련 규격, 코드 흐름, 데이터 상태를 한 화면에서 따라갈 수 있는 형태로 정리",
    "Analyze 단계에서 원인 후보를 계층화하고 필요한 증거와 확인 순서를 먼저 좁힘",
    "Verify 단계에서 AI 제안을 결론으로 쓰지 않고 코드·쿼리·테스트로 반증 가능한 확인 항목에 연결",
    "Communicate 단계에서 AI 초안을 내부 구현 노출 없이 재현 정보, 확인 요청, 다음 액션 중심의 문안으로 재작성",
    "Learn 단계에서 새 오류 케이스와 AI 오판 결과를 Markdown 지식 베이스에 반영해 다음 분석의 판단 근거로 누적"
  ],
  devops: [
    "진입 라우팅(entry routing)으로 질문 유형별 우선 참조 문서를 지정해 AI가 필요한 업무 맥락부터 찾도록 구성",
    "에이전트 규칙(agent rules)으로 조회/쓰기 원칙, 변경 전 확인, 지식 업데이트 조건을 고정해 도구별 작업 방식을 일관화",
    "규격 문서와 도메인 지식을 나눠 필드, 응답 코드, 테스트 케이스, 시스템 흐름을 목적별로 참조 가능하게 구성",
    "접근 경계(access boundary)를 따로 두어 접속 값, 권한 정보, 내부 로그 원문 없이도 업무 흐름과 판단 근거를 설명할 수 있는 구조 마련"
  ],
  troubleshooting: [
    "AI 답변은 최종 결론이 아니라 원인 후보와 확인 순서로만 사용하고, 요청값·접속 조건·데이터 반영 조건은 코드·쿼리·테스트 결과로 반증하거나 확정한 뒤 검증된 확인 항목만 지식 베이스에 반영",
    "AI가 데이터 미반영 원인을 접속 조건으로 지목한 케이스에서 배치 재처리 흐름과 데이터 상태 확인으로 후보를 반증하고 실제 원인 계층을 확인한 뒤 동일 유형 확인 순서를 지식 베이스에 반영",
    "API, 배치, 데이터, 네트워크, 테스트 절차 중 어느 계층의 문제인지 먼저 구분해 확인 범위가 불필요하게 넓어지지 않도록 정리",
    "외부 제휴사에 전달 가능한 표현과 내부 구현 확인용 표현을 구분해 기술 커뮤니케이션 리스크를 낮추는 원칙 수립"
  ],
  results: [
    "프로시저와 Java 코드 흐름을 함께 추적해야 하는 데이터 이슈에서, 오류 데이터 기반 AI 후보 분석으로 초기 원인 후보 도출 시간을 수 시간 단위에서 수 분 단위로 줄이고 최종 판단은 코드·쿼리·테스트로 검증",
    "수작업으로 코드·데이터를 비교해야 하는 정합성 이슈에서 비교 포인트와 검증 경로를 먼저 정리해 초기 분석 범위 축소",
    "AI가 제시한 원인 후보를 코드·쿼리·테스트 확인 항목으로 전환해 탐색 범위를 좁히고 유사 케이스에서 재사용 가능한 검증 흐름 확보",
    "AI 오판과 반증 사례를 지식 베이스에 누적해 다음 분석에서 먼저 확인할 조건으로 재참조",
    "메일/Jira/위키 작성 흐름을 재현 정보, 확인 요청, 다음 액션 중심으로 정리해 외부 커뮤니케이션 초안 작성 속도와 품질 개선"
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
