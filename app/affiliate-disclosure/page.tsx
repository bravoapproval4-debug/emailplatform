import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Email Advisor affiliate disclosure — we may earn commissions from Brevo links on our site. Learn how this affects our content.',
  alternates: { canonical: 'https://emailplatformadvisor.online/affiliate-disclosure' },
  robots: { index: true, follow: true },
}

export default function AffiliateDisclosurePage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.25rem', color: '#f9fafb', marginBottom: '0.5rem' }}>
        Affiliate Disclosure
      </h1>
      <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '2.5rem' }}>Last updated: 2026</p>

      <div className="prose-article">
        <p>Email Advisor is committed to full transparency with our readers. This page discloses our affiliate relationships and how they may affect the content we publish.</p>

        <h2>What Is an Affiliate Relationship?</h2>
        <p>An affiliate relationship means that when you click a link on our site to a third-party product or service and make a purchase, we may receive a commission from the company. This commission comes at no additional cost to you — you pay the same price you would if you had navigated directly to the vendor's website.</p>

        <h2>Our Relationship with Brevo</h2>
        <p>Email Advisor participates in the Brevo affiliate program. Many of the links on our site that point to brevo.com are affiliate links. If you sign up for Brevo through one of these links, we may receive a commission.</p>
        <p>This affiliate relationship is the primary reason this website exists — it allows us to create and maintain free educational content at no cost to our readers.</p>

        <h2>How This Affects Our Content</h2>
        <p>We are committed to providing honest, unbiased, and accurate information about Brevo and its competitors. Our affiliate relationship with Brevo does not influence our editorial content in the following ways:</p>
        <ul>
          <li>We publish honest comparisons between Brevo and competing platforms, including instances where a competitor may be a better fit for certain users.</li>
          <li>We do not hide or downplay limitations of Brevo that we are aware of.</li>
          <li>We do not fabricate features, pricing, or statistics to make Brevo appear more favorable.</li>
          <li>We update our content when platform features or pricing change, regardless of how that affects our affiliate earnings.</li>
        </ul>

        <h2>FTC Compliance</h2>
        <p>In accordance with the U.S. Federal Trade Commission (FTC) guidelines, we are required to disclose any material connection between ourselves and any products or services we recommend or promote. This page, along with disclosure notices where applicable throughout our content, fulfills this requirement.</p>

        <h2>Other Affiliate Relationships</h2>
        <p>We may in the future add affiliate relationships with other email marketing platforms or related tools. When we do, we will update this disclosure accordingly.</p>

        <h2>Questions?</h2>
        <p>If you have any questions about our affiliate relationships or how they affect our content, please contact us at <a href="mailto:Support@emailplatformadvisor.online">Support@emailplatformadvisor.online</a>.</p>
      </div>
    </div>
  )
}
