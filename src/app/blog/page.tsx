import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre salud femenina, suelo pélvico, embarazo, postparto y bienestar. Consejos y recursos de Marina González Galán, matrona y fisioterapeuta.',
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
    <div className="min-h-screen bg-crudo py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-musgoprofundo mb-4 text-center">Blog</h1>
        <p className="text-lg text-musgoprofundo mb-10 text-center">
          Consejos, recursos y artículos para tu bienestar. Información rigurosa y cercana sobre salud femenina, suelo pélvico, embarazo y postparto.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-grispiedra card-hover"
            >
              <div className="flex flex-col h-full">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-block bg-rosasuave text-musgoprofundo text-xs font-semibold px-3 py-1 rounded-full">
                    {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-musgoprofundo group-hover:text-rosaintenso mb-2">{post.title}</h2>
                <p className="text-textoprincipal flex-1">{post.summary}</p>
                <span className="mt-4 text-musgoprofundo font-semibold group-hover:text-rosaintenso group-hover:underline">Leer artículo →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center text-grispiedra">
          ¿Te gustaría que hablara sobre algún tema concreto? <Link href="/contacto" className="underline text-rosaintenso">Envíame tu sugerencia</Link>.
        </div>
      </div>
    </div>
  )
}
