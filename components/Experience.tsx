import React from 'react'
import AHoleComponent from './AHole'

const Experience = () => {
  return (
    <div className="py-20 text-white relative" id="experience">
      <div className="absolute inset-0 z-0 opacity-35">
        <AHoleComponent /> 
   
      </div>

   
      <div className="relative z-10 mt-20">
        <h1 className="text-center text-5xl font-bold mb-20">
        Work<span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> Experience</span>
        </h1>
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 px-4">
          {/* HSBC */}
          <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
            <h2 className="varela-round-regular text-2xl  font-bold text-yellow-300">Software Support | HSBC </h2>
            <div className="text-sm text-neutral-400 mb-2">Jan 2025 – Apr 2025</div>
            <ul className="list-disc pl-5 space-y-1">
              {/* List items here if any */}
            </ul>
          </div>
          {/* Greystar */}
          <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl  varela-round-regular font-bold text-pink-300">IT Support Analyst | Greystar</h2>
            <div className="text-sm text-neutral-400 mb-2">Jan 2024 – Aug 2024</div>
            <ul className="list-disc pl-5 space-y-1">
              {/* List items here if any */}
            </ul>
          </div>
          {/* Bournemouth University */}
          <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl varela-round-regular font-bold text-purple-300">Software Licensing Admin | Bournemouth University</h2>
            <div className="text-sm text-neutral-400 mb-2">Oct 2022 – Oct 2023</div>
            <ul className="list-disc pl-5 space-y-1">
              {/* List items here if any */}
            </ul>
          </div>
          {/* Orange */}
          <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl varela-round-regular font-bold text-orange-300">IT Admin / Engineer | Orange</h2>
            <div className="text-sm text-neutral-400 mb-2">Sep 2020 – Oct 2022</div>
            <ul className="list-disc pl-5 space-y-1">
              {/* List items here if any */}
            </ul>
          </div>
          {/* Capgemini */}
          <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl varela-round-regular font-bold text-sky-500">Service Desk Analyst | Capgemini</h2>
            <div className="text-sm text-neutral-400 mb-2">Oct 2015 – Jul 2017</div>
            <ul className="list-disc pl-5 space-y-1">
              {/* List items here if any */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience