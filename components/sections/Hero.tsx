'use client';

import Link from 'next/link';
import { ChevronDown, Play } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
            poster="/assets/ppf/ultra-clear/img1.jpg"
          >
            <source src="/assets/precut/video1.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/assets/ppf/ultra-clear/img1.jpg"
            alt="Sigma PPF"
            className="w-full h-full object-cover"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white/80 text-sm">Premium Paint Protection Film</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            THE <span className="gradient-text">INVISIBLE ARMOUR</span>
            <br />
            YOUR CAR DESERVES
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Preserve the showroom finish. Drive with confidence.
            <br className="hidden md:block" />
            7-year warranty on all premium PPF products.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Link href="/products" className="btn-primary px-8 py-4 text-lg">
              Explore Products
            </Link>
            <Link href="/e-warranty" className="btn-outline px-8 py-4 text-lg">
              Register Warranty
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up delay-300">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">7</div>
              <div className="text-white/50 text-sm mt-1">Year Warranty</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">195</div>
              <div className="text-white/50 text-sm mt-1">Micron Thickness</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">5</div>
              <div className="text-white/50 text-sm mt-1">Layer Protection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
