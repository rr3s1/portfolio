"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
    return (
        <>
            {/*
              - container mx-auto: Standard centering.
              - py-16 md:py-24: Vertical padding for small to medium screens.
                This allows content to define the height.
              - lg:h-[100vh]: On large screens, set section height to full viewport.
              - lg:py-0: Remove vertical padding on large screens as flex centering will be used.
              - lg:flex lg:flex-col lg:justify-center: Vertically center content on large screens.
            */}
            <section className="container mx-auto py-16 md:py-24 lg:py-32 mt-20 md:mt-0">

            <h1 className="text-center font-quantico text-4xl md:text-5xl font-bold mb-10 ">

            CORE <br /> <span className="text-5xl md:text-6xl bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent font-quantico"> Values </span> 
     </h1>

                
                {/*
                  - flex flex-col lg:flex-row: Stack cards vertically on small/medium, horizontally on large.
                  - items-stretch: Make cards equal height if they are in a row and their content differs,
                                   or ensures they take up available space if their parent has a fixed height.
                  - justify-center: Center cards in the available space.
                  - gap-8: Spacing between cards.
                */}
                <div className="flex flex-col lg:flex-row mt-20 items-stretch justify-center gap-8">
                    <Card
                        title="User-Centric Design"
                        icon={<AceternityIcon order="Design" />}
                        description="Crafting engaging and intuitive user interfaces that are not only visually appealing but also easy to navigate, ensuring a seamless user experience."
                    >
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-sky-600"
                            colors={[[125, 211, 252]]}
                        />
                    </Card>

                    <Card
                        title="Security"
                        icon={<AceternityIcon order="Security" />}
                        description="Prioritizing robust security measures from the start, implementing best practices to protect your application and user data against threats."
                    >
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-red-600"
                            colors={[[150, 72, 100], [70, 70, 70]]}
                            dotSize={4}
                        />
                        <div className="absolute quantico-regular inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    </Card>

                    <Card
                        title="Efficiency"
                        icon={<AceternityIcon order="Efficiency" />}
                        description="Building performant applications with clean, optimized code and efficient architecture, ensuring fast load times and smooth operation."
                    >
                        <CanvasRevealEffect
                            animationSpeed={5.1}
                            containerClassName="bg-emerald-900"
                        />
                    </Card>
                </div>
            </section>
        </>
    );
};

const Card = ({
    title,
    icon,
    children,
    description,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            // - max-w-sm w-full: Limits width on smaller screens.
            // - mx-auto lg:mx-0: Center on small, no auto margin on large when in flex row.
            // - h-auto: Allow content to define height on smaller screens.
            // - lg:h-[35rem]: Fixed height for cards on large screens.
            // - lg:flex-1: Allows cards in a row to share space if needed (works well with items-stretch on parent).
            className="border sm:mt-10 border-black/[0.2] group/canvas-card quantico-regular flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto lg:mx-0 p-4 md:p-6 h-auto min-h-[28rem] sm:min-h-[30rem] lg:min-h-0 lg:h-[35rem] relative rounded-3xl lg:flex-1"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {/*
              - relative z-20: Keep content above canvas effect.
              - flex flex-col h-full: Ensure this div takes full card height and allows vertical alignment.
              - justify-center: Center content vertically.
              - items-center: Center content horizontally.
              - p-2: Inner padding for text content.
            */}
            <div className="relative z-20 flex flex-col h-full justify-center items-center text-center p-2">
                <div className="text-center quantico-regular text-2xl group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="quantico-regular text-3xl dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                {/* Added text-balance for better text wrapping on multiple lines */}
                <p className="text-lg quantico-regular md:text-lg lg:text-2xl dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-balance"
                    style={{ color: '#e4ecff' }}>
                    {description}
                </p>
            </div>
        </div>
    );
};

// AceternityIcon and Icon components remain the same

export const AceternityIcon = ({ order }: { order?: string }) => { /* ... as before ... */ 
    return (
        <div>
            <button
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                <span
                    className=" text-2xl font-bold font-quantico inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl">
   {order}
  </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => { /* ... as before ... */ 
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};


export default Approach;