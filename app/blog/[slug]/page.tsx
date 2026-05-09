import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import { getArticleBySlug, getAllSlugs, getAllArticles, categories } from '@/lib/articles'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://emailplatformadvisor.online/blog/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://emailplatformadvisor.online/blog/${slug}`,
      type: 'article',
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const htmlContent = String(marked.parse(article.content))

  const allArticles = getAllArticles()
  const relatedArticles = [
    ...allArticles.filter((a) => a.categorySlug === article.categorySlug && a.slug !== slug),
    ...allArticles.filter((a) => a.categorySlug !== article.categorySlug && a.slug !== slug),
  ].slice(0, 4)

  const currentCategory = categories.find((c) => c.slug === article.categorySlug)

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '13px' }}>Home</Link>
        <span style={{ color: '#374151' }}>/</span>
        <Link href="/blog" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '13px' }}>All Guides</Link>
        <span style={{ color: '#374151' }}>/</span>
        <span style={{ color: '#6b7280', fontSize: '13px' }}>{article.title}</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '3rem',
          alignItems: 'start',
        }}
        className="article-layout"
      >
        {/* Main content */}
        <article>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Link
                href={`/category/${article.categorySlug}`}
                style={{
                  background: 'rgba(255,209,79,0.12)',
                  color: '#FFD14F',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  textDecoration: 'none',
                }}
              >
                {article.category}
              </Link>
              <span style={{ color: '#4b5563', fontSize: '13px' }}>{article.readTime}</span>
            </div>
            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
                color: '#f9fafb',
                margin: '0 0 1rem',
                lineHeight: 1.2,
              }}
            >
              {article.title}
            </h1>
            <p style={{ color: '#6b7280', fontSize: '17px', lineHeight: 1.7, margin: 0 }}>
              {article.description}
            </p>
          </div>

          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>

        {/* Sidebar */}
        <aside
          style={{
            position: 'sticky',
            top: '80px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
          className="article-sidebar"
        >
          {/* CTA Card */}
          <div
            style={{
              background: 'rgba(255,209,79,0.1)',
              border: '1px solid rgba(255,209,79,0.25)',
              borderRadius: '10px',
              padding: '1.5rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', color: '#f9fafb', marginBottom: '0.4rem' }}>
              Try Brevo Free
            </div>
            <div style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '1.25rem' }}>
              300 emails/day · No credit card
            </div>
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FFD14F',
                color: '#1A1200',
                padding: '0.6rem 1.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                display: 'inline-block',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
              }}
            >
              Get Started Free
            </a>
          </div>

          {/* Category badge */}
          {currentCategory && (
            <div style={{ background: '#111111', border: '1px solid #1E1E1E', borderRadius: '10px', padding: '1rem' }}>
              <div style={{ fontSize: '11px', color: '#4b5563', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>Category</div>
              <Link
                href={`/category/${article.categorySlug}`}
                style={{
                  color: '#FFD14F',
                  textDecoration: 'none',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                }}
              >
                {article.category}
              </Link>
            </div>
          )}

          {/* More Guides */}
          <div style={{ background: '#111111', border: '1px solid #1E1E1E', borderRadius: '10px', padding: '1.25rem' }}>
            <div style={{ fontSize: '11px', color: '#4b5563', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>More Guides</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '0.75rem' }}>
                    <div style={{ color: '#e5e7eb', fontSize: '13px', fontWeight: 500, lineHeight: 1.4, marginBottom: '3px' }}>{a.title}</div>
                    <div style={{ color: '#4b5563', fontSize: '12px' }}>{a.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Topics */}
          <div style={{ background: '#111111', border: '1px solid #1E1E1E', borderRadius: '10px', padding: '1.25rem' }}>
            <div style={{ fontSize: '11px', color: '#4b5563', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>All Topics</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  style={{
                    color: cat.slug === article.categorySlug ? '#FFD14F' : '#6b7280',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: cat.slug === article.categorySlug ? 600 : 400,
                  }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .article-layout {
            grid-template-columns: 1fr !important;
          }
          .article-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
