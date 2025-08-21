import React from "react";

interface Group {
  title: string;
  details: string[];
}

interface Props {
  keyName: string;
  groups: Group[];
  type?: "wrap" | "nowrap";
}

export default function GroupListCode({
  keyName,
  groups,
  type = "wrap",
}: Props) {
  return (
    <div className="indent-10 text-white max-lg:indent-0 text-[14px] leading-7">
      {/* key명과 배열 시작 */}
      <span className="text-code-red">{keyName}</span>
      <span>: </span>
      <span className="text-code-lime">[</span>
      {type === "wrap" && <br />}
      {/* 각 그룹 객체 */}
      {groups.map((g, i) => (
        <React.Fragment key={i}>
          <div className={type === "wrap" ? "pl-4" : ""}>{"{"}</div>

          {/* title: "..." , */}
          <div className={type === "wrap" ? "pl-8" : "pl-4"}>
            <span className="text-code-red">title</span>
            <span>: </span>
            <span className="text-code-lime">{`"${g.title}"`}</span>
            <span>,</span>
          </div>

          {/* details: [ ... ] */}
          <div className={type === "wrap" ? "pl-8" : "pl-4"}>
            <span className="text-code-red">details</span>
            <span>: </span>
            <span className="text-code-lime">[</span>
            {type === "wrap" && <br />}

            {g.details.map((d, j) => (
              <React.Fragment key={j}>
                <span
                  className={`text-code-lime ${
                    type === "wrap" ? "pl-12" : "pl-2"
                  }`}
                >
                  {`"${d}"`}
                </span>
                {j < g.details.length - 1 && ","}
                {type === "wrap" && <br />}
              </React.Fragment>
            ))}

            <span className="text-code-lime">{"]"}</span>
            <span>,</span>
            {type === "wrap" && <br />}
          </div>

          <div className={type === "wrap" ? "pl-4" : ""}>
            {i === groups.length - 1 ? "}" : "},"}
          </div>
          {type === "wrap" && <br />}
        </React.Fragment>
      ))}
      {/* 배열 닫기 */}
      <span className="text-code-lime">]</span>,{type === "wrap" && <br />}
    </div>
  );
}
