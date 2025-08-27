import CodeBlock from "@/components/UI/CodeBlock";
import KeyValueCode from "@/components/UI/KeyValueCode";
import Link from "next/link";
import ContactInfo from "./ContactInfo";
import ArrayCode from "@/components/UI/ArrayCode";
import GroupListCode from "@/components/UI/GroupListCode";

export default function Profile() {
  return (
    <>
      <CodeBlock objName="profile" type="obj">
        <KeyValueCode keyName="name" value="윤지영" />
        <ContactInfo />
        <KeyValueCode
          keyName="notion"
          value="TIL"
          link="https://www.notion.so/15dfb6352f43495c8b24f038119e42fd?v=77c4bd7ca98a4007bffa1f9617b7a725&pvs=25"
        />

        <ArrayCode
          keyName="certificate"
          array={["웹디자인기능사", "정보처리기사"]}
          type="list"
          bracketAlign="content"
        />
        <GroupListCode
          keyName="education"
          bracketAlign="content"
          groups={[
            {
              title: "대진대학교 아동학과 졸업",
              details: [], // 상세 없이 제목만 보여줄 항목
            },
            {
              title:
                "패스트캠퍼스 × 야놀자 프론트엔드 부트캠프 (2023.07–2024.01) [교육이수]",
              details: [
                "커리큘럼: Git/GitHub, HTML/CSS, JavaScript, React, TypeScript, Next.js",
                "프로젝트: 토이 → 미니(Fe/Be 협업) → 기업 연계 파이널(Fe/Be/디자이너/기획자 협업)",
              ],
            },
            {
              title:
                "그린아카데미 (2020.11–2021.04) — UI/UX 반응형 웹 디자인 코딩 실무 [교육이수]",
              details: [
                "웹 기획·디자인·퍼블리싱 / 정보설계·UI설계·화면설계",
                "웹 표준·접근성·크로스브라우징·반응형 고려 구현",
                "사용 기술: HTML5, CSS3, jQuery, JavaScript",
              ],
            },
          ]}
        />
        <KeyValueCode
          keyName="resume"
          value="📃 이력서(PDF)"
          link="/docs/resume.pdf"
        ></KeyValueCode>
      </CodeBlock>
    </>
  );
}
