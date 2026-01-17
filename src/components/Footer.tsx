import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-stone/30 bg-mist">
      <div className="container-base grid gap-10 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-ink">Fisiomamifera</h2>
          <p className="text-sm text-cocoa">
            Atención integral en suelo pélvico, embarazo y postparto. Un espacio seguro y profesional para cuidar tu bienestar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/34600000000" className="badge" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="mailto:info@fisiomamifera.com" className="badge">
              Email
            </a>
            <a href="https://instagram.com/fisiomamifera" className="badge" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <span className="text-sm font-semibold text-ink">Navegación</span>
          <nav className="flex flex-col gap-2 text-sm text-cocoa">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
            <Link href="/legal" className="text-xs text-cocoa transition-colors hover:text-ink">
              Aviso legal y privacidad
            </Link>
          </nav>
        </div>

        <div className="space-y-3 text-sm text-cocoa">
          <span className="text-sm font-semibold text-ink">Contacto</span>
          <p>Madrid · Consulta presencial y online</p>
          <p>Horario: Lunes a viernes, 9:00 - 19:00</p>
          <p>Teléfono: <a className="text-ink underline" href="tel:+34600000000">+34 600 00 00 00</a></p>
          <p>Email: <a className="text-ink underline" href="mailto:info@fisiomamifera.com">info@fisiomamifera.com</a></p>
          <Link href="/cita" className="btn-primary mt-4 w-fit">
            Reservar cita
          </Link>
        </div>
      </div>
      <div className="border-t border-stone/20 py-4 text-center text-xs text-cocoa">
        © {new Date().getFullYear()} Fisiomamifera. Todos los derechos reservados.
      </div>
    </footer>
  )
}
