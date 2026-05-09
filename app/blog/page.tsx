import type { Metadata } from 'next'
import { getAllArticles, categories } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Brevo Guides',
  description: 'Browse our complete library of Brevo email marketing guides. Find tutorials on campaigns, automation, deliverability, analytics, and more.',
  alternates: { canonical: 'https://emailplatformadvisor.online/blog' },
  openGraph: {
    title: 'All Brevo Guides | Email Advisor',
    description: 'Complete library of Brevo email marketing guides.',
    url: 'https://emailplatformadvisor.online/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  const articles = getAllArticles()

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#f9fafb', margin: '0 0 0.75rem' }}>
          All <span style={{ color: '#0B996E' }}>Brevo</span> Guides
        </h1>
        <p style={{ color: '#6b7280', fontSize: '17px', lineHeight: 1.7, maxWidth: '600px', margin: 0 }}>
          Comprehensive tutorials and guides covering every aspect of Brevo email marketing — from your first campaign to advanced automation.
        </p>
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            style={{
              background: 'rgba(11,153,110,0.08)',
              border: '1px solid rgba(11,153,110,0.2)',
              color: '#0B996E',
              padding: '6px 16px',
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Articles grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
