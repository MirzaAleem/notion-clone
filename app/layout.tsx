import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motion',
  description: 'A Notion clone, built with Next.js and TypeScript',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/motion-icon-light.png',
        href: '/motion-icon-light.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/motion-icon-dark.png',
        href: '/motion-icon-dark.png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
