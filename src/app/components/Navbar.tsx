'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/assets/vada-logo.png"
              alt="VADA Health Argentina"
              width={120}
              height={48}
              priority
              className="object-contain"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#hero" className="text-gray-700 hover:text-vada-navy font-medium transition-colors">
              Inicio
            </Link>
            <Link href="#problema" className="text-gray-700 hover:text-vada-navy font-medium transition-colors">
              Solución
            </Link>
            <Link href="#plataforma" className="text-gray-700 hover:text-vada-navy font-medium transition-colors">
              Plataforma
            </Link>
            <Link href="#beneficios" className="text-gray-700 hover:text-vada-navy font-medium transition-colors">
              Beneficios
            </Link>
            <Link href="#casos" className="text-gray-700 hover:text-vada-navy font-medium transition-colors">
              Casos de Éxito
            </Link>
            <Link
              href="#contacto"
              className="px-6 py-2.5 bg-vada-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-all shadow-md hover:shadow-lg"
            >
              Solicitar Demo
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link href="#hero" className="block py-2 text-gray-700 hover:text-vada-navy font-medium">
              Inicio
            </Link>
            <Link href="#problema" className="block py-2 text-gray-700 hover:text-vada-navy font-medium">
              Solución
            </Link>
            <Link href="#plataforma" className="block py-2 text-gray-700 hover:text-vada-navy font-medium">
              Plataforma
            </Link>
            <Link href="#beneficios" className="block py-2 text-gray-700 hover:text-vada-navy font-medium">
              Beneficios
            </Link>
            <Link href="#casos" className="block py-2 text-gray-700 hover:text-vada-navy font-medium">
              Casos de Éxito
            </Link>
            <Link
              href="#contacto"
              className="block py-2.5 px-4 bg-vada-navy text-white font-semibold rounded-xl text-center"
            >
              Solicitar Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 