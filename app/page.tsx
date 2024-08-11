import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaFolder, FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiAtom } from "react-icons/gi";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
        className="py-4 w-[24rem] pr-6 flex justify-center items-center gap-4 font-semibold text-xl md:text-lg sm:text-sm"
        navItems={[
          {name: "Home", link: "/", icon: <FaHome />},
          {name: "About", link: "/about", icon: <FcAbout />},
          {name: "Projects", link: "/projects", icon: <FaFolder />},
          {name: "My Artillery", link: "/myartillery", icon: <GiAtom />}
        ]}
        />
        <Hero />
      </div>
    </main>
  );
}
