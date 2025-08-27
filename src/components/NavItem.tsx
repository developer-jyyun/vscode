"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navData from "@/data/navData";

interface Props {
  variant: "tabs" | "sidebar";
}

export default function NavItem({ variant }: Props) {
  const pathname = usePathname();

  return (
    <>
      {navData.map((nav) => {
        // 하위 경로 활성, 루트(/)는 정확히 일치할 때만
        const isActive =
          pathname === nav.path ||
          (nav.path !== "/" && pathname.startsWith(nav.path + "/"));

        let liClass = "px-4 py-2 rounded-sm transition-colors";

        if (variant === "tabs") {
          // 탭: 위 2px 보더. 활성 시 항상 보임.
          liClass +=
            " border-t-2 " +
            (isActive
              ? " bg-contents-navy text-indigo-200 border-t-indigo-300"
              : " border-t-transparent hover:bg-slate-800/60 hover:text-indigo-100 hover:border-t-indigo-300/60");
        } else {
          // 사이드바:  색상만 변경
          liClass += isActive
            ? " bg-slate-800/40 text-indigo-200"
            : " text-zinc-300 hover:bg-slate-800/60 hover:text-indigo-100";
        }

        const iconClass = `w-5 h-5 ${isActive ? "opacity-100" : "opacity-75"}`;

        return (
          <li key={nav.path} className={liClass}>
            <Link
              href={nav.path}
              aria-current={isActive ? "page" : undefined}
              className="flex items-center gap-1"
            >
              <Image
                src={nav.icon}
                alt={nav.name}
                width={20}
                height={20}
                className={iconClass}
              />
              <span>{nav.name}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
}
