"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "@/components/ui/Globe";
import { GlobeDemo } from "@/components/ui/GridGlobe";

import { useState, useEffect } from "react";


import dynamic from 'next/dynamic';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

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
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  children?: React.ReactNode;
  from?: string;
  to?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  // NOTE: This single `showVideo` state will be shared by both videos.
  // If one loads and sets it to true, the other will also become visible if it has loaded.
  // For more granular control, consider separate state variables (e.g., showSkillsVideo, showExperienceVideo).
  const [showVideo, setShowVideo] = useState(false); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = () => {
    if (isClient && navigator.clipboard) {
      navigator.clipboard.writeText('raressilviulazar@gmail.com');
      setCopied(true);
    }
  };

  {id === 6 && (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
    </BackgroundGradientAnimation>
  )}

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl h-full transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col ",
        className
      )}
      style={{
        background: `linear-gradient(to right, #0c1225, #0c243e, #0b3557)`
      }}
    >
      {id !== 1 && (
        <div className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-r from-red-400 via-sky-500 to-purple-700 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" style={{
          background: `linear-gradient(to right, ${from}, ${to})`
        }} />
      )}
      
      <div className={`${id === 6 && 'flex justify-center'} h-full relative z-10`}>
        {/* Existing images for cards (like id=2, id=5) */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={String(title || id)}
              className={cn(imgClassName, "object-cover object-center opacity-90 drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full h-1/2 opacity-80" // This spareImg for id=5 will still render
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={String(title || id) + " spare"}
              className={cn(
                imgClassName, // Note: This uses imgClassName, consider if spareImgClassName is needed
                "object-cover object-center w-full h-full opacity-90 drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]"
              )}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        {/* Main content area for title, description, and specific elements like video/globe */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Video for SKILLS card (ID=3) */}
          {id === 3 && (
            <div className="absolute inset-0 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`
                  w-[300%] h-[300%]sm:w-[150%] sm:h-[150%] md:w-[130%] md:h-[130%] lg:w-[110%] lg:h-[110%]
                  max-w-none max-h-none object-cover rounded-full rotate-90 fade-circle
                  transition-opacity duration-1000 ease-in-out
                  ${showVideo ? "opacity-30 md:opacity-40" : "opacity-0"}
                `}
                onCanPlay={() => { if (!showVideo) setShowVideo(true); }}
                onError={(e) => console.error("Video Error (ID 3):", e)}
              >
                <source src="/videos/metalic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}



 {/* Video for PROJECTS card (ID=4) - NEWLY ADDED */}
 {id === 4 && (
            <div className="absolute inset-0 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`
                 w-[300%] h-[300%] sm:w-[150%] sm:h-[150%] md:w-[130%] md:h-[130%] lg:w-[110%] lg:h-[110%]
                  max-w-none max-h-none object-cover rounded-full rotate-0 {/* You can choose rotation */} fade-circle
                  transition-opacity duration-1000 ease-in-out
                  ${showVideo ? "opacity-30 md:opacity-40" : "opacity-0"} {/* Adjust opacity as needed */}
                `}
                onCanPlay={() => { if (!showVideo) setShowVideo(true); }}
                onError={(e) => console.error("Video Error (ID 4):", e)}
              >
                {/* REPLACE with your actual video path for projects */}
                <source src="/videos/eyeC.mp4" type="video/mp4" /> 
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {/* Video for EXPERIENCE card (ID=5) - NEWLY ADDED */}
          {id === 5 && (
            <div className="absolute inset-0 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`
                  w-[300%] h-[300%] sm:w-[150%] sm:h-[150%] md:w-[130%] md:h-[130%] lg:w-[110%] lg:h-[110%]
                  max-w-none max-h-none object-cover rounded-full rotate-0 fade-circle
                  transition-opacity duration-1000 ease-in-out
                  ${showVideo ? "opacity-30 md:opacity-40" : "opacity-0"} {/* Corrected opacity */}
                `}
                onCanPlay={() => { if (!showVideo) setShowVideo(true); }}
                onError={(e) => console.error("Video Error (ID 5):", e)}
              >
                <source src="/videos/sunFlow3r.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Text Content - will be on top due to higher z-index */}
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-20 text-white group-hover/bento:text-black transition-colors duration-200">
            {title}
          </div>
          {description && (
            <div className="font-merienda text-xs md:text-sm lg:text-xl text-[#e5e5eb] z-20 py-0 group-hover/bento:text-black transition-colors mt-5 duration-400 ">
              {description}
            </div>
          )}

          
          
          {id === 1 && (
            <div className="flex items-center justify-center w-full h-full z-20">
              <div className="w-full max-w-[700px] aspect-square md:aspect-auto md:w-full md:h-full">
                <GlobeDemo />
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative z-20">
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};