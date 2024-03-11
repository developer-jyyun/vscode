import Profile from "@/components/Profile";
import Button from "@/components/UI/Button";
import Link from "next/link";

import Career from "@/components/Career";
import HowIWorks from "@/components/HowIWorks";
import { TITLE_CLASS } from "../constants";

export default function AboutPage() {
  return (
    <section className="bg-slate-900">
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
