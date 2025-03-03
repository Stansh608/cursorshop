"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-orange-500' : 'text-white'}`}>StanTravels</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className={`${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Home
              </Link>
              <Link href="/destinations" className={`${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Destinations
              </Link>
              <Link href="/blog" className={`${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Blog
              </Link>
              <Link href="/about" className={`${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                About
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} focus:outline-none transition-colors`}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`sm:hidden ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-90'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className={`${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} block px-3 py-2 rounded-md text-base font-medium transition-colors`}>
              Home
            </Link>
            <Link href="/destinations" className={`${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} block px-3 py-2 rounded-md text-base font-medium transition-colors`}>
              Destinations
            </Link>
            <Link href="/blog" className={`${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} block px-3 py-2 rounded-md text-base font-medium transition-colors`}>
              Blog
            </Link>
            <Link href="/about" className={`${isScrolled ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-200'} block px-3 py-2 rounded-md text-base font-medium transition-colors`}>
              About
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 