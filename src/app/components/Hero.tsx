'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-teal-800/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-16 pb-32 lg:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6 scroll-animate">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-white">
                  ✨ Plataforma Digital + Servicios Especializados
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 scroll-animate text-shadow">
                <span className="block">Transformamos la</span>
                <span className="block text-gradient">
                  gestión médica
                </span>
                <span className="block">con tecnología</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed hero-subtitle scroll-animate">
                Potenciamos las organizaciones de salud con nuestra <strong>plataforma digital integral</strong> y más de 15 años de experiencia en servicios especializados de auditoría, suministros médicos y consultoría.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 hero-buttons scroll-animate">
                <Link
                  href="#plataforma"
                  className="btn-primary card-hover group"
                >
                  Ver Plataforma
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="#contacto"
                  className="btn-secondary card-hover"
                >
                  Solicitar Demo
                </Link>
              </div>

              {/* Features highlight */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 scroll-animate">
                <div className="flex items-center feature-card scroll-animate">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Plataforma Cloud</span>
                </div>
                <div className="flex items-center feature-card scroll-animate">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Gestión Integral</span>
                </div>
                <div className="flex items-center feature-card scroll-animate">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Auditoría Automática</span>
                </div>
                <div className="flex items-center feature-card scroll-animate">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Soporte 24/7</span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200 scroll-animate">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
                  <div className="flex items-center card-hover scroll-animate">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs font-bold">15+</div>
                      <div className="w-8 h-8 bg-teal-800 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                    </div>
                    <span className="ml-3">15+ años de experiencia</span>
                  </div>
                  <div className="flex items-center card-hover scroll-animate">
                    <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2">Tecnología certificada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative scroll-animate">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl image-hover">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Médicos utilizando tecnología digital en hospital"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating elements simplificados */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-800 rounded-full flex items-center justify-center text-white shadow-xl scroll-animate">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white shadow-xl scroll-animate">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations simplificadas */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-900/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-800/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
} 