'use client';

import Image from 'next/image';

export default function About() {
  const values = [
    { 
      name: 'Transparencia', 
      description: 'Actuamos con honestidad y claridad en todas nuestras interacciones con clientes y stakeholders.',
      icon: '🔍'
    },
    { 
      name: 'Profesionalismo', 
      description: 'Mantenemos los más altos estándares de calidad y ética profesional en cada proyecto.',
      icon: '⭐'
    },
    { 
      name: 'Innovación', 
      description: 'Buscamos constantemente nuevas soluciones tecnológicas y metodologías disruptivas.',
      icon: '💡'
    },
    { 
      name: 'Compromiso humano', 
      description: 'Ponemos a las personas en el centro de nuestras decisiones y desarrollos tecnológicos.',
      icon: '❤️'
    },
    { 
      name: 'Colaboración', 
      description: 'Trabajamos en equipo con nuestros clientes para lograr objetivos comunes sostenibles.',
      icon: '🤝'
    },
    { 
      name: 'Responsabilidad', 
      description: 'Asumimos el compromiso integral con nuestros clientes, la sociedad y el medio ambiente.',
      icon: '🛡️'
    },
  ];

  const stats = [
    { label: 'Años de experiencia', value: '15+' },
    { label: 'Profesionales especializados', value: '25+' },
    { label: 'Organizaciones atendidas', value: '100+' },
    { label: 'Proyectos exitosos', value: '200+' },
  ];

  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-800">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vada Health Argentina nace del compromiso por transformar la gestión de las organizaciones de salud mediante 
            soluciones digitales integrales, confiables y técnicamente sólidas que potencian la eficiencia operativa.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Si bien la empresa se constituyó formalmente en <strong className="text-blue-900">mayo de 2024</strong>, 
                  nuestro recorrido comenzó en noviembre de 2023, cuando un grupo de profesionales con amplia trayectoria 
                  en el ámbito sanitario identificó la necesidad urgente de mejorar la eficiencia y la trazabilidad en un 
                  sistema de salud cada vez más exigente y digitalizado.
                </p>
                <p>
                  Desde el inicio, nos propusimos construir una alternativa distinta, basada en un equipo humano altamente 
                  capacitado, tecnología de vanguardia y una fuerte vocación por el trabajo bien hecho que genere impacto positivo.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Equipo</h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestro equipo interdisciplinario está compuesto por <strong className="text-blue-900">médicos auditores certificados</strong>, 
                <strong className="text-teal-800"> especialistas administrativos</strong>, <strong className="text-green-600">profesionales tecnológicos senior</strong> 
                y una red de consultores especializados en transformación digital del sector salud argentino.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Equipo médico colaborando en tecnología de salud"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Innovación constante</div>
                  <div className="text-sm text-gray-500">Tecnología de vanguardia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.name} className="group bg-white rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {value.name}
                </h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p className="text-lg leading-relaxed">
              Impulsar la eficiencia y calidad del sistema sanitario argentino a través de soluciones tecnológicas 
              innovadoras que integren plataformas digitales con servicios especializados de excelencia.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-800 to-teal-700 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p className="text-lg leading-relaxed">
              Ser la empresa referente en Latinoamérica en transformación digital de organizaciones de salud, 
              reconocida por la innovación, calidad de servicios y impacto positivo en la atención médica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 