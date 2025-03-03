import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'StanTravels - Your Ultimate Travel Companion',
  description: 'Discover amazing destinations around the world with StanTravels. Book your next adventure today!',
  keywords: 'travel, destinations, tourism, vacation, holiday, adventure, booking',
  authors: [{ name: 'Stan' }],
  creator: 'Stan',
  publisher: 'StanTravels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
