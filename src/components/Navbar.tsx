"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              StanTravels
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/" 
                className={`${
                  isActive('/') 
                    ? 'text-orange-500 font-bold' 
                    : isScrolled 
                      ? 'text-black hover:text-orange-500' 
                      : 'text-white hover:text-orange-200'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors relative group`}
              >
                <span className="relative">
                  Home
                  <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </span>
              </Link>
              <Link 
                href="/destinations" 
                className={`${
                  isActive('/destinations')
                    ? 'text-orange-500 font-bold'
                    : isScrolled
                      ? 'text-black hover:text-orange-500'
                      : 'text-white hover:text-orange-200'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors relative group`}
              >
                <span className="relative">
                  Destinations
                  <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </span>
              </Link>
              <Link 
                href="/blog" 
                className={`${
                  isActive('/blog')
                    ? 'text-orange-500 font-bold'
                    : isScrolled
                      ? 'text-black hover:text-orange-500'
                      : 'text-white hover:text-orange-200'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors relative group`}
              >
                <span className="relative">
                  Blog
                  <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </span>
              </Link>
              <Link 
                href="/about" 
                className={`${
                  isActive('/about')
                    ? 'text-orange-500 font-bold'
                    : isScrolled
                      ? 'text-black hover:text-orange-500'
                      : 'text-white hover:text-orange-200'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors relative group`}
              >
                <span className="relative">
                  About
                  <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </span>
              </Link>
              <Link 
                href="/#contact" 
                className={`${
                  isActive('/contact')
                    ? 'text-orange-500 font-bold'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } px-4 py-2 rounded-md text-sm font-medium transition-colors relative group`}
              >
                <span className="relative">
                  Contact
                  <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } inline-flex items-center justify-center p-2 rounded-md hover:text-orange-500 focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`sm:hidden ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-90'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`${
                isActive('/')
                  ? 'text-orange-500 font-bold'
                  : isScrolled
                    ? 'text-black hover:text-orange-500'
                    : 'text-white hover:text-orange-200'
              } block px-3 py-2 rounded-md text-base font-medium transition-colors relative group`}
            >
              <span className="relative">
                Home
                <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link 
              href="/destinations" 
              className={`${
                isActive('/destinations')
                  ? 'text-orange-500 font-bold'
                  : isScrolled
                    ? 'text-black hover:text-orange-500'
                    : 'text-white hover:text-orange-200'
              } block px-3 py-2 rounded-md text-base font-medium transition-colors relative group`}
            >
              <span className="relative">
                Destinations
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link 
              href="/blog" 
              className={`${
                isActive('/blog')
                  ? 'text-orange-500 font-bold'
                  : isScrolled
                    ? 'text-black hover:text-orange-500'
                    : 'text-white hover:text-orange-200'
              } block px-3 py-2 rounded-md text-base font-medium transition-colors relative group`}
            >
              <span className="relative">
                Blog
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link 
              href="/about" 
              className={`${
                isActive('/about')
                  ? 'text-orange-500 font-bold'
                  : isScrolled
                    ? 'text-black hover:text-orange-500'
                    : 'text-white hover:text-orange-200'
              } block px-3 py-2 rounded-md text-base font-medium transition-colors relative group`}
            >
              <span className="relative">
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
            <Link 
              href="/#contact" 
              className={`${
                isActive('/contact')
                  ? 'text-orange-500 font-bold'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } block px-3 py-2 rounded-md text-base font-medium transition-colors relative group`}
            >
              <span className="relative">
                Contact
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 