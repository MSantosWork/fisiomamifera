import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Fisioterapia de suelo pélvico, acompañamiento durante embarazo y postparto, y consultas online. Servicios especializados para el bienestar integral de la mujer.',
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-crudo">
      {/* Hero Section */}
      <section className="bg-rosasuave py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-musgoprofundo mb-6">
              Mis Servicios
            </h1>
            <p className="text-xl text-musgoprofundo max-w-2xl mx-auto">
              Acompaño a mujeres en todas las etapas de su vida, con tratamientos personalizados y un enfoque integral de la salud femenina.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios detallados */}
      <section className="py-20 bg-crudo">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Suelo Pélvico */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-20 h-20 rounded-xl bg-salvia-claro flex items-center justify-center">
                <svg className="w-10 h-10 text-rosa-intenso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-musgoprofundo mb-2">Fisioterapia de Suelo Pélvico</h2>
              <p className="text-textoprincipal text-lg">
                Valoración y tratamiento personalizado para el cuidado del suelo pélvico en todas las etapas de la vida. Abordo incontinencia, dolor pélvico, prolapsos, disfunciones sexuales y prevención.
              </p>
              <ul className="list-disc list-inside text-musgoprofundo">
                <li>Primera consulta y valoración: <span className="font-semibold text-rosa-intenso">70€</span></li>
                <li>Sesión de seguimiento: <span className="font-semibold text-rosa-intenso">60€</span></li>
                <li>Bono 5 sesiones: <span className="font-semibold text-rosa-intenso">275€</span></li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-musgoprofundo mb-1">Preguntas frecuentes</h3>
                <ul className="list-disc list-inside text-grispiedra text-base space-y-1">
                  <li><strong>¿Cuándo debo acudir?</strong> Si tienes pérdidas de orina, dolor pélvico, molestias en relaciones o tras el parto.</li>
                  <li><strong>¿Duele el tratamiento?</strong> No, siempre se adapta a tu comodidad y necesidades.</li>
                  <li><strong>¿Es solo para mujeres?</strong> No, también trato suelo pélvico masculino.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Embarazo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-20 h-20 rounded-xl bg-salvia-claro flex items-center justify-center">
                <svg className="w-10 h-10 text-rosa-intenso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-musgoprofundo mb-2">Acompañamiento durante el Embarazo</h2>
              <p className="text-textoprincipal text-lg">
                Sesiones para aliviar molestias, preparar el cuerpo para el parto y resolver dudas sobre cambios físicos y emocionales. Incluye ejercicios, masaje perineal, respiración y educación maternal.
              </p>
              <ul className="list-disc list-inside text-musgoprofundo">
                <li>Sesión individual: <span className="font-semibold text-rosa-intenso">60€</span></li>
                <li>Bono 5 sesiones: <span className="font-semibold text-rosa-intenso">250€</span></li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-musgoprofundo mb-1">Preguntas frecuentes</h3>
                <ul className="list-disc list-inside text-grispiedra text-base space-y-1">
                  <li><strong>¿Desde cuándo puedo empezar?</strong> Desde el primer trimestre, adaptando los ejercicios a cada etapa.</li>
                  <li><strong>¿Incluye preparación al parto?</strong> Sí, con técnicas de respiración, pujos y masaje perineal.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Postparto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-20 h-20 rounded-xl bg-salvia-claro flex items-center justify-center">
                <svg className="w-10 h-10 text-rosa-intenso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-musgoprofundo mb-2">Recuperación Postparto</h2>
              <p className="text-textoprincipal text-lg">
                Valoración integral tras el parto, recuperación de suelo pélvico y abdomen, tratamiento de cicatrices (cesárea, episiotomía) y acompañamiento emocional. Ejercicios adaptados a cada momento.
              </p>
              <ul className="list-disc list-inside text-musgoprofundo">
                <li>Primera consulta postparto: <span className="font-semibold text-rosa-intenso">70€</span></li>
                <li>Sesión de seguimiento: <span className="font-semibold text-rosa-intenso">60€</span></li>
                <li>Bono 5 sesiones: <span className="font-semibold text-rosa-intenso">275€</span></li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-musgoprofundo mb-1">Preguntas frecuentes</h3>
                <ul className="list-disc list-inside text-grispiedra text-base space-y-1">
                  <li><strong>¿Cuándo empezar la recuperación?</strong> Desde la primera semana, adaptando la intensidad.</li>
                  <li><strong>¿Es necesario esperar a la cuarentena?</strong> No, se puede empezar con ejercicios suaves y valoración.</li>
                  <li><strong>¿Incluye asesoramiento en lactancia?</strong> Sí, si lo necesitas.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consulta Online */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-20 h-20 rounded-xl bg-salvia-claro flex items-center justify-center">
                <svg className="w-10 h-10 text-rosa-intenso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-musgoprofundo mb-2">Consulta Online</h2>
              <p className="text-textoprincipal text-lg">
                Asesoramiento profesional desde la comodidad de tu casa. Valoración, ejercicios personalizados, educación y acompañamiento online para resolver tus dudas y mejorar tu bienestar.
              </p>
              <ul className="list-disc list-inside text-musgoprofundo">
                <li>Consulta online: <span className="font-semibold text-rosa-intenso">50€</span></li>
                <li>Bono 5 sesiones online: <span className="font-semibold text-rosa-intenso">200€</span></li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-musgoprofundo mb-1">Preguntas frecuentes</h3>
                <ul className="list-disc list-inside text-grispiedra text-base space-y-1">
                  <li><strong>¿Es igual de eficaz que la consulta presencial?</strong> Sí, para educación, ejercicios y seguimiento.</li>
                  <li><strong>¿Qué necesito?</strong> Un dispositivo con cámara y conexión a internet.</li>
                  <li><strong>¿Puedo combinar online y presencial?</strong> Sí, según tus necesidades.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-salvia-claro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            ¿Tienes dudas sobre algún servicio?
          </h2>
          <p className="text-xl text-white mb-8">
            Te ayudo a elegir el tratamiento más adecuado para ti
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
              className="btn-secondary"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
