"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { SplashCursor } from './ui/SplashCursor'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from "framer-motion"
import AnimatedTextCycle from './ui/animated-text-cycle'

const Hero = () => {
  return (
    <AuroraBackground className="pb-20 pt-36">
      <SplashCursor />
      <div> 
        {/* Wrapper div for Aceternity UI elements */}
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="magenta"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="cyan"/>
      </div>
       
      <motion.div 
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="h-[50rem] w-full relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
        <div className="flex justify-center relative my-2- z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        
            <h2 className="uppercase tracking-widest text-[33px] text-center text-pink-200 max-w-120 font-black">
              FULL STACK
            </h2>
            <br></br>
            <h1 className="text-gradient-magenta text-center text-[33px] md:text-5xl lg:text-6xl font-bold mb-4">
              DEVELOPER
            </h1>
            <div className="p-4 max-w-[500px]">
            <h1 className="text-4xl font-light text-center text-gradient-magenta">
    Building {' '}
    <AnimatedTextCycle
      words={[
        "apps",       // More specific than 'business'
        "dashboards",     // Direct project relevance
        "platforms",      // Common term, relevant
        "interfaces",     // UI/UX focus
        "systems",        // Broader term, links to IT background
        "features",    // Links to AI interest/potential
        "experiences",    // User-centric focus
      ]}
      interval={3000}
      className={"text-foreground text-gradient-magenta font-semi-bold"}
    />{' '}
    
  </h1>
            </div>
            <a href="#about">
              <MagicButton 
                title={'Show my work'}
                icon={<FaLocationArrow/>}
                position={'right'}
                className="bg-cyan text-white-100 hover:bg-cyan-300"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
export default Hero
