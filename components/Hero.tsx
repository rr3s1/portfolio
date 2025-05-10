"use client";
import React from 'react'

import { SplashCursor } from './ui/SplashCursor'
import { AuroraBackground } from './ui/aurora-background'

import { SplineSceneBasic } from './ui/spline-demo'

import { Spotlight } from './ui/spotlight-new'


const Hero = () => {
  return (
    <>
      <AuroraBackground className=" pt-36 relative">
      
        <Spotlight />
        
        <SplashCursor />
        
        <div className="container mx-auto  relative z-10">
        <video
        autoPlay
        muted
        loop
        className="rotate-90 fade-circle absolute top-[-670px] left-0 w-full h-full object-cover opacity-50 rounded-full -z-20"
      >
        <source src="/videos/blackhole22.mp4" type="video/mp4" />
      </video>
          <SplineSceneBasic />
          
        </div>
      </AuroraBackground>
 
      
    </>
  )
}

export default Hero
