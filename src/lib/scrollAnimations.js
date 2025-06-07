// Animaciones ultra suaves sin pestañeo para Vada Health
export class ScrollAnimations {
  constructor() {
    this.elements = [];
    this.init();
  }

  init() {
    // Observador de intersección con configuración ultra suave
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px'
      }
    );

    // Detectar elementos para animar
    this.detectElements();
  }

  detectElements() {
    // Seleccionar todos los elementos que necesitan animación
    const animatableElements = document.querySelectorAll(`
      .scroll-animate,
      [data-animate],
      .service-card,
      .testimonial-card,
      .feature-card,
      .partner-logo,
      .stat-card
    `);

    animatableElements.forEach(element => {
      // Solo añadir clase de animación inicial sin delays
      element.classList.add('scroll-animate');
      
      // Observar elemento
      this.observer.observe(element);
    });
  }

  animateElement(element) {
    // Solo aplicar fade-in ultra suave
    element.classList.add('animate');
    
    // Desconectar observador para este elemento
    this.observer.unobserve(element);
  }

  // Método simplificado para inicializar
  initializeAll() {
    // Sin efectos complejos que causen pestañeo
  }
}

// Inicializar cuando el DOM esté listo
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const scrollAnimations = new ScrollAnimations();
    scrollAnimations.initializeAll();
  });
} 