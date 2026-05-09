'use client'

import { useState } from 'react'
import Link from 'next/link'

const CATEGORIES = [
  {
    name: 'Email Marketing Basics',
    slug: 'email-marketing-basics',
    desc: 'Setup, campaigns & best practices',
  },
  {
    name: 'Automation & Workflows',
    slug: 'automation-workflows',
    desc: 'Triggers, sequences & drip campaigns',
  },
  {
    name: 'Deliverability & List Mgmt',
    slug: 'deliverability-list-management',
    desc: 'Inbox rates & list hygiene',
  },
  {
    name: 'Analytics & Reporting',
    slug: 'analytics-reporting',
    desc: 'A/B testing, stats & insights',
  },
  {
    name: 'vs Competitors',
    slug: 'vs-competitors',
    desc: 'Brevo vs Mailchimp, MailerLite, HubSpot & more',
    fullWidth: true,
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [homeHovered, setHomeHovered] = useState(false)

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
                background: '#FFD14F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#1A1200', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px' }}>E</span>
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', color: '#f9fafb' }}>
              Email Advisor
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
            {/* Home */}
            <Link
              href="/"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              style={{
                border: '1.5px solid #FFD14F',
                color: '#FFD14F',
                padding: '5px 14px',
                borderRadius: '7px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'Poppins, sans-serif',
                background: homeHovered ? 'rgba(255,209,79,0.1)' : 'transparent',
                transition: 'background 0.2s',
              }}
            >
              Home
            </Link>

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
                  fontFamily: 'inherit',
                }}
              >
                Topics
                <span style={{ fontSize: '10px', transition: 'transform 0.2s', display: 'inline-block', transform: topicsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
              </button>

              {topicsOpen && (
                <>
                  {/* Backdrop to close on outside click */}
                  <div
                    style={{ position: 'fixed', inset: 0, zIndex: 40 }}
                    onClick={() => setTopicsOpen(false)}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 14px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#111111',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '16px',
                      minWidth: '420px',
                      boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
                      zIndex: 50,
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px',
                    }}
                  >
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        onClick={() => setTopicsOpen(false)}
                        onMouseEnter={() => setHoveredCard(cat.slug)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                          display: 'block',
                          background: hoveredCard === cat.slug ? 'rgba(255,209,79,0.05)' : 'rgba(255,255,255,0.03)',
                          border: `1px solid ${hoveredCard === cat.slug ? 'rgba(255,209,79,0.3)' : 'rgba(255,255,255,0.07)'}`,
                          borderRadius: '8px',
                          padding: '12px',
                          textDecoration: 'none',
                          transition: 'background 0.2s, border-color 0.2s',
                          gridColumn: cat.fullWidth ? '1 / -1' : undefined,
                        }}
                      >
                        <div style={{ color: '#FFD14F', fontSize: '12px', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>
                          {cat.name}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', marginTop: '3px', lineHeight: 1.4 }}>
                          {cat.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link href="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              About
            </Link>
            <Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              Contact
            </Link>
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FFD14F',
                color: '#1A1200',
                padding: '0.5rem 1.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                whiteSpace: 'nowrap',
              }}
              className="header-cta"
            >
              Try Brevo Free
            </a>

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
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ color: '#FFD14F', textDecoration: 'none', padding: '0.5rem 0', fontSize: '15px', fontWeight: 600 }}>Home</Link>
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
