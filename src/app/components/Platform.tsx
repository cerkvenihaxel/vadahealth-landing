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
        <div className="scroll-animate" style={{
          textAlign: 'center',
          marginBottom: '5rem'
        }}>
          <h2 className="scroll-animate" style={{
            fontSize: 'clamp(2.25rem, 5vw, 3rem)',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1.5rem',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Plataforma <span style={{
              background: 'linear-gradient(135deg, #1e3a8a, #0f766e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Digital</span>
          </h2>
          <p className="scroll-animate" style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '64rem',
            margin: '0 auto',
            lineHeight: '1.75',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
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
            <div style={{
              position: 'absolute',
              top: '-1rem',
              left: '-1rem',
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              padding: '1rem',
              zIndex: 10
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1e3a8a',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>99.9%</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>Uptime</div>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              right: '-1rem',
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              padding: '1rem',
              zIndex: 10
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#0f766e',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>24/7</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>Soporte</div>
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
          <h3 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#111827',
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Módulos Especializados
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {modules.map((module, index) => (
              <div key={index} style={{
                background: index === 0 ? 'linear-gradient(135deg, #3b82f6, #2563eb)' :
                           index === 1 ? 'linear-gradient(135deg, #14b8a6, #0d9488)' :
                           index === 2 ? 'linear-gradient(135deg, #22c55e, #16a34a)' :
                           'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                borderRadius: '1rem',
                padding: '2rem',
                color: 'white',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
              >
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>{module.title}</h4>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75',
                  opacity: '0.9',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>{module.description}</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <button style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '500',
                    transition: 'background-color 0.2s ease',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontFamily: 'Inter, -apple-system, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  >
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