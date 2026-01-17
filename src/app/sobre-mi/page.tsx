import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Marina González Galán, matrona y fisioterapeuta especializada en suelo pélvico. Valores, formación y enfoque de trabajo.',
}

const valores = [
  {
    title: 'Cercanía',
    description: 'Un espacio seguro para que puedas hablar con calma y sentirte acompañada.',
  },
  {
    title: 'Evidencia',
    description: 'Intervenciones basadas en ciencia y en la experiencia clínica más actual.',
  },
  {
    title: 'Autonomía',
    description: 'Te doy herramientas para que comprendas tu cuerpo y tomes decisiones informadas.',
  },
]

export default function SobreMiPage() {
  return (
    <div className="bg-cream">
      <section className="section bg-hero-glow">
        <div className="container-base grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <span className="badge">Sobre mí</span>
            <h1 className="text-4xl font-serif font-semibold text-ink md:text-5xl">
              Marina González Galán
            </h1>
            <p className="text-lg text-cocoa">
              Soy matrona y fisioterapeuta especializada en suelo pélvico. Mi misión es acompañarte con respeto, claridad y cercanía en cada etapa de tu vida.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://instagram.com/fisiomamifera" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Instagram
              </a>
              <Link href="/cita" className="btn-primary">
                Reservar cita
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-stone/30 bg-white p-8 shadow-soft">
            <div className="rounded-2xl bg-mist p-6">
              <h2 className="text-2xl font-serif font-semibold text-ink">Mi enfoque</h2>
              <p className="mt-3 text-sm text-cocoa">
                Combino fisioterapia, educación y acompañamiento emocional para que cada sesión tenga sentido y se adapte a ti.
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-rose" />
                Formación especializada en suelo pélvico, embarazo y postparto.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-rose" />
                Experiencia en consulta privada y acompañamiento hospitalario.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-rose" />
                Actualización constante con cursos y congresos clínicos.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-ink">Mi historia</h2>
            <p className="text-cocoa">
              Desde muy joven supe que quería dedicarme a la salud femenina. Me formé como fisioterapeuta y posteriormente como matrona para ofrecer una visión integral del bienestar de la mujer.
            </p>
            <p className="text-cocoa">
              Creo en una atención personalizada, con escucha activa y objetivos realistas. Mi prioridad es que cada mujer se sienta comprendida y empoderada durante el proceso.
            </p>
          </div>
          <div className="rounded-2xl border border-stone/30 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Formación destacada</h3>
            <ul className="mt-4 space-y-3 text-sm text-cocoa">
              <li>Grado en Fisioterapia · Universidad Europea de Madrid</li>
              <li>Especialización en suelo pélvico, embarazo y postparto</li>
              <li>Formación continua en dolor pélvico y salud íntima</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-base text-center">
          <h2 className="text-3xl font-serif font-semibold text-ink">Valores que guían mi trabajo</h2>
          <p className="mx-auto mt-4 max-w-2xl text-cocoa">
            Cada sesión se construye desde la confianza, el respeto y la evidencia científica.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {valores.map((valor) => (
              <article key={valor.title} className="card card-hover text-left">
                <h3 className="text-xl font-semibold text-ink">{valor.title}</h3>
                <p className="mt-3 text-sm text-cocoa">{valor.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base rounded-2xl border border-stone/30 bg-white p-10 text-center shadow-soft">
          <h2 className="text-3xl font-serif font-semibold text-ink">¿Quieres reservar una cita?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-cocoa">
            Estoy aquí para acompañarte con calma y profesionalidad en cada etapa.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/cita" className="btn-primary">
              Reservar cita
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Hacer una consulta
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
