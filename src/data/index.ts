import type { Locale } from "../i18n/config";
import { ui } from "../i18n/ui";
import type { ExperienceItemData, ProjectData, TechStackGroupData } from "./types";
import { experience as enExperience } from "./en/experience";
import { home as enHome } from "./en/home";
import { projects as enProjects } from "./en/projects";
import { techStack as enTechStack } from "./en/tech-stack";
import { experience as koExperience } from "./ko/experience";
import { home as koHome } from "./ko/home";
import { projects as koProjects } from "./ko/projects";
import { techStack as koTechStack } from "./ko/tech-stack";

const pageData = {
  ko: {
    home: koHome,
    experience: koExperience,
    projects: koProjects,
    techStack: koTechStack
  },
  en: {
    home: enHome,
    experience: enExperience,
    projects: enProjects,
    techStack: enTechStack
  }
} as const;

export function getContent(locale: Locale) {
  return {
    ...ui[locale],
    ...pageData[locale]
  };
}

export type SiteContent = ReturnType<typeof getContent>;
export type Project = SiteContent["projects"]["items"][number];

export function getProject(locale: Locale, slug: string) {
  return pageData[locale].projects.items.find((project) => project.slug === slug);
}

function sortByHomeOrder<T extends { homeOrder?: number }>(items: T[]) {
  return [...items].sort((a, b) => (a.homeOrder ?? Number.MAX_SAFE_INTEGER) - (b.homeOrder ?? Number.MAX_SAFE_INTEGER));
}

export function getFeaturedProjects(locale: Locale, limit = 4): ProjectData[] {
  return sortByHomeOrder(
    pageData[locale].projects.items.filter((project) => project.featured)
  ).slice(0, limit);
}

export function getResumeExperience(locale: Locale): ExperienceItemData[] {
  return sortByHomeOrder(
    pageData[locale].experience.items.filter((item) => item.featured)
  ).map((item) => ({
    ...item,
    bullets: item.homeBullets ?? item.bullets
  }));
}

export function getFeaturedTechStack(locale: Locale): TechStackGroupData[] {
  return sortByHomeOrder(
    pageData[locale].techStack.groups.filter((group) => group.featured)
  );
}
