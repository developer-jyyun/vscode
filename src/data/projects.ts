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
  category: Category; // 퍼블리싱/프런트엔드 구분
};

export const projects: Project[] = [
  {
    id: "Web Front-end-portfolio",
    title: "Web Front-end Portfolio (2025)",
    desc: "2025 VS Code 테마 개인 포트폴리오",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/thumbs/vscode.png",
    github: "https://github.com/developer-jyyun/vscode/blob/main/README.md",
    site: "https://fe-vscode-portfolio.netlify.app/projects",
    status: "active",
    category: "frontend",
  },
  {
    id: "disney-clone",
    title: "영화 정보 서비스",
    desc: "React + TMDB API 기반 영화 정보 제공 서비스",
    tech: ["React", "React Router", "TMDB"],
    image: "/thumbs/disney.png",
    site: "https://diseneyplus-ffe32.web.app/main",
    github:
      "https://github.com/developer-jyyun/disney-deploy/blob/main/README.md",
    status: "active",
    children: [
      { title: "구글 로그인 & 게스트 모드 지원" },
      { title: "트렌딩/평점순 카테고리 섹션" },
      { title: "검색 (디바운스 적용)" },
      { title: "반응형 네비게이션 & 모달" },
    ],
    note: "실제 영상 스트리밍은 제공하지 않음 (TMDB API 데이터 기반)",
    category: "frontend",
  },
  {
    id: "wedding-invite",
    title: "모바일 청첩장",
    desc: "반응형 싱글페이지",
    tech: ["React", "Tailwind"],
    image: "/thumbs/mowd.png",
    site: "https://jiyoung-chunho-wedding.netlify.app/",
    github:
      "https://github.com/developer-jyyun/mo-weddingy/blob/main/README.md",
    status: "active",
    category: "frontend",
  },
  {
    id: "cotie-clone",
    title: "꼬띠샵 클론 코딩",
    desc: "반려동물 편집숍 메인 페이지 반응형 클론코딩",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "AOS"],
    image: "/thumbs/cotie.png",
    site: "https://celebrated-entremet-59e693.netlify.app",
    github:
      "https://github.com/developer-jyyun/cotie-clone/blob/main/README.md",
    status: "active",
    children: [
      { title: "시맨틱 태그 기반 마크업" },
      { title: "반응형 레이아웃 (PC / Mobile 뷰)" },
      { title: "검색 모달, GNB 서브메뉴, 슬라이드 구현" },
      { title: "CSS 애니메이션 & AOS 스크롤 이벤트" },
      { title: "영역별 커서 이미지 변경" },
      { title: "Footer 토글로 사업자 정보 표시" },
    ],
    category: "publishing",
  },
  {
    id: "publishing-2021",
    title: "Web Publisher Portfolio(2021)",
    desc: "신입 퍼블리셔 포트폴리오 (정적 UI)",
    tech: ["HTML", "CSS", "jQuery"],
    image: "/thumbs/2021-portfolio.png",
    github:
      "https://github.com/developer-jyyun/publishing_portfolio2021/blob/main/README.md",
    site: "https://lively-figolla-d6b939.netlify.app",
    status: "active",
    children: [
      { title: "해커스 어학원 클론" },
      { title: "스타벅스 클론" },
      { title: "기타 웹페이지 리뉴얼(기획, 디자인) 프로젝트" },
    ],
    note: "정적 구현 중심, 이후 최신 스택으로 개선 가능",
    category: "publishing",
  },
  {
    id: "team-a",
    title: "패키지 여행 서비스",
    desc: "팀 파이널 프로젝트",
    tech: ["Next.js", "TypeScript", "React Query", "Tailwind"],
    image: "/thumbs/team-final.png",
    github: "https://github.com/developer-jyyun/team_final/blob/main/README.md",
    status: "expired",
    children: [
      { title: "My Page 유저 정보 등록 및 수정" },
      { title: "리뷰 작성 및 삭제" },
      { title: "예약 목록 및 내가 쓴 리뷰 목록 확인" },
      { title: " 공지사항, 자주 묻는 질문" },
    ],
    note: "서버 만료 — README에 캡처/회고 수록",
    category: "frontend",
  },
  {
    id: "tr1ll1on",
    title: " 숙박 예약 서비스",
    desc: "팀 미니 프로젝트 숙박 예약 서비스",
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
    note: "서버 만료 — README에 캡처/회고 수록",
    children: [
      // 주요 기능
      { title: "숙소/객실 조회 및 상세 페이지" },
      { title: "리뷰 정렬(최신/오래된/높은 평점/낮은 평점)" },
      { title: "리뷰 페이지네이션" },
      { title: "로딩 스피너 적용" },
    ],
  },
];

export const getProjectsByCategory = (cat: Category) =>
  projects.filter((p) => p.category === cat);

export const grouped: Record<Category, Project[]> = {
  publishing: getProjectsByCategory("publishing"),
  frontend: getProjectsByCategory("frontend"),
};
