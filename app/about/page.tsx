import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Award, Users, Target, Eye, CheckCircle, Sparkles, Droplets, Sun, Zap } from 'lucide-react';
import { features } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'About Us | Sigma PPF',
  description: 'Learn about Sigma PPF - Your trusted partner for premium paint protection film solutions in India. Discover our story, mission, and commitment to quality.',
};

const stats = [
  { value: '7', label: 'Year Warranty', suffix: '+' },
  { value: '195', label: 'Micron Thickness', suffix: '' },
  { value: '5', label: 'Layer Protection', suffix: '' },
  { value: '100', label: 'Happy Customers', suffix: '%' },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'We use only the highest quality TPU materials sourced from leading manufacturers.',
  },
  {
    icon: Award,
    title: '7-Year Warranty',
    description: 'Every installation comes with our comprehensive 7-year warranty for complete peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Self-Healing Technology',
    description: 'Our PPF features advanced self-healing properties that repair minor scratches with heat.',
  },
  {
    icon: Droplets,
    title: 'Hydrophobic Coating',
    description: 'Water and contaminants bead off effortlessly, making maintenance a breeze.',
  },
  {
    icon: Sun,
    title: 'UV Protection',
    description: 'Blocks harmful UV rays to prevent paint fading and maintain your vehicle\'s showroom finish.',
  },
  {
    icon: Zap,
    title: 'Expert Installation',
    description: 'Our certified installers ensure perfect application with attention to every detail.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Our Story</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Protecting Your Investment,
              <br />
              <span className="gradient-text">One Vehicle at a Time</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Sigma PPF was born from a passion for automotive excellence and a commitment
              to delivering the best paint protection solutions in India.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark-50 border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Built on Passion, Driven by Excellence
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Sigma PPF started with a simple vision: to provide car enthusiasts and everyday
                  drivers with the highest quality paint protection available. Based in Hyderabad,
                  India, we have grown to become a trusted name in automotive protection.
                </p>
                <p>
                  Our team consists of passionate automotive professionals who understand that
                  your vehicle is more than just transportation - it is an investment, a statement,
                  and often a source of pride. That is why we are committed to delivering products
                  that not only protect but also enhance your driving experience.
                </p>
                <p>
                  Every roll of Sigma PPF is manufactured using cutting-edge technology and
                  premium materials, ensuring that your vehicle receives the protection it deserves.
                </p>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-dark-100 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Since Day One</h3>
                  <p className="text-white/60">Committed to Quality & Excellence</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 md:p-10 bg-dark rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To provide every vehicle owner with access to premium paint protection solutions
                that preserve the beauty and value of their investment. We strive to deliver
                exceptional quality, backed by industry-leading warranties and outstanding
                customer service.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 md:p-10 bg-dark rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be India's most trusted brand in automotive paint protection, setting new
                standards for quality, innovation, and customer satisfaction. We envision a
                future where every vehicle on the road is protected by Sigma PPF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              The Sigma PPF Advantage
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We combine premium materials, advanced technology, and expert craftsmanship
              to deliver unparalleled protection for your vehicle.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-dark-50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-dark to-dark-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Vehicle?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Get in touch with us today to learn more about our products and find
            the perfect protection solution for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="btn-primary px-8 py-4 text-lg">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-outline px-8 py-4 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
