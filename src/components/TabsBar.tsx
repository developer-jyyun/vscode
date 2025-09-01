"use client";

import navData from "@/data/navData";
import NavItem from "./NavItem";

export default function TabsBar() {
  return (
    <nav className="w-full bg-main-navy sticky top-0 z-40 ">
      <ul className="grid grid-cols-2 sm:flex sm:flex-nowrap sm:items-center">
        {navData.map((nav) => (
          <NavItem
            key={nav.path}
            variant="tabs"
            path={nav.path}
            name={nav.name}
            icon={nav.icon}
          />
        ))}
      </ul>
    </nav>
  );
}
