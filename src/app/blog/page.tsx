'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

const sevenWonders = [
  {
    name: "Great Wall of China",
    location: "China",
    description: "Built over 2,000 years ago, the Great Wall stretches over 13,000 miles and stands as a testament to ancient Chinese engineering and determination.",
    image: "https://images.unsplash.com/photo-1549893072-4bc678117f45?q=80&w=1200"
  },
  {
    name: "Petra",
    location: "Jordan",
    description: "The rose-colored city carved into rock faces, Petra was the capital of the Nabataean Empire and features stunning architectural achievements.",
    image: "https://images.unsplash.com/photo-1501232060322-aa87215ab531?q=80&w=1200"
  },
  {
    name: "Christ the Redeemer",
    location: "Rio de Janeiro, Brazil",
    description: "Standing 98 feet tall atop Corcovado Mountain, this Art Deco statue of Jesus Christ has become an iconic symbol of both Rio and Brazil.",
    image: "https://images.unsplash.com/photo-1619546952812-520e98064a52?q=80&w=1200"
  },
  {
    name: "Machu Picchu",
    location: "Peru",
    description: "This 15th-century Inca citadel, perched high in the Andes Mountains, showcases incredible ancient architecture and engineering.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200"
  },
  {
    name: "Chichen Itza",
    location: "Mexico",
    description: "This pre-Columbian city built by the Maya civilization features the iconic El Castillo pyramid and other remarkable structures.",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1200"
  },
  {
    name: "Colosseum",
    location: "Rome, Italy",
    description: "The largest ancient amphitheater ever built, the Colosseum stands as a symbol of Imperial Rome's power and engineering prowess.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200"
  },
  {
    name: "Taj Mahal",
    location: "Agra, India",
    description: "This ivory-white marble mausoleum, built by Emperor Shah Jahan in memory of his wife, is considered one of the finest examples of Mughal architecture.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200"
  }
];

const featuredCities = [
  {
    name: "Kyoto",
    country: "Japan",
    description: "Discover the heart of traditional Japan in Kyoto, where ancient temples and serene gardens tell stories of centuries past. Walk through the enchanting bamboo forests of Arashiyama, witness the golden splendor of Kinkaku-ji, and experience the timeless ritual of tea ceremonies. The city's narrow streets lined with wooden machiya houses transport you to an era of geishas and samurai, while seasonal changes paint the city in ever-changing hues of cherry blossoms and autumn leaves.",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200",
      "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?q=80&w=1200",
      "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=1200"
    ]
  },
  {
    name: "Barcelona",
    country: "Spain",
    description: "Barcelona captivates with its unique blend of architectural wonders and Mediterranean charm. Gaudí's masterpieces dot the cityscape, from the surreal Park Güell to the awe-inspiring Sagrada Familia. Stroll down Las Ramblas amid street performers and local artists, or lose yourself in the Gothic Quarter's labyrinthine streets. The city's culinary scene bursts with flavor in its tapas bars and local markets, while the nearby beaches offer a perfect escape for sun-seekers.",
    images: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1200",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=1200",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=1200"
    ]
  },
  {
    name: "Istanbul",
    country: "Turkey",
    description: "Where East meets West, Istanbul bridges continents and cultures in spectacular fashion. The magnificent Hagia Sophia and Blue Mosque dominate the skyline of the historic peninsula, while the bustling Grand Bazaar enchants with its maze of shops and spices. Take a cruise along the Bosphorus to witness the city's stunning waterfront palaces, or indulge in Turkish cuisine at traditional meyhanes. The city's rich history as Constantinople and Byzantium echoes through its ancient walls and vibrant modern culture.",
    images: [
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200",
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1200",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200"
    ]
  }
];

function CityCarousel({ images, name }: { images: string[], name: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`${name} ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-black">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200"
            alt="StanTravels Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white mb-4">StanTravels</h1>
              <p className="text-xl text-orange-400">Discover the world's most fascinating destinations</p>
            </div>
          </div>
        </section>

        {/* Seven Wonders Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Seven Wonders of the World</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sevenWonders.map((wonder) => (
              <div key={wonder.name} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:border-orange-500 transition-colors duration-300">
                <div className="relative h-64">
                  <Image
                    src={wonder.image}
                    alt={wonder.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{wonder.name}</h3>
                  <p className="text-orange-500 text-sm mb-2">{wonder.location}</p>
                  <p className="text-gray-600">{wonder.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Cities Gallery */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Cities</h2>
          <div className="grid grid-cols-1 gap-16">
            {featuredCities.map((city) => (
              <div key={city.name} className="space-y-6">
                <CityCarousel images={city.images} name={city.name} />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {city.name}, <span className="text-orange-500">{city.country}</span>
                  </h3>
                  <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {city.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
              <p className="mb-8 max-w-2xl mx-auto text-blue-100">
                Subscribe to our newsletter to receive the latest travel stories, tips, and destination guides from StanTravels!
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 