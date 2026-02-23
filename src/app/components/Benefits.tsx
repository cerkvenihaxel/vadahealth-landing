'use client';

import NumberTicker from '@/components/ui/number-ticker';
import ScrollReveal from './ScrollReveal';
import { TrendingDown, BarChart3, Heart } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      Icon: TrendingDown,
      title: 'Reducción de Costos',
      desc: 'Optimiza recursos auditando gran volumen de solicitudes de forma semi-automática',
      metric: 70,
      metricLabel: '% menos costos',
      color: 'from-green-500 to-emerald-600'
    },
    {
      Icon: BarChart3,
      title: 'Auditorías a Gran Escala',
      desc: 'Procesa miles de autorizaciones simultáneamente sin comprometer la calidad',
      metric: 1000,
      metricLabel: '+ solicitudes/día',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      Icon: Heart,
      title: 'Beneficios para Pacientes',
      desc: 'Respuestas más rápidas significan tratamientos oportunos y mejor atención',
      metric: 95,
      metricLabel: '% satisfacción',
      color: 'from-red-500 to-pink-600'
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Beneficios <span className="text-vada-navy">Comprobados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados tangibles que transforman tu organización de salud
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <ScrollReveal key={idx} delay={200 + idx * 100}>
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-vada-navy/20">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {benefit.desc}
                </p>

                <div className={`bg-gradient-to-br ${benefit.color} rounded-xl p-4 text-white`}>
                  <div className="text-4xl font-bold mb-1">
                    {benefit.metric >= 100 ? (
                      <>
                        <NumberTicker value={benefit.metric} />+
                      </>
                    ) : (
                      <>
                        <NumberTicker value={benefit.metric} />%
                      </>
                    )}
                  </div>
                  <div className="text-sm text-white/80">{benefit.metricLabel}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-vada-navy/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Impacto Real en tu Organización
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Menor tiempo de espera para pacientes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Optimización de recursos humanos especializados</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Cumplimiento normativo automatizado</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Trazabilidad completa de decisiones</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-vada-navy to-blue-700 rounded-xl p-8 text-white">
                <div className="text-6xl font-bold mb-2">
                  <NumberTicker value={15} />+
                </div>
                <p className="text-xl mb-4">Años de experiencia</p>
                <p className="text-white/80">
                  Respaldados por más de una década de expertise en auditorías médicas 
                  y gestión de salud en Argentina.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
