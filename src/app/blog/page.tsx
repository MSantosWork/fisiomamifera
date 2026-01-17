import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre salud femenina, suelo pélvico, embarazo y postparto. Recursos y consejos de Fisiomamifera.',
}

const posts = [
  {
    slug: 'diferencias-entre-matrona-fisioterapeuta-y-ginecologa',
    title: 'Diferencias entre matrona, fisioterapeuta y ginecóloga',
    summary: '¿A quién acudir en cada momento? Descubre el papel de cada profesional en la salud femenina.',
    date: '2024-04-10',
  },
  {
    slug: 'por-que-cuidar-el-suelo-pelvico',
    title: '¿Por qué cuidar el suelo pélvico?',
    summary: 'La importancia de la prevención y el tratamiento del suelo pélvico en todas las etapas de la vida.',
    date: '2024-03-28',
  },
  {
    slug: 'recuperacion-postparto',
    title: 'Recuperación postparto: claves para tu bienestar',
    summary: 'Consejos y ejercicios para una recuperación segura y efectiva tras el parto.',
    date: '2024-03-15',
  },
]

export default function BlogPage() {
  return (
    <div className="bg-cream">
      <section className="section bg-hero-glow">
        <div className="container-base text-center">
          <span className="badge">Blog</span>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-ink md:text-5xl">Recursos para tu bienestar</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cocoa">
            Artículos claros y cercanos sobre salud femenina, suelo pélvico, embarazo y postparto.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-base grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card card-hover group"
            >
              <span className="badge">
                {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <h2 className="mt-4 text-2xl font-serif font-semibold text-ink group-hover:text-rose">{post.title}</h2>
              <p className="mt-3 text-sm text-cocoa">{post.summary}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-rose">
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>
        <div className="container-base mt-10 text-center text-sm text-cocoa">
          ¿Te gustaría que hable sobre algún tema concreto?{' '}
          <Link href="/contacto" className="font-semibold text-rose">
            Envíame tu sugerencia
          </Link>.
        </div>
      </section>
    </div>
  )
}
