import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  category: "Integration",
  icon: "cart",
  title: "Partner Order/Product Integration",
  summary:
    "A backend integration project for synchronizing partner order and product data with internal systems.",
  tags: ["Java", "Spring", "Oracle", "MyBatis"],
  featured: true,
  homeOrder: 1,
  overview:
    "Designed API and batch processing flows to collect partner order and product data and synchronize it with internal operation systems.",
  role: [
    "Designed request and response models for integration APIs",
    "Defined batch processing flow and exception handling rules",
    "Investigated data mismatch issues observed in production"
  ],
  contributions: [
    "Separated duplicate handling and retry criteria into explicit flows",
    "Added traceable logs and operational status values",
    "Improved validation queries and review workflows for data consistency"
  ],
  architecture: ["Partner API", "Collector API", "Queue", "Batch Processor", "Oracle DB"]
};
