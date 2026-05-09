'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: '#111111',
        border: '1px solid #1E1E1E',
        borderRadius: '10px',
        padding: '1.25rem 1.5rem',
        maxWidth: '520px',
        width: 'calc(100vw - 2rem)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div>
        <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
          We use cookies to improve your experience. By continuing, you agree to our{' '}
          <Link href="/cookies-policy" style={{ color: '#0B996E', textDecoration: 'underline' }}>
            Cookie Policy
          </Link>
          .
        </p>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
        <button
          onClick={handleDecline}
          style={{
            background: 'transparent',
            border: '1px solid #1E1E1E',
            color: '#6b7280',
            padding: '0.5rem 1.25rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
          }}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: '#0B996E',
            border: 'none',
            color: '#fff',
            padding: '0.5rem 1.25rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
