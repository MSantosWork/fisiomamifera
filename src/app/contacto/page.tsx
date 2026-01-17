import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con Fisiomamifera para resolver dudas o solicitar información sobre fisioterapia de suelo pélvico, embarazo y postparto.',
}

export default function ContactoPage() {
  return (
    <div className="bg-cream">
      <section className="section bg-hero-glow">
        <div className="container-base text-center">
          <span className="badge">Contacto</span>
          <h1 className="mt-4 text-4xl font-serif font-semibold text-ink md:text-5xl">Hablemos con calma</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cocoa">
            Estoy aquí para resolver tus dudas y acompañarte en tu proceso. Respondo personalmente en un plazo de 24-48h.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="card space-y-6"
            action="mailto:info@fisiomamifera.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-ink">
                Nombre completo
              </label>
              <input type="text" id="nombre" name="nombre" required className="input mt-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-ink">
                Email
              </label>
              <input type="email" id="email" name="email" required className="input mt-2" />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-ink">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className="textarea mt-2"
                placeholder="Cuéntame cómo puedo ayudarte"
              />
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="privacidad" required className="mt-1 h-4 w-4 accent-rose" />
              <label htmlFor="privacidad" className="text-xs text-cocoa">
                He leído y acepto la <Link href="/legal" className="font-semibold text-rose">política de privacidad</Link>.
              </label>
            </div>
            <button type="submit" className="btn-primary w-full">
              Enviar mensaje
            </button>
            <p className="text-xs text-cocoa">
              Si tu gestor de correo no se abre, puedes escribir directamente a <span className="font-semibold text-ink">info@fisiomamifera.com</span>.
            </p>
          </form>

          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-semibold text-ink">Contacto directo</h2>
              <p className="mt-3 text-sm text-cocoa">Puedes escribirme o llamarme para resolver dudas rápidas.</p>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  Email: <a href="mailto:info@fisiomamifera.com" className="font-semibold text-rose">info@fisiomamifera.com</a>
                </p>
                <p>
                  Teléfono: <a href="tel:+34600000000" className="font-semibold text-rose">+34 600 00 00 00</a>
                </p>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-ink">WhatsApp</h3>
              <p className="mt-3 text-sm text-cocoa">Si prefieres un mensaje rápido, escríbeme por WhatsApp.</p>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 w-full"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-ink">Ubicación</h3>
              <p className="mt-3 text-sm text-cocoa">
                Consulta presencial en Madrid. Dirección exacta bajo confirmación al reservar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
