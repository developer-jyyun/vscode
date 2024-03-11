import Link from "next/link";
import React from "react";

interface ArrayItem {
  text: string;
  link?: string;
}

interface Props {
  keyName: string;
  array: string | ArrayItem[];
  type: "wrap" | "nowrap";
}

export default function ArrayCode({ keyName, array, type }: Props) {
  const renderArrayItems = () => {
    if (typeof array === "string") {
      const items = array.split(",").map((item) => item.trim());
      return items.map((item, index) => (
        <React.Fragment key={index}>
          <span className={`text-code-lime ${type === "wrap" ? "pl-4" : ""}`}>
            {`"${item}"`}
          </span>
          {index < items.length - 1 && ","}
          {type === "wrap" && <br />}
        </React.Fragment>
      ));
    } else {
      // array 객체배열 매핑(link)
      return array.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link href={item.link}>
              <span
                className={`text-code-lime ${type === "wrap" ? "pl-4" : ""}`}
              >
                {`"${item.text}"`}
              </span>
            </Link>
          ) : (
            <span className={`text-code-lime ${type === "wrap" ? "pl-4" : ""}`}>
              {`"${item.text}"`}
            </span>
          )}
          {index < array.length - 1 && ","}
          {type === "wrap" && <br />}
        </React.Fragment>
      ));
    }
  };

  return (
    <div className="indent-10 text-white flex justify-start max-lg:indent-0">
      <div>
        <span className="text-code-red">{keyName}</span>
        <span>:</span>
      </div>
      <div className="text-code-lime indent-1 max-lg:ml-1">
        <span>[</span>
        {type === "wrap" && <br />}
        {renderArrayItems()}
        <span className="text-code-lime">]</span>,{type === "wrap" && <br />}
      </div>
    </div>
  );
}
