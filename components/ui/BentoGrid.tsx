"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "@/components/ui/Globe";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { div } from "three/webgpu";
import { useState, useEffect } from "react";
import { GlowingEffect } from "./glowing-effect";

import dynamic from "next/dynamic";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";
import { CommitsGridDemo } from "../CommitsGridDemo";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

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
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = () => {
    if (isClient && navigator.clipboard) {
      navigator.clipboard.writeText("contact@jsmastery.pro");
      setCopied(true);
    }
  };

  // Cosmic Neon gradients & shadows
  const cosmicNeonStyles = [
    {
      from: "#0C1023",
      to: "#062A4C",
      shadow: "0 0 15px 0 rgba(0,255,255,0.25)",
    },
    {
      from: "#0C1023",
      to: "#0B3A5E",
      shadow: "0 0 15px 0 rgba(0,212,255,0.30)",
    },
    {
      from: "#0C1023",
      to: "#0E4971",
      shadow: "0 0 15px 0 rgba(0,180,255,0.35)",
    },
    {
      from: "#0C1023",
      to: "#0F5785",
      shadow: "0 0 15px 0 rgba(0,155,255,0.40)",
    },
    {
      from: "#0C1023",
      to: "#11679A",
      shadow: "0 0 15px 0 rgba(0,135,255,0.45)",
    },
  ];

  // Special rendering for full-bleed CTA ("Hire Me") band
  if (id === 6) {
    return (
      <div className="col-span-full">
        <a
          href="mailto:raressilviulazar@jsmastery.pro"
          className="block w-full text-center py-6 px-8 rounded-3xl 
            bg-gradient-to-r from-neonPink via-neonCyan to-neonGold 
            text-white text-2xl font-bold tracking-wider 
            shadow-neon hover:shadow-neonHover 
            animate-gradient-x
            transition-all duration-300
            hover:-translate-y-1"
        >
          {title}
        </a>
      </div>
    );
  }

  // Get style for this card (id: 1-5)
  const styleIdx = Math.max(0, Math.min(4, id - 1));
  const { from, to } = cosmicNeonStyles[styleIdx];

  return (
    <div
      className={cn(
        "card cosmic row-span-1 group/bento hover:shadow-xl h-full transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        // Set CSS vars for gradient
        '--from': from,
        '--to': to,
      } as React.CSSProperties}
    >
      {/* Outer neon gradient border - only for cards except id 1 and 2 */}
      {id !== 1 && id !== 2 && (
        <div className="absolute text-white-200 inset-0 p-[2px] rounded-3xl bg-gradient-to-tr from-neonPink via-neonCyan to-neonGold opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" />
      )}

      <div
        className={`${id === 6 && "flex justify-center"} h-full relative z-10`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center opacity-90 drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full h-1/2 opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(
                imgClassName,
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
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 py-0 transition-colors duration-400">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-white transition-colors duration-200">
            {title}
          </div>

          {id === 1 && <GlobeDemo />}
          {id === 2 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <CommitsGridDemo />
              {/* <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="centred"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              /> */}
            </div>
          )}
          {id === 3 && (
            <div className="flex gap-5 lg:gap-5 w-fit absolute -right-3 lg-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "TypeScript", "Tailwind"].map((item, idx) => (
                  <span
                    key={item}
                    className={`py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-neonCyan ${
                      idx % 2 === 0 ? "zoom-in" : "zoom-out"
                    }`}
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["GSAP", "AWS", "MongoDB", "Framer"].map((item, idx) => (
                  <span
                    key={item}
                    className={`py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-neonPink ${
                      idx % 2 === 0 ? "zoom-in" : "zoom-out"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              
              
              </div>
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
