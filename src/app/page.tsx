import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Acompañamiento profesional en suelo pélvico, embarazo y postparto. Reserva tu cita presencial u online con Fisiomamifera.',
}

const servicios = [
  {
    title: 'Suelo pélvico',
    description: 'Valoración y tratamiento personalizados para dolor, incontinencia o prevención.',
  },
  {
    title: 'Embarazo',
    description: 'Sesiones para aliviar molestias, preparar el cuerpo y resolver dudas con confianza.',
  },
  {
    title: 'Postparto',
    description: 'Recuperación integral del suelo pélvico y abdomen con acompañamiento cercano.',
  },
  {
    title: 'Consulta online',
    description: 'Seguimiento y ejercicios desde casa, con planes claros y objetivos realistas.',
  },
]

const pasos = [
  {
    title: 'Primera escucha',
    description: 'Conocemos tu historia y tus necesidades en un entorno seguro y respetuoso.',
  },
  {
    title: 'Plan personalizado',
    description: 'Definimos objetivos realistas y un plan de tratamiento adaptado a tu ritmo.',
  },
  {
    title: 'Acompañamiento',
    description: 'Sesiones dinámicas con seguimiento y recursos para tu día a día.',
  },
]

export default function HomePage() {
  return (
    <div className="bg-cream">
      <section className="section bg-hero-glow">
        <div className="container-base grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="badge">Matrona · Fisioterapia de suelo pélvico</span>
            <h1 className="text-4xl font-serif font-semibold text-ink md:text-5xl lg:text-6xl">
              Acompañamiento profesional para que te sientas segura en cada etapa.
            </h1>
            <p className="text-lg text-cocoa md:text-xl">
              En Fisiomamifera encontrarás un espacio cálido y cercano para cuidar tu salud íntima, preparar tu embarazo y vivir el postparto con confianza.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/cita" className="btn-primary">
                Reservar cita
              </Link>
              <Link href="/servicios" className="btn-secondary">
                Ver servicios
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-cocoa">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sage" />
                Consulta presencial en Madrid
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose" />
                Atención online disponible
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-stone/30 bg-white p-8 shadow-soft">
            <div className="space-y-6">
              <div className="rounded-2xl bg-mist p-6">
                <h2 className="text-2xl font-serif font-semibold text-ink">Reserva con tranquilidad</h2>
                <p className="mt-3 text-sm text-cocoa">
                  Te responderé personalmente para confirmar la cita y resolver cualquier duda antes de la sesión.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose text-white">1</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Envíame tu solicitud</p>
                    <p className="text-sm text-cocoa">Completa el formulario o escríbeme por WhatsApp.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose text-white">2</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Confirmamos juntas</p>
                    <p className="text-sm text-cocoa">Ajustamos horario, modalidad y objetivos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose text-white">3</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Sesión personalizada</p>
                    <p className="text-sm text-cocoa">Saldrás con un plan claro y recursos prácticos.</p>
                  </div>
                </div>
              </div>
              <Link href="/cita" className="btn-primary w-full">
                Solicitar cita ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <span className="badge">Servicios principales</span>
              <h2 className="text-3xl font-serif font-semibold text-ink md:text-4xl">
                Tratamientos pensados para tu bienestar integral
              </h2>
              <p className="text-cocoa md:text-lg">
                Cada sesión combina evidencia científica, escucha activa y un plan adaptado a tu cuerpo y tu momento vital.
              </p>
            </div>
            <Link href="/servicios" className="btn-ghost">
              Ver detalle de servicios →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicios.map((servicio) => (
              <article key={servicio.title} className="card card-hover">
                <h3 className="text-xl font-semibold text-ink">{servicio.title}</h3>
                <p className="mt-3 text-sm text-cocoa">{servicio.description}</p>
                <Link href="/servicios" className="mt-4 inline-flex items-center text-sm font-semibold text-rose">
                  Saber más
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-base grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <span className="badge">Cómo trabajo</span>
            <h2 className="text-3xl font-serif font-semibold text-ink md:text-4xl">
              Un método cuidadoso, claro y respetuoso
            </h2>
            <p className="text-cocoa md:text-lg">
              Mi enfoque combina valoración clínica, educación y ejercicios específicos para ayudarte a tomar decisiones informadas.
            </p>
            <Link href="/sobre-mi" className="btn-secondary">
              Conocer mi historia
            </Link>
          </div>
          <div className="grid gap-4">
            {pasos.map((paso, index) => (
              <div key={paso.title} className="card card-hover flex gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage text-ink">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{paso.title}</h3>
                  <p className="text-sm text-cocoa">{paso.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="badge">Testimonios</span>
            <h2 className="text-3xl font-serif font-semibold text-ink md:text-4xl">
              Experiencias reales, acompañamiento cercano
            </h2>
            <p className="text-cocoa">
              Cada mujer vive su proceso de manera única. Mi compromiso es ofrecer un espacio donde te sientas escuchada y acompañada.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="card">
                <p className="text-sm text-cocoa">“Marina me explicó cada paso y me dio seguridad. Sentí que por fin entendía lo que me pasaba.”</p>
                <p className="mt-4 text-sm font-semibold text-ink">Laura · Postparto</p>
              </div>
              <div className="card">
                <p className="text-sm text-cocoa">“Su enfoque es muy humano. Me fui con ejercicios claros y calma para mi embarazo.”</p>
                <p className="mt-4 text-sm font-semibold text-ink">Marta · Embarazo</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-stone/30 bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-serif font-semibold text-ink">¿Tienes dudas frecuentes?</h3>
            <p className="mt-2 text-sm text-cocoa">Respuestas breves para ayudarte a decidir con tranquilidad.</p>
            <div className="mt-6 space-y-3">
              <details className="rounded-xl border border-stone/40 bg-mist px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold text-ink">¿Las sesiones son dolorosas?</summary>
                <p className="mt-2 text-sm text-cocoa">Siempre adapto el tratamiento a tu comodidad, explicando cada paso.</p>
              </details>
              <details className="rounded-xl border border-stone/40 bg-mist px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold text-ink">¿Cuándo es el mejor momento para venir?</summary>
                <p className="mt-2 text-sm text-cocoa">Puedes acudir en cualquier etapa si sientes molestias o quieres prevención.</p>
              </details>
              <details className="rounded-xl border border-stone/40 bg-mist px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold text-ink">¿Atiendes también online?</summary>
                <p className="mt-2 text-sm text-cocoa">Sí, las consultas online incluyen valoración, ejercicios guiados y seguimiento.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-rose">
        <div className="container-base text-center text-white">
          <h2 className="text-3xl font-serif font-semibold md:text-4xl">¿Lista para empezar tu proceso?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Reserva tu cita y da el primer paso hacia un cuidado íntimo más consciente y respetuoso.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/cita" className="btn-primary bg-white text-rose hover:bg-mist hover:text-rose">
              Reservar cita
            </Link>
            <Link href="/contacto" className="btn-secondary border-white text-white hover:bg-white hover:text-rose">
              Hacer una consulta
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
