import React from "react";

interface Props {
  objName: string;
  children: React.ReactNode;
  type: "obj" | "arr";
  className?: string;
}

const INDENT = "ml-6 max-lg:ml-0";

export default function CodeBlock({
  objName,
  type = "obj",
  children,
  className,
}: Props) {
  //  여닫는 기호와 색상을 한 곳에서 결정
  const openChar = type === "obj" ? "{" : "[";
  const closeChar = type === "obj" ? "}" : "]";
  const punctClass = (ch: "{" | "}" | "[" | "]") =>
    ch === "{" || ch === "}" ? "text-light-yellow" : "text-gray-c";

  return (
    <div
      className={`code-block text-xl text-white leading-8 bg-contents-navy rounded-md p-8 
                  max-lg:p-2 max-lg:text-xs max-lg:tracking-tighter ${
                    className ?? ""
                  }`}
    >
      <p className="mb-8">
        <span className="text-xl font-bold text-cyan-300 max-lg:text-md">
          const
        </span>
        <span className="ml-4 text-4xl font-bold max-lg:text-xl">
          {objName} = <span className={punctClass(openChar)}>{openChar}</span>
        </span>
      </p>

      <div className={INDENT}>{children}</div>

      <span
        className={`block ${INDENT} mt-8 text-4xl font-bold max-lg:text-xl`}
      >
        <span className={punctClass(closeChar)}>{closeChar}</span>
      </span>
    </div>
  );
}
