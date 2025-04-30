import React from 'react'
import { workExperience } from "@/data"
import { Button } from "@/components/ui/MovingBorder"

const Experience = () => {
  return (
    <div className="py-20  text-white" id="experience">
      <h1 className="text-center text-4xl font-bold mb-10">
        My <span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent">
          work experience
        </span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-4 perspective-1000">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="0.5rem"
            className="flex-1 border-2 border-[#a855f740] bg-[rgba(18,18,28,0.8)] backdrop-blur-lg hover:bg-[rgba(18,18,28,0.6)] shadow-[0_0_15px_#f472b6] hover:shadow-[0_0_30px_#f472b6] transition-all duration-300"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-4 py-6 gap-4 preserve-3d">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-24 w-20 rounded-md shadow-[0_0_10px_#0ea5e9] transform hover:translate-z-10 transition-transform duration-200"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                  {card.title}
                </h1>
                <p className="text-start mt-3 font-semibold text-[#d4d4d8]">{card.desc}</p>
                
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience