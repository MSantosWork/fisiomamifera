'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-stone/20 bg-cream/80 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-semibold text-ink">
          Fisiomamifera
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-cocoa transition-colors hover:text-ink">
              {link.label}
            </Link>
          ))}
          <Link href="/cita" className="btn-primary">
            Reservar cita
          </Link>
        </nav>
        <button
          type="button"
          className="btn-ghost md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="h-6 w-6 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-stone/20 bg-cream/95`}
      >
        <div className="container-base flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-base font-semibold text-ink" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/cita" className="btn-primary w-full text-center" onClick={() => setOpen(false)}>
            Reservar cita
          </Link>
        </div>
      </div>
    </header>
  )
}
