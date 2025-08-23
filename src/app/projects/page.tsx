"use client";

import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const FILTERS = ["all", "active", "wip", "expired"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState<Filter>("all");
  const filtered = projects.filter((p) =>
    filter === "all" ? true : p.status === filter
  );

  return (
    <section className="bg-contents-navy content-dense theme-muted pt-12">
      <h2 className="text-2xl font-semibold text-white">{`/* 📁 Projects */`}</h2>

      <div className="mt-6 flex gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded border text-sm ${
              filter === f
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-slate-600 text-indigo-100 hover:bg-slate-800"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="text-zinc-400 text-sm mt-10">
          선택한 필터에 해당하는 프로젝트가 없습니다.
        </p>
      )}
    </section>
  );
}
