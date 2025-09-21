import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import AnalyticsManager from '@/components/analytics'
import StructuredData from '@/components/structured-data'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Francesco — Portfolio',
    template: '%s · Francesco',
  },
  description: 'Web/Graphic Designer & Frontend Developer specializing in Next.js, design systems, and performance optimization.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
        <CookieBanner />
        <AnalyticsManager />
        <StructuredData />
      </body>
    </html>
  )
}