import type { TechStackData } from "../types";

export const techStack: TechStackData = {
  eyebrow: "Skills",
  title: "Tech Stack",
  description: "Backend · Web · Database · CI/CD · AI",
  groups: [
    {
      id: "backend",
      icon: "server",
      title: "Backend",
      summary: "Java-based service APIs and business logic",
      featured: true,
      homeOrder: 1,
      items: [
        { name: "Java", description: "Primary language for implementing service APIs and business logic" },
        { name: "Spring Boot", description: "Backend application and service API development" },
        { name: "Spring Framework", description: "Feature and business logic development within existing services" },
        {
          name: "Spring Transaction",
          description: "Analyzing transaction boundaries between service operations and isolating the impact of failures"
        },
        { name: "REST API", description: "Service features and external system integration APIs" },
        { name: "Batch", description: "Scheduled processing, data collection, and post-processing flows" },
        {
          name: "Java Concurrency",
          description:
            "Developing and operating services with parallel search based on CompletableFuture, dedicated thread pools, and WebFlux, and analyzing their execution flows"
        }
      ]
    },
    {
      id: "web",
      icon: "code",
      title: "Web",
      summary: "JSP screens · JavaScript interactions",
      featured: true,
      homeOrder: 2,
      items: [
        { name: "JSP", description: "Java-based server-rendered business pages" },
        { name: "JavaScript", description: "Page interactions and user input handling" },
        { name: "jQuery", description: "DOM manipulation and event handling in existing services" },
        { name: "AJAX", description: "Asynchronous requests and partial page updates" },
        { name: "JSTL", description: "Conditional rendering, loops, and data output in JSP pages" }
      ]
    },
    {
      id: "database",
      icon: "database",
      title: "Database",
      summary: "Oracle · SQL · Redis",
      featured: true,
      homeOrder: 3,
      items: [
        { name: "Oracle", description: "Primary database for storing and querying order, product, benefit-point, and statistics data" },
        { name: "MyBatis", description: "SQL-centric business logic and Java object mapping" },
        { name: "SQL", description: "Data consistency checks, reporting queries, and batch-result analysis" },
        { name: "PL/SQL / Procedure", description: "Analysis of database processing logic and batch post-processing" },
        { name: "MERGE", description: "Reference-data updates and bulk data correction" },
        {
          name: "Redis",
          description: "Development and operations experience with services using Redis for Spring Session and query-result caching"
        }
      ]
    },
    {
      id: "cicd-deploy",
      icon: "cloud",
      title: "CI/CD & Deploy",
      summary: "Build · deploy · containers · runtime",
      featured: true,
      homeOrder: 4,
      items: [
        { name: "GitLab CI/CD", description: "Build/deploy pipeline configuration and deployment validation" },
        { name: "Jenkins", description: "CI/CD job-based build and deployment workflows" },
        { name: "Docker", description: "Configuring and validating containerized application environments" },
        { name: "Tomcat", description: "Java web application runtime" },
        { name: "Maven / WAR", description: "Java project build and deployment packaging" },
        { name: "Linux", description: "Server log analysis, configuration checks, and runtime troubleshooting" }
      ]
    },
    {
      id: "ai-llm",
      icon: "brain",
      title: "AI / LLM",
      summary: "AI-assisted engineering · LLM API integration",
      featured: true,
      homeOrder: 5,
      items: [
        { name: "AI-assisted Engineering", description: "Using AI for issue analysis, documentation, and verification workflows" },
        { name: "AI-DLC / AI Harness", description: "Building an AI-assisted environment around shared knowledge, work rules, and verification criteria" },
        { name: "Prompt Design", description: "Input constraints and response criteria aligned with service goals" },
        { name: "Structured AI Response", description: "Designing JSON responses that the application can process" },
        { name: "OpenAI API", description: "Implementing LLM requests, response handling, and error handling" },
        { name: "Azure OpenAI", description: "Integrating LLM APIs and implementing response generation workflows" }
      ]
    },
    {
      id: "python",
      icon: "code",
      title: "Python",
      summary: "API prototypes · AI API integration",
      featured: false,
      items: [
        { name: "Python", description: "API prototyping and AI API integration" },
        { name: "Flask", description: "Lightweight API server and request/response handling" },
        { name: "pip", description: "Python dependency setup and reproducible runtime environment management" },
        { name: "Oracle Client", description: "Oracle connectivity validation from Python applications" }
      ]
    },
    {
      id: "enterprise-systems",
      icon: "briefcase",
      title: "Enterprise Systems",
      summary: "Enterprise systems · internal runtime environments",
      featured: false,
      items: [
        { name: "WebSquare", description: "Developing pages for internal business applications" },
        { name: "DB2", description: "Data lookup and workflow analysis in internal enterprise systems" },
        { name: "RPG(IBM)", description: "Experience with business flows connected to existing core systems" },
        { name: "Windows / Office Runtime", description: "Analysis of business user setups and internal application runtime environments" }
      ]
    }
  ]
};
