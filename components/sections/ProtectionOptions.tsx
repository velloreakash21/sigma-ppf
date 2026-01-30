'use client';

import { Check } from 'lucide-react';

const protectionTypes = [
  {
    id: 'partial',
    title: 'Partial Body Protection',
    description: 'Protect high-impact areas most prone to damage',
    coverage: ['Front bumper', 'Hood (partial)', 'Side mirrors', 'Door edges', 'Door cups'],
    recommended: false,
    price: 'Starting from',
  },
  {
    id: 'full',
    title: 'Full Body Protection',
    description: 'Complete protection for your entire vehicle',
    coverage: ['Full hood', 'Full bumpers', 'Full fenders', 'Doors & panels', 'Roof & trunk', 'All high-impact areas'],
    recommended: true,
    price: 'Premium',
  },
];

export default function ProtectionOptions() {
  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Protection Coverage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Choose Your Level of Protection
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From targeted protection for high-impact areas to complete coverage,
            we offer solutions tailored to your needs.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {protectionTypes.map((option) => (
            <div
              key={option.id}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                option.recommended
                  ? 'bg-gradient-to-br from-primary/10 to-dark border-primary/30 shadow-lg shadow-primary/10'
                  : 'bg-dark border-white/10 hover:border-white/20'
              }`}
            >
              {/* Recommended Badge */}
              {option.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-white/60">{option.description}</p>
              </div>

              {/* Car Diagram Placeholder */}
              <div className="relative w-full aspect-video bg-dark-100 rounded-xl mb-8 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-2">🚗</div>
                  <p className="text-white/40 text-sm">
                    {option.id === 'partial' ? 'High-Impact Areas' : 'Full Coverage'}
                  </p>
                </div>
                {/* Highlight overlay */}
                <div
                  className={`absolute inset-0 ${
                    option.recommended
                      ? 'bg-gradient-to-t from-primary/10 to-transparent'
                      : 'bg-gradient-to-t from-white/5 to-transparent'
                  }`}
                />
              </div>

              {/* Coverage List */}
              <ul className="space-y-3 mb-8">
                {option.coverage.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        option.recommended ? 'bg-primary/20' : 'bg-white/10'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          option.recommended ? 'text-primary' : 'text-white/60'
                        }`}
                      />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  option.recommended
                    ? 'bg-primary hover:bg-primary-600 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
