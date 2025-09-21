import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagina non trovata - 404',
  description: 'La pagina che stai cercando non esiste o è stata spostata.',
  // keywords: '', // Inserisci qui le keyword SEO separate da virgola
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Numero 404 con gradient */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-display font-bold bg-gradient-to-r from-emerald-400 via-aurora-500 to-purple-600 bg-clip-text text-transparent leading-none">
            404
          </h1>
        </div>

        {/* Messaggio principale */}
        <div className="mb-8 space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
            Oops! Pagina non trovata
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
            La pagina che stai cercando potrebbe essere stata spostata, eliminata o non è mai esistita.
          </p>
        </div>

        {/* Suggerimenti visivi con icone */}
        <div className="mb-10 grid sm:grid-cols-3 gap-6 text-sm text-gray-500">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 7 5 5 5-5" />
              </svg>
            </div>
            <span>Controlla l'URL</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-aurora-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span>Torna alla home</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span>Scrivimi</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-aurora-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-aurora-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Torna alla Home
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-aurora-500 text-aurora-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-aurora-50 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            Contattami
          </Link>
        </div>

        {/* Link utili */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Oppure esplora:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/projects" className="text-aurora-600 hover:text-aurora-700 hover:underline">
              I miei progetti
            </Link>
            <Link href="/skills-services" className="text-aurora-600 hover:text-aurora-700 hover:underline">
              Competenze & Servizi
            </Link>
            <Link href="/contact" className="text-aurora-600 hover:text-aurora-700 hover:underline">
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}