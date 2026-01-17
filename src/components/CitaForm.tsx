'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface FormValues {
  fullName: string
  email: string
  phone: string
  service: string
  modality: string
  message: string
  privacy: boolean
}

export default function CitaForm() {
  const { register, handleSubmit, reset } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    const subject = `Solicitud de cita - ${data.fullName}`
    const body = [
      `Nombre: ${data.fullName}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.phone}`,
      `Servicio: ${data.service}`,
      `Modalidad: ${data.modality}`,
      `Mensaje: ${data.message || 'Sin mensaje adicional'}`,
    ].join('\n')

    const mailto = `mailto:info@fisiomamifera.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6" autoComplete="off">
      <div>
        <label htmlFor="nombre" className="block text-sm font-semibold text-ink">
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          required
          className="input mt-2"
          {...register('fullName')}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="input mt-2"
          {...register('email')}
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-semibold text-ink">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          required
          className="input mt-2"
          {...register('phone')}
        />
      </div>
      <div>
        <label htmlFor="tipo" className="block text-sm font-semibold text-ink">
          Modalidad
        </label>
        <select
          id="tipo"
          required
          className="select mt-2"
          {...register('modality')}
        >
          <option value="">Selecciona una opción</option>
          <option value="Presencial (Madrid)">Presencial (Madrid)</option>
          <option value="Online">Online</option>
        </select>
      </div>
      <div>
        <label htmlFor="servicio" className="block text-sm font-semibold text-ink">
          Servicio
        </label>
        <select
          id="servicio"
          required
          className="select mt-2"
          {...register('service')}
        >
          <option value="">Selecciona un servicio</option>
          <option value="Fisioterapia de suelo pélvico">Fisioterapia de suelo pélvico</option>
          <option value="Acompañamiento en embarazo">Acompañamiento en embarazo</option>
          <option value="Recuperación postparto">Recuperación postparto</option>
          <option value="Consulta online">Consulta online</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-semibold text-ink">
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className="textarea mt-2"
          placeholder="Cuéntame brevemente tu caso o preferencias de horario"
          {...register('message')}
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacidad"
          required
          className="mt-1 h-4 w-4 accent-rose"
          {...register('privacy')}
        />
        <label htmlFor="privacidad" className="text-xs text-cocoa">
          He leído y acepto la{' '}
          <Link href="/legal" className="font-semibold text-rose">
            política de privacidad
          </Link>
          .
        </label>
      </div>
      <button type="submit" className="btn-primary w-full">
        Solicitar cita
      </button>
      <p className="text-xs text-cocoa">
        Se abrirá tu gestor de correo para enviar la solicitud. Si necesitas ayuda, también puedes escribir por WhatsApp.
      </p>
    </form>
  )
}
