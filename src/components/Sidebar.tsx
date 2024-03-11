import NavItem from "./NavItem";
import IconBar from "./IconBar";

export default function Sidebar() {
  return (
    <nav className=" h-[calc(100vh-2.25rem)] flex">
      <IconBar />
      <ul className="max-lg:hidden flex flex-col pt-20 pr-4 bg-main-navy  ">
        <NavItem />
      </ul>
    </nav>
  );
}
