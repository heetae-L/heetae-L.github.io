import type { ProjectsData } from "../../types";
import { aiDlcKnowledgeWorkflow } from "./ai-dlc-knowledge-workflow";
import { benepiaServiceOperations } from "./benepia-service-operations";
import { ktoHyugashopQualityReporting } from "./kto-hyugashop-quality-reporting";
import { partnerOrderProductIntegration } from "./partner-order-product-integration";
import { travelAiQaApi } from "./travel-ai-qa-api";

export const projects: ProjectsData = {
  eyebrow: "Selected Work",
  title: "Projects",
  description:
    "Case studies from real service work covering integrations, commerce services, data flows, and AI APIs.",
  filters: ["All", "Integration", "Commerce", "AI", "Operations"],
  items: [
    partnerOrderProductIntegration,
    travelAiQaApi,
    aiDlcKnowledgeWorkflow,
    ktoHyugashopQualityReporting,
    benepiaServiceOperations
  ]
};
