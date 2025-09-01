import Button from "@/components/UI/Button";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-contents-navy gap-10 text-center px-6">
      {/* 중앙 헤드라인 */}
      <h2 className={`text-4xl md:text-7xl font-bold ${mono.className} typing`}>
        hello, world!
      </h2>

      {/* 설명 + 버튼 묶음 */}
      <div className="flex flex-col items-center gap-6 max-w-2xl">
        <h3 className="text-cyan-100 text-lg md:text-2xl font-bold leading-relaxed">
          <span className="text-code-red">사용자 중심</span>의 웹 개발을
          지향하는 <br />
          <span className="text-code-lime">프론트엔드 개발자 윤지영</span>{" "}
          입니다. :)
        </h3>

        <p className="mt-6 text-md text-zinc-400">
          👉{" "}
          <a href="/projects" className=" text-code-purple hover:underline">
            projects
          </a>{" "}
          /
          <a
            href="/contact"
            className="text-code-purple/80 hover:underline ml-2"
          >
            contact
          </a>
        </p>
      </div>
    </section>
  );
}
