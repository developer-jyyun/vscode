import React from "react";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <nav className="flex flex-col max-h-screen">
      <ul className=" flex flex-col w-64  bg-sub pt-20  h-screen">
        <NavItem />
      </ul>
    </nav>
  );
}
