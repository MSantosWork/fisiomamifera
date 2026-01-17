import type { Metadata } from 'next'
import Link from 'next/link'
import CitaForm from '@/components/CitaForm'

export const metadata: Metadata = {
  title: 'Reserva tu cita',
  description: 'Reserva tu cita presencial u online con Marina González Galán, matrona y fisioterapeuta. Atención personalizada y profesional.',
}

export default function CitaPage() {
  return (
    <div className="bg-cream">
      <section className="section bg-hero-glow">
        <div className="container-base text-center">
          <span className="badge">Reserva de cita</span>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-ink md:text-5xl">Reserva tu cita con calma</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cocoa">
            Elige el tipo de consulta que mejor se adapte a ti. Te acompañaré con profesionalidad y cercanía, tanto en consulta presencial como online.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <CitaForm />
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-semibold text-ink">¿Cómo funciona?</h2>
              <ol className="mt-3 space-y-2 text-sm text-cocoa">
                <li>1. Envías el formulario con tus preferencias.</li>
                <li>2. Te contacto para confirmar horario y modalidad.</li>
                <li>3. Recibes indicaciones claras para la sesión.</li>
              </ol>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-ink">WhatsApp directo</h3>
              <p className="mt-3 text-sm text-cocoa">
                Si lo prefieres, podemos coordinar la cita por mensaje.
              </p>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 w-full"
              >
                Reservar por WhatsApp
              </a>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-ink">Aviso de privacidad</h3>
              <p className="mt-3 text-sm text-cocoa">
                Los datos enviados se utilizan solo para gestionar tu cita, conforme al RGPD.
              </p>
              <Link href="/legal" className="mt-3 inline-flex text-sm font-semibold text-rose">
                Leer política de privacidad →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
