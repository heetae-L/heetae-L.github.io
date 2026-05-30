import type { ProjectsData } from "../../types";
import { dbLockPerformanceImprovement } from "./db-lock-performance-improvement";
import { deploymentExperience } from "./deployment-experience";
import { partnerOrderProductIntegration } from "./partner-order-product-integration";
import { tourgptAiChatbotApi } from "./tourgpt-ai-chatbot-api";

export const projects: ProjectsData = {
  eyebrow: "Selected Work",
  title: "Projects",
  description:
    "Engineering case studies that support the resume with practical backend problem solving.",
  filters: ["All", "Integration", "AI", "Database", "DevOps"],
  items: [
    partnerOrderProductIntegration,
    tourgptAiChatbotApi,
    dbLockPerformanceImprovement,
    deploymentExperience
  ]
};
