
"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { SplashCursor } from './ui/SplashCursor'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from "framer-motion"


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
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className="flex justify-center relative my-2- z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-yellow-300 max-w-80">
              FULL STACK
            </h2>
            <h1 className="text-gradient-magenta text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-4">
              DEVELOPER
            </h1>
            <TextGenerateEffect
              className="text-center text-[28px] md:text-3xl lg:text-4xl text-white-100"
              words="Transforming Concepts into Seamless Experiences"
            />
            <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-lg text-white-100">
              Hi, I&apos;m Adrian, a Next.js Developer
              based in Croatia
            </p>
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
