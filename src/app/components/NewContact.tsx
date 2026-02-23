'use client';

import { useState, useEffect } from 'react';
import BlurFade from '@/components/ui/blur-fade';
import ShimmerButton from '@/components/ui/shimmer-button';
import Particles from '@/components/ui/particles';

export default function NewContact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {mounted && <Particles className="absolute inset-0" quantity={30} />}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Solicita tu <span className="text-vada-navy">Demo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo VADA puede transformar las auditorías médicas de tu organización
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <BlurFade delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-vada-navy/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-vada-navy focus:outline-none transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-vada-navy focus:outline-none transition-colors"
                    placeholder="juan@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa / Organización *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-vada-navy focus:outline-none transition-colors"
                    placeholder="Clínica / Hospital / Obra Social"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-vada-navy focus:outline-none transition-colors"
                    placeholder="(351) 661 5020"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-vada-navy focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu organización y necesidades..."
                  />
                </div>

                <ShimmerButton
                  type="submit"
                  className="w-full"
                  background="linear-gradient(135deg, #1B3A5C 0%, #2563eb 100%)"
                >
                  <span className="text-lg font-semibold">Solicitar Demo</span>
                </ShimmerButton>
              </form>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-vada-navy to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">¿Por qué elegir VADA?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Demo personalizada según tu tipo de organización</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Implementación rápida y sin interrupciones</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Soporte técnico y capacitación incluidos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Resultados medibles desde el primer mes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-vada-navy/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-vada-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-semibold text-gray-900">vadahealthargentina@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-vada-navy/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-vada-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Teléfono</div>
                      <div className="font-semibold text-gray-900">(351) 661 5020</div>
                      <div className="font-semibold text-gray-900">(351) 618 4316</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-vada-navy/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-vada-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Ubicación</div>
                      <div className="font-semibold text-gray-900">Argentina</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
