import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Loader } from '../../components';
import useMobile from '../hooks/useMobile';

const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const isMobile = useMobile();

  return !isMobile ? (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  ) : (
    <div className="flex w-24 h-24 bg-[#fff8eb] rounded-full items-center justify-center">
      <img src={icon} className="w-16 h-16" />
    </div>
  );
};

export default BallCanvas;
