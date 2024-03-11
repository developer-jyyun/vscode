import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"] });
const TITLE_CLASS = ` inline-block w-fit font-bold text-2xl  px-10 py-2 bg-light-yellow text-dark-navy  
ml-[-1rem] shadow-[4px_10px_0_#000]  rounded-r-sm  ${mono.className} max-lg:text-lg max-lg:w-full max-lg:ml-0 max-lg:px-0 max-lg:text-center`;

export { TITLE_CLASS };
