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
import type { Metadata } from "next";


import { StarsCanvas } from "@/components/main/star-background";
import CosmicFilaments from "@/components/CosmicFilaments";
export const metadata: Metadata = {
  title: "Cosmic Filaments",
  description: "Interactive Three.js Cosmic Filaments Visualization",
};

export default function Home() {

  return (
    <main className="relative flex justify-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5"> {/* overflow-hidden on main is fine */}
      
      <StarsCanvas /> {/* This is likely position: fixed or absolute, acting as a general background */}
     
      <div className="max-w-7xl w-full">
        
        <FloatingNav navItems={navItems}/>
        
        <Hero />
        {/* This section will now take up its defined height in the document flow */}
        <CosmicFilaments /> 
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
