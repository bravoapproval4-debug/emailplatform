import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticlesByCategory, categories } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) return {}

  return {
    title: `${category.name} Guides`,
    description: `${category.description} Browse all ${category.name} guides on Email Advisor.`,
    alternates: { canonical: `https://emailplatformadvisor.online/category/${slug}` },
    openGraph: {
      title: `${category.name} Guides | Email Advisor`,
      description: category.description,
      url: `https://emailplatformadvisor.online/category/${slug}`,
      type: 'website',
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) notFound()

  const articles = getArticlesByCategory(slug)

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2.5rem' }}>
        <Link href="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '13px' }}>Home</Link>
        <span style={{ color: '#374151' }}>/</span>
        <span style={{ color: '#6b7280', fontSize: '13px' }}>Topics</span>
        <span style={{ color: '#374151' }}>/</span>
        <span style={{ color: '#0B996E', fontSize: '13px', fontWeight: 600 }}>{category.name}</span>
      </div>

      {/* Header */}
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
            marginBottom: '1rem',
          }}
        >
          {articles.length} Guides
        </div>
        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            color: '#f9fafb',
            margin: '0 0 0.75rem',
          }}
        >
          <span style={{ color: '#0B996E' }}>Brevo</span> {category.name}
        </h1>
        <p style={{ color: '#6b7280', fontSize: '17px', lineHeight: 1.7, maxWidth: '600px', margin: 0 }}>
          {category.description}
        </p>
      </div>

      {/* Other categories */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
        {categories.filter((c) => c.slug !== slug).map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            style={{
              background: '#111111',
              border: '1px solid #1E1E1E',
              color: '#6b7280',
              padding: '6px 14px',
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Articles */}
      {articles.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#4b5563' }}>
          No guides in this category yet.
        </div>
      )}
    </div>
  )
}
