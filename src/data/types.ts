export interface SummaryCardData {
  icon: string;
  title: string;
  description: string;
}

export interface ContactLinkData {
  label: string;
  value: string;
  href: string;
}

export interface HomeData {
  badge: string;
  name: string;
  role: string;
  headline: string;
  summary: string;
  careerSummaryTitle: string;
  workTitle: string;
  projectsTitle: string;
  techTitle: string;
  educationTitle: string;
  summaryCards: SummaryCardData[];
  visual: {
    title: string;
    lines: string[];
  };
  education: {
    school: string;
    period: string;
  };
  contact: ContactLinkData[];
}

export interface ExperienceItemData {
  period: string;
  company: string;
  role: string;
  bullets: string[];
  featured?: boolean;
  homeOrder?: number;
}

export interface ExperienceData {
  eyebrow: string;
  title: string;
  description: string;
  items: ExperienceItemData[];
}

export interface ProjectData {
  slug: string;
  category: string;
  icon: string;
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  homeOrder?: number;
  overview?: string;
  role?: string[];
  contributions?: string[];
  architecture?: string[];
}

export interface ProjectsData {
  eyebrow: string;
  title: string;
  description: string;
  filters: string[];
  items: ProjectData[];
}

export interface TechStackGroupData {
  icon: string;
  title: string;
  items: string[];
  featured?: boolean;
  homeOrder?: number;
}

export interface TechStackData {
  eyebrow: string;
  title: string;
  description: string;
  groups: TechStackGroupData[];
}
