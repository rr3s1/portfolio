"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-navy-900">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold  text-sky-400">
              <br /><br />
              <span className="text-2xl md:text-6xl font-bold mt-1 bg-gradient-to-r from-red-400 via-rose-500 to-purple-700 bg-clip-text text-transparent leading-none ">
              Driven by<br /><br />
              </span>
            </h1>
          </>
        }
      >
        <Image
  src="/44.png"
  alt="hero"
  width={800} // or your desired width
  height={800} // or your desired height
  className="rounded-2xl object-cover object-center mx-auto block"
/>
      </ContainerScroll>
    </div>
  );
}