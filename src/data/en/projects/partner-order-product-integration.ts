import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  categories: ["development", "integration", "operations"],
  icon: "cart",
  title: "Travel & Leisure Partner Integration Platform",
  summary:
    "Developed order and product integrations with travel, accommodation, and leisure partners, improving API and batch reliability through transaction separation and isolation of malformed partner responses.",
  meta: {
    sourceType: "Professional Work",
    company: "SK M&Service",
    service: "Travel & Leisure Partner Integration",
    period: "2025 - Present",
    role: "Software Engineer",
    scope: ["Partner API", "Batch", "Oracle", "Search"],
    relatedExperience: "skmns"
  },
  tags: ["Java", "Spring Boot", "Oracle", "Batch", "Java Concurrency"],
  featured: true,
  homeOrder: 1,
  overview:
    "A backend integration project connecting travel, accommodation, and leisure partners through order and cancellation collection APIs, product collection batch jobs, integrated search, and redirects to partner sites on an employee-benefit and travel commerce platform.\n\nReal-time order collection runs alongside batch jobs that recover missed orders. Product data is stored, normalized, and prepared for search before appearing in the service. Adapted partner-specific response formats and product requirements to these processing steps, checking both database updates and actual search results.\n\nHandled new partner integrations alongside reliability improvements to existing processing. Focused on limiting the impact of external integration failures on core service operations by separating transaction boundaries, isolating malformed responses, and tracing search data.",
  problem:
    "Partner APIs, product data, and connectivity requirements varied, requiring explicit handling of integration-specific exceptions.\n\nSuccessful data collection alone did not establish that orders were saved or products appeared correctly in search. Verification needed to connect the outcomes of API calls, batch jobs, and database processing.",
  role: [
    "Expanded into partner integration while developing KTO Hyugashop services in 2025, then became the primary engineer for travel and leisure partner integration in 2026",
    "Led new integrations from requirements review through API and batch development, pre-launch verification, and production issue investigation",
    "Coordinated specifications, data processing results, and connectivity requirements with business teams and external partners, using code and data findings to guide technical decisions and responses"
  ],
  contributions: [
    "Developed and improved real-time order collection APIs and batch jobs that recover missed orders, verifying order and cancellation status and database updates",
    "Analyzed product collection, storage, normalization, and search-data generation, documenting how each partner's products reach the service and when to reprocess problem records",
    "Stabilized task registration order in asynchronous search and analyzed timeouts and result aggregation in CompletableFuture and WebClient call paths to implement new partner API integrations",
    "Distinguished search API calls from user-facing redirects, verifying menu visibility, partner settings, authentication, and connectivity at each stage",
    "Documented request and response specifications, exception cases, and pre-launch checks in a reusable integration guide"
  ],
  troubleshooting: [
    "Separated transaction boundaries between order persistence and follow-up processing so downstream failures would not affect the order transaction. Given the existing synchronous flow and scope of the change, designed and implemented a separate facade that invokes follow-up processing after the order is saved",
    "Validated required fields, arrays, and price formats in partner responses and isolated parsing failures per partner so a malformed response would not fail the entire search",
    "Investigated unexpected search results despite correct product mappings. Traced mapping data separately from post-processing and search-data generation, identifying the stage that created additional product records for search"
  ],
  results: [
    "Improved order-processing and integrated-search reliability by limiting the impact of downstream failures and malformed partner responses",
    "Established checkpoints from collection to search results to trace data inconsistencies and decide when reprocessing was needed",
    "Consolidated partner-specific integration requirements and exception cases into shared verification procedures and checklists, establishing reusable checks for onboarding new partners"
  ],
  devops: [
    "Checked integration settings for each environment and the direction of API calls to distinguish response-handling, network, and access issues",
    "Compared batch execution history with database results to determine whether problem records needed reprocessing and whether updates had been applied correctly",
    "Structured integration specifications and verification cases in Markdown, then personally checked AI-suggested causes against code, queries, and tests before applying them"
  ],
  sectionLabels: {
    devops: "Integration Reliability"
  },
  techStack: [
    "Java",
    "Spring Boot",
    "Spring Transaction",
    "Oracle",
    "MyBatis",
    "REST API",
    "Batch",
    "SQL",
    "Data Pipeline",
    "Java Concurrency",
    "CompletableFuture",
    "ThreadPoolTaskExecutor",
    "WebFlux",
    "WebClient"
  ],
  architecture: [
    "External Partner Systems",
    "Order API / Product Files",
    "API & Batch Ingestion",
    "Product Normalization / Oracle Flow",
    "Elasticsearch Search Records",
    "Parallel Partner Validation APIs",
    "Service Exposure / External Redirect"
  ],
  architectureNote: "API / Batch / DB / Elasticsearch / Partner API Reliability Checks"
};
