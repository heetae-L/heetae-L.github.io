import type { ProjectsData } from "../../types";
import { aiDlcKnowledgeWorkflow } from "./ai-dlc-knowledge-workflow";
import { ktoHyugashopQualityReporting } from "./kto-hyugashop-quality-reporting";
import { partnerOrderProductIntegration } from "./partner-order-product-integration";
import { travelAiQaApi } from "./travel-ai-qa-api";

export const projects: ProjectsData = {
  eyebrow: "Selected Work",
  title: "Projects",
  description: "실제 서비스에서 마주친 연동, 커머스 서비스, 데이터 흐름, AI API 구축 사례",
  filters: ["All", "Integration", "Commerce", "AI", "Operations"],
  items: [
    partnerOrderProductIntegration,
    travelAiQaApi,
    aiDlcKnowledgeWorkflow,
    ktoHyugashopQualityReporting
  ]
};
