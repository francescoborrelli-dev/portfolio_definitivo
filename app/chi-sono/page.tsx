import type { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Chi sono - Francesco Borrelli',
  description: 'Scopri chi sono: Francesco Borrelli, sviluppatore web e designer con esperienza in progetti digitali innovativi.',
}

export default function ChiSono() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Chi sono</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ciao! Sono Francesco Borrelli, digital designer con la passione per l'arte e la tecnologia. Creo esperienze digitali belle, intuitive e funzionali.
        </header>

        {/* Profile Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-square relative rounded-2xl overflow-hidden max-w-sm mx-auto">
                <Image
                  src="/avatar.png"
                  alt="Francesco Borrelli"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Francesco Borrelli</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Mi Diplomo nel 2014 come Ragioniere Perito Commerciale, ma la passione per la tecnologia e l'arte ben presto mi porta a studiare web design e frontend developing 
                presso la Scuola Internazionale di Comics di Firenze, oggi  The Sign Academy. Passato con il massimo dei voti, inizio fin da subito a lavorare come freelance.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nel mio percorso dal 2017 ad oggi, ho avuto la possibilità di lavorare con Agenzie in Italia e all'estero, collaborando con agenzie come: ISmartCareYou, GrWeb.Agency, 
                ASP Solutions, Infosistec, Biro Agency, Segunda Vida, e molte altre. Quindi dall'Italia passando per l'Inghilterra, arrivando fino a Panama.  
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Le mie competenze spaziano dai siti web con WordPress ed Elementor Pro, Branding e Design, fino a soluzioni più complesse e personalizzate con Next.js o WordPress Headless.
                Mi sono occupato per una piccola parte anche di consulenza, organizzazione di eventi e formazione. Infatti dal 2022 al 2024 sono stato docente di Web Design presso ISmartCareYou.
              </p>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                <Badge>WordPress</Badge>
                <Badge>Elementor Pro</Badge>
                <Badge>WooCommerce</Badge>
                <Badge>UI/UX Design</Badge>
                <Badge>Figma</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">La mia esperienza</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-emerald-600">Sviluppo Frontend</h3>
              <p className="text-gray-700 mb-4">
                Sviluppo interfacce moderne e responsive utilizzando React, Next.js, TypeScript e Tailwind CSS. 
                Creo componenti riutilizzabili e ottimizzati per le performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-emerald-600">CMS & E-commerce</h3>
              <p className="text-gray-700 mb-4">
                Realizzo siti web professionali con WordPress, personalizzazioni avanzate con Elementor Pro 
                e e-commerce completi con WooCommerce.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">WordPress</Badge>
                <Badge variant="outline">Elementor Pro</Badge>
                <Badge variant="outline">WooCommerce</Badge>
                <Badge variant="outline">PHP</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-emerald-600">Design & UX</h3>
              <p className="text-gray-700 mb-4">
                Progetto esperienze utente intuitive e interfacce eleganti. Mi occupo del processo creativo 
                dalla wireframe al prototipo finale.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">UI Design</Badge>
                <Badge variant="outline">UX Design</Badge>
                <Badge variant="outline">Prototyping</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-emerald-600">Collaborazioni</h3>
              <p className="text-gray-700 mb-4">
                Lavoro in team con agenzie e professionisti, coordinando progetti complessi e 
                garantendo risultati di qualità nei tempi stabiliti.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Team Work</Badge>
                <Badge variant="outline">Project Management</Badge>
                <Badge variant="outline">Agenzie</Badge>
                <Badge variant="outline">Freelance</Badge>
              </div>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">I miei valori</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualità</h3>
              <p className="text-gray-600">
                Ogni progetto è curato nei minimi dettagli per garantire un risultato professionale e duraturo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovazione</h3>
              <p className="text-gray-600">
                Utilizzo sempre le tecnologie più moderne e le migliori pratiche di sviluppo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaborazione</h3>
              <p className="text-gray-600">
                Lavoro a stretto contatto con i clienti per comprendere e realizzare la loro visione.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-aurora-50 rounded-lg p-8 border border-emerald-200">
            <h2 className="text-2xl font-bold mb-4 text-emerald-800">Hai un progetto in mente?</h2>
            <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
              Che si tratti di un nuovo sito web, un e-commerce o un'applicazione personalizzata, 
              sono qui per aiutarti a realizzare le tue idee digitali.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
            >
              Contattami
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}