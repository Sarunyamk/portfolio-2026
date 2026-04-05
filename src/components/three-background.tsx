'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  function createStarTexture() {
    const size = 64;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'white';
    ctx.font = '48px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText('✦', size / 2, size / 2);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const posArray = new Float32Array(particleCount * 3);

    // for (let i = 0; i < particleCount * 3; i++) {
    //   posArray[i] = (Math.random() - 0.5) * 100;
    // }
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      posArray[i3] = (Math.random() - 0.5) * 40;
      posArray[i3 + 1] = (Math.random() - 0.5) * 40;
      posArray[i3 + 2] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    // const particlesMaterial = new THREE.PointsMaterial({
    //   size: 0.08,
    //   color: 0xffffff,
    //   transparent: true,
    //   opacity: 0.8,
    //   blending: THREE.AdditiveBlending,
    // });

    const starTexture = createStarTexture();

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      map: starTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff006e, 2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x3a86ff, 2);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    camera.position.z = 30;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let rafPending = false;

    const handleMouseMove = (event: MouseEvent) => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        rafPending = false;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
