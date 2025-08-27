import React from "react";

interface Props {
  objName: string;
  children: React.ReactNode;
  type: "obj" | "arr";
  className?: string;
}

const INDENT = "ml-6 max-lg:ml-0"; // 부모만 들여쓰기 담당

export default function CodeBlock({
  objName,
  type = "obj",
  children,
  className,
}: Props) {
  const closingChar = type === "obj" ? "}" : "]";
  const closingClass = type === "obj" ? "text-light-yellow" : "text-gray-c";
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
          {objName} = {type === "obj" ? "{" : "["}
        </span>
      </p>

      {/* 자식은 모두 동일 들여쓰기 */}
      <div className={INDENT}>{children}</div>

      {/* 닫는 괄호도 동일 들여쓰기 */}
      <span
        className={`block ${INDENT} mt-8 text-4xl font-bold max-lg:text-xl`}
      >
        <span className={closingClass}>{closingChar}</span>
      </span>
    </div>
  );
}
