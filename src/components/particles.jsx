"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticlesWithClusters:React-FC = () => {
  const mountRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(64, 64, 60, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    const circleTexture = new THREE.CanvasTexture(canvas);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1100;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 500;
      velocities[i] = (Math.random() - 0.5) * 0.5;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 3,
      map: circleTexture,
      transparent: true,
      opacity: 0.8,
      alphaTest: 0.5,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xcccccc,
      opacity: 0.5,
    });
    let lineGeometry = new THREE.BufferGeometry(); // Inicializar la geometría fuera de la función

    let lineSegments; // Almacena las líneas actuales para eliminarlas después

    camera.position.z = 300;

    const detectClusters = () => {
      if (lineSegments) {
        scene.remove(lineSegments); // Eliminar las líneas anteriores
        lineGeometry.dispose(); // Limpiar la geometría anterior para evitar fugas de memoria
        lineGeometry = new THREE.BufferGeometry(); // Crear una nueva geometría para las líneas
      }

      let newLinePositions = [];
      const clusterSize = 49;
      const clusterConnectionsLimit = 15;

      for (let i = 0; i < particleCount; i++) {
        let clusterConnections = 0;
        for (
          let j = i + 1;
          j < particleCount && clusterConnections < clusterConnectionsLimit;
          j++
        ) {
          const dist = calculateDistance(i, j);
          if (dist < clusterSize) {
            newLinePositions.push(
              positions[i * 3],
              positions[i * 3 + 1],
              positions[i * 3 + 2]
            );
            newLinePositions.push(
              positions[j * 3],
              positions[j * 3 + 1],
              positions[j * 3 + 2]
            );
            clusterConnections++;
          }
        }
      }

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(newLinePositions, 3)
      );
      lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineSegments);
    };

    const calculateDistance = (i, j) => {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particleSystem.geometry.attributes.position;
      const colors = particleSystem.geometry.attributes.color;
      const time = Date.now() * 0.002;

      for (let i = 0; i < positions.count; i++) {
        let x = positions.getX(i);
        let y = positions.getY(i);
        let z = positions.getZ(i);

        x += velocities[i * 3];
        y += velocities[i * 3 + 1];
        z += velocities[i * 3 + 2];

        if (x < -250 || x > 250) velocities[i * 3] *= -1;
        if (y < -250 || y > 250) velocities[i * 3 + 1] *= -1;
        if (z < -250 || z > 250) velocities[i * 3 + 2] *= -1;

        positions.setXYZ(i, x, y, z);

        const luminance = (Math.sin(time + i) + 1) / 2;
        const color = new THREE.Color(`hsl(0, 0%, ${luminance * 100}%)`);
        colors.setXYZ(i, color.r, color.g, color.b);
      }

      positions.needsUpdate = true;
      colors.needsUpdate = true;

      detectClusters();

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener("resize", () => {});
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ParticlesWithClusters;
