'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { products } from '@/lib/assets';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'All Products', href: '/products' },
      { name: 'Ultra Clear PPF', href: '/products/ultra-clear' },
      { name: 'Gloss Black PPF', href: '/products/gloss-black' },
      { name: 'Matte PPF', href: '/products/matte' },
      { name: 'Satin Matte PPF', href: '/products/satin-matte' },
      { name: 'Colour Series PPF', href: '/products/colour-series' },
      { name: 'Window Films', href: '/products/window-films' },
      { name: 'Precut Edition', href: '/products/precut-edition' },
    ],
  },
  { name: 'E-Warranty', href: '/e-warranty' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/brand/logo-white.png"
              alt="Sigma PPF Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wider">SIGMA PPF</span>
              <span className="text-white/50 text-xs tracking-widest">PREMIUM PROTECTION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-white/80 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 w-56 pt-2 transition-all duration-200 ${
                      productsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="bg-dark-50 rounded-xl border border-white/10 shadow-xl shadow-black/30 overflow-hidden">
                      {item.dropdown.map((subItem, idx) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors ${
                            idx === 0 ? 'border-b border-white/10' : ''
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}

            {/* CTA Button */}
            <Link
              href="/e-warranty"
              className="btn-primary text-sm"
            >
              Register Warranty
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      productsOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 border-l border-white/10 ml-4 mt-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-white/60 hover:text-white transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}

            <Link
              href="/e-warranty"
              className="btn-primary text-center mt-4 mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register Warranty
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
