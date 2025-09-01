"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

function StatusBadge({ status }: { status?: Project["status"] }) {
  if (!status) return null;
  const cls = status === "active" ? "bg-emerald-600" : "bg-slate-600";
  return (
    <span className={`px-2 py-0.5 rounded text-xs text-white ${cls}`}>
      {status}
    </span>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <li
      className="h-full min-h-[480px] w-full group bg-white/5 border border-white/10 
                 rounded-lg p-4 flex flex-col hover:shadow-lg transition"
    >
      {/* 상단 제목 + 상태 */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base md:text-lg font-semibold text-white">
          {p.title}
        </h3>
        <StatusBadge status={p.status} />
      </div>

      {/* 본문 컨텐츠 (flex-1로 버튼 영역 위쪽 공간 고정) */}
      <div className="flex-1 flex flex-col gap-3">
        {p.image && (
          <div className="relative w-full aspect-[16/9] min-h-[180px] overflow-hidden rounded-md">
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain"
            />
          </div>
        )}

        <p className="text-zinc-300 text-sm leading-6">{p.desc}</p>

        {!!p.tech?.length && (
          <ul className="flex flex-wrap gap-1">
            {p.tech.map((t) => (
              <li
                key={t}
                className="px-2 py-0.5 rounded bg-slate-800 text-xs text-indigo-100"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {!!p.children?.length && (
          <div>
            <p className="text-zinc-400 text-xs mb-1">주요 구현 기능</p>
            <ul className="list-disc pl-5 space-y-1">
              {p.children.map((c) => (
                <li key={c.title} className="text-sm">
                  {c.site ? (
                    <a
                      href={c.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-indigo-200 hover:text-indigo-100"
                    >
                      {c.title}
                    </a>
                  ) : (
                    <span className="text-zinc-300">{c.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {p.note && <p className="text-zinc-400 text-xs mt-1">{p.note}</p>}
      </div>

      {/* 버튼 영역 (항상 맨 아래 고정) */}
      {(p.site || p.github) && (
        <div className="mt-3 flex flex-col gap-2">
          {p.site && (
            <a
              href={p.site}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} go page`}
              className="w-full inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium
                         bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2
                         focus:ring-indigo-400 focus:ring-offset-0 transition"
            >
              VIEW SITE
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} GitHub`}
              className="w-full inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-code-purple
                         border border-slate-600 text-contents-navy hover:bg-slate-800 hover:text-white
                         focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-0 transition"
            >
              Read Me
            </a>
          )}
        </div>
      )}
    </li>
  );
}
