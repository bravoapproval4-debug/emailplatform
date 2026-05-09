'use client'

import Link from 'next/link'

const COMPARISON_ARTICLES = [
  { title: 'Brevo vs Mailchimp', slug: 'brevo-vs-mailchimp-comparison' },
  { title: 'Brevo vs Klaviyo', slug: 'brevo-vs-klaviyo-comparison' },
  { title: 'Brevo vs ActiveCampaign', slug: 'brevo-vs-activecampaign-comparison' },
  { title: 'Brevo vs Constant Contact', slug: 'brevo-vs-constant-contact-comparison' },
]

const GUIDE_ARTICLES = [
  { title: 'Brevo Email Marketing: Beginners Guide', slug: 'brevo-email-marketing-beginners-guide' },
  { title: 'Brevo Automation: Email Workflows', slug: 'brevo-automation-email-workflows' },
  { title: 'Brevo Deliverability: Reach the Inbox', slug: 'brevo-deliverability-reach-inbox' },
  { title: 'Brevo Analytics: Email Metrics', slug: 'brevo-analytics-email-marketing-metrics' },
  { title: 'Brevo A/B Testing Guide', slug: 'brevo-ab-testing-optimize-campaigns' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1E1E1E', background: '#0A0A0A' }}>
      {/* 1. Competitors Strip */}
      <div style={{ borderBottom: '1px solid #1E1E1E', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#6b7280', fontSize: '13px', whiteSpace: 'nowrap' }}>
              Brevo vs The Rest:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {COMPARISON_ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{
                    background: 'rgba(11,153,110,0.08)',
                    border: '1px solid rgba(11,153,110,0.2)',
                    color: '#0B996E',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'Poppins, sans-serif',
                    textDecoration: 'none',
                  }}
                >
                  {article.title}
                </Link>
              ))}
              <Link
                href="/category/vs-competitors"
                style={{
                  background: 'transparent',
                  border: '1px solid #1E1E1E',
                  color: '#4b5563',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  textDecoration: 'none',
                }}
              >
                All Comparisons
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CTA Banner */}
      <div
        style={{
          background: 'rgba(11,153,110,0.07)',
          borderBottom: '1px solid rgba(11,153,110,0.15)',
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#f9fafb', margin: '0 0 1rem' }}>
          Ready to start with <span style={{ color: '#0B996E' }}>Brevo</span>?
        </h3>
        <a
          href="https://www.brevo.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#0B996E',
            color: '#fff',
            padding: '0.7rem 2rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            display: 'inline-block',
          }}
        >
          Create Free Account
        </a>
      </div>

      {/* 3. Main 4-column grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '5px', background: '#0B996E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '12px' }}>E</span>
              </div>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', color: '#f9fafb' }}>Email Advisor</span>
            </div>
            <p style={{ color: '#4b5563', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
              Your independent resource for mastering Brevo email marketing. Free to read, always up to date.
            </p>
          </div>

          {/* Brevo Guides */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#9ca3af', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 1rem' }}>
              Brevo Guides
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {GUIDE_ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} style={{ color: '#6b7280', textDecoration: 'none', fontSize: '13px', lineHeight: 1.5 }}>
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* vs Tools */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#9ca3af', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 1rem' }}>
              vs Tools
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {COMPARISON_ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} style={{ color: '#6b7280', textDecoration: 'none', fontSize: '13px' }}>
                    {a.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/category/vs-competitors" style={{ color: '#0B996E', textDecoration: 'none', fontSize: '13px' }}>
                  All Comparisons
                </Link>
              </li>
            </ul>
          </div>

          {/* Site + Legal */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#9ca3af', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 1rem' }}>
              Site &amp; Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'Cookies Policy', href: '/cookies-policy' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ color: '#6b7280', textDecoration: 'none', fontSize: '13px' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1E1E1E', padding: '1.25rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: '#374151', fontSize: '13px', margin: 0 }}>
          &copy; {new Date().getFullYear()} Email Advisor. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
