"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import {
  VscFiles,
  VscAccount,
  VscMail,
  VscFilePdf,
  // VscGear,
} from "react-icons/vsc";

const items = [
  { href: "/", label: "Home", icon: AiFillHome },
  {
    href: "/projects",
    label: "Projects",
    icon: VscFiles,
    match: (p: string) => p.startsWith("/projects"),
  },
  {
    href: "/about",
    label: "About",
    icon: VscAccount,
    match: (p: string) => p.startsWith("/about"),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: VscMail,
    match: (p: string) => p.startsWith("/contact"),
  },
  {
    href: "/docs/yunjiyoung-resume.pdf",
    label: "Resume",
    icon: VscFilePdf,
    external: true,
  },
  /*   {
    href: "/settings",
    label: "Settings",
    icon: VscGear,
    match: (p: string) => p.startsWith("/settings"),
  }, */
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-16 bg-main-navy min-h-screen flex flex-col items-center pt-16 ">
      <ul className="flex flex-col gap-6">
        {items.map((it) => {
          const isActive = it.match ? it.match(pathname) : pathname === it.href;
          const Icon = it.icon;
          const Wrapper: React.ElementType = it.external ? "a" : Link;
          const wrapperProps = it.external
            ? {
                href: it.href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": it.label,
              }
            : { href: it.href, "aria-label": it.label };

          return (
            <li
              key={it.label}
              className="relative group flex flex-col items-center"
            >
              <Wrapper {...wrapperProps}>
                <div
                  className={`p-2 rounded-md transition flex items-center justify-center
                    ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-indigo-500/50 text-zinc-300"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </Wrapper>

              {/* Hover 툴팁 */}
              <span
                className="absolute left-11 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition
                  after:content-[''] after:absolute after:left-[-12px] after:top-1/2 after:-translate-y-1/2
                  after:border-8 after:border-transparent after:border-r-gray-800"
              >
                {it.label}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
