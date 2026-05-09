'use client'

import { useState } from 'react'
import Link from 'next/link'

const CATEGORIES = [
  { name: 'Email Marketing Basics', slug: 'email-marketing-basics' },
  { name: 'Automation & Workflows', slug: 'automation-workflows' },
  { name: 'Deliverability & List Management', slug: 'deliverability-list-management' },
  { name: 'Analytics & Reporting', slug: 'analytics-reporting' },
  { name: 'vs Competitors', slug: 'vs-competitors' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [topicsOpen, setTopicsOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid #1E1E1E',
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                background: '#0B996E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px' }}>E</span>
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', color: '#f9fafb' }}>
              Email Advisor
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            <Link href="/blog" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              All Guides
            </Link>

            {/* Topics Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setTopicsOpen(!topicsOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: 0,
                }}
              >
                Topics
                <span style={{ fontSize: '10px' }}>▾</span>
              </button>
              {topicsOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    left: '-1rem',
                    background: '#111111',
                    border: '1px solid #1E1E1E',
                    borderRadius: '8px',
                    minWidth: '240px',
                    padding: '0.5rem 0',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  }}
                >
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      onClick={() => setTopicsOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.6rem 1rem',
                        color: '#9ca3af',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#0B996E' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af' }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              About
            </Link>
            <Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#0B996E',
                color: '#fff',
                padding: '0.5rem 1.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'Poppins, sans-serif',
                whiteSpace: 'nowrap',
              }}
              className="header-cta"
            >
              Try Brevo Free
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#9ca3af',
                padding: '4px',
              }}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              <div style={{ width: '22px', height: '2px', background: 'currentColor', marginBottom: '5px', borderRadius: '1px' }} />
              <div style={{ width: '22px', height: '2px', background: 'currentColor', marginBottom: '5px', borderRadius: '1px' }} />
              <div style={{ width: '22px', height: '2px', background: 'currentColor', borderRadius: '1px' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop: '1px solid #1E1E1E',
              padding: '1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            <Link href="/blog" onClick={() => setMobileOpen(false)} style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem 0', fontSize: '15px' }}>All Guides</Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem 0 0.5rem 1rem', fontSize: '14px' }}
              >
                {cat.name}
              </Link>
            ))}
            <Link href="/about" onClick={() => setMobileOpen(false)} style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem 0', fontSize: '15px' }}>About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem 0', fontSize: '15px' }}>Contact</Link>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .header-cta { display: none !important; }
        }
      `}</style>
    </header>
  )
}
