import Image from "next/image";
import "./globals.css";
import Button from "./components/UI/Button";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-end justify-end gap-10 p-24">
      <div className="flex flex-col items-end justify-end gap-10">
        <h2 className="text-7xl font-bold ">hello, world! |</h2>
        <h3 className="text-cyan-100 text-4xl leading-10 font-bold">
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
        <Button text="뭐하지" link="/" theme="bg" />
        <Button text="고민즁" link="/" theme="line" />
      </div>
    </div>
  );
}
