"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState, useRef, useCallback } from "react";

export const InfiniteLogoSlider = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: React.ReactNode[];
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
        // (which happens if `direction` or `speed` props change, causing `getDirection`/`getSpeed` to change)
        addAnimation();
    }, [addAnimation, items]); // `items` added here

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller pointer-events-none relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={typeof item === 'string' ? item + idx : idx}
                        className="flex-shrink-0"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};