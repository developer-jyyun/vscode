export type Project = {
  id?: string; //키 안전성용
  title: string;
  desc: string;
  tech: string[];
  image?: string;
  github?: string;
  site?: string;
  status?: "active" | "expired" | "wip";
  note?: string;
  children?: { title: string; site?: string }[]; //
};

export const projects: Project[] = [
  {
    id: "Web Front-end-portfolio",
    title: "Web Front-end Portfolio (2025)",
    desc: "Next.js + Tailwind + TypeScript 기반 개인 포트폴리오",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/thumbs/vscode.png",
    github: "https://github.com/developer-jyyun/vscode/blob/main/README.md",
    site: "",
    status: "active",
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
  },
  {
    id: "cotie-clone",
    title: "꼬띠샵 클론코딩",
    desc: "반려동물 편집숍 꼬띠샵 메인 페이지 클론 프로젝트",
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
  },

  {
    id: "wedding-invite",
    title: "모바일 청첩장",
    desc: "반응형 싱글페이지 (진행중)",
    tech: ["React", "Tailwind"],
    status: "wip",
  },
  {
    id: "publishing-2021",
    title: "Portfolio(2021)",
    desc: "신입 퍼블리셔 포트폴리오 (정적 UI)",
    tech: ["HTML", "CSS", "jQuery"],
    image: "/thumbs/2021-portfolio.png",
    github: "https://github.com/developer-jyyun/publishing_portfolio2021",
    site: "https://lively-figolla-d6b939.netlify.app",
    status: "active",
    children: [
      { title: "해커스 어학원 클론" },
      { title: "스타벅스 클론" },
      { title: "기타 웹페이지 리뉴얼(기획, 디자인) 프로젝트" },
    ],
    note: "정적 구현 중심, 이후 최신 스택으로 개선 가능",
  },
  {
    id: "team-a",
    title: "패키지 여행 서비스",
    desc: "Next.js + ts 팀 파이널 프로젝트(서버 만료)",
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
  },
];
