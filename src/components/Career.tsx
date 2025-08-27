import CodeBlock from "./UI/CodeBlock";
import KeyValueCode from "./UI/KeyValueCode";
import ArrayCode from "./UI/ArrayCode";
import GroupListCode from "./UI/GroupListCode";

export default function Career() {
  return (
    <CodeBlock objName="careerDetails" type="obj">
      <KeyValueCode keyName="companyName" value="해커스 어학원" />
      <KeyValueCode keyName="position" value="웹 개발2팀 퍼블리셔" />
      <KeyValueCode keyName="period" value="2021.08–2023.02" />

      <ArrayCode
        keyName="inChargeOf"
        array={[
          { text: "#해커스어학원", link: "https://www.hackers.ac/" },
          { text: "#해커스편입", link: "https://ingang.hackersut.com/" },
          { text: "#해커스유학", link: "https://www.hackersuhak.com/" },
          { text: "#고우해커스", link: "https://www.gohackers.com/" },
          { text: "#해커스인강", link: "https://champ.hackers.com/" },
        ]}
        type="wrap"
      />

      <GroupListCode
        keyName="task"
        bracketAlign="content" // 긴 배열은 들여쓰기 정렬 권장
        groups={[
          {
            title: "해커스 교육그룹 퍼블리셔 근무",
            details: [
              "메인 페이지 리뉴얼 및 다수의 이벤트·랜딩 페이지 퍼블리싱",
              "공통 템플릿(배너·헤더·CTA·카운트)으로 연/월 교체형 이벤트 대량 운영",
              "Lazy Load·이미지 압축·GIF 대체로 리소스 90%+ 최적화",
              "영상 자동재생 UX 개선(진입 시 재생·이탈 시 정지)",
              "기획·디자인 협업으로 매출 요구와 사용자 경험 균형 조율",
            ],
          },
          {
            title: "육군본부 이러닝 퍼블리싱",
            details: [
              "폐쇄망(서버 연동 불가)에서 HTML/CSS/JS 로컬 구조 설계",
              "외장하드 전달 리소스 관리 및 전화 소통 중심 협업",
              "제약 속 문제 해결 및 안정적 납품",
            ],
          },
          {
            title: "프론트엔드 부트캠프 수료 (패스트캠퍼스 X 야놀자)",
            details: [
              "React, TypeScript, Next.js 기반 프로젝트 다수",
              "컴포넌트 재사용성·SSR·클린 코드 학습",
              "PM·UI/UX·백엔드와 협업",
            ],
          },
        ]}
      />

      <ArrayCode
        className="mt-2"
        keyName="representativePages"
        array={[
          {
            text: "0원 무제한패스 - 김동영·한승태",
            link: "https://champ.hackers.com/?c=event&evt_code=31254324&sk=type5",
          },
          {
            text: "편입 T-PASS",
            link: "https://ingang.hackersut.com/event/?evt_code=42342422",
          },
          {
            text: "편입 유형검사",
            link: "https://ingang.hackersut.com/event/?evt_id=22052500",
          },
        ]}
        type="wrap"
        bracketAlign="content"
        comment={[
          "링크는 운영 중 주기적으로 갱신·대체되었습니다. 위 링크는 당시 제작과 동일/유사 구조의 예시입니다.",
          "작업물·문서는 정책상 외부 반출이 불가해 첨부하지 못했으며,",
          "동일 템플릿으로 유사 페이지를 다수 운영했습니다(연도·카피·이미지 교체 중심).",
        ].join("\n")}
      />
    </CodeBlock>
  );
}
