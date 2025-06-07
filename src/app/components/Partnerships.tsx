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
    <section id="alianzas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Alianzas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-800">Estratégicas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Trabajamos junto a empresas líderes del ecosistema de salud para brindar soluciones integrales 
            y de vanguardia a nuestros clientes.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200">
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                  <div className={`w-full h-16 ${partner.bgColor} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {partner.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-sm text-blue-900 font-medium mb-3">
                  {partner.category}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Beneficios de Nuestras Alianzas</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Nuestras alianzas estratégicas nos permiten ofrecer soluciones más completas y especializadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Innovación Continua</h4>
              <p className="opacity-90">Acceso a las últimas tecnologías y metodologías del sector salud</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Red de Expertos</h4>
              <p className="opacity-90">Colaboración con especialistas líderes en diferentes áreas de la salud</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Calidad Garantizada</h4>
              <p className="opacity-90">Estándares de excelencia respaldados por partners certificados</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-blue-900 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8C8.895 8 8 8.895 8 10v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V10c0-1.105-.895-2-2-2H10zm3.5 2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5S11 14.381 11 13s1.119-2.5 2.5-2.5zm6.5 2.5c0-1.381 1.119-2.5 2.5-2.5S25 11.619 25 13s-1.119 2.5-2.5 2.5S20 14.381 20 13z"/>
                  </svg>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-blue-900 font-medium">{testimonial.position}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
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