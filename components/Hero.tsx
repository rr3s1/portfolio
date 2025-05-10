"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { SplashCursor } from './ui/SplashCursor'
import { AuroraBackground } from './ui/aurora-background'

import { SplineSceneBasic } from './ui/spline-demo'

import { Spotlight } from './ui/spotlight-new'


const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000); // 7 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AuroraBackground className=" pt-36 relative">
      
        <Spotlight />
        
        <SplashCursor />


        
        <div className="container mx-auto relative z-10">
      <video
        autoPlay
        muted
        loop
        className={`rotate-90 fade-circle absolute top-[-670px] left-0 w-full h-full object-cover rounded-full -z-20 transition-all duration-1000 ease-in-out ${
          showVideo ? "opacity-70 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
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
