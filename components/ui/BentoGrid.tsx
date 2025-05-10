"use client";
import { cn } from "@/utils/cn";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';


// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  children,
  from = "#DE3CBF",
  to = "#53BFC8",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  children?: React.ReactNode;
  from?: string;
  to?: string;
}) => {


  const [showVideo, setShowVideo] = useState(false); 



  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden  rounded-3xl min-h-[300px] h-full transition duration-200 shadow-input dark:shadow-none justify-start flex flex-col", // REMOVED: group/bento, hover:shadow-xl. CHANGED: justify-between to justify-start
        className
      )}
      // style={{ // Keeping background style for now, can be removed if not desired
      //   background: `linear-gradient(to right, #0c1225, #0c243e, #0b3557)`
      // }}
    >
      {/* Neon border - remove hover effect here too */}
      {id !== 1 && (
        <div className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-r from-red-400 via-sky-500 to-purple-700 opacity-0 transition-opacity duration-300" // REMOVED: group-hover/bento:opacity-100. Kept opacity-0 for now, can be made always visible if desired.
          style={{
            background: `linear-gradient(to right, ${from}, ${to})`
          }} />
        // If you want the border always visible (or controlled by a prop):
        // <div className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-r from-red-400 via-sky-500 to-purple-700 opacity-100" ... />
      )}
      
      {/* Main content wrapper - remove id=6 specific class */}
      <div className={`h-full relative z-10`}>
        {/* Background image */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={String(title || id)}
              className={cn(imgClassName, "object-cover object-center drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]")}
            />
          )}
        </div>
        {/* Spare image */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full h-1/2 opacity-80" // Special case for id=5 spareImg
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={String(title || id) + " spare"}
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full opacity-90 drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]"
              )}
            />
          )}
        </div>
        {/* REMOVED: id === 6 && BackgroundGradientAnimation block */}

        {/* Inner content area - remove hover effects */}
        <div
          className={cn(
            titleClassName,
            "transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10" // REMOVED: group-hover/bento:translate-x-2
          )}
        >
          {/* Video for ABOUT ME card (ID=2) */}
          {id === 2 && (
            <div className="absolute inset-0 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
              <video autoPlay muted loop playsInline
                className={`w-[240%] h-[240%] max-w-none max-h-none object-cover rounded-full rotate-0 transition-opacity duration-100 ease-in-out ${showVideo ? "opacity-100" : "opacity-0"}`}
                onCanPlay={() => { if (!showVideo) setShowVideo(true); }} onError={(e) => console.error("Video Error (ID 2):", e)}
              >
                <source src="/videos/dynamic.mp4" type="video/mp4" /> 
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Video for SKILLS card (ID=3) */}
          {id === 3 && (
            <div className="absolute inset-0 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
              <video autoPlay muted loop playsInline
                className={`w-[240%] h-[240%] max-w-none max-h-none object-cover rounded-full rotate-0 transition-opacity duration-100 ease-in-out ${showVideo ? "opacity-100" : "opacity-0"}`}
                onCanPlay={() => { if (!showVideo) setShowVideo(true); }} onError={(e) => console.error("Video Error (ID 3):", e)}
              >
                <source src="/videos/cute.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Video for PROJECTS card (ID=4) */}
          {id === 4 && (
            <div className="absolute inset-0 opacity-100 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
              <video autoPlay muted loop playsInline
                className={`w-[200%] h-[200%] max-w-none max-h-none object-cover rounded-full rotate-90 transition-opacity duration-100 ease-in-out ${showVideo ? "opacity-100" : "opacity-0"}`}
                onCanPlay={() => { if (!showVideo) setShowVideo(true); }} onError={(e) => console.error("Video Error (ID 4):", e)}
              >
                <source src="/videos/ay3ay.mp4" type="video/mp4" /> 
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Video for EXPERIENCE card (ID=5) */}
          {id === 5 && (
            <div className="absolute inset-0 flex opacity-100 justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
              <video autoPlay muted loop playsInline
                className={`w-[110%] h-[110%] max-w-none rounded-3xl max-h-none object-cover rotate-0 transition-opacity duration-100 ease-in-out ${showVideo ? "opacity-100" : "opacity-0"}`}
                onCanPlay={() => { if (!showVideo) setShowVideo(true); }} onError={(e) => console.error("Video Error (ID 5):", e)}
              >
                <source src="/videos/wav3s.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Text Content - remove hover effects */}
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-20 text-white transition-colors duration-100"> {/* REMOVED: group-hover/bento:text-black */}
            {title}
          </div>
          {description && (
            <div className="font-merienda text-xs md:text-sm lg:text-xl text-[#e5e5eb] z-20 py-0 transition-colors mt-5 duration-100 "> {/* REMOVED: group-hover/bento:text-black */}
              {description}
            </div>
          )}
          
          {/* Globe for ID=1 */}
          {id === 1 && (
            <div className="flex items-center justify-center w-full h-full z-20">
              <div className="w-full max-w-[700px] aspect-square md:aspect-auto md:w-full md:h-full">
                <GlobeDemo />
              </div>
            </div>
          )}
          {/* REMOVED: id === 6 && MagicButton block */}
        </div>
      </div>
      {children /* This is for the GlowingEffect */}
    </div>
  );
};