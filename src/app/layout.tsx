import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'


export const metadata: Metadata = {
  title: 'Fisiomamifera | Marina González Galán',
  description:
    'Fisioterapia y matrona especializada en suelo pélvico. Reserva tu cita presencial u online en Fisiomamifera.',
  metadataBase: new URL('https://fisiomamifera.example'),
  openGraph: {
    title: 'Fisiomamifera',
    description:
      'Acompañamiento integral desde la fisioterapia y la maternidad.',
    url: 'https://fisiomamifera.example',
    siteName: 'Fisiomamifera',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-offwhite text-gray-900">
        <header className="p-4 flex gap-4 justify-center sm:justify-start bg-white shadow-md">
          <nav className="flex gap-4 text-sm font-semibold">
            <Link href="/">Inicio</Link>
            <Link href="/sobre-mi">Sobre mí</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/cita">Cita</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-4rem)] p-4 sm:p-8">{children}</main>
        <footer className="p-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Marina González Galán - Fisiomamifera
        </footer>
      </body>
    </html>
  )
}
