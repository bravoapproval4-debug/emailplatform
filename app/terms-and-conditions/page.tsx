import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read the Email Advisor terms and conditions governing your use of our website and content.',
  alternates: { canonical: 'https://emailplatformadvisor.online/terms-and-conditions' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.25rem', color: '#f9fafb', marginBottom: '0.5rem' }}>
        Terms and Conditions
      </h1>
      <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '2.5rem' }}>Last updated: 2026</p>

      <div className="prose-article">
        <p>Please read these Terms and Conditions carefully before using emailplatformadvisor.online (the "Site") operated by Email Advisor ("we", "us", or "our").</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using this Site, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our Site.</p>

        <h2>Use of Content</h2>
        <p>All content on this Site, including articles, guides, and comparisons, is provided for educational and informational purposes only. You may read, share, and reference our content for personal and non-commercial use, provided you attribute Email Advisor and link to the original page.</p>
        <p>You may not reproduce, redistribute, or republish our content for commercial purposes without our written permission.</p>

        <h2>Accuracy of Information</h2>
        <p>We strive to keep all information on this Site accurate and up to date. However, we make no warranties or representations about the accuracy, completeness, or reliability of any content. Platform pricing, features, and policies (including those of Brevo) may change, and we encourage you to verify current information directly with the relevant provider.</p>

        <h2>Affiliate Relationships</h2>
        <p>This Site contains affiliate links. When you click these links and make a purchase, we may earn a commission. This does not affect the price you pay. Our editorial content is not influenced by affiliate relationships.</p>

        <h2>External Links</h2>
        <p>Our Site contains links to third-party websites, including Brevo and its competitors. We are not responsible for the content, privacy practices, or policies of any external websites. The inclusion of a link does not constitute an endorsement.</p>

        <h2>Disclaimer of Warranties</h2>
        <p>This Site is provided on an "as is" and "as available" basis without any warranties of any kind. We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

        <h2>Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Email Advisor shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use this Site.</p>

        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these Terms and Conditions at any time. Continued use of the Site after changes constitutes acceptance of the new terms.</p>

        <h2>Governing Law</h2>
        <p>These Terms and Conditions are governed by applicable law. Any disputes arising from the use of this Site shall be resolved in accordance with applicable legal processes.</p>

        <h2>Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:Support@emailplatformadvisor.online">Support@emailplatformadvisor.online</a>.</p>
      </div>
    </div>
  )
}
