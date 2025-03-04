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

        {/* Contact Us Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-1">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  Have questions about your next adventure? We're here to help! Reach out to us through any of the following channels.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">+254 798 602 758</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">stanleymunene56@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-1">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:shadow-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Send Message
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
