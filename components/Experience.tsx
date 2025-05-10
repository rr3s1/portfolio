import React from 'react'
import AHoleComponent from './AHole'

const Experience = () => {
  return (
    // 1. Add 'relative' to the main container to establish a positioning context.
    <div className="py-20 text-white relative" id="experience">
      {/* 2. Wrapper for AHoleComponent to position it as a background. */}
      {/* 'absolute inset-0' makes it fill the parent. */}
      {/* 'z-0' places it at the bottom of the stacking order within this context. */}
      <div className="absolute inset-0 z-0 opacity-60">
        <AHoleComponent /> 
        {/* Ensure AHoleComponent's root div itself is styled to be width: 100%; height: 100%; */}
        {/* This is typically done in its own CSS, e.g., styles.aHole in AHole.module.css */}
      </div>

      {/* 3. Content wrapper. */}
      {/* 'relative' is needed for z-index to work correctly in this new stacking context. */}
      {/* 'z-10' (or any value > 0) places this content above the AHoleComponent. */}
      <div className="relative z-10">
        <h1 className="text-center text-6xl font-bold mb-10">
        Work<span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> Experience</span>
        </h1>
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 px-4">
          {/* HSBC */}
          <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
            <h2 className="varela-round-regular text-2xl font-bold text-yellow-300">Software Support | HSBC </h2>
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
            <h2 className="text-2xl varela-round-regular font-bold text-purple-300">Software Licensing Administrator | Bournemouth University</h2>
            <div className="text-sm text-neutral-400 mb-2">Oct 2022 – Oct 2023</div>
            <ul className="list-disc pl-5 space-y-1">
              {/* List items here if any */}
            </ul>
          </div>
          {/* Orange */}
          <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl varela-round-regular font-bold text-orange-300">IT Administrator & Support Engineer | Orange</h2>
            <div className="text-sm text-neutral-400 mb-2">Sep 2020 – Oct 2022</div>
            <ul className="list-disc pl-5 space-y-1">
              {/* List items here if any */}
            </ul>
          </div>
          {/* Capgemini */}
          <div className="bg-[rgba(18,18,28,0.8)] border-2 border-[#a855f740] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl varela-round-regular font-bold text-sky-600">Service Desk Analyst | Capgemini</h2>
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