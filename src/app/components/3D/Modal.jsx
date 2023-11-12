import React from "react";
import { useState, useRef } from "react";
import { useGLTF, useAnimations, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";
import { useEffect } from "react";
import { Environment } from "@react-three/drei";

function Modal({ position, rotation, scale }) {
  const glb = useRef();
  const [dummy] = useState(() => new THREE.Object3D());

  // getting scene and animation using usegltf hook
  const { scene, animations } = useGLTF("./Wizard.glb");
  const animation = useAnimations(animations, scene);

  // useframe for glb looking at cursor you can change the value according to you preference
  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x * 1.5, state.pointer.y * 0.3, 1);
    easing.dampQ(glb.current.quaternion, dummy.quaternion, 0.25, dt);
  });

  useEffect(() => {
    // playing animation action and clamp when animation ends
    const action = animation.actions.Animation;
    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;
    action.play();
  }, []);

  return (
    <>
      <group ref={glb} position={position}>
        <primitive object={scene} scale={scale} rotation={rotation} />
      </group>

      <ambientLight intensity={1} color={"#fff"} />
      <directionalLight intensity={0.4} position={[2, 2, 5]} />
      <directionalLight intensity={0.4} position={[-2, -2, 5]} />

      <Environment files={"/potsdamer_platz_4k.hdr"} />
    </>
  );
}

export default Modal;
