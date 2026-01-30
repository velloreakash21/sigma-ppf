import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Shield } from 'lucide-react';
import { products, ppfLayers } from '@/lib/assets';

// Define all valid categories
const categoryData: Record<string, {
  name: string;
  description: string;
  features: string[];
  specs?: { exterior: string; interior: string };
  warranty?: string;
  images: string[];
  videos?: string[];
}> = {
  'ultra-clear': products.ppfVariants.find(p => p.id === 'ultra-clear')!,
  'gloss-black': products.ppfVariants.find(p => p.id === 'gloss-black')!,
  'matte': products.ppfVariants.find(p => p.id === 'matte')!,
  'satin-matte': products.ppfVariants.find(p => p.id === 'satin-matte')!,
  'colour-series': products.ppfVariants.find(p => p.id === 'colour-series')!,
  'window-films': {
    name: products.windowFilms.name,
    description: products.windowFilms.description,
    features: products.windowFilms.features,
    images: products.windowFilms.images,
  },
  'precut-edition': {
    name: products.precutEdition.name,
    description: products.precutEdition.description,
    features: products.precutEdition.categories.map(c => `${c} PPF Kits`),
    images: [],
    videos: products.precutEdition.videos,
  },
};

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const product = categoryData[category];

  if (!product) {
    return { title: 'Product Not Found | Sigma PPF' };
  }

  return {
    title: `${product.name} | Sigma PPF`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }));
}

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params;
  const product = categoryData[category];

  if (!product) {
    notFound();
  }

  const isPPF = ['ultra-clear', 'gloss-black', 'matte', 'satin-matte', 'colour-series'].includes(category);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-dark-50 py-4 border-b border-white/5">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-dark-100">
                {product.videos && product.videos[0] ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={product.videos[0]} type="video/mp4" />
                  </video>
                ) : product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/40">{product.name}</span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden bg-dark-100 border border-white/10"
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              {isPPF && (
                <div className="warranty-badge mb-6">
                  <Shield className="w-5 h-5" />
                  <span>7-Year Warranty</span>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-white/60 mb-8">
                {product.description}
              </p>

              {/* Specs */}
              {product.specs && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-dark rounded-xl border border-white/5">
                    <div className="text-sm text-white/60 mb-1">Exterior Thickness</div>
                    <div className="text-xl font-bold text-white">{product.specs.exterior}</div>
                  </div>
                  <div className="p-4 bg-dark rounded-xl border border-white/5">
                    <div className="text-sm text-white/60 mb-1">Interior Thickness</div>
                    <div className="text-xl font-bold text-white">{product.specs.interior}</div>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary flex-1 text-center">
                  Get a Quote
                </Link>
                <Link href="/e-warranty" className="btn-outline flex-1 text-center">
                  Register Warranty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layer Diagram for PPF Products */}
      {isPPF && (
        <section className="section-padding bg-dark">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  Technology
                </span>
                <h2 className="text-3xl font-bold text-white mt-4 mb-6">
                  5-Layer Protection System
                </h2>
                <p className="text-white/60 mb-8">
                  Our advanced multi-layer construction provides comprehensive protection
                  while maintaining optical clarity and self-healing capabilities.
                </p>

                <ul className="space-y-3">
                  {[
                    'Self-healing top coat repairs minor scratches',
                    'Hydrophobic surface repels water and contaminants',
                    '99% UV protection prevents paint fading',
                    'Impact-resistant TPU absorbs road debris damage',
                    'Premium adhesive ensures secure, bubble-free installation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-50 rounded-2xl p-8 border border-white/5">
                <h4 className="text-lg font-semibold text-white mb-6 text-center">
                  Film Construction
                </h4>
                <div className="space-y-3">
                  {ppfLayers.map((layer) => (
                    <div
                      key={layer.name}
                      className="rounded-xl"
                      style={{ backgroundColor: layer.color }}
                    >
                      <div className="px-6 py-4">
                        <span className="text-sm font-bold text-white">{layer.name}</span>
                        <p className="text-white/80 text-xs mt-1">{layer.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* More Images Gallery */}
      {product.images.length > 4 && (
        <section className="section-padding bg-dark-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-white mb-8">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden bg-dark-100"
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Other Products</h2>
            <Link
              href="/products"
              className="text-primary hover:text-primary-light transition-colors flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.ppfVariants
              .filter((p) => p.id !== category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group product-card"
                >
                  <div className="aspect-video overflow-hidden">
                    {relatedProduct.images[0] ? (
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-dark-100 flex items-center justify-center">
                        <span className="text-white/40">{relatedProduct.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
