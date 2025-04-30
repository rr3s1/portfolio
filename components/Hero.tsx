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
import { SplineSceneBasic } from './ui/spline-demo'
import { HeroScrollDemo } from './ui/hero-scroll-demo'
import { GridMotionDemo } from './ui/grid-motion-demo'

const Hero = () => {
  return (
    <>
      <AuroraBackground className="pb-20 pt-36">
        <SplashCursor />
        <div> 
          {/* Wrapper div for Aceternity UI elements */}
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="magenta"/>
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="cyan"/>
        </div>
        <div className="container mx-auto px-4 py-12">
          <SplineSceneBasic />
        </div>
      </AuroraBackground>
      
      {/* Scroll Animation Section */}
      <HeroScrollDemo />

      {/* Grid Motion Section */}
      <GridMotionDemo />
    </>
  )
}

export default Hero
