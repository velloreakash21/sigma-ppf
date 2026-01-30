'use client';

import { ppfLayers } from '@/lib/assets';

export default function LayerDiagram() {
  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Advanced Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              5-Layer Protection System
            </h2>
            <p className="text-white/60 mb-8">
              Our premium PPF features a sophisticated 5-layer construction, engineered
              to provide maximum protection while maintaining optical clarity and
              self-healing properties.
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-dark rounded-xl border border-white/5">
                <div className="text-2xl font-bold gradient-text mb-1">195</div>
                <div className="text-white/60 text-sm">Micron Exterior</div>
              </div>
              <div className="p-4 bg-dark rounded-xl border border-white/5">
                <div className="text-2xl font-bold gradient-text mb-1">140</div>
                <div className="text-white/60 text-sm">Micron Interior</div>
              </div>
              <div className="p-4 bg-dark rounded-xl border border-white/5">
                <div className="text-2xl font-bold gradient-text mb-1">7</div>
                <div className="text-white/60 text-sm">Year Warranty</div>
              </div>
              <div className="p-4 bg-dark rounded-xl border border-white/5">
                <div className="text-2xl font-bold gradient-text mb-1">99%</div>
                <div className="text-white/60 text-sm">UV Protection</div>
              </div>
            </div>
          </div>

          {/* Layer Diagram */}
          <div className="relative">
            <div className="bg-dark rounded-2xl p-8 border border-white/5">
              <h4 className="text-lg font-semibold text-white mb-6 text-center">
                Film Construction
              </h4>

              {/* Layers */}
              <div className="space-y-3">
                {ppfLayers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ backgroundColor: layer.color }}
                  >
                    <div className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold text-white">
                          Layer {index + 1}: {layer.name}
                        </span>
                        <p className="text-white/80 text-xs mt-1">{layer.description}</p>
                      </div>
                      <div className="text-white/60 text-xs font-mono">
                        {index === 0 ? 'TOP' : index === 4 ? 'BOTTOM' : ''}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-4 text-white/40 text-sm">
                  <span>Exterior</span>
                  <div className="h-px w-16 bg-white/20" />
                  <span>↓</span>
                  <div className="h-px w-16 bg-white/20" />
                  <span>Paint</span>
                </div>
              </div>
            </div>

            {/* Warranty Badge */}
            <div className="absolute -top-4 -right-4 warranty-badge animate-pulse-glow">
              <span className="text-lg font-bold">7</span>
              <span className="text-sm">Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
