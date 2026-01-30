'use client';

import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D32F2F 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #D32F2F 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Shield className="w-10 h-10 text-primary" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Protect Your Investment Today
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Don&apos;t wait until it&apos;s too late. Get your vehicle protected with Sigma PPF
            and enjoy peace of mind with our 7-year warranty.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/e-warranty"
              className="btn-outline px-8 py-4 text-lg"
            >
              Register Warranty
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">7 Years</div>
              <div className="text-sm text-white/50">Warranty</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Premium</div>
              <div className="text-sm text-white/50">Quality</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Expert</div>
              <div className="text-sm text-white/50">Installation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
