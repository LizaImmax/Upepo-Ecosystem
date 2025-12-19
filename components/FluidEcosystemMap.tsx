'use client';

import { useEffect, useRef } from 'react';

export default function FluidEcosystemMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 17 nodes representing components
    const nodes: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      radius: number;
      color: string;
      angle: number;
      speed: number;
    }> = [];

    const colors = [
      '#4A90E2', '#5B7FCC', '#6B6ECC', '#7B5DCC', '#8B4CCC',
      '#9B3BCC', '#AB2ACC', '#BB19CC', '#6BB6FF', '#5BC6FF',
      '#4BD6FF', '#3BE6FF', '#2BF6FF', '#1BFFFF', '#0BFFEF',
      '#00FFDF', '#00EFCF',
    ];

    // Create nodes in a flowing pattern
    for (let i = 0; i < 17; i++) {
      const angle = (i / 17) * Math.PI * 2;
      const radius = 150 + Math.random() * 100;
      nodes.push({
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
        targetX: canvas.width / 2 + Math.cos(angle) * radius,
        targetY: canvas.height / 2 + Math.sin(angle) * radius,
        radius: 8 + Math.random() * 8,
        color: colors[i],
        angle: angle,
        speed: 0.0005 + Math.random() * 0.001,
      });
    }

    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Update node positions in a flowing orbit
      nodes.forEach((node, i) => {
        node.angle += node.speed;
        const orbitRadius = 150 + Math.sin(frame * 0.01 + i) * 50;
        node.targetX = canvas.width / 2 + Math.cos(node.angle) * orbitRadius;
        node.targetY = canvas.height / 2 + Math.sin(node.angle) * orbitRadius;

        // Smooth movement
        node.x += (node.targetX - node.x) * 0.05;
        node.y += (node.targetY - node.y) * 0.05;
      });

      // Draw connections
      nodes.forEach((node1, i) => {
        nodes.forEach((node2, j) => {
          if (i < j) {
            const dx = node2.x - node1.x;
            const dy = node2.y - node1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              const opacity = (1 - distance / 200) * 0.3;
              ctx.beginPath();
              ctx.moveTo(node1.x, node1.y);
              ctx.lineTo(node2.x, node2.y);
              const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y);
              gradient.addColorStop(0, node1.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
              gradient.addColorStop(1, node2.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, node.color + '80');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Glow effect
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: '500px' }}
    />
  );
}
