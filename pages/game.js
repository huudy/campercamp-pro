import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const ParkingGame = () => {
  const canvasRef = useRef();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color('skyblue'));

    // Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;

    // Parking Lot (Plane)
    const parkingLot = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshBasicMaterial({ color: 'lightgreen' })
    );
    parkingLot.rotation.x = -Math.PI / 2;
    scene.add(parkingLot);
    // Parking Lines
    for (let i = -4; i < 5; i++) {
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.01, 2),
        new THREE.MeshBasicMaterial({ color: 'white' })
      );
      line.position.set(i, 0.01, 0);
      scene.add(line);
    }

    // Trees
    const treeGeometry = new THREE.ConeGeometry(0.3, 0.5);
    const treeMaterial = new THREE.MeshBasicMaterial({ color: 'green' });
    const addTree = (x, z) => {
      const tree = new THREE.Mesh(treeGeometry, treeMaterial);
      tree.position.set(x, 0.25, z);
      scene.add(tree);
    };
    addTree(-2, -2);
    addTree(3, 3);
    addTree(-3, 2);

    // Street Lamps (Simple Representation)
    const lampMaterial = new THREE.MeshBasicMaterial({ color: 'yellow' });
    const addLamp = (x, z) => {
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2),
        new THREE.MeshBasicMaterial({ color: 'black' })
      );
      pole.position.set(x, 1, z);
      scene.add(pole);

      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.2), lampMaterial);
      lamp.position.set(x, 1.8, z);
      scene.add(lamp);
    };
    addLamp(-4, -3);
    addLamp(4, -3);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/graphics/camper/textures/camper_diffuse.png');
    // const texture = textureLoader.load('/graphics/camper/textures/ground_diffuse.png');
    // const texture = textureLoader.load('/camper_van/palette_diffuse.png');

    let camperModel = new THREE.Group();

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load('/graphics/camper/scene.gltf', (gltf) => {
    // loader.load('/camper_van/scene.gltf', (gltf) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          console.log(child.material);
          child.material.map = texture;
          child.material.needsUpdate = true; // Notify three.js that the material has changed
        }
      });

      const camperVan = gltf.scene;
      camperVan.scale.set(0.5, 0.5, 0.5); // Adjust scale as needed
      camperModel.add(camperVan);
    });
    scene.add(camperModel);

    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

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

    // Animation Loop
    const animate = () => {
      if (keys.ArrowUp) {
        camperModel.position.x += 0.1 * Math.sin(camperModel.rotation.y);
        camperModel.position.z += 0.1 * Math.cos(camperModel.rotation.y);
      }
      if (keys.ArrowDown) {
        camperModel.position.x -= 0.1 * Math.sin(camperModel.rotation.y);
        camperModel.position.z -= 0.1 * Math.cos(camperModel.rotation.y);
      }
      if (keys.ArrowLeft) {
        camperModel.rotation.y += 0.1;
      }
      if (keys.ArrowRight) {
        camperModel.rotation.y -= 0.1;
      }

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      controls.dispose();
      renderer.dispose();
    };
  }, [position, rotation]);

  return <canvas ref={canvasRef} />;
};

export default ParkingGame;
