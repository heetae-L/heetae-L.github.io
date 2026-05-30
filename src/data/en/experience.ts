import type { ExperienceData } from "../types";

export const experience: ExperienceData = {
  eyebrow: "Career",
  title: "Work Experience",
  description:
    "A focused summary of backend development and operational engineering experience in production systems.",
  items: [
    {
      period: "2021.02 - Present",
      company: "Example Company",
      role: "Software Engineer",
      featured: true,
      homeOrder: 1,
      bullets: [
        "Designed and maintained APIs for order and product data integration",
        "Improved Oracle-based data processing flows for operational workloads",
        "Investigated production issues and refined internal operation tools",
        "Stabilized external service integrations and scheduled batch processes"
      ]
    }
  ]
};
