import type { ProjectData } from "../../types";

export const aiDlcKnowledgeWorkflow: ProjectData = {
  slug: "ai-dlc-knowledge-workflow",
  category: "AI",
  icon: "brain",
  title: "AI-DLC Knowledge Workflow",
  summary: "A personal project that turns work context, issue causes, and decision criteria into a reusable Markdown-based analysis workflow with AI.",
  tags: ["Markdown", "AI", "Knowledge Base", "Workflow"],
  featured: true,
  homeOrder: 3,
  overview:
    "A personal knowledge system for turning complex work experience into reusable issue-analysis methods and decision criteria without exposing internal company details.",
  role: [
    "Designed Markdown document structures and TODO-management rules by work unit",
    "Separated problem context, likely causes, and verification results into an AI-readable format",
    "Distinguished public portfolio wording from internal-only information"
  ],
  contributions: [
    "Organized fragmented work experience into case-study candidates",
    "Built a context hub to avoid repeatedly explaining the same background during AI collaboration",
    "Established wording guidelines that present technical experience clearly to recruiters without overstating it"
  ],
  architecture: ["Work Notes", "Markdown Hub", "AI Review", "Human Editing", "Portfolio Content"]
};
