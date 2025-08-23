"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

function StatusBadge({ status }: { status?: Project["status"] }) {
  if (!status) return null;
  const cls =
    status === "active"
      ? "bg-emerald-600"
      : status === "wip"
      ? "bg-amber-600"
      : "bg-slate-600";
  return (
    <span className={`px-2 py-0.5 rounded text-xs text-white ${cls}`}>
      {status}
    </span>
  );
}

export default function ProjectCard({ item }: { item: Project }) {
  return (
    <li className="group bg-contents-navy border border-slate-700 rounded-lg p-4 flex flex-col gap-3 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <StatusBadge status={item.status} />
      </div>

      {item.image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <p className="text-zinc-300 text-sm leading-6">{item.desc}</p>

      {!!item.tech?.length && (
        <ul className="flex flex-wrap gap-1">
          {item.tech.map((t) => (
            <li
              key={t}
              className="px-2 py-0.5 rounded bg-slate-800 text-xs text-indigo-100"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
      {item.github && (
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.title} GitHub`}
          className="w-full inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-code-purple
                         border border-slate-600 text-contents-navy hover:bg-slate-800
                         focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-0 transition"
        >
          Read Me
        </a>
      )}
      {(item.site || item.github) && (
        <div className="mt-3 flex flex-col gap-2">
          {item.site && (
            <a
              href={item.site}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title} go page`}
              className="w-full inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium
                         bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2
                         focus:ring-indigo-400 focus:ring-offset-0 transition"
            >
              VIEW SITE
            </a>
          )}
        </div>
      )}

      {!!item.children?.length && (
        <div className="mt-2">
          <p className="text-zinc-400 text-xs mb-1">주요 구현 기능</p>
          <ul className="list-disc pl-5 space-y-1">
            {item.children.map((c) => (
              <li key={c.title} className="text-sm">
                {c.site ? (
                  <Link
                    href={c.site}
                    target="_blank"
                    className="underline text-indigo-200 hover:text-indigo-100"
                  >
                    {c.title}
                  </Link>
                ) : (
                  <span className="text-zinc-300">{c.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.note && <p className="text-zinc-400 text-xs mt-1">{item.note}</p>}
    </li>
  );
}
