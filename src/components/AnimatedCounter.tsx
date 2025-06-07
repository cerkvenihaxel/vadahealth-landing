'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  className = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function para suavizar la animación
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className={`font-bold ${className}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

interface ProgressBarProps {
  percentage: number;
  label?: string;
  color?: string;
  height?: string;
  className?: string;
  animated?: boolean;
}

export function ProgressBar({ 
  percentage, 
  label, 
  color = 'bg-blue-900', 
  height = 'h-2',
  className = '',
  animated = true 
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || !animated) {
      setProgress(percentage);
      return;
    }

    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 200);

    return () => clearTimeout(timer);
  }, [isVisible, percentage, animated]);

  return (
    <div ref={progressRef} className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex justify-between text-sm font-medium">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div className={`bg-gray-200 rounded-full ${height} overflow-hidden`}>
        <div
          className={`${color} ${height} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

// Componente de estadísticas con contadores
export function StatsSection() {
  const stats = [
    { number: 150, suffix: '+', label: 'Organizaciones de Salud', icon: '🏥' },
    { number: 98, suffix: '%', label: 'Satisfacción del Cliente', icon: '⭐' },
    { number: 15, suffix: '+', label: 'Años de Experiencia', icon: '📅' },
    { number: 24, suffix: '/7', label: 'Soporte Técnico', icon: '🚀' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate" data-animate="slide-up">
          <h2 className="text-3xl font-bold mb-4">Nuestros Números Hablan</h2>
          <p className="text-xl opacity-90">Resultados que respaldan nuestra experiencia</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center stat-card scroll-animate card-hover p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
              data-animate="scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4 animate-bounce">{stat.icon}</div>
              <AnimatedCounter
                end={stat.number}
                suffix={stat.suffix}
                className="text-4xl md:text-5xl font-bold mb-2 text-white"
              />
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 