interface VadaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function VadaLogo({ className = '', size = 'md' }: VadaLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Fondo circular con gradiente */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f9ff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Círculo de fondo */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#bgGradient)"
          stroke="#ffffff"
          strokeWidth="2"
        />

        {/* Pulso de electrocardiograma de fondo */}
        <path
          d="M15 55 L25 55 L30 35 L35 75 L40 25 L45 65 L50 45 L55 55 L85 55"
          stroke="#10b981"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
          filter="url(#glow)"
        />

        {/* Letra V principal */}
        <path
          d="M25 25 L45 70 L50 58 L55 70 L75 25"
          stroke="url(#vGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        {/* Pulso de electrocardiograma integrado en la V */}
        <path
          d="M25 25 L35 25 L40 15 L45 35 L50 20 L55 30 L60 25 L75 25"
          stroke="#10b981"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        {/* Punto de pulso activo */}
        <circle
          cx="50"
          cy="20"
          r="2"
          fill="#10b981"
          filter="url(#glow)"
        >
          <animate
            attributeName="r"
            values="2;4;2"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Pequeños puntos decorativos */}
        <circle cx="30" cy="35" r="1" fill="#10b981" opacity="0.6" />
        <circle cx="70" cy="35" r="1" fill="#10b981" opacity="0.6" />
      </svg>
    </div>
  );
} 