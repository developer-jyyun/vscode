// src/components/UI/KeyValueCode.tsx
import Link from "next/link";

interface Props {
  keyName: string;
  value?: string;
  link?: string; // 있으면 앵커로 렌더
}

export default function KeyValueCode({ keyName, value, link }: Props) {
  return (
    <p className="text-white">
      <span className="text-code-red">{keyName}</span>
      <span className="text-gray-c">: </span>

      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
          className="text-code-purple underline underline-offset-4 decoration-dotted"
          title={link}
        >
          {`"${value}"`}{" "}
          <span aria-hidden className="align-middle">
            ↗
          </span>
        </Link>
      ) : (
        <span className="text-code-lime">{`"${value}"`}</span>
      )}

      <span className="text-gray-c">,</span>
    </p>
  );
}
