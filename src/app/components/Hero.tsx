'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
      overflow: 'hidden',
      paddingTop: '6rem'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to right, rgba(30, 58, 138, 0.05), rgba(17, 94, 89, 0.05))'
      }}></div>
      
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          position: 'relative',
          paddingTop: '4rem',
          paddingBottom: '8rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }} className="lg:grid-cols-2">
            
            {/* Content */}
            <div style={{ textAlign: 'center' }} className="lg:text-left">
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>
                  ✨ Plataforma Digital + Servicios Especializados
                </span>
              </div>
              
              <h1 style={{
                fontSize: '2.25rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1.5rem',
                lineHeight: '1.2',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }} className="md:text-5xl lg:text-6xl">
                <span style={{ display: 'block' }}>Transformamos la</span>
                <span style={{ 
                  display: 'block',
                  background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #0f766e)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  gestión médica
                </span>
                <span style={{ display: 'block' }}>con tecnología</span>
              </h1>
              
              <p style={{
                fontSize: '1.25rem',
                color: '#4b5563',
                marginBottom: '2rem',
                maxWidth: '42rem',
                lineHeight: '1.625',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }} className="mx-auto lg:mx-0">
                Potenciamos las organizaciones de salud con nuestra <strong>plataforma digital integral</strong> y más de 15 años de experiencia en servicios especializados de auditoría, suministros médicos y consultoría.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
                marginBottom: '2rem'
              }} className="sm:flex-row lg:justify-start">
                <Link
                  href="#plataforma"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#1e3a8a',
                    color: 'white',
                    fontWeight: '500',
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                    fontFamily: 'Inter, -apple-system, sans-serif'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.9'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                >
                  Ver Plataforma
                  <svg style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="#contacto"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'white',
                    color: '#1e3a8a',
                    fontWeight: '500',
                    borderRadius: '0.75rem',
                    border: '2px solid #1e3a8a',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                    fontFamily: 'Inter, -apple-system, sans-serif'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                >
                  Solicitar Demo
                </Link>
              </div>

              {/* Features highlight */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                fontSize: '0.875rem',
                color: '#4b5563',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '0.75rem',
                    height: '0.75rem',
                    backgroundColor: '#22c55e',
                    borderRadius: '9999px',
                    marginRight: '0.75rem'
                  }}></div>
                  <span>Plataforma Cloud</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '0.75rem',
                    height: '0.75rem',
                    backgroundColor: '#22c55e',
                    borderRadius: '9999px',
                    marginRight: '0.75rem'
                  }}></div>
                  <span>Gestión Integral</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '0.75rem',
                    height: '0.75rem',
                    backgroundColor: '#22c55e',
                    borderRadius: '9999px',
                    marginRight: '0.75rem'
                  }}></div>
                  <span>Auditoría Automática</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '0.75rem',
                    height: '0.75rem',
                    backgroundColor: '#22c55e',
                    borderRadius: '9999px',
                    marginRight: '0.75rem'
                  }}></div>
                  <span>Soporte 24/7</span>
                </div>
              </div>

              {/* Trust indicators */}
              <div style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2rem',
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }} className="sm:flex-row lg:justify-start">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', marginLeft: '-0.5rem' }}>
                      <div style={{
                        width: '2rem',
                        height: '2rem',
                        backgroundColor: '#1e3a8a',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: '700'
                      }}>15+</div>
                      <div style={{
                        width: '2rem',
                        height: '2rem',
                        backgroundColor: '#115e59',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        marginLeft: '-0.5rem'
                      }}>✓</div>
                    </div>
                    <span style={{ marginLeft: '0.75rem' }}>15+ años de experiencia</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={{ height: '1.25rem', width: '1.25rem', color: '#16a34a' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ marginLeft: '0.5rem' }}>Tecnología certificada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Médicos utilizando tecnología digital en hospital"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  priority
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(30, 58, 138, 0.2), transparent)'
                }}></div>
              </div>
              
              {/* Floating elements */}
              <div style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                width: '6rem',
                height: '6rem',
                backgroundColor: '#115e59',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}>
                <svg style={{ height: '2.5rem', width: '2.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1.5rem',
                width: '5rem',
                height: '5rem',
                backgroundColor: '#16a34a',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}>
                <svg style={{ height: '2rem', width: '2rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '24rem',
        height: '24rem',
        background: 'radial-gradient(circle, rgba(30, 58, 138, 0.1), transparent)',
        filter: 'blur(3rem)',
        borderRadius: '9999px'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '24rem',
        height: '24rem',
        background: 'radial-gradient(circle, rgba(17, 94, 89, 0.1), transparent)',
        filter: 'blur(3rem)',
        borderRadius: '9999px'
      }}></div>
    </div>
  );
} 