# Resume Site Redesign Brief

이 문서는 `heetae-L.github.io`를 개인 PR 사이트이자 웹 기반 이력서로 개편하기 위한 요구사항 정리입니다.

퍼블릭 저장소에 올라갈 수 있는 수준의 디자인/구조 요구사항만 기록합니다. 회사 내부 프로젝트 상세, 비공개 경력 정보, 로컬 파일 경로, 민감한 개인정보는 이 문서에 적지 않습니다.

## Core Goal

이 사이트의 1차 목표는 개발 블로그가 아니라 `Heetae Lee`를 소개하는 웹 이력서입니다.

홈페이지(`/ko`, `/en`)는 전통적인 1페이지 이력서를 대체할 수 있어야 합니다. 방문자가 30초 안에 다음 내용을 파악할 수 있어야 합니다.

- 어떤 사람인지
- 어떤 역할의 Software Engineer인지
- 어떤 경력과 실무 경험이 있는지
- 어떤 기술 스택을 사용하는지
- 어떤 프로젝트 경험이 있는지
- 어떻게 연락할 수 있는지

프로젝트 페이지는 메인 이력서를 보조하는 케이스 스터디 역할을 합니다.

## Identity

- Name: `Heetae Lee`
- Main role: `Software Engineer`
- Positioning: backend-oriented software engineer
- Tone: professional, concise, trustworthy

직무명은 `Backend Developer`보다 `Software Engineer`를 기본으로 사용합니다. 다만 본문에서는 백엔드, 운영, 데이터 처리, API, 통합 경험이 잘 드러나야 합니다.

## Visual Direction

전체 디자인은 첨부된 레퍼런스 이미지의 방향을 따른다.

키워드:

- Minimal
- Professional
- Clean
- Spacious
- Modern B2B SaaS 느낌
- Backend engineer focused
- Resume-first
- Not flashy
- Not startup landing-page style
- Not agency portfolio style

디자인 원칙:

- 흰 배경 중심
- 파란색 accent color
- 얇은 border
- 부드러운 shadow
- 넉넉한 whitespace
- 명확한 typography scale
- 둥근 모서리
- 카드 UI는 사용하되 과하게 꾸미지 않음
- 정보가 잘 읽히는 구조 우선

피해야 할 것:

- 과한 glassmorphism
- 과한 animation
- neon effect
- floating particles
- 의미 없는 chart
- skill percentage/progress bar
- crowded layout
- giant marketing hero
- fake statistics
- lorem ipsum
- cartoonish illustration

최종 인상은 `experienced backend engineer personal website`에 가까워야 하며, `frontend showcase experiment`처럼 보이면 안 됩니다.

## Tech Stack

현재 프로젝트는 Astro 기반입니다. 개편 시 다음 구성을 사용합니다.

- Astro
- TypeScript
- TailwindCSS

무거운 애니메이션 라이브러리는 사용하지 않습니다.

## Page Structure

### Home

홈은 가장 중요한 페이지이며, 하나의 완성된 웹 이력서처럼 동작해야 합니다.

URL:

- `/ko`
- `/en`

섹션 순서:

1. Hero
2. Career Summary
3. Work Experience
4. Core Projects
5. Tech Stack
6. Education & Contact

요구사항:

- 하나의 자연스러운 세로 흐름
- dashboard처럼 잘게 분리된 느낌 지양
- Name, Role, Career experience가 강하게 보여야 함
- 실제 백엔드/운영/통합 경험이 드러나야 함
- mock data는 섹션별 최소 1개만 넣고, 디자인 완성도를 먼저 잡음

### Projects

URL:

- `/ko/projects`
- `/en/projects`

목적:

- 프로젝트 목록 제공
- 메인 이력서를 보완하는 case study 입구

요구사항:

- 상단 category filter
- active state styling
- 큰 clickable project card
- minimal card design
- consistent spacing
- `Capture` 버튼은 사용하지 않음

Project card content:

- Project title
- Short summary
- Tech tags
- Arrow CTA

### Project Detail

URL:

- `/ko/projects/[slug]`
- `/en/projects/[slug]`

목적:

- 기술 문서/엔지니어링 케이스 스터디처럼 프로젝트 상세 설명

Layout:

- Left: Overview, My Role, Key Contributions, Tech Stack
- Right: Architecture diagram, Screenshot gallery, sticky navigation

느낌:

- technical documentation
- engineering case study
- internal engineering wiki

마케팅 페이지처럼 보이지 않아야 합니다.

### Experience

URL:

- `/ko/experience`
- `/en/experience`

요구사항:

- timeline-style experience page
- minimal layout
- readable spacing
- simple vertical timeline

### Tech Stack

URL:

- `/ko/tech-stack`
- `/en/tech-stack`

요구사항:

- 레퍼런스 이미지 스타일을 따른 4개 grouped card
- progress bar나 percentage 사용 금지

Groups:

- Backend
- Database
- Infra / DevOps
- AI / Python

## Resume Download Strategy

