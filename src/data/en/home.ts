import type { HomeData } from "../types";

export const home: HomeData = {
  badge: "Software Engineer",
  name: "Heetae Lee",
  role: "Software Engineer",
  headline: "Building reliable software systems",
  summary:
    "I understand business workflows and turn them into reliable software systems.",
  careerSummaryTitle: "Career Summary",
  workTitle: "Work Experience",
  projectsTitle: "Core Projects",
  techTitle: "Tech Stack",
  educationTitle: "Education, Certifications & Contact",
  summaryCards: [
    {
      icon: "user",
      title: "4+ Years",
      description: "of Experience"
    },
    {
      icon: "link",
      title: "Integration",
      description: "Operation Focus"
    },
    {
      icon: "code",
      title: "Java · Spring",
      description: "Oracle · MyBatis"
    },
    {
      icon: "sparkles",
      title: "AI API",
      description: "Backend Integration"
    }
  ],
  visual: {
    title: "Resume-first engineering profile",
    lines: ["Order API", "Batch Processor", "Oracle DB", "Monitoring", "AI Integration"]
  },
  education: {
    school: "B.S. in Software",
    period: "2013.03 - 2019.02"
  },
  certifications: [
    { name: "Information Processing Engineer", issued: "2019.11" },
    { name: "SQLD", issued: "2024.09" }
  ],
  contact: [
    { label: "Email", value: "heetaelee93@gmail.com", href: "mailto:heetaelee93@gmail.com" },
    { label: "GitHub", value: "github.com/heetae-L", href: "https://github.com/heetae-L" },
    // { label: "LinkedIn", value: "linkedin.com/in/heetae-lee-33641b133", href: "https://www.linkedin.com/in/heetae-lee-33641b133/" }
  ]
};
