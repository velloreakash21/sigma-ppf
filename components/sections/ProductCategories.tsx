'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { assets } from '@/lib/assets';

const categories = [
  {
    id: 'ppf',
    title: 'Paint Protection Film',
    description: 'Premium PPF variants including Ultra Clear, Gloss Black, Matte, Satin Matte, and Colour Series.',
    image: assets.ppf.ultraClear[0],
    href: '/products',
    specs: ['195 Micron', '7-Year Warranty', 'Self-Healing'],
  },
  {
    id: 'window-films',
    title: 'Window Films',
    description: 'Sigma Nano Ceramic window films for superior heat rejection and UV protection.',
    image: assets.windowFilms[0],
    href: '/products/window-films',
    specs: ['Nano Ceramic', '99% UV Block', 'Heat Rejection'],
  },
  {
    id: 'precut',
    title: 'Precut Edition',
    description: 'Precision-cut PPF kits for easy DIY installation on interior and exterior surfaces.',
    image: assets.ppf.satinMatte[0],
    href: '/products/precut-edition',
    specs: ['DIY Friendly', 'Interior & Exterior', 'Precise Fit'],
  },
];

export default function ProductCategories() {
  return (
    <section className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Premium Protection Solutions
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Explore our comprehensive range of paint protection films and window tinting solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-dark-50 border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-dark-100 flex items-center justify-center">
                    <span className="text-white/40">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Specs Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
