import Link from "next/link";
import CodeBlock from "./UI/CodeBlock";
import KeyValueCode from "./UI/KeyValueCode";
import ArrayCode from "./UI/ArrayCode";
import ContactInfo from "./UI/ContactInfo";

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
          array="웹디자인기능사, 정보처리기사"
          type="nowrap"
        />

        <ArrayCode
          keyName="education"
          array="대진대학교 아동학과 졸업,패스트캠퍼스X야놀자:프론트엔드 개발 부트캠프 과정 수료"
          type="wrap"
        />
      </CodeBlock>
    </>
  );
}
