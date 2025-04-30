import React from 'react'
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {InfiniteLogoSlider} from "@/components/ui/InfiniteLogoSlider";
import {techstack, companies} from "@/data";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";


const Techstack = () => {
    return (
        <div className="py-20" id="techstack">
           
            <h1 className="text-center text-5xl font-bold mb-10">
        Tech <span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> Stack </span> 
      </h1>

            <div className="flex flex-col items-center max-lg:mt-10 mt-20">

                  <InfiniteMovingCards
                      items={techstack}
                      direction="right"
                      speed="slow"
                  />
                
                  <div className="relative w-full max-lg:mt-10 mt-20 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                      {/* 
                      <ProgressiveBlur 
                        direction="bottom" 
                        blurLayers={4} 
                        blurIntensity={0.2}
                        className="absolute inset-0 z-0"
                        />
                      */}
                      
                      {/* Company logos with InfiniteLogoSlider */}
                      <InfiniteLogoSlider
                        items={companies.map(company => (
                          <div 
                            key={company.id} 
                            className="flex varela-round-regular md:max-w-60 max-w-32 gap-2 p-4 hover:scale-105 transition-transform duration-300 relative z-30"
                          >
                            <img 
                              src={company.img}
                              alt={company.name}
                              className="md:w-10 w-5"
                            />
                            <img 
                              src={company.nameImg}
                              alt={company.name}
                              className="md:w-24 w-20"
                            />
                          </div>
                        ))}
                        direction="left"
                        speed="fast"
                        className="pt-4"
                      />
                  </div>
            </div>
            
        </div>
    )
}

export default Techstack
