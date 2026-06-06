import type { ProjectData } from "../../types";

export const ktoHyugashopQualityReporting: ProjectData = {
  slug: "kto-hyugashop-quality-reporting",
  category: "Operations",
  icon: "chart",
  title: "KTO Hyugashop Service Development",
  summary: "Service development and quality-improvement work for Korea Tourism Organization (KTO) Hyugashop, a vacation-benefit shop for domestic travel and leisure products, covering data consistency, reporting, admin functions, and ISMS response alongside Benepia service work.",
  tags: ["Java", "Oracle", "Report", "Operations"],
  featured: true,
  homeOrder: 4,
  overview:
    "Worked across web, mobile, and admin screens, raw data, reports, and customer-support data that support KTO Hyugashop service delivery.\n\nFocused on service quality through product quality, statistics, reports, and operational data standards.",
  role: [
    "Developed feature improvements and handled service issues for KTO Hyugashop and Benepia",
    "Reviewed admin screens, data queries, and report-generation flows",
    "Prepared verification materials and reviewed system impact during ISMS response"
  ],
  contributions: [
    "Clarified data standards required for settlement, reporting, and customer-support workflows",
    "Tracked operational issues by separating screen, database, batch, and external-integration factors",
    "Documented data-check procedures and operating notes to reduce repeated requests"
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
  architectureNote: "Commerce service structure connecting user, operations, customer, API, and data-processing flows"
};
