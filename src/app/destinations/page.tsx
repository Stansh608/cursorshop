'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Destination data
const popularDestinations = [
  {
    name: "Santorini",
    country: "Greece",
    description: "A stunning volcanic island known for its white-washed buildings, blue-domed churches, and spectacular sunsets over the Aegean Sea. Experience luxurious clifftop hotels, pristine beaches, and world-class Mediterranean cuisine.",
    images: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200",
      "https://images.unsplash.com/photo-1571406384350-d2cdb3607de4?q=80&w=1200"
    ]
  },
  {
    name: "Bali",
    country: "Indonesia",
    description: "An island paradise featuring lush rainforests, terraced rice fields, ancient temples, and pristine beaches. Immerse yourself in rich cultural experiences, wellness retreats, and vibrant local markets.",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1200",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1200"
    ]
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    description: "A majestic mountain range offering world-class skiing, hiking trails, and picturesque villages. Experience breathtaking panoramic views, luxury chalets, and authentic Alpine culture.",
    images: [
      "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?q=80&w=1200",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1200",
      "https://images.unsplash.com/photo-1520235713369-76f70e6f9488?q=80&w=1200"
    ]
  }
];

const summerDestinations = [
  {
    name: "Amalfi Coast",
    country: "Italy",
    description: "Dramatic coastline featuring colorful villages, Mediterranean beaches, and historic sites. Perfect for summer holidays with excellent cuisine and boat tours.",
    images: [
      "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?q=80&w=1200",
      "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1200"
    ]
  },
  {
    name: "Maldives",
    country: "Maldives",
    description: "Tropical paradise with overwater bungalows, crystal-clear waters, and vibrant marine life. Ideal for luxury summer escapes and water activities.",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200"
    ]
  }
];

const winterDestinations = [
  {
    name: "Hokkaido",
    country: "Japan",
    description: "Winter wonderland featuring powder snow, hot springs, and winter festivals. Perfect for skiing, snowboarding, and experiencing Japanese culture.",
    images: [
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1200",
      "https://images.unsplash.com/photo-1579258151343-c9cb91837d34?q=80&w=1200"
    ]
  },
  {
    name: "Lapland",
    country: "Finland",
    description: "Arctic paradise offering northern lights views, reindeer safaris, and ice hotels. Experience the magic of winter in its purest form.",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200"
    ]
  }
];

const beachDestinations = [
  {
    name: "Seychelles",
    country: "Seychelles",
    description: "Pristine beaches with granite boulders, turquoise waters, and tropical forests. Perfect for luxury beach holidays and nature exploration.",
    images: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
      "https://images.unsplash.com/photo-1589979481223-deb893043d60?q=80&w=1200"
    ]
  },
  {
    name: "Maldives",
    country: "Maldives",
    description: "Paradise islands with white sandy beaches, coral reefs, and luxury resorts. Ideal for romantic getaways and water sports.",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200"
    ]
  }
];

function DestinationCarousel({ images, name }: { images: string[], name: string }) {
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

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    dates: '',
    guests: '1',
    specialRequirements: ''
  });

  // Combine all destinations for the dropdown
  const allDestinations = [
    ...popularDestinations,
    ...summerDestinations,
    ...winterDestinations,
    ...beachDestinations
  ].reduce((unique, destination) => {
    if (!unique.some(item => item.name === destination.name)) {
      unique.push(destination);
    }
    return unique;
  }, [] as typeof popularDestinations);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-black h-12 px-4"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-black h-12 px-4"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-black h-12 px-4"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Select Destination</label>
        <select
          id="destination"
          name="destination"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-black h-12 px-4"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="" className="text-black">Choose a destination</option>
          <optgroup label="Popular Destinations" className="text-black font-semibold">
            {popularDestinations.map(dest => (
              <option key={`popular-${dest.name}`} value={dest.name} className="text-black">
                {dest.name}, {dest.country}
              </option>
            ))}
          </optgroup>
          <optgroup label="Summer Escapes" className="text-black font-semibold">
            {summerDestinations.map(dest => (
              <option key={`summer-${dest.name}`} value={dest.name} className="text-black">
                {dest.name}, {dest.country}
              </option>
            ))}
          </optgroup>
          <optgroup label="Winter Wonderlands" className="text-black font-semibold">
            {winterDestinations.map(dest => (
              <option key={`winter-${dest.name}`} value={dest.name} className="text-black">
                {dest.name}, {dest.country}
              </option>
            ))}
          </optgroup>
          <optgroup label="Beach Paradises" className="text-black font-semibold">
            {beachDestinations.map(dest => (
              <option key={`beach-${dest.name}`} value={dest.name} className="text-black">
                {dest.name}, {dest.country}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div>
        <label htmlFor="dates" className="block text-sm font-medium text-gray-700">Travel Dates</label>
        <input
          type="text"
          id="dates"
          name="dates"
          required
          placeholder="MM/DD/YYYY - MM/DD/YYYY"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-black h-12 px-4"
          value={formData.dates}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
        <select
          id="guests"
          name="guests"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-black h-12 px-4"
          value={formData.guests}
          onChange={handleChange}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num} className="text-black">
              {num}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">Special Requirements</label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-black px-4 py-3"
          value={formData.specialRequirements}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium"
      >
        Book Now
      </button>
    </form>
  );
}

export default function DestinationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-black">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200"
            alt="Destinations Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white mb-4">Explore Destinations</h1>
              <p className="text-xl text-orange-400">Discover your next adventure</p>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Popular Destinations</h2>
          <div className="grid grid-cols-1 gap-16">
            {popularDestinations.map((destination) => (
              <div key={destination.name} className="space-y-6">
                <DestinationCarousel images={destination.images} name={destination.name} />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {destination.name}, <span className="text-orange-500">{destination.country}</span>
                  </h3>
                  <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Destinations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Summer Escapes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {summerDestinations.map((destination) => (
                <div key={destination.name} className="space-y-4">
                  <DestinationCarousel images={destination.images} name={destination.name} />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {destination.name}, <span className="text-orange-500">{destination.country}</span>
                    </h3>
                    <p className="mt-2 text-gray-600">{destination.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Winter Wonderlands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {winterDestinations.map((destination) => (
                <div key={destination.name} className="space-y-4">
                  <DestinationCarousel images={destination.images} name={destination.name} />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {destination.name}, <span className="text-orange-500">{destination.country}</span>
                    </h3>
                    <p className="mt-2 text-gray-600">{destination.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Beach Paradises</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beachDestinations.map((destination) => (
                <div key={destination.name} className="space-y-4">
                  <DestinationCarousel images={destination.images} name={destination.name} />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {destination.name}, <span className="text-orange-500">{destination.country}</span>
                    </h3>
                    <p className="mt-2 text-gray-600">{destination.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Book Your Trip</h2>
          <BookingForm />
        </section>
      </main>

      <Footer />
    </div>
  );
} 