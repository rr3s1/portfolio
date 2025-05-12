"use client";
import Image from 'next/image';
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { HoverButton } from "./animated-hover-button";
import { IoCopyOutline } from "react-icons/io5";
// Lottie import was here but not used in the provided BentoGridItem. Keeping it in case it's used elsewhere in the file.
// const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

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

// Color palette for Bento Grid item titles, inspired by experience.tsx
const GIRD_TITLE_COLORS = [
  "text-yellow-300", 
  "text-pink-300",   
  "text-purple-300", 
  "text-orange-300", 
  "text-sky-600",    
  "text-teal-300", 
];

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName, // Note: This prop styles the container of title/description, not the title text itself.
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
  // const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = () => {
    if (isClient && navigator.clipboard) {
      navigator.clipboard.writeText('raressilviulazar@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Select title color based on card ID
  const selectedTitleColor = GIRD_TITLE_COLORS[(id - 2) % GIRD_TITLE_COLORS.length];

  return (
    <div
    className={cn(
      "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl h-full transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col",
      className
    )}
    style={
      id === 1
        ? { background: "transparent" } // Make ID 1 transparent to show page background
        : { background: `linear-gradient(to right, #0c1225, #0c243e, #0b3557)` } // Original background for others
    }
  >
    {id !== 1 && ( // Conditional gradient border for cards other than ID 1
      <div className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-r from-red-400 via-sky-500 to-purple-700 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" style={{
        background: `linear-gradient(to right, ${from}, ${to})`
      }} />
    )}

    <div className={`${id === 6 && 'flex justify-center items-center'} h-full relative z-10`}>
      <div className="w-full h-full absolute">
        {img && (
          <Image
            src={img}
            width={100} // These are placeholders, Next/Image will use intrinsic or layout="fill"
            height={100}
            alt={String(title || id)}
            className={cn(imgClassName, "object-cover object-center opacity-90 drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]")}
            // Consider layout="fill" if you want images to fill their container
            // layout="fill"
            // objectFit="cover" // or "contain"
          />
        )}
      </div>
      <div
        className={`absolute right-0 -bottom-5 ${
          id === 5 && "w-full h-1/2 opacity-80" // Check if this should be h-full
        }`}
      >
        {spareImg && (
          <Image
            src={spareImg}
            width={100} // Placeholder
            height={100} // Placeholder
            alt={String(title || id) + " spare"}
            className={cn(
              imgClassName, // Reusing imgClassName, ensure it's appropriate for spareImg
              "object-cover object-center w-full h-full opacity-90 drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]"
            )}
            // layout="fill"
            // objectFit="cover"
          />
        )}
      </div>
      {id === 6 && isClient && ( // Added isClient check for BackgroundGradientAnimation if it has client-side dependencies
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>
      )}

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        {/* Specific background elements for IDs 3, 4, 5 - these might need adjustment if they have opaque backgrounds */}
        {id === 3 && (
          <div className="absolute inset-0 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
          </div>
        )}
        {id === 4 && (
          <div className="absolute inset-0 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
          </div>
        )}
        {id === 5 && (
          <div className="absolute inset-0 flex justify-center items-center -z-10 overflow-hidden rounded-[calc(1.5rem-2px)] pointer-events-none">
          </div>
        )}

        {title && (
          <div
            className={cn(
              "quantico-regular  font-bold text-3xl md:text-lg lg:text-3xl max-w-96 z-20",
              selectedTitleColor,
              "[text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]"
            )}
          >
            {title}
          </div>
        )}

        {description && (
          <div
            className={cn(
              "quantico-regular  text-2xl md:text-sm lg:text-2xl text-neutral-300 group-hover/bento:text-black-200 transition-colors duration-300 z-20 py-0 mt-5",
              "[text-shadow:1px_1px_2px_rgba(0,0,0,0.4)]"
            )}
          >
            {description}
          </div>
        )}

        {id === 1 && isClient && ( // Added isClient check for GlobeDemo if it has client-side dependencies
          <div className="flex items-center justify-center w-full h-full z-20"> {/* Ensure GlobeDemo is above any potential background component */}
            <div className="w-full h-full aspect-square md:aspect-auto md:w-full md:h-full">
              <GlobeDemo />
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="z-20 relative w-full flex justify-center items-center mt-auto"> {/* mt-auto to push to bottom if container is flex-col */}
            <HoverButton
              onClick={handleCopy}
              className="h-28 w-full max-w-[75rem] rounded-3xl !bg-background text-xl md:text-2xl font-medium"
            >
              <span className="flex items-center justify-center gap-6 h-full">
                <IoCopyOutline size={44} />
                {copied ? 'Email copied' : 'Copy my email'}
              </span>
            </HoverButton>
          </div>
        )}
      </div>
    </div>
    {children} {/* Render children if any are passed */}
  </div>
);
};