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

## Resume Files

- 편집 정본: [heetae-lee-resume.html](public/downloads/heetae-lee-resume.html)
- 제출용 PDF: [heetae-lee-resume.pdf](public/downloads/heetae-lee-resume.pdf) (A4 4페이지)
- 2026-09-30 현대오토에버 지원에 사용한 범용 이력서. PDF 제출 시 파일명은 `heetae-lee_Resume.pdf`.
- HTML의 인쇄 스타일을 적용해 PDF를 생성한다. HTML을 수정하면 PDF도 다시 생성해야 한다.
- 헤더·Home의 Resume 메뉴에서 HTML 웹 보기와 PDF 다운로드를 제공한다. EN에서도 파일은 한국어이므로 메뉴 안에 KO로 표시한다.
- Portfolio 메뉴는 기존 PDF의 미리보기(새 탭)와 다운로드를 제공한다. 700px 미만은 상단 이름을 생략하고 페이지 메뉴·햄버거를 한 줄로 고정하며 문서·언어·테마·GitHub를 햄버거 안에 둔다. 700~939px은 문서 아이콘을, 940px 이상은 문서 버튼을 사용한다. 별도 문서 파일이나 PDF 뷰어는 만들지 않는다.
- 개인정보 제외 모드에서는 연락처가 있는 Resume 메뉴를 숨기고 Portfolio 보기·다운로드를 모두 제출용 PDF로 연결한다. 기존 public 파일의 직접 URL 접근까지 차단하는 기능은 아니다.

## Analytics

- GA4 측정 ID: `G-B05RJDTZCM`. 공통 `src/layouts/SiteLayout.astro`에서 KO/EN과 제출용 페이지를 측정한다.
- 운영 빌드의 `heetae-l.github.io`에서만 수집한다. 개발 서버와 로컬 production preview는 수집하지 않는다.
- Google signals와 광고 개인화를 비활성화하고 기본 페이지 조회 URL에서 query/hash를 제외한다. 향상된 측정의 링크 URL 등은 별도 수집 항목이므로 GA4의 이메일 데이터 수정 설정도 확인한다.
- 페이지 조회 및 GA4에서 켠 향상된 측정(스크롤, 외부 링크, PDF 링크 클릭)을 사용한다. 직접 PDF URL을 연 경우와 다운로드 완료는 이 태그로 측정하지 않는다. `public/downloads/`의 독립 레쥬메 HTML에는 태그를 넣지 않는다.
- 내 운영 방문 제외와 데이터 보관·이메일 데이터 수정 설정은 GA4 관리 화면에서 별도로 설정한다. 배포 후 실시간 보고서에서 수신을 확인한다.
- 운영 배포 전 Analytics 쿠키 사용 고지와 방문자 지역에 따른 동의 필요 여부를 점검한다. 광고 개인화 비활성화가 분석 쿠키의 비활성화를 의미하지는 않는다.

## Deployment

`main` 브랜치에 push, GitHub Actions가 정적 사이트를 빌드하고 GitHub Pages로 배포.

## Local Memo

```bash
npm install
npm run dev
npm run build
```
