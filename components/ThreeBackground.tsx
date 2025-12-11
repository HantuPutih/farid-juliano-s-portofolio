import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Cleanup previous renderer if any
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Scene setup
    const scene = new THREE.Scene();
    
    // Light mode fog: #f8fafc (slate-50)
    const fogColor = 0xf8fafc;
    scene.fog = new THREE.Fog(fogColor, 5, 20);

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Group to hold all floating shapes
    const group = new THREE.Group();
    scene.add(group);

    // Create a variety of geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.BoxGeometry(1, 1, 1)
    ];

    const shapes: { 
      mesh: THREE.Mesh; 
      rotationSpeed: { x: number; y: number; z: number }; 
      floatOffset: number;
      floatSpeed: number;
      basePos: { x: number; y: number; z: number };
    }[] = [];
    
    const shapeCount = 12; // Fewer shapes, larger size for a cleaner look

    // Color: Slate/Blue mix for light mode
    const mainColor = 0x64748b; 

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      
      const material = new THREE.MeshBasicMaterial({
        color: mainColor,
        wireframe: true,
        transparent: true,
        opacity: Math.random() * 0.15 + 0.05, // Subtle opacity
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Distribute randomly in a 3D cloud
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10 - 2; // Slightly pushed back

      mesh.position.set(x, y, z);
      
      // Random scale
      const s = Math.random() * 0.8 + 0.5;
      mesh.scale.set(s, s, s);
      
      // Random initial rotation
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

      group.add(mesh);

      shapes.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.001 + 0.0005,
        basePos: { x, y, z }
      });
    }
    
    camera.position.z = 8;

    // Mouse interaction state
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize to -1 to 1
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate entire group based on mouse position (parallax effect)
      group.rotation.y = mouseX * 0.1;
      group.rotation.x = mouseY * 0.1;

      // Animate individual shapes
      const time = Date.now();
      shapes.forEach(shape => {
        // Continuous rotation
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;

        // Floating movement (Sine wave)
        shape.mesh.position.y = shape.basePos.y + Math.sin(time * shape.floatSpeed + shape.floatOffset) * 0.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      
      // Cleanup
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach(g => g.dispose());
      group.children.forEach((child: any) => {
          if(child.material) child.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default ThreeBackground;