'use client';

import NumberTicker from '@/components/ui/number-ticker';
import ScrollReveal from './ScrollReveal';
import { FileText, Bot, UserCheck, CheckCircle } from 'lucide-react';

export default function AIPlatform() {
  const steps = [
    { Icon: FileText, title: 'Solicitud', desc: 'Ingreso de autorización médica' },
    { Icon: Bot, title: 'Análisis IA', desc: 'Procesamiento inteligente automático' },
    { Icon: UserCheck, title: 'Auditor', desc: 'Revisión y validación profesional' },
    { Icon: CheckCircle, title: 'Aprobación', desc: 'Respuesta rápida y precisa' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nuestro Modelo <span className="text-vada-navy">Híbrido</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La combinación perfecta entre tecnología y experiencia humana
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={200 + idx * 100}>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-vada-navy/20 hover:border-vada-navy/40 transition-all hover:shadow-lg">
                  <div className="flex items-center justify-center w-14 h-14 bg-vada-navy/10 rounded-xl mb-4">
                    <step.Icon className="w-7 h-7 text-vada-navy" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-vada-navy/30">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-vada-navy rounded-full"></div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="bg-gradient-to-br from-vada-navy to-blue-700 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">
                  <NumberTicker value={10} />x
                </div>
                <p className="text-white/80">Más rápido que auditorías tradicionales</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">
                  <NumberTicker value={70} />%
                </div>
                <p className="text-white/80">Reducción de costos operativos</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">
                  <NumberTicker value={99} />%
                </div>
                <p className="text-white/80">Precisión en autorizaciones</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-2xl font-bold mb-4">¿Cómo funciona el Man In The Middle?</h3>
              <p className="text-white/90 text-lg">
                Nuestra IA procesa miles de solicitudes simultáneamente, aplicando criterios médicos 
                y regulatorios. Los casos complejos o que requieren juicio clínico son escalados 
                automáticamente a nuestros auditores profesionales, garantizando decisiones precisas 
                y respaldadas por experiencia humana.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
