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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${mono.className} h-full flex flex-col`}>
        {/* 상단 타이틀바 */}
        <Titlebar />

        {/* 탭바 */}
        <div className="sticky top-0 z-20 w-full bg-main-navy lg:pl-16">
          <Tabsbar />
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex flex-1 w-full overflow-hidden">
          {/* PC 사이드바 */}
          <aside className="hidden lg:flex shrink-0">
            <Sidebar />
          </aside>

          {/* 메인 컨텐츠 */}
          <main className="flex-1 overflow-y-auto scrollbar-hide bg-contents-navy">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
