import type { Metadata } from "next";
import { Nanum_Gothic, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Titlebar from "@/components/Titlebar";
import Sidebar from "@/components/Sidebar";
import Tabsbar from "@/components/TabsBar";

const nanum = Nanum_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jiyoung's portfolio",
  description: "Front-end Developer Jiyoung Yun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mono.className} box-border flex flex-col max-h-screen`}
      >
        <>
          <Titlebar />
          <div className="flex w-full">
            <Sidebar />{" "}
            <main className="w-full h-[calc(100vh-2.25rem)] overflow-y-scroll scrollbar-hide flex flex-col">
              <Tabsbar />
              {children}
            </main>
          </div>
        </>
      </body>
    </html>
  );
}
