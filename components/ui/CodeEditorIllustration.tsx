"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CodeEditorIllustration = () => {
  const [blinking, setBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Main editor window */}
        <div className="relative bg-black-200 rounded-lg overflow-hidden shadow-2xl border border-white/10">
          {/* Top bar */}
          <div className="bg-black-100 px-4 py-2 flex items-center border-b border-white/10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
              <div className="w-3 h-3 bg-[#febc2e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#28c840] rounded-full"></div>
            </div>
            <div className="ml-4 text-white-100 text-xs">
              app.tsx - portfolio
            </div>
          </div>

          {/* Editor content */}
          <div className="px-4 py-4 font-mono text-xs text-white-100">
            <div className="flex">
              <span className="text-gray-400 mr-4">1</span>
              <span className="text-[#c678dd]">import</span>
              <span className="text-white ml-1">{'{'}</span>
              <span className="text-[#e5c07b] ml-1">useState</span>
              <span className="text-white ml-1">{'}'}</span>
              <span className="text-[#c678dd] ml-1">from</span>
              <span className="text-[#98c379] ml-1">'react'</span>
              <span className="text-white">;</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">2</span>
              <span></span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">3</span>
              <span className="text-[#c678dd]">function</span>
              <span className="text-[#61afef] ml-1">Portfolio</span>
              <span className="text-white ml-1">() {'{'}</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">4</span>
              <span className="ml-4 text-[#c678dd]">const</span>
              <span className="text-white ml-1">[</span>
              <span className="text-[#e06c75]">isHovered</span>
              <span className="text-white">,</span>
              <span className="text-[#61afef] ml-1">setIsHovered</span>
              <span className="text-white">] =</span>
              <span className="text-[#61afef] ml-1">useState</span>
              <span className="text-white">(</span>
              <span className="text-[#d19a66]">false</span>
              <span className="text-white">);</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">5</span>
              <span></span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">6</span>
              <span className="ml-4 text-[#c678dd]">return</span>
              <span className="text-white ml-1">(</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">7</span>
              <span className="ml-8 text-[#e06c75]">{'<div'}</span>
              <span className="text-[#d19a66]"> className</span>
              <span className="text-white">=</span>
              <span className="text-[#98c379]">"container"</span>
              <span className="text-[#e06c75]">{'>'}</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">8</span>
              <span className="ml-12 text-[#e06c75]">{'<h1'}</span>
              <span className="text-[#d19a66]"> className</span>
              <span className="text-white">=</span>
              <span className="text-[#98c379]">"hero-title"</span>
              <span className="text-[#e06c75]">{'>'}</span>
              <span className="text-white">Hello, I'm a Developer</span>
              <span className="text-[#e06c75]">{'</h1>'}</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">9</span>
              <span className="ml-12 text-[#e06c75]">{'<p'}</span>
              <span className="text-[#d19a66]"> className</span>
              <span className="text-white">=</span>
              <span className="text-[#98c379]">"subtitle"</span>
              <span className="text-[#e06c75]">{'>'}</span>
              <span className="text-white">Building amazing web experiences</span>
              <span className="text-[#e06c75]">{'</p>'}</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">10</span>
              <span className="ml-12 relative">
                <span className="text-[#e06c75]">{'<button'}</span>
                <span className="text-[#d19a66]"> onClick</span>
                <span className="text-white">=</span>
                <span className="text-[#d19a66]">{'{'}</span>
                <span className="text-white">() =></span>
                <span className="text-[#61afef]"> alert</span>
                <span className="text-white">(</span>
                <span className="text-[#98c379]">'Hello World!'</span>
                <span className="text-white">)</span>
                <span className="text-[#d19a66]">{'}'}</span>
                <span className="text-[#e06c75]">{'>'}</span>
                <span className="text-white">Click me</span>
                {blinking && <span className="absolute inline-block w-2 h-4 bg-brand-primary-50 ml-1"></span>}
                <span className="text-[#e06c75]">{'</button>'}</span>
              </span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">11</span>
              <span className="ml-8 text-[#e06c75]">{'</div>'}</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">12</span>
              <span className="ml-4 text-white">);</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">13</span>
              <span className="text-white">{'}'}</span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">14</span>
              <span></span>
            </div>
            <div className="flex mt-1">
              <span className="text-gray-400 mr-4">15</span>
              <span className="text-[#c678dd]">export</span>
              <span className="text-[#c678dd] ml-1">default</span>
              <span className="text-[#61afef] ml-1">Portfolio</span>
              <span className="text-white">;</span>
            </div>
          </div>
        </div>

        {/* Second editor window - stacked behind */}
        <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-black-200 rounded-lg shadow-lg border border-white/10"></div>
        
        {/* Third editor window - stacked at the bottom */}
        <div className="absolute -bottom-8 -right-8 -z-20 w-full h-full bg-black-200 rounded-lg shadow-lg border border-white/10"></div>
      </motion.div>
    </div>
  );
};

export default CodeEditorIllustration;