'use client'
import { useForm } from 'react-hook-form'
import type { Metadata } from 'next'
import Link from 'next/link'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  modality: string
  preferredDates: string
  message: string
  privacy: boolean
}

export const metadata: Metadata = {
  title: 'Reserva tu cita',
  description: 'Reserva tu cita presencial u online con Marina González Galán, matrona y fisioterapeuta. Atención personalizada y profesional.',
}

export default function CitaPage() {
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('/cita/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        alert('¡Gracias! Te contactaré pronto.')
        reset()
      } else {
        alert('Hubo un error. Por favor, inténtalo de nuevo.')
      }
    } catch {
      alert('Hubo un error. Por favor, inténtalo de nuevo.')
    }
  }

  return (
    <div className="min-h-screen bg-crudo py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-musgoprofundo mb-4 text-center">Reserva tu cita</h1>
        <p className="text-lg text-musgoprofundo mb-8 text-center">
          Elige el tipo de consulta que mejor se adapte a ti. Te acompaño con profesionalidad y cercanía, tanto en mi consulta de Madrid como online.
        </p>

        {/* Explicación del proceso */}
        <div className="bg-rosasuave rounded-xl shadow-md p-6 mb-8 border border-grispiedra">
          <h2 className="text-xl font-semibold text-musgoprofundo mb-2">¿Cómo funciona?</h2>
          <ol className="list-decimal list-inside text-textoprincipal space-y-1">
            <li>Rellena el formulario con tus datos y preferencias.</li>
            <li>Me pondré en contacto contigo para confirmar la cita y resolver cualquier duda.</li>
            <li>Recibirás un email/WhatsApp con la confirmación y detalles.</li>
            <li>En caso de consulta online, te enviaré el enlace de videollamada.</li>
          </ol>
        </div>

        {/* Formulario de reserva */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-md p-6 space-y-6 border border-grispiedra" autoComplete="off">
          <div>
            <label htmlFor="nombre" className="block text-musgoprofundo font-medium mb-1">Nombre completo *</label>
            <input
              type="text"
              id="nombre"
              required
              className="w-full border border-salviaclaro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgoprofundo"
              {...register('firstName')}
            />
          </div>
          <div>
            <label htmlFor="apellidos" className="block text-musgoprofundo font-medium mb-1">Apellidos *</label>
            <input
              type="text"
              id="apellidos"
              required
              className="w-full border border-salviaclaro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgoprofundo"
              {...register('lastName')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-musgoprofundo font-medium mb-1">Email *</label>
            <input
              type="email"
              id="email"
              required
              className="w-full border border-salviaclaro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgoprofundo"
              {...register('email')}
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-musgoprofundo font-medium mb-1">Teléfono *</label>
            <input
              type="tel"
              id="telefono"
              required
              className="w-full border border-salviaclaro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgoprofundo"
              {...register('phone')}
            />
          </div>
          <div>
            <label htmlFor="tipo" className="block text-musgoprofundo font-medium mb-1">Tipo de consulta *</label>
            <select
              id="tipo"
              required
              className="w-full border border-salviaclaro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgoprofundo"
              {...register('modality')}
            >
              <option value="">Selecciona una opción</option>
              <option value="presencial">Presencial (Madrid)</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div>
            <label htmlFor="servicio" className="block text-musgoprofundo font-medium mb-1">Servicio *</label>
            <select
              id="servicio"
              required
              className="w-full border border-salviaclaro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgoprofundo"
              {...register('service')}
            >
              <option value="">Selecciona un servicio</option>
              <option value="suelo-pelvico">Fisioterapia de Suelo Pélvico</option>
              <option value="embarazo">Acompañamiento Embarazo</option>
              <option value="postparto">Recuperación Postparto</option>
              <option value="consulta-online">Consulta Online</option>
            </select>
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-musgoprofundo font-medium mb-1">Mensaje (opcional)</label>
            <textarea
              id="mensaje"
              rows={3}
              className="w-full border border-salviaclaro rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-musgoprofundo"
              placeholder="Cuéntame brevemente tu caso o tus preferencias de horario"
              {...register('message')}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacidad"
              required
              className="accent-rosaintenso"
              {...register('privacy')}
            />
            <label htmlFor="privacidad" className="text-grispiedra text-sm">He leído y acepto la <Link href="/legal" className="underline text-rosaintenso">política de privacidad</Link>.</label>
          </div>
          <button type="submit" className="btn-primary w-full">Solicitar cita</button>
        </form>

        {/* WhatsApp y contacto rápido */}
        <div className="text-center mt-8">
          <p className="text-musgoprofundo mb-2">¿Prefieres hablar directamente?</p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-salviaclaro hover:bg-musgoprofundo text-white font-semibold px-6 py-3 rounded-lg text-lg transition-colors shadow-md"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 003.48 20.52l-1.3 4.77a1 1 0 001.22 1.22l4.77-1.3A12 12 0 0020.52 3.48zm-8.52 17a10 10 0 117.07-2.93A10 10 0 0112 20.48zm5.2-7.2a8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93z" /></svg>
            Reservar por WhatsApp
          </a>
        </div>

        {/* Aviso legal RGPD */}
        <div className="mt-10 text-xs text-grispiedra text-center">
          Los datos facilitados serán tratados de forma confidencial y únicamente para la gestión de tu cita, conforme al RGPD y la <Link href="/legal" className="underline text-rosaintenso">política de privacidad</Link>.
        </div>
      </div>
    </div>
  )
}
