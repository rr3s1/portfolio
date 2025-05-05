'use client'

import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"

import AnimatedTextCycle from "./animated-text-cycle"

import React, { useState, useEffect } from "react"
import { GradientText } from "./gradient-text"
import { GradientTextDemo } from "./gradient-demo"

export function SplineSceneBasic() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="w-full h-[750px] relative overflow-hidden border-0 bg-transparent shadow-none">
      <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]" />

      <div className="flex flex-col md:flex-row h-full relative">
        {/* Left content - 50% width */}
        <div className="absolute md:static top-0 left-0 w-full md:w-1/2 lg:w-1/3 p-8 z-10 flex flex-col justify-center bg-transparent backdrop-blur-sm">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
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
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 font-light text-center font-semibold text-white-100 transition-all duration-1000 ease-in-out ${
                  isVisible ? "opacity-100 blur-none" : "opacity-0 blur-[2px]"
                }`}
              >
                Designing&nbsp;&amp;&nbsp;crafting&nbsp;
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
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 bg-gradient-to-r from-red-400 via-rose-500 to-purple-700 bg-clip-text text-transparent font-semibold"
                />
              </h1>
            </div>
          </div>
        </div>

        {/* Right content - 50% width */}
        <div className="w-1/2 relative sm:w-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
