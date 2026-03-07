import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center space-y-8">
        <div className="text-7xl md:text-8xl mb-6 animate-bounce">🚀</div>

        <h1 className="text-5xl md:text-6xl font-bold">Page Not Found</h1>

        <p className="">
          The page you are looking for may have been moved, renamed, or does not
          exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 transition underline-offset-1"
        >
          Back to Home
          <ArrowLeft className="h-4 w-4 animate-arrow-left" />
        </Link>
      </div>
    </div>
  );
}
