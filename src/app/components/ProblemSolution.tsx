'use client';

import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import ScrollReveal from './ScrollReveal';
import { Clock, DollarSign, AlertTriangle, Bot, Zap, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    { Icon: Clock, title: 'Auditorías Lentas', desc: 'Procesos manuales que demoran días' },
    { Icon: DollarSign, title: 'Costos Elevados', desc: 'Alto costo operativo de auditorías tradicionales' },
    { Icon: AlertTriangle, title: 'Errores Humanos', desc: 'Inconsistencias en criterios de evaluación' },
  ];

  const solutions = [
    { Icon: Bot, title: 'IA + Humanos', desc: 'Análisis automático con supervisión experta' },
    { Icon: Zap, title: 'Rapidez', desc: 'Auditorías en minutos, no en días' },
    { Icon: CheckCircle, title: 'Precisión', desc: 'Criterios consistentes y verificados' },
  ];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <AnimatedGridPattern className="absolute inset-0 opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              El Desafío de las <span className="text-vada-navy">Auditorías Médicas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformamos un proceso complejo en una solución eficiente
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Problema Actual</h3>
              </div>
              
              <div className="space-y-4">
                {problems.map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-red-50 rounded-xl">
                    <div className="mr-4 mt-1">
                      <item.Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-gradient-to-br from-vada-navy to-blue-700 rounded-2xl p-8 shadow-lg text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Solución VADA</h3>
              </div>
              
              <div className="space-y-4">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="mr-4 mt-1">
                      <item.Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-sm text-white/90">
                  <strong>Man In The Middle:</strong> Nuestra IA analiza y pre-aprueba, 
                  mientras auditores profesionales supervisan y validan cada decisión crítica.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
