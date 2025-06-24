import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con Marina González Galán, matrona y fisioterapeuta. Resuelve tus dudas o solicita información sobre los servicios de Fisiomamifera.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-crudo py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-musgo-profundo mb-4 text-center">Contacto</h1>
        <p className="text-lg text-musgo-profundo mb-8 text-center">
          ¿Tienes dudas o quieres más información? Escríbeme y te responderé lo antes posible. Estoy aquí para acompañarte en tu bienestar.
        </p>

        {/* Formulario de contacto */}
        <form className="bg-white rounded-xl shadow-md p-6 space-y-6 border border-gris-piedra" autoComplete="off">
          <div>
            <label htmlFor="nombre" className="block text-musgo-profundo font-medium mb-1">Nombre *</label>
            <input type="text" id="nombre" required className="w-full border border-salvia-claro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgo-profundo" />
          </div>
          <div>
            <label htmlFor="email" className="block text-musgo-profundo font-medium mb-1">Email *</label>
            <input type="email" id="email" required className="w-full border border-salvia-claro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgo-profundo" />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-musgo-profundo font-medium mb-1">Mensaje *</label>
            <textarea id="mensaje" rows={4} required className="w-full border border-salvia-claro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgo-profundo" placeholder="Cuéntame en qué puedo ayudarte" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="privacidad" required className="accent-rosa-intenso" />
            <label htmlFor="privacidad" className="text-gris-piedra text-sm">He leído y acepto la <Link href="/legal" className="underline text-rosa-intenso">política de privacidad</Link>.</label>
          </div>
          <button type="submit" className="btn-primary w-full">Enviar mensaje</button>
        </form>

        {/* Información de contacto */}
        <div className="mt-10 text-center space-y-2">
          <p className="text-musgo-profundo">Email: <a href="mailto:info@fisiomamifera.com" className="underline text-rosa-intenso">info@fisiomamifera.com</a></p>
          <p className="text-musgo-profundo">Teléfono: <a href="tel:+34600000000" className="underline text-rosa-intenso">+34 600 00 00 00</a></p>
          <p className="text-musgo-profundo">Consulta: Avenida Primero de Mayo 2, Madrid</p>
        </div>

        {/* WhatsApp */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-salvia-claro hover:bg-musgo-profundo text-white font-semibold px-6 py-3 rounded-lg text-lg transition-colors shadow-md"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 003.48 20.52l-1.3 4.77a1 1 0 001.22 1.22l4.77-1.3A12 12 0 0020.52 3.48zm-8.52 17a10 10 0 117.07-2.93A10 10 0 0112 20.48zm5.2-7.2a8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93z" /></svg>
            Escribir por WhatsApp
          </a>
        </div>

        {/* Aviso legal RGPD */}
        <div className="mt-10 text-xs text-gris-piedra text-center">
          Los datos facilitados serán tratados de forma confidencial y únicamente para responder a tu consulta, conforme al RGPD y la <Link href="/legal" className="underline text-rosa-intenso">política de privacidad</Link>.
        </div>
      </div>
    </div>
  )
}
