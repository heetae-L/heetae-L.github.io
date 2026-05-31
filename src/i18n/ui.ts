import type {Locale} from "./config";

export const ui = {
    ko: {
        meta: {
            title: "Heetae Lee | Software Engineer",
            description:
                "Heetae Lee의 경력, 프로젝트, 기술 스택을 정리한 웹 기반 이력서입니다."
        },
        nav: {
            home: "Home",
            projects: "Projects",
            experience: "Experience",
            techStack: "Tech Stack",
            resume: "Resume"
        },
        common: {
            downloadResume: "Download Resume",
            viewProjects: "View Projects",
            viewAllProjects: "View all projects",
            viewFullExperience: "View all experience",
            viewFullTechStack: "View all tech stacks",
            details: "Details",
            backToProjects: "Back to Projects",
            onThisPage: "On this page",
            techTags: "Tech Stack"
        },
        projectDetail: {
            overview: "Overview",
            problem: "Problem",
            role: "My Role",
            contributions: "Key Contributions",
            troubleshooting: "Troubleshooting",
            results: "Results",
            devops: "DevOps / Deployment",
            privacyNotes: "Public Scope",
            architecture: "System Architecture",
            screenshots: "Screenshots",
            navItems: ["Overview", "Problem", "My Role", "Key Contributions", "Troubleshooting", "Results", "Tech Stack"]
        },
        footer: "© 2026 Heetae Lee. All rights reserved."
    },
    en: {
        meta: {
            title: "Heetae Lee | Software Engineer",
            description:
                "A web-based resume for Heetae Lee, focused on backend engineering experience, projects, and technical skills."
        },
        nav: {
            home: "Home",
            projects: "Projects",
            experience: "Experience",
            techStack: "Tech Stack",
            resume: "Resume"
        },
        common: {
            downloadResume: "Download Resume",
            viewProjects: "View Projects",
            viewAllProjects: "View all projects",
            viewFullExperience: "View all experience",
            viewFullTechStack: "View all tech stacks",
            details: "Details",
            backToProjects: "Back to Projects",
            onThisPage: "On this page",
            techTags: "Tech Stack"
        },
        projectDetail: {
            overview: "Overview",
            problem: "Problem",
            role: "My Role",
            contributions: "Key Contributions",
            troubleshooting: "Troubleshooting",
            results: "Results",
            devops: "DevOps / Deployment",
            privacyNotes: "Public Scope",
            architecture: "System Architecture",
            screenshots: "Screenshots",
            navItems: ["Overview", "Problem", "My Role", "Key Contributions", "Troubleshooting", "Results", "Tech Stack"]
        },
        footer: "© 2026 Heetae Lee. All rights reserved."
    }
} as const satisfies Record<Locale, object>;
