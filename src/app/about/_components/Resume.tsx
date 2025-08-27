import React from "react";

export default function Resume() {
  return (
    <div className="mt-6 flex gap-3">
      <a
        href="/docs/resume.pdf"
        download="윤지영_이력서.pdf"
        className="px-4 py-2 rounded bg-code-purple/20 border border-code-purple/60 hover:bg-code-purple hover:text-contents-navy transition underline underline-offset-4 decoration-dotted"
        aria-label="이력서 다운로드 (국문 PDF)"
      >
        📃 이력서 다운로드
      </a>
    </div>
  );
}
