export interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  heroImage: string;
  description: string;
  bestTime: string;
  language: string;
  currency: string;
  attractions: {
    name: string;
    description: string;
    image: string;
  }[];
  tips: string[];
}

export const destinations: { [key: string]: Destination } = {
  paris: {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    tagline: 'The City of Light and Love',
    heroImage: '/images/destinations/paris-banner.jpg',
    description: 'Paris, the capital of France, is one of the world\'s most iconic cities. Known for its art, culture, cuisine, and fashion, Paris attracts millions of visitors each year with its unique blend of historical architecture and modern lifestyle.',
    bestTime: 'June to September offers pleasant weather and various outdoor activities.',
    language: 'French is the official language, but English is widely spoken in tourist areas.',
    currency: 'Euro (€) is the official currency used in Paris.',
    attractions: [
      {
        name: 'Eiffel Tower',
        description: 'The iconic symbol of Paris, offering breathtaking views of the city.',
        image: '/images/destinations/paris-eiffel-1.jpg'
      },
      {
        name: 'Louvre Museum',
        description: 'Home to thousands of works of art, including the Mona Lisa.',
        image: '/images/destinations/paris-louvre-1.jpg'
      }
    ],
    tips: [
      'Purchase a Paris Museum Pass to save money on attractions',
      'Learn basic French phrases to interact with locals',
      'Use the Metro for efficient transportation around the city',
      'Book major attractions in advance to avoid long queues'
    ]
  },
  tokyo: {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    tagline: 'Where Tradition Meets Innovation',
    heroImage: '/images/destinations/tokyo-banner.jpg',
    description: 'Tokyo, Japan\'s bustling capital, mixes ultramodern and traditional elements, from neon-lit skyscrapers to historic temples. This dynamic city offers visitors an unforgettable experience with its unique culture, cutting-edge technology, and incredible food scene.',
    bestTime: 'March-May for cherry blossoms, or October-November for autumn colors.',
    language: 'Japanese is the main language, with limited English in tourist areas.',
    currency: 'Japanese Yen (¥) is the official currency.',
    attractions: [
      {
        name: 'Senso-ji Temple',
        description: 'Tokyo\'s oldest Buddhist temple, a symbol of peace and prosperity.',
        image: '/images/destinations/tokyo-sensoji-1.jpg'
      },
      {
        name: 'Shibuya Crossing',
        description: 'The world\'s busiest pedestrian crossing and a symbol of modern Tokyo.',
        image: '/images/destinations/tokyo-shibuya-1.jpg'
      }
    ],
    tips: [
      'Get a PASMO or Suica card for easy public transportation',
      'Download offline maps as English signs are limited',
      'Be mindful of Japanese etiquette and customs',
      'Try convenience store food - it\'s surprisingly good!'
    ]
  },
  'new-york': {
    id: 'new-york',
    name: 'New York City',
    country: 'USA',
    tagline: 'The City That Never Sleeps',
    heroImage: '/images/destinations/new-york-banner.jpg',
    description: 'New York City is a global metropolis that captivates visitors with its iconic skyline, diverse neighborhoods, world-class museums, and endless entertainment options. From Broadway shows to Central Park, the city offers something for everyone.',
    bestTime: 'April to June or September to early November for mild weather.',
    language: 'English is the primary language, with many other languages spoken.',
    currency: 'US Dollar ($) is the official currency.',
    attractions: [
      {
        name: 'Central Park',
        description: 'An urban oasis offering recreation, culture, and natural beauty.',
        image: '/images/destinations/nyc-central-park-1.jpg'
      },
      {
        name: 'Times Square',
        description: 'The bright lights and energy of this iconic intersection never fade.',
        image: '/images/destinations/nyc-times-square-1.jpg'
      }
    ],
    tips: [
      'Get a MetroCard for unlimited subway and bus rides',
      'Consider purchasing a New York CityPASS for attractions',
      'Wear comfortable walking shoes - NYC is best explored on foot',
      'Make dinner reservations in advance for popular restaurants'
    ]
  }
}; 