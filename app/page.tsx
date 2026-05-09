import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles, categories } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import CompetitorOrbit from '@/components/CompetitorOrbit'

export const metadata: Metadata = {
  title: 'Email Advisor — Master Brevo Email Marketing',
  description: 'Free expert guides on Brevo email marketing. Learn automation, deliverability, segmentation, and analytics to grow your business with email.',
  alternates: { canonical: 'https://emailplatformadvisor.online' },
  openGraph: {
    title: 'Email Advisor — Master Brevo Email Marketing',
    description: 'Free expert guides on Brevo email marketing.',
    url: 'https://emailplatformadvisor.online',
    type: 'website',
  },
}

const LEARN_CARDS = [
  { title: 'Brevo Campaign Builder', desc: 'Master the drag-and-drop editor to create stunning, high-converting email campaigns in minutes.' },
  { title: 'Brevo Automation Flows', desc: 'Build powerful automated sequences that nurture leads and convert customers on autopilot.' },
  { title: 'Brevo List Management', desc: 'Organize, segment, and clean your contacts to send the right message to the right person.' },
  { title: 'Brevo Analytics Dashboard', desc: 'Track opens, clicks, conversions, and revenue to continuously improve your results.' },
  { title: 'Brevo Deliverability Tools', desc: 'Use authentication, list hygiene, and best practices to land in the inbox every time.' },
  { title: 'Brevo Integrations Hub', desc: 'Connect Brevo to Shopify, WordPress, Salesforce, and 100+ tools your business already uses.' },
]

const PRICING_PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['300 emails/day', 'Unlimited contacts', 'Basic templates', 'Email support', 'Basic CRM'],
    popular: false,
  },
  {
    name: 'Starter',
    price: 'From $9',
    period: '/month',
    features: ['5,000 emails/month', 'No daily limit', 'No Brevo logo', 'Basic reporting', 'Email & phone support'],
    popular: false,
  },
  {
    name: 'Business',
    price: 'From $18',
    period: '/month',
    features: ['20,000 emails/month', 'Marketing automation', 'A/B testing', 'Advanced stats', 'Multi-user access'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    features: ['Unlimited sending', 'Dedicated IP', 'SSO & SAML', 'Custom onboarding', 'Dedicated manager'],
    popular: false,
  },
]

const INTEGRATIONS = [
  { name: 'Shopify', desc: 'Sync your store to send automated order confirmations, cart recovery, and product emails.', slug: 'brevo-transactional-emails-setup' },
  { name: 'WordPress', desc: 'Capture leads from your WordPress site and sync them directly into Brevo contact lists.', slug: 'brevo-contact-management-segmentation' },
  { name: 'Salesforce', desc: 'Sync CRM contacts and deal data with Brevo for perfectly coordinated sales and marketing.', slug: 'brevo-automation-email-workflows' },
  { name: 'Zapier', desc: 'Connect Brevo to 5,000+ apps without code using Zapier automation workflows.', slug: 'brevo-welcome-series-automation' },
]

const sectionStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '5rem 1.5rem',
}

