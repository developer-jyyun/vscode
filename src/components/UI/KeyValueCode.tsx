import Link from "next/link";
import React from "react";

interface Props {
  keyName: string;
  value: string | string[];
  link?: string;
  array?: boolean;
}

export default function KeyValueCode({ keyName, value, link, array }: Props) {
  return (
    <p className="indent-10 text-white max-lg:indent-0">
      <span className="text-code-red">{keyName}</span>:
      {link ? (
        <Link href={link} className="text-code-lime ml-2 max-lg:ml-1">
          {`"${value}"`}
        </Link>
      ) : (
        <span className="text-code-lime ml-2 max-lg:ml-1">{`"${value}"`}</span>
      )}
      ,
    </p>
  );
}
