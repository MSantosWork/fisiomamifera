import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Acompañando cada etapa desde la fisioterapia y la maternidad. Fisioterapia y matrona especializada en suelo pélvico.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-crudo">
      {/* Hero Section */}
      <section className="py-20 bg-rosasuave">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-musgoprofundo">Fisiomamifera</h1>
          <p className="text-xl text-musgoprofundo mb-8">Acompañando a la mujer en cada etapa, con profesionalidad, calidez y ciencia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cita" className="btn-primary">Reservar cita</Link>
            <Link href="/servicios" className="btn-secondary">Ver servicios</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-800 mb-4">
              Mis Servicios
            </h2>
            <p className="text-lg text-rose-600 max-w-2xl mx-auto">
              Especializada en fisioterapia de suelo pélvico, embarazo y postparto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Suelo Pélvico */}
            <div className="bg-rose-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 border border-rose-200">
              <div className="w-12 h-12 bg-rose-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-2">Suelo Pélvico</h3>
              <p className="text-rose-700 text-sm">
                Tratamiento especializado para la salud y bienestar del suelo pélvico
              </p>
            </div>

            {/* Embarazo */}
            <div className="bg-rose-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 border border-rose-200">
              <div className="w-12 h-12 bg-rose-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-2">Embarazo</h3>
              <p className="text-rose-700 text-sm">
                Acompañamiento durante el embarazo con fisioterapia especializada
              </p>
            </div>

            {/* Postparto */}
            <div className="bg-rose-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 border border-rose-200">
              <div className="w-12 h-12 bg-rose-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-2">Postparto</h3>
              <p className="text-rose-700 text-sm">
                Recuperación postparto y rehabilitación del suelo pélvico
              </p>
            </div>

            {/* Online */}
            <div className="bg-rose-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 border border-rose-200">
              <div className="w-12 h-12 bg-rose-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-2">Consulta Online</h3>
              <p className="text-rose-700 text-sm">
                Sesiones online para mayor comodidad y flexibilidad
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/servicios" 
              className="btn-secondary"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Horarios y Precios */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-musgoprofundo mb-10 text-center">Horarios y Precios</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl p-6 border border-grispiedra bg-rosasuave card-hover">
              <h3 className="text-xl font-semibold text-musgoprofundo mb-4">Horarios</h3>
              <div className="space-y-2 text-musgoprofundo">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span className="font-semibold">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span className="font-semibold">Cerrado</span>
                </div>
              </div>
              <p className="text-sm text-grispiedra mt-4">Consultas online disponibles fuera de horario</p>
            </div>
            <div className="rounded-xl p-6 border border-grispiedra bg-salviaclaro card-hover">
              <h3 className="text-xl font-semibold text-musgoprofundo mb-4">Precios</h3>
              <div className="space-y-3 text-musgoprofundo">
                <div className="flex justify-between">
                  <span>Primera consulta</span>
                  <span className="font-semibold text-rosaintenso">70€</span>
                </div>
                <div className="flex justify-between">
                  <span>Sesión de seguimiento</span>
                  <span className="font-semibold text-rosaintenso">60€</span>
                </div>
                <div className="flex justify-between">
                  <span>Consulta online</span>
                  <span className="font-semibold text-rosaintenso">50€</span>
                </div>
                <div className="flex justify-between">
                  <span>Bono 5 sesiones</span>
                  <span className="font-semibold text-rosaintenso">275€</span>
                </div>
              </div>
              <p className="text-sm text-grispiedra mt-4">Descuentos para bonos y consultas online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-rose-200 flex items-center justify-center overflow-hidden">
                <svg className="w-10 h-10 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-sage-800 font-serif italic mb-6">
              &ldquo;Gracias a Marina, viví mi embarazo y postparto con mucha más confianza y tranquilidad. Su apoyo y profesionalidad marcaron la diferencia en mi recuperación y en mi bienestar como madre.&rdquo;
            </blockquote>
            <cite className="text-sage-600 font-semibold">- Laura M., paciente</cite>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-rosasuave">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-musgoprofundo mb-10 text-center">Testimonios</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl shadow-md p-8 card-hover border border-grispiedra">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-salviaclaro flex items-center justify-center font-bold text-musgoprofundo text-xl">L</div>
                <div>
                  <span className="font-semibold text-musgoprofundo">Laura G.</span>
                  <span className="block text-xs text-grispiedra">Madrid</span>
                </div>
              </div>
              <p className="text-musgoprofundo italic">"Gracias a Marina recuperé mi suelo pélvico tras el parto. Su trato es cercano y profesional, me sentí acompañada en todo momento."</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 card-hover border border-grispiedra">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-salviaclaro flex items-center justify-center font-bold text-musgoprofundo text-xl">M</div>
                <div>
                  <span className="font-semibold text-musgoprofundo">Marta S.</span>
                  <span className="block text-xs text-grispiedra">Alcalá de Henares</span>
                </div>
              </div>
              <p className="text-musgoprofundo italic">"Acudí por molestias en el embarazo y la mejoría fue increíble. Marina me dio confianza y herramientas para vivir el parto tranquila."</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 card-hover border border-grispiedra">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-salviaclaro flex items-center justify-center font-bold text-musgoprofundo text-xl">C</div>
                <div>
                  <span className="font-semibold text-musgoprofundo">Carmen R.</span>
                  <span className="block text-xs text-grispiedra">Getafe</span>
                </div>
              </div>
              <p className="text-musgoprofundo italic">"Recomiendo a Marina a todas mis amigas. Es una gran profesional, explica todo con claridad y se nota que le apasiona su trabajo."</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 card-hover border border-grispiedra">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-salviaclaro flex items-center justify-center font-bold text-musgoprofundo text-xl">S</div>
                <div>
                  <span className="font-semibold text-musgoprofundo">Sara T.</span>
                  <span className="block text-xs text-grispiedra">Madrid</span>
                </div>
              </div>
              <p className="text-musgoprofundo italic">"Me sentí escuchada y comprendida desde el primer día. El tratamiento fue personalizado y los resultados superaron mis expectativas."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            ¿Lista para empezar tu camino hacia el bienestar?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Reserva tu primera consulta y descubre cómo puedo ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/cita" 
              className="btn-primary"
            >
              Reservar cita
            </Link>
            <Link 
              href="/contacto" 
              className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
