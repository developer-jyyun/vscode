import NavItem from "./NavItem";
import IconBar from "./IconBar";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex sticky top-0 h-[100dvh] bg-main-navy">
      <IconBar />
      <nav aria-label="Primary" className="flex">
        {/* pr-4 제거 → 대신 아이템 사이 간격/안쪽 패딩으로 정돈 */}
        <ul className="w-56 flex flex-col pt-20 gap-1">
          <NavItem variant="sidebar" />
        </ul>
      </nav>
    </aside>
  );
}
