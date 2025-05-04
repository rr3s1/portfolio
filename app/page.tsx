import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import  RecentProjects  from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Story from "@/components/Story";

import Footer from "@/components/Footer";
import TimelineDemo from "@/components/ui/timeline-demo";
import HeroParallaxDemo from "@/components/ui/hero-parallax-demo";
import Approach from "@/components/Approach";
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";


export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col
  overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Story />
      <HeroScrollDemo />
      <Approach />
      <TimelineDemo />
      <HeroParallaxDemo />
      <Experience />
      {/* <RecentProjects /> */}
      <Grid />
      <TechStack />
      <Footer />
    </div>
  </main>
  );
}
