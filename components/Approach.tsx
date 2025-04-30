"use client";
import React from "react";

import {AnimatePresence, motion} from "framer-motion";
import {CanvasRevealEffect} from "@/components/ui/CanvasRevealEffect";

 const Approach = () => {
    return (
        <>
            <section>
        
                <h1 className="heading ">
                
                    <span className="bg-gradient-to-r from-red-400 via-rose-500 to-purple-700 bg-clip-text text-transparent font-semibold">Core values</span>
                </h1>
                <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                    {/*<Card*/}
                    {/*    title="Planning & Strategy"*/}
                    {/*    icon={<AceternityIcon order="Phase 1"/>}/>*/}

                    
                    <Card
                    title="User-Centric Design"
                    icon={<AceternityIcon order="Design" />} // Changed order
                    description="Crafting engaging and intuitive user interfaces that are not only visually appealing but also easy to navigate, ensuring a seamless user experience." // Updated description
                >
                    <CanvasRevealEffect
                        animationSpeed={3} // Re-using Phase 3 speed
                        containerClassName="bg-sky-600" // Re-using Phase 3 color (often associated with creativity/design)
                        colors={[[125, 211, 252]]}
                    />
                </Card>

                <Card
                    title="Security"
                    icon={<AceternityIcon order="Security" />} // Changed order
                    description="Prioritizing robust security measures from the start, implementing best practices to protect your application and user data against threats." // Updated description
                >
                    <CanvasRevealEffect
                        animationSpeed={3} // Re-using Phase 2 speed
                        containerClassName="bg-red-600" // Re-using Phase 2 color (can represent stopping threats)
                        colors={[
                            [150, 72, 100],
                            [70, 70, 70],
                        ]}
                        dotSize={4}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div
                        className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90"
                    />
                </Card>
                    <Card
                    title="Efficiency"
                    icon={<AceternityIcon order="Efficiency" />} // Changed order
                    description="Building performant applications with clean, optimized code and efficient architecture, ensuring fast load times and smooth operation." // Updated description
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1} // Re-using Phase 1 speed
                        containerClassName="bg-emerald-900" // Re-using Phase 1 color (green often associated with efficiency/go)
                    />
                </Card>
                </div>
            </section>
        </>
    );
}

const Card = ({
                  title,
                  icon,
                  children,
                  description
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
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div
                    className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className=" text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
                    style={{color: '#e4ecff'}}>
                    {description}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({order}: { order?: string }) => {
    return (
        <div>
            <button
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                <span
                    className=" text-2xl font-bold  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl">
   {order}
  </span>
            </button>
        </div>
    );
};

export const Icon = ({className, ...rest}: any) => {
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