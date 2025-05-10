/* -----------------------------------------------------------------------
   Star field with clearly visible colours
   -------------------------------------------------------------------- */
   "use client";

   import { Canvas, useFrame, type PointsProps } from "@react-three/fiber";
   import { Points, PointMaterial } from "@react-three/drei";
   import * as random from "maath/random";
   import { Suspense, useRef, useState } from "react";
   import { Color, type Points as PointsType } from "three";
   
   const FLOATS = 6_000;          // 2 000 stars  (3 floats per star)
   const STAR_SIZE = 0.002;       // ~2½ px on a full‑HD screen
   
   export const StarBackground = (props: PointsProps) => {
     const ref = useRef<PointsType | null>(null);
   
     /* ------------------- positions (Float32Array) ----------------------- */
     const [positions] = useState<Float32Array>(() => {
       const buf = new Float32Array(FLOATS);
       return random.inSphere(buf, { radius: 1.2 });   // returns Float32Array
     });
   
     /* ------------------- colours (Float32Array) ------------------------- */
     const palette = [
       0xffd54f, // warm yellow
       0xff6f00, // orange
       0x03a9f4, // blue
       0xcf6679, // pink‑red
       0x8bc34a, // green
       0xffffff, // keep a few classic white stars
     ].map((hex) => new Color(hex));
   
     const [colors] = useState<Float32Array>(() => {
       const arr = new Float32Array(FLOATS);
       for (let i = 0; i < FLOATS; i += 3) {
         const c = palette[Math.floor(Math.random() * palette.length)];
         arr[i] = c.r;
         arr[i + 1] = c.g;
         arr[i + 2] = c.b;
       }
       return arr;
     });
   
     /* ------------------- slow rotation ---------------------------------- */
     useFrame((_state, delta) => {
       if (ref.current) {
         ref.current.rotation.x -= delta * 0.1;
         ref.current.rotation.y -= delta * 0.066;
       }
     });
   
     return (
       <group rotation={[0, 0, Math.PI / 4]}>
         <Points
           ref={ref}
           stride={3}
           positions={positions}
           colors={colors}
           frustumCulled
           {...props}
         >
           {/* NB: no “color” prop, only vertexColors */}
           <PointMaterial
             transparent
             size={STAR_SIZE}
             sizeAttenuation
             depthWrite={false}
             vertexColors
           />
         </Points>
       </group>
     );
   };
   
   export const StarsCanvas = () => (
     <div className="fixed inset-0 -z-10 w-full h-auto">
       <Canvas
         camera={{ position: [0, 0, 1] }}
         gl={{ alpha: true }}
         style={{ background: "transparent" }}
       >
         <Suspense fallback={null}>
           <StarBackground />
         </Suspense>
       </Canvas>
     </div>
   );
   