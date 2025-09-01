"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  variant: "tabs" | "explorer";
  path: string;
  name: string;
  icon: string;
}

export default function NavItem({ variant, path, name, icon }: Props) {
  const pathname = usePathname();
  const isActive = pathname === path;

  let liClass = "";
  if (variant === "tabs") {
    liClass =
      "px-4 py-2 flex items-center gap-2 border-t-2 justify-center " +
      (isActive
        ? "bg-contents-navy text-indigo-200 border-t-indigo-300"
        : "border-t-transparent hover:bg-slate-800/60 hover:text-indigo-100 hover:border-t-indigo-300/60");
  } else if (variant === "explorer") {
    liClass =
      "px-3 py-1 flex items-center gap-2 text-sm cursor-pointer " +
      (isActive
        ? "bg-contents-navy text-indigo-200"
        : "text-zinc-300 hover:bg-slate-800/60");
  }

  return (
    <li className={liClass}>
      <Link href={path} className="flex items-center gap-2">
        <Image src={icon} alt={name} width={18} height={18} />
        <span>{name}</span>
      </Link>
    </li>
  );
}
