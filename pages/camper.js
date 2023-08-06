import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui';

const CamperScene = () => {
  useEffect(() => {
    // Canvas
    const canvas = document.querySelector('canvas.webgl');

    // Scene
    const scene = new THREE.Scene();

    // Material
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color('red')
    });

    // Objects
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), material);
    sphere.position.x = -1.5;

    scene.add(sphere);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Debug GUI
    // const gui = new dat.GUI();
    // const parameters = {
    //   color: material.color.getHex()
    // };
    // gui.addColor(parameters, 'color').onChange((color) => {
    //   material.color.setHex(color);
    // });

    // Key States
    const keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };
    const handleKeyDown = (event) => {
      if (keys[event.key] !== undefined) {
        keys[event.key] = true;
      }
    };
    const handleKeyUp = (event) => {
      if (keys[event.key] !== undefined) {
        keys[event.key] = false;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Animate
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Key States Handling
      if (keys.ArrowUp) {
        sphere.position.z -= 0.1; // Example movement
      }
      if (keys.ArrowDown) {
        sphere.position.z += 0.1;
      }
      if (keys.ArrowLeft) {
        sphere.position.x -= 0.1;
      }
      if (keys.ArrowRight) {
        sphere.position.x += 0.1;
      }

      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    //   gui.destroy(); // Don't forget to clean up dat.GUI
    };
  }, []);

  return <canvas className='webgl'></canvas>;
};

export default CamperScene;
