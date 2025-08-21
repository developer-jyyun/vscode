import Image from "next/image";
import "./globals.css";
import Button from "@/components/UI/Button";
import { Nanum_Gothic, JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex flex-col items-end justify-end gap-10 p-24 bg-contents-navy max-lg:p-2 ">
      <div className="flex flex-col items-end justify-end gap-10 ">
        <h2 className={`max-lg:text-xl text-7xl font-bold ${mono.className}`}>
          hello, world! |
        </h2>
        <h3 className="text-cyan-100 text-4xl leading-10 font-bold max-lg:text-lg">
          <span>
            <span className="text-code-red">사용자 중심</span>의 웹 개발을
            지향하는
          </span>
          <br />
          <span className="text-code-lime"> 프론트엔드 개발자 윤지영</span>
          입니다.:)
        </h3>
      </div>
      <div>
        <Button text="projects" link="/projects" theme="bg" />
        <Button text="contact" link="/contact" theme="line" />
      </div>
    </section>
  );
}
