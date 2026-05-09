import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Read the Email Advisor disclaimer regarding the educational nature of our content and limitations of liability.',
  alternates: { canonical: 'https://emailplatformadvisor.online/disclaimer' },
  robots: { index: true, follow: true },
}

export default function DisclaimerPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.25rem', color: '#f9fafb', marginBottom: '0.5rem' }}>
        Disclaimer
      </h1>
      <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '2.5rem' }}>Last updated: 2026</p>

      <div className="prose-article">
        <h2>Educational Purpose</h2>
        <p>All content published on Email Advisor (emailplatformadvisor.online) is intended for educational and informational purposes only. Our guides, tutorials, comparisons, and articles are designed to help you understand and use Brevo email marketing more effectively.</p>
        <p>Nothing on this website constitutes professional marketing, legal, financial, or business advice. You should always consult qualified professionals before making significant business decisions.</p>

        <h2>No Guarantee of Results</h2>
        <p>While we strive to provide accurate, actionable, and up-to-date information, we make no guarantees about the results you will achieve by following our guides. Email marketing results depend on many factors including your industry, audience, list quality, content, and frequency — all of which are unique to your situation.</p>

        <h2>Platform Changes</h2>
        <p>Brevo and the other platforms we write about update their products regularly. Pricing, features, interface design, and policies may change at any time without notice to us. While we work to keep our content current, some information may be outdated at the time of your reading. Always verify important details directly with the platform provider.</p>

        <h2>Third-Party Content</h2>
        <p>Our website may reference or link to third-party websites, products, or services. We are not responsible for the accuracy, legality, or content of external sites. Links do not constitute endorsements.</p>

        <h2>Affiliate Links</h2>
        <p>Some links on this site are affiliate links. Clicking these may result in a commission being paid to us. See our Affiliate Disclosure for full details.</p>

        <h2>Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, Email Advisor and its owners, authors, and contributors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website or any content herein.</p>

        <h2>Contact</h2>
        <p>For any questions about this disclaimer, contact us at <a href="mailto:Support@emailplatformadvisor.online">Support@emailplatformadvisor.online</a>.</p>
      </div>
    </div>
  )
}
