export const CATEGORIES = ["publishing", "frontend"] as const;
export type Category = (typeof CATEGORIES)[number];
export type Status = "active" | "expired";

export type Project = {
  id?: string;
  title: string;
  desc: string;
  tech: string[];
  image?: string;
  github?: string;
  site?: string;
  status?: Status;
  note?: string;
  children?: { title: string; site?: string }[];
  category: Category;
};

export const projects: Project[] = [
  {
    id: "portfolio-2025",
    title: "프론트엔드 포트폴리오 (2025)",
    desc: "Next.js 기반, VS Code UI 인터페이스를 재현한 개인 포트폴리오.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Nodemailer"],
    image: "/thumbs/vscode.png",
    site: "https://fe-vscode-portfolio.netlify.app/projects",
    github: "https://github.com/developer-jyyun/vscode/blob/main/README.md",
    status: "active",
    category: "frontend",
    children: [
      { title: "VS Code UI 인터페이스 디자인" },
      { title: "사이드바, 탭바, 코드블록 구현" },
      { title: "프로젝트 데이터 자동 렌더링 (`projects.ts` 기반)" },
      { title: "Contact 페이지: Nodemailer + Gmail SMTP 연동" },
    ],
  },
  {
    id: "disney-clone",
    title: "영화 정보 서비스",
    desc: "React + TMDB API 기반 영화 정보 제공 서비스.",
    tech: ["React", "React Router", "styled-components", "TMDB"],
    image: "/thumbs/disneyplus.png",
    site: "https://diseneyplus-ffe32.web.app/main",
    github:
      "https://github.com/developer-jyyun/disney-deploy/blob/main/README.md",
    status: "active",
    category: "frontend",
    children: [
      { title: "구글 로그인 및 게스트 모드" },
      { title: "트렌딩 / 평점순 카테고리 제공" },
      { title: "검색 (디바운스 적용)" },
      { title: "반응형 내비게이션 및 모달" },
    ],
    note: "실제 영상 스트리밍은 제공하지 않으며 TMDB API 데이터만 사용.",
  },
  {
    id: "wedding-invite",
    title: "모바일 청첩장 SPA",
    desc: "React + TypeScript 기반 반응형 모바일 청첩장.",
    tech: ["React", "TypeScript", "SCSS Modules", "Framer Motion"],
    image: "/thumbs/mowd.png",
    site: "https://jiyoung-chunho-wedding.netlify.app/",
    github: "https://github.com/developer-jyyun/mo-wedding/blob/main/README.md",
    status: "active",
    category: "frontend",
    children: [
      { title: "반응형 UI (기획·디자인·개발)" },
      { title: "연락처 연결 및 복사 기능" },
      { title: "D-Day 카운트다운 및 react-day-picker 캘린더" },
      { title: "카카오맵, 네이버 지도, 티맵 내비 연동" },
      { title: "계좌번호 복사 및 카카오페이 송금" },
      { title: "이미지 갤러리, 배경음악 토글, 영상 재생" },
    ],
    note: "실제 행사 초대용으로도 활용 가능한 반응형 SPA.",
  },
  {
    id: "cotie-clone",
    title: "꼬띠샵 클론코딩",
    desc: "HTML/CSS/JS 기반 반려동물 편집숍 메인 페이지 반응형 클론코딩.",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "AOS"],
    image: "/thumbs/cotie.png",
    site: "https://celebrated-entremet-59e693.netlify.app",
    github:
      "https://github.com/developer-jyyun/cotie/blob/KDT0_YunJiYoung/README.md",
    status: "active",
    category: "publishing",
    children: [
      { title: "시맨틱 태그 기반 마크업" },
      { title: "반응형 레이아웃 (PC/Mobile)" },
      { title: "검색 모달, GNB 서브메뉴, 슬라이드 구현" },
      { title: "CSS 애니메이션 및 AOS 스크롤 이벤트" },
      { title: "영역별 커서 이미지 변경" },
    ],
  },
  {
    id: "publishing-2021",
    title: "퍼블리셔 포트폴리오 (2021)",
    desc: "HTML/CSS/jQuery 기반 2021 신입 퍼블리셔 포트폴리오.",
    tech: ["HTML", "CSS", "jQuery", "JavasSript"],
    image: "/thumbs/2021-portfolio.png",
    github:
      "https://github.com/developer-jyyun/publishing_portfolio2021/blob/master/README.md",
    site: "https://jy-portfolio-publising.netlify.app",
    status: "active",
    category: "publishing",
    children: [
      { title: "해커스 어학원 클론" },
      { title: "스타벅스 클론" },
      { title: "반응형 웹페이지 리뉴얼 (기획·디자인)" },
      { title: "디자인 작업물 포함" },
    ],
    note: "2021년 퍼블리싱 작업물 + 2025 디자인 작업물 포함",
  },
  {
    id: "team-a",
    title: "패키지 여행 서비스",
    desc: "Next.js 기반 팀 프로젝트 (FE + BE + PM).",
    tech: ["Next.js", "TypeScript", "React Query", "Tailwind"],
    image: "/thumbs/team-final.png",
    github: "https://github.com/developer-jyyun/team_final/blob/main/README.md",
    status: "expired",
    category: "frontend",
    children: [
      { title: "마이페이지: 유저 정보 등록 및 수정" },
      { title: "리뷰 작성 및 삭제" },
      { title: "예약 목록 및 작성 리뷰 관리" },
      { title: "공지사항 및 FAQ" },
    ],
    note: "서버 만료 — README에 캡처 및 회고 수록.",
  },
  {
    id: "tr1ll1on",
    title: "숙박 예약 서비스",
    desc: "React + Vite 기반 팀 프로젝트 (FE + BE).",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "React Query",
      "Recoil",
      "Styled-components",
      "Axios",
      "MSW",
    ],
    image: "/thumbs/trillion.png",
    github: "https://github.com/developer-jyyun/team_mini",
    status: "expired",
    category: "frontend",
    children: [
      { title: "숙소/객실 조회 및 상세 페이지" },
      { title: "리뷰 정렬 (최신/오래된/평점순)" },
      { title: "리뷰 페이지네이션" },
      { title: "로딩 스피너 적용" },
    ],
    note: "서버 만료 — README에 캡처 및 회고 수록.",
  },
];

export const getProjectsByCategory = (cat: Category) =>
  projects.filter((p) => p.category === cat);

export const grouped: Record<Category, Project[]> = {
  publishing: getProjectsByCategory("publishing"),
  frontend: getProjectsByCategory("frontend"),
};
