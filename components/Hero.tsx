"use client";
import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { SplashCursor } from './ui/SplashCursor'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from "framer-motion"
import AnimatedTextCycle from './ui/animated-text-cycle'
import { SplineSceneBasic } from './ui/spline-demo'
import { HeroScrollDemo } from './ui/hero-scroll-demo'
import { Spotlight } from './ui/spotlight-new'

const Hero = () => {
  return (
    <>
      <AuroraBackground className="pb-20 pt-36 relative">
        <Spotlight />
        <SplashCursor />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <SplineSceneBasic />
        </div>
      </AuroraBackground>
      
      {/* Scroll Animation Section */}
      <HeroScrollDemo />
    </>
  )
}

export default Hero
