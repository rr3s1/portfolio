'use client';

import { SplineScene } from '@/components/ui/spline';
import { Card } from '@/components/ui/card';
import AnimatedTextCycle from './animated-text-cycle';
import React from 'react';

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[1200px] w-full overflow-hidden border-0 bg-transparent shadow-none">
      {/* radial fade vignette */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]" />

      <div className="flex h-full">
        {/* ── Left side ─────────────────────────────────────── */}
        <div className="relative z-10 flex w-1/2 flex-col justify-center p-8">
          <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">

            {/* FULL STACK */}
            <h2 className="max-w-120 text-center text-[27px] font-black tracking-widest uppercase text-[#FFD195]">
              FULL STACK
            </h2>

            {/* DEV */}
            <h1
              className="
                mb-4
                text-center font-bold text-transparent
                bg-clip-text
                bg-gradient-to-br
                from-[#FE3BE2] via-[#B333FF] to-[#00E8FF]
                text-[33px] md:text-5xl lg:text-6xl
              "
            >
              DEV
            </h1>

            {/* building + animated nouns */}
            <div className="max-w-[300px]">
              <h1 className="text-center text-4xl font-semibold">
                <span className="text-[#A783FF]">building</span>
                <br />
                <AnimatedTextCycle
                  words={[
                    'Apps',
                    'Dashboards',
                    'Platforms',
                    'Interfaces',
                    'Systems',
                    'Features',
                    'Experiences',
                  ]}
                  interval={3000}
                  className="
                    mt-5 text-[52px] font-semibold
                    text-transparent bg-clip-text
                    bg-gradient-to-r
                    from-[#00E8FF] via-[#53BFC8] to-[#FFC965]
                  "
                />
              </h1>
            </div>
          </div>
        </div>

        {/* ── Right side (Spline) ───────────────────────────── */}
        <div className="relative w-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-[900px]"
          />
        </div>
      </div>
    </Card>
  );
}
