import React from "react";

interface Props {
  objName: string;
  children: React.ReactNode;
  type: "obj" | "arr";
  className?: string;
}

export default function CodeBlock({
  objName,
  type = "obj",
  children,
  className,
}: Props) {
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

      {children}

      <span className="block ml-8 mt-8 text-4xl font-bold max-lg:text-xl">
        {type === "obj" ? "}" : "]"}
      </span>
    </div>
  );
}
