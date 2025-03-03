import { destinations } from '@/data/destinations';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationContent from '@/components/DestinationContent';
import { Suspense } from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function DestinationPage({ params }: PageProps) {
  // Ensure params.id is properly handled
  const id = params?.id?.toString() || '';
  const destination = destinations[id];

  if (!destination) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="text-lg text-gray-600">Loading destination...</div>
        </div>
      }>
        <DestinationContent destination={destination} />
      </Suspense>
      <Footer />
    </div>
  );
} 