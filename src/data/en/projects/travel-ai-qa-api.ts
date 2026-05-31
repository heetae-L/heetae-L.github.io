import type { ProjectData } from "../../types";

export const travelAiQaApi: ProjectData = {
  slug: "travel-ai-qa-api",
  category: "AI",
  icon: "bot",
  title: "Travel AI Q&A API Development",
  summary: "A Python/Flask-based travel Q&A API project connecting Azure OpenAI calls, response-status design, Oracle persistence, and Docker/Nomad deployment validation.",
  tags: ["Python", "Flask", "Azure OpenAI", "Docker"],
  featured: true,
  homeOrder: 2,
  overview:
    "Built a travel Q&A API, internally referred to as TourGPT during the TF, and connected Flask API development, Azure OpenAI integration, conversation-history persistence, and Docker/GitLab CI/Nomad deployment validation.",
  role: [
    "Designed the scope for a domestic travel Q&A service and the request/response JSON structure",
    "Implemented a two-step GPT call flow that separates travel-question classification from answer generation",
    "Validated production concerns around proxy settings, Oracle client, logging, and health checks"
  ],
  contributions: [
    "Controlled service scope by separating question eligibility checks from answer generation",
    "Built conversation-history persistence and a session-cache structure",
    "Validated operation-ready deployment with Docker images, GitLab CI, Nomad jobs, and health checks",
    "Identified improvements for secret separation, dependency reproducibility, and schema validation during initial AI API operationalization"
  ],
  architecture: ["Client", "Flask API", "Azure OpenAI", "Session Store", "Nomad Deploy"]
};
