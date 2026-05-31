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

export interface CertificationData {
  name: string;
  issued: string;
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
  militaryService?: {
    label: string;
    value: string;
  };
  certifications: CertificationData[];
  contact: ContactLinkData[];
}

export interface ExperienceItemData {
  period: string;
  startDate?: string;
  endDate?: string;
  company: string;
  role: string;
  bullets: string[];
  homeBullets?: string[];
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
  problem?: string;
  role?: string[];
  myRole?: string[];
  contributions?: string[];
  keyContributions?: string[];
  troubleshooting?: string[];
  results?: string[];
  techStack?: string[];
  devops?: string[];
  privacyNotes?: string[];
  links?: ContactLinkData[];
  architecture?: string[];
}

export interface ProjectsData {
  eyebrow: string;
  title: string;
  description: string;
  filters: string[];
  items: ProjectData[];
}

export interface TechStackItemData {
  name: string;
  description: string;
}

export interface TechStackGroupData {
  id: string;
  icon: string;
  title: string;
  summary: string;
  items: TechStackItemData[];
  featured?: boolean;
  homeOrder?: number;
}

export interface TechStackData {
  eyebrow: string;
  title: string;
  description: string;
  groups: TechStackGroupData[];
}
