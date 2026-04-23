'use client';
import { useEffect, useRef } from 'react';

interface ParticlesProps {
  count?: number;
  color?: string;
  className?: string;
}

export default function Particles({ count = 60, color = '#c9a84c', className = '' }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -(Math.random() * 0.4 + 0.1),
      alpha: Math.random() * 0.6 + 0.2,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.0015;

        if (p.y < -5 || p.alpha <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 5;
          p.alpha = Math.random() * 0.6 + 0.2;
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
