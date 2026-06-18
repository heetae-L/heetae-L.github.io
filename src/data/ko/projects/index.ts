import type { ProjectsData } from "../../types";
import { aiDlcKnowledgeWorkflow } from "./ai-dlc-knowledge-workflow";
import { benepiaServiceOperations } from "./benepia-service-operations";
import { ktoHyugashopQualityReporting } from "./kto-hyugashop-quality-reporting";
import { partnerOrderProductIntegration } from "./partner-order-product-integration";
import { travelAiQaApi } from "./travel-ai-qa-api";

export const projects: ProjectsData = {
  eyebrow: "Selected Work",
  title: "Projects",
  description: "실제 서비스에서 마주친 연동, 커머스 서비스, 데이터 흐름, AI API 구축 사례",
  filters: [
    { key: "all", label: "All" },
    { key: "development", label: "Development" },
    { key: "integration", label: "Integration" },
    { key: "ai", label: "AI" },
    { key: "operations", label: "Operations" },
    { key: "devops", label: "DevOps" }
  ],
  items: [
    partnerOrderProductIntegration,
    travelAiQaApi,
    aiDlcKnowledgeWorkflow,
    ktoHyugashopQualityReporting,
    benepiaServiceOperations
  ]
};
