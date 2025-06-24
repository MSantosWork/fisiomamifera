import Link from 'next/link'

export default function Home() {
  return (
    <section className="space-y-8 text-center">
      <h1 className="text-3xl font-serif text-rose-600">
        Acompañando cada etapa desde la fisioterapia y la maternidad
      </h1>
      <p className="text-lg">Soy Marina González Galán, matrona y fisioterapeuta especializada en suelo pélvico.</p>
      <div className="flex justify-center gap-4">
        <Link href="/cita" className="bg-rose-600 text-white px-4 py-2 rounded">Reserva tu cita</Link>
        <Link href="/sobre-mi" className="border border-rose-600 text-rose-600 px-4 py-2 rounded">Conoce más sobre mí</Link>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Servicios destacados</h2>
        <ul className="grid gap-2 md:grid-cols-2">
          <li>Suelo pélvico</li>
          <li>Embarazo</li>
          <li>Postparto</li>
          <li>Sesiones online</li>
        </ul>
      </div>
    </section>
  )
}
