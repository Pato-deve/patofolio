"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticlesWithClusters = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(64, 64, 60, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    } else {
      console.error("No se pudo obtener el contexto 2D del canvas.");
    }
    const circleTexture = new THREE.CanvasTexture(canvas);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1100;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 500;
      velocities[i] = (Math.random() - 0.5) * 0.5;
      colors[i] = 1.0;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    // Material de partículas
    const particleMaterial = new THREE.PointsMaterial({
      size: 3,
      map: circleTexture,
      transparent: true,
      opacity: 0.8,
      alphaTest: 0.5,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    // Sistema de partículas
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Material para líneas
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xcccccc,
      opacity: 0.5,
      transparent: true, // Necesario para que la opacidad funcione
    });

    let lineGeometry = new THREE.BufferGeometry();
    let lineSegments;

    // Función para calcular la distancia entre dos partículas
    const calculateDistance = (i, j, pos) => {
      const dx = pos[i * 3] - pos[j * 3];
      const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
      const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };

    // Función para detectar y dibujar clusters
    const detectClusters = () => {
      if (lineSegments) {
        scene.remove(lineSegments);
        lineGeometry.dispose();
        lineGeometry = new THREE.BufferGeometry();
      }

      let newLinePositions = [];
      const clusterSize = 49;
      const clusterConnectionsLimit = 15;

      const positionAttribute =
        particleSystem.geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        let clusterConnections = 0;
        for (
          let j = i + 1;
          j < particleCount && clusterConnections < clusterConnectionsLimit;
          j++
        ) {
          const dist = calculateDistance(i, j, positionAttribute);
          if (dist < clusterSize) {
            newLinePositions.push(
              positionAttribute[i * 3],
              positionAttribute[i * 3 + 1],
              positionAttribute[i * 3 + 2],
              positionAttribute[j * 3],
              positionAttribute[j * 3 + 1],
              positionAttribute[j * 3 + 2]
            );
            clusterConnections++;
          }
        }
      }

      if (newLinePositions.length > 0) {
        lineGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(newLinePositions, 3)
        );
        lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lineSegments);
      }
    };

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      const positionAttribute = particleSystem.geometry.attributes.position;
      const colorAttribute = particleSystem.geometry.attributes.color;
      const time = Date.now() * 0.002;

      for (let i = 0; i < positionAttribute.count; i++) {
        let x = positionAttribute.getX(i);
        let y = positionAttribute.getY(i);
        let z = positionAttribute.getZ(i);

        x += velocities[i * 3];
        y += velocities[i * 3 + 1];
        z += velocities[i * 3 + 2];

        if (x < -250 || x > 250) velocities[i * 3] *= -1;
        if (y < -250 || y > 250) velocities[i * 3 + 1] *= -1;
        if (z < -250 || z > 250) velocities[i * 3 + 2] *= -1;

        positionAttribute.setXYZ(i, x, y, z);

        // Actualizar los valores en el array original para detectClusters
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const luminance = (Math.sin(time + i) + 1) / 2;
        const color = new THREE.Color(`hsl(0, 0%, ${luminance * 100}%)`);
        colorAttribute.setXYZ(i, color.r, color.g, color.b);
      }

      positionAttribute.needsUpdate = true;
      colorAttribute.needsUpdate = true;

      detectClusters();

      renderer.render(scene, camera);
    };

    animate();

    // Manejar el redimensionamiento de la ventana
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // limpiar lineas viejas
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (lineSegments) {
        lineSegments.geometry.dispose();
        lineSegments.material.dispose();
      }
      lineGeometry.dispose();
      circleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        inset: "0",
        zIndex: "0",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    />
  );
};

export default ParticlesWithClusters;
