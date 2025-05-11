"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState, useRef, useCallback } from "react";

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
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    const getDirection = useCallback(() => {
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
    }, [direction]);

    const getSpeed = useCallback(() => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    }, [speed]);

    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            const existingClones = scrollerRef.current.querySelectorAll('[data-cloned="true"]');
            existingClones.forEach(node => node.remove());
            
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLElement;
                duplicatedItem.setAttribute('data-cloned', 'true');
                duplicatedItem.setAttribute('aria-hidden', 'true');
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true); // setStart is stable, no need to add to deps
        }
    }, [getDirection, getSpeed]); // `items` removed from here

    useEffect(() => {
        // Run addAnimation if the `items` prop changes, or if `addAnimation` itself changes
        addAnimation();
    }, [addAnimation, items]); // `items` added here

    // const cosmicNeonStyles = [ ... ]; // This was unused. Removed for clarity or can be kept if planned for future use.

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
                            key={item.name + idx}
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