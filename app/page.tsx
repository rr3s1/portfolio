import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Story from "@/components/Story";
import Footer from "@/components/Footer";
import TimelineDemo from "@/components/ui/timeline-demo";
import HeroParallaxDemo from "@/components/ui/hero-parallax-demo";
import Approach from "@/components/Approach";

import { StarsCanvas } from "@/components/main/star-background";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5">
      
      <StarsCanvas />
     
      <div className="max-w-7xl w-full">
        
        <FloatingNav navItems={navItems}/>
        
        <Hero />
        <Grid />
        <Story />
        <Approach />
        {/* <HeroScrollDemo /> */}
        <HeroParallaxDemo />
        <TimelineDemo />
        <Experience />
        {/* <RecentProjects /> */}
        <TechStack />
        <Footer />
      </div>
    </main>
  );
}
