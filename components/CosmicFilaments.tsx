// components/CosmicFilaments.tsx
"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import styles from './CosmicFilaments.module.css';

const PARTICLES = 8000;
const TRANSITION_SPEED = 0.015;
const AUTO_MORPH_INTERVAL = 7000; // 5 seconds

// --- Helper function: Normalize points (outside component for stability) ---
function normalize(pts: THREE.Vector3[], scale: number): THREE.Vector3[] {
  if (!pts.length) return pts;
  const box = new THREE.Box3().setFromPoints(pts);
  const ctr = box.getCenter(new THREE.Vector3());
  const s = scale / Math.max(box.getSize(new THREE.Vector3()).length(), 1e-6);
  pts.forEach(p => p.sub(ctr).multiplyScalar(s));
  return pts;
}

// --- Pattern generation functions (outside component for stability) ---
function branching(count: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [], branches = 70, per = Math.floor(count / branches);
  function make(o: THREE.Vector3, d: THREE.Vector3, depth: number) {
    let p = o.clone(), v = d.clone().normalize();
    const seg = 45 / per / (depth + 1);
    for (let i = 0; i < per; i++) {
      v.add(new THREE.Vector3().randomDirection().multiplyScalar(.28)).normalize();
      p.add(v.clone().multiplyScalar(seg * (1 + Math.random() * .4)));
      pts.push(p.clone());
      if (depth < 3 && Math.random() < .78 / (depth + 1))
        make(p, v.clone().applyAxisAngle(new THREE.Vector3().randomDirection(), Math.PI / 2 + .3 * (Math.random() - .5)), depth + 1);
      if (pts.length >= count) return;
    }
  }
  for (let i = 0; i < branches && pts.length < count; i++) {
    make(new THREE.Vector3().random().subScalar(.5).multiplyScalar(6),
      new THREE.Vector3().random().subScalar(.5), 0);
  }
  while (pts.length < count)
    pts.push(pts[Math.floor(Math.random() * pts.length)].clone().add(new THREE.Vector3().randomDirection().multiplyScalar(2)));
  return normalize(pts, 70);
}

function web(count: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [], nodes = 120, radius = 18, per = Math.max(2, Math.floor(count / (nodes * 3)));
  const v = [...Array(nodes)].map(() => new THREE.Vector3().random().subScalar(.5).multiplyScalar(85));
  pts.push(...v);
  for (let i = 0; i < nodes; i++) for (let j = i + 1; j < nodes && pts.length < count; j++) {
    const d = v[i].distanceTo(v[j]);
    if (d < radius && Math.random() < .35) {
      const links = Math.floor(per * (1 - d / radius));
      for (let k = 1; k < links; k++) {
        const t = k / links;
        pts.push(new THREE.Vector3().lerpVectors(v[i], v[j], t)
          .add(new THREE.Vector3().randomDirection().multiplyScalar(1.5)));
        if (pts.length >= count) break;
      }
    }
  }
  while (pts.length < count)
    pts.push(pts[Math.floor(Math.random() * pts.length)].clone().add(new THREE.Vector3().randomDirection().multiplyScalar(3)));
  return normalize(pts, 65);
}

function swirl(count: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [], arms = 7, per = Math.floor(count/arms), L = 85, sp = .9, th = 5;
  for(let a=0; a<arms; a++){
      const ang0 = a/arms * Math.PI * 2;
      for(let i=0; i<per; i++){
          const d = i/per * L, ang = ang0 + d*sp/18;
          const x = d * Math.cos(ang), y = d * Math.sin(ang), z = Math.sin(d*.1 + ang0) * th * .5;
          const r = Math.random() * th, ao = Math.random() * Math.PI * 2;
          const ox = r * Math.cos(ao), oy = r * Math.sin(ao);
          const rx = ox * Math.cos(ang) - oy * Math.sin(ang), ry = ox * Math.sin(ang) + oy * Math.cos(ang);
          pts.push(new THREE.Vector3(x+rx, y+ry, z + (Math.random()-.5)*th));
      }
  }
  while(pts.length < count) pts.push(new THREE.Vector3().random().subScalar(.5).multiplyScalar(10));
  return normalize(pts, 75);
}

