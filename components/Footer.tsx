'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-upepo-midnight-light border-t border-upepo-wind/20 py-6">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center space-x-2 mb-2">
              <img src="/logo.jpg" alt="Upepo Ecosystem" className="w-8 h-8 object-contain rounded-full" />
              <span className="text-lg font-bold text-upepo-text">Upepo Ecosystem</span>
            </Link>
            <p className="text-upepo-text-muted text-sm">
              © {currentYear} Built with intention.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/story" className="text-upepo-text-muted hover:text-upepo-wind transition-colors">
              Story
            </Link>
            <Link href="/ecosystem" className="text-upepo-text-muted hover:text-upepo-wind transition-colors">
              Ecosystem
            </Link>
            <a href="mailto:upepoecosystem@gmail.com" className="text-upepo-text-muted hover:text-upepo-wind transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
