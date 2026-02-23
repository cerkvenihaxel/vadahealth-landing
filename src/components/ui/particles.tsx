"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0;
      setCanvasSize({
        w: canvasContainerRef.current.offsetWidth,
        h: canvasContainerRef.current.offsetHeight,
      });
      canvasRef.current.width = canvasContainerRef.current.offsetWidth;
      canvasRef.current.height = canvasContainerRef.current.offsetHeight;
    }
  };

  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.w);
    const y = Math.floor(Math.random() * canvasSize.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawCircle = (circle: Circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(27, 58, 92, ${alpha})`;
      context.current.fill();
      context.current.setTransform(1, 0, 0, 1, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.w, canvasSize.h);
    }
  };

  const drawParticles = () => {
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const animate = () => {
    clearContext();
    circles.current.forEach((circle: Circle, i: number) => {
      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX +=
        (0 - circle.translateX) / ease;
      circle.translateY +=
        (0 - circle.translateY) / ease;

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.h + circle.size
      ) {
        circles.current.splice(i, 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX,
            translateY: circle.translateY,
            alpha: circle.targetAlpha,
          },
          true,
        );
      }
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div className={cn("pointer-events-none", className)} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}
