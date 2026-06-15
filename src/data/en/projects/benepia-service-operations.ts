import type { ProjectData } from "../../types";

export const benepiaServiceOperations: ProjectData = {
  slug: "benepia-service-operations",
  category: "Commerce",
  icon: "briefcase",
  title: "Benepia Welfare Commerce Platform Development",
  summary:
    "Developed and operated Benepia as a shared welfare-commerce platform where multiple clients run different benefit policies, while handling client-specific features and ISMS/e-privacy security work.",
  tags: ["Java", "Spring", "Oracle", "MyBatis", "JSP", "jQuery"],
  featured: false,
  overview:
    "Benepia is a welfare-commerce platform where multiple welfare malls for finance, public-sector, telecom, and other client groups run on top of a shared platform with different benefit policies, menus, application flows, card rules, and consent criteria.\n\nFrom February 2022 to March 2024, after converting to full-time employment, Benepia was my main workstream. I handled client-specific feature development, Web/Mobile screen changes, backoffice features, internal processing/API, database reflection, and ISMS/e-privacy security work together.\n\nThe core value was implementing client-specific policies and exception requirements as service features while preserving shared-platform stability, and verifying screen behavior, operations features, data persistence, and security impact together.",
  problem:
    "Benepia requests often looked like simple text, menu, or screen changes, but they were usually client-specific exception policies layered on top of a shared platform. A menu, card, application, or consent-flow change for one client could affect shared user journeys or configuration used by other clients.\n\nFeatures such as welfare-card changes, reservations/applications, privacy data completion, marketing consent, and public welfare menus required more than a screen update. They also required database state, history data, operations-facing query criteria, and ISMS/e-privacy security-review impact to be checked together.",
  role: [
    "Owned client-specific feature development and operations for the Benepia welfare-commerce platform",
    "Broke down finance, public-sector, and telecom client policies into feature scope, internal processing/API, and data-reflection scope aligned with the shared platform structure",
    "Implemented core features such as welfare-card changes, reservations/applications, privacy data completion, terms/consent, and public welfare menus under client-specific operating conditions",
    "For ISMS/e-privacy security work, checked authentication, session, authorization, information exposure, and XSS/CSRF impact while preserving existing service flows",
    "Built a development perspective for shared functions, client-specific exceptions, and security impact before later expanding into KTO Hyugashop and travel/leisure partner integration work"
  ],
  contributions: [
    "For financial-customer welfare-card changes, checked customer card master data, member card-selection history, PC/Mobile card-change flow, and card communication history together",
    "For healthcare-related reservation and application features for client employees, connected reservation windows, reception windows, time-slot capacity, duplicate-application limits, privacy consent, and application history",
    "For privacy data completion and marketing-consent improvements, handled post-login identity verification, member-data updates, terms/consent persistence, and channel-level reception status",
    "For public welfare menu creation, structured application rounds, application forms, attachments, processing status, history records, and admin inquiries across applicant screens and backoffice features",
    "Applied customer-specific web/mobile menus, screen changes, and launch requests on top of the shared Benepia operating flow while reducing conflict with common service behavior"
  ],
  devops: [
    "Validated internal processing/API plus member, application, consent, and history-data read/write flows by feature using Oracle DB and MyBatis/SQL, including whether operational tracking remained possible",
    "Separated release risk by checking how client-specific exception features affected existing menu, application, consent, and history flows on the shared platform",
    "For ISMS/e-privacy work, reviewed security-risk items such as authentication, session, authorization, information exposure, and XSS/CSRF together with service-feature impact"
  ],
  troubleshooting: [
    "When applying one client's exception policy, separated menu, application, consent, and history changes so they did not affect the shared platform or other client journeys",
    "For features that changed both PC/Mobile screens and backoffice behavior, checked potential mismatches between user-facing values and operator-managed values first",
    "When applying security-review items, verified that existing login, application, inquiry, and consent-persistence flows remained intact"
  ],
  results: [
    "Implemented finance, public-sector, and telecom client requirements as service features on top of a shared welfare-commerce platform",
    "Connected screen behavior, backoffice features, internal processing/API, and database history flows across major domains such as welfare cards, reservations/applications, privacy/consent, and public welfare menus",
    "Applied temporal data patterns that manage both current state and change history across welfare-card, application, and consent features, making operational tracing and inquiry handling easier",
    "Masked sensitive fields in operations-facing inquiry flows for public welfare applications, balancing ISMS/e-privacy criteria with operational usability",
    "Applied ISMS/e-privacy security work without breaking existing login, application, inquiry, and consent-persistence flows"
  ],
  sectionLabels: {
    problem: "Service Context",
    contributions: "Representative Feature Areas",
    devops: "Technical Scope",
    troubleshooting: "Engineering Focus"
  },
  techStack: [
    "Java",
    "Spring",
    "JSP",
    "JavaScript",
    "jQuery",
    "Oracle",
    "MyBatis",
    "SQL",
    "PC / Mobile Web",
    "Admin / Backoffice",
    "ISMS / e-privacy"
  ],
  architecture: ["Benepia Welfare Commerce Platform"],
  architectureGroups: [
    {
      title: "User Channel",
      items: ["PC Web", "Mobile Web", "Customer-specific Menus", "Application / Inquiry Flow"]
    },
    {
      title: "Operations Channel",
      items: ["Backoffice / Admin", "Customer Settings", "Request Management", "Operational Verification"]
    },
    {
      title: "Feature Domains",
      items: ["Welfare Card", "Reservation / Application", "Consent / Campaign", "Public Welfare Menu"]
    },
    {
      title: "Data Foundation",
      items: ["Oracle DB", "MyBatis / SQL", "Internal Processing / API", "History Tables", "Member / Consent / Request Data"]
    },
    {
      title: "Security / Compliance",
      items: ["ISMS / e-privacy", "Auth / Session", "XSS / CSRF", "Information Exposure Checks"]
    }
  ],
  architectureVariant: "hub",
  architectureCoreLabel: "Service Core",
  architectureNote:
    "Shared Benepia welfare-commerce platform connecting client-specific policy, screen features, backoffice, data persistence, and security criteria"
};
