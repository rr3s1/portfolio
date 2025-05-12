"use client";
import React from 'react'
import { AuroraBackground } from './ui/aurora-background'

import { SplineSceneBasic } from './ui/spline-demo'

import { Spotlight } from './ui/spotlight-new'


const Hero = () => {

  return (
    <>
      <AuroraBackground className=" pt-36 relative">
      
        <Spotlight />
        
        <div className="container !w-full mx-auto relative z-10">
      <SplineSceneBasic />
    </div>
      </AuroraBackground>
 
      
    </>
  )
}

export default Hero
