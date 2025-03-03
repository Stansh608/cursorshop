"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    title: "Santorini, Greece",
    description: "Experience the stunning white-washed buildings and breathtaking sunsets over the Aegean Sea. Perfect for romantic getaways and photography enthusiasts.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80"
  },
  {
    id: 2,
    title: "Machu Picchu, Peru",
    description: "Discover the ancient Incan citadel set high in the Andes Mountains. A UNESCO World Heritage site that will leave you in awe.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80"
  },
  {
    id: 3,
    title: "Bali, Indonesia",
    description: "Explore tropical paradise with pristine beaches, ancient temples, and lush rice terraces. A perfect blend of culture and natural beauty.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {destinations.map((destination, index) => (
        <div
          key={destination.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
              <h2 className="text-3xl font-bold mb-2">{destination.title}</h2>
              <p className="text-lg">{destination.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 rounded-full p-3 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 rounded-full p-3 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-black/50 hover:bg-black/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 