import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://emailplatformadvisor.online'),
  title: {
    default: 'Email Advisor — Master Brevo Email Marketing',
    template: '%s | Email Advisor',
  },
  description: 'Your independent resource for mastering Brevo email marketing. Free guides, tutorials, and comparisons to help you send better emails.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: 'Email Advisor',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
        />
        <link rel="canonical" href="https://emailplatformadvisor.online" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
