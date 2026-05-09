import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description: 'Read how Email Advisor uses cookies on our website and how you can control your cookie preferences.',
  alternates: { canonical: 'https://emailplatformadvisor.online/cookies-policy' },
  robots: { index: true, follow: true },
}

export default function CookiesPolicyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.25rem', color: '#f9fafb', marginBottom: '0.5rem' }}>
        Cookies Policy
      </h1>
      <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '2.5rem' }}>Last updated: 2024</p>

      <div className="prose-article">
        <p>Email Advisor uses cookies and similar tracking technologies on our website. This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies.</p>

        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow the website to remember your actions and preferences over time, so you do not have to re-enter information each time you visit.</p>

        <h2>Types of Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p>These cookies are strictly necessary for the website to function. They enable core features such as remembering your cookie consent preference. Without these cookies, certain features of the website cannot be provided.</p>

        <h3>Analytics Cookies</h3>
        <p>We may use analytics cookies (such as Google Analytics) to understand how visitors interact with our website. These cookies collect information about the number of visitors, which pages are most visited, how long visitors spend on pages, and how they arrived at our site. This data is aggregated and anonymous.</p>

        <h3>Preference Cookies</h3>
        <p>These cookies allow our website to remember choices you have made and provide enhanced, more personalized features. For example, remembering whether you have accepted or declined cookies.</p>

        <h2>How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Remember your cookie consent choice</li>
          <li>Analyze how our content is used so we can improve it</li>
          <li>Understand which guides are most helpful to our readers</li>
          <li>Measure the effectiveness of our affiliate links</li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>Some third-party services we use (such as analytics providers and affiliate networks) may place cookies on your device. We do not control these cookies. Please refer to the privacy policies of these third parties for more information.</p>

        <h2>Managing Your Cookie Preferences</h2>
        <p>When you first visit our website, you will see a cookie banner giving you the option to accept or decline cookies. You can change your preference at any time by clearing your browser cookies and revisiting our site.</p>
        <p>You can also control cookies through your browser settings. Most browsers allow you to:</p>
        <ul>
          <li>View and delete cookies stored on your device</li>
          <li>Block cookies from specific or all websites</li>
          <li>Receive a notification before a cookie is stored</li>
        </ul>
        <p>Note that disabling certain cookies may affect the functionality of this website.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Cookies Policy from time to time to reflect changes in our practices or applicable law. We will indicate the date of the most recent update at the top of this page.</p>

        <h2>Contact</h2>
        <p>If you have questions about our use of cookies, contact us at <a href="mailto:Support@emailplatformadvisor.online">Support@emailplatformadvisor.online</a>.</p>
      </div>
    </div>
  )
}
