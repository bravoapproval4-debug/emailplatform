import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Email Advisor privacy policy to understand how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://emailplatformadvisor.online/privacy-policy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.25rem', color: '#f9fafb', marginBottom: '0.5rem' }}>
        Privacy Policy
      </h1>
      <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '2.5rem' }}>
        Last updated: 2026
      </p>

      <div className="prose-article">
        <p>Email Advisor ("we", "us", or "our") operates the website emailplatformadvisor.online. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

        <h2>Information We Collect</h2>
        <p>We may collect information about you in a variety of ways, including:</p>
        <ul>
          <li><strong>Log Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.</li>
          <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
          <li><strong>Contact Information:</strong> If you contact us by email, we may collect your name and email address.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate and improve our website</li>
          <li>Understand how visitors use our content</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Monitor and analyze usage and trends</li>
          <li>Detect, prevent, and address technical issues</li>
        </ul>

        <h2>Affiliate Links</h2>
        <p>Our website contains affiliate links to Brevo and potentially other services. If you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you. This does not influence our editorial content. Please review our Affiliate Disclosure for more information.</p>

        <h2>Third-Party Services</h2>
        <p>We may use third-party analytics services such as Google Analytics to help us understand how our website is used. These services may collect information sent by your browser as part of a web page request, such as cookies or your IP address.</p>

        <h2>Data Retention</h2>
        <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal data. To exercise any of these rights, please contact us at:</p>
        <p><a href="mailto:Support@emailplatformadvisor.online">Support@emailplatformadvisor.online</a></p>

        <h2>Security</h2>
        <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated date.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:Support@emailplatformadvisor.online">Support@emailplatformadvisor.online</a>.</p>
      </div>
    </div>
  )
}
