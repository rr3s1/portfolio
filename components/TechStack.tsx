// Your original layout.tsx, renamed or used as is
import React from 'react';
import Image from 'next/image';
// We're removing InfiniteMovingCards for techstack, but keeping InfiniteLogoSlider for companies
// import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards"; 
import { InfiniteLogoSlider } from "@/components/ui/InfiniteLogoSlider";
import { techstack, companies, techstackV2 } from "@/data"; // Make sure techstack has the 'logo' property

// Import the new 3D component
import TechSphereCanvas from '@/components/TechSphere'; // Adjust path if needed
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

const Techstack = () => {
    return (
        <div className="py-20" id="techstack">
            <h1 className="text-center text-5xl md:text-6xl font-bold mb-10 font-quantico">

        TECH <span className="font-quantico text-5xl md:text-6xl bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> Stack </span> 
             </h1>

            {/* Section for the 3D Tech Sphere */}
            <div className="flex flex-col items-center w-full max-lg:mt-10 mt-10 mb-20 ">
                
                 <InfiniteMovingCards
                      items={techstackV2}
                      direction="right"
                      speed="slow"
                  />
                
                
                
                {/* Ensure techstack data is passed correctly */}
                <TechSphereCanvas techItems={techstack.map(item => ({ name: item.name, logo: item.logo }))} />
            </div>

            {/* You can keep the company logos slider if you wish, or integrate them into another 3D object */}
            {/* For this example, I'm keeping it separate as requested */}
            <div className="flex flex-col items-center max-lg:mt-10 mt-20">
            
                <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    <InfiniteLogoSlider
                        items={companies.map(company => (
                            <div
                                key={company.id}
                                className="flex flex-col items-center justify-center md:flex-row md:max-w-60 max-w-40 gap-2 p-4 hover:scale-105 transition-transform duration-300 relative z-30 rounded-2xl border border-slate-800 bg-gradient-to-r from-[#0c1225] via-[#0c243e] to-[#0b3557]"
                            >
                                <Image
                                    src={company.img}
                                    alt={company.name}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                />
                                <Image
                                    src={company.nameImg}
                                    alt={company.name}
                                    width={40}
                                    height={40}
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
    );
};

export default Techstack;