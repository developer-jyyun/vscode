import Profile from "@/components/Profile";
import Button from "@/components/UI/Button";
import Link from "next/link";

import { JetBrains_Mono } from "next/font/google";
import Career from "@/components/Career";
import HowIWorks from "@/components/HowIWorks";

const mono = JetBrains_Mono({ subsets: ["latin"] });
export default function AboutPage() {
  const TITLE_CLASS = ` inline-block w-fit font-bold text-2xl  px-10 py-2 bg-light-yellow text-dark-navy  
  ml-[-1rem] shadow-[4px_10px_0_#000]  rounded-r-sm
  

  	  ${mono.className} max-lg:text-xl`;
  return (
    <section className="bg-slate-900 max-lg:mt-28">
      <article className={mono.className}>
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
