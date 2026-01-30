import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Check } from 'lucide-react';
import { products, assets, ppfLayers } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Products | Sigma PPF',
  description: 'Explore our premium paint protection film variants - Ultra Clear, Gloss Black, Matte, Satin Matte, Colour Series, Window Films, and Precut Edition.',
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Premium Protection for Every Need
            </h1>
            <p className="text-lg text-white/60">
              From crystal-clear protection to bold color transformations, discover
              our comprehensive range of paint protection films backed by a 7-year warranty.
            </p>
          </div>
        </div>
      </section>

      {/* PPF Variants Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">PPF Variants</h2>
              <p className="text-white/60 mt-2">Premium paint protection film in multiple finishes</p>
            </div>
            <div className="warranty-badge hidden md:flex">
              <Shield className="w-5 h-5" />
              <span>7-Year Warranty</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.ppfVariants.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group product-card overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {product.images[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-100 flex items-center justify-center">
                      <span className="text-white/40">{product.name}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70">
                      {product.specs.exterior}
                    </span>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary">
                      {product.warranty} Warranty
                    </span>
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Technical Specifications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                5-Layer Protection Technology
              </h2>
              <p className="text-white/60 mb-8">
                Every Sigma PPF product features our advanced 5-layer construction,
                engineered for maximum durability and performance.
              </p>

              {/* Features List */}
              <ul className="space-y-4">
                {[
                  'Self-healing technology - minor scratches disappear',
                  'Hydrophobic top coat for easy cleaning',
                  '99% UV protection prevents paint fading',
                  'Impact resistant TPU film layer',
                  'Pressure-sensitive adhesive for secure bonding',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Layer Diagram */}
            <div className="bg-dark rounded-2xl p-8 border border-white/5">
              <h4 className="text-lg font-semibold text-white mb-6 text-center">
                Film Construction
              </h4>
              <div className="space-y-3">
                {ppfLayers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className="rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ backgroundColor: layer.color }}
                  >
                    <div className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold text-white">
                          {layer.name}
                        </span>
                        <p className="text-white/80 text-xs mt-1">{layer.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Window Films Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              {products.windowFilms.images[0] ? (
                <img
                  src={products.windowFilms.images[0]}
                  alt={products.windowFilms.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-dark-100 flex items-center justify-center">
                  <span className="text-white/40">Window Films</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Window Films
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                {products.windowFilms.name}
              </h2>
              <p className="text-white/60 mb-8">
                {products.windowFilms.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {products.windowFilms.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/products/window-films"
                className="btn-primary inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Precut Edition Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              DIY Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              {products.precutEdition.name}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {products.precutEdition.description}
            </p>
          </div>

          {/* Video Preview */}
          {products.precutEdition.videos[0] && (
            <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={products.precutEdition.videos[0]} type="video/mp4" />
              </video>
            </div>
          )}

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {products.precutEdition.categories.map((category) => (
              <div
                key={category}
                className="p-6 bg-dark rounded-xl border border-white/5 text-center"
              >
                <h4 className="text-lg font-semibold text-white">{category}</h4>
                <p className="text-white/60 text-sm mt-2">Precision-cut kits</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products/precut-edition"
              className="btn-outline inline-flex items-center gap-2"
            >
              Explore Precut Edition
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Vehicle?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Contact us today for a free quote or register your warranty after installation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link href="/e-warranty" className="btn-outline">
              Register Warranty
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
