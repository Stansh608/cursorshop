import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  {
    name: "Paris",
    country: "France",
    description: "The City of Light, featuring iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1200"
  },
  // ... rest of the destinations ...
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section className="relative">
          <Carousel />
        </section>

        {/* Featured Destinations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Destination Card */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white group border border-transparent hover:border-orange-500 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/destinations/paris-banner.jpg"
                  alt="Paris"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Paris, France</h3>
                <p className="text-black mb-4">
                  Experience the city of love with its iconic landmarks and rich culture.
                </p>
                <Link
                  href="/destinations/paris"
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center group/link relative"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100"></span>
                  </span>
                  <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Destination Card */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white group border border-transparent hover:border-orange-500 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/destinations/tokyo-banner.jpg"
                  alt="Tokyo"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Tokyo, Japan</h3>
                <p className="text-black mb-4">
                  Discover the perfect blend of tradition and modern technology.
                </p>
                <Link
                  href="/destinations/tokyo"
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center group/link relative"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100"></span>
                  </span>
                  <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Destination Card */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white group border border-transparent hover:border-orange-500 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/destinations/new-york-banner.jpg"
                  alt="New York"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">New York, USA</h3>
                <p className="text-black mb-4">
                  Explore the city that never sleeps with its vibrant culture and skyline.
                </p>
                <Link
                  href="/destinations/new-york"
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center group/link relative"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100"></span>
                  </span>
                  <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Latest Travel Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  10 Hidden Gems in Southeast Asia
                </h3>
                <p className="text-black mb-4">
                  Discover lesser-known destinations that will take your breath away...
                </p>
                <div className="flex items-center text-sm text-orange-500">
                  <span>5 min read</span>
                  <span className="mx-2">•</span>
                  <span>Travel Tips</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  A Food Lover's Guide to Italian Cuisine
                </h3>
                <p className="text-black mb-4">
                  Explore the diverse flavors and culinary traditions of Italy...
                </p>
                <div className="flex items-center text-sm text-orange-500">
                  <span>7 min read</span>
                  <span className="mx-2">•</span>
                  <span>Food & Culture</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Get Travel Updates</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white">
              Subscribe to our newsletter and receive exclusive travel tips, hidden gems, and special offers!
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
