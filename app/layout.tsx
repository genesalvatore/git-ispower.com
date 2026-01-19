import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Git is Power | Data Sovereignty & Complete Control',
  description: 'Fork it. Clone it. Distribute it. No permission needed. Your data, your control. Git is sovereignty. Git is power.',
  keywords: ['git is power', 'data sovereignty', 'complete control', 'digital freedom', 'fork rights', 'clone freedom', 'no permission needed'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'Git is Power',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-ispower.com',
    title: 'Git is Power | Data Sovereignty & Complete Control',
    description: 'Fork it. Clone it. Distribute it. No permission needed. Your data, your control. Git is sovereignty. Git is power.',
    siteName: 'Git is Power',
    images: [
      {
        url: '/og-power.png',
        width: 1200,
        height: 630,
        alt: 'Git is Power - Data Sovereignty & Complete Control',
      },
    ],
  },
  alternates: {
    canonical: 'https://git-ispower.com',
  },
  metadataBase: new URL('https://git-ispower.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
