import type { TechStackData } from "../types";

export const techStack: TechStackData = {
  eyebrow: "Skills",
  title: "Tech Stack",
  description: "실무에서 사용한 기술을 역할 중심으로 정리합니다.",
  groups: [
    {
      icon: "server",
      title: "Backend",
      featured: true,
      homeOrder: 1,
      items: ["Java", "Spring", "Spring Boot", "MyBatis", "REST API"]
    },
    {
      icon: "database",
      title: "Database",
      featured: true,
      homeOrder: 2,
      items: ["Oracle", "SQL", "PL/SQL"]
    },
    {
      icon: "cloud",
      title: "Infra / DevOps",
      featured: true,
      homeOrder: 3,
      items: ["Linux", "Docker", "GitLab CI/CD", "Nginx"]
    },
    {
      icon: "brain",
      title: "AI / Python",
      featured: true,
      homeOrder: 4,
      items: ["Python", "Flask", "Azure OpenAI"]
    }
  ]
};
