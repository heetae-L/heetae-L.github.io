import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  categories: ["development", "integration", "operations"],
  icon: "cart",
  title: "Travel & Leisure Partner Integration Platform",
  summary:
    "Backend integration platform project connecting multiple travel, accommodation, and leisure partners to order, product, and search flows, verifying recurring partner data and a large product pool across API, batch, database, and search-exposure criteria.",
  meta: {
    sourceType: "Professional Work",
    company: "SK M&Service",
    service: "Travel & Leisure Partner Integration",
    period: "2025 - Present",
    role: "Software Engineer",
    scope: ["Partner API", "Batch", "Oracle", "Search"],
    relatedExperience: "skmns"
  },
  tags: ["Java", "Spring Boot", "Oracle", "Batch"],
  featured: true,
  homeOrder: 1,
  overview:
    "Connected partner-provided order/cancellation data, product information, search exposure, and external redirect flows with internal APIs, batch jobs, databases, and search structures on an employee-benefit and travel commerce platform.\n\nWorked in an environment where order and product data from multiple partners repeatedly flowed through real-time APIs and scheduled batches, verifying API responses, batch correction, DB persistence, exception-data reprocessing, product normalization, and search-exposure criteria together.\n\nThe core value was platformizing partner integration: not a one-off feature build, but a shared backend verification flow for onboarding new partners and absorbing partner-specific integration differences.",
  problem:
    "Each partner had different API response formats, file-transfer methods, product types, search conditions, and connectivity requirements, so a one-off integration approach could not guarantee consistent service quality.\n\nEven when data was received successfully, the platform still needed to verify that orders, products, and search exposure were reflected consistently across API, batch, database, and search layers.",
  role: [
    "Expanded responsibility into travel/leisure partner integration while continuing service development for Korea Tourism Organization (KTO) Hyugashop",
    "Since 2026, designed and led new partner onboarding while owning integration-quality criteria and partner-facing technical communication standards",
    "Standardized communication with business teams and external partners by sharing request/response context, data state, and connectivity conditions in a consistent format"
  ],
  contributions: [
    "Designed consistency-verification criteria for order, cancellation, and correction data where a real-time order API and a daily batch coexist",
    "Established criteria for API responses, batch correction, DB persistence, and exception-data reprocessing across recurring partner order and product flows",
    "Standardized an end-to-end data verification flow for a large product pool, from file receipt to ingestion, normalization, post-processing, and search exposure",
    "Separated search-validation calls from user-facing external redirect paths so search quality and partner redirect quality could be verified independently",
    "Established an analysis standard for duplicate or inconsistent search results by separating product collection, data normalization, search-record generation, and screen exposure layers",
    "Standardized the checks required for new partner onboarding into a reusable checklist and integration-verification guide"
  ],
  troubleshooting: [
    "Built a verification model that follows data from ingestion through normalization, post-processing, search-record generation, and service exposure",
    "Defined root-cause analysis criteria for duplicate or inconsistent search results by separating product collection, data normalization, search-record generation, and screen exposure stages",
    "Separated collection direction and validation direction to classify partner-integration inconsistencies across data, API response, and connectivity layers",
    "Structured recurring verification cases and procedures as a Markdown knowledge base, then validated AI-DLC root-cause candidates with code, queries, and tests"
  ],
  results: [
    "Built a reusable partner-integration verification flow and checklist for new partner onboarding, turning partner-specific handling into a repeatable structure",
    "Clarified observation points across order, product, and search-data flows to narrow the investigation scope when data inconsistencies occur",
    "Established a verification system for consistently managing API, batch, database, and search-exposure criteria across large recurring order and product data flows",
    "Improved partner collaboration quality by defining technical criteria that business teams and external partners could share"
  ],
  devops: [
    "Separated integration settings by environment to manage test stability and service risk",
    "Defined partner-call direction, data verification criteria, and connectivity requirements as explicit integration-quality checks",
    "Standardized batch execution, exception history, DB persistence, and search-record generation as service data verification checkpoints"
  ],
  sectionLabels: {
    devops: "Integration Reliability"
  },
  techStack: ["Java", "Spring Boot", "Oracle", "MyBatis", "REST API", "Batch", "SQL", "Data Pipeline"],
  architecture: [
    "External Partner Systems",
    "Order API / Product Files",
    "API & Batch Ingestion",
    "Product Normalization / Oracle Flow",
    "Search Records / Validation API",
    "Service Exposure / External Redirect"
  ],
  architectureNote: "API / Batch / DB / Search Reliability Checks"
};
