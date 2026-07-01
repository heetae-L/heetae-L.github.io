export interface SummaryCardData {
  icon: string;
  title: string;
  description: string;
}

export interface HeroSignalData {
  icon: string;
  title: string;
  description: string;
}

export interface ContactLinkData {
  label: string;
  value: string;
  href: string;
}

export interface ProjectScreenshotData {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width?: number;
  height?: number;
}

export interface ArchitectureGroupData {
  title: string;
  items: string[];
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
  heroSignals: HeroSignalData[];
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

export type ProjectFilterKey = "all" | "development" | "integration" | "ai" | "operations" | "devops";
export type ProjectCategoryKey = Exclude<ProjectFilterKey, "all">;

export interface ProjectFilterData {
  key: ProjectFilterKey;
  label: string;
}

export interface ProjectMetaData {
  sourceType: string;
  company?: string;
  service?: string;
  period?: string;
  role?: string;
  scope: string[];
  relatedExperience?: string;
}

export interface ProjectData {
  slug: string;
  categories: ProjectCategoryKey[];
  icon: string;
  title: string;
  summary: string;
  meta: ProjectMetaData;
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
  sectionLabels?: {
    overview?: string;
    problem?: string;
    role?: string;
    contributions?: string;
    troubleshooting?: string;
    results?: string;
    devops?: string;
    techStack?: string;
    screenshots?: string;
  };
  links?: ContactLinkData[];
  architecture?: string[];
  architectureGroups?: ArchitectureGroupData[];
  architectureVariant?: "flow" | "hub";
  architectureCoreLabel?: string;
  architectureNote?: string;
  screenshots?: ProjectScreenshotData[];
}

export interface ProjectsData {
  eyebrow: string;
  title: string;
  description: string;
  filters: ProjectFilterData[];
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
