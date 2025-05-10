"use client"; // Required for R3F components

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Plane, useTexture, Text } from '@react-three/drei';
import * as THREE from 'three';

interface TechItem {
  name: string;
  logo: string;
  quote?: string; // Optional, if you want to display it on hover/click later
}

interface LogoOnSphereProps {
  position: [number, number, number];
  logoUrl: string;
  name: string;
  size?: number;
}

const LogoPlane: React.FC<LogoOnSphereProps> = ({ position, logoUrl, name, size = 0.8 }) => {
  const texture = useTexture(logoUrl);
  const meshRef = useRef<THREE.Mesh>(null!);

  // Make the plane always face the center (or camera, depending on desired effect)
  // For a sphere, they should point outwards. We can orient them if they are children of the sphere.
  // Or, if they are positioned independently, they can lookAt the center of the scene.
  useFrame(({ camera }) => {
    if (meshRef.current) {
      // Option 1: Make planes face the camera (Billboard effect)
      // meshRef.current.lookAt(camera.position);
      // Option 2: Make planes point outwards from the origin (if sphere is at origin)
      // This is implicitly handled if they are children of a rotating group and positioned correctly.
    }
  });

  return (
    <Plane ref={meshRef} args={[size, size]} position={position}>
      <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} alphaTest={0.5} />
      {/* Optional: Add text below the logo */}
      {/* <Text
        position={[0, -size / 1.5, 0.01]}
        fontSize={size / 5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text> */}
    </Plane>
  );
};

interface TechSphereProps {
  techItems: TechItem[];
  radius?: number;
  rotationSpeed?: number;
}

const TechItemsSphere: React.FC<TechSphereProps> = ({ techItems, radius = 3, rotationSpeed = 0.2 }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed;
      groupRef.current.rotation.x += delta * rotationSpeed * 0.5; // Optional: add some x-axis rotation
    }
  });

  const positions = useMemo(() => {
    const points: Array<[number, number, number]> = [];
    const numItems = techItems.length;
    const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // Golden angle in radians

    for (let i = 0; i < numItems; i++) {
      const y = 1 - (i / (numItems - 1)) * 2; // y goes from 1 to -1
      const r = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      points.push([x * radius, y * radius, z * radius]);
    }
    return points;
  }, [techItems.length, radius]);

  return (
    <group ref={groupRef}>
      {techItems.map((item, index) => (
        <Suspense fallback={null} key={item.name + index}>
          <LogoPlane
            position={positions[index]}
            logoUrl={item.logo}
            name={item.name}
            size={radius / 3.5} // Adjust logo size relative to sphere radius
          />
        </Suspense>
      ))}
    </group>
  );
};

const TechSphereCanvas: React.FC<{ techItems: TechItem[] }> = ({ techItems }) => {
  return (
    <div style={{ width: '100%', height: '60vh', minHeight: '400px', maxHeight:'700px', touchAction: 'none' }}>
      <Canvas camera={{ position: [0, 0, radius * 2.5], fov: 50 }}>
        <ambientLight intensity={Math.PI / 1.5} />
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
        <Suspense fallback={null}>
          <TechItemsSphere techItems={techItems} radius={radius} />
        </Suspense>
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          minDistance={radius * 1.5} 
          maxDistance={radius * 4}
          autoRotate // You can enable this instead of manual rotation in useFrame
          autoRotateSpeed={0.5} // Adjust speed if using OrbitControls autoRotate
        />
      </Canvas>
    </div>
  );
};

const radius = 3; // Define radius here to be accessible by Canvas camera and OrbitControls

export default TechSphereCanvas;