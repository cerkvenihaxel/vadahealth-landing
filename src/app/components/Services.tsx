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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
    <section id="servicios" style={{
      paddingTop: '6rem',
      paddingBottom: '6rem',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
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
            Nuestros <span style={{
              background: 'linear-gradient(135deg, #1e3a8a, #0f766e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Servicios</span>
          </h2>
          <p className="scroll-animate" style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '64rem',
            margin: '0 auto',
            lineHeight: '1.75',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Combinamos nuestra plataforma digital de vanguardia con servicios especializados para ofrecer soluciones integrales 
            que transforman la gestión de organizaciones de salud en toda Argentina.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ marginBottom: '5rem' }}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className="lg:grid-cols-2 service-card scroll-animate"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '3rem',
                alignItems: 'center',
                marginBottom: index < services.length - 1 ? '5rem' : '0'
              }}
            >
              {/* Content */}
              <div className="scroll-animate" style={{
                order: 1
              }}>
                <div>
                  <div className="scroll-animate" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '4rem',
                    height: '4rem',
                    background: index === 0 ? '#1e3a8a' : 
                               index === 1 ? '#0f766e' : 
                               index === 2 ? '#059669' : '#7c3aed',
                    borderRadius: '1rem',
                    color: 'white',
                    marginBottom: '1.5rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    {service.icon}
                  </div>
                  <h3 className="scroll-animate" style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '1rem',
                    fontFamily: 'Inter, -apple-system, sans-serif'
                  }}>
                    {service.title}
                  </h3>
                  <p className="scroll-animate" style={{
                    fontSize: '1.125rem',
                    color: '#6b7280',
                    lineHeight: '1.75',
                    marginBottom: '1.5rem',
                    fontFamily: 'Inter, -apple-system, sans-serif'
                  }}>
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="scroll-animate" style={{ marginBottom: '2rem' }}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-card scroll-animate" style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.75rem'
                    }}>
                      <div style={{
                        width: '0.5rem',
                        height: '0.5rem',
                        backgroundColor: '#1e3a8a',
                        borderRadius: '50%',
                        marginRight: '0.75rem'
                      }}></div>
                      <span style={{
                        color: '#374151',
                        fontWeight: '500',
                        fontFamily: 'Inter, -apple-system, sans-serif'
                      }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="scroll-animate" style={{ paddingTop: '1rem' }}>
                  <button style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.75rem 2rem',
                    backgroundColor: '#1e3a8a',
                    color: 'white',
                    borderRadius: '0.75rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Inter, -apple-system, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1e40af';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1e3a8a';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                  >
                    Conocer más
                    <svg style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="scroll-animate" style={{
                position: 'relative',
                order: 2
              }}>
                <div style={{
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} - Vada Health Argentina`}
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(17, 24, 39, 0.3), transparent)'
                  }}></div>
                </div>
                
                {/* Floating badge */}
                <div className="scroll-animate" style={{
                  position: 'absolute',
                  top: '-1.5rem',
                  right: '-1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  padding: '1rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: index === 0 ? '#1e3a8a' : 
                               index === 1 ? '#0f766e' : 
                               index === 2 ? '#059669' : '#7c3aed',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration CTA */}
        <div className="scroll-animate" style={{ marginTop: '5rem', textAlign: 'center' }}>
          <div className="scroll-animate" style={{
            background: 'linear-gradient(135deg, #1e3a8a, #0f766e)',
            borderRadius: '1rem',
            padding: '3rem',
            color: 'white',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h3 className="scroll-animate" style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }}>
              Solución Integral: Plataforma + Servicios
            </h3>
            <p className="scroll-animate" style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              maxWidth: '48rem',
              margin: '0 auto 2rem auto',
              opacity: '0.9',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }}>
              Potencia tu organización de salud con la combinación perfecta: nuestra plataforma digital de gestión médica 
              integrada con servicios especializados de auditoría, suministros y consultoría.
            </p>
            <div className="sm:flex-row scroll-animate" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 2rem',
                backgroundColor: 'white',
                color: '#1e3a8a',
                borderRadius: '0.75rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
              >
                Solicitar evaluación gratuita
                <svg style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 2rem',
                backgroundColor: 'transparent',
                color: 'white',
                borderRadius: '0.75rem',
                fontWeight: '500',
                border: '2px solid white',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#1e3a8a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
              >
                Ver casos de éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 