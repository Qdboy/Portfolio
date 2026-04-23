'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface GradientTextProps {
  text: string;
  className?: string;
  from?: string;
  to?: string;
  delay?: number;
}

export default function GradientText({
  text,
  className = '',
  from = '#c9a84c',
  to = '#e8c96a',
  delay = 0.4,
}: GradientTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to}, ${from})`, backgroundSize: '200%' }}
      initial={{ backgroundPosition: '100% 0', opacity: 0 }}
      animate={inView ? { backgroundPosition: '0% 0', opacity: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: 'easeOut' }}
    >
      {text}
    </motion.span>
  );
}
