"use client";

import React, { useRef, useMemo, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Loader, ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated, config as springConfig } from '@react-spring/three';

// --- Interfaces (TechItem) ---
interface TechItem {
  name: string;
  logo: string;
  quote?: string;
}

const SPHERE_RADIUS = 3;

// --- Enhanced LogoPlane Component ---
interface LogoPlaneProps {
  targetPosition: [number, number, number];
  logoUrl: string;
  name: string;
  size?: number;
  initialDelay?: number;
}

const LogoPlane: React.FC<LogoPlaneProps> = ({
  targetPosition,
  logoUrl,
  name,
  size = 0.8,
  initialDelay = 0
}) => {
  const texture = useTexture(logoUrl);
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ camera }) => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(camera.quaternion);
      meshRef.current.position.y += Math.sin(Date.now() * 0.0015 + initialDelay * 0.1) * 0.005;
    }
  });

  const { animatedPos } = useSpring({
    to: { animatedPos: targetPosition },
    from: { animatedPos: [targetPosition[0], targetPosition[1] + SPHERE_RADIUS * 0.5, targetPosition[2]] },
    config: springConfig.gentle,
    delay: initialDelay,
    reset: false
  });

  const { opacity, emissiveIntensitySpring } = useSpring({
    to: { opacity: 1, emissiveIntensitySpring: 0.3 },
    from: { opacity: 0, emissiveIntensitySpring: 0 },
    delay: initialDelay + 200,
    config: springConfig.slow,
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={animatedPos as any}
      scale={[size * 1.2, size * 1.2, size * 1.2]}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[size, size]} />
      <animated.meshStandardMaterial
        map={texture}
        color="white"
        transparent
        side={THREE.DoubleSide}
        alphaTest={0.5}
        depthWrite={false}
        opacity={opacity}
        emissive="white"
        emissiveMap={texture}
        emissiveIntensity={emissiveIntensitySpring}
      />
    </animated.mesh>
  );
};

// --- Symmetrical Position Calculation ---
function calculateSymmetricalPositions(numItems: number, radius: number): Array<[number, number, number]> {
  const positions: Array<[number, number, number]> = [];
  if (numItems === 0) return positions;
  const numRings = Math.min(3, Math.ceil(Math.sqrt(numItems)));
  let itemsPlaced = 0;
  for (let i = 0; i < numRings; i++) {
    const y = radius * ((i - numRings/2 + 1) / numRings);
    const ringRadius = Math.sqrt(Math.max(0, radius * radius - y * y));
    const itemsForThisRing = Math.ceil((numItems - itemsPlaced) / (numRings - i));
    if (itemsForThisRing <= 0) continue;
    for (let k = 0; k < itemsForThisRing && itemsPlaced < numItems; k++) {
      const angle = (k / itemsForThisRing) * 2 * Math.PI;
      const x = ringRadius * Math.cos(angle);
      const z = ringRadius * Math.sin(angle);
      positions.push([x, y, z]);
      itemsPlaced++;
    }
  }
  while (itemsPlaced < numItems && positions.length < numItems) {
    const fallbackY = radius * (0.9 - (itemsPlaced / numItems) * 1.8);
    const fallbackRingRadius = Math.sqrt(Math.max(0, radius*radius - fallbackY*fallbackY));
    positions.push([fallbackRingRadius * (itemsPlaced % 2 === 0 ? 1: -1), fallbackY, 0]);
    itemsPlaced++;
  }
  return positions;
}

// --- TechItemsSphere Component ---
interface TechSphereProps {
  techItems: TechItem[];
  radius?: number;
  rotationSpeed?: number;
  isSymmetricalLayout: boolean;
}

