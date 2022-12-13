import { Canvas, useFrame } from "@react-three/fiber";
import {
  Physics,
  usePlane,
  useBox,
  Debug,
  useSphere,
  useCylinder,
} from "@react-three/cannon";

import { GizmoHelper, OrbitControls } from "@react-three/drei";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/pulley.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[1.68, 0.47, 0.27]}
        scale={0.39}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[1.68, 0.96, 0.27]}
        scale={[0.08, 0.48, 0.08]}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[2.74, 3.53, 0.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[2.74, 3.53, 0.21]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, -0.03, 0.01]}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[2.74, 3.53, 0.34]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={nodes.Circle002.material}
        position={[2.74, 3.53, 0.23]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.07, 0.02]}
      />
      <mesh
        geometry={nodes.BezierCurve.geometry}
        material={nodes.BezierCurve.material}
        position={[2.84, 3.55, 0.27]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[2.87, 1.9, 0.28]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[2.63, 1.81, 0.28]}
        scale={0.09}
      />
    </group>
  );
}
export default function Pulley() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [3, 30, -35], fov: 69 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics tolerance={0} iterations={50} broadphase={"SAP"}>
          <Debug color="blue" scale={1}>
            <color attach="background" args={["#ffffff"]} />
            <Plane />
            <Model />
          </Debug>
        </Physics>
        <OrbitControls />
        <GizmoHelper />
      </Canvas>
    </div>
  );
}
useGLTF.preload("/models/pulley.glb");
