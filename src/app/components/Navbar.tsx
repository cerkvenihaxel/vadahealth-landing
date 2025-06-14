'use client';

import { useState } from 'react';
import Link from 'next/link';
import VadaLogo from './VadaLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = '#1e3a8a';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.color = '#374151';
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.opacity = '0.9';
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.opacity = '1';
  };

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid rgba(229, 231, 235, 0.8)',
      top: 0,
      left: 0,
      right: 0
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '5rem',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ 
              display: 'flex', 
              alignItems: 'center',
              textDecoration: 'none'
            }}>
              <VadaLogo size="md" className="mr-3" />
              <span style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e3a8a',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>
                Vada Health
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex" style={{
            alignItems: 'center',
            gap: '2rem'
          }}>
            <Link href="/" style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Inicio
            </Link>
            <Link href="#plataforma" style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Plataforma
            </Link>
            <Link href="#nosotros" style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Nosotros
            </Link>
            <Link href="#servicios" style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Servicios
            </Link>
            <Link href="#alianzas" style={{
              color: '#374151',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Alianzas
            </Link>
            <Link href="#contacto" style={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.75rem',
              fontWeight: '500',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'opacity 0.2s ease',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '0.375rem',
                color: '#374151',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <svg
                style={{ height: '1.5rem', width: '1.5rem' }}
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
        <div className="md:hidden" style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '0.5rem'
        }}>
          <Link href="/" style={{
            display: 'block',
            color: '#374151',
            textDecoration: 'none',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Inicio
          </Link>
          <Link href="#plataforma" style={{
            display: 'block',
            color: '#374151',
            textDecoration: 'none',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Plataforma
          </Link>
          <Link href="#nosotros" style={{
            display: 'block',
            color: '#374151',
            textDecoration: 'none',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Nosotros
          </Link>
          <Link href="#servicios" style={{
            display: 'block',
            color: '#374151',
            textDecoration: 'none',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Servicios
          </Link>
          <Link href="#alianzas" style={{
            display: 'block',
            color: '#374151',
            textDecoration: 'none',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Alianzas
          </Link>
          <Link href="#contacto" style={{
            display: 'block',
            color: '#374151',
            textDecoration: 'none',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
} 