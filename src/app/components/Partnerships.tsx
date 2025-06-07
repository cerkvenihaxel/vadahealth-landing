'use client';

import Image from 'next/image';

export default function Partnerships() {
  const partners = [
    {
      name: 'TechHealth Solutions',
      logo: '/api/placeholder/200/100?text=TechHealth&bg=2563eb&color=white',
      description: 'Plataforma tecnológica para gestión hospitalaria',
      category: 'Tecnología',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'MedSupply Argentina',
      logo: '/api/placeholder/200/100?text=MedSupply&bg=0f766e&color=white',
      description: 'Distribución nacional de insumos médicos',
      category: 'Suministros',
      bgColor: 'bg-teal-700'
    },
    {
      name: 'HealthConsult Pro',
      logo: '/api/placeholder/200/100?text=HealthConsult&bg=059669&color=white',
      description: 'Consultoría especializada en gestión sanitaria',
      category: 'Consultoría',
      bgColor: 'bg-emerald-600'
    },
    {
      name: 'BioInnovate Labs',
      logo: '/api/placeholder/200/100?text=BioInnovate&bg=ea580c&color=white',
      description: 'Investigación y desarrollo biomédico',
      category: 'Innovación',
      bgColor: 'bg-orange-600'
    },
    {
      name: 'Digital Health Network',
      logo: '/api/placeholder/200/100?text=DigitalHealth&bg=dc2626&color=white',
      description: 'Red de profesionales en salud digital',
      category: 'Red Profesional',
      bgColor: 'bg-red-600'
    },
    {
      name: 'QualityCare Systems',
      logo: '/api/placeholder/200/100?text=QualityCare&bg=7c3aed&color=white',
      description: 'Sistemas de calidad y acreditación',
      category: 'Calidad',
      bgColor: 'bg-violet-600'
    }
  ];

  const testimonials = [
    {
      quote: "Vada Health Argentina ha transformado completamente nuestra gestión administrativa. Su equipo profesional y sus soluciones innovadoras nos han permitido optimizar procesos y mejorar la calidad de atención.",
      author: "Dr. María González",
      position: "Directora Médica",
      company: "Clínica San Rafael",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "La auditoría médica que realizaron en nuestra institución fue excepcional. Identificaron oportunidades de mejora que no habíamos considerado y nos acompañaron en todo el proceso de implementación.",
      author: "Lic. Carlos Rodríguez",
      position: "Gerente General",
      company: "Hospital Central",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="alianzas" style={{
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
            Alianzas <span style={{
              background: 'linear-gradient(135deg, #1e3a8a, #0f766e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Estratégicas</span>
          </h2>
          <p className="scroll-animate" style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '64rem',
            margin: '0 auto',
            lineHeight: '1.75',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Trabajamos junto a empresas líderes del ecosistema de salud para brindar soluciones integrales 
            y de vanguardia a nuestros clientes.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="md:grid-cols-2 lg:grid-cols-3 scroll-animate" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo scroll-animate" style={{
              backgroundColor: '#f9fafb',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid transparent',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.borderColor = '#dbeafe';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{ textAlign: 'center' }}>
                <div className="scroll-animate" style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '4rem',
                    background: index === 0 ? '#2563eb' :
                               index === 1 ? '#0f766e' :
                               index === 2 ? '#059669' :
                               index === 3 ? '#ea580c' :
                               index === 4 ? '#dc2626' : '#7c3aed',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.125rem',
                    fontFamily: 'Inter, -apple-system, sans-serif'
                  }}>
                    {partner.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <h3 className="scroll-animate" style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.5rem',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>
                  {partner.name}
                </h3>
                <p className="scroll-animate" style={{
                  fontSize: '0.875rem',
                  color: '#1e3a8a',
                  fontWeight: '500',
                  marginBottom: '0.75rem',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>
                  {partner.category}
                </p>
                <p className="scroll-animate" style={{
                  color: '#6b7280',
                  lineHeight: '1.75',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}>
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="scroll-animate" style={{
          background: 'linear-gradient(135deg, #1e3a8a, #0f766e)',
          borderRadius: '1rem',
          padding: '3rem',
          color: 'white',
          marginBottom: '5rem'
        }}>
          <div className="scroll-animate" style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h3 className="scroll-animate" style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }}>Beneficios de Nuestras Alianzas</h3>
            <p className="scroll-animate" style={{
              fontSize: '1.125rem',
              opacity: '0.9',
              maxWidth: '48rem',
              margin: '0 auto',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }}>
              Nuestras alianzas estratégicas nos permiten ofrecer soluciones más completas y especializadas
            </p>
          </div>
          
          <div className="md:grid-cols-3 scroll-animate" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            <div className="scroll-animate" style={{ textAlign: 'center' }}>
              <div className="scroll-animate" style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <svg style={{ height: '2rem', width: '2rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="scroll-animate" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>Innovación Continua</h4>
              <p className="scroll-animate" style={{
                opacity: '0.9',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>Acceso a las últimas tecnologías y metodologías del sector salud</p>
            </div>
            
            <div className="scroll-animate" style={{ textAlign: 'center' }}>
              <div className="scroll-animate" style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <svg style={{ height: '2rem', width: '2rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="scroll-animate" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>Red de Expertos</h4>
              <p className="scroll-animate" style={{
                opacity: '0.9',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>Colaboración con especialistas líderes en diferentes áreas de la salud</p>
            </div>
            
            <div className="scroll-animate" style={{ textAlign: 'center' }}>
              <div className="scroll-animate" style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <svg style={{ height: '2rem', width: '2rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="scroll-animate" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>Calidad Garantizada</h4>
              <p className="scroll-animate" style={{
                opacity: '0.9',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>Estándares de excelencia respaldados por partners certificados</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="scroll-animate">
          <h3 className="scroll-animate" style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#111827',
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="lg:grid-cols-2 scroll-animate" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card scroll-animate" style={{
                backgroundColor: '#f9fafb',
                borderRadius: '1rem',
                padding: '2rem'
              }}>
                <div className="scroll-animate" style={{ marginBottom: '1.5rem' }}>
                  <svg style={{
                    height: '2rem',
                    width: '2rem',
                    color: '#1e3a8a',
                    marginBottom: '1rem'
                  }} fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8C8.895 8 8 8.895 8 10v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V10c0-1.105-.895-2-2-2H10zm3.5 2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5S11 14.381 11 13s1.119-2.5 2.5-2.5zm6.5 2.5c0-1.381 1.119-2.5 2.5-2.5S25 11.619 25 13s-1.119 2.5-2.5 2.5S20 14.381 20 13z"/>
                  </svg>
                  <p className="scroll-animate" style={{
                    color: '#374151',
                    fontSize: '1.125rem',
                    lineHeight: '1.75',
                    fontStyle: 'italic',
                    fontFamily: 'Inter, -apple-system, sans-serif'
                  }}>
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="scroll-animate" style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    style={{
                      borderRadius: '50%',
                      marginRight: '1rem'
                    }}
                  />
                  <div>
                    <h4 style={{
                      fontWeight: '600',
                      color: '#111827',
                      fontFamily: 'Inter, -apple-system, sans-serif'
                    }}>{testimonial.author}</h4>
                    <p style={{
                      color: '#1e3a8a',
                      fontWeight: '500',
                      fontFamily: 'Inter, -apple-system, sans-serif'
                    }}>{testimonial.position}</p>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      fontFamily: 'Inter, -apple-system, sans-serif'
                    }}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 