import Button from "@/components/UI/Button";
import Link from "next/link";

import { TITLE_CLASS } from "../constants";
import Profile from "./_components/Profile";
import Career from "./_components/Career";
import HowIWorks from "./_components/HowIWorks";

export default function AboutPage() {
  return (
    <section className="bg-contents-navy content-dense theme-muted pt-12">
      <article>
        <h2 className={TITLE_CLASS}>{`/* 🙆‍♀️ About Me */`}</h2>
        <Profile />
      </article>

      <article className="flex flex-col mt-20">
        <h2 className={TITLE_CLASS}>{`/* 👩‍💻 Career */`}</h2>
        <Career />
      </article>

      <article className="flex flex-col mt-20">
        <h2 className={TITLE_CLASS}>{`/* 🙋🏻 How I work */`}</h2>
        <HowIWorks />
      </article>
    </section>
  );
}
