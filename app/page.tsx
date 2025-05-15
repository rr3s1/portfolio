import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Story from "@/components/Story";
import Footer from "@/components/Footer";
import TimelineDemo from "@/components/ui/timeline-demo";
import HeroParallaxDemo from "@/components/ui/hero-parallax-demo";
import Approach from "@/components/Approach";
import type { Metadata } from "next";
import { StarsCanvas } from "@/components/main/star-background";
import CosmicFilaments from "@/components/CosmicFilaments";
import Techstack from "@/components/TechStack";




export const metadata: Metadata = {
  title: "RS Portfolio",
  keywords: ["Portfolio", "Web Development", "3D Visualization", "Next.js", "React", "Tailwind CSS", "Three.js",],
  description: "Interactive portfolio showcasing web development and 3D visualization skills.",
};




export default function Home() {

  return (
    <main className="relative flex justify-center p-0 md:p-5 items-center flex-col
    overflow-hidden mx-auto  "> {/* overflow-hidden on main is fine */}
      
      <StarsCanvas /> {/* This is likely position: fixed or absolute, acting as a general background */}
     
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Approach />
         <Grid />
        <Story />
         <Techstack />
        <HeroParallaxDemo />
        <TimelineDemo />
        <Experience />
        <CosmicFilaments />
        <Footer />
      </div>
    </main>
  );
}
