import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jagan Kumar Swain | Electronics, VLSI and AI and NL Portfolio',
  description: 'Portfolio website showcasing projects, skills, and achievements in Electronics, VLSI IC, AI and Machine Learning and Circuit Design',
  keywords: ['Electronics', 'VLSI', 'AI and ML', 'Data Analysis','Circuit Design', 'Portfolio', 'Engineering'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

