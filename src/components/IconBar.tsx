"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  VscFiles, // Resume
  VscAccount, // About
  VscMail, // Contact
  VscGear, // Settings
  VscCodeReview, // Projects
} from "react-icons/vsc";

type Item =
  | {
      href: string;
      label: string;
      icon: React.ComponentType<{ className?: string }>;
      match?: (p: string) => boolean;
      external?: false;
    }
  | {
      href: string;
      label: string;
      icon: React.ComponentType<{ className?: string }>;
      match?: (p: string) => boolean;
      external: true;
    };

const items: Item[] = [
  {
    href: "/projects",
    label: "Projects",
    icon: VscCodeReview,
    match: (p) => p.startsWith("/projects"),
  },
  {
    href: "/about",
    label: "About",
    icon: VscAccount,
    match: (p) => p.startsWith("/about"),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: VscMail,
    match: (p) => p.startsWith("/contact"),
  },
  { href: "/docs/resume.pdf", label: "Resume", icon: VscFiles, external: true },
  { href: "/", label: "Settings", icon: VscGear, match: () => false },
];

export default function IconBar() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col pt-20 items-center gap-8 bg-light-navy px-4 text-3xl max-lg:text-2xl">
      {items.map((it) => {
        const isActive = it.match ? it.match(pathname) : false;
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
          <li key={it.label}>
            <Wrapper {...wrapperProps}>
              <div
                className={`p-2 rounded transition 
                  ${isActive ? "bg-indigo-500/30" : "hover:bg-indigo-500/50"}`}
              >
                <Icon className="w-7 h-7 text-zinc-300" />
              </div>
            </Wrapper>
          </li>
        );
      })}
    </ul>
  );
}
