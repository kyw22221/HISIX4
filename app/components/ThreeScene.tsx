"use client"; // Next.js에서 클라이언트 컴포넌트임을 명시

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      {/* 기본 조명 추가 */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* 3D 박스 추가 */}
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* 카메라 컨트롤 */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene; // ✅ 이제 확실히 추가!

