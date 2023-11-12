"use client";
import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";
import Stars from "./components/3D/Stars";
import Modal from "./components/3d/Modal";
import Overlay from "./components/2D/Overlay/Overlay";
import Loader from "./components/2D/Loader/Loader";
import { Suspense } from "react";

export default function Home() {
  var x = window.matchMedia("(max-width: 700px)");

  return (
    <div className={styles.main_container}>
      <Suspense fallback={<Loader />}>
        <Overlay />
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
          <Modal
            position={x.matches === false ? [0.8, 0, 0] : [0.04, -0.09, 0]}
            rotation={
              x.matches === false
                ? [0, Math.PI * -0.2, 0]
                : [0, Math.PI * -0.08, 0]
            }
            scale={x.matches === false ? 0.0095 : 0.0075}
          />

          <pointLight position={[100, 100, 100]} intensity={0.8} />
          <hemisphereLight
            color="#234fad"
            groundColor="#fff"
            position={[-7, 25, 13]}
            intensity={0.85}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
