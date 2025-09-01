import Image from "next/image";
import { Nanum_Gothic } from "next/font/google";

const nanum = Nanum_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function Titlebar() {
  return (
    <>
      <div
        className={`${nanum.className} w-full h-9 bg-dark-navy text-gray-e font-semibold py-2 p-2 flex  items-center justify-between`}
      >
        <div>
          <ul className="flex gap-4 capitalize text-sm">
            <div>
              <Image
                src="/icons/vscode_icon.svg"
                width={20}
                height={20}
                alt="vs code icon"
              />
            </div>
            <li className="max-lg:hidden">file</li>
            <li className="max-lg:hidden">edit</li>
            <li className="max-lg:hidden">view</li>
            <li className="max-lg:hidden">go</li>
            <li className="max-lg:hidden">run</li>
            <li className="max-lg:hidden">terminal</li>
            <li className="max-lg:hidden">help</li>
          </ul>
        </div>
        <p
          className="absolute left-1/2 transform -translate-x-1/2 text-sm 
        "
        >
          Jiyoung Yun - Front-End Portfolio
        </p>
        <div className="flex gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-red-400"></span>
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="inline-block w-3 h-3 rounded-full bg-lime-400"></span>
        </div>
      </div>
    </>
  );
}
