import type { ProjectData } from "../../types";

export const ktoHyugashopQualityReporting: ProjectData = {
  slug: "kto-hyugashop-quality-reporting",
  categories: ["development", "operations"],
  icon: "cart",
  title: "KTO Hyugashop Web/App Commerce Service Development",
  summary:
    "Developed features for Korea Tourism Organization (KTO) Hyugashop's web and app commerce service, connecting user, admin, and client portal functions with product, order, benefit-point, and statistics data.",
  meta: {
    sourceType: "Professional Work",
    company: "SK M&Service",
    service: "KTO Hyugashop",
    period: "2024 - Present",
    role: "Software Engineer",
    scope: ["Web/App", "Admin", "Oracle", "Batch", "Statistics"],
    relatedExperience: "skmns"
  },
  tags: ["Java", "Spring Boot", "Oracle", "Batch", "Redis"],
  featured: true,
  homeOrder: 4,
  overview:
    "Korea Tourism Organization (KTO) Hyugashop is a web and app commerce service for an employee vacation support program. Participants use travel benefit points to purchase travel, accommodation, and leisure products within Korea.\n\nThe service connects product discovery, orders, point usage, and search results with admin pages, corporate client portals, APIs, database and batch processing, statistics, and reporting.\n\nSince April 2024, Hyugashop has been a primary area of responsibility. I have developed features for users, operators, and corporate clients, improving how data and changes are reflected across the UI, database, and batch processing.",
  problem:
    "Hyugashop feature changes affect multiple parts of the service: user and admin pages, client portals, APIs, database and batch processing, search results, and statistics.\n\nTravel benefit points total KRW 400,000: KRW 200,000 from the employee, KRW 100,000 from the employer, and KRW 100,000 from the government. Each funding source is tracked separately in the data. Orders, point usage, cancellations, and statistics must therefore follow the rules for each funding source and display consistent results in the UI.",
  role: [
    "Handled development and operations for KTO Hyugashop's web and app commerce service",
    "Clarified requirements and coordinated development scope across web and app features, admin pages, client portals, APIs, and database and batch processing",
    "Developed features connecting product, order, benefit-point, and statistics data with user interfaces and operational tools",
    "Developed operational features for managing unsuitable products, uploading message recipient lists, producing statistics for National Assembly data requests, and generating daily reports",
    "Continued KTO Hyugashop responsibilities while expanding into travel and leisure partner integrations and improvements to product and search rules"
  ],
  contributions: [
    "Distinguished employee, employer, and government funding sources in order and point usage records and statistical calculations so point flows could be tracked by source",
    "Built a workflow for managing unsuitable products, from keyword-based candidate identification and operator review to exclusion from display and search results",
    "Documented improvements to representative-product selection, duplicate-product handling, and search visibility as a Hyugashop product and search data case study",
    "Analyzed login sessions and caching for accommodation searches and external API responses in a service using Redis-backed Spring Session and Spring Cache, and developed and operated related features",
    "Used code and SQL to trace registration from client participant pre-registration and account creation through database procedures to KCB identity verification and account activation",
    "Implemented statistics for National Assembly data requests by reorganizing order and point source data by date, product type, region, and point group, with query and Excel export support",
    "Extended source-data loading and reporting criteria for daily reports, covering participating companies and employees, purchases and cancellations, and remaining point balances",
    "Turned recurring bulk processing into an admin feature for uploading message recipient lists from Excel"
  ],
  troubleshooting: [
    "Aligned order and point transaction data, participant criteria, product types, regions, and point groups when preparing statistics for National Assembly data requests",
    "Reorganized transactions containing employee-, employer-, and government-funded points according to statistical query and Excel export requirements, rather than simply summing all amounts",
    "Defined separate data checkpoints so daily report source data, order and point usage records, and public-sector statistics views could be interpreted consistently"
  ],
  results: [
    "Delivered features connecting user and admin functions with benefit-point and statistics data in KTO Hyugashop's web and app commerce service",
    "Implemented query and Excel export features for National Assembly data requests, order and point usage records, and daily reports",
    "Converted recurring bulk processing into Excel uploads and implemented operational features for unsuitable-product management and product and search rules",
    "Expanded backend responsibilities from KTO Hyugashop to travel and leisure partner integrations across employee-benefit and travel commerce"
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
    "Redis",
    "Admin / Client Portal",
    "Report / Source Data",
    "Point Funding Logic"
  ],
  architecture: ["KTO Hyugashop Web/App Commerce Service"],
  architectureGroups: [
    {
      title: "User Channel",
      items: ["Product Search / Visibility", "Orders / Cancellations", "Point Use / Balance"]
    },
    {
      title: "Operations Channel",
      items: ["Product / Visibility Management", "Bulk Operations", "Message Recipient Management"]
    },
    {
      title: "Client / Reporting Channel",
      items: ["Client Admin", "Order / Point Views", "Statistics / Public-sector Reporting"]
    },
    {
      title: "Service Integration Layer",
      items: ["UI APIs", "Search API Calls", "Admin / Client Feature Integration"]
    },
    {
      title: "Data Processing Foundation",
      items: ["Oracle DB", "Batch / Raw Data", "Order / Point / Statistics Criteria"]
    }
  ],
  architectureVariant: "hub",
  architectureCoreLabel: "Core Service",
  architectureNote: "KTO Hyugashop connects user, operator, and corporate client features with APIs, database operations, and batch data processing"
};
