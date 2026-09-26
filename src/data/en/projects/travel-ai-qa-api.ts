import type { ProjectData } from "../../types";

export const travelAiQaApi: ProjectData = {
  slug: "travel-ai-qa-api",
  categories: ["development", "ai", "operations", "devops"],
  icon: "bot",
  title: "Travel AI Q&A API Development",
  summary:
    "Built the company's first Python/Flask travel Q&A API, leading Azure OpenAI integration, conversation-history persistence, Docker packaging, and production deployment validation.",
  meta: {
    sourceType: "Professional Work / Task Force",
    company: "SK M&Service",
    service: "Travel AI Q&A API",
    period: "2023",
    role: "Software Engineer",
    scope: ["Python", "Flask", "Azure OpenAI", "Docker", "GitLab CI", "Nomad"],
    relatedExperience: "skmns"
  },
  tags: ["Python", "Flask", "Azure OpenAI", "Docker/Nomad"],
  featured: true,
  homeOrder: 2,
  overview:
    "Built the company's first Python/Flask travel Q&A Gateway API in 2023, when ChatGPT was beginning to appear in production services.\n\nLearned Python, Flask, and Azure OpenAI alongside my primary Java/Spring stack while leading requirements refinement, API design and implementation, database integration, and production deployment validation. With no prior internal example of deploying a Python web API, worked with the infrastructure team to establish runtime and deployment practices.\n\nImplemented question classification, answer generation, JSON responses, and conversation-history storage in a standalone server called by the existing service API, then packaged and deployed it in a separate Docker container.",
  problem:
    "The API needed to identify questions outside the scope of travel within Korea and convert inconsistent model output into status values and JSON that the service could process. The API contract had to use classification results to select either answer generation or a guidance message.\n\nIn a Java/Spring environment with no prior Python production deployment, container execution, Oracle connectivity, external AI API calls, logging, and health checks all required validation. The central challenge was preparing a locally working API for deployment and use by the existing service.",
  role: [
    "Led requirements refinement, API design and implementation, database integration, and deployment validation in a two-person task force with the CTO",
    "Was responsible for the Gateway API called by the mobile service, implementing question classification, answer generation, response status handling, and conversation-history storage",
    "Worked with the infrastructure team to validate container execution, external API and database connectivity, health checks, and rollback conditions"
  ],
  contributions: [
    "Separated question classification and answer generation into two Azure OpenAI calls. Sent questions about travel within Korea to answer generation and returned guidance messages for out-of-scope questions",
    "Defined an API contract with status values and JSON for successful, out-of-scope, and error responses, including answers, keywords, and guidance so the existing service could handle each response appropriately",
    "Implemented persistent question and answer history in Oracle and recent per-session context in a process-local LRU cache, supporting both history retention and conversation context across requests",
    "Packaged the standalone Gateway in its own Docker container and verified the integration from request receipt through model calls, response delivery, and database persistence"
  ],
  troubleshooting: [
    "Implemented parsing, validation, and correction logic for inconsistent classification JSON and iterated on prompts so classification results could drive answer-generation and guidance branches",
    "Investigated external AI API failures by distinguishing Azure OpenAI call and authentication requirements from network proxy configuration, then adjusted settings for the runtime environment",
    "Repeatedly checked Docker image contents and connection settings so Python packages and Oracle Client worked together inside the container, resolving runtime differences between development and production"
  ],
  results: [
    "Delivered the company's first Python-based AI API for travel question classification, answer generation, and history storage, ready for production deployment and integration with the existing service",
    "Validated runtime configuration including logging, health checks, and rollback conditions, creating a deployment reference for future Python services",
    "Led a project that combined learning a new language and AI API with service requirements, backend implementation, and production-environment validation"
  ],
  devops: [
    "Configured Docker images and GitLab CI jobs to build and deploy the containerized Python API",
    "Separated development and production configuration and Nomad runtime settings, validating execution requirements for containers with Python dependencies and Oracle Client",
    "Configured external log storage and runtime configuration injection to support post-deployment status checks and error investigation",
    "Implemented a health-check endpoint and validated health checks, canary deployment, and rollback conditions with the infrastructure team to establish deployment verification and recovery criteria"
  ],
  sectionLabels: {
    screenshots: "Service Screenshots",
    devops: "DevOps & Runtime Validation"
  },
  techStack: [
    "Python 3.10",
    "Flask",
    "Azure OpenAI",
    "GPT-3.5 Turbo",
    "OpenAI Python SDK",
    "Oracle",
    "Oracle Client / cx_Oracle",
    "LRU Cache",
    "Docker",
    "GitLab CI",
    "Nomad",
    "Health Check / Canary",
    "Prompt Design",
    "Structured AI Response"
  ],
  architecture: [
    "Hyugashop Mobile Entry",
    "Chat UI / Usage Policy",
    "Service API Bridge",
    "AI Q&A Gateway API (Python/Flask)",
    "Scope Classifier / Response JSON Rules",
    "Azure OpenAI GPT-3.5 Turbo",
    "Oracle Q/A History",
    "Docker Container / GitLab CI",
    "Nomad Runtime / Health Check / Canary"
  ],
  architectureNote: "Hyugashop AI Travel Information + AI Q&A Gateway API + Azure OpenAI + Container Runtime",
  screenshots: [
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-entry.jpg",
      alt: "Hyugashop mobile main screen showing the AI travel information menu",
      title: "Mobile Entry Point",
      caption: "Mobile entry point for travel Q&A. The API I built processes questions behind the existing service.",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-chat-start.jpg",
      alt: "Initial AI travel information chat screen",
      title: "Chat Start",
      caption: "Question-entry screen. The server classifies the question's scope before generating an answer.",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-guide.jpg",
      alt: "AI travel information usage guide screen",
      title: "Usage Policy",
      caption: "Service guidance on travel within Korea and usage conditions, referenced when designing out-of-scope responses and guidance messages.",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-loading.jpg",
      alt: "AI travel information answer loading screen",
      title: "Loading State",
      caption: "Waiting screen during answer generation. Model output is returned through the Gateway API.",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-answer.jpg",
      alt: "AI travel information question and answer result screen",
      title: "Answer Result",
      caption: "Answer and guidance display. The existing service presents response data generated by the Gateway API.",
      width: 903,
      height: 3516
    }
  ]
};
