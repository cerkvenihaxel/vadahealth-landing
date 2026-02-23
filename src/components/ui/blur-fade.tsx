"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
  const isInView = !inView || inViewResult;
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setIsVisible(true);
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          y: yOffset,
          opacity: 0,
          filter: `blur(${blur})`,
        },
        visible: {
          y: 0,
          opacity: 1,
          filter: `blur(0px)`,
        },
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
