import type { ProjectsData } from "../../types";
import { dbLockPerformanceImprovement } from "./db-lock-performance-improvement";
import { deploymentExperience } from "./deployment-experience";
import { partnerOrderProductIntegration } from "./partner-order-product-integration";
import { tourgptAiChatbotApi } from "./tourgpt-ai-chatbot-api";

export const projects: ProjectsData = {
  eyebrow: "Selected Work",
  title: "Projects",
  description: "실제 업무에서 마주친 문제를 기술적으로 해결한 사례를 정리합니다.",
  filters: ["All", "Integration", "AI", "Database", "DevOps"],
  items: [
    partnerOrderProductIntegration,
    tourgptAiChatbotApi,
    dbLockPerformanceImprovement,
    deploymentExperience
  ]
};
