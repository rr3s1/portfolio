"use client";

import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react'; // Added useState, useEffect
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated, config as springConfig } from '@react-spring/three'; // react-spring imports

// --- Interfaces (TechItem) ---
interface TechItem {
  name: string;
  logo: string;
  quote?: string;
}

// --- Global or passed radius ---
const SPHERE_RADIUS = 3; // Define it once, accessible to components

// --- LogoPlane Component (Handles individual logo rendering and animation) ---
interface LogoPlaneProps {
  targetPosition: [number, number, number]; // The position it should animate to
  logoUrl: string;
  name: string;
  size?: number;
  initialDelay?: number; // For staggered initial animation
}

const LogoPlane: React.FC<LogoPlaneProps> = ({ targetPosition, logoUrl, name, size = 0.8, initialDelay = 0 }) => {
  const texture = useTexture(logoUrl);
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const meshRef = useRef<THREE.Mesh>(null!);

  // Billboarding: Make the plane always face the camera and stay upright
  useFrame(({ camera }) => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(camera.quaternion);
    }
  });

  // Spring for animating the position
  const { animatedPos } = useSpring({
    to: { animatedPos: targetPosition },
    from: { animatedPos: [targetPosition[0], targetPosition[1] + SPHERE_RADIUS * 1.5, targetPosition[2]] }, // Initial animation from above
    config: springConfig.gentle, // Animation physics
    delay: initialDelay, // Stagger initial animations
    reset: false, // Important: false means 'from' is only for initial mount or when 'from' itself changes.
                  // When 'to' (targetPosition) changes, it animates from current value.
  });

  // Spring for initial opacity fade-in
  const { opacity } = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: initialDelay + 100, // Stagger opacity after position starts
    config: springConfig.slow,
  });

  return (
    <animated.mesh ref={meshRef} position={animatedPos as any} scale={opacity}> {/* Apply animated scale for fade-in */}
      <planeGeometry args={[size, size]} />
      <animated.meshStandardMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
        alphaTest={0.5} // For sharp edges on transparent PNGs
        depthWrite={false} // Helps with transparency sorting
        opacity={opacity}
      />
    </animated.mesh>
  );
};

// --- Symmetrical Position Calculation ---
function calculateSymmetricalPositions(numItems: number, radius: number): Array<[number, number, number]> {
  const positions: Array<[number, number, number]> = [];
  if (numItems === 0) return positions;

  const numRings = numItems <= 2 ? 1 : numItems <= 7 ? 2 : 3; // 1, 2 or 3 rings
  let itemsPlaced = 0;

  for (let i = 0; i < numRings; i++) {
    let y: number;
    if (numRings === 1) { // Single ring (equator)
      y = 0;
    } else if (numRings === 2) { // Two rings
      y = radius * (i === 0 ? 0.55 : -0.55);
    } else { // Three rings
      if (i === 0) y = radius * 0.65;      // Top ring
      else if (i === 1) y = 0;            // Middle ring (equator)
      else y = -radius * -0.65;     // Bottom ring
    }

    const ringRadius = Math.sqrt(Math.max(0, radius * radius - y * y));
    const ringsLeft = numRings - i;
    const itemsForThisRing = Math.ceil((numItems - itemsPlaced) / ringsLeft);

    if (itemsForThisRing <= 0) continue;

    for (let k = 0; k < itemsForThisRing; k++) {
      if (itemsPlaced >= numItems) break;
      // Stagger alternate rings slightly
      const angleOffset = (numRings > 1 && i % 2 !== 0) ? Math.PI / itemsForThisRing : 0;
      const angle = (k / itemsForThisRing) * 2 * Math.PI + angleOffset;
      
      const x = ringRadius * Math.cos(angle);
      const z = ringRadius * Math.sin(angle);
      positions.push([x, y, z]);
      itemsPlaced++;
    }
    if (itemsPlaced >= numItems) break;
  }
   // Fallback if not all items are placed (should be rare with Math.ceil)
   while (itemsPlaced < numItems && positions.length < numItems && itemsPlaced < 100) {
    const fallbackY = radius * (0.9 - (itemsPlaced / numItems) * 1.8);
    const fallbackRingRadius = Math.sqrt(Math.max(0, radius*radius - fallbackY*fallbackY));
    positions.push([fallbackRingRadius * (itemsPlaced % 2 === 0 ? 1: -1) , fallbackY, 0]);
    itemsPlaced++;
  }
  return positions;
}