const TechItemsSphere: React.FC<TechSphereProps> = ({
  techItems,
  radius = SPHERE_RADIUS,
  rotationSpeed = 0.2,
  isSymmetricalLayout,
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const scroll = useScroll();

  useFrame((_state, delta) => {
    if (groupRef.current) {
      if (isSymmetricalLayout) {
        groupRef.current.rotation.y += delta * rotationSpeed;
        groupRef.current.rotation.x += delta * rotationSpeed * 0.2;
      }
      groupRef.current.position.y = (scroll.offset - 0.5) * radius * 0.6;
    }
  });

  const targetPositions = useMemo(() => {
    const numItems = techItems.length;
    if (isSymmetricalLayout) {
      return calculateSymmetricalPositions(numItems, radius);
    } else {
      const points: Array<[number, number, number]> = [];
      if (numItems === 0) return points;
      const phi = Math.PI * (3.0 - Math.sqrt(5.0)); 
      for (let i = 0; i < numItems; i++) {
        const yRatio = 1 - (i / (numItems - 1)) * 2; 
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
            size={radius / 4.2} 
            initialDelay={index * 60}
          />
        </Suspense>
      ))}
    </group>
  );
};

// --- TechSphereCanvas Component ---
const TechSphereCanvas: React.FC<{ techItems: TechItem[] }> = ({ techItems }) => {
  const [isSymmetricalLayout, setIsSymmetricalLayout] = useState(false);

  const handleCanvasClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((event.target as HTMLElement).closest('.r3f-loader')) return;
    setIsSymmetricalLayout(prev => !prev);
  };

  if (!techItems || techItems.length === 0) {
    return (
      <div style={{ width: '100%', height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Preparing tech sphere...
      </div>
    );
  }

  return (
    <>
      <Loader 
        containerStyles={{ background: 'rgba(0, 0, 0, 0.85)', zIndex: 1000 }}
        dataStyles={{ color: 'white', fontSize: '16px' }}
        innerStyles={{ backgroundColor: 'dodgerblue', width: 'calc(100% - 20px)' }}
        barStyles={{ backgroundColor: 'lightblue', height: '5px' }}
      />
      <div
        style={{ 
          width: '100%', 
          height: '60vh',
          minHeight: '400px', 
          maxHeight:'700px', 
          cursor: 'pointer',
          position: 'relative', // Good for containing absolutely positioned children if any
          overflow: 'hidden', // Kept for general good practice, though not solving this specific scrollbar
        }}
        onClick={handleCanvasClick}
        title={isSymmetricalLayout ? "Click to switch to dynamic layout" : "Click to switch to symmetrical layout"}
      >
        <Canvas
          shadows={THREE.PCFSoftShadowMap}
          camera={{ position: [0, 0, SPHERE_RADIUS * 3.1], fov: 50 }}
          gl={{ 
            antialias: true, 
            alpha: true, 
            powerPreference: "high-performance"
          }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={Math.PI / 2.2} /> 
          
          <pointLight
            castShadow
            position={[SPHERE_RADIUS * 1.5, SPHERE_RADIUS * 1.5, SPHERE_RADIUS * 1.5]}
            intensity={Math.PI * 1.3} 
            color="#ffffff"
            decay={1.5} 
            distance={SPHERE_RADIUS * 5} 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024}
            shadow-camera-far={SPHERE_RADIUS * 6}
            shadow-bias={-0.0005}
          />
          <pointLight
            position={[-SPHERE_RADIUS * 2, -SPHERE_RADIUS * 1, -SPHERE_RADIUS * 2]}
            intensity={Math.PI * 0.6}
            color="#a0a0ff"
            decay={2}
            distance={SPHERE_RADIUS * 8}
          />

          <ScrollControls
            pages={3}
            damping={0.25}
            // Apply styles directly to the scrollable div created by ScrollControls
            style={{
              scrollbarWidth: 'none', /* For Firefox */
              msOverflowStyle: 'none', /* For Internet Explorer and Edge (pre-Chromium) */
            }}
            // The className "Scrollcontrols" is targeted by global CSS for Webkit
          >
            <Suspense fallback={null}> 
              <TechItemsSphere
                techItems={techItems}
                radius={SPHERE_RADIUS}
                isSymmetricalLayout={isSymmetricalLayout}
              />
            </Suspense>
          </ScrollControls>

          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={isSymmetricalLayout ? 0.1 : 0.4}
            minPolarAngle={Math.PI / 3.5} 
            maxPolarAngle={Math.PI - Math.PI / 3.5}
            target={[0,0,0]}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </div>
    </>
  );
};

export default TechSphereCanvas;