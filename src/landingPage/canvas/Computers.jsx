import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = ({isMobile,isMobileMD,isMobileLG}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={10} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : isMobileMD? 0.5 : isMobileLG ? 0.5 : 0.6}
        position={isMobile ? [0, -2.5, -0.6] : isMobileMD ?[0, -4.2, -0.6]: isMobileLG ? [0, -3.9, -0.6] :[0, -3.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMD, setIsMobileMD] = useState(false);
  const [isMobileLG, setIsMobileLG] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const mediaQueryMD = window.matchMedia("(min-width: 501px) and (max-width: 768px)");
    const mediaQueryLG = window.matchMedia("(min-width: 769px) and (max-width: 1167px)");

    setIsMobile(mediaQuery.matches);
    setIsMobileMD(mediaQueryMD.matches);
    setIsMobileLG(mediaQueryLG.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      setIsMobileMD(event.matches)
      setIsMobileLG(event.matches)
      // console.log(isMobileLG);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    mediaQueryMD.addEventListener("change", handleMediaQueryChange);
    mediaQueryLG.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      mediaQueryMD.removeEventListener("change", handleMediaQueryChange);
      mediaQueryLG.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isMobileMD={isMobileMD} isMobileLG={isMobileLG}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
