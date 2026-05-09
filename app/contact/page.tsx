import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Email Advisor',
  description: 'Get in touch with the Email Advisor team. Questions, feedback, or topic suggestions — we want to hear from you.',
  alternates: { canonical: 'https://emailplatformadvisor.online/contact' },
  openGraph: {
    title: 'Contact Email Advisor',
    description: 'Get in touch with the Email Advisor team.',
    url: 'https://emailplatformadvisor.online/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
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
          Get in Touch
        </div>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#f9fafb', margin: '0 0 1rem' }}>
          Contact <span style={{ color: '#0B996E' }}>Us</span>
        </h1>
        <p style={{ color: '#6b7280', fontSize: '17px', lineHeight: 1.7, margin: 0 }}>
          Have a question about Brevo, a topic suggestion, or found something in one of our guides that needs updating? We would love to hear from you.
        </p>
      </div>

      <div
        style={{
          background: '#111111',
          border: '1px solid #1E1E1E',
          borderRadius: '12px',
          padding: '2.5rem',
          marginBottom: '2rem',
        }}
      >
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1.25rem', color: '#f9fafb', margin: '0 0 1rem' }}>
          Email Us Directly
        </h2>
        <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          We read every message and respond within 1-2 business days. Whether you have a question about using Brevo, want to suggest a topic we should cover, or have found an error in our content — send us an email.
        </p>
        <a
          href="mailto:Support@emailplatformadvisor.online"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#0B996E',
            color: '#fff',
            padding: '0.75rem 1.75rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
          }}
        >
          Support@emailplatformadvisor.online
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        {[
          { title: 'Topic Suggestions', desc: 'Want us to cover a specific Brevo feature or comparison? Let us know.' },
          { title: 'Content Updates', desc: 'Found outdated information in one of our guides? We appreciate the heads-up.' },
          { title: 'General Questions', desc: 'Questions about Brevo or email marketing that our guides do not answer yet.' },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: '#111111',
              border: '1px solid #1E1E1E',
              borderRadius: '10px',
              padding: '1.25rem',
            }}
          >
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '14px', color: '#0B996E', margin: '0 0 0.5rem' }}>{item.title}</h3>
            <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
