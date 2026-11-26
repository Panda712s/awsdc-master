import { type Metadata, type Viewport } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { SITE_URL } from '@/lib/site'

import '@/styles/tailwind.css'

// Self-hosted fonts: no network request to Google at build or run time.
const slab = localFont({
  src: [
    { path: '../fonts/zilla-slab-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/zilla-slab-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-slab',
})

const body = localFont({
  src: '../fonts/albert-sans-latin-wght-normal.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | AWSDC',
    default: 'Africa World Schools Debating Championships 2027 | AWSDC',
  },
  description:
    'The 2nd Africa World Schools Debating Championships (AWSDC) takes place at the University of Pretoria, South Africa, from 19 to 25 March 2027. High school debaters from across Africa, seven days of competition, learning and community.',
  applicationName: 'AWSDC',
  openGraph: {
    type: 'website',
    siteName: 'AWSDC',
    locale: 'en_ZA',
    title: 'Africa World Schools Debating Championships 2027',
    description:
      'The 2nd Africa World Schools Debating Championships. Pretoria, South Africa, 19 to 25 March 2027.',
    url: '/',
  },
  twitter: { card: 'summary' },
}

export const viewport: Viewport = {
  themeColor: '#382818',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx('h-full antialiased', slab.variable, body.variable)}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  )
}
