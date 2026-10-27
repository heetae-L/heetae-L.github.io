import type { ProjectsData } from "../../types";
import { aiDlcKnowledgeWorkflow } from "./ai-dlc-knowledge-workflow";
import { benepiaServiceOperations } from "./benepia-service-operations";
import { duoFlex } from "./duo-flex";
import { ktoHyugashopQualityReporting } from "./kto-hyugashop-quality-reporting";
import { partnerOrderProductIntegration } from "./partner-order-product-integration";
import { travelAiQaApi } from "./travel-ai-qa-api";

export const projects: ProjectsData = {
  eyebrow: "Selected Work",
  title: "Projects",
  description: "서비스 연동·데이터 흐름·AI API 구축 사례와 개인 제품 개발·출시 경험",
  filters: [
    { key: "all", label: "All" },
    { key: "development", label: "Development" },
    { key: "integration", label: "Integration" },
    { key: "ai", label: "AI" },
    { key: "operations", label: "Operations" },
    { key: "devops", label: "DevOps" },
    { key: "personal", label: "Personal" }
  ],
  items: [
    partnerOrderProductIntegration,
    travelAiQaApi,
    aiDlcKnowledgeWorkflow,
    ktoHyugashopQualityReporting,
    benepiaServiceOperations,
    duoFlex
  ]
};
