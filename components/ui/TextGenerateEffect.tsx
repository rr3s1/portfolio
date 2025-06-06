"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  // wordsArray is re-calculated on every render if 'words' changes.
  // This is fine for this use case as split isn't too expensive.
  const wordsArray = words.split(" ");

  useEffect(() => {
    // The effect will now re-run if 'animate', 'words', 'filter', or 'duration' changes.
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 2, // Uses the 'duration' prop, with a fallback to 2 if duration is falsy (e.g., 0)
        delay: stagger(0.4),
      }
    );
  }, [animate, words, filter, duration]); // <-- CORRECTED dependency array

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx > 3 ? 'text-purple':'dark:text-white text-black' } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};