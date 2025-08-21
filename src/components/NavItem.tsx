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
        const isActive =
          pathname === nav.path || pathname.startsWith(nav.path + "/");

        // 공통: 1px 상단 보더(투명)로 레이아웃 점프 방지 + 기본 hover
        const liBase =
          "px-4 py-2 rounded-sm transition-colors " +
          "border-t border-transparent " +
          "text-zinc-300 hover:bg-slate-800/60 hover:text-indigo-100";

        // (공통) active 시 텍스트만 바꾸는 클래스
        const activeTextOnly = "text-indigo-200";

        let liClass = liBase;

        if (variant === "tabs") {
          // 탭: 활성 시 배경 + 상단 보더 + hover 중립화(깜빡임 방지)
          liClass += isActive
            ? ` ${activeTextOnly} bg-contents-navy border-indigo-300 hover:bg-contents-navy hover:text-indigo-200`
            : "";
        } else {
          // 사이드바: 활성 시 텍스트색만 변경
          liClass += isActive ? ` ${activeTextOnly}` : "";
        }

        const iconClass = `w-5 h-5 ${isActive ? "opacity-100" : "opacity-90"}`;

        return (
          <li key={nav.name} className={liClass}>
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
