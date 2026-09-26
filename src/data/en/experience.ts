import type { ExperienceData } from "../types";

export const experience: ExperienceData = {
  eyebrow: "Career",
  title: "Work Experience",
  description:
    "Backend engineering experience designing, implementing, and operating product, order, and search workflows for employee-benefit and travel commerce platforms, including integrations with external partners.",
  items: [
    {
      period: "2021.12 - Present",
      startDate: "2021-12-06",
      company: "SK m&service",
      role: "Software Engineer",
      featured: true,
      homeOrder: 1,
      homeBullets: [
        "Built backend services connecting APIs, batch jobs, databases, search results, and admin features for employee-benefit and travel commerce platforms",
        "Designed and implemented product, order, and search data flows and external partner integrations to support service requirements",
        "Built a travel AI Q&A API with Python/Flask and Azure OpenAI and validated deployment using Docker, GitLab CI, and Nomad"
      ],
      bullets: [
        "Since 2026, have led development of product and order collection APIs, batch processing, and search result workflows for travel and leisure partner integrations while continuing web and app feature development for KTO Hyugashop",
        "Separated transaction boundaries between order persistence and follow-up processing so downstream failures would not affect the order transaction",
        "In 2025, expanded into travel and leisure partner integrations while retaining KTO Hyugashop responsibilities, organizing product, order, and search data processing around commerce service requirements",
        "Since April 2024, have developed KTO Hyugashop web and app features connecting user, admin, and corporate client functions with APIs, database and batch processing, benefit points, and statistics",
        "In the second half of 2023, developed the company's first AI API using Python/Flask and Azure OpenAI as part of a travel Q&A task force, taking it from implementation through deployment validation with Docker, GitLab CI, and Nomad",
        "From February 2022, developed client-specific features for Benepia's employee-benefit stores and integrated them with shared platform workflows",
        "Addressed ISMS and e-privacy security findings involving XSS/CSRF, access control, authentication, sessions, and information disclosure, accounting for their impact on service behavior"
      ]
    },
    {
      period: "2020.11 - 2021.06",
      startDate: "2020-11-09",
      endDate: "2021-06-11",
      company: "Hansung Enterprise",
      role: "Software Engineer",
      featured: true,
      homeOrder: 2,
      bullets: [
        "Developed internal logistics and order-management web systems for a food manufacturing and distribution company",
        "Expanded role-based access for an order-information system while working with internal business workflows and data-processing structures"
      ]
    }
  ]
};
