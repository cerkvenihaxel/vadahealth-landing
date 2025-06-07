'use client';

import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon?: string;
}

interface SmoothScrollNavProps {
  items: NavItem[];
  className?: string;
  showProgress?: boolean;
}

export default function SmoothScrollNav({ 
  items, 
  className = '',
  showProgress = true 
}: SmoothScrollNavProps) {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calcular progreso de scroll
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Detectar sección activa
      const sections = items.map(item => document.getElementById(item.id)).filter(Boolean);
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Compensar altura del navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-40 hidden lg:block ${className}`}>
      {/* Barra de progreso */}
      {showProgress && (
        <div className="absolute -left-8 top-0 w-1 h-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-blue-900 to-teal-800 rounded-full transition-all duration-300"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Navegación */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/20">
        <div className="space-y-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center ${
                activeSection === item.id
                  ? 'bg-blue-900 text-white shadow-lg scale-110'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-900 hover:scale-105'
              }`}
              title={item.label}
            >
              {item.icon ? (
                <span className="text-xl">{item.icon}</span>
              ) : (
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'bg-white' : 'bg-current'
                }`} />
              )}

              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Hook para scroll suave a elemento
export function useSmoothScroll() {
  const scrollToElement = (elementId: string, offset = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return { scrollToElement, scrollToTop };
}

// Botón de "Volver arriba"
export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-14 h-14 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-xl z-40 card-hover group"
      aria-label="Volver arriba"
    >
      <svg 
        className="w-6 h-6 mx-auto group-hover:-translate-y-1 transition-transform" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
} 