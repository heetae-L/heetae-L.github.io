import type { ProjectsData } from "../../types";
import { aiDlcKnowledgeWorkflow } from "./ai-dlc-knowledge-workflow";
import { ktoHygashopQualityReporting } from "./kto-hygashop-quality-reporting";
import { partnerOrderProductIntegration } from "./partner-order-product-integration";
import { tourgptAiChatbotApi } from "./tourgpt-ai-chatbot-api";

export const projects: ProjectsData = {
  eyebrow: "Selected Work",
  title: "Projects",
  description:
    "Engineering case studies that support the resume with practical backend problem solving.",
  filters: ["All", "Integration", "AI", "Operations"],
  items: [
    partnerOrderProductIntegration,
    tourgptAiChatbotApi,
    aiDlcKnowledgeWorkflow,
    ktoHygashopQualityReporting
  ]
};
