import { Suspense } from "react";
import ProjectsTabs from "./_components/ProjectsTabs";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="bg-contents-navy content-dense theme-muted pt-12 min-h-[100svh]">
      <h2 className="sr-only">Projects</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsTabs />
      </Suspense>
    </section>
  );
}
