'use client';

import { useEffect, useRef, useCallback } from 'react';
import * as easingUtils from 'easing-utils'; // You'll need to install this: npm install easing-utils
import styles from './AHole.module.css';

// Define the structure for Disc and Particle for better type safety
interface Disc {
  x: number;
  y: number;
  w: number;
  h: number;
  p: number; // progress
}

interface Particle {
  x: number;
  sx: number;
  dx: number;
  y: number;
  vy: number;
  p: number;
  r: number;
  c: string;
}

const AHoleComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const componentRootRef = useRef<HTMLDivElement>(null); // Ref for the main container <a-hole> equivalent

  // Refs to hold "instance" variables from the original class
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const discsRef = useRef<Disc[]>([]);
  const linesRef = useRef<Array<Array<{ x: number; y: number }>>>([]);
  const particlesRef = useRef<Particle[]>([]);
  const rectRef = useRef<DOMRect | null>(null);
  const renderInfoRef = useRef<{ width: number; height: number; dpi: number } | null>(null);
  const clipRef = useRef<{ disc: Disc; i: number; path: Path2D } | null>(null);
  const particleAreaRef = useRef<{ sw: number; ew: number; h: number; sx: number; ex: number } | null>(null);
  const linesCanvasRef = useRef<OffscreenCanvas | null>(null);
  const linesCtxRef = useRef<OffscreenCanvasRenderingContext2D | null>(null);
  const startDiscRef = useRef<Disc | null>(null);
  const endDiscRef = useRef<Disc | null>(null);

  const animationFrameId = useRef<number | null>(null);

  const tweenValue = useCallback((start: number, end: number, p: number, ease: string | false = false): number => {
    const delta = end - start;
    const easeFnName = ease ? `ease${ease.charAt(0).toUpperCase() + ease.slice(1)}` : 'linear';
    // @ts-ignore Dynamically accessing easingUtils properties
    const easeFunction = easingUtils[easeFnName] || easingUtils.linear;
    return start + delta * easeFunction(p);
  }, []);

  const tweenDisc = useCallback((disc: Disc): Disc => {
    if (!startDiscRef.current || !endDiscRef.current) return disc;
    disc.x = tweenValue(startDiscRef.current.x, endDiscRef.current.x, disc.p);
    disc.y = tweenValue(startDiscRef.current.y, endDiscRef.current.y, disc.p, "inExpo");
    disc.w = tweenValue(startDiscRef.current.w, endDiscRef.current.w, disc.p);
    disc.h = tweenValue(startDiscRef.current.h, endDiscRef.current.h, disc.p);
    return disc;
  }, [tweenValue]);
  
  const initParticle = useCallback((start = false): Particle => {
    if (!particleAreaRef.current || !clipRef.current) {
      // Provide default values or handle error if particleAreaRef or clipRef is not set
      // This is a fallback, ideally these should be set before initParticle is called.
      return { x: 0, sx: 0, dx: 0, y: 0, vy: 0, p: 0, r: 0, c: 'rgba(255,255,255,0)' };
    }
    const pa = particleAreaRef.current;
    const sx = pa.sx + pa.sw * Math.random();
    const ex = pa.ex + pa.ew * Math.random();
    const dx = ex - sx;
    const y = start ? pa.h * Math.random() : pa.h;
    const r = 0.5 + Math.random() * 4;
    const vy = 0.5 + Math.random();

    return {
      x: sx,
      sx,
      dx,
      y,
      vy,
      p: 0,
      r,
      c: `rgba(255, 255, 255, ${Math.random()})`
    };
  }, []);


  const setSize = useCallback(() => {
    if (!componentRootRef.current || !canvasRef.current) return;

    const rect = componentRootRef.current.getBoundingClientRect();
    rectRef.current = rect;

    renderInfoRef.current = {
      width: rect.width,
      height: rect.height,
      dpi: window.devicePixelRatio
    };

    canvasRef.current.width = renderInfoRef.current.width * renderInfoRef.current.dpi;
    canvasRef.current.height = renderInfoRef.current.height * renderInfoRef.current.dpi;
  }, []);

  const setDiscs = useCallback(() => {
    if (!rectRef.current) return;
    const { width, height } = rectRef.current;

    discsRef.current = [];

    startDiscRef.current = {
      x: width * 0.5,
      y: height * 0.45,
      w: width * 0.75,
      h: height * 0.7,
      p: 0 // p is not strictly needed here but good for consistency
    };

    endDiscRef.current = {
      x: width * 0.5,
      y: height * 0.95,
      w: 0,
      h: 0,
      p: 1 // p is not strictly needed here
    };

    const totalDiscs = 100;
    let prevBottom = height;
    let tempClip: { disc: Disc; i: number; path: Path2D } | null = null;

    for (let i = 0; i < totalDiscs; i++) {
      const p = i / totalDiscs;
      const disc = tweenDisc({ p } as Disc); // Cast as Disc, tweenDisc will fill it

      const bottom = disc.y + disc.h;
      if (bottom <= prevBottom) {
        tempClip = {
          disc: { ...disc },
          i,
          path: new Path2D() // Will be defined below
        };
      }
      prevBottom = bottom;
      discsRef.current.push(disc);
    }
    
    if (tempClip) {
        clipRef.current = tempClip;
        clipRef.current.path.ellipse(
            clipRef.current.disc.x,
            clipRef.current.disc.y,
            clipRef.current.disc.w,
            clipRef.current.disc.h,
            0, 0, Math.PI * 2
        );
        clipRef.current.path.rect(
            clipRef.current.disc.x - clipRef.current.disc.w,
            0,
            clipRef.current.disc.w * 2,
            clipRef.current.disc.y
        );
    }
  }, [tweenDisc]);

  const setLines = useCallback(() => {
    if (!rectRef.current || !clipRef.current || typeof OffscreenCanvas === 'undefined') return;
    const { width, height } = rectRef.current;

    linesRef.current = [];
    const totalLines = 100;
    const linesAngle = (Math.PI * 2) / totalLines;

    for (let i = 0; i < totalLines; i++) {
      linesRef.current.push([]);
    }

    discsRef.current.forEach((disc) => {
      for (let i = 0; i < totalLines; i++) {
        const angle = i * linesAngle;
        const p = {
          x: disc.x + Math.cos(angle) * disc.w,
          y: disc.y + Math.sin(angle) * disc.h
        };
        linesRef.current[i].push(p);
      }
    });

    linesCanvasRef.current = new OffscreenCanvas(width, height);
    const ctx = linesCanvasRef.current.getContext("2d");
    if (!ctx) return;
    linesCtxRef.current = ctx;


    linesRef.current.forEach((line) => {
      ctx.save();
      let lineIsIn = false;
      line.forEach((p1, j) => {
        if (j === 0) return;
        const p0 = line[j - 1];

        if (!lineIsIn && clipRef.current &&
            (ctx.isPointInPath(clipRef.current.path, p1.x, p1.y) ||
             ctx.isPointInStroke(clipRef.current.path, p1.x, p1.y))
        ) {
          lineIsIn = true;
        } else if (lineIsIn && clipRef.current) {
          ctx.clip(clipRef.current.path);
        }

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = "#444";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
      });
      ctx.restore();
    });
  }, []);

  const setParticles = useCallback(() => {
    if (!rectRef.current || !clipRef.current) return;
    const { width, height } = rectRef.current;

    particlesRef.current = [];

    particleAreaRef.current = {
      sw: clipRef.current.disc.w * 0.5,
      ew: clipRef.current.disc.w * 2,
      h: height * 0.85,
      sx: 0, // Will be calculated next
      ex: 0  // Will be calculated next
    };
    particleAreaRef.current.sx = (width - particleAreaRef.current.sw) / 2;
    particleAreaRef.current.ex = (width - particleAreaRef.current.ew) / 2;

    const totalParticles = 100;
    for (let i = 0; i < totalParticles; i++) {
      particlesRef.current.push(initParticle(true));
    }
  }, [initParticle]);


  const drawDiscs = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || !startDiscRef.current || !clipRef.current) return;

    ctx.strokeStyle = "#444";
    ctx.lineWidth = 2;

    const outerDisc = startDiscRef.current;
    ctx.beginPath();
    ctx.ellipse(outerDisc.x, outerDisc.y, outerDisc.w, outerDisc.h, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();

    discsRef.current.forEach((disc, i) => {
      if (i % 5 !== 0) return;
      if (disc.w < clipRef.current!.disc.w - 5) { // clipRef.current should be defined here
        ctx.save();
        ctx.clip(clipRef.current!.path);
      }
      ctx.beginPath();
      ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
      if (disc.w < clipRef.current!.disc.w - 5) {
        ctx.restore();
      }
    });
  }, []);

  const drawLines = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || !linesCanvasRef.current) return;
    ctx.drawImage(linesCanvasRef.current, 0, 0);
  }, []);

  const drawParticles = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || !clipRef.current) return;

    ctx.save();
    ctx.clip(clipRef.current.path);
    particlesRef.current.forEach((particle) => {
      ctx.fillStyle = particle.c;
      ctx.beginPath();
      ctx.rect(particle.x, particle.y, particle.r, particle.r);
      ctx.closePath();
      ctx.fill();
    });
    ctx.restore();
  }, []);

  const moveDiscs = useCallback(() => {
    discsRef.current.forEach((disc) => {
      disc.p = (disc.p + 0.001) % 1;
      tweenDisc(disc);
    });
  }, [tweenDisc]);

  const moveParticles = useCallback(() => {
    if (!particleAreaRef.current) return;
    const pa = particleAreaRef.current;
    particlesRef.current.forEach((particle, index) => {
      particle.p = 1 - particle.y / pa.h;
      particle.x = particle.sx + particle.dx * particle.p;
      particle.y -= particle.vy;
      if (particle.y < 0) {
        particlesRef.current[index] = initParticle(); // Re-initialize particle
      }
    });
  }, [initParticle]);

  const tick = useCallback(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    const renderInfo = renderInfoRef.current;

    if (!ctx || !canvas || !renderInfo) {
      animationFrameId.current = requestAnimationFrame(tick);
      return;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(renderInfo.dpi, renderInfo.dpi);

    moveDiscs();
    moveParticles();

    drawDiscs();
    drawLines();
    drawParticles();

    ctx.restore();
    animationFrameId.current = requestAnimationFrame(tick);
  }, [moveDiscs, moveParticles, drawDiscs, drawLines, drawParticles]);

  const initialize = useCallback(() => {
    if (!canvasRef.current || !componentRootRef.current) return;
    ctxRef.current = canvasRef.current.getContext('2d');
    if (!ctxRef.current) {
        console.error("Failed to get 2D context");
        return;
    }

    setSize();
    setDiscs();
    setLines();
    setParticles();

    animationFrameId.current = requestAnimationFrame(tick);
  }, [setSize, setDiscs, setLines, setParticles, tick]);

  useEffect(() => {
    initialize(); // Initial setup

    const handleResize = () => {
      // Debounce or throttle this if performance is an issue on frequent resizes
      initialize(); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initialize]); // `initialize` is memoized, so this runs once on mount and cleans up on unmount

  return (
    <div
    ref={componentRootRef}
    className={`${styles.aHole} ${styles.fadeCircle}`  } // <--- MODIFIED HERE
  >
      <canvas ref={canvasRef} className={styles.jsCanvas}></canvas>
      <div className={styles.aura}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default AHoleComponent;