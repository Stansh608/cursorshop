'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-black">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200"
            alt="About Us Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white">About Us</h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Welcome to StanTravels, your ultimate companion in exploring the world's most fascinating destinations. 
              Founded with a passion for adventure and cultural discovery, we strive to bring you authentic travel experiences, 
              expert tips, and inspiring stories from across the globe.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of dedicated travelers and writers works tirelessly to uncover hidden gems, showcase iconic landmarks, 
              and provide you with comprehensive guides that help make your travel dreams a reality. From the ancient wonders 
              of the world to bustling modern cities, we're here to inspire and guide your next adventure.
            </p>
            <p className="text-gray-600 mb-12">
              What sets us apart is our commitment to authentic storytelling and practical advice. We believe that travel 
              has the power to transform lives, bridge cultures, and create lasting memories. Through our articles, 
              photography, and travel guides, we aim to inspire you to step out of your comfort zone and explore 
              the incredible diversity our world has to offer.
            </p>

            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 mb-12">
              To inspire, inform, and empower travelers worldwide by providing authentic content, practical advice, 
              and meaningful insights that enhance the travel experience and promote cultural understanding.
            </p>

            <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Us</h2>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+254798602758" className="text-gray-600 hover:text-orange-500">+254 798 602 758</a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:stanleymunene56@gmail.com" className="text-gray-600 hover:text-orange-500">stanleymunene56@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 