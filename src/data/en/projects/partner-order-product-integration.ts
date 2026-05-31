import type { ProjectData } from "../../types";

export const partnerOrderProductIntegration: ProjectData = {
  slug: "partner-order-product-integration",
  category: "Integration",
  icon: "cart",
  title: "Travel & Leisure Partner Integration Platform",
  summary:
    "Designed the backend integration that connects diverse travel, accommodation, and leisure partners to internal order, product, and search services — standardized as a repeatable onboarding and verification system rather than one-off integration work.",
  tags: ["Java", "Spring", "Oracle", "Batch"],
  featured: true,
  homeOrder: 1,
  overview:
    "Connected partner-provided order/cancellation data, product information, search exposure, and external redirect flows with internal APIs, batch jobs, databases, and search structures on a welfare/travel commerce platform.\n\nThe core value was designing integration as a reusable platform flow — so new partners could be onboarded reliably and operational issues diagnosed quickly — instead of treating each partner as a one-off task.",
  problem:
    "Every partner had different API response formats, file-transfer methods, product types, search conditions, and network policies, so the same integration approach could not be reused.\n\nA successful API response or a received file was not enough to prove the data actually reached the live service, so order, product, search, and network flows each needed layered verification.",
  role: [
    "Expanded into travel/leisure partner integration in 2025 while owning the Korea Tourism Organization (KTO) Hyugashop service",
    "Since 2026, designed and led new partner onboarding and owned root-cause separation and externally shareable communication standards for operational issues",
    "Standardized technical communication with business teams and external partners, delivering reproduction details (request timing, responses, network conditions) in a consistent format"
  ],
  contributions: [
    "Designed consistency-verification criteria for order, cancellation, and correction data where a real-time order API and a daily batch coexist",
    "Established an end-to-end verification flow — from file receipt to ingestion, reflection, post-processing, and search exposure — as a standard procedure",
    "Separated search-validation calls from user-facing external redirect paths so search-stage and redirect-stage errors could be diagnosed independently",
    "Built an analysis method for accommodation search discrepancies, including duplicate exposure, by tracing product-collection batches, accommodation mapping, search-record generation, and screen exposure layers",
    "Standardized the checks required for new partner onboarding into a reusable checklist and operational documentation"
  ],
  troubleshooting: [
    "Never assumed 'file received = correctly reflected' — followed each layer (ingestion → reflection → post-processing → search generation → exposure) to confirm where data actually landed",
    "Re-traced data-generation flows to isolate the real root-cause layer for issues that only looked like mapping failures on the surface, such as duplicate search exposure",
    "Checked firewall, proxy, and IP conditions by separating inbound (partner → platform collection) from outbound (platform → partner validation) directions",
    "Structured order/product collection specs, recurring issue patterns, and test procedures as Markdown-based working knowledge, then verified AI-DLC root-cause candidates with code, queries, and tests"
  ],
  results: [
    "Established a way to diagnose integration issues as reproducible units across API, batch, DB, search, and network layers — rather than from surface-level screen symptoms",
    "Turned new-partner onboarding and operational response into reusable standard procedures, cutting repetitive work and communication overhead",
    "Stabilized collaboration with partners and business teams by clearly separating technical-verification scope from externally shareable scope",
    "Operated travel/leisure integration as repeatable platform-oriented backend work instead of one-off issue handling"
  ],
  devops: [
    "Separated IP whitelists by runtime profile (production/development) to ease the conflict between operational security risk and testing convenience",
    "Defined firewall, proxy, source IP, and validation domains as explicit criteria for integration-failure diagnosis",
    "Standardized batch execution, failure history, DB reflection, and search generation as operational verification checkpoints"
  ],
  techStack: ["Java", "Spring", "Oracle", "MyBatis", "REST API", "Batch", "SQL", "Network / Firewall"],
  architecture: ["Partner Systems", "API / Batch Collection", "Product Mapping / Post-processing", "Oracle Data Flow", "Search Records / Exposure"],
  architectureNote: "Integration Connectivity Check"
};
