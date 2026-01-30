'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '@/lib/assets';

const footerLinks = {
  products: [
    { name: 'Ultra Clear PPF', href: '/products/ultra-clear' },
    { name: 'Gloss Black PPF', href: '/products/gloss-black' },
    { name: 'Matte PPF', href: '/products/matte' },
    { name: 'Satin Matte PPF', href: '/products/satin-matte' },
    { name: 'Colour Series', href: '/products/colour-series' },
    { name: 'Window Films', href: '/products/window-films' },
    { name: 'Precut Edition', href: '/products/precut-edition' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'E-Warranty', href: '/e-warranty' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-50 border-t border-white/5">
      <div className="container-custom py-16 md:py-20 lg:py-24 px-4 md:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/assets/brand/logo-white.png"
                alt="Sigma PPF Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-wider">SIGMA PPF</span>
                <span className="text-white/50 text-xs tracking-widest">PREMIUM PROTECTION</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              The invisible armour your car deserves. Premium paint protection film solutions for automotive enthusiasts.
            </p>
            <div className="flex gap-4">
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white/60 group-hover:text-primary" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-white/60 group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                  {contactInfo.instagram}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Sigma PPF. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Premium Paint Protection Film
          </p>
        </div>
      </div>
    </footer>
  );
}
