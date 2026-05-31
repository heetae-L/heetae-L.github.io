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
  educationTitle: "Education & Contact",
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
    school: "컴퓨터공학 학사",
    period: "2016.03 - 2021.02"
  },
  contact: [
    { label: "Email", value: "ht9407@gmail.com", href: "mailto:ht9407@gmail.com" },
    { label: "GitHub", value: "github.com/heetae-L", href: "https://github.com/heetae-L" },
    { label: "LinkedIn", value: "linkedin.com/in/heetae-lee", href: "https://linkedin.com" }
  ]
};