export default async function HomePage() {
  const articles = getAllArticles()
  const featuredArticles = articles.slice(0, 4)

  return (
    <>
      {/* ===== SECTION 1 — HERO ===== */}
      <section style={{ background: '#0A0A0A', borderBottom: '1px solid #1E1E1E' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '5rem 1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(255,209,79,0.12)',
                border: '1px solid rgba(255,209,79,0.25)',
                color: '#FFD14F',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Free Email Marketing Education
            </div>
            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                color: '#f9fafb',
                lineHeight: 1.15,
                margin: '0 0 1.25rem',
              }}
            >
              Master{' '}
              <span style={{ color: '#FFD14F' }}>Brevo</span>{' '}
              Email Marketing
            </h1>
            <p
              style={{
                color: '#6b7280',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '480px',
              }}
            >
              Your independent resource for learning Brevo — from beginner setup to advanced automation. Free guides, comparisons, and best practices.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/blog"
                style={{
                  background: '#FFD14F',
                  color: '#1A1200',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                Start Learning
              </Link>
              <a
                href="https://www.brevo.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'transparent',
                  border: '1px solid #1E1E1E',
                  color: '#9ca3af',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                }}
              >
                Try Brevo Free →
              </a>
            </div>
          </div>

          {/* Right — Staggered notification cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '380px' }}>
            {[
              { label: 'Daily Sending', value: '300 emails/day, free forever' },
              { label: 'Inbox Rate', value: '99% deliverability guaranteed' },
              { label: 'Global Reach', value: 'Used by 500,000+ businesses' },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: '#111111',
                  border: '1px solid #1E1E1E',
                  borderLeft: '3px solid #FFD14F',
                  borderRadius: '8px',
                  padding: '1rem 1.25rem',
                  transform: i === 1 ? 'translateX(24px)' : i === 2 ? 'translateX(12px)' : 'none',
                }}
              >
                <div style={{ fontSize: '11px', color: '#4b5563', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>{card.label}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#f9fafb', fontSize: '15px' }}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — TRUST BAR ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E', background: '#0A0A0A' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {[
            '100% Opt-In Education',
            'No Purchased Lists',
            'No Spam Tactics',
            'Brevo Best Practices',
            'Free to Read',
          ].map((badge) => (
            <div
              key={badge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#9ca3af',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              <span style={{ color: '#FFD14F', fontWeight: 700 }}>✓</span>
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 3 — BREVO BY THE NUMBERS ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E' }}>
        <div style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f9fafb', margin: 0 }}>
              <span style={{ color: '#FFD14F' }}>Brevo</span> by the Numbers
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { stat: '500,000+', label: 'Businesses Worldwide' },
              { stat: '180+', label: 'Countries Reached' },
              { stat: '8B+', label: 'Emails Sent Monthly' },
              { stat: '99%', label: 'Inbox Deliverability' },
            ].map((item, i) => (
              <div
                key={item.stat}
                className="animate-card"
                style={{
                  '--anim-delay': `${i * 0.1}s`,
                  background: 'rgba(255,209,79,0.07)',
                  border: '1px solid rgba(255,209,79,0.15)',
                  borderRadius: '10px',
                  padding: '2rem',
                  textAlign: 'center',
                } as React.CSSProperties}
              >
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    color: '#FFD14F',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.stat}
                </div>
                <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: 500 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — WHAT YOU'LL LEARN ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E' }}>
        <div style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f9fafb', margin: '0 0 0.75rem' }}>
              What You Will Learn with <span style={{ color: '#FFD14F' }}>Brevo</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '560px', margin: '0 auto' }}>
              Every guide is written to give you actionable knowledge you can apply immediately inside the Brevo platform.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {LEARN_CARDS.map((card, i) => (
              <div
                key={card.title}
                className="card-hover animate-card"
                style={{
                  '--anim-delay': `${i * 0.1}s`,
                  background: '#111111',
                  border: '1px solid #1E1E1E',
                  borderRadius: '10px',
                  padding: '1.5rem',
                } as React.CSSProperties}
              >
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#FFD14F', margin: '0 0 0.6rem' }}>
                  {card.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — ENTERPRISE HUB ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E', background: 'rgba(255,209,79,0.02)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '5rem 1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(255,209,79,0.12)',
                border: '1px solid rgba(255,209,79,0.25)',
                color: '#FFD14F',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Brevo Enterprise
            </div>
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#f9fafb',
                margin: '0 0 1.25rem',
                lineHeight: 1.3,
              }}
            >
              Scale your business with <span style={{ color: '#FFD14F' }}>Brevo</span> Enterprise
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Dedicated IP for maximum deliverability',
                'Custom onboarding and migration support',
                'SSO, SAML, and enterprise-grade security',
              ].map((point) => (
                <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#9ca3af', fontSize: '15px' }}>
                  <span style={{ color: '#FFD14F', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FFD14F',
                color: '#1A1200',
                padding: '0.7rem 1.75rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                display: 'inline-block',
              }}
            >
              Explore Enterprise
            </a>
          </div>

          {/* Right — Enterprise diagram */}
          <div style={{ position: 'relative', height: '360px', minHeight: '360px' }}>
            <svg
              viewBox="0 0 500 360"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
            >
              <line x1="250" y1="180" x2="80" y2="70" stroke="#FFD14F" strokeWidth="1" strokeDasharray="5,5" opacity="0.35" />
              <line x1="250" y1="180" x2="420" y2="70" stroke="#FFD14F" strokeWidth="1" strokeDasharray="5,5" opacity="0.35" />
              <line x1="250" y1="180" x2="80" y2="290" stroke="#FFD14F" strokeWidth="1" strokeDasharray="5,5" opacity="0.35" />
              <line x1="250" y1="180" x2="420" y2="290" stroke="#FFD14F" strokeWidth="1" strokeDasharray="5,5" opacity="0.35" />
            </svg>

            {/* Center circle */}
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '88px',
                height: '88px',
                background: '#FFD14F',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                textDecoration: 'none',
                boxShadow: '0 0 0 10px rgba(255,209,79,0.1)',
              }}
            >
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1A1200', fontSize: '16px' }}>Brevo</span>
            </a>

            {/* Corner cards */}
            {[
              { title: 'Sales Features', items: ['Pipeline tracking', 'Deal scoring', 'CRM sync'], top: '0', left: '0' },
              { title: 'Customer Insights', items: ['Behavioral data', 'Click heatmaps', 'Segments'], top: '0', right: '0' },
              { title: 'Commerce Tools', items: ['Order emails', 'Cart recovery', 'Product blocks'], bottom: '0', left: '0' },
              { title: 'Marketing Features', items: ['Campaigns', 'SMS outreach', 'Push alerts'], bottom: '0', right: '0' },
            ].map((card) => (
              <div
                key={card.title}
                className="animate-card"
                style={{
                  position: 'absolute',
                  top: card.top,
                  bottom: card.bottom,
                  left: card.left,
                  right: card.right,
                  background: '#111111',
                  border: '1px solid #1E1E1E',
                  borderRadius: '8px',
                  padding: '0.85rem',
                  width: '140px',
                  zIndex: 5,
                } as React.CSSProperties}
              >
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '12px', color: '#FFD14F', marginBottom: '6px' }}>{card.title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {card.items.map((item) => (
                    <li key={item} style={{ fontSize: '11px', color: '#6b7280' }}>— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — CATEGORIES ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E' }}>
        <div style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f9fafb', margin: '0 0 0.75rem' }}>
              Browse <span style={{ color: '#FFD14F' }}>Brevo</span> Topics
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
              Pick a category to find the guides most relevant to where you are in your Brevo journey.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
            {categories.filter(c => c.slug !== 'brevo-vs-competitors').map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card-hover animate-card"
                  style={{
                    '--anim-delay': `${i * 0.1}s`,
                    background: '#111111',
                    border: '1px solid #1E1E1E',
                    borderRadius: '10px',
                    padding: '1.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  } as React.CSSProperties}
                >
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '15px', color: '#f9fafb', margin: 0 }}>{cat.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6, margin: 0, flex: 1 }}>{cat.description}</p>
                  <span style={{ color: '#FFD14F', fontSize: '13px', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>Read guides →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — FEATURED ARTICLES ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E' }}>
        <div style={sectionStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', color: '#f9fafb', margin: 0 }}>
              Featured <span style={{ color: '#FFD14F' }}>Brevo</span> Guides
            </h2>
            <Link href="/blog" style={{ color: '#FFD14F', textDecoration: 'none', fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>
              View all →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {featuredArticles.map((article, i) => (
              <ArticleCard key={article.slug} article={article} animDelay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — BREVO PRICING ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E', background: 'rgba(255,209,79,0.02)' }}>
        <div style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f9fafb', margin: '0 0 0.75rem' }}>
              <span style={{ color: '#FFD14F' }}>Brevo</span> Pricing Plans
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
              Start free and scale as your business grows. Every plan includes unlimited contacts.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className="animate-card"
                style={{
                  '--anim-delay': `${i * 0.1}s`,
                  background: '#111111',
                  border: plan.popular ? '2px solid #FFD14F' : '1px solid #1E1E1E',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                } as React.CSSProperties}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#FFD14F',
                      color: '#1A1200',
                      padding: '3px 14px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: 'Poppins, sans-serif',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', color: '#f9fafb', marginBottom: '0.5rem' }}>{plan.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#FFD14F' }}>{plan.price}</span>
                    <span style={{ color: '#4b5563', fontSize: '13px' }}>{plan.period}</span>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {plan.features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '13px' }}>
                      <span style={{ color: '#FFD14F', fontWeight: 700 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.brevo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: plan.popular ? '#FFD14F' : 'transparent',
                    border: plan.popular ? 'none' : '1px solid #1E1E1E',
                    color: plan.popular ? '#1A1200' : '#9ca3af',
                    padding: '0.6rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    marginTop: 'auto',
                  }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FFD14F', textDecoration: 'underline', fontSize: '14px' }}
            >
              View full pricing on brevo.com →
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9 — HOW IT WORKS ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E' }}>
        <div style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f9fafb', margin: '0 0 0.75rem' }}>
              How to Use This Site with <span style={{ color: '#FFD14F' }}>Brevo</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: 'Pick a Topic', desc: 'Browse our categories or search for a specific Brevo feature you want to master.' },
              { num: '02', title: 'Read and Apply', desc: 'Follow our step-by-step guides and apply each lesson directly inside your Brevo account.' },
              { num: '03', title: 'See Results', desc: 'Track your improvements in open rates, click rates, and revenue using Brevo analytics.' },
            ].map((step, i) => (
              <div
                key={step.num}
                className="animate-card"
                style={{
                  '--anim-delay': `${i * 0.15}s`,
                  textAlign: 'center',
                  padding: '1rem',
                } as React.CSSProperties}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,209,79,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: '20px',
                    color: '#FFD14F',
                    background: 'rgba(255,209,79,0.07)',
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1.1rem', color: '#f9fafb', margin: '0 0 0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10 — COMPETITOR ORBIT ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E' }}>
        <div style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f9fafb', margin: '0 0 0.75rem' }}>
              How Does <span style={{ color: '#FFD14F' }}>Brevo</span> Compare?
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
              We compare Brevo side-by-side with every major platform so you have all the facts.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CompetitorOrbit />
          </div>
        </div>
      </section>

      {/* ===== SECTION 11 — INTEGRATIONS ===== */}
      <section style={{ borderBottom: '1px solid #1E1E1E', background: 'rgba(255,209,79,0.02)' }}>
        <div style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#f9fafb', margin: '0 0 0.75rem' }}>
              <span style={{ color: '#FFD14F' }}>Brevo</span> Integrations
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
              Connect Brevo to the tools your team already uses and automate your entire marketing stack.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {INTEGRATIONS.map((integration, i) => (
              <div
                key={integration.name}
                className="card-hover animate-card"
                style={{
                  '--anim-delay': `${i * 0.1}s`,
                  background: '#111111',
                  border: '1px solid #1E1E1E',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                } as React.CSSProperties}
              >
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', color: '#f9fafb', margin: 0 }}>{integration.name}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, margin: 0, flex: 1 }}>{integration.desc}</p>
                <Link href={`/blog/${integration.slug}`} style={{ color: '#FFD14F', fontSize: '13px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', textDecoration: 'none' }}>
                  Read guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 12 — FINAL CTA ===== */}
      <section>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '6rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#f9fafb',
              margin: '0 0 1rem',
              lineHeight: 1.2,
            }}
          >
            Start growing with <span style={{ color: '#FFD14F' }}>Brevo</span> today
          </h2>
          <p style={{ color: '#6b7280', fontSize: '17px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Read our free guides, learn at your own pace, and put every lesson to work inside Brevo.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/blog"
              style={{
                background: '#FFD14F',
                color: '#1A1200',
                padding: '0.8rem 2.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              Explore All Guides
            </Link>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,209,79,0.5)',
                color: '#FFD14F',
                padding: '0.8rem 2.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              Try Brevo Free
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
