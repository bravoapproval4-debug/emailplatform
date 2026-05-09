import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Email Advisor',
  description: 'Learn about Email Advisor — your independent resource for mastering Brevo email marketing. Free guides, best practices, and honest reviews.',
  alternates: { canonical: 'https://emailplatformadvisor.online/about' },
  openGraph: {
    title: 'About Email Advisor',
    description: 'Your independent resource for mastering Brevo email marketing.',
    url: 'https://emailplatformadvisor.online/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(11,153,110,0.12)',
            border: '1px solid rgba(11,153,110,0.25)',
            color: '#0B996E',
            padding: '5px 14px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '1.25rem',
          }}
        >
          About Us
        </div>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#f9fafb', margin: '0 0 1rem' }}>
          About <span style={{ color: '#0B996E' }}>Email Advisor</span>
        </h1>
        <p style={{ color: '#6b7280', fontSize: '18px', lineHeight: 1.7 }}>
          Email Advisor is an independent educational platform dedicated to helping marketers, founders, and business owners get the most out of Brevo email marketing.
        </p>
      </div>

      <div className="prose-article">
        <h2>Our Mission</h2>
        <p>
          Email marketing remains one of the highest-ROI channels available to businesses of any size. Yet for many people, platforms like Brevo can feel overwhelming — there are campaigns, automations, lists, segments, templates, deliverability settings, and analytics all competing for your attention.
        </p>
        <p>
          Email Advisor exists to cut through that complexity. Every guide we publish is written to be practical, step-by-step, and focused on real results. We cover everything from sending your first campaign to building complex behavioral automation sequences.
        </p>

        <h2>What We Cover</h2>
        <p>
          Our content is organized into five core topic areas, all focused on Brevo:
        </p>
        <ul>
          <li><strong>Email Marketing Basics</strong> — Getting started, creating templates, managing contacts, and sending your first campaign.</li>
          <li><strong>Automation and Workflows</strong> — Welcome sequences, drip campaigns, transactional emails, and SMS marketing.</li>
          <li><strong>Deliverability and List Management</strong> — SPF, DKIM, DMARC setup, list hygiene, and compliance.</li>
          <li><strong>Analytics and Reporting</strong> — Reading your metrics, running A/B tests, and optimizing open and click rates.</li>
          <li><strong>Brevo vs Competitors</strong> — Honest, data-driven comparisons between Brevo and Mailchimp, Klaviyo, ActiveCampaign, and more.</li>
        </ul>

        <h2>Why Brevo?</h2>
        <p>
          Brevo (formerly Sendinblue) is one of the most feature-complete and cost-effective email platforms available. With unlimited contacts on every plan, a generous free tier of 300 emails per day, and a full suite of marketing automation, CRM, SMS, and transactional email tools, it offers exceptional value for growing businesses.
        </p>
        <p>
          We focus on Brevo because we believe it is the right choice for the majority of businesses — from solo entrepreneurs to enterprise teams. Our guides reflect that belief, helping you unlock every feature the platform offers.
        </p>

        <h2>Our Editorial Principles</h2>
        <ul>
          <li>All content is free to read, with no paywalls or registration required.</li>
          <li>We follow opt-in best practices in every recommendation we make.</li>
          <li>We never recommend buying email lists or using spam tactics.</li>
          <li>Some guides contain affiliate links to Brevo. This does not influence our editorial opinions.</li>
          <li>We update our content regularly to reflect changes to the Brevo platform.</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have a question, a topic suggestion, or found an error in one of our guides? We would love to hear from you.
        </p>
        <p>
          Reach us at:{' '}
          <a href="mailto:Support@emailplatformadvisor.online" style={{ color: '#0B996E' }}>
            Support@emailplatformadvisor.online
          </a>
        </p>
      </div>

      <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link
          href="/blog"
          style={{
            background: '#0B996E',
            color: '#fff',
            padding: '0.7rem 1.75rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
          }}
        >
          Browse All Guides
        </Link>
        <Link
          href="/contact"
          style={{
            background: 'transparent',
            border: '1px solid #1E1E1E',
            color: '#9ca3af',
            padding: '0.7rem 1.75rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
