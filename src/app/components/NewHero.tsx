'use client';

import Link from 'next/link';
import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';
import Particles from '@/components/ui/particles';
import BorderBeam from '@/components/ui/border-beam';

export default function NewHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <Particles className="absolute inset-0" quantity={50} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-vada-navy/10 border border-vada-navy/20 mb-6">
                <span className="text-sm font-medium text-vada-navy">
                  ✨ Auditorías Médicas Inteligentes
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">IA + Auditores</span>
                <span className="block bg-gradient-to-r from-vada-navy to-blue-600 bg-clip-text text-transparent">
                  Profesionales
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Revolucionamos las auditorías médicas con nuestro modelo híbrido: 
                <strong> Inteligencia Artificial supervisada por auditores expertos</strong> para 
                autorizaciones rápidas, precisas y confiables.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#contacto"
                  className="relative inline-flex items-center justify-center px-8 py-4 bg-vada-navy text-white font-semibold rounded-xl hover:bg-vada-navy/90 transition-all shadow-lg hover:shadow-xl"
                >
                  <BorderBeam size={200} duration={12} delay={0} />
                  Solicitar Demo
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="#plataforma"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-vada-navy font-semibold rounded-xl border-2 border-vada-navy hover:bg-gray-50 transition-all"
                >
                  Ver Plataforma
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={0.5}>
              <div className="mt-12 grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Auditorías semi-automáticas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Reducción de costos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Supervisión profesional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Beneficios para pacientes</span>
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.6} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/header-top.jpg"
                alt="Plataforma VADA Health - Auditorías médicas con IA"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vada-navy/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vada-navy rounded-full flex items-center justify-center text-white shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">10x</div>
                <div className="text-xs">Más rápido</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
