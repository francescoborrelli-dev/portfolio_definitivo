'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-bold bg-gradient-to-r from-emerald-600 to-aurora-600 bg-clip-text text-transparent">
            Francesco
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-aurora-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/skills-services" className="hover:text-aurora-600 transition-colors font-medium">
              Competenze & Servizi
            </Link>
            <Link href="/projects" className="hover:text-aurora-600 transition-colors font-medium">
              Progetti
            </Link>
            <Link href="/contact" className="hover:text-aurora-600 transition-colors font-medium">
              Contatti
            </Link>
          </nav>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-aurora-600"
            aria-label="Apri menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-7 h-7 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu overlay */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)}></div>
        )}
        <nav
          className={`fixed z-50 top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
          aria-label="Menu mobile"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="font-display text-xl font-bold bg-gradient-to-r from-emerald-600 to-aurora-600 bg-clip-text text-transparent">Francesco</span>
            <button onClick={() => setOpen(false)} aria-label="Chiudi menu">
              <svg className="w-7 h-7 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-2 px-6 py-6">
            <li>
              <Link href="/" className="block py-2 text-lg font-medium hover:text-aurora-600" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills-services" className="block py-2 text-lg font-medium hover:text-aurora-600" onClick={() => setOpen(false)}>
                Competenze & Servizi
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2 text-lg font-medium hover:text-aurora-600" onClick={() => setOpen(false)}>
                Progetti
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 text-lg font-medium hover:text-aurora-600" onClick={() => setOpen(false)}>
                Contatti
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Separator />
    </header>
  )
}