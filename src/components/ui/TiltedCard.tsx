'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface TiltedCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
}

export default function TiltedCard({
  children,
  className = '',
  maxTilt = 10,
  glowColor = 'rgba(201,168,76,0.35)',
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [maxTilt, -maxTilt]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-maxTilt, maxTilt]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width * 2 - 1);
    rawY.set((e.clientY - rect.top) / rect.height * 2 - 1);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ boxShadow: `0 20px 60px ${glowColor}` }}
      className={`relative cursor-pointer rounded-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
