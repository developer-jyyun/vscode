import NavItem from "./NavItem";
import IconBar from "./IconBar";

export default function Sidebar() {
  return (
    <nav className=" h-[calc(100vh-2.25rem)] flex">
      <IconBar />
      <ul className="flex flex-col pt-20 bg-main-navy pr-4 ">
        <NavItem />
      </ul>
    </nav>
  );
}
