'use client';

import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Auditoría médica y administrativa',
      description: 'Evaluación integral de prestaciones médicas, control exhaustivo de gastos operativos, cumplimiento riguroso de normativas sanitarias y análisis profundo de indicadores de calidad asistencial.',
      features: ['Evaluación de prestaciones médicas', 'Control de gastos y costos', 'Cumplimiento normativo ANMAT', 'Análisis de calidad asistencial'],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-blue-900',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Suministro de insumos médicos',
      description: 'Provisión eficiente y completamente trazable de insumos médicos especializados, incluyendo prótesis de última generación, ortesis personalizadas y medicamentos certificados con soporte técnico integral.',
      features: ['Prótesis especializadas', 'Ortesis personalizadas', 'Medicamentos certificados', 'Soporte técnico especializado'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-teal-800',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Outsourcing de profesionales médicos',
      description: 'Cobertura integral con equipos médicos altamente especializados y certificados para todos los niveles de atención sanitaria, desde atención primaria hasta servicios de alta complejidad médica.',
      features: ['Médicos especialistas certificados', 'Cobertura las 24 horas', 'Atención multinivel', 'Gestión integral de recursos'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-green-600',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Consultoría en transformación digital',
      description: 'Diagnóstico preciso de procesos organizacionales, planificación estratégica personalizada, implementación de tecnologías disruptivas y soporte técnico-operativo adaptado específicamente a cada organización de salud.',
      features: ['Diagnóstico organizacional digital', 'Planificación estratégica tecnológica', 'Implementación de soluciones', 'Capacitación y soporte continuo'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-purple-600',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-800">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Combinamos nuestra plataforma digital de vanguardia con servicios especializados para ofrecer soluciones integrales 
            que transforman la gestión de organizaciones de salud en toda Argentina.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white ${service.bgColor} hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
                    Conocer más
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Vada Health Argentina`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center text-white`}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Solución Integral: Plataforma + Servicios
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Potencia tu organización de salud con la combinación perfecta: nuestra plataforma digital de gestión médica 
              integrada con servicios especializados de auditoría, suministros y consultoría.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-blue-900 bg-white hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                Solicitar evaluación gratuita
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-xl text-white bg-transparent hover:bg-white hover:text-blue-900 transition-all duration-200">
                Ver casos de éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 