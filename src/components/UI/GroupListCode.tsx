type Group = { title: string; details: string[] };

export default function GroupListCode({
  keyName,
  groups,
  bracketAlign = "key",
}: {
  keyName: string;
  groups: Group[];
  bracketAlign?: "key" | "content";
}) {
  const contentIndentCls = "ml-6";
  const closingIndentCls = bracketAlign === "content" ? contentIndentCls : "";

  return (
    <div className="font-mono text-sm leading-7">
      <div>
        <span className="text-code-red">{keyName}</span>
        <span className="text-gray-c">: [</span>
      </div>
      <div className={`${contentIndentCls} space-y-4`}>
        {groups.map((g, idx) => {
          const hasDetails = Array.isArray(g.details) && g.details.length > 0;

          // ✅ details 없는 항목: 한 줄로 "{ title: "...", },"
          if (!hasDetails) {
            return (
              <div key={idx} className="text-code-lime">
                {"{"} <span className="text-white">title</span>
                <span className="text-gray-c">: </span>
                <span className="text-white">{g.title}</span>
                <span className="text-light-yellow"> {"}"}</span>
                <span className="text-gray-c">,</span>
              </div>
            );
          }

          // ✅ details 있는 항목: 기존 멀티라인 형식
          return (
            <div key={idx}>
              <div className="text-code-lime">
                {"{"} <span className="text-white">title</span>
                <span className="text-gray-c">: </span>"
                <span className="text-white">{g.title}</span>"
                <span className="text-gray-c">,</span>
              </div>
              <ul className="list-disc pl-5">
                {g.details!.map((d, i) => (
                  <li key={i} className="text-white">
                    {d}
                  </li>
                ))}
              </ul>
              <div>
                <span className="text-light-yellow">{"}"}</span>
                <span className="text-gray-c">,</span>
              </div>
            </div>
          );
        })}
      </div>

      {/*  <div
        className={`${closingIndentCls} text-gray-c`}
        style={{ textIndent: "-2ch" }}
      >
        <span className="text-light-yellow">]</span>
        <span className="text-gray-c">,</span>
      </div> */}
      <div
        className={`${closingIndentCls} text-gray-c`}
        style={{ textIndent: "-2ch" }}
      >
        ],
      </div>
    </div>
  );
}
