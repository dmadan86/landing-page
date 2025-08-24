// components/ui/fallback-image.tsx
"use client";

import { useState } from 'react';

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export default function FallbackImage({
  src,
  alt,
  className = '',
  fallbackText
}: FallbackImageProps) {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <span className="text-gray-500 text-center p-4">{fallbackText || alt}</span>
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
    />
  );
}