'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    organizacion: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conectemos para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-800">Transformar</span> tu Organización
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estamos listos para analizar tu organización y diseñar la solución perfecta que combine nuestra 
            plataforma digital con los servicios especializados que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita una Evaluación Gratuita</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="email@tuorganizacion.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="+54 11 XXXX-XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="organizacion" className="block text-sm font-medium text-gray-700 mb-2">
                    Organización *
                  </label>
                  <input
                    type="text"
                    id="organizacion"
                    name="organizacion"
                    required
                    value={formData.organizacion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="Nombre de tu institución"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                  placeholder="Describe tus necesidades: ¿buscas implementar la plataforma digital, necesitas servicios de auditoría, suministros médicos o consultoría en transformación digital?"
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontWeight: '500',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.2s ease',
                  fontFamily: 'Inter, -apple-system, sans-serif'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.9'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
              >
                Enviar consulta
                <svg style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                    <p className="text-gray-600">+54 11 2273-7913</p>
                    <p className="text-gray-600">+54 11 6733-6650</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-800 rounded-xl flex items-center justify-center text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emails</h4>
                    <p className="text-gray-600">ventas@vadahealth.com.ar</p>
                    <p className="text-gray-600">info@vadahealth.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+54 11 2273-7913</p>
                    <p className="text-gray-600">+54 11 6733-6650</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                background: 'linear-gradient(to right, #1e3a8a, #1e40af)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                color: 'white',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>
                <h4 style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '0.5rem', color: '#ffffff' }}>Demo de Plataforma</h4>
                <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '1rem', color: '#ffffff' }}>
                  Agenda una demostración personalizada de nuestra plataforma digital integral.
                </p>
                <button style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.3)'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}>
                  Solicitar demo →
                </button>
              </div>

              <div style={{
                background: 'linear-gradient(to right, #115e59, #0f766e)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                color: 'white',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>
                <h4 style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '0.5rem', color: '#ffffff' }}>Consultoría Gratuita</h4>
                <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '1rem', color: '#ffffff' }}>
                  Evaluación sin costo de tus procesos actuales y oportunidades de mejora.
                </p>
                <button style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.3)'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}>
                  Agendar consulta →
                </button>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Respuesta en 24hs</h4>
                  <p className="text-sm text-gray-600">Te contactamos dentro de 1 día hábil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 