import Hero from "@/components/home/Hero";
import { Suspense } from "react";
import LibrarySection from "@/components/home/LibrarySection";
import LibrarySkeleton from "@/components/home/LibrarySkeleton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<LibrarySkeleton />}>
        <LibrarySection />
      </Suspense>
    </main>
  );
}
