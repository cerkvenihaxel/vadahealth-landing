'use client';

import { Building2, Building, Shield } from 'lucide-react';

export default function UseCases() {
  const cases = [
    {
      type: 'Clínicas',
      Icon: Building2,
      desc: 'Optimización de autorizaciones ambulatorias y estudios diagnósticos',
      results: [
        { label: 'Reducción tiempo respuesta', value: 85, unit: '%' },
        { label: 'Solicitudes procesadas/mes', value: 5000, unit: '+' },
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      type: 'Hospitales',
      Icon: Building,
      desc: 'Gestión integral de internaciones y procedimientos de alta complejidad',
      results: [
        { label: 'Ahorro operativo', value: 60, unit: '%' },
        { label: 'Precisión en autorizaciones', value: 98, unit: '%' },
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      type: 'Obras Sociales',
      Icon: Shield,
      desc: 'Control de prestaciones y auditoría de red de prestadores',
      results: [
        { label: 'Auditorías simultáneas', value: 10000, unit: '+' },
        { label: 'Reducción fraude', value: 75, unit: '%' },
      ],
      color: 'from-green-500 to-emerald-600'
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Casos de <span className="text-vada-navy">Éxito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reales en diferentes tipos de organizaciones de salud
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((useCase, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className={`bg-gradient-to-br ${useCase.color} p-6 text-white`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
                  <useCase.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{useCase.type}</h3>
                <p className="text-white/90 text-sm">{useCase.desc}</p>
              </div>

              <div className="p-6 space-y-4">
                {useCase.results.map((result, ridx) => (
                  <div key={ridx} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-vada-navy mb-1">
                      {result.value}{result.unit}
                    </div>
                    <div className="text-sm text-gray-600">{result.label}</div>
                  </div>
                ))}
              </div>

              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-vada-navy text-white font-semibold rounded-xl hover:bg-vada-navy/90 transition-all">
                  Ver caso completo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-vada-navy rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Juan Martínez</div>
                  <div className="text-sm text-gray-600">Director Médico, Clínica Central</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "VADA transformó completamente nuestro proceso de autorizaciones. 
                Lo que antes tomaba días, ahora se resuelve en minutos sin perder calidad."
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-vada-navy rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-gray-900">María Rodríguez</div>
                  <div className="text-sm text-gray-600">Gerente de Auditoría, Obra Social</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "La combinación de IA y auditores profesionales nos da la confianza de que 
                cada decisión está respaldada por tecnología y experiencia humana."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
