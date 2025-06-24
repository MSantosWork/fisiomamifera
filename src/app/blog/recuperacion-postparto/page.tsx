import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recuperación postparto: claves para tu bienestar',
  description: 'Consejos y ejercicios para una recuperación segura y efectiva tras el parto. Artículo de Marina González Galán, matrona y fisioterapeuta.',
}

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md mt-8 border border-gris-piedra">
      <div className="mb-6">
        <Link href="/blog" className="text-rosa-intenso hover:underline text-sm">← Volver al blog</Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-musgo-profundo mb-2">Recuperación postparto: claves para tu bienestar</h1>
      <div className="text-gris-piedra text-sm mb-6">Publicado el 15 de marzo de 2024 · Por Marina González Galán</div>
      <div className="prose max-w-none text-texto-principal">
        <p>
          El postparto es una etapa de grandes cambios físicos y emocionales. Una recuperación adecuada es clave para el bienestar de la madre.
        </p>
        <h2>¿Por qué es importante la recuperación postparto?</h2>
        <ul>
          <li>Previene disfunciones de suelo pélvico y abdomen.</li>
          <li>Mejora la energía y el estado de ánimo.</li>
          <li>Facilita la vuelta a la actividad física y la vida cotidiana.</li>
        </ul>
        <h2>Consejos para una buena recuperación</h2>
        <ul>
          <li>Acude a una valoración postparto profesional.</li>
          <li>Realiza ejercicios adaptados y progresivos.</li>
          <li>Cuida tu descanso, alimentación y apoyo emocional.</li>
        </ul>
        <h2>¿Cuándo pedir ayuda?</h2>
        <p>
          Si tienes dolor, escapes de orina, sensación de peso o dudas sobre tu recuperación, consulta con una matrona o fisioterapeuta especializada.
        </p>
        <p>
          Recuerda: cada mujer y cada postparto son únicos. Escucha tu cuerpo y permítete un proceso respetuoso y acompañado.
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link href="/blog" className="text-rosa-intenso hover:underline font-semibold">← Volver al blog</Link>
      </div>
    </article>
  )
} 