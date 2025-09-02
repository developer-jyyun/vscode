import type { Metadata } from "next";
import { Nanum_Gothic, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Titlebar from "@/components/Titlebar";
import Sidebar from "@/components/Sidebar";
import Tabsbar from "@/components/TabsBar";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense } from "react";
const nanum = Nanum_Gothic({ weight: ["400", "700"], subsets: ["latin"] });
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
        <Titlebar />

        <div className="sticky top-0 z-20 w-full bg-main-navy lg:pl-16">
          <Suspense fallback={null}>
            <Tabsbar />
          </Suspense>
        </div>

        <div className="flex flex-1 w-full overflow-hidden">
          <aside className="hidden lg:flex shrink-0">
            <Sidebar />
          </aside>

          <main className="flex-1 overflow-y-auto scrollbar-hide bg-contents-navy">
            {children}
          </main>

          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
