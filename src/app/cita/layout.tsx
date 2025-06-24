import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservar Cita',
  description: 'Reserva tu cita con Marina González Galán. Consulta presencial en Madrid o online. Fisioterapia de suelo pélvico, embarazo y postparto.',
}

export default function CitaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 