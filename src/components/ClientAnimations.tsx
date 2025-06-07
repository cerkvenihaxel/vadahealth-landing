'use client';

import { useEffect } from 'react';

export default function ClientAnimations() {
  useEffect(() => {
    // Importar y inicializar las animaciones
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { ScrollAnimations } = await import('../lib/scrollAnimations');
        const scrollAnimations = new ScrollAnimations();
        scrollAnimations.initializeAll();
      }
    };

    initAnimations();
  }, []);

  return null;
} 