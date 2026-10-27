import type { ProjectData } from "../../types";

export const duoFlex: ProjectData = {
  slug: "duo-flex",
  categories: ["development", "ai"],
  icon: "smartphone",
  personal: true,
  featured: false,
  title: "Duo Flex — 폴더블 화면 효과 앱",
  summary: "Galaxy Z Fold·Flip의 접힘 움직임에 반응하는 개인 Android 앱. 제품 기획과 AI 협업 개발, 실기기 피드백을 거쳐 Google Play에 출시.",
  meta: {
    sourceType: "Personal Project",
    service: "Duo Flex",
    period: "2026.09 - 2026.10",
    status: "출시 후 지속 개선",
    role: "Product Planning · AI-assisted Development",
    scope: ["Android App", "AI-assisted Development", "Device Feedback", "Google Play"]
  },
  tags: ["Android", "Java", "AI-assisted Development", "Google Play"],
  overview: "폴더블 기기의 접힘 동작에 맞춰 깊이감·블러·조명 효과를 제공하는 Android 앱. 지원되는 Galaxy Z Fold·Flip의 내부 화면과 커버 화면에 맞는 효과를 구성.\n\n2026년 9~10월 초기 제품을 개발해 Google Play에 공개 출시. 화면 효과뿐 아니라 미리보기·초기 설정·문제 신고까지 실제 사용에 필요한 흐름을 구성하고, 출시 후 사용 과정에서 확인한 불편을 개선.",
  problem: "폴더블 기기의 특성에 맞는 화면 효과를 독립적인 앱으로 구현하는 것이 출발점. 효과 미리보기·초기 설정·권한 안내를 포함해 실제 사용 가능한 제품과 일관된 사용 흐름을 구성하는 데 초점.",
  myRole: [
    "원하는 화면 효과와 사용 시나리오를 구체화하고, 실기기 사용 결과를 기준으로 개선 우선순위 결정",
    "AI 에이전트를 활용해 개발을 진행하고, 실기기 검증 결과를 바탕으로 기능·사용 흐름의 개선 방향 결정",
    "하네스에 요구사항·결정·검증 결과를 관리하며 개발 맥락을 유지하고 Google Play 출시 진행"
  ],
  contributions: [
    "내부·커버 화면에 대응하는 폴딩 효과와 효과 강도 조절 기능 제공",
    "앱 내 미리보기로 효과를 확인하고 초기 설정·권한 안내를 따라 사용을 준비하는 흐름 구성",
    "16개 언어와 개인정보 안내를 제공하고, 로컬 진단 내용을 확인한 뒤 공유하는 문제 신고 기능 지원"
  ],
  troubleshooting: [
    "연결 재사용: 효과를 껐다 켤 때 연결 설정을 반복해야 하는 불편을 개선. 효과 종료와 연결 유지를 분리해, 기존 연결이 유효한 경우 Wi-Fi 재연결 없이 효과를 다시 사용할 수 있도록 변경. 연결이 끊어진 경우에는 초기 연결 절차가 필요.",
    "문제 신고: 재시도 후 놓치기 쉬운 최초 실패 정보를 제한된 로컬 진단 기록으로 보존. 사용자가 내용을 확인한 뒤 공유하도록 구성하고, 화면 이미지·인증 키·원문 로그는 진단 기록에서 제외. 자동 서버 업로드 없이 문제 상황을 전달하는 흐름 마련.",
    "화면 표현·설정 안내: 실기기에서 확인한 과도한 늘어짐·블러와 가독성 문제를 기준으로 효과를 반복 조정하고, 초기 설정·권한 안내의 혼동 지점을 개선. 세부 구현과 코드 분석·테스트에는 AI 에이전트를 활용."
  ],
  results: [
    "앱 내 효과 미리보기와 16개 언어를 지원하는 Android 앱을 Google Play에 공개 출시",
    "효과 재사용·설정 안내·문제 신고까지 출시 후 사용을 지원하는 흐름 구성"
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
  architecture: ["제품 기획", "AI 에이전트 활용 개발", "실기기 검증", "피드백 기반 개선", "Google Play 출시"],
  architectureNote: "제품 기획부터 AI 에이전트 활용 개발·실기기 검증·출시까지 연결한 개인 제품 개발 과정.",
  screenshots: [
    {
      src: "/assets/projects/duo-flex/home-ko.png",
      alt: "Duo Flex 화면 효과 설정과 내부·커버 화면 미리보기를 소개하는 한국어 스토어 이미지",
      title: "화면 효과와 사용 흐름",
      caption: "공개용 스토어 자료. 앱 내 미리보기는 합성 화면이며 실제 다른 앱 화면을 촬영한 것이 아님.",
      width: 1080,
      height: 1920
    },
    {
      src: "/assets/projects/duo-flex/fold-ko.png",
      alt: "내부 화면과 커버 화면의 폴딩 효과를 보여주는 Duo Flex 합성 미리보기",
      title: "폴딩 효과 미리보기",
      caption: "앱에서 효과를 확인하기 위한 합성 미리보기. 실기기 접힘 동작을 촬영한 영상과 구분.",
      width: 1080,
      height: 1920
    }
  ]
};
