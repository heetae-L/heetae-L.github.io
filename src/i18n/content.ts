import type {Locale} from "./config";

export const content = {
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
            details: "Details",
            backToProjects: "Back to Projects",
            onThisPage: "On this page",
            techTags: "Tech Stack"
        },
        home: {
            badge: "Software Engineer",
            name: "Heetae Lee",
            role: "Software Engineer",
            headline: "운영 가능한 백엔드 시스템을 만들고 개선하는 엔지니어",
            summary:
                "주문, 데이터 처리, 외부 연동, 운영 자동화처럼 실제 서비스에서 반복적으로 마주치는 문제를 안정적으로 해결하는 데 집중합니다.",
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
                {label: "Email", value: "ht9407@gmail.com", href: "mailto:ht9407@gmail.com"},
                {label: "GitHub", value: "github.com/heetae-L", href: "https://github.com/heetae-L"},
                {label: "LinkedIn", value: "linkedin.com/in/heetae-lee", href: "https://linkedin.com"}
            ]
        },
        experience: {
            eyebrow: "Career",
            title: "Work Experience",
            description:
                "실제 운영 환경에서 백엔드 시스템을 개발하고 유지보수한 경험을 중심으로 정리합니다.",
            items: [
                {
                    period: "2021.02 - Present",
                    company: "Example Company",
                    role: "Software Engineer",
                    bullets: [
                        "주문/상품 데이터 연동 API 설계 및 운영",
                        "Oracle 기반 대용량 데이터 처리 로직 개선",
                        "장애 원인 분석과 재발 방지를 위한 운영 도구 개선",
                        "외부 서비스 연동과 배치 처리 안정화"
                    ]
                }
            ]
        },
        projects: {
            eyebrow: "Selected Work",
            title: "Projects",
            description: "실제 업무에서 마주친 문제를 기술적으로 해결한 사례를 정리합니다.",
            filters: ["All", "Integration", "AI", "Database", "DevOps"],
            items: [
                {
                    slug: "partner-order-product-integration",
                    category: "Integration",
                    icon: "cart",
                    title: "Partner Order/Product Integration",
                    summary: "외부 파트너 주문/상품 데이터를 내부 시스템과 안정적으로 연동한 백엔드 프로젝트입니다.",
                    tags: ["Java", "Spring", "Oracle", "MyBatis"],
                    overview:
                        "외부 파트너의 주문 및 상품 데이터를 수집하고 내부 운영 시스템과 동기화하는 API와 배치 흐름을 설계했습니다.",
                    role: [
                        "연동 API 요청/응답 모델 설계",
                        "배치 처리 흐름과 예외 처리 정책 정리",
                        "운영 중 발생한 데이터 불일치 원인 분석"
                    ],
                    contributions: [
                        "중복 처리와 실패 재시도 기준을 명확하게 분리",
                        "운영자가 추적 가능한 로그와 상태 값을 추가",
                        "데이터 정합성 검증 쿼리와 점검 흐름 개선"
                    ],
                    architecture: ["Partner API", "Collector API", "Queue", "Batch Processor", "Oracle DB"]
                },
                {
                    slug: "tourgpt-ai-chatbot-api",
                    category: "AI",
                    icon: "bot",
                    title: "TourGPT AI Chatbot API",
                    summary: "AI API를 서비스 백엔드에 연결하기 위한 Flask 기반 API mock 프로젝트입니다.",
                    tags: ["Python", "Flask", "Azure OpenAI"]
                },
                {
                    slug: "db-lock-performance-improvement",
                    category: "Database",
                    icon: "chart",
                    title: "DB Lock / Performance Improvement",
                    summary: "Oracle DB lock 원인을 추적하고 쿼리와 처리 흐름을 개선한 사례입니다.",
                    tags: ["Oracle", "SQL", "PL/SQL"]
                },
                {
                    slug: "deployment-experience",
                    category: "DevOps",
                    icon: "infinity",
                    title: "CI/CD & Deployment Experience",
                    summary: "GitLab CI/CD와 Docker 기반 배포 흐름을 정리한 운영 경험입니다.",
                    tags: ["GitLab CI/CD", "Docker", "Linux"]
                }
            ]
        },
        techStack: {
            eyebrow: "Skills",
            title: "Tech Stack",
            description: "실무에서 사용한 기술을 역할 중심으로 정리합니다.",
            groups: [
                {
                    icon: "server",
                    title: "Backend",
                    items: ["Java", "Spring", "Spring Boot", "MyBatis", "REST API"]
                },
                {
                    icon: "database",
                    title: "Database",
                    items: ["Oracle", "SQL", "PL/SQL"]
                },
                {
                    icon: "cloud",
                    title: "Infra / DevOps",
                    items: ["Linux", "Docker", "GitLab CI/CD", "Nginx"]
                },
                {
                    icon: "brain",
                    title: "AI / Python",
                    items: ["Python", "Flask", "Azure OpenAI"]
                }
            ]
        },
        projectDetail: {
            overview: "Overview",
            role: "My Role",
            contributions: "Key Contributions",
            architecture: "System Architecture",
            screenshots: "Screenshots",
            navItems: ["Overview", "My Role", "Key Contributions", "Tech Stack"]
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
            details: "Details",
            backToProjects: "Back to Projects",
            onThisPage: "On this page",
            techTags: "Tech Stack"
        },
        home: {
            badge: "Software Engineer",
            name: "Heetae Lee",
            role: "Software Engineer",
            headline: "Building reliable backend systems for real-world operations",
            summary:
                "I focus on backend systems that support orders, data processing, external integrations, and operational workflows in production environments.",
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
                school: "B.S. in Computer Science",
                period: "2016.03 - 2021.02"
            },
            contact: [
                {label: "Email", value: "ht9407@gmail.com", href: "mailto:ht9407@gmail.com"},
                {label: "GitHub", value: "github.com/heetae-L", href: "https://github.com/heetae-L"},
                {label: "LinkedIn", value: "linkedin.com/in/heetae-lee", href: "https://linkedin.com"}
            ]
        },
        experience: {
            eyebrow: "Career",
            title: "Work Experience",
            description:
                "A focused summary of backend development and operational engineering experience in production systems.",
            items: [
                {
                    period: "2021.02 - Present",
                    company: "Example Company",
                    role: "Software Engineer",
                    bullets: [
                        "Designed and maintained APIs for order and product data integration",
                        "Improved Oracle-based data processing flows for operational workloads",
                        "Investigated production issues and refined internal operation tools",
                        "Stabilized external service integrations and scheduled batch processes"
                    ]
                }
            ]
        },
        projects: {
            eyebrow: "Selected Work",
            title: "Projects",
            description:
                "Engineering case studies that support the resume with practical backend problem solving.",
            filters: ["All", "Integration", "AI", "Database", "DevOps"],
            items: [
                {
                    slug: "partner-order-product-integration",
                    category: "Integration",
                    icon: "cart",
                    title: "Partner Order/Product Integration",
                    summary:
                        "A backend integration project for synchronizing partner order and product data with internal systems.",
                    tags: ["Java", "Spring", "Oracle", "MyBatis"],
                    overview:
                        "Designed API and batch processing flows to collect partner order and product data and synchronize it with internal operation systems.",
                    role: [
                        "Designed request and response models for integration APIs",
                        "Defined batch processing flow and exception handling rules",
                        "Investigated data mismatch issues observed in production"
                    ],
                    contributions: [
                        "Separated duplicate handling and retry criteria into explicit flows",
                        "Added traceable logs and operational status values",
                        "Improved validation queries and review workflows for data consistency"
                    ],
                    architecture: ["Partner API", "Collector API", "Queue", "Batch Processor", "Oracle DB"]
                },
                {
                    slug: "tourgpt-ai-chatbot-api",
                    category: "AI",
                    icon: "bot",
                    title: "TourGPT AI Chatbot API",
                    summary:
                        "A Flask-based API prototype for connecting AI APIs to a service backend.",
                    tags: ["Python", "Flask", "Azure OpenAI"]
                },
                {
                    slug: "db-lock-performance-improvement",
                    category: "Database",
                    icon: "chart",
                    title: "DB Lock / Performance Improvement",
                    summary:
                        "An investigation and improvement case for Oracle DB locks and query performance.",
                    tags: ["Oracle", "SQL", "PL/SQL"]
                },
                {
                    slug: "deployment-experience",
                    category: "DevOps",
                    icon: "infinity",
                    title: "CI/CD & Deployment Experience",
                    summary:
                        "Operational deployment experience using GitLab CI/CD and Docker-based workflows.",
                    tags: ["GitLab CI/CD", "Docker", "Linux"]
                }
            ]
        },
        techStack: {
            eyebrow: "Skills",
            title: "Tech Stack",
            description: "A role-oriented view of technologies used in practical backend work.",
            groups: [
                {
                    icon: "server",
                    title: "Backend",
                    items: ["Java", "Spring", "Spring Boot", "MyBatis", "REST API"]
                },
                {
                    icon: "database",
                    title: "Database",
                    items: ["Oracle", "SQL", "PL/SQL"]
                },
                {
                    icon: "cloud",
                    title: "Infra / DevOps",
                    items: ["Linux", "Docker", "GitLab CI/CD", "Nginx"]
                },
                {
                    icon: "brain",
                    title: "AI / Python",
                    items: ["Python", "Flask", "Azure OpenAI"]
                }
            ]
        },
        projectDetail: {
            overview: "Overview",
            role: "My Role",
            contributions: "Key Contributions",
            architecture: "System Architecture",
            screenshots: "Screenshots",
            navItems: ["Overview", "My Role", "Key Contributions", "Tech Stack"]
        },
        footer: "© 2026 Heetae Lee. All rights reserved."
    }
} as const;

export type SiteContent = (typeof content)[Locale];
export type Project = SiteContent["projects"]["items"][number];

export function getContent(locale: Locale) {
    return content[locale];
}

export function getProject(locale: Locale, slug: string) {
    return content[locale].projects.items.find((project) => project.slug === slug);
}
