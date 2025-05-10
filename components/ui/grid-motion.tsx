import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { cn } from "@/lib/utils"

interface GridMotionProps {
  /**
   * Array of items to display in the grid
   */
  items?: (string | ReactNode)[]
  /**
   * Color for the radial gradient background
   */
  gradientColor?: string
  /**
   * Additional CSS classes
   */
  className?: string
}

// components/ui/grid-motion.tsx

// ... (imports and other code) ...

export function GridMotion({
  items = [],
  gradientColor = 'black',
  className
}: GridMotionProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  // Initialize rowRefs.current with an array of the correct size, filled with nulls,
  // if you know the number of rows upfront (which is 4 in this case).
  // This helps prevent potential issues if GSAP tries to access an index that isn't set yet.
  const rowRefs = useRef<(HTMLDivElement | null)[]>(Array(4).fill(null));
  const mouseXRef = useRef(typeof window !== "undefined" ? window.innerWidth / 2 : 0); // Handle SSR

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    // Ensure GSAP and window-dependent logic only run client-side
    if (typeof window === "undefined") return;

    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      removeAnimationLoop();
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <div className={cn("h-full w-full overflow-hidden", className)} ref={gridRef}>
      <section
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        // Note: The style prop might cause re-renders if gradientColor changes.
        // Consider memoization or moving to CSS variables if performance is critical.
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="relative z-2 flex-none grid h-[150vh] w-[150vw] gap-4 grid-rows-[repeat(4,1fr)] grid-cols-[100%] -rotate-15 origin-center">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-[repeat(7,1fr)] will-change-transform will-change-filter"
              ref={(el) => { // <--- MODIFIED LINE
                rowRefs.current[rowIndex] = el;
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center text-foreground text-xl">
                      {typeof content === 'string' && content.startsWith('http') ? (
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        />
                      ) : (
                        <div className="p-4 text-center z-1">
                          {content}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="relative pointer-events-none h-full w-full inset-0">
          {/* This div seems empty. Is it for something specific or a placeholder? */}
          <div className="rounded-none" />
        </div>
      </section>
    </div>
  );
}