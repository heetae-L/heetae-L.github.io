import type { ProjectData } from "../../types";

export const ktoHyugashopQualityReporting: ProjectData = {
  slug: "kto-hyugashop-quality-reporting",
  categories: ["development", "operations"],
  icon: "cart",
  title: "KTO Hyugashop Web/App Commerce Service Development",
  summary:
    "Feature development for Korea Tourism Organization (KTO) Hyugashop, connecting user, admin, and customer-portal functions with product, order, point, and statistics data flows.",
  meta: {
    sourceType: "Professional Work",
    company: "SK M&Service",
    service: "KTO Hyugashop",
    period: "2024 - Present",
    role: "Software Engineer",
    scope: ["Web/App", "Admin", "Oracle", "Batch", "Statistics"],
    relatedExperience: "skmns"
  },
  tags: ["Java", "Spring Boot", "Oracle", "Batch"],
  featured: true,
  homeOrder: 4,
  overview:
    "Korea Tourism Organization (KTO) Hyugashop is a vacation-benefit web/app commerce service where participating employees use travel points to purchase domestic travel, lodging, and leisure products.\n\nThe service connects product discovery, order and point usage, search exposure, admin screens, customer portals, APIs, DB/batch processing, statistics, and reporting flows.\n\nSince April 2024, I have worked on the Hyugashop service track, developing user-facing, operations-facing, and customer-facing features while improving how screen changes are reflected through DB/batch flows.",
  problem:
    "Hyugashop feature changes rarely stop at a single screen. User screens, admin screens, customer portals, APIs, DB/batch jobs, search exposure, and statistics data often move together.\n\nTravel benefit points are structured as KRW 200,000 from the employee, KRW 100,000 from the employer, and KRW 100,000 from the government. Because each funding source is separated internally, order, usage, cancellation, and statistics flows require more than simple amount aggregation; they need to align funding-source handling with how results are reflected in service screens.",
  role: [
    "Handled development and operations for the KTO Hyugashop web/app commerce service",
    "Coordinated functional requirements and development scope across web/app, admin screens, customer portals, APIs, and DB/batch flows",
    "Developed service features by connecting how product, order, point, and statistics data are reflected in screens and operations functions",
    "Developed operations-facing feature projects including unsuitable-product management, message-target uploads, National Assembly statistics, and daily reporting",
    "Continued KTO Hyugashop responsibilities while expanding into travel/leisure partner integration and product/search refinement"
  ],
  contributions: [
    "Reflected employee, employer, and government funding-source point structures in order/point usage views and statistics flows",
    "Built an unsuitable-product management flow connecting keyword-based candidate review, operator decisions, and exposure-exclusion handling",
    "Refined representative-product, duplicate-product, and search-exposure criteria as a Hyugashop product/search data improvement case",
    "Implemented a National Assembly statistics workflow by restructuring order and point source data by date, product type, region, and point group, then connecting it to query and Excel export flows",
    "Extended daily report source-data loading and statistics screen criteria for participating companies/workers, purchases/cancellations, and remaining-point ranges",
    "Converted repeated bulk-processing work into admin functionality through Excel upload for message target lists"
  ],
  troubleshooting: [
    "Structured the National Assembly statistics flow around order/point transaction sources, participant criteria, product type, region, and point group",
    "Reworked mixed employee, employer, and government point transactions so they could be queried and exported through a consistent statistics flow",
    "Separated validation checkpoints across daily report source data, order/point usage views, and public-sector statistics screens"
  ],
  results: [
    "Implemented feature projects connecting user-facing features, admin features, and point/statistics data flows in the KTO Hyugashop web/app commerce service",
    "Implemented public reporting flows such as National Assembly statistics, order/point usage views, and daily reports with query and Excel export support",
    "Converted repeated bulk-processing work into Excel-upload functionality and implemented operations features for unsuitable-product management and product/search refinement",
    "Expanded backend responsibility from the KTO Hyugashop service scope into travel/leisure partner integration across welfare and travel commerce"
  ],
  sectionLabels: {
    problem: "Service Context",
    contributions: "Representative Feature Projects",
    troubleshooting: "Deep Dive"
  },
  techStack: [
    "Java",
    "Spring Boot",
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
  architectureNote: "KTO Hyugashop Web/App Service connecting user, operations, customer, API, DB, and batch data flows"
};
