'use client';

import { useState, useEffect } from 'react';
import { Mail, Bot, UserCheck, CheckCircle } from 'lucide-react';

const TypeWriter = ({ text, speed = 50, isActive = false }: { text: string; speed?: number; isActive?: boolean }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (!isActive) {
      setDisplayText('');
      return;
    }
    
    let index = 0;
    setDisplayText('');
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, isActive]);
  
  return <span>{displayText}</span>;
};

const SequentialReveal = ({ items, isActive = false }: { items: string[]; isActive?: boolean }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  
  useEffect(() => {
    if (!isActive) {
      setVisibleCount(0);
      return;
    }
    
    let count = 0;
    const timer = setInterval(() => {
      if (count < items.length) {
        setVisibleCount(count + 1);
        count++;
      } else {
        clearInterval(timer);
      }
    }, 600);
    
    return () => clearInterval(timer);
  }, [items.length, isActive]);
  
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center transition-all duration-500 ${
            idx < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default function DemoInteractiva() {
  const [step, setStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getSteps = (currentStep: number) => [
    {
      id: 0,
      title: 'Solicitud recibida',
      Icon: Mail,
      color: 'from-blue-500 to-blue-600',
      content: (
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-sm text-gray-500 mb-2">De: dr.martinez@clinica.com</div>
          <div className="text-sm text-gray-500 mb-3">Asunto: Autorización - Radiografía</div>
          <div className="text-gray-700">
            <p className="mb-2">Solicito autorización para:</p>
            <p className="font-semibold"><TypeWriter text="Paciente: Juan Pérez (DNI 12345678)" speed={30} isActive={currentStep === 0} /></p>
            <p><TypeWriter text="Prestación: Radiografía de muñeca derecha" speed={30} isActive={currentStep === 0} /></p>
            <p><TypeWriter text="Diagnóstico: Fractura de radio distal" speed={30} isActive={currentStep === 0} /></p>
            <p><TypeWriter text="Urgencia: Moderada" speed={30} isActive={currentStep === 0} /></p>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: 'IA analizando...',
      Icon: Bot,
      color: 'from-purple-500 to-purple-600',
      content: (
        <div className="bg-white rounded-lg p-4 shadow-md">
          <SequentialReveal 
            items={[
              'Verificando datos del paciente...',
              'Validando cobertura médica...',
              'Consultando protocolos médicos...',
              'Evaluando criterios de autorización...'
            ]}
            isActive={currentStep === 1}
          />
        </div>
      )
    },
    {
      id: 2,
      title: 'Análisis de IA completado',
      Icon: Bot,
      color: 'from-purple-500 to-purple-600',
      content: (
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="mb-3">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-3">
              ✓ Pre-aprobado por IA
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>Paciente:</strong> Verificado - Cobertura activa</p>
            <p><strong>Prestación:</strong> Incluida en plan</p>
            <p><strong>Diagnóstico:</strong> Coherente con prestación solicitada</p>
            <p><strong>Protocolo:</strong> Cumple criterios estándar</p>
            <p className="text-yellow-700 bg-yellow-50 p-2 rounded mt-3">
              ⚠️ Requiere validación de auditor por ser primera atención
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Auditor revisando',
      Icon: UserCheck,
      color: 'from-orange-500 to-orange-600',
      content: (
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-vada-navy rounded-full flex items-center justify-center text-white font-bold mr-3">
              AM
            </div>
            <div>
              <div className="font-semibold">Dra. Ana Martínez</div>
              <div className="text-sm text-gray-500">Auditora Médica</div>
            </div>
          </div>
          <div className="text-sm text-gray-700">
            <p className="mb-2"><TypeWriter text="Revisando análisis de IA..." speed={40} isActive={currentStep === 3} /></p>
            <p className="text-green-700 bg-green-50 p-2 rounded">
              <TypeWriter text="✓ Análisis correcto. Fractura simple que requiere estudio radiológico estándar. Autorización aprobada." speed={35} isActive={currentStep === 3} />
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Autorización aprobada',
      Icon: CheckCircle,
      color: 'from-green-500 to-green-600',
      content: (
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-center mb-3">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-xl font-bold text-green-700">¡Autorización Aprobada!</div>
          </div>
          <div className="text-sm space-y-1 bg-gray-50 p-3 rounded">
            <p><strong>Nº Autorización:</strong> AUT-2024-001234</p>
            <p><strong>Prestación:</strong> Radiografía muñeca derecha</p>
            <p><strong>Validez:</strong> 30 días</p>
            <p><strong>Tiempo total:</strong> 2 minutos</p>
          </div>
        </div>
      )
    }
  ];

  const steps = getSteps(step);

  useEffect(() => {
    if (isPlaying && step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, step === 1 ? 3000 : 3000);
      return () => clearTimeout(timer);
    } else if (step === steps.length - 1) {
      setIsPlaying(false);
    }
  }, [step, isPlaying, steps.length]);

  const startDemo = () => {
    setStep(0);
    setIsPlaying(true);
  };

  const resetDemo = () => {
    setStep(-1);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Demo <span className="text-vada-navy">Interactiva</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Observa cómo funciona nuestro sistema en tiempo real
          </p>
          <button
            onClick={isPlaying ? resetDemo : startDemo}
            className="px-8 py-4 bg-vada-navy text-white font-semibold rounded-xl hover:bg-vada-navy/90 transition-all shadow-lg"
          >
            {isPlaying ? 'Reiniciar Demo' : 'Iniciar Demo'}
          </button>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200">
              <div 
                className="h-full bg-vada-navy transition-all duration-500"
                style={{ width: step >= 0 ? `${(step / (steps.length - 1)) * 100}%` : '0%' }}
              ></div>
            </div>
            
            {steps.map((s, idx) => (
              <div key={s.id} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    idx <= step 
                      ? `bg-gradient-to-br ${s.color} text-white shadow-lg scale-110` 
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <s.Icon className="w-6 h-6" />
                </div>
                <div className={`mt-2 text-xs font-semibold text-center max-w-[80px] ${
                  idx <= step ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {s.title}
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[300px]">
            {step >= 0 ? (
              <div 
                key={step}
                className="animate-fadeIn"
              >
                {steps[step].content}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-gray-400 text-lg">
                Presiona "Iniciar Demo" para comenzar
              </div>
            )}
          </div>

          {/* Stats */}
          {step === steps.length - 1 && (
            <div className="mt-8 grid grid-cols-3 gap-4 animate-fadeIn">
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-3xl font-bold text-vada-navy">2min</div>
                <div className="text-sm text-gray-600">Tiempo total</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Precisión</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600">IA+Humano</div>
                <div className="text-sm text-gray-600">Validación</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
