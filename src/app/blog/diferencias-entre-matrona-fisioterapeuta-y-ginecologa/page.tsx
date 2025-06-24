import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diferencias entre matrona, fisioterapeuta y ginecóloga',
  description: '¿A quién acudir en cada momento? Descubre el papel de cada profesional en la salud femenina. Explicación clara y profesional por Marina González Galán.',
}

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md mt-8 border border-gris-piedra">
      <div className="mb-6">
        <Link href="/blog" className="text-rosa-intenso hover:underline text-sm">← Volver al blog</Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-musgo-profundo mb-2">Diferencias entre matrona, fisioterapeuta y ginecóloga</h1>
      <div className="text-gris-piedra text-sm mb-6">Publicado el 10 de abril de 2024 · Por Marina González Galán</div>
      <div className="prose max-w-none text-texto-principal">
        <p>
          En el ámbito de la salud femenina, es habitual tener dudas sobre a qué profesional acudir en cada momento. Matrona, fisioterapeuta y ginecóloga son figuras clave, pero cada una tiene un papel específico:
        </p>
        <h2>¿Qué hace una matrona?</h2>
        <p>
          La matrona es la especialista en el acompañamiento integral de la mujer durante el embarazo, parto, postparto y salud sexual y reproductiva. Ofrece educación, apoyo emocional, revisiones, preparación al parto y atención al recién nacido.
        </p>
        <h2>¿Qué hace una fisioterapeuta de suelo pélvico?</h2>
        <p>
          La fisioterapeuta especializada en suelo pélvico previene, valora y trata disfunciones como incontinencia, dolor pélvico, prolapsos o recuperación postparto. Utiliza técnicas manuales, ejercicios y educación para mejorar la calidad de vida.
        </p>
        <h2>¿Qué hace una ginecóloga?</h2>
        <p>
          La ginecóloga es la médica especialista en el diagnóstico y tratamiento de patologías del aparato reproductor femenino, revisiones periódicas, anticoncepción, cirugías y seguimiento de embarazos de riesgo.
        </p>
        <h2>¿A quién acudir?</h2>
        <ul>
          <li><strong>Matrona:</strong> Embarazo normal, preparación al parto, lactancia, revisiones de salud sexual.</li>
          <li><strong>Fisioterapeuta:</strong> Problemas de suelo pélvico, dolor, recuperación postparto, prevención.</li>
          <li><strong>Ginecóloga:</strong> Patologías, cirugías, revisiones médicas, embarazos de riesgo.</li>
        </ul>
        <p>
          Lo ideal es que los tres perfiles trabajen de forma coordinada para ofrecerte una atención integral y personalizada.
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link href="/blog" className="text-rosa-intenso hover:underline font-semibold">← Volver al blog</Link>
      </div>
    </article>
  )
} 