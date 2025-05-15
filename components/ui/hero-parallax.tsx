"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[1500px] md:h-[2000px] lg:h-[2500px] pb-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              index={idx}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              index={idx + 5}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              index={idx + 10}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
    {/*
      SM (default):
        h1: text-4xl (2.25rem / 36px)
        p:  text-lg  (1.125rem / 18px)
        Ratio: 2.25 / 1.125 = 2x

      MD (& LG, as md cascades up):
        h1: md:text-5xl (3rem / 48px)
        p:  md:text-2xl (1.5rem / 24px)
        Ratio: 3 / 1.5 = 2x
    */}
    <h1 className="text-5xl md:text-6xl font-bold font-quantico bg-gradient-to-r bg:text-white">
       Exploring
    </h1>
    <h1 className="text-5xl md:text-6xl font-bold font-quantico bg-gradient-to-r from-[#a855f7] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent">
      Designs
    </h1>

    <p className="max-w-2xl text-lg md:text-2xl font-bold font-quantico mt-8 dark:text-sky-400">
      To keep my creative edge, I regularly prototype and collect modern UI/UX inspirations
    </p>
  </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  index,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  index: number;
}) => {
  const gradients = [
    "from-purple-500 to-blue-500",
    "from-orange-400 to-yellow-500",
    "from-pink-500 to-red-500",
    "from-cyan-400 to-blue-500",
    "from-green-400 to-lime-500",
    "from-fuchsia-500 to-pink-500",
    "from-yellow-400 to-orange-500",
    "from-blue-400 to-indigo-500",
    "from-green-400 to-emerald-500",
  ];
  const neonShadows = [
    "shadow-[0_0_30px_5px_rgba(147,51,234,0.4)]",   // purple
    "shadow-[0_0_30px_5px_rgba(251,191,36,0.4)]",   // orange/yellow
    "shadow-[0_0_30px_5px_rgba(236,72,153,0.4)]",   // pink
    "shadow-[0_0_30px_5px_rgba(34,211,238,0.4)]",   // cyan/blue
    "shadow-[0_0_30px_5px_rgba(132,204,22,0.4)]",   // green
    "shadow-[0_0_30px_5px_rgba(232,121,249,0.4)]",  // fuchsia/pink
    "shadow-[0_0_30px_5px_rgba(251,191,36,0.4)]",   // yellow/orange
    "shadow-[0_0_30px_5px_rgba(59,130,246,0.4)]",   // blue/indigo
    "shadow-[0_0_30px_5px_rgba(16,185,129,0.4)]",   // emerald/green
  ];
  const gradient = gradients[index % gradients.length];
  const neonShadow = neonShadows[index % neonShadows.length];

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-32 w-[11rem] md:h-67 md:w-[22rem] lg:h-96 lg:w-[30rem]  relative shrink-0"
    >
      <div className={`p-[2px] md:p-[6px] rounded-xl bg-gradient-to-r ${gradient} ${neonShadow} h-full w-full`}>
        <a
          href={product.link}
          className="block group-hover/product:shadow-2xl rounded-xl bg-black overflow-hidden h-full w-full"
        >
          <Image
            src={product.thumbnail}
            height={600}
            width={600}
            className="object-cover object-left-top h-full w-full"
            alt={product.title}
          />
        </a>
      </div>

    </motion.div>
  );
}; 