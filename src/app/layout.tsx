import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Fisiomamifera | Marina González Galán - Fisioterapia y Matrona',
    template: '%s | Fisiomamifera'
  },
  description: 'Fisioterapia y matrona especializada en suelo pélvico. Acompañando cada etapa desde la fisioterapia y la maternidad. Reserva tu cita presencial u online.',
  keywords: ['fisioterapia', 'matrona', 'suelo pélvico', 'embarazo', 'postparto', 'fisioterapia online'],
  authors: [{ name: 'Marina González Galán' }],
  creator: 'Marina González Galán',
  publisher: 'Fisiomamifera',
  metadataBase: new URL('https://fisiomamifera.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fisiomamifera',
    description: 'Fisioterapia y matrona especializada en suelo pélvico. Reserva tu cita presencial u online.',
    url: 'https://fisiomamifera.com',
    siteName: 'Fisiomamifera',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fisiomamifera | Marina González Galán',
    description: 'Acompañando cada etapa desde la fisioterapia y la maternidad.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F7E6E1" />
      </head>
      <body className={inter.className + ' bg-crudo text-textoprincipal'}>
        {/* Navbar mejorado */}
        <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm border-b border-rosasuave">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl font-bold text-musgoprofundo tracking-tight drop-shadow-sm">
              Fisiomamifera
            </Link>
            {/* Links */}
            <div className="flex items-center gap-8">
              <Link href="/" className="text-musgoprofundo hover:text-rosaintenso font-semibold transition-colors duration-150">Inicio</Link>
              <Link href="/sobre-mi" className="text-musgoprofundo hover:text-rosaintenso font-semibold transition-colors duration-150">Sobre mí</Link>
              <Link href="/servicios" className="text-musgoprofundo hover:text-rosaintenso font-semibold transition-colors duration-150">Servicios</Link>
              <Link href="/blog" className="text-musgoprofundo hover:text-rosaintenso font-semibold transition-colors duration-150">Blog</Link>
              <Link href="/contacto" className="text-musgoprofundo hover:text-rosaintenso font-semibold transition-colors duration-150">Contacto</Link>
              <Link href="/cita" className="ml-4 bg-salviaclaro hover:bg-musgoprofundo text-white px-5 py-2 rounded-lg font-semibold shadow transition-colors duration-150">Reservar Cita</Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-rosasuave bg-rosasuave py-10 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
            <div>
              <h2 className="font-serif text-2xl text-musgoprofundo font-bold mb-2">Fisiomamifera</h2>
              <p className="text-musgoprofundo mb-2">Marina González Galán</p>
              <p className="text-grispiedra text-sm">Matrona y fisioterapeuta</p>
            </div>
            <nav className="flex flex-col gap-2 text-musgoprofundo text-base">
              <a href="/" className="hover:underline">Inicio</a>
              <a href="/sobre-mi" className="hover:underline">Sobre mí</a>
              <a href="/servicios" className="hover:underline">Servicios</a>
              <a href="/cita" className="hover:underline">Cita</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/contacto" className="hover:underline">Contacto</a>
              <a href="/legal" className="hover:underline text-xs text-grispiedra mt-2">Aviso legal y privacidad</a>
            </nav>
            <div className="flex flex-col gap-2 text-musgoprofundo text-base">
              <span className="font-semibold">Contacto</span>
              <a href="mailto:info@fisiomamifera.com" className="underline text-rosaintenso">info@fisiomamifera.com</a>
              <a href="tel:+34600000000" className="underline text-rosaintenso">+34 600 00 00 00</a>
              <span className="text-grispiedra text-sm">Avenida Primero de Mayo 2, Madrid</span>
              <div className="flex gap-3 mt-2">
                <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-musgoprofundo"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 003.48 20.52l-1.3 4.77a1 1 0 001.22 1.22l4.77-1.3A12 12 0 0020.52 3.48zm-8.52 17a10 10 0 117.07-2.93A10 10 0 0112 20.48zm5.2-7.2a8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93 8.13 8.13 0 01-2.34-.32 8.13 8.13 0 01-2.34.32 7.93 7.93 0 01-2.34.93 7.93 7.93 0 01-2.34.93 8.13 8.13 0 01-2.34.32 8.13 8.13 0 01-2.34-.32 7.93 7.93 0 01-2.34-.93 7.93 7.93 0 01-2.34-.93z" /></svg></a>
                <a href="https://instagram.com/fisiomamifera" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-rosaintenso"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
              </div>
            </div>
          </div>
          <div className="text-center text-grispiedra text-xs mt-8">© {new Date().getFullYear()} Fisiomamifera. Todos los derechos reservados.</div>
        </footer>
      </body>
    </html>
  )
}
