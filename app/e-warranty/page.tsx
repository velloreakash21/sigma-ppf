import { Metadata } from 'next';
import { Shield, FileCheck, Clock, CheckCircle } from 'lucide-react';
import WarrantyForm from '@/components/forms/WarrantyForm';

export const metadata: Metadata = {
  title: 'E-Warranty Registration | Sigma PPF',
  description: 'Register your Sigma PPF warranty online. Protect your investment with our comprehensive 7-year warranty coverage on all premium paint protection films.',
  keywords: ['PPF warranty', 'warranty registration', 'paint protection film', 'Sigma PPF', '7 year warranty'],
};

const warrantyBenefits = [
  {
    icon: Shield,
    title: '7-Year Coverage',
    description: 'Comprehensive protection against yellowing, cracking, and peeling',
  },
  {
    icon: FileCheck,
    title: 'Easy Claims',
    description: 'Simple and hassle-free warranty claim process',
  },
  {
    icon: Clock,
    title: 'Quick Processing',
    description: 'Fast warranty registration and confirmation',
  },
  {
    icon: CheckCircle,
    title: 'Transferable',
    description: 'Warranty can be transferred to new vehicle owners',
  },
];

export default function EWarrantyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-dark to-dark" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-white/80 text-sm">Protect Your Investment</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              E-Warranty{' '}
              <span className="gradient-text">Registration</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Register your Sigma PPF warranty after installation to activate your comprehensive
              7-year protection coverage. Complete the form below with accurate details to ensure
              your warranty is properly documented.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Benefits */}
      <section className="py-12 bg-dark-50/50">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {warrantyBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-dark/50 border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Your Registration
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Fill in all required fields accurately. Make sure to have your Sigma Roll Unique Code
                ready - you can find it on the PPF packaging.
              </p>
            </div>

            {/* Warranty Form */}
            <WarrantyForm />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-dark-50/30">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* What's Covered */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">What&apos;s Covered</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Yellowing or discoloration of the film</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Cracking, peeling, or bubbling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Delamination from the painted surface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Self-healing function failure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Material defects in workmanship</span>
                  </li>
                </ul>
              </div>

              {/* Important Notes */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Important Notes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">1</span>
                    </div>
                    <span className="text-white/70">
                      Register within 30 days of installation for full coverage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">2</span>
                    </div>
                    <span className="text-white/70">
                      Keep your installation receipt for warranty claims
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">3</span>
                    </div>
                    <span className="text-white/70">
                      Professional installation by certified detailers required
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">4</span>
                    </div>
                    <span className="text-white/70">
                      Warranty is non-transferable without prior approval
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">5</span>
                    </div>
                    <span className="text-white/70">
                      Contact us immediately if you notice any issues
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
