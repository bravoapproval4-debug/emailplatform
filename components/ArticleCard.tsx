import Link from 'next/link'
import { ArticleMeta } from '@/lib/articles'

interface ArticleCardProps {
  article: ArticleMeta
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
      <div
        className="card-hover"
        style={{
          background: '#111111',
          border: '1px solid #1E1E1E',
          borderRadius: '10px',
          padding: '1.5rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              background: 'rgba(11,153,110,0.12)',
              color: '#0B996E',
              fontSize: '11px',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              padding: '3px 10px',
              borderRadius: '20px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {article.category}
          </span>
          <span style={{ color: '#4b5563', fontSize: '12px' }}>{article.readTime}</span>
        </div>

        <h3
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: '#f9fafb',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {article.title}
        </h3>

        <p
          style={{
            color: '#6b7280',
            fontSize: '14px',
            lineHeight: 1.6,
            margin: 0,
            flex: 1,
          }}
        >
          {article.description}
        </p>

        <div
          style={{
            color: '#0B996E',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          Read guide
          <span style={{ fontSize: '14px' }}>→</span>
        </div>
      </div>
    </Link>
  )
}
