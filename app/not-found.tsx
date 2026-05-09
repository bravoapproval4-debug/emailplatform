import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
      }}
    >
      <div
        style={{
          fontSize: '80px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 900,
          color: '#FFD14F',
          opacity: 0.2,
          lineHeight: 1,
          marginBottom: '1rem',
        }}
      >
        404
      </div>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#f9fafb', margin: '0 0 1rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '400px', lineHeight: 1.6, marginBottom: '2rem' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            background: '#FFD14F',
            color: '#1A1200',
            padding: '0.65rem 1.75rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          Go Home
        </Link>
        <Link
          href="/blog"
          style={{
            background: 'transparent',
            border: '1px solid #1E1E1E',
            color: '#9ca3af',
            padding: '0.65rem 1.75rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          Browse All Guides
        </Link>
      </div>
    </div>
  )
}
