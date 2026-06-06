import type {Locale} from "./config";

export const ui = {
    ko: {
        meta: {
            title: "Heetae Lee | Software Engineer",
            description:
                "Heetae Lee의 경력, 프로젝트, 기술 스택을 정리한 웹 기반 이력서"
        },
        nav: {
            home: "홈",
            projects: "프로젝트",
            experience: "경력",
            techStack: "기술 스택",
            resume: "이력서"
        },
        common: {
            downloadResume: "이력서 다운로드",
            viewProjects: "프로젝트 보기",
            viewAllProjects: "전체 프로젝트 보기",
            viewFullExperience: "전체 경력 보기",
            viewFullTechStack: "기술 스택 전체 보기",
            details: "자세히 보기",
            backToProjects: "프로젝트 목록",
            onThisPage: "이 페이지",
            techTags: "Tech Stack"
        },
        projectDetail: {
            overview: "Overview",
            problem: "Problem",
            role: "My Role",
            contributions: "Key Contributions",
            troubleshooting: "Troubleshooting",
            results: "Results",
            devops: "Technical Notes",
            architecture: "System Architecture",
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
            devops: "Technical Notes",
            architecture: "System Architecture",
            navItems: ["Overview", "Problem", "My Role", "Key Contributions", "Troubleshooting", "Results", "Tech Stack"]
        },
        footer: "© 2026 Heetae Lee. All rights reserved."
    }
} as const satisfies Record<Locale, object>;
