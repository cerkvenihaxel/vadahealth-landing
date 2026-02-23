import Image from 'next/image';

interface VadaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function VadaLogo({ className = '', size = 'md' }: VadaLogoProps) {
  const sizeMap = {
    sm: { width: 80, height: 32 },
    md: { width: 120, height: 48 },
    lg: { width: 160, height: 64 }
  };

  const { width, height } = sizeMap[size];

  return (
    <div className={className}>
      <Image
        src="/assets/vada-logo.png"
        alt="VADA Health Argentina"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </div>
  );
} 