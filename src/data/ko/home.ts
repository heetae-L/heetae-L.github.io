import type { HomeData } from "../types";

export const home: HomeData = {
  badge: "Software Engineer",
  name: "Heetae Lee",
  role: "Software Engineer",
  headline: "신뢰할 수 있는 시스템을 만드는 엔지니어",
  summary:
    "비즈니스 흐름을 이해하고, 신뢰할 수 있는 시스템으로 구현하는 Software Engineer입니다.",
  careerSummaryTitle: "Career Summary",
  workTitle: "Work Experience",
  projectsTitle: "Core Projects",
  techTitle: "Tech Stack",
  educationTitle: "Education, Certifications & Contact",
  summaryCards: [
    {
      icon: "user",
      title: "5+ Years",
      description: "Software Engineering"
    },
    {
      icon: "link",
      title: "Backend",
      description: "Platform & Integration"
    },
    {
      icon: "code",
      title: "Java · Spring",
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
    lines: ["Partner APIs", "Batch Jobs", "Oracle Data Flow", "Docker Deploy", "AI Integration"]
  },
  education: {
    school: "소프트웨어학 학사",
    period: "2013.03 - 2019.02"
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