현재 별도 PDF 파일은 없습니다.

정적 GitHub Pages 환경에서는 서버에서 PDF를 동적으로 생성하는 방식은 적합하지 않습니다. 대신 1차 구현에서는 다음 방식을 사용합니다.

- `Download Resume` 버튼은 브라우저 인쇄 기능(`window.print()`)을 호출
- 사용자는 브라우저의 `Save as PDF` 기능으로 현재 페이지를 PDF 저장
- print stylesheet를 별도로 다듬어 웹 이력서가 PDF로도 읽히게 만듦

나중에 필요하면 `public/resume.pdf` 같은 정적 PDF 파일을 추가하고 버튼을 직접 다운로드 링크로 바꿀 수 있습니다.

## Internationalization

한/영 다국어를 처음부터 지원합니다.

중요 원칙:

- 전체 페이지를 언어별로 복사하지 않음
- shared layouts
- shared components
- shared page structure
- language-specific content only

권장 구조:

```text
src/
  components/
  layouts/
  i18n/
    ko.json
    en.json
  pages/
    index.astro
    [locale]/
      index.astro
      projects/
        index.astro
        [slug].astro
      experience.astro
      tech-stack.astro
```

데이터가 커지면 다음 구조도 고려합니다.

```text
src/content/
  ko/
  en/
```

## Locale Routing

한국어가 기본 locale입니다.

Routes:

- `/` -> `/ko` redirect
- `/ko`
- `/en`
- `/ko/projects`
- `/en/projects`
- `/ko/projects/[slug]`
- `/en/projects/[slug]`
- `/ko/experience`
- `/en/experience`
- `/ko/tech-stack`
- `/en/tech-stack`

## Language Switcher

모든 페이지 상단 우측에 언어 전환 UI를 둡니다.

Desktop:

- Resume 버튼 옆 또는 theme toggle 옆
- 예: `[Resume] [KO | EN]`

Mobile:

- hamburger menu 안에 포함

요구사항:

- 현재 페이지 유지하며 locale만 변경
- active locale styling
- minimal UI
- layout이 흔들리지 않게 구현

예시:

```text
/ko/projects
-> EN 클릭
-> /en/projects
```

## Translation Rules

영어는 한국어를 직역하지 않습니다.

영문 콘텐츠는 다음 독자를 기준으로 자연스럽게 작성합니다.

- recruiters
- engineering managers
- backend engineering hiring

Tone:

- professional
- concise
- technical
- globally readable

## SEO / Metadata

locale-aware metadata를 지원합니다.

각 locale별로 다음을 다르게 설정합니다.

- `html lang`
- `title`
- `description`
- `og:title`
- `og:description`
- canonical URL

예:

- `/ko`: `lang="ko"`
- `/en`: `lang="en"`

## Responsive Requirements

모바일은 매우 중요합니다.

요구사항:

- smooth vertical flow
- spacing consistency
- hamburger menu
- no cramped cards
- clear visual hierarchy
- premium developer resume app 느낌

한글/영어 텍스트 길이 차이에도 깨지지 않아야 합니다.

구현 시 고려:

- flexible text containers
- responsive typography
- avoid fixed-height text cards
- allow controlled wrapping
- consistent spacing regardless of locale

## Data Strategy

초기 구현은 mock data로 진행합니다.

원칙:

- 각 섹션마다 placeholder/mock item은 최소한만 사용
- 디자인과 레이아웃을 먼저 완성
- 실제 회사 프로젝트 및 경력 상세는 별도 정리 후 반영
- 퍼블릭 저장소에 올리기 전 회사 내부 정보, 고객사명, 민감한 수치, 내부 시스템명은 반드시 검토

실제 경력 자료는 별도 로컬 작업공간에 정리되어 있으며, 이 저장소에는 바로 포함하지 않습니다.

## Implementation Principles

- reusable components
- clean folder structure
- production-quality code
- semantic HTML
- accessible markup
- consistent spacing system
- consistent typography scale
- no over-engineering
- no hardcoded strings scattered across components

## Near-Term Implementation Plan

구현을 시작할 때는 먼저 사용자에게 아래 내용을 명시하고 진행합니다.

1. TailwindCSS와 TypeScript 설정 추가
2. i18n 라우팅 구조 추가
3. shared layout/navigation/language switcher 구현
4. mock data 기반 Home 페이지 구현
5. Projects, Project Detail, Experience, Tech Stack 페이지 골격 구현
6. print-friendly resume download 버튼 구현
7. local build 검증
8. 사용자가 승인한 경우에만 commit/push

## Current Decisions

- 이름은 `Heetae Lee`
- 메인 직무는 `Software Engineer`
- 한국어가 기본 locale
- `/`는 `/ko`로 redirect
- `Capture` 버튼은 제거
- PDF 파일은 당장 만들지 않고 `window.print()` 기반으로 시작
- 실제 프로젝트 데이터는 나중에 반영
- 우선 디자인과 구조를 먼저 잡음
