import type { HomeData } from "../types";

export const home: HomeData = {
  badge: "Software Engineer",
  name: "Heetae Lee",
  role: "Software Engineer",
  headline: "Built to Run.\nDesigned to Last.",
  summary:
    "복잡한 요구사항을 단순한 구조로 정리하고,\n실제로 오래 돌아가는 백엔드 시스템을 만듭니다.",
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
    school: "소프트웨어학 학사",
    period: "2013.03 - 2019.02"
  },
  militaryService: {
    label: "Military Service",
    value: "2014.10 - 2016.07 · 육군 병장 만기전역"
  },
  certifications: [
    { name: "정보처리기사", issued: "2019.11" },
    { name: "SQLD", issued: "2024.09" }
  ],
  contact: [
    { label: "Email", value: "heetaelee93@gmail.com", href: "mailto:heetaelee93@gmail.com" },
    { label: "GitHub", value: "github.com/heetae-L", href: "https://github.com/heetae-L" },
    // { label: "LinkedIn", value: "linkedin.com/in/heetae-lee-33641b133", href: "https://www.linkedin.com/in/heetae-lee-33641b133/" }
  ]
};
