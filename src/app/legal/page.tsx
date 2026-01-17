import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso legal y privacidad',
  description: 'Aviso legal, política de privacidad y cookies de Fisiomamifera. Cumplimiento RGPD y protección de datos.',
}

export default function LegalPage() {
  return (
    <div className="bg-cream">
      <section className="section">
        <div className="container-base">
          <div className="card space-y-8">
            <div className="text-center">
              <span className="badge">Legal</span>
              <h1 className="mt-4 text-3xl font-serif font-semibold text-ink md:text-4xl">Aviso legal y privacidad</h1>
            </div>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-ink">Titularidad</h2>
              <p className="text-sm text-cocoa">
                Este sitio web es propiedad de Marina González Galán, colegiada como matrona y fisioterapeuta. Contacto: <a href="mailto:info@fisiomamifera.com" className="font-semibold text-rose">info@fisiomamifera.com</a>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-ink">Aviso legal</h2>
              <p className="text-sm text-cocoa">
                El contenido de esta web es informativo y no sustituye la consulta presencial con un profesional sanitario. Marina González Galán no se responsabiliza del uso indebido de la información aquí expuesta.
              </p>
              <p className="text-sm text-cocoa">Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-ink">Política de privacidad</h2>
              <p className="text-sm text-cocoa">
                De acuerdo con el RGPD y la LOPDGDD, los datos personales facilitados a través de formularios, email o WhatsApp serán tratados de forma confidencial y utilizados únicamente para la gestión de citas, consultas o envío de información solicitada.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-cocoa">
                <li>Responsable: Marina González Galán</li>
                <li>Finalidad: Gestión de citas, consultas y envío de información</li>
                <li>Legitimación: Consentimiento del interesado</li>
                <li>Destinatarios: No se cederán datos a terceros salvo obligación legal</li>
                <li>Derechos: Acceso, rectificación, supresión, oposición y portabilidad. Solicítalos en <a href="mailto:info@fisiomamifera.com" className="font-semibold text-rose">info@fisiomamifera.com</a></li>
              </ul>
              <p className="text-sm text-cocoa">Los datos se conservarán solo el tiempo necesario para cumplir la finalidad y obligaciones legales.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-ink">Política de cookies</h2>
              <p className="text-sm text-cocoa">
                Esta web utiliza cookies técnicas necesarias para su funcionamiento y, en su caso, cookies analíticas anónimas. Puedes configurar o rechazar las cookies desde la configuración de tu navegador.
              </p>
              <p className="text-sm text-cocoa">Al navegar por la web aceptas nuestra política de cookies.</p>
            </section>

            <div className="text-center">
              <Link href="/" className="btn-secondary">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
