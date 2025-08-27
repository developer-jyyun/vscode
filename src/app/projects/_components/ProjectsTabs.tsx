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
    // 1) 탭별 기본 리스트 선택
    let base: Project[];
    switch (tab) {
      case "frontend":
        base = grouped.frontend;
        break;
      case "publishing":
        base = grouped.publishing;
        break;
      default:
        base = projects; // All은 원본 배열 순서 그대로
    }

    // 2) 상태 파티셔닝 (원본 순서 유지)
    const actives = base.filter((p) => p.status !== "expired");
    const expired = base.filter((p) => p.status === "expired");

    // 3) 만료 포함 여부에 따라 병합
    return showExpired ? [...actives, ...expired] : actives;
  }, [tab, showExpired]);

  const tabBtn = (active: boolean) =>
    `px-4 py-2 rounded-t-md border ${
      active
        ? "bg-white text-contents-navy border-white"
        : "bg-transparent text-white/80 border-transparent hover:text-white hover:border-white/30"
    } transition`;

  return (
    <div className="space-y-0">
      {/* 탭 바 */}
      <div className="flex items-end justify-between">
        <div className="flex border-b border-white/30">
          {TABS.map((t) => {
            const active = t.key === tab;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`${tabBtn(active)} ${active ? "border-b-0" : ""}`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <label className="flex items-center gap-2 text-sm text-white/80 select-none">
          <input
            type="checkbox"
            checked={showExpired}
            onChange={(e) => setShowExpired(e.target.checked)}
            className="accent-indigo-500"
          />
          Show expired
        </label>
      </div>

      <div className="rounded-b-md  -mt-px p-4">
        {/* auto-fill로 가득 채우기 */}
        <ul className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {list.map((p) => (
            <ProjectCard key={p.id ?? p.title} p={p} />
          ))}
        </ul>
      </div>
    </div>
  );
}
