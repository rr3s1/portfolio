"use client";

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Import our code editor illustration - no SSR to avoid hydration errors
const CodeEditorIllustration = dynamic(
  () => import('./ui/CodeEditorIllustration'),
  { ssr: false }
);

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Show scroll indicator after 4 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header role="banner" className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden bg-brand-bg">
      {/* Preload background image for better LCP performance */}
      <link rel="preload" as="image" href="/gradients/aurora-1.svg" />
      
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
        <div className="w-full h-full bg-gradient-to-br from-brand-primary-50/20 via-brand-primary-100/20 to-brand-accent/20 animate-aurora" />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 w-full h-full bg-[url('/texture/noise.svg')] mix-blend-overlay opacity-40"
          style={{ backgroundRepeat: 'repeat' }} 
        />
      </div>
      
      {/* Animated beams */}
      <div className="absolute left-1/4 top-1/4 opacity-40 animate-tilt-beam">
        <Image 
          src="/gradients/beam-1.svg" 
          alt="" 
          width={400} 
          height={600} 
          className="w-full h-auto"
          priority
          aria-hidden="true"
        />
      </div>
      
      <div className="absolute right-1/4 top-1/3 opacity-30 animate-tilt-beam" style={{ animationDelay: "-3s" }}>
        <Image 
          src="/gradients/beam-2.svg" 
          alt="" 
          width={400} 
          height={600} 
          className="w-full h-auto"
          priority
          aria-hidden="true"
        />
      </div>
      
      <div className="absolute left-1/3 bottom-1/4 opacity-20 animate-tilt-beam" style={{ animationDelay: "-5s" }}>
        <Image 
          src="/gradients/beam-3.svg" 
          alt="" 
          width={400} 
          height={600} 
          className="w-full h-auto" 
          priority
          aria-hidden="true"
        />
      </div>
      
      {/* Main Content Grid */}
      <div className="relative z-10 max-w-4xl 2xl:max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        {/* Left Column - Text Content */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Super label with gradient underline */}
          <motion.div 
            className="mb-4 relative inline-block" 
            variants={itemVariants}
          >
            <span className="text-white-100 text-xs uppercase tracking-[0.2em] font-medium">
              Full Stack
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary-50 to-brand-accent"></span>
          </motion.div>
          
          {/* Main Title - Gradient Text */}
          <motion.h1 
            className="bg-gradient-to-r from-brand-primary-50 via-white-100 to-brand-accent bg-clip-text text-transparent font-bold leading-tight mb-4 animate-gradient-text bg-[length:200%_auto] clamp-text"
            style={{ fontSize: 'clamp(2.75rem, 7vw + 0.5rem, 6rem)' }}
            variants={itemVariants}
          >
            Developer
          </motion.h1>
          
          {/* Tagline */}
          <motion.h2 
            className="font-medium mb-6 text-white-100/60"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw + 1rem, 2rem)' }}
            variants={itemVariants}
          >
            Transforming Concepts into Seamless Experiences
          </motion.h2>
          
          {/* Intro line */}
          <motion.p 
            className="text-white-100/70 text-base lg:text-lg mb-8"
            variants={itemVariants}
          >
            Hi, I&apos;m Adrian, a Next.js Developer based in Croatia
          </motion.p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.div variants={itemVariants}>
              <motion.a
                href="#projects"
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(76,201,240,0.35)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-primary-50 to-brand-primary-100 text-white font-medium shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary-50/60"
              >
                Show my work <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-primary-50/30 text-brand-primary-50 font-medium hover:bg-brand-primary-50/10 transition-colors"
              >
                <FaEnvelope /> Contact me
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right Column - Code Editor Illustration */}
        <div className="hidden lg:block">
          <motion.div
            whileHover={{ rotateY: -5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CodeEditorIllustration />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="#about" className="flex flex-col items-center text-white-100/60 hover:text-white-100 transition-colors">
            <span className="text-sm mb-2">Scroll down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Hero;