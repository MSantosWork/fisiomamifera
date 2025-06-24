import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Marina González Galán, matrona y fisioterapeuta especializada en suelo pélvico. Formación, valores y filosofía de trabajo.',
}

export default function SobreMiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-cream-50 to-sage-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-6">
              Sobre mí
            </h1>
            <p className="text-xl text-rose-700 max-w-2xl mx-auto">
              Mi vocación es acompañar a mujeres en todas las etapas de su vida, desde la fisioterapia y la maternidad, con un trato humano, profesional y cercano.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Foto profesional (añade tu foto real aquí) */}
            <div className="flex-shrink-0 w-40 h-40 rounded-full bg-rose-100 flex items-center justify-center overflow-hidden mx-auto md:mx-0">
              {/* <img src="/ruta-a-foto-marina.jpg" alt="Marina González Galán" className="object-cover w-full h-full" /> */}
              <svg className="w-20 h-20 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            {/* Biografía y valores */}
            <div className="flex-1 space-y-6 text-left">
              <h2 className="text-2xl font-serif font-bold text-rose-700 mb-2">Marina González Galán</h2>
              <p className="text-lg text-sage-800">
                Soy matrona y fisioterapeuta especializada en suelo pélvico, con una profunda vocación de acompañar a mujeres en todas las etapas de su vida. Mi objetivo es ofrecer un espacio seguro, de confianza y escucha, donde cada mujer se sienta comprendida y apoyada.
              </p>
              <ul className="list-disc list-inside text-sage-700 text-base">
                <li><strong>Formación:</strong> Grado en Fisioterapia (Universidad Europea de Madrid)</li>
                <li><strong>Especialidad:</strong> Suelo pélvico, embarazo y postparto</li>
                <li><strong>Matrona:</strong> Experiencia en hospitales y consulta privada</li>
                <li><strong>Actualización constante:</strong> Cursos y congresos nacionales e internacionales</li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-rose-700 mb-1">Filosofía de trabajo</h3>
                <p className="text-sage-800">
                  Creo en una atención integral, personalizada y basada en la evidencia científica. Mi enfoque es acompañar, informar y empoderar a cada mujer para que tome decisiones libres y seguras sobre su salud.
                </p>
              </div>
              <div className="mt-4 flex gap-4 items-center">
                <a href="https://instagram.com/fisiomamifera" target="_blank" rel="noopener noreferrer" className="text-rose-500 hover:text-rose-700 font-semibold">Instagram</a>
                <a href="mailto:contacto@fisiomamifera.com" className="text-rose-500 hover:text-rose-700 font-semibold">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-sage-900 mb-6">
                Marina González Galán
              </h2>
              
              <div className="space-y-6 text-sage-700 leading-relaxed">
                <p>
                  Nací en 1997 y desde muy joven supe que quería dedicar mi vida a acompañar a las mujeres 
                  en las etapas más importantes de su vida. Mi vocación por la salud femenina me llevó a 
                  formarme como matrona y fisioterapeuta especializada en suelo pélvico.
                </p>
                
                <p>
                  Creo firmemente en la importancia de un enfoque integral que combine la fisioterapia 
                  especializada con el acompañamiento emocional que caracteriza a la matronería. 
                  Cada mujer es única y merece una atención personalizada que respete sus necesidades 
                  y ritmos.
                </p>

                <p>
                  Mi objetivo es empoderar a las mujeres para que conozcan su cuerpo, 
                  se sientan seguras y confiadas en cada etapa de su vida, desde la juventud 
                  hasta la madurez, pasando por el embarazo y el postparto.
                </p>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div className="bg-cream-100 rounded-2xl p-8 text-center">
              <div className="w-64 h-80 bg-gradient-to-br from-rose-200 to-sage-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sage-600 text-sm">Foto profesional de Marina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sage-900 mb-12 text-center">
            Formación y Especialización
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-sage-900 mb-3">Máster en Matronería</h3>
              <p className="text-sage-600">
                Universidad Europea de Madrid<br />
                Especialización en acompañamiento integral de la mujer
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-sage-900 mb-3">Fisioterapia de Suelo Pélvico</h3>
              <p className="text-sage-600">
                Formación especializada en rehabilitación del suelo pélvico, 
                embarazo y postparto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-sage-900 mb-12 text-center">
            Mi Filosofía de Trabajo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-900 mb-2">Cercanía</h3>
              <p className="text-sage-600 text-sm">
                Creo en la importancia de crear un espacio seguro y de confianza donde cada mujer se sienta escuchada y comprendida.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-900 mb-2">Profesionalidad</h3>
              <p className="text-sage-600 text-sm">
                Combino la evidencia científica más actualizada con años de experiencia práctica para ofrecer el mejor tratamiento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-900 mb-2">Empoderamiento</h3>
              <p className="text-sage-600 text-sm">
                Mi objetivo es que cada mujer conozca su cuerpo y se sienta confiada para tomar decisiones informadas sobre su salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social & CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Conectemos
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Sígueme en Instagram para consejos diarios y actualizaciones
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://instagram.com/fisiomamifera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-rose-600 hover:bg-cream-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @fisiomamifera
            </a>
            <Link 
              href="/cita" 
              className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Reservar cita
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
