import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'RWA.LAT — AI Investment Intelligence Platform',
  description: 'A next-generation AI investment operating system. Global Stock Intelligence, AI Agents, Compute Infrastructure, Prediction Intelligence. Powered by AI.',
  keywords: ['AI investment', 'stock intelligence', 'AI agents', 'financial technology', 'RWA', 'portfolio intelligence'],
  authors: [{ name: 'RWA.LAT' }],
  openGraph: {
    title: 'RWA.LAT — Invest Smarter. Powered by AI.',
    description: 'A next-generation AI investment operating system connecting Global Stock Intelligence, AI Agents, Compute Infrastructure, and Prediction Intelligence.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-[#0A0A0B] ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans bg-[#0A0A0B] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
