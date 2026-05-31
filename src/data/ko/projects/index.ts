import type { ProjectsData } from "../../types";
import { aiDlcKnowledgeWorkflow } from "./ai-dlc-knowledge-workflow";
import { ktoHygashopQualityReporting } from "./kto-hygashop-quality-reporting";
import { partnerOrderProductIntegration } from "./partner-order-product-integration";
import { tourgptAiChatbotApi } from "./tourgpt-ai-chatbot-api";

export const projects: ProjectsData = {
  eyebrow: "Selected Work",
  title: "Projects",
  description: "실제 서비스에서 마주친 연동, 데이터 흐름, AI API, 운영 품질 개선 사례를 정리합니다.",
  filters: ["All", "Integration", "AI", "Operations"],
  items: [
    partnerOrderProductIntegration,
    tourgptAiChatbotApi,
    aiDlcKnowledgeWorkflow,
    ktoHygashopQualityReporting
  ]
};
