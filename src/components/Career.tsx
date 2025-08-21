import Link from "next/link";
import CodeBlock from "./UI/CodeBlock";
import KeyValueCode from "./UI/KeyValueCode";
import ArrayCode from "./UI/ArrayCode";
import GroupListCode from "./UI/GroupListCode";

export default function Career() {
  return (
    <CodeBlock objName="careerDetails" type="obj">
      <KeyValueCode keyName="companyName" value="해커스 어학원" />
      <KeyValueCode keyName="position" value="웹 개발팀 퍼블리셔" />
      <KeyValueCode keyName="period" value="2021.08 ~ 2023.02" />
      <ArrayCode
        keyName="inChargeOf"
        array={[
          {
            text: "#해커스어학원",
            link: "//www.hackers.ac/",
          },
          { text: "#해커스편입", link: "//ingang.hackersut.com/" },
          { text: "#해커스유학", link: "//www.hackersuhak.com/" },
          { text: "#고우해커스", link: "//www.gohackers.com/" },
          { text: "#해커스인강", link: "//champ.hackers.com" },
        ]}
        type="wrap"
      />
      <GroupListCode
        keyName="task"
        groups={[
          {
            title: "해커스 교육그룹 퍼블리셔 근무",
            details: [
              "메인 페이지 리뉴얼 및 다수의 이벤트·랜딩 페이지 퍼블리싱",
              "Lazy Load 적용, 이미지 압축 및 GIF 대체를 통한 리소스 90% 이상 최적화",
              "영상 자동재생 UX 개선 (진입 시 재생/이탈 시 정지)",
              "기획자·디자이너와 협업하며 매출 요구와 사용자 경험 사이 균형 조율",
            ],
          },
          {
            title: "육군본부 이러닝 퍼블리싱",
            details: [
              "폐쇄망 환경(서버 연동 불가)에서 HTML/CSS/JS 기반 로컬 구조 설계",
              "외장하드 전달 리소스 관리 및 전화 소통 중심 협업",
              "제약 속 문제 해결 및 안정적 납품 경험 축적",
            ],
          },
          {
            title: "프론트엔드 부트캠프 수료 (패스트캠퍼스 X 야놀자)",
            details: [
              "React, TypeScript, Next.js 기반 프로젝트 다수 진행",
              "컴포넌트 재사용성·SSR·클린 코드 학습",
              "PM·UI/UX 디자이너·백엔드 개발자와 협업 경험",
            ],
          },
        ]}
      />
    </CodeBlock>
  );
}
