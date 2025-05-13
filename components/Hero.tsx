"use client";
import React from 'react'
import { AuroraBackground } from './ui/aurora-background'

import { SplineSceneBasic } from './ui/spline-demo'

import { Spotlight } from './ui/spotlight-new'


const Hero = () => {

  return (
    <>
    <section id="Hero">
      <AuroraBackground className="relative min-h-screen flex flex-col justify-center items-center pt-20 md:pt-36">
      
        <Spotlight />
        
        <div className="w-full px-0 sm:container sm:mx-auto sm:px-8 relative z-10">
      <SplineSceneBasic />
    </div>
      </AuroraBackground>
 </section>
      
    </>
  )
}

export default Hero
