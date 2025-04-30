'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"

import AnimatedTextCycle from './animated-text-cycle'

import React from 'react'

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[1200px] relative overflow-hidden
             border-0 bg-transparent shadow-none">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      
      <div className="flex h-full">
        {/* Left content - 50% width */}
        <div className="w-1/2 p-8 relative z-10 flex flex-col justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-[27px] text-center text-pink-200 max-w-120 font-black">
              FULL STACK
            </h2>
      
            <h1 className="text-gradient-magenta text-center text-[33px] md:text-5xl lg:text-6xl font-bold mb-4">
              DEV
            </h1>
            <div className="max-w-[300px]">
              <h1 className="text-4xl text-center font-semibold bg-gradient-to-r from-[#00d1ff] via-[#268dff] to-[#4f00ff] bg-clip-text text-transparent ">
                building  {' '} <br />
                <AnimatedTextCycle
                  words={[
                    "Apps",
                    "Dashboards",
                    "Platforms",
                    "Interfaces",
                    "Systems",
                    "Features",
                    "Experiences",
                  ]}
                  interval={3000}
                  className={"text-[52px] mt-5 bg-gradient-to-r from-red-600 via-rose-400 to-purple-500 bg-clip-text text-transparent font-semibold"}
                />
              </h1>
            </div>
           
          </div>
        </div>

        {/* Right content - 50% width */}
        <div className="w-full relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-[1400px] h-full"
          />
        </div>
      </div>
    </Card>
  )
} 