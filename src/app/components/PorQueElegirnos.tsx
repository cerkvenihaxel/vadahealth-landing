'use client';

import { Lightbulb, Users, Shield, Zap, Clock, Database, Stethoscope } from 'lucide-react';

export default function PorQueElegirnos() {
  const reasons = [
    {
      Icon: Lightbulb,
      title: 'Innovación constante',
      desc: 'Tecnología aplicada a la salud'
    },
    {
      Icon: Users,
      title: 'Enfoque centrado',
      desc: 'En el paciente y los profesionales'
    },
    {
      Icon: Shield,
      title: 'Seguridad y confidencialidad',
      desc: 'De la información médica'
    },
    {
      Icon: Zap,
      title: 'Implementación ágil',
      desc: 'Y soporte personalizado'
    }
  ];

  const benefits = [
    { Icon: Clock, text: 'Reducimos tiempos de espera' },
    { Icon: Database, text: 'Mejoramos la seguridad de los datos' },
    { Icon: Stethoscope, text: 'Facilitamos la toma de decisiones clínicas' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué <span className="text-vada-navy">elegirnos?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-vada-navy/20">
              <div className="w-14 h-14 bg-gradient-to-br from-vada-navy to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <reason.Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-vada-navy to-blue-700 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Nuestro Impacto</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
