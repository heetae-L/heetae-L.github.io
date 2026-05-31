import type { ProjectData } from "../../types";

export const travelAiQaApi: ProjectData = {
  slug: "travel-ai-qa-api",
  category: "AI",
  icon: "bot",
  title: "Travel AI Q&A API",
  summary: "A Flask-based travel Q&A API project connecting Azure OpenAI calls, response status design, Oracle persistence, and deployment validation.",
  tags: ["Python", "Flask", "Azure OpenAI"],
  featured: true,
  homeOrder: 2,
  overview:
    "Built a travel Q&A API internally referred to as TourGPT, connecting Flask, Azure OpenAI, conversation history persistence, and Docker/GitLab CI/Nomad deployment validation."
};
