import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-white/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            View Products
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            Need help? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
