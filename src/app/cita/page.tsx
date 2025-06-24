'use client'
import { useForm } from 'react-hook-form'

interface FormValues {
  name: string
  email: string
  message: string
}

export default function Cita() {
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const onSubmit = async (data: FormValues) => {
    await fetch('/cita/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    reset()
  }

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Reserva tu cita</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <input className="w-full border p-2" placeholder="Nombre" {...register('name')} />
        <input className="w-full border p-2" placeholder="Email" type="email" {...register('email')} />
        <textarea className="w-full border p-2" placeholder="Mensaje" {...register('message')} />
        <button className="bg-greenSoft px-4 py-2 rounded" type="submit">Enviar</button>
      </form>
      <a href="https://wa.me/34600000000" className="block text-center text-white bg-rose-600 py-2 rounded">WhatsApp</a>
    </div>
  )
}
