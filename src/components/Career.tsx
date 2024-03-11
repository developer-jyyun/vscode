import Link from "next/link";
import CodeBlock from "./UI/CodeBlock";
import KeyValueCode from "./UI/KeyValueCode";
import ArrayCode from "./UI/ArrayCode";

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
        ]}
        type="wrap"
      />
      <ArrayCode
        keyName="task"
        array="웹 페이지 퍼블리싱,
          사이트 유지보수,
          수강신청 페이지 리뉴얼,
          웹 페이지 랜딩 속도 개선,
          2022 육군장병 이러닝 페이지 개발"
        type="wrap"
      />
    </CodeBlock>
  );
}
