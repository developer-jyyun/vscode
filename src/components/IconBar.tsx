import {
  VscHome,
  VscFiles,
  VscGithub,
  VscExtensions,
  VscGear,
  VscAccount,
  VscMail,
} from "react-icons/vsc";
import Link from "next/link";

export default function IconBar() {
  return (
    <ul className="flex flex-col pt-20 items-center gap-10 text-4xl bg-light-navy px-4 max-lg:text-2xl">
      <li>
        <Link href="/">
          <VscFiles />
        </Link>
      </li>
      <li>
        <Link href="/about">
          <VscAccount />
        </Link>
      </li>
      <li>
        <Link href="jyyun">
          <VscGithub />
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <VscMail />
        </Link>
      </li>{" "}
      <li>
        <Link href="/">
          <VscGear />
        </Link>
      </li>
    </ul>
  );
}
