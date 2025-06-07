'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickableElements = ['button', 'a', 'input', 'textarea', 'select'];
      const isClickableElement = clickableElements.includes(target.tagName.toLowerCase()) ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('card-hover') ||
        target.classList.contains('btn-primary') ||
        target.classList.contains('btn-secondary');
      
      setIsClickable(isClickableElement);
      setIsHovering(isClickableElement);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setIsClickable(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor">
      {/* Cursor principal */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white transition-all duration-200 ${
            isClickable ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>

      {/* Cursor secundario para hover */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-blue-900 transition-all duration-300 ${
            isHovering 
              ? 'scale-150 opacity-100 border-teal-800' 
              : 'scale-100 opacity-30'
          }`}
        />
      </div>
    </div>
  );
} 