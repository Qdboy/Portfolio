'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function BlurText({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ filter: 'blur(12px)', opacity: 0, y: 16 }}
          animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{
            duration,
            delay: delay + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
