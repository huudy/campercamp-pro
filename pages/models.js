import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF,useAnimations } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import { useEffect } from 'react';

function Camper(){
    // const camperModel = useGLTF('./camper_van/scene.gltf');
    const camperModel = useGLTF('./van/untitled.gltf');

  return <primitive object={camperModel.scene} scale={0.02} position={[-2.5, 0, 2.5]} rotation-y={0.3} />;

}
function NewCamper(){
    // const camperModel = useGLTF('./camper_van/scene.gltf');
    const camperModel = useGLTF('./new-van/untitled.gltf');

  return <primitive object={camperModel.scene} scale={0.2} position={[-1.5, 0, 1.5]} rotation-y={0.3} />;

}
function Porche(){
    const porcheModel = useGLTF('./porche2/porche.gltf');

  return <primitive object={porcheModel.scene} scale={0.2} position={[-2.5, 0, 2.5]} rotation-y={0.3} />;

}

function Fox() {
  const fox = useGLTF('./Fox/glTF/Fox.gltf');
  const animations = useAnimations(fox.animations, fox.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names }
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName]);

  return <primitive object={fox.scene} scale={0.02} position={[-2.5, 0, 2.5]} rotation-y={0.3} />;
}


function Experience() {
  return (
    <>
      <Perf position='top-left' />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={20} shadow-normalBias={0.04} />
      <ambientLight intensity={0.5} />

      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
      {/* <NewCamper /> */}
      {/* <Camper /> */}

        <Porche />
    </>
  );
}

export default function App() {
  return (
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
        style={{ width: '100vw', height: '100vh' }}
    >
        <Experience />
    </Canvas>
  );
}
