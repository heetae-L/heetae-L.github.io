import type { ExperienceData } from "../types";

export const experience: ExperienceData = {
  eyebrow: "Career",
  title: "Work Experience",
  description:
    "A backend career connecting and stabilizing product, order, and search flows for welfare and travel commerce through service development and partner integrations.",
  items: [
    {
      period: "2021.12 - Present",
      startDate: "2021-12-06",
      company: "SK m&service",
      role: "Software Engineer",
      featured: true,
      homeOrder: 1,
      homeBullets: [
        "Developed backend services connecting APIs, batch jobs, databases, search exposure, and admin operations for welfare and travel commerce platforms",
        "Designed, operated, and improved product, order, search-data, and external partner-integration flows from a service perspective",
        "Built a Travel AI Q&A API with Python/Flask and Azure OpenAI, covering Docker, GitLab CI, and Nomad deployment validation"
      ],
      bullets: [
        "Since 2026, have led travel and leisure partner integrations across product/order collection APIs, batch flows, and search exposure while continuing KTO Hyugashop web/app service development",
        "In 2025, expanded from KTO Hyugashop into travel and leisure partner integrations, structuring partner-facing product, order, and search-data flows around commerce-service requirements",
        "Since 2024.04, have developed KTO Hyugashop web/app commerce service features across user/admin/customer screens, APIs, DB/batch flows, point usage, and statistics",
        "In 2023 H2, developed the company's first Python/Flask and Azure OpenAI based AI API project, covering Docker, GitLab CI, and Nomad deployment validation end-to-end",
        "Since 2022.02, owned Benepia welfare-commerce service development, building and operating customer-specific welfare-mall features",
        "Resolved ISMS and e-privacy security findings across XSS/CSRF, access control, authentication/session behavior, and information exposure while preserving service behavior"
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
        "Developed and operated internal logistics and order-management web systems for a food manufacturing and distribution company",
        "Expanded role-based access for an order-information system while working with internal business workflows and data-processing structures"
      ]
    }
  ]
};
