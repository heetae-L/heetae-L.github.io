import type { ProjectData } from "../../types";

export const travelAiQaApi: ProjectData = {
  slug: "travel-ai-qa-api",
  categories: ["development", "ai", "operations", "devops"],
  icon: "bot",
  title: "Travel AI Q&A API Development",
  summary:
    "Built the company's first Python/Flask-based TourGPT Gateway API Server during the early ChatGPT adoption wave in 2023, connecting GPT-3.5 Turbo on Azure OpenAI, Oracle, Docker/GitLab CI/Nomad, and production deployment validation.",
  meta: {
    sourceType: "Professional Work / TF",
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
    "Built the core processing server for a GPT-3.5 Turbo-based travel Q&A feature in 2023, when ChatGPT was just beginning to be considered for real service use.\n\nThe Hyugashop mobile screen was the user-facing AI travel information entry point. My direct implementation scope was the Python/Flask-based TourGPT Gateway API Server behind that flow, receiving service calls and handling question-scope classification, GPT answer generation calls, response JSON construction, and conversation-history persistence.\n\nRather than mixing the feature into the existing Hyugashop/Benepia service codebase, I packaged it as a separate Python API server running in its own Docker container and connected it behind the existing service API layer.\n\nIn a Java/Spring-centered operating environment, I led the company's first Python/Flask-based GPT API Server effort, connecting Azure OpenAI calls, response-state design, Oracle history storage, Docker images, GitLab CI, Nomad jobs, and health checks.\n\nBecause there was effectively no internal reference for operating a Python web API in production, this project required defining the implementation, runtime, CI/CD, and deployment validation standards from the ground up.",
  problem:
    "In 2023, service patterns for LLM APIs, structured responses, and production deployment were far less mature than they are now.\n\nThe existing internal service stack was centered on Java/Spring, so the team had to establish how to run a Python/Flask Gateway API Server as a separate production container, including Docker image design, deployment jobs, health checks, log paths, Oracle client setup, and proxy configuration.\n\nThis was not a simple GPT call demo. It was the company's first Python-based AI API effort that had to work as a Gateway API Server callable from mobile/service APIs, with response states, conversation-history storage, and production deployment validation.",
  role: [
    "Led the build of the company's first Python/Flask-based TourGPT Gateway API Server as an early-career engineer",
    "Defined the domestic travel Q&A service scope, request/response JSON, status codes, and error/blocking message rules",
    "Implemented Azure OpenAI calls with GPT-3.5 Turbo, question-scope classification, answer-generation flow, response JSON rules, conversation-history persistence, and session cache handling",
    "Worked with the infrastructure team to establish runtime standards for Docker images, GitLab CI, Nomad jobs, log paths, health checks, proxy configuration, and Oracle client setup"
  ],
  contributions: [
    "Separated question eligibility classification from answer generation into a two-step GPT call flow, allowing the TourGPT Gateway API Server to block out-of-domain questions at the server layer",
    "Shaped AI responses into service-consumable fields such as status, answer, keywords, and system message",
    "Connected Gateway response states and guide messages to the user flow covering question input, loading, answer display, and usage policy screens",
    "Stored conversation history in Oracle and maintained recent session context through an in-process cache structure",
    "Validated dependencies, Oracle client setup, Docker base images, GitLab CI jobs, Nomad jobs, and environment-specific configuration in an organization with no established Python service deployment standard",
    "Separated proxy, logging, health check, and canary/rollback concerns into production deployment checkpoints for the Python API",
    "Identified early operationalization standards for GPT APIs, including sensitive configuration separation, dependency reproducibility, and response schema validation"
  ],
  troubleshooting: [
    "Prepared validation and correction flows for cases where GPT-3.5 Turbo returned responses outside the intended JSON structure",
    "Separated Azure OpenAI call failures by network, authentication, and response-handling layers to handle internal proxy constraints",
    "Aligned daily question limits, domestic travel scope, privacy-entry warnings, and answer-limit notices with Gateway response states and service guide messages",
    "Reduced development/production connection risk by repeatedly validating Oracle client behavior inside the Python container runtime",
    "Worked through the lack of Python service operating references by validating Docker images, package installation, log volumes, and Nomad resource/service checks one by one",
    "Extended simple runtime success into production-readiness by adding health check paths and deployment validation flow"
  ],
  results: [
    "Built the company's first Python/Flask-based TourGPT Gateway API Server end to end, from requirement shaping and API implementation to DB integration, container execution, CI/CD, and Nomad deployment validation",
    "Connected GPT-3.5 Turbo during the early ChatGPT adoption period as a service-style Gateway API Server spanning user screens, service APIs, operational DB storage, and deployment runtime",
    "Implemented the core Gateway layer behind the user flow from mobile entry and question start to usage guidance, loading state, and answer result",
    "Established a new Python service runtime and deployment-validation pattern in a Java/Spring-centered organization, creating a technical reference for later Python/AI API adoption",
    "Took responsibility for a high-difficulty new-technology adoption project that combined AI API design, Python runtime, Oracle integration, and Docker/GitLab CI/Nomad DevOps at an early career stage"
  ],
  devops: [
    "Packaged the Python/Flask-based TourGPT Gateway API Server as a separate Docker container and configured GitLab CI build/deploy jobs with Nomad docker-driver execution",
    "Designed an operation-ready execution structure by separating development/production branches, environment-specific config, image tags, log volumes, resources, and service checks",
    "Solved reproducibility constraints around Python dependencies and Oracle client setup by validating Docker base images, package composition, and proxy configuration for deployment behind the existing Hyugashop/Benepia operating environment",
    "Validated Nomad health checks, canary, and auto-revert conditions so the Python API was treated as a deployable, observable, recoverable service rather than experiment code",
    "Worked closely with the infrastructure team to build a Python API DevOps reference that did not previously exist inside the organization"
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
    "TourGPT Gateway API Server (Python/Flask)",
    "Scope Classifier / Response Contract",
    "Azure OpenAI GPT-3.5 Turbo",
    "Oracle Q/A History",
    "Docker Container / GitLab CI",
    "Nomad Runtime / Health Check / Canary"
  ],
  architectureNote: "TourGPT Gateway API Server + Azure OpenAI + Container Runtime",
  screenshots: [
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-entry.jpg",
      alt: "Hyugashop mobile main screen showing the AI travel information menu",
      title: "Mobile Entry Point",
      caption: "The mobile entry point for AI travel information connected to the TourGPT Gateway API Server. User questions start at this touchpoint and pass through the service API to the Gateway API Server.",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-chat-start.jpg",
      alt: "Initial AI travel information chat screen",
      title: "Chat Start",
      caption: "The question-entry screen before the TourGPT Gateway API Server call. After submission, the Gateway API Server handles scope classification and the GPT answer-generation flow.",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-guide.jpg",
      alt: "AI travel information usage guide screen",
      title: "Usage Policy",
      caption: "A policy screen where question limits, domestic travel scope, privacy-entry warnings, and answer limitations connect back to TourGPT Gateway API Server response states and guide-message rules.",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-loading.jpg",
      alt: "AI travel information answer loading screen",
      title: "Loading State",
      caption: "The waiting state shown while the TourGPT Gateway API Server processes an Azure OpenAI GPT-3.5 Turbo call, with timeout and response-state handling reflected in the user feedback flow.",
      width: 904,
      height: 2232
    },
    {
      src: "/assets/projects/travel-ai-qa-api/hyugashop-ai-answer.jpg",
      alt: "AI travel information question and answer result screen",
      title: "Answer Result",
      caption: "The result screen where Azure OpenAI GPT-3.5 Turbo output is shaped by the TourGPT Gateway API Server into the service response contract and displayed in the mobile chat UI, including long answers, status messages, and history persistence.",
      width: 903,
      height: 3516
    }
  ]
};
