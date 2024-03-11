import Link from "next/link";
import navData from "./navData";
import Image from "next/image";

export default function NavItem({}) {
  return (
    <>
      {navData.map((nav) => (
        <li key={nav.name} className="px-4 py-2 rounded-sm hover:bg-sky-700">
          <Link className="flex flex-row gap-2" href={nav.path}>
            <Image
              src={nav.icon}
              alt={nav.name}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>{nav.name}</span>
          </Link>
        </li>
      ))}
    </>
  );
}

{
  /* <Link href={navItem.path} key={navItem.name}>
<Image
  src={navItem.icon}
  alt={navItem.name}
  width={20}
  height={20}
></Image>
<span>{navItem.name}</span>
</Link> */
}
