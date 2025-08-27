import NavItem from "./NavItem";
import IconBar from "./IconBar";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex sticky top-0 h-[100dvh] bg-main-navy">
      <IconBar />
      <nav aria-label="Primary" className="flex">
        <ul className="w-56 flex flex-col pt-20">
          <NavItem variant="sidebar" />
        </ul>
      </nav>
    </aside>
  );
}
