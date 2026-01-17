import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Fisioterapia de suelo pélvico, embarazo, postparto y consulta online. Tratamientos personalizados en Fisiomamifera.',
}

const servicios = [
  {
    title: 'Fisioterapia de suelo pélvico',
    description:
      'Valoración completa para incontinencia, dolor pélvico, prolapsos o prevención. Trabajamos con objetivos claros y ejercicios adaptados.',
    price: ['Primera consulta y valoración: 70€', 'Sesión de seguimiento: 60€', 'Bono 5 sesiones: 275€'],
  },
  {
    title: 'Acompañamiento en embarazo',
    description:
      'Sesiones para aliviar molestias, mejorar la movilidad, preparar el suelo pélvico y resolver dudas con calma.',
    price: ['Sesión individual: 60€', 'Bono 5 sesiones: 250€'],
  },
  {
    title: 'Recuperación postparto',
    description:
      'Revisión integral del suelo pélvico y abdomen, cicatrices y retorno progresivo a la actividad física.',
    price: ['Primera consulta postparto: 70€', 'Sesión de seguimiento: 60€', 'Bono 5 sesiones: 275€'],
  },
  {
    title: 'Consulta online',
    description:
      'Plan de ejercicios y seguimiento desde casa. Ideal para educación, prevención y acompañamiento continuado.',
    price: ['Consulta online: 50€', 'Bono 5 sesiones online: 200€'],
  },
]

const preguntas = [
  {
    question: '¿Necesito derivación médica?',
    answer: 'No es necesaria. Puedes reservar directamente cuando tengas molestias o quieras prevenir.',
  },
  {
    question: '¿Cuánto dura una sesión?',
    answer: 'Las sesiones suelen durar entre 50 y 60 minutos para trabajar con calma y detalle.',
  },
  {
    question: '¿Atención para hombres?',
    answer: 'Sí, la fisioterapia de suelo pélvico también es útil en disfunciones masculinas.',
  },
]

export default function ServiciosPage() {
  return (
    <div className="bg-cream">
      <section className="section bg-hero-glow">
        <div className="container-base text-center">
          <span className="badge">Servicios personalizados</span>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-ink md:text-5xl">
            Tratamientos pensados para cada etapa
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-cocoa">
            Acompaño a mujeres y personas con disfunciones pélvicas con un enfoque integral, cercano y respetuoso, siempre adaptado a tu historia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-base grid gap-8 lg:grid-cols-2">
          {servicios.map((servicio) => (
            <article key={servicio.title} className="card card-hover">
              <h2 className="text-2xl font-serif font-semibold text-ink">{servicio.title}</h2>
              <p className="mt-4 text-sm text-cocoa">{servicio.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink">
                {servicio.price.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/cita" className="btn-secondary mt-6">
                Reservar este servicio
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <span className="badge">Preguntas frecuentes</span>
            <h2 className="text-3xl font-serif font-semibold text-ink">Resolvemos tus dudas</h2>
            <p className="text-cocoa">
              Si necesitas más información antes de reservar, escríbeme y te orientaré sobre el servicio adecuado.
            </p>
            <Link href="/contacto" className="btn-primary">
              Contactar ahora
            </Link>
          </div>
          <div className="space-y-3">
            {preguntas.map((item) => (
              <details key={item.question} className="rounded-xl border border-stone/40 bg-white px-4 py-3 shadow-soft">
                <summary className="cursor-pointer text-sm font-semibold text-ink">{item.question}</summary>
                <p className="mt-2 text-sm text-cocoa">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base rounded-2xl border border-stone/30 bg-white p-10 text-center shadow-soft">
          <h2 className="text-3xl font-serif font-semibold text-ink">¿Quieres empezar ya?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-cocoa">
            Reserva tu cita y construiremos juntas un plan de cuidado realista y sostenible.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/cita" className="btn-primary">
              Reservar cita
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Solicitar información
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
