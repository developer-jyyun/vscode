"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // pathname이 변경되었을 때만 동작
    if (prevPath.current !== pathname) {
      if (pathname.startsWith("/projects")) {
        // ✅ 프로젝트 페이지일 때: 탭 아래 영역으로 이동
        const target = document.getElementById("project-top");
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        // ✅ 나머지는 항상 맨 위로
        window.scrollTo(0, 0);
      }

      prevPath.current = pathname;
    }
  }, [pathname, searchParams]);

  return null;
}
