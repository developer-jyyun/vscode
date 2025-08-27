import Link from "next/link";

type Item = { text: string; link?: string } | string;

type Props = {
  keyName: string;
  array: Item[] | Item | Record<string, any> | null | undefined;
  type?: "wrap" | "list";
  bracketAlign?: "key" | "content";
  comment?: string; // 링크 아래 주석(줄바꿈 \n 지원)
  className?: string;
};

export default function ArrayCode({
  keyName,
  array,
  type = "wrap",
  bracketAlign = "key",
  comment,
  className = "",
}: Props) {
  const items = normalizeToArray(array);
  const contentIndentCls = "ml-6";
  const closingIndentCls = bracketAlign === "content" ? contentIndentCls : "";

  return (
    <div className={`font-mono text-sm leading-7 ${className}`}>
      {/* key: [ */}
      <div>
        <span className="text-code-red">{keyName}</span>
        <span className="text-gray-c">: [</span>
      </div>

      {/* 내용 */}
      <div className={contentIndentCls}>
        {type === "wrap" ? (
          <div className="inline-flex flex-wrap gap-2 gap-y-2 items-center">
            {items.map((item, i) => {
              const obj = typeof item === "string" ? { text: item } : item;
              const isLink = !!obj.link;
              return isLink ? (
                <Link
                  key={i}
                  href={obj.link!}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="px-2 py-1 rounded border border-code-purple/60 text-code-purple hover:bg-code-purple hover:text-contents-navy transition underline underline-offset-4 decoration-dotted"
                  title={obj.link}
                >
                  {obj.text}
                  <span aria-hidden className="ml-1 align-middle">
                    ↗
                  </span>
                </Link>
              ) : (
                <span
                  key={i}
                  className="px-2 py-1 rounded bg-white/5 border border-white/10"
                >
                  {obj.text}
                </span>
              );
            })}
          </div>
        ) : (
          <ul className="list-disc pl-5">
            {items.map((item, i) => {
              const obj = typeof item === "string" ? { text: item } : item;
              const isLink = !!obj.link;
              return (
                <li key={i}>
                  {isLink ? (
                    <Link
                      href={obj.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      className="underline underline-offset-4 decoration-dotted text-code-purple hover:opacity-90"
                    >
                      {obj.text}
                      <span aria-hidden className="ml-1">
                        ↗
                      </span>
                    </Link>
                  ) : (
                    <span className="text-white">{obj.text}</span>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {/* 링크 아래 주석 */}
        {comment && (
          <div className="mt-3 space-y-1 text-gray-c">
            {comment.split("\n").map((line, idx) => (
              <p
                key={idx}
                className="relative pl-6 before:content-['//'] before:absolute before:left-0 before:text-gray-c whitespace-pre-line"
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 닫는 대괄호 */}
      <div className={`${closingIndentCls} text-gray-c`}>],</div>
    </div>
  );
}

function normalizeToArray(
  input: Item[] | Item | Record<string, any> | null | undefined
): Item[] {
  if (Array.isArray(input)) return input;
  if (input == null) return [];
  if (typeof input === "string") return [input];
  if (typeof input === "object" && "text" in (input as any))
    return [input as Item];
  if (typeof input === "object") return Object.values(input as any);
  return [];
}
