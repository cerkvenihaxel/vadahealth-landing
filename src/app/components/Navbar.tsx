'use client';

import { useState } from 'react';
import Link from 'next/link';
import VadaLogo from './VadaLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <VadaLogo size="md" className="mr-3 transition-transform duration-200 group-hover:scale-110" />
              <span className="text-2xl font-bold text-blue-900">Vada Health</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Inicio
            </Link>
            <Link href="#plataforma" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Plataforma
            </Link>
            <Link href="#nosotros" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Nosotros
            </Link>
            <Link href="#servicios" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Servicios
            </Link>
            <Link href="#alianzas" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Alianzas
            </Link>
            <Link href="#contacto" className="bg-blue-900 text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition-colors font-medium shadow-lg hover:shadow-xl">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium transition-colors">
              Inicio
            </Link>
            <Link href="#plataforma" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium transition-colors">
              Plataforma
            </Link>
            <Link href="#nosotros" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium transition-colors">
              Nosotros
            </Link>
            <Link href="#servicios" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium transition-colors">
              Servicios
            </Link>
            <Link href="#alianzas" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium transition-colors">
              Alianzas
            </Link>
            <Link href="#contacto" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 