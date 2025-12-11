import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  isDarkMode: boolean;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ isDarkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      // Spread particles in a wide area
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Determine color based on theme
    const particleColor = isDarkMode ? 0x3b82f6 : 0x334155; // Blue in dark mode, Slate in light
    
    const material = new THREE.PointsMaterial({
      size: 0.03,
      color: particleColor,
      transparent: true,
      opacity: isDarkMode ? 0.8 : 0.4,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    
    camera.position.z = 3;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate entire system slowly
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      // React to mouse
      particlesMesh.rotation.y += 0.05 * (mouseX - particlesMesh.rotation.y) * 0.05;
      particlesMesh.rotation.x += 0.05 * (mouseY - particlesMesh.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      container.removeChild(renderer.domElement);
      // Cleanup Three.js resources
      particlesGeometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]); // Re-run if theme changes to update colors

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 pointer-events-none opacity-60"
      aria-hidden="true"
    />
  );
};

export default ThreeBackground;