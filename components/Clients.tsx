import React from 'react'
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {InfiniteLogoSlider} from "@/components/ui/InfiniteLogoSlider";
import {testimonials, companies} from "@/data";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from 'next/image';


const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
           
            <h1 className="text-center text-6xl font-bold mb-10">
         <span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent">Kind words</span> from happy clients
      </h1>

            <div className="flex flex-col items-center max-lg:mt-10 mt-20">

                  <InfiniteMovingCards
                      items={testimonials}
                      direction="right"
                      speed="slow"
                  />
                
                  <div className="relative w-full max-lg:mt-10 mt-20">
                      {/* Add ProgressiveBlur as a sibling instead of a parent */}
                      <ProgressiveBlur 
                        direction="bottom" 
                        blurLayers={4} 
                        blurIntensity={0.2}
                        className="absolute inset-0 z-0"
                      />
                      
                      {/* Company logos with InfiniteLogoSlider */}
                      <InfiniteLogoSlider
                        items={companies.map(company => (
                          <div 
                            key={company.id} 
                            className="flex md:max-w-60 max-w-32 gap-2 p-4 hover:scale-105 transition-transform duration-300 relative z-30"
                          >
                            <Image
                              src={company.img}
                              alt={company.name}
                              width={100}
                              height={100}
                              className="w-full h-full object-contain"
                            />
                            <Image
                              src={company.nameImg}
                              alt={company.name}
                              width={100}
                              height={100}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                        direction="left"
                        speed="fast"
                        className="py-4"
                      />
                  </div>
            </div>
            
        </div>
    )
}

export default Clients
