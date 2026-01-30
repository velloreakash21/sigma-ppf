'use client';

import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', hover = true, children, ...props }, ref) => {
    const variants = {
      default: 'bg-dark-50 border border-white/5',
      glass: 'glass-card',
      gradient: 'bg-gradient-to-br from-dark-50 to-dark border border-white/5',
    };

    const hoverStyles = hover
      ? 'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300'
      : '';

    return (
      <div
        ref={ref}
        className={`rounded-xl overflow-hidden ${variants[variant]} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = ({ className = '', children }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardContent = ({ className = '', children }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

export const CardImage = ({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`relative aspect-video overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
);

export default Card;
