import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Loader } from '../../components';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        angle={0.12}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        rotation={[-0.01, -0.2, -0.1]}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.25]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add event listener for changes to screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // set initial value of isMobile state variable
    setIsMobile(mediaQuery.matches);

    // callback fn to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // add callback function as listener for changes to media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