// --- TechItemsSphere Component (Manages the group of logos) ---
interface TechSphereProps {
  techItems: TechItem[];
  radius?: number;
  rotationSpeed?: number;
  isSymmetricalLayout: boolean; // To control layout type
}

const TechItemsSphere: React.FC<TechSphereProps> = ({
  techItems,
  radius = SPHERE_RADIUS,
  rotationSpeed = 0.2,
  isSymmetricalLayout,
}) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      // Slow down rotation slightly when symmetrical for a calmer view
      const speedMultiplier = isSymmetricalLayout ? 0.3 : 1;
      groupRef.current.rotation.y += delta * rotationSpeed * speedMultiplier;
      groupRef.current.rotation.x += delta * rotationSpeed * 0.2 * speedMultiplier;
    }
  });

  const targetPositions = useMemo(() => {
    const numItems = techItems.length;
    if (isSymmetricalLayout) {
      return calculateSymmetricalPositions(numItems, radius);
    } else {
      // Fibonacci sphere (normal layout)
      const points: Array<[number, number, number]> = [];
      if (numItems === 0) return points;
      const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // Golden angle
      for (let i = 0; i < numItems; i++) {
        const yRatio = 1 - (i / (numItems - 1)) * 2; // y goes from 1 to -1
        const rCurrent = Math.sqrt(1 - yRatio * yRatio);
        const theta = phi * i;
        const x = Math.cos(theta) * rCurrent;
        const z = Math.sin(theta) * rCurrent;
        points.push([x * radius, yRatio * radius, z * radius]);
      }
      return points;
    }
  }, [techItems.length, radius, isSymmetricalLayout]);

  return (
    <group ref={groupRef}>
      {techItems.map((item, index) => (
        <Suspense fallback={null} key={`${item.name}-${index}-logo`}>
          <LogoPlane
            targetPosition={targetPositions[index] || [0, 0, 0]}
            logoUrl={item.logo}
            name={item.name}
            size={radius / 3.9} // Adjust logo size
            initialDelay={index * 50} // Stagger initial appearance
          />
        </Suspense>
      ))}
    </group>
  );
};


// --- TechSphereCanvas Component (Main canvas and interaction logic) ---
const TechSphereCanvas: React.FC<{ techItems: TechItem[] }> = ({ techItems }) => {
  const [isSymmetricalLayout, setIsSymmetricalLayout] = useState(false);

  const handleCanvasClick = () => {
    setIsSymmetricalLayout(prev => !prev);
  };

  if (!techItems || techItems.length === 0) {
    return (
      <div style={{ width: '100%', height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Loading tech sphere...
      </div>
    );
  }

  return (
    <div
      style={{ width: '100%', height: '60vh', minHeight: '400px', maxHeight:'700px', cursor: 'pointer', touchAction: 'pan-y' }} // Allow vertical scroll on touch, pan-y
      onClick={handleCanvasClick}
      title={isSymmetricalLayout ? "Click to switch to dynamic layout" : "Click to switch to symmetrical layout"}
    >
      <Canvas
        camera={{ position: [0, 0, SPHERE_RADIUS * 2.9], fov: 50 }} // Slightly further camera
        gl={{ antialias: true, alpha: true }} // Enable antialiasing and alpha
      >
        <ambientLight intensity={Math.PI / 1.8} />
        <pointLight position={[SPHERE_RADIUS * 2, SPHERE_RADIUS * 2, SPHERE_RADIUS * 2]} decay={0.3} intensity={Math.PI * 0.7} />
        <pointLight position={[-SPHERE_RADIUS*2, -SPHERE_RADIUS, SPHERE_RADIUS*2]} decay={0.5} intensity={Math.PI*0.4} color="#aaaaff" />


        <Suspense fallback={null}>
          <TechItemsSphere
            techItems={techItems}
            radius={SPHERE_RADIUS}
            isSymmetricalLayout={isSymmetricalLayout}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true} // User can still rotate
          autoRotate
          autoRotateSpeed={isSymmetricalLayout ? 0.15 : 0.5} // Slower auto-rotate in symmetrical
          minPolarAngle={Math.PI / 4} // Don't look too far up/down
          maxPolarAngle={Math.PI - Math.PI / 4}
          target={[0,0,0]} // Orbit around the center
        />
      </Canvas>
    </div>
  );
};

export default TechSphereCanvas;