function helix(count: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [], strands = 4, per = Math.floor(count/strands), height = 70, radius = 30, pitch = 13;
  for(let s=0; s<strands; s++){
      const phase = s/strands * Math.PI*2;
      for(let i=0; i<per; i++){
          const t = i/per;
          const y = t*height - height/2;
          const ang = phase + t*height/pitch;
          const r = radius * (.6 + .4 * Math.sin(t * Math.PI));
          const x = r * Math.cos(ang), z = r * Math.sin(ang);
          pts.push(new THREE.Vector3(x,y,z));
      }
  }
  return normalize(pts, 70);
}

function torusKnotCloud(count: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const p=2, q=3;
  const R=45, r=15;
  const turns=6*q;
  const steps=count;
  for(let i=0; i<steps; i++){
      const t = i/steps * turns * Math.PI;
      const cosQ = Math.cos(q*t/p), sinQ = Math.sin(q*t/p);
      const x = (R + r*cosQ) * Math.cos(t);
      const y = (R + r*cosQ) * Math.sin(t);
      const z = r*sinQ;
      const jitter = new THREE.Vector3().randomDirection().multiplyScalar(1.4 * Math.random());
      pts.push(new THREE.Vector3(x,y,z).add(jitter));
  }
  return normalize(pts, 75);
}

const patterns = [branching, web, swirl, helix, torusKnotCloud];


