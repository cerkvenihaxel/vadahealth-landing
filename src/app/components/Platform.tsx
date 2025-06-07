'use client';

import Image from 'next/image';

export default function Platform() {
  const features = [
    {
      title: 'Gestión de Pacientes',
      description: 'Sistema completo para registro, historias clínicas digitales y seguimiento de pacientes.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Auditoría Automática',
      description: 'Algoritmos inteligentes que detectan inconsistencias y optimizan procesos administrativos.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Gestión de Inventario',
      description: 'Control inteligente de stock, alertas automáticas y trazabilidad completa de insumos.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Reportes Inteligentes',
      description: 'Dashboard en tiempo real con KPIs, métricas de calidad y reportes personalizables.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Facturación Electrónica',
      description: 'Integración con AFIP, facturación automática y gestión de obras sociales.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Telemedicina',
      description: 'Consultas virtuales, seguimiento remoto y comunicación segura médico-paciente.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const modules = [
    {
      title: 'Módulo Administrativo',
      description: 'Gestión completa de turnos, facturación, obra social y recursos humanos.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Módulo Clínico',
      description: 'Historia clínica electrónica, prescripciones digitales y protocolos médicos.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Módulo de Calidad',
      description: 'Indicadores de calidad, acreditación y mejora continua de procesos.',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Módulo Financiero',
      description: 'Control de costos, análisis de rentabilidad y proyecciones financieras.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="plataforma" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plataforma <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-800">Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nuestra plataforma integral revoluciona la gestión médica con tecnología de vanguardia, 
            automatización inteligente y una experiencia de usuario excepcional.
          </p>
        </div>

        {/* Main Platform Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tecnología que Transforma la Salud
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desarrollada específicamente para el sector salud argentino, nuestra plataforma 
              integra todos los aspectos de la gestión médica en una solución cloud escalable, 
              segura y fácil de usar.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Cumplimiento normativo ANMAT y Superintendencia</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Integración con AFIP y obras sociales</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Seguridad ISO 27001 y cifrado end-to-end</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-900 hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Demo en Vivo
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-base font-medium rounded-xl text-blue-900 bg-white hover:bg-blue-900 hover:text-white transition-all duration-200">
                Descargar Brochure
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Interfaz de la plataforma digital Vada Health"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-800">24/7</div>
                <div className="text-sm text-gray-600">Soporte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Funcionalidades Principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Módulos Especializados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className={`bg-gradient-to-r ${module.color} rounded-2xl p-8 text-white`}>
                <h4 className="text-2xl font-bold mb-4">{module.title}</h4>
                <p className="text-lg leading-relaxed opacity-90">{module.description}</p>
                <div className="mt-6">
                  <button className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-xl font-medium transition-all duration-200">
                    Ver detalles →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 