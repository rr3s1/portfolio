"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { SplashCursor } from './ui/SplashCursor'
import { AuroraBackground } from './ui/aurora-background'

import { SplineSceneBasic } from './ui/spline-demo'

import { Spotlight } from './ui/spotlight-new'


const Hero = () => {

  return (
    <>
      <AuroraBackground className=" pt-36 relative">
      
        <Spotlight />
        
        {/* <SplashCursor /> */}


        
        <div className="container mx-auto relative z-10">
     

      <SplineSceneBasic />
    </div>
      </AuroraBackground>
 
      
    </>
  )
}

export default Hero