const CosmicFilaments: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const pointsMeshRef = useRef<THREE.Points | null>(null);
  const starfieldRef = useRef<THREE.Points | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const animationFrameIdRef = useRef<number | null>(null);

  const patternIndexRef = useRef(0);
  const transitioningRef = useRef(false);
  const progressRef = useRef(0);

  // --- Make Filaments (memoized with useCallback as it's used in useEffect) ---
  const makeFilaments = useCallback(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(PARTICLES * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(PARTICLES * 3), 3));
    geo.setAttribute('size', new THREE.BufferAttribute(new Float32Array(PARTICLES), 1));
    geo.setAttribute('seed', new THREE.BufferAttribute(new Float32Array(PARTICLES), 1));
    geo.setAttribute('prevPosition', new THREE.BufferAttribute(new Float32Array(PARTICLES*3),3));
    geo.setAttribute('trailFactor', new THREE.BufferAttribute(new Float32Array(PARTICLES),1));

    const palette = ['#8050ff', '#ff46ff', '#00e3ff', '#4fa8ff', '#ffffff'].map(c => new THREE.Color(c));
    for (let i = 0; i < PARTICLES; i++) {
        const c = palette[Math.floor(Math.random() * palette.length)].clone()
            .offsetHSL((Math.random() - .5) * .05, (Math.random() - .5) * .12, (Math.random() - .5) * .08);
        geo.attributes.color.setXYZ(i, c.r, c.g, c.b);
        geo.attributes.size.setX(i, .45 + Math.random() * 1.15);
        geo.attributes.seed.setX(i, Math.random() * Math.PI * 2);
        geo.attributes.trailFactor.setX(i, 0.5 + Math.random() * 0.7);
    }

    const mat = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 }, deltaTime: { value: 0 } },
        vertexShader: `
            uniform float time; uniform float deltaTime; attribute float size; attribute float seed;
            attribute vec3 prevPosition; attribute float trailFactor; varying vec3 vColor; varying float vTrailLength;
            void main(){
                vColor = color; vec3 p = position; float a = time * 0.3 + seed; float w = 0.14 + sin(seed * 4.0) * 0.06;
                p.x += sin(a + p.y * 0.25) * w; p.y += cos(a + p.z * 0.25) * w; p.z += sin(a + p.x * 0.25) * w;
                vec3 velocity = (p - prevPosition) / max(deltaTime, 0.0001); float speed = length(velocity);
                vTrailLength = min(speed * 2.5 * trailFactor, 2.0);
                vec4 mv = modelViewMatrix * vec4(p, 1.0); float pulse = 1.0 + 0.08 * sin(time * 4.0 + seed * 6.0);
                gl_PointSize = size * pulse * 220.0 / -mv.z; gl_Position = projectionMatrix * mv;
            }`,
        fragmentShader: `
            varying vec3 vColor; varying float vTrailLength;
            void main(){
                vec2 uv = gl_PointCoord - 0.5;
                uv.x = uv.x / (1.0 + vTrailLength) + 0.5 * vTrailLength / (1.0 + vTrailLength);
                float d = length(uv); if(d > 0.5) discard;
                float trailGradient = 1.0; if(vTrailLength > 0.1) {
                    float normalizedX = (uv.x + 0.5) * (1.0 + vTrailLength);
                    trailGradient = smoothstep(0.0, 1.0, normalizedX);
                }
                float alpha = (1.0 - smoothstep(0.35, 0.5, d)) * trailGradient;
                gl_FragColor = vec4(vColor, alpha);
            }`,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, vertexColors: true
    });
    return new THREE.Points(geo, mat);
  }, []);

  // --- Make Starfield (memoized with useCallback) ---
  const makeStarfield = useCallback(() => {
    const N = 2200;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    geo.setAttribute('size', new THREE.BufferAttribute(new Float32Array(N), 1));

    for (let i = 0; i < N; i++) {
        const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
        const r = 230 + Math.random() * 70;
        geo.attributes.position.setXYZ(i, r*Math.sin(ph)*Math.cos(th), r*Math.sin(ph)*Math.sin(th), r*Math.cos(ph));
        const c = Math.random() < .82 ? new THREE.Color('#ffffff') : new THREE.Color('#b9d4ff');
        geo.attributes.color.setXYZ(i, c.r, c.g, c.b);
        geo.attributes.size.setX(i, .12 + Math.random() * .25);
    }
    const mat = new THREE.ShaderMaterial({
        vertexShader: `attribute float size; varying vec3 vColor; void main(){ vColor=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*320./-mv.z; gl_Position=projectionMatrix*mv; }`,
        fragmentShader: `varying vec3 vColor; void main(){ vec2 uv=gl_PointCoord-.5; float d=length(uv); if(d>.5) discard; float a=1.-smoothstep(.42,.5,d); gl_FragColor=vec4(vColor,a); }`,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, vertexColors: true
    });
    return new THREE.Points(geo, mat);
  }, []);

  // --- Apply Pattern (memoized with useCallback) ---
  const applyPattern = useCallback((idx: number) => {
    if (!pointsMeshRef.current) return;
    const pts = patterns[idx](PARTICLES);
    const pos = (pointsMeshRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    const prevPos = (pointsMeshRef.current.geometry.attributes.prevPosition as THREE.BufferAttribute).array as Float32Array;
    
    for (let i = 0; i < PARTICLES; i++) {
        const p = pts[i] || new THREE.Vector3(); 
        const arrIdx = i * 3;
        pos.set([p.x, p.y, p.z], arrIdx);
        prevPos.set([p.x, p.y, p.z], arrIdx);
    }
    pointsMeshRef.current.geometry.attributes.position.needsUpdate = true;
    pointsMeshRef.current.geometry.attributes.prevPosition.needsUpdate = true;
  }, []); // patterns is stable (defined outside)

  // --- Queue Next Pattern (memoized with useCallback) ---
  const queueNext = useCallback(() => {
    if (transitioningRef.current || !pointsMeshRef.current) return;
    patternIndexRef.current = (patternIndexRef.current + 1) % patterns.length;
    transitioningRef.current = true;
    progressRef.current = 0;
    
    const toPoints = patterns[patternIndexRef.current](PARTICLES);
    const currentPositions = (pointsMeshRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    
    pointsMeshRef.current.userData.from = new Float32Array(currentPositions);
    pointsMeshRef.current.userData.to = new Float32Array(PARTICLES * 3);
    
    for (let i = 0; i < PARTICLES; i++) {
        const p = toPoints[i] || new THREE.Vector3();
        pointsMeshRef.current.userData.to.set([p.x, p.y, p.z], i * 3);
    }
  }, []); // patterns is stable


  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    sceneRef.current = new THREE.Scene();
    sceneRef.current.fog = new THREE.FogExp2(0x010203, 0.009);

    cameraRef.current = new THREE.PerspectiveCamera(64, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    cameraRef.current.position.set(50, 14, 0);
    cameraRef.current.lookAt(0, 0, 0);

    rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(rendererRef.current.domElement);
    
    pointsMeshRef.current = makeFilaments();
    sceneRef.current.add(pointsMeshRef.current);

    starfieldRef.current = makeStarfield();
    sceneRef.current.add(starfieldRef.current);

    applyPattern(0);

    composerRef.current = new EffectComposer(rendererRef.current);
    composerRef.current.addPass(new RenderPass(sceneRef.current, cameraRef.current));
    composerRef.current.addPass(new UnrealBloomPass(new THREE.Vector2(currentMount.clientWidth, currentMount.clientHeight), +      0.46, 0.65, 0.9));  
  
    composerRef.current.addPass(new OutputPass());
    
    const onPointerDown = () => {
      if (!transitioningRef.current) {
        queueNext();
      }
    };
    currentMount.addEventListener('pointerdown', onPointerDown);

    const onResize = () => {
      if (cameraRef.current && rendererRef.current && composerRef.current && mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        cameraRef.current.aspect = clientWidth / clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(clientWidth, clientHeight);
        composerRef.current.setSize(clientWidth, clientHeight);
      }
    };
    window.addEventListener('resize', onResize);
    
    const morphIntervalId = setInterval(() => {
        // Check transitioningRef directly to avoid issues with stale closures in interval
        if (!transitioningRef.current) { 
          queueNext();
        }
    }, AUTO_MORPH_INTERVAL);

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      const dt = clockRef.current.getDelta();
      const t = clockRef.current.elapsedTime;

      if (transitioningRef.current && pointsMeshRef.current && pointsMeshRef.current.userData.from && pointsMeshRef.current.userData.to) {
          progressRef.current = Math.min(1, progressRef.current + TRANSITION_SPEED * dt * 60); 
          const e = 1 - Math.pow(1 - progressRef.current, 2); 
          
          const fromArr = pointsMeshRef.current.userData.from as Float32Array;
          const toArr = pointsMeshRef.current.userData.to as Float32Array;
          const posArr = (pointsMeshRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;

          for (let i = 0; i < posArr.length; i++) {
              posArr[i] = fromArr[i] + (toArr[i] - fromArr[i]) * e;
          }
          pointsMeshRef.current.geometry.attributes.position.needsUpdate = true;
          
          if (progressRef.current >= 1) {
              transitioningRef.current = false;
              delete pointsMeshRef.current.userData.from;
              delete pointsMeshRef.current.userData.to;
          }
      }
      
      if (pointsMeshRef.current) {
        const pos = (pointsMeshRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
        const prevPos = (pointsMeshRef.current.geometry.attributes.prevPosition as THREE.BufferAttribute).array as Float32Array;
        if (pos.length === prevPos.length) {
            prevPos.set(pos); 
        }
        pointsMeshRef.current.geometry.attributes.prevPosition.needsUpdate = true;
      }

      if (pointsMeshRef.current && pointsMeshRef.current.material instanceof THREE.ShaderMaterial) {
        pointsMeshRef.current.material.uniforms.time.value = t;
        pointsMeshRef.current.material.uniforms.deltaTime.value = dt;
      }

      if (cameraRef.current) {
        const r = 50;
        const ang = t * 0.048;
        cameraRef.current.position.set(Math.cos(ang) * r, Math.sin(ang * 0.7) * 16 + 10, Math.sin(ang) * r);
        cameraRef.current.lookAt(0, 0, 0);
      }

      if (composerRef.current) {
        composerRef.current.render(dt);
      }
    };
    animate();

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', onResize);
      currentMount.removeEventListener('pointerdown', onPointerDown);
      clearInterval(morphIntervalId);
      
      pointsMeshRef.current?.geometry.dispose();
      if (pointsMeshRef.current?.material instanceof THREE.Material) {
          pointsMeshRef.current.material.dispose();
      }
      starfieldRef.current?.geometry.dispose();
      if (starfieldRef.current?.material instanceof THREE.Material) {
          starfieldRef.current.material.dispose();
      }
      composerRef.current?.passes.forEach(pass => {
          if ((pass as any).dispose) (pass as any).dispose();
      });
      rendererRef.current?.dispose();
      if (rendererRef.current?.domElement.parentElement === currentMount) {
           currentMount.removeChild(rendererRef.current.domElement);
      }
      // Nullify refs might not be strictly necessary if component is fully unmounted
      // but can help with GC in some scenarios.
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      composerRef.current = null;
      pointsMeshRef.current = null;
      starfieldRef.current = null;
    };
  // Add stable functions to dependency array to satisfy ESLint exhaustive-deps
  // and ensure they are correctly referenced if they were to change (though they are stable here).
  }, [makeFilaments, makeStarfield, applyPattern, queueNext]);

  return (
    <>
      <div
        ref={mountRef}
        className={`${styles.container} ${styles.fadeCircle}`}
      >
        <div className={styles.instructions}>
          Tap / click to morph
        </div>
      </div>
    </>
  );
};

export default CosmicFilaments;