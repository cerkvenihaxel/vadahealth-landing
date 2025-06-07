'use client';

import { useState } from 'react';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'image' | 'hero' | 'service';
  className?: string;
}

export default function SkeletonLoader({ type = 'card', className = '' }: SkeletonLoaderProps) {
  const baseClass = "animate-pulse bg-gray-200 rounded";
  
  switch (type) {
    case 'hero':
      return (
        <div className={`space-y-6 ${className}`}>
          <div className={`${baseClass} h-8 w-3/4 mx-auto`}></div>
          <div className={`${baseClass} h-6 w-1/2 mx-auto`}></div>
          <div className={`${baseClass} h-12 w-32 mx-auto rounded-xl`}></div>
        </div>
      );
    
    case 'service':
      return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${className}`}>
          <div className="space-y-4">
            <div className={`${baseClass} h-16 w-16 rounded-2xl`}></div>
            <div className={`${baseClass} h-8 w-3/4`}></div>
            <div className={`${baseClass} h-6 w-full`}></div>
            <div className={`${baseClass} h-6 w-2/3`}></div>
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`${baseClass} h-4 w-5/6`}></div>
              ))}
            </div>
          </div>
          <div className={`${baseClass} h-64 w-full rounded-2xl`}></div>
        </div>
      );
    
    case 'card':
      return (
        <div className={`space-y-4 p-6 ${className}`}>
          <div className={`${baseClass} h-6 w-3/4`}></div>
          <div className={`${baseClass} h-4 w-full`}></div>
          <div className={`${baseClass} h-4 w-2/3`}></div>
        </div>
      );
    
    case 'image':
      return (
        <div className={`${baseClass} aspect-video w-full ${className}`}></div>
      );
    
    case 'text':
      return (
        <div className={`space-y-2 ${className}`}>
          <div className={`${baseClass} h-4 w-full`}></div>
          <div className={`${baseClass} h-4 w-4/5`}></div>
          <div className={`${baseClass} h-4 w-3/5`}></div>
        </div>
      );
    
    default:
      return <div className={`${baseClass} ${className}`}></div>;
  }
}

// Componente de imagen con loading state
export function ImageWithSkeleton({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  skeletonClassName = '' 
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  skeletonClassName?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative">
      {isLoading && !error && (
        <SkeletonLoader 
          type="image" 
          className={`absolute inset-0 ${skeletonClassName}`} 
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
      />
      {error && (
        <div className="flex items-center justify-center bg-gray-100 text-gray-400 aspect-video">
          <span>Error cargando imagen</span>
        </div>
      )}
    </div>
  );
} 