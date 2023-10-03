import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
   subsets: ['latin'], weight: ['300','400','500','600','700']
  })

export const metadata: Metadata = {
  title: 'PriceMe',
  description: 'Save your time. Save your money. PriceMe tracks Amazon prices for you, giving you the best deals at your fingertips.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-full mx-auto bg-white'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
