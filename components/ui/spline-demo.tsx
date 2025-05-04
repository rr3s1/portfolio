'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"

import AnimatedTextCycle from './animated-text-cycle'

import React, { useState, useEffect } from 'react'

export function SplineSceneBasic() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full h-[750px] relative overflow-hidden
             border-0 bg-transparent shadow-none">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      
      <div className="flex h-full">
        {/* Left content - 50% width */}
        <div className="w-1/3 p-8 relative z-10 flex flex-col justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className={`uppercase tracking-widest text-[27px] text-center text-pink-200 max-w-120 font-black 
              transition-all duration-1000 ease-in-out
              ${isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-[2px]'}`}>
              FULL STACK
            </h2>
            <h1 className={`text-gradient-magenta text-center text-[33px] md:text-5xl lg:text-6xl font-bold mb-4
              transition-all duration-1000 ease-in-out
              ${isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-[2px]'}`}>
              DEVELOPER
            </h1>
            <div className="max-w-[300px]">
              <h1 className={`text-3xl mt-2 font-light text-center font-semi-bold text-sky-400
                transition-all duration-1000 ease-in-out
                ${isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-[2px] '}`}>
                Designing&nbsp;&amp;&nbsp;building&nbsp;  {' '} <br />
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
                  className={" text-[40px]  mt-5 bg-gradient-to-r from-red-400 via-rose-500 to-purple-700 bg-clip-text text-transparent font-semibold"}
                />
              </h1>
            </div>
           
          </div>
        </div>

        {/* Right content - 50% width */}
        <div className="w-2/3 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 