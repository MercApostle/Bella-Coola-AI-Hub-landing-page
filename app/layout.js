import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'The 7 Laws of Success | Bella Coola AI Hub',
  description: 'A diagnostic system designed to give you back freedom of time, clarity of focus, and space for what actually matters—by aligning how you work with the underlying mechanics that produce results.',
  keywords: 'success, business alignment, seven laws, mentalism, correspondence, rhythm, cause and effect, gender',
  authors: [{ name: 'Bella Coola AI Hub' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000', // Pure black
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
      </head>
      <body className={inter.className}>
        {/* Logo Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gold-dark/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image 
                src="/logo.jpg" 
                alt="Bella Coola AI Hub" 
                width={120}
                height={120}
                className="h-16 w-auto"
                priority
              />
            </div>
          </div>
        </header>

        {/* Main Content with top padding for fixed header */}
        <main className="relative z-0 pt-24">
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  )
}
