'use client';

import { ImageIcon } from 'lucide-react';

interface PlaceholderProps {
  label?: string;
  aspect?: '1:1' | '4:3' | '16:9' | '21:9';
  className?: string;
  icon?: boolean;
}

export default function Placeholder({
  label = 'Image',
  aspect = '16:9',
  className = '',
  icon = true,
}: PlaceholderProps) {
  const aspectRatios = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-video',
    '21:9': 'aspect-[21/9]',
  };

  return (
    <div
      className={`bg-dark-50 rounded-lg flex flex-col items-center justify-center ${aspectRatios[aspect]} ${className}`}
    >
      {icon && (
        <ImageIcon className="w-12 h-12 text-white/20 mb-2" />
      )}
      <span className="text-white/40 text-sm font-medium">{label}</span>
    </div>
  );
}

interface OptimizedImageProps {
  src?: string;
  alt: string;
  className?: string;
  aspect?: '1:1' | '4:3' | '16:9' | '21:9';
  placeholder?: string;
  fill?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  aspect,
  placeholder = 'No Image',
  fill = false,
}: OptimizedImageProps) {
  if (!src) {
    return <Placeholder label={placeholder} aspect={aspect} className={className} />;
  }

  const aspectRatios = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-video',
    '21:9': 'aspect-[21/9]',
  };

  const aspectClass = aspect ? aspectRatios[aspect] : '';

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${aspectClass} ${className}`}
      loading="lazy"
    />
  );
}
