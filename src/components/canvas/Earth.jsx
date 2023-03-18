import React, { Suspense } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Loader } from '../../components';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive object={earth.scene} position-y={0} rotation-y={0} scale={2.5} />
  );
};

const EarthCanvas = () => (
  <Canvas
    shadows
    gl={{ preserveDrawingBuffer: true }}
    frameloop="demand"
    camera={{ fov: 45, far: 200, near: 0.1, position: [-4, 3, 6] }}
  >
    <Suspense fallback={<Loader />}>
      <OrbitControls
        enableZoom={false}
        autoRotate
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
    </Suspense>
  </Canvas>
);

export default EarthCanvas;
