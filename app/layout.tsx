import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Jagan Kumar Swain | Electronics & Communication Engineer • AI/ML & Embedded Systems',
  description:
    'Undergraduate Researcher at IISER Berhampur (Medical DL) & PE Geometry (Micro Drones). Dual Degree in B.Tech ECE (NIST University, CGPA 9.1) and BS Data Science (IIT Madras, CGPA 8.1). Recipient of ₹50,000 Defence R&D Grant & SIH 2025 Finalist.',
  keywords: [
    'Jagan Kumar Swain',
    'Electronics and Communication Engineer',
    'AI/ML Engineer',
    'Deep Learning',
    'Medical Imaging',
    'Micro Drones',
    'Arduino Nicla Vision',
    'Verilog HDL',
    'Vivado',
    'VLSI Design',
    'IIT Madras',
    'NIST University',
    'GuardX Sentinel',
    'SegroBin',
    'DeepBeat',
  ],
  authors: [{ name: 'Jagan Kumar Swain', url: 'https://jagankswain.vercel.app' }],
  creator: 'Jagan Kumar Swain',
  openGraph: {
    title: 'Jagan Kumar Swain | ECE • AI/ML & Embedded Systems',
    description:
      'Undergraduate Researcher bridging hardware embedded systems with deep learning algorithms. Dual Degree at NIST University (9.1 CGPA) & IIT Madras (8.1 CGPA).',
    url: 'https://jagankswain.vercel.app',
    siteName: 'Jagan Kumar Swain Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className={`${inter.className} min-h-screen bg-background text-on-surface antialiased`}>
        {children}
      </body>
    </html>
  )
}
