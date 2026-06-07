import type { ProjectData } from "../../types";

export const ktoHyugashopQualityReporting: ProjectData = {
  slug: "kto-hyugashop-quality-reporting",
  category: "Commerce",
  icon: "cart",
  title: "KTO Hyugashop Web/App Commerce Service Development",
  summary:
    "Service development experience across user web/app channels, operations/customer channels, APIs, DB/batch flows, and point/statistics data for Korea Tourism Organization (KTO) Hyugashop, a vacation-benefit commerce service.",
  tags: ["Java", "Spring", "Oracle", "Batch"],
  featured: true,
  homeOrder: 4,
  overview:
    "Korea Tourism Organization (KTO) Hyugashop is a vacation-benefit web/app commerce service where participating employees use travel points to purchase domestic travel, lodging, and leisure products.\n\nThe service connects product discovery, order and point usage, search exposure, admin/customer portals, APIs, DB/batch processing, statistics, and reporting flows.\n\nSince April 2024, I have worked across both user-facing and operations-facing channels, developing service features, refining data criteria, and improving screen-to-batch data flows.",
  problem:
    "Hyugashop changes rarely stop at a single screen. Web/app screens, admin tools, customer portals, APIs, DB/batch jobs, search exposure, and statistics data often move together.\n\nTravel benefit points are structured as KRW 200,000 from the employee, KRW 100,000 from the employer, and KRW 100,000 from the government. Because each funding source has its own point criteria, order, usage, cancellation, and statistics flows require more than simple amount aggregation; they need to match service screens and funding-source rules.",
  role: [
    "Owned KTO Hyugashop web/app commerce service development across user and operations channels",
    "Translated requirements into feature and data criteria across web/app screens, admin screens, customer portals, APIs, and DB/batch flows",
    "Developed service features while validating how product, order, point, and statistics data are reflected in user and operations workflows",
    "Continued KTO Hyugashop service ownership while extending responsibility into travel/leisure partner integration and product/search criteria refinement"
  ],
  contributions: [
    "Built an unsuitable-product management flow connecting keyword-based candidate review, operator decisions, and exposure-exclusion criteria",
    "Implemented Excel upload workflow for message target lists, turning repeated bulk admin work into a system-supported process",
    "Built a public-sector statistics workflow for National Assembly data requests by restructuring order and point transaction sources by date, product type, region, and point group, then connecting the flow to search and Excel export",
    "Extended daily report source-data loading and statistics screen criteria for participating companies/workers, purchases/cancellations, and remaining-point ranges",
    "Validated order/point usage history and statistics criteria with source-specific employee, employer, and government point structures",
    "Refined representative-product, duplicate-product, and search-exposure criteria to improve product data and service exposure flows"
  ],
  troubleshooting: [
    "Covered user-facing product discovery, order, and point-usage flows together with admin and customer-portal management flows",
    "Traced product, order, point, member, and statistics data across APIs, Oracle DB, batch jobs, and reporting screens",
    "Reviewed feature changes for impact across user screens, admin/customer screens, statistics criteria, and search/exposure criteria"
  ],
  results: [
    "Delivered commerce-service features connecting web/app user channels with operations and customer channels",
    "Strengthened service data criteria so product, order, point, and statistics data are reflected consistently across screens, admin functions, and batch flows",
    "Shipped practical service features including message target upload, National Assembly statistics, daily reporting, and product/search criteria refinement",
    "Expanded backend responsibility from KTO Hyugashop service ownership into travel/leisure partner integration across welfare and travel commerce"
  ],
  sectionLabels: {
    problem: "Service Context",
    contributions: "Representative Feature Projects",
    troubleshooting: "Service Ownership"
  },
  techStack: [
    "Java",
    "Spring",
    "Oracle",
    "MyBatis",
    "SQL",
    "Batch",
    "Admin / Customer Portal",
    "Report / Source Data",
    "Point Funding Logic"
  ],
  architecture: ["KTO Hyugashop Web/App Commerce Service"],
  architectureGroups: [
    {
      title: "User Channel",
      items: ["Product Search / Exposure", "Orders / Cancellations", "Point Use / Balance"]
    },
    {
      title: "Operations Channel",
      items: ["Product / Exposure Management", "Operator Bulk Processing", "Message Target Management"]
    },
    {
      title: "Customer / Reporting Channel",
      items: ["Customer Admin", "Order / Point Views", "Statistics / Public-sector Reporting"]
    },
    {
      title: "Service Integration Layer",
      items: ["Screen APIs", "Search API Calls", "Admin / Customer Feature Integration"]
    },
    {
      title: "Data Processing Foundation",
      items: ["Oracle DB", "Batch / Raw Data", "Order / Point / Statistics Criteria"]
    }
  ],
  architectureVariant: "hub",
  architectureCoreLabel: "Core Service",
  architectureNote: "KTO Hyugashop Web/App Service connecting user, operations, customer, API, DB, and batch data criteria"
};
