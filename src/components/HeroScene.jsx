"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function WireframeMesh() {
  const meshRef = useRef();
  const pointsRef = useRef();

  // Create an elegant toroidal knot — engineering aesthetic
  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(2.2, 0.6, 200, 32, 2, 3);
    return geo;
  }, []);

  // Floating particles around the structure
  const particles = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 2.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.05;
      meshRef.current.rotation.y = t * 0.08;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02;
      pointsRef.current.rotation.z = t * 0.015;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh ref={meshRef} geometry={geometry}>
          <meshBasicMaterial
            wireframe
            color="#00d4aa"
            transparent
            opacity={0.12}
          />
        </mesh>
        {/* Solid inner core — subtle */}
        <mesh geometry={geometry}>
          <meshStandardMaterial
            color="#00d4aa"
            transparent
            opacity={0.03}
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>
      </Float>

      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#00d4aa"
          transparent
          opacity={0.35}
          sizeAttenuation
        />
      </points>
    </>
  );
}

function FlowLines() {
  const linesRef = useRef();

  const lines = useMemo(() => {
    const count = 30;
    const allPositions = [];
    for (let i = 0; i < count; i++) {
      const points = [];
      const startX = -6 + Math.random() * 4;
      const startY = (Math.random() - 0.5) * 6;
      const startZ = (Math.random() - 0.5) * 4;
      for (let j = 0; j < 40; j++) {
        const t = j / 39;
        points.push(
          new THREE.Vector3(
            startX + t * 12,
            startY + Math.sin(t * Math.PI * 2 + i) * 0.5,
            startZ + Math.cos(t * Math.PI * 1.5 + i * 0.5) * 0.3
          )
        );
      }
      allPositions.push(points);
    }
    return allPositions;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((pts, i) => {
        const curve = new THREE.CatmullRomCurve3(pts);
        const geoPoints = curve.getPoints(60);
        const geometry = new THREE.BufferGeometry().setFromPoints(geoPoints);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#00d4aa"
              transparent
              opacity={0.06 + Math.random() * 0.04}
            />
          </line>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <WireframeMesh />
      <FlowLines />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
