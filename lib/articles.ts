import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Article {
  slug: string
  title: string
  description: string
  category: string
  categorySlug: string
  readTime: string
  content: string
}

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  category: string
  categorySlug: string
  readTime: string
}

export interface Category {
  name: string
  slug: string
  description: string
}

export const categories: Category[] = [
  {
    name: 'Email Marketing Basics',
    slug: 'email-marketing-basics',
    description: 'Master the fundamentals of email marketing with Brevo step-by-step guides.',
  },
  {
    name: 'Automation & Workflows',
    slug: 'automation-workflows',
    description: 'Build powerful automation sequences and workflows inside Brevo.',
  },
  {
    name: 'Deliverability & List Management',
    slug: 'deliverability-list-management',
    description: 'Ensure your emails land in the inbox and keep your list healthy.',
  },
  {
    name: 'Analytics & Reporting',
    slug: 'analytics-reporting',
    description: 'Understand your metrics and make data-driven decisions with Brevo.',
  },
  {
    name: 'vs Competitors',
    slug: 'vs-competitors',
    description: 'See how Brevo compares to popular alternatives in the market.',
  },
]

const articlesDirectory = path.join(process.cwd(), 'content', 'articles')

function getArticleFiles(): string[] {
  if (!fs.existsSync(articlesDirectory)) return []
  return fs.readdirSync(articlesDirectory).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
}

export function getAllArticles(): ArticleMeta[] {
  const files = getArticleFiles()
  return files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, '')
    const filePath = path.join(articlesDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      category: data.category as string,
      categorySlug: data.categorySlug as string,
      readTime: data.readTime as string,
    }
  })
}

export function getArticleBySlug(slug: string): Article | null {
  const extensions = ['.mdx', '.md']
  for (const ext of extensions) {
    const filePath = path.join(articlesDirectory, `${slug}${ext}`)
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        category: data.category as string,
        categorySlug: data.categorySlug as string,
        readTime: data.readTime as string,
        content,
      }
    }
  }
  return null
}

export function getArticlesByCategory(categorySlug: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.categorySlug === categorySlug)
}

export function getAllSlugs(): string[] {
  return getArticleFiles().map((f) => f.replace(/\.(mdx|md)$/, ''))
}
