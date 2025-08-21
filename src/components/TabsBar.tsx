import NavItem from "./NavItem";

export default function Tabsbar() {
  return (
    <nav className="w-full bg-main-navy">
      <ul className="flex items-center flex-wrap">
        <NavItem variant="tabs" />
      </ul>
    </nav>
  );
}
