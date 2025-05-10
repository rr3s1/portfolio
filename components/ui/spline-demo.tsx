'use client'

import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"

import AnimatedTextCycle from "./animated-text-cycle"

import React, { useState, useEffect } from "react"
// import { GradientText } from "./gradient-text" // Assuming this might be unused or part of GradientTextDemo
import { GradientTextDemo } from "./gradient-demo"

export function SplineSceneBasic() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  // const [showVideo, setShowVideo] = useState(false); // showVideo state seems unused
  
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setShowVideo(true);
  //     }, 5000); // 7 seconds
  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <Card className="w-full h-[750px] relative overflow-hidden border-0 bg-transparent shadow-none">
       <div className={`w-1/2 relative sm:w-full ${ // This container's width might be less relevant if video is absolute to Card
                  isVisible ? "opacity-100 blur-none" : "opacity-0 blur-[20px]"
                }`}
              >
         <video
        autoPlay
        muted
        loop
        className="rotate-90 absolute fade-circle   w-4.5/5 h-4.5/5 object-cover left-1 opacity-100 transition-all duration-[1200ms] ease-in-out -z-10"
      >
        <source src="/videos/vibedark.mp4" type="video/mp4" />
      </video>
          
        </div>
      <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]" />
     
      
      <div className="flex flex-col md:flex-row h-full relative">
        {/* Left content - Titles */}
        {/* Updated classes for small device vertical centering:
            - Added: top-1/2 -translate-y-1/2 (for default/small screens)
            - Added: md:top-auto md:translate-y-0 (to reset for medium screens up)
            - Ensured w-full for small screens, md:w-1/2 for medium up.
            - Original md:static ensures it goes back into flow.
        */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full p-8 z-10 flex flex-col justify-center items-center bg-transparent md:static md:top-auto md:translate-y-0 md:left-auto md:w-1/2 md:items-start lg:w-1/3">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"> {/* items-center here will center the text content */}
            <h2
              className={`uppercase tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white-100 max-w-120 font-black transition-all duration-500 ease-in-out ${
                isVisible ? "opacity-100 blur-none" : "opacity-0 blur-[2px]"
              }`}
            >
              FULL STACK
            </h2>

            {/* Title */}
            <div className={`text-center text-white-100 bg-background font-semibold transition-all duration-750 ease-in-out ${
                isVisible ? "opacity-100 blur-none" : "opacity-0 blur-[2px]"
              }`}>
            <GradientTextDemo/>
            </div>
            <div className="w-full flex justify-center">
              <h1
                className={`text-xl  sm:text-2xl md:text-3xl lg:text-4xl mt-2 font-light text-center font-semibold text-sky-400 transition-all duration-1000 ease-in-out ${
                  isVisible ? "opacity-100 blur-none" : "opacity-0 blur-[2px]"
                }`}
              >
 <span style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
 Designing & crafting 
                </span>
                <br />
                <AnimatedTextCycle
                  words={[
                    "Apps",
                    "Dashboards",
                    "Platforms",
                    "Interfaces",
                    "Animations",
                    "Features",
                    "Experiences",
                  ]}
                  interval={3000}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-red-400 via-rose-500 to-purple-700 bg-clip-text text-transparent font-semibold"
                />
              </h1>
            </div>
          </div>
        </div>

        {/* Right content - Spline Scene */}
        {/* Updated classes for small device centering (full width):
            - Changed w-1/2 sm:w-full to w-full md:w-1/2
            - This makes it w-full by default (xs, sm screens) and w-1/2 from md upwards.
        */}
        <div className="w-full md:w-1/2 h-full relative"> {/* Added h-full to ensure Spline takes up space */}
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}