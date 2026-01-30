'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-4xl">!</span>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-white/60 mb-8">
          We apologize for the inconvenience. Please try again or contact us if the problem persists.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Error ID for debugging */}
        {error.digest && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-white/30 text-xs font-mono">
              Error ID: {error.digest}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
