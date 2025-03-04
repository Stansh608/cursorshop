'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/data/destinations';
import { useEffect, useState } from 'react';

interface DestinationContentProps {
  destination: Destination;
}

export default function DestinationContent({ destination }: DestinationContentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex-1 bg-white">
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={destination.heroImage}
            alt={destination.name}
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name}, {destination.country}</h1>
            <p className="text-xl mb-4">{destination.tagline}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8 group/link"
        >
          <span className="inline-block transition-transform duration-200 group-hover/link:-translate-x-1 mr-1">←</span>
          Back to Destinations
        </Link>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Overview</h2>
          <p className="text-gray-700 mb-4">
            {destination.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-black">Best Time to Visit</h3>
              <p className="text-gray-700">{destination.bestTime}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-black">Language</h3>
              <p className="text-gray-700">{destination.language}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-black">Currency</h3>
              <p className="text-gray-700">{destination.currency}</p>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Must-Visit Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.attractions.map((attraction, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-orange-500 transition-all duration-300">
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-black">{attraction.name}</h3>
                  <p className="text-gray-700">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Travel Tips</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <ul className="space-y-4">
              {destination.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p className="text-gray-700">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 