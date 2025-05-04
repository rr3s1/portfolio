"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
                                        items = [],
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }: {
    items: {
        quote: string;
        icon?: string;
        title: string;
        name: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    const cosmicNeonStyles = [
        { from: "#0C1023", to: "#062A4C" },
        { from: "#0C1023", to: "#0B3A5E" },
        { from: "#0C1023", to: "#0E4971" },
        { from: "#0C1023", to: "#0F5785" },
        { from: "#0C1023", to: "#11679A" },
    ];

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller varela-round-regular relative z-20  w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex  varela-round-regular min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items?.map((item, idx) => {
                    return (
                        <li
                            className="w-[90vw] max-w-full varela-round-regular relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:py-6 md:w-[60vh]"
                            style={{
                                background: "linear-gradient(to right, #0c1225, #0c243e, #0b3557)"
                            }}
                            key={idx}
                        >
                            <blockquote>
                                <div
                                    aria-hidden="true"
                                    className="user-select-none varela-round-regular -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                                ></div>
                                <span className=" varela-round-regular relative z-20 md:text-lg text-sm leading-[1.6] text-white font-normal">
                                    {item.quote}
                                </span>
                                <div className="relative z-20 mt-6 flex flex-row items-center">
                                    <div className="flex flex-col">
                                        <span className="flex flex-col gap-1">
                                            <span className="text-xl leading-[1.6] text-white font-bold ">
                                                {item.name}
                                            </span>
                                        </span>
                                        <span className=" text-sm leading-[1.6] bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent font-normal">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
