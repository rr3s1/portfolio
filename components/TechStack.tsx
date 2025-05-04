import React from 'react'
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {InfiniteLogoSlider} from "@/components/ui/InfiniteLogoSlider";
import {techstack, companies} from "@/data";


const Techstack = () => {
    return (
        <div className="py-20" id="techstack">
           
            <h1 className="text-center text-5xl font-bold mb-10">
        Tech <span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> Stack </span> 
      </h1>

            <div className="flex flex-col items-center max-lg:mt-10 mt-20 linear-gradient(to right, #0c1225, #0c243e, #0b3557)">

                  <InfiniteMovingCards
                      items={techstack}
                      direction="right"
                      speed="slow"
                  />
                
                  <div className="relative w-full max-lg:mt-10 mt-20 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                     
                      
                      {/* Company logos with InfiniteLogoSlider */}
                      <InfiniteLogoSlider
  items={companies.map(company => (
    <div 
      key={company.id} 
      className="flex flex-col items-center justify-center md:flex-row md:max-w-60 max-w-40 gap-2 p-4 hover:scale-105 transition-transform duration-300 relative z-30 rounded-2xl border border-slate-800 bg-gradient-to-r from-[#0c1225] via-[#0c243e] to-[#0b3557]"
    >
      <img 
        src={company.img}
        alt={company.name}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
      <img 
        src={company.nameImg}
        alt={company.name}
        className="h-10 w-20 md:h-8 object-contain max-w-[6rem]"
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
