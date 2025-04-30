import React from 'react'
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {InfiniteLogoSlider} from "@/components/ui/InfiniteLogoSlider";
import {testimonials, companies} from "@/data";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import TimelineDemo from "@/components/ui/timeline-demo";

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading text-white-300">
                Kind words from
                <span className="text-purple"> satisfied clients</span>
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
                        className="py-4"
                      />
                  </div>
            </div>
            <TimelineDemo />
        </div>
    )
}

export default Clients
