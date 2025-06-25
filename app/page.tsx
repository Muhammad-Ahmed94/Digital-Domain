import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

// Lazy load non-critical components
const Grid = lazy(() => import("@/components/Grid"));
const RecentProjects = lazy(() => import("@/components/RecentProjects"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple"></div>
  </div>
);

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          className="py-4 w-[24rem] pr-6 flex justify-center items-center gap-4 font-semibold text-xl md:text-lg sm:text-sm"
          navItems={navItems}
        />
        
        {/* Hero loads immediately for better FCP */}
        <Hero />
        
        {/* Lazy load sections below the fold */}
        <Suspense fallback={<LoadingSpinner />}>
          <Grid />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <RecentProjects />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}