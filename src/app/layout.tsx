import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Fisiomamifera | Marina González Galán - Fisioterapia y Matrona',
    template: '%s | Fisiomamifera'
  },
  description: 'Fisioterapia y matrona especializada en suelo pélvico. Acompañamiento profesional en embarazo, postparto y bienestar íntimo. Reserva tu cita presencial u online.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Fisiomamifera',
  url: 'https://fisiomamifera.com',
  description: 'Matrona y fisioterapeuta especializada en suelo pélvico, embarazo y postparto.',
  areaServed: 'Madrid',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Reservas',
    telephone: '+34 600 00 00 00',
    email: 'info@fisiomamifera.com',
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
        <meta name="theme-color" content="#F9F6F2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-ink">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Saltar al contenido principal
        </a>
        <Header />

        <main id="contenido" className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
