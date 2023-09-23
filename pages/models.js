import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import { Physics, RigidBody } from '@react-three/rapier';
import { KeyboardControls, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Camper() {
  // const camperModel = useGLTF('./camper_van/scene.gltf');
  const camperModel = useGLTF('./van/untitled.gltf');

  return (
    <primitive object={camperModel.scene} scale={0.02} position={[1, 0, 1]} rotation-y={0.3} />
  );
}
function NewCamper() {
  // const camperModel = useGLTF('./camper_van/scene.gltf');
  const camperModel = useGLTF('./new-van/untitled.gltf');
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const body = useRef();

  useFrame(() => {
    const { forward, backward, leftward, rightward } = getKeys();
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };
    console.log('Body', body.current);
    body.current.applyImpulse(impulse);
    body.current.applyTorqueImpulse(torque);
  });

  return (
    // <primitive
    //   ref={body}
    //   object={camperModel.scene}
    //   scale={0.2}
    //   position={[-1.5, 0, 1.5]}
    //   rotation-y={0.3}
    // />
    <RigidBody
      ref={body}
      canSleep={false}
      colliders='ball'
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      position={[0, 1, 0]}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color='mediumpurple' />
      </mesh>
    </RigidBody>
  );
}
function Porche() {
  const porcheModel = useGLTF('./porche2/porche.gltf');

  return (
    <primitive object={porcheModel.scene} scale={0.2} position={[-2.5, 0, 2.5]} rotation-y={0.3} />
  );
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

  return <primitive object={fox.scene} scale={0.02} position={[-2.5, 1, 2.5]} rotation-y={0.3} />;
}

function Experience() {
  const body = useRef();
  // console.log('body rigid', body);
  return (
    <>
      <Perf position='top-left' />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={2} shadow-normalBias={0.04} />
      <ambientLight intensity={0.5} />
      <Physics debug>
        <RigidBody type='fixed'>
          <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color='greenyellow' />
          </mesh>
        </RigidBody>
        <RigidBody ref={body}>
          <NewCamper />
        </RigidBody>
        {/* <RigidBody colliders='hull'>
          <Camper />
        </RigidBody>

        <RigidBody>
          <Porche />
        </RigidBody> */}
      </Physics>
    </>
  );
}

export default function App() {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] }
      ]}
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6]
        }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Experience />
      </Canvas>
    </KeyboardControls>
  );
}
