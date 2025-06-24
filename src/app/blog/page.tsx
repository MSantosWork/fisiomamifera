import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function Blog() {
  const postsDir = path.join(process.cwd(), 'src/app/blog')
  const posts = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
      title: file
        .replace(/-/g, ' ')
        .replace(/\.mdx$/, '')
        .replace(/\b\w/g, (l) => l.toUpperCase()),
    }))
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <ul className="list-disc pl-4 space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-rose-600 underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
