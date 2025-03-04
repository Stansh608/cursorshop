import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ChatBot from '@/components/ChatBot'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StanTravels - Your Travel Companion',
  description: 'Discover amazing destinations and plan your next adventure with StanTravels.',
  keywords: 'travel, destinations, tourism, vacation, holiday, adventure, booking',
  authors: [{ name: 'Stan' }],
  creator: 'Stan',
  publisher: 'StanTravels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
          <ChatBot />
        </div>
      </body>
    </html>
  )
} 