import type { ProjectData } from "../../types";

export const aiDlcKnowledgeWorkflow: ProjectData = {
  slug: "ai-dlc-knowledge-workflow",
  categories: ["ai"],
  icon: "brain",
  title: "AI-DLC: Personal AI-Assisted Engineering Workflow",
  summary:
    "A personal AI-assisted engineering workflow that runs AI-DLC through Context -> Analyze -> Verify -> Communicate -> Learn.",
  tags: ["Markdown", "Codex", "Claude Code", "Human-in-the-loop"],
  featured: true,
  homeOrder: 3,
  overview:
    "AI-DLC is a personal engineering workflow I defined to integrate AI into the development lifecycle, from work intake and analysis to verification, communication, and knowledge updates.\n\nInstead of repeatedly re-explaining recurring integration issues, test failures, or data reflection problems, the workflow turns work context, decision rationale, and verification steps into Markdown-based knowledge that Codex and Claude Code can reference consistently.\n\nThe core principle is human-in-the-loop engineering: AI proposes root-cause candidates and verification order, while the final judgment is validated through code, queries, batch flow, and test results.",
  problem:
    "Real-world engineering issues often span specifications, code paths, data state, batch jobs, and external communication, so the same type of issue can be interpreted differently across tools and sessions.\n\nAt the same time, sensitive operational details cannot be exposed directly. The workflow needed a clear boundary between AI-readable work context and internal evidence that must be verified by the engineer.",
  role: [
    "Structured integration specs, code flow, test cases, and error patterns as AI-readable Markdown knowledge",
    "Organized entry routing, agent rules, domain documents, and access boundaries so Codex and Claude Code can start from the same work context",
    "Re-verified AI-suggested root-cause candidates against controller flow, service logic, batch jobs, SQL, database state, and test results",
    "Separated public-facing explanations from internal implementation details across partner emails, Jira comments, and wiki drafts"
  ],
  contributions: [
    "Context: organized work requests, related specs, code flow, and data state into a single traceable working context",
    "Analyze: grouped root-cause candidates by layer and narrowed the evidence and verification order before touching code",
    "Verify: converted AI suggestions into falsifiable checks against code, queries, and tests instead of treating them as conclusions",
    "Communicate: rewrote AI-generated drafts into external-safe messages focused on reproduction details, confirmation requests, and next actions",
    "Learn: fed new error cases and AI misjudgments back into the Markdown knowledge base as reusable decision rationale"
  ],
  devops: [
    "Defined entry routing so AI tools can locate the most relevant work context first based on the question type",
    "Used agent rules to keep read/write behavior, pre-change checks, and knowledge-update conditions consistent across tools",
    "Separated specification documents from domain knowledge so fields, response codes, test cases, and system flow can be referenced by purpose",
    "Maintained access boundaries that explain work flow and decision rationale without exposing connection values, permissions, or raw internal logs"
  ],
  troubleshooting: [
    "Used AI responses only as root-cause candidates and verification order, then validated request values, connection conditions, and data reflection conditions through code, queries, and tests before adding confirmed checks to the knowledge base",
    "In a data-reflection issue, AI initially pointed to a connection condition; batch reprocessing flow and data-state checks disproved that candidate, identified the actual failure layer, and turned the verification order into a reusable checklist",
    "Classified whether an issue belonged to API, batch, data, network, or test procedure first, so the investigation scope did not expand unnecessarily",
    "Defined communication rules that separate partner-safe explanations from internal implementation notes"
  ],
  results: [
    "Reduced the first-pass analysis flow for routine operational issues from 30+ minutes of context gathering and verification-order planning to a 5-10 minute workflow using the existing knowledge base and AI candidate analysis",
    "Narrowed the initial analysis scope for data-consistency issues that require manual code and data comparison by organizing comparison points and verification paths first",
    "Turned AI-suggested causes into code, query, and test checkpoints to narrow the investigation scope and reuse the verification flow in similar cases",
    "Accumulated AI misjudgments and disproven candidates in the knowledge base as conditions to check earlier in future analysis",
    "Improved the speed and quality of external communication drafts by structuring them around reproduction details, confirmation requests, and next actions"
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
