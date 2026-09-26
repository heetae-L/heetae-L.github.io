import type { ProjectData } from "../../types";

export const aiDlcKnowledgeWorkflow: ProjectData = {
  "slug": "ai-dlc-knowledge-workflow",
  "categories": [
    "ai"
  ],
  "icon": "brain",
  "featured": true,
  "homeOrder": 3,
  "title": "AI-DLC & AI Harness: Building an AI-Assisted Workflow",
  "summary": "Organized shared knowledge and verification criteria to support consistent use of AI for analysis, documentation, and knowledge reuse.",
  "meta": {
    "sourceType": "Personal Workflow",
    "service": "AI-DLC / AI Harness",
    "role": "Workflow Owner",
    "scope": [
      "Knowledge Design",
      "Codex",
      "Claude Code",
      "Human-in-the-loop"
    ]
  },
  "tags": [
    "AI-DLC",
    "AI Harness",
    "Knowledge Design",
    "Human-in-the-loop"
  ],
  "overview": "Built a personal workflow that uses AI for analysis, verification, communication, and knowledge updates.\n\nOrganized shared context and decision criteria for Codex and Claude Code so work can continue across tools and sessions.\n\nI check AI suggestions against evidence and retain verified decision criteria for future work.",
  "problem": "Complex work spans multiple systems and decision criteria. Switching tools or sessions meant explaining the context again and reconstructing earlier decisions. Shared knowledge, current work status, and verification criteria needed a consistent structure.",
  "role": [
    "Defined the context and rules needed for recurring tasks, and designed and improved the AI-assisted workflow",
    "Established a knowledge structure and maintenance principles so AI tools can reference shared context and decision criteria",
    "Checked AI suggestions against evidence and determined what to retain and what to do next"
  ],
  "contributions": [
    "Organized the context and verification criteria that AI tools should reference for each analysis",
    "Distinguished current status, confirmed findings, and open questions to support follow-up work",
    "Added verified decisions and error cases to shared knowledge for reuse"
  ],
  "devops": [
    "Set up shared knowledge for use across tools and sessions",
    "Defined how to maintain shared knowledge, task status, and verification criteria as distinct parts of the workflow",
    "Improved work rules and checks based on issues encountered during repeated use"
  ],
  "troubleshooting": [
    "Compared AI-suggested causes with evidence before reaching a conclusion",
    "Recorded unverified points for further investigation and made the scope of confirmed findings explicit",
    "Documented why judgments were incorrect and which checks to use in future analysis"
  ],
  "results": [
    "Established shared knowledge and work criteria to maintain context across tools and sessions",
    "Made verified decision criteria reusable in later analysis and recurring work",
    "Connected analysis, verification, documentation, and knowledge updates in one workflow"
  ],
  "sectionLabels": {
    "devops": "AI Harness Design",
    "troubleshooting": "Judgment and Verification"
  },
  "techStack": [
    "Codex",
    "Claude Code",
    "Markdown",
    "AI Harness",
    "Knowledge Design",
    "Human-in-the-loop"
  ],
  "architecture": [
    "Work Context",
    "AI-Assisted Analysis",
    "Evidence Verification",
    "Result Documentation",
    "Knowledge Reuse"
  ],
  "architectureNote": "Context → Analyze → Verify → Communicate → Learn"
};
