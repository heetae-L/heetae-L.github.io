import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  category: "Integration",
  icon: "cart",
  title: "Travel & Leisure Partner Integration",
  summary:
    "A representative backend integration project connecting travel, accommodation, and leisure partner order/product/search flows across APIs, batch jobs, databases, and search exposure.",
  tags: ["Java", "Spring", "Oracle", "Batch"],
  featured: true,
  homeOrder: 1,
  overview:
    "Worked across order collection APIs, product collection batches, accommodation product mapping, search exposure, external redirects, and IP whitelist flows in the travel/leisure partner-integration domain of a welfare and travel platform.",
  role: [
    "Expanded the partner-integration scope in parallel with KTO Hyugashop work in 2025",
    "Since 2026, have led travel/leisure partner integrations, including new integration onboarding and operational issue response",
    "Organized technical checks and reproduction details for communication with business teams and external partners"
  ],
  contributions: [
    "Defined consistency checks between real-time order APIs and daily order batches",
    "Separated the product flow into source ingestion, product reflection, post-processing, and search-data generation",
    "Traced cases where accommodation mapping was correct but search results differed through data-generation and screen-call flows",
    "Reduced integration risk by separating development/production IP whitelists and validating network conditions"
  ],
  architecture: ["Partner API", "Order Collector", "Product Batch", "Oracle DB", "Search Exposure"]
};
