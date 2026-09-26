# heetae-L.github.io

개인 홈페이지 저장소입니다.

## Website

[https://heetae-l.github.io/](https://heetae-l.github.io/)

## About

경력, 프로젝트, 기술 스택, 연락 정보를 정리하는 웹 레쥬메 및 포트폴리오 사이트

## Contents

- Resume-first homepage
- Project case studies
- Work experience timeline
- Tech stack overview
- Korean / English pages

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript

## Portfolio Files

- 편집 정본: [heetae-lee-portfolio.pptx](public/downloads/heetae-lee-portfolio.pptx) (12장, 기본 URL `/ko/`)
- 일반 PDF: [heetae-lee-portfolio.pdf](public/downloads/heetae-lee-portfolio.pdf) (기본 URL `/ko/`)
- 제출용 PDF: [heetae-lee-portfolio-submission.pdf](public/downloads/heetae-lee-portfolio-submission.pdf) (개인정보 제외 URL `/ko/portfolio/`)
- 이전 버전은 `portfolio/archive/`에 PPTX 한 개만 보관. PDF는 필요한 경우 다시 변환.
- 슬라이드 미리보기: [portfolio-preview.png](portfolio/preview/portfolio-preview.png)

두 PDF는 표지와 마지막 페이지의 URL만 다르며, 사이트 다운로드 버튼은 일반·제출용 화면에 맞는 PDF를 제공. 제출용 PDF는 편집 정본에서 URL만 바꾼 임시 PPTX로 생성하고 임시 파일은 배포하지 않음.
`public/downloads/`의 파일은 배포 후 직접 URL로 접근 가능.

## Deployment

`main` 브랜치에 push, GitHub Actions가 정적 사이트를 빌드하고 GitHub Pages로 배포.

## Local Memo

```bash
npm install
npm run dev
npm run build
```
