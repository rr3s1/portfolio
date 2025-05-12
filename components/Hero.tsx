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
        
        <div className="w-full px-0 sm:container sm:mx-auto sm:px-8 relative z-10">
      <SplineSceneBasic />
    </div>
      </AuroraBackground>
 
      
    </>
  )
}

export default Hero
