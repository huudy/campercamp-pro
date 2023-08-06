import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const ref = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      ref.current.clientWidth / ref.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Dispose of elements when unmounting
    return () => {
      renderer.dispose();
      //   scene.dispose();
      //   camera.dispose();
    };
  }, []);

  return <div ref={ref} style={{ width: '100%', height: '100vh' }} />;
};

export default Cube;
