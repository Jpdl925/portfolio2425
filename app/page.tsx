import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNavbar } from "@/components/ui/FloatNavbar";
import Hero from "@/components/ui/Hero";
import { navItems } from "@/data";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export default function Home() {
  return (
   <main className="relative h-full bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className="max-w-7xl w-full">
      <FloatingNavbar navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
    </div>
   </main>
  );
}