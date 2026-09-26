import type { ProjectData } from "../../types";

export const benepiaServiceOperations: ProjectData = {
  slug: "benepia-service-operations",
  categories: ["development", "operations"],
  icon: "briefcase",
  title: "Benepia Employee Benefits Commerce Platform Development",
  summary:
    "Developed and operated Benepia, a shared employee benefits commerce platform with different policies for each client, including client-specific features and ISMS/e-privacy security fixes.",
  meta: {
    sourceType: "Professional Work",
    company: "SK M&Service",
    service: "Benepia",
    period: "2022.02 - 2024.03",
    role: "Software Engineer",
    scope: ["Java", "Spring Boot", "Oracle", "Web/Mobile", "ISMS"],
    relatedExperience: "skmns"
  },
  tags: ["Java", "Spring Boot", "Oracle", "MyBatis", "Redis", "JSP", "jQuery"],
  featured: false,
  overview:
    "Benepia is a shared commerce platform for employee benefits. Clients in finance, the public sector, telecommunications, and other industries operate their own stores with different benefit policies, menus, application workflows, card rules, and consent requirements.\n\nAfter becoming a permanent employee in February 2022, I worked primarily on Benepia until March 2024. My work covered client-specific features, web and mobile interfaces, back-office functions, backend logic and APIs, database updates, and ISMS/e-privacy security fixes.\n\nThe focus was implementing client-specific policies and exceptions while maintaining the shared platform's stability. This required checking UI behavior, operational tools, data storage, and security impact together.",
  problem:
    "Client requests that appeared to be simple text or menu changes often involved client-specific policy exceptions within the shared platform. A change to one client's menus, benefit cards, applications, or consent process could affect shared workflows and other clients' settings.\n\nFeatures involving benefit cards, reservations and applications, completion of required personal information, marketing consent, and public-sector benefits required consistent data. Changes had to be checked against database state, change history, admin query criteria, and the scope of ISMS/e-privacy security reviews.",
  role: [
    "Handled client-specific feature development and operations for Benepia's employee benefits commerce platform",
    "Translated policies for financial-sector, public-sector, and telecom clients into feature requirements, backend logic and APIs, and database changes within the shared platform",
    "Implemented benefit-card changes, reservations and applications, personal information updates, terms and consent handling, and public-sector benefit menus according to each client's requirements",
    "Assessed the impact of ISMS/e-privacy security fixes on authentication, sessions, authorization, information disclosure, and XSS/CSRF while preserving existing service workflows",
    "Developed an approach that considers shared features, client-specific exceptions, and security impact together, before expanding into KTO Hyugashop and travel and leisure partner integrations"
  ],
  contributions: [
    "Reviewed partner-card reference data, members' card-selection history, desktop and mobile card-change workflows, and card communication records for benefit-card change and addition features used by financial-sector clients",
    "Connected eligible reservation dates, application periods, capacity per time slot, duplicate-application limits, personal information consent, and application history for employee medical appointment and vaccination features",
    "Handled post-login identity verification, completion of required member information, storage of terms acceptance and consent, and messaging preferences by channel when improving personal information and marketing-consent features",
    "Built public-sector benefit menus connecting application rounds, forms, attachments, processing status, history, and admin queries across applicant pages and back-office tools",
    "Implemented client-specific web and mobile menus, page changes, and launch requests within Benepia's shared workflows, reducing conflicts between client policies and common service behavior"
  ],
  devops: [
    "Used Oracle and MyBatis/SQL to verify backend logic and APIs, data reads and writes for members, applications, consent, and history, and the ability to trace each feature's behavior during operation",
    "Developed and operated client-specific features and verified data flows in a service environment using Redis for session and content caching",
    "Assessed and isolated release risks by checking how client-specific exceptions affected existing menu, application, consent, and history workflows on the shared platform",
    "Reviewed authentication, sessions, authorization, information disclosure, and XSS/CSRF risks alongside their impact on service features when implementing ISMS/e-privacy fixes"
  ],
  troubleshooting: [
    "Scoped menu, application, consent, and history changes for one client's policy exceptions to avoid affecting shared workflows or other clients",
    "Checked for potential mismatches between values shown to users and values managed by operators when changing both desktop/mobile pages and back-office functions",
    "Verified that login, application, query, and consent storage workflows continued to work when addressing security findings"
  ],
  results: [
    "Implemented requirements for financial-sector, public-sector, and telecom clients as features within the shared employee benefits commerce platform",
    "Connected user interfaces, back-office functions, backend logic and APIs, and database history across benefit cards, reservations and applications, personal information and consent, and public-sector benefit menus",
    "Applied data structures that retain both current values and change history to benefit-card, application, and consent features, supporting operational tracing and responses to inquiries",
    "Masked sensitive fields on admin pages for functions such as public-sector benefit applications, meeting ISMS/e-privacy requirements while keeping the tools usable",
    "Implemented ISMS/e-privacy security fixes while preserving login, application, query, and consent storage workflows"
  ],
  sectionLabels: {
    problem: "Service Context",
    contributions: "Representative Feature Areas",
    devops: "Technical Scope",
    troubleshooting: "Engineering Focus"
  },
  techStack: [
    "Java",
    "Spring Boot",
    "JSP",
    "JavaScript",
    "jQuery",
    "Oracle",
    "MyBatis",
    "SQL",
    "Redis",
    "PC / Mobile Web",
    "Admin / Backoffice",
    "ISMS / e-privacy"
  ],
  architecture: ["Benepia Employee Benefits Commerce Platform"],
  architectureGroups: [
    {
      title: "User Channel",
      items: ["Desktop Web", "Mobile Web", "Client-specific Menus", "Applications / Queries"]
    },
    {
      title: "Operations Channel",
      items: ["Back Office / Admin", "Client Settings", "Request Management", "Operational Verification"]
    },
    {
      title: "Feature Domains",
      items: ["Benefit Cards", "Reservations / Applications", "Consent / Campaigns", "Public-sector Benefits"]
    },
    {
      title: "Data Foundation",
      items: ["Oracle DB", "MyBatis / SQL", "Internal Processing / API", "History Tables", "Member / Consent / Request Data"]
    },
    {
      title: "Security / Compliance",
      items: ["ISMS / e-privacy", "Auth / Session", "XSS / CSRF", "Information Disclosure Checks"]
    }
  ],
  architectureVariant: "hub",
  architectureCoreLabel: "Service Core",
  architectureNote:
    "A shared employee benefits commerce platform connecting client-specific policies, UI features, back-office tools, data storage, and security requirements"
};
