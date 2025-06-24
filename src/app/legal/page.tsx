import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso legal y privacidad',
  description: 'Aviso legal, política de privacidad y cookies de Fisiomamifera. Cumplimiento RGPD y protección de datos para servicios sanitarios.',
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-crudo py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md p-8 border border-grispiedra">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-musgoprofundo mb-8 text-center">Aviso legal y privacidad</h1>
        <section className="mb-10">
          <h2 className="text-xl font-bold text-musgoprofundo mb-2">Titularidad</h2>
          <p className="text-sage-800">Este sitio web es propiedad de Marina González Galán, colegiada como matrona y fisioterapeuta. Contacto: <a href="mailto:info@fisiomamifera.com" className="underline text-rosaintenso">info@fisiomamifera.com</a></p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-bold text-musgoprofundo mb-2">Aviso legal</h2>
          <p className="text-sage-800 mb-2">El contenido de esta web es informativo y no sustituye la consulta presencial con un profesional sanitario. Marina González Galán no se responsabiliza del uso indebido de la información aquí expuesta.</p>
          <p className="text-sage-800">Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-bold text-musgoprofundo mb-2">Política de privacidad</h2>
          <p className="text-sage-800 mb-2">De acuerdo con el RGPD y la LOPDGDD, los datos personales facilitados a través de formularios, email o WhatsApp serán tratados de forma confidencial y utilizados únicamente para la gestión de citas, consultas o envío de información solicitada.</p>
          <ul className="list-disc list-inside text-sage-800 mb-2">
            <li>Responsable: Marina González Galán</li>
            <li>Finalidad: Gestión de citas, consultas y envío de información</li>
            <li>Legitimación: Consentimiento del interesado</li>
            <li>Destinatarios: No se cederán datos a terceros salvo obligación legal</li>
            <li>Derechos: Acceso, rectificación, supresión, oposición y portabilidad. Solicítalos en <a href="mailto:info@fisiomamifera.com" className="underline text-rosaintenso">info@fisiomamifera.com</a></li>
          </ul>
          <p className="text-sage-800">Los datos se conservarán solo el tiempo necesario para cumplir la finalidad y cumplir obligaciones legales.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-bold text-musgoprofundo mb-2">Política de cookies</h2>
          <p className="text-sage-800 mb-2">Esta web utiliza cookies técnicas necesarias para su funcionamiento y, en su caso, cookies analíticas anónimas. Puedes configurar o rechazar las cookies desde la configuración de tu navegador.</p>
          <p className="text-sage-800">Al navegar por la web aceptas nuestra política de cookies.</p>
        </section>
        <div className="text-center mt-8">
          <Link href="/" className="text-rosaintenso hover:underline font-semibold">Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
} 