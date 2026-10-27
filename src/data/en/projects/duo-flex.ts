import type { ProjectData } from "../../types";

export const duoFlex: ProjectData = {
  slug: "duo-flex",
  categories: ["development", "ai"],
  icon: "smartphone",
  personal: true,
  featured: false,
  title: "Duo Flex : Foldable Animation",
  subtitle: "Fold-responsive screen effects",
  summary: "A personal Android app that responds to folding movements on Galaxy Z Fold and Z Flip. Released on Google Play through product planning, AI-assisted development, and hands-on device feedback.",
  meta: {
    sourceType: "Personal Project",
    service: "Duo Flex",
    period: "2026.09 - 2026.10",
    status: "Released · Ongoing improvements",
    role: "Product Planning · AI-assisted Development",
    scope: ["Android App", "AI-assisted Development", "Device Feedback", "Google Play"]
  },
  tags: ["Android", "Java", "AI-assisted Development", "Google Play"],
  overview: "An Android app providing depth, blur, and lighting effects that respond to folding movements, with effects tailored to the inner and cover screens of compatible Galaxy Z Fold and Z Flip devices.\n\nThe initial product was developed in September–October 2026 and publicly released on Google Play. Beyond visual effects, the app includes previews, initial setup, and problem reporting, with ongoing improvements addressing friction found during everyday use.",
  problem: "The starting point was to turn fold-responsive screen effects into a standalone app. The focus was a usable product with a consistent flow across effect previews, initial setup, and permission guidance.",
  myRole: [
    "Defined the desired effects and usage scenarios, prioritizing improvements based on hands-on device feedback",
    "Developed the app with AI coding agents, using on-device validation results to guide improvements to features and user flows",
    "Maintained requirements, decisions, and verification results in a shared harness to preserve development context and managed the Google Play release"
  ],
  contributions: [
    "Fold-responsive effects for inner and cover screens, with adjustable effect intensity",
    "In-app effect previews and a guided path through initial setup and permissions",
    "Support for 16 languages, privacy guidance, and problem reporting that lets users review local diagnostics before sharing"
  ],
  troubleshooting: [
    "Connection reuse: Addressed the need to repeat connection setup after switching effects off and on. Separated effect shutdown from connection lifetime so effects can restart without reconnecting to Wi-Fi while the existing connection remains valid. A lost connection still requires setup.",
    "Problem reporting: Preserved the first failure in bounded local diagnostics so retries do not obscure the original context. Users review the information before sharing; screen images, authentication keys, and raw logs are excluded from diagnostics. Reports are not automatically uploaded to a server.",
    "Visual behavior and setup guidance: Iteratively refined excessive stretching, blur, and readability issues observed on physical devices, alongside confusing setup and permission steps. AI coding agents supported the implementation, code analysis, and testing."
  ],
  results: [
    "Publicly released an Android app on Google Play with in-app effect previews and support for 16 languages",
    "Provided a post-release usage flow covering effect reuse, setup guidance, and problem reporting"
  ],
  sectionLabels: {
    architecture: "Development Process",
    contributions: "Product Features",
    troubleshooting: "Iteration Notes",
    results: "Results",
    techStack: "Tools & Platform",
    screenshots: "Product Preview"
  },
  techStack: ["AI-assisted Development", "Android / Java", "AI Harness", "Google Play"],
  links: [{
    label: "Google Play",
    value: "Get Duo Flex on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.htleestudio.duoflex",
    badge: { src: "/assets/projects/duo-flex/google-play-en.png", width: 646, height: 250 }
  }],
  architecture: ["Product Planning", "AI-Assisted Development", "On-Device Validation", "Feedback-Driven Iteration", "Google Play Release"],
  architectureNote: "From product planning to Google Play release, combining AI-assisted development with on-device validation and feedback.",
  screenshots: [
    {
      src: "/assets/projects/duo-flex/home-en.png",
      alt: "English Duo Flex store image showing screen-effect controls and inner and cover screen previews",
      title: "Effects and usage flow",
      caption: "Public store material. The in-app preview is synthetic, not a recording of another app's screen.",
      width: 1080,
      height: 1920
    },
    {
      src: "/assets/projects/duo-flex/fold-en.png",
      alt: "Synthetic Duo Flex preview of folding effects on the inner and cover screens",
      title: "Folding-effect preview",
      caption: "A synthetic in-app effect preview, distinct from footage of a physical device folding.",
      width: 1080,
      height: 1920
    }
  ]
};
