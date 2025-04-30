import React from 'react'
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {testimonials, companies} from "@/data";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

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
                
                  <div className="relative flex flex-wrap items-center justify-center gap-14 md:16 max-lg:mt-10 mt-20 w-full">
                      {/* Add ProgressiveBlur as a sibling instead of a parent */}
                      <ProgressiveBlur 
                        direction="bottom" 
                        blurLayers={4} 
                        blurIntensity={1.0}
                        className="absolute inset-0 z-0"
                      />
                      
                      {/* Company logos on top of the blur effect */}
                      {companies.map(({id, img, name, nameImg}) => (
                        <div 
                          key={id} 
                          className="flex md:max-w-60 max-w-32 gap-2 p-4 hover:scale-105 transition-transform duration-300 relative z-10"
                        >
                          <img 
                            src={img}
                            alt={name}
                            className="md:w-10 w-5"
                          />
                          <img 
                            src={nameImg}
                            alt={name}
                            className="md:w-24 w-20"
                          />
                        </div>
                      ))}
                  </div>
            </div>
        </div>
    )
}

export default Clients
