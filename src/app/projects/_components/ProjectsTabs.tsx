"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";
import { projects, grouped, type Project } from "../../../data/projects";

type TabKey = "all" | "frontend" | "publishing";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Front-end" },
  { key: "publishing", label: "Publishing" },
];

export default function ProjectsTabs() {
  const search = useSearchParams();
  const router = useRouter();
  const initial = (search.get("tab") as TabKey) || "all";

  const [tab, setTab] = useState<TabKey>(initial);
  const [showExpired, setShowExpired] = useState(true);

  useEffect(() => {
    const q = new URLSearchParams(Array.from(search.entries()));
    q.set("tab", tab);
    router.replace(`?${q.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const list: Project[] = useMemo(() => {
    let base: Project[] = projects;
    if (tab === "frontend") base = grouped.frontend;
    if (tab === "publishing") base = grouped.publishing;

    const actives = base.filter((p) => p.status !== "expired");
    const expired = base.filter((p) => p.status === "expired");
    return showExpired ? [...actives, ...expired] : actives;
  }, [tab, showExpired]);

  return (
    <div className="space-y-6">
      {/* 탭 바 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4">
        {/* 버튼 영역: 모바일은 grid, PC는 flex */}
        <div className="flex w-full md:w-auto gap-2">
          {" "}
          {TABS.map((t) => {
            const active = t.key === tab;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex-1 md:flex-none text-center px-3 py-2 rounded-md text-sm font-medium transition
          ${
            active
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-white/10 text-white/80 hover:bg-white/20"
          }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* 체크박스 */}
        <label className="flex items-center justify-center gap-2 text-sm text-white/80 select-none">
          <input
            type="checkbox"
            checked={showExpired}
            onChange={(e) => setShowExpired(e.target.checked)}
            className="accent-indigo-500"
          />
          Show expired
        </label>
      </div>

      {/* 프로젝트 카드 리스트 */}
      <div className="rounded-md">
        <ul
          className="
            grid gap-8 px-6
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            items-stretch
          "
        >
          {list.map((p) => (
            <ProjectCard key={p.id ?? p.title} p={p} />
          ))}
        </ul>
      </div>
    </div>
  );
}
