import type { HomeData } from "../types";

export const home: HomeData = {
  badge: "Software Engineer",
  name: "Heetae Lee",
  role: "Software Engineer",
  headline: "Built to Run.\nDesigned to Last.",
  summary:
    "I organize complex requirements into simple structures and build backend systems that keep running in real service environments.",
  careerSummaryTitle: "Career Summary",
  workTitle: "Work Experience",
  projectsTitle: "Core Projects",
  techTitle: "Tech Stack",
  educationTitle: "Education, Certifications & Contact",
  heroSignals: [
    {
      icon: "server",
      title: "Backend Engineering",
      description: "API · Batch · DB"
    },
    {
      icon: "link",
      title: "API Integration",
      description: "Service · Partner"
    },
    {
      icon: "database",
      title: "Data Flow",
      description: "Process · Verify"
    },
    {
      icon: "chart",
      title: "Issue Analysis",
      description: "Trace · Improve"
    }
  ],
  summaryCards: [
    {
      icon: "user",
      title: "5+ Years",
      description: "Software Engineering"
    },
    {
      icon: "link",
      title: "Partner Integration",
      description: "API · Batch · Search"
    },
    {
      icon: "code",
      title: "Java · Spring Boot",
      description: "Oracle · MyBatis"
    },
    {
      icon: "sparkles",
      title: "AI API",
      description: "Flask · Docker"
    }
  ],
  visual: {
    title: "Backend-focused engineering profile",
    lines: ["analyze();", "designFlow();", "implement();", "deploy();", "monitor();", "improve();"]
  },
  education: {
    school: "B.S. in Software Engineering",
    period: "2013.03 - 2019.02"
  },
  militaryService: {
    label: "Military Service",
    value: "2014.10 - 2016.07 · ROK Army, Sergeant, Honorable Discharge"
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
