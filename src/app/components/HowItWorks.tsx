'use client';

import ScrollReveal from './ScrollReveal';
import { Link2, Inbox, Brain, UserCheck, FileCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Integración',
      desc: 'Conectamos nuestra plataforma con tus sistemas existentes de forma segura y sin interrupciones',
      Icon: Link2,
    },
    {
      number: '02',
      title: 'Solicitud',
      desc: 'Las autorizaciones médicas ingresan automáticamente al sistema desde múltiples canales',
      Icon: Inbox,
    },
    {
      number: '03',
      title: 'Análisis IA',
      desc: 'Nuestra IA evalúa la solicitud contra protocolos médicos, normativas y criterios predefinidos',
      Icon: Brain,
    },
    {
      number: '04',
      title: 'Revisión Auditor',
      desc: 'Casos complejos son escalados a auditores profesionales para validación experta',
      Icon: UserCheck,
    },
    {
      number: '05',
      title: 'Aprobación',
      desc: 'Respuesta inmediata con trazabilidad completa y documentación de la decisión',
      Icon: FileCheck,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ¿Cómo <span className="text-vada-navy">Funciona?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y eficiente de principio a fin
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vada-navy via-blue-400 to-vada-navy transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={200 + idx * 100}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-vada-navy/20 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="flex items-center justify-center w-16 h-16 bg-vada-navy/10 rounded-xl mb-4 mx-auto lg:mx-0">
                        <step.Icon className="w-8 h-8 text-vada-navy" />
                      </div>
                      <div className="text-sm font-bold text-vada-navy mb-2">{step.number}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-vada-navy rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {idx + 1}
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={800}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-vada-navy to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tus auditorías?</h3>
              <p className="text-white/90 mb-6 max-w-2xl">
                Implementación rápida, soporte continuo y resultados desde el primer día
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center px-8 py-4 bg-white text-vada-navy font-semibold rounded-xl hover:bg-gray-100 transition-all"
              >
                Solicitar Demo
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
