'use client';

import Image from 'next/image';

export default function QuienesSomos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quiénes <span className="text-vada-navy">Somos</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Somos una empresa dedicada a la <strong>innovación tecnológica en salud</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              En <strong>VADA HEALTH ARGENTINA</strong> trabajamos para digitalizar y 
              transformar la forma en que se gestionan los servicios médicos, aportando 
              herramientas ágiles, seguras y adaptadas a cada institución.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-vada-navy to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Innovación</h3>
                    <p className="text-white/90">Tecnología de vanguardia aplicada al sector salud</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Adaptabilidad</h3>
                    <p className="text-white/90">Soluciones personalizadas para cada institución</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Seguridad</h3>
                    <p className="text-white/90">Protección de datos y cumplimiento normativo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
