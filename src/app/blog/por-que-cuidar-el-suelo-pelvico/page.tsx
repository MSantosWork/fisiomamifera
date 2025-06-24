import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Por qué cuidar el suelo pélvico?',
  description: 'La importancia de la prevención y el tratamiento del suelo pélvico en todas las etapas de la vida. Artículo de Marina González Galán, matrona y fisioterapeuta.',
}

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md mt-8 border border-gris-piedra">
      <div className="mb-6">
        <Link href="/blog" className="text-rosa-intenso hover:underline text-sm">← Volver al blog</Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-musgo-profundo mb-2">¿Por qué cuidar el suelo pélvico?</h1>
      <div className="text-gris-piedra text-sm mb-6">Publicado el 28 de marzo de 2024 · Por Marina González Galán</div>
      <div className="prose max-w-none text-texto-principal">
        <p>
          El suelo pélvico es un conjunto de músculos y tejidos que sostienen los órganos pélvicos y participan en funciones esenciales como la continencia, la sexualidad y el soporte de vísceras.
        </p>
        <h2>¿Por qué es importante?</h2>
        <ul>
          <li>Previene incontinencias y prolapsos.</li>
          <li>Mejora la calidad de vida y la función sexual.</li>
          <li>Facilita el embarazo, parto y recuperación postparto.</li>
        </ul>
        <h2>¿Cuándo debo revisarlo?</h2>
        <p>
          Es recomendable acudir a una valoración de suelo pélvico en etapas clave: embarazo, postparto, menopausia, tras cirugías o si hay síntomas como escapes de orina, dolor o sensación de peso.
        </p>
        <h2>¿Cómo se cuida?</h2>
        <ul>
          <li>Ejercicios específicos guiados por una profesional.</li>
          <li>Evitar el estreñimiento y los esfuerzos excesivos.</li>
          <li>Buena postura y hábitos saludables.</li>
        </ul>
        <p>
          Cuidar tu suelo pélvico es invertir en tu salud presente y futura. ¡No dudes en consultarme si tienes dudas!
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link href="/blog" className="text-rosa-intenso hover:underline font-semibold">← Volver al blog</Link>
      </div>
    </article>
  )
} 