"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col h-[1100px] overflow-hidden  pt-[50px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold  text-sky-400">
              Driven by<br /><br />
              <span className="text-8xl font-bold mt-1 bg-gradient-to-r from-red-400 via-rose-500 to-purple-700 bg-clip-text text-transparent leading-none ">
              Concepts<br /><br />
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/33.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
} 