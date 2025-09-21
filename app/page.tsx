import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import ProjectCard from '@/components/project-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Developer & UI/UX Designer a Firenze | Francesco Borrelli',
  description: 'Designer & sviluppatore frontend freelance a Firenze/Toscana. Realizzo esperienze digitali performanti con Next.js, Design System & SEO. Collaborazioni nazionali e internazionali. Scopri i progetti e contattami.',
  keywords: 'frontend developer Firenze, UI/UX designer Toscana, Next.js developer Italia, design system, performance SEO, WordPress headless', // Inserisci qui le keyword SEO separate da virgola
}

export default function HomePage() {
  // Get latest 3 non-draft projects
  const recentProjects = allProjects
    .filter(project => !project.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  const topServices = [
  {
    title: 'UI/UX Design & Design System',
    description: 'Progetto interfacce moderne e intuitive con Figma. Creo design system completi e componenti riutilizzabili in React/Tailwind, con attenzione ad accessibilità e coerenza visiva.',
    gradient: 'from-emerald-500 to-aurora-500'
  },
  {
    title: 'Sviluppo Frontend + Next.js & React',
    description: 'Realizzo siti e web app performanti su Wordpress o se si richiede su Next.js, React e TypeScript. Creazione di plugin per wordpress integrabili con Elementor e Woocommerce',
    gradient: 'from-aurora-500 to-purple-500'
  },
  {
    title: 'Performance Web & SEO Tecnico',
    description: 'Ottimizzo Core Web Vitals, riduco i tempi di caricamento e miglioro l’indicizzazione SEO. Configurazione ed ottimizzazione SEO su WordPress.',
    gradient: 'from-purple-500 to-emerald-500'
  }
]


  const skills = {
  'Frontend & Framework': [
    'Next.js',
    'React',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'jQuery',
    'Tailwind CSS'
  ],
  'Design & UI': [
    'Figma',
    'Sass',
    'Bootstrap',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Canva'
  ],
  'CMS & Backend': [
    'WordPress',
    'Elementor',
    'WooCommerce',
    'ACF',
    'Prisma',
  ],
  'Performance & SEO': [
    'Ottimizzazione Core Web Vitals',
    'Google Lighthouse',
    'PageSpeed Insights',
    'SEO tecnico on-page',
    'Google Analytics 4',
  ]
}


  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 bg-gradient-to-r from-emerald-600 via-aurora-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          Design & Sviluppo Web <br /> a Firenze / Toscana
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
        Frontend developer & UI/UX designer a Firenze, opero su progetti locali, nazionali e internazionali. Creo siti web performanti, dal design al codice, con tecnologie moderne e pronti per la SEO.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-aurora-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Vedi Progetti
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-aurora-600 text-aurora-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-aurora-50 transition-colors"
          >
            Contattami
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Chi Sono Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Immagine a sinistra su desktop, sotto su mobile */}
            <div className="order-1 md:order-1 flex justify-center md:justify-start w-full">
              <img
                src="https://res.cloudinary.com/dxw32sprq/image/upload/v1758300204/avatar_boreale.png"
                alt="Avatar Francesco Boreale"
                className="w-4/5 sm:w-3/4 md:w-[70%] rounded-[13px] mx-auto md:mx-0"
                style={{maxWidth:'400px'}}
              />
            </div>
            {/* Testo a destra su desktop, sopra su mobile */}
            <div className="order-2 md:order-2 space-y-4 sm:space-y-6">
               <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Chi sono
          </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Sono Francesco, nasco come ragioniere, per poi specializzarmi come <strong>Digital Designer</strong>. 
                Creo siti web performanti, con wordpress ed elementor, ma anche con tecnologie moderne come Next.js e design system.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Dal concept al codice, mi occupo di tradurre le vostre idee di business in interfacce concrete, 
                <strong>misurabili e scalabili</strong>. Ogni progetto è un equilibrio tra estetica, funzionalità e risultati.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
                {Object.entries(skills).map(([category, techs]) => (
                  <div key={category}>
                    <h4 className="font-display font-semibold text-gray-900 mb-2 text-sm sm:text-base">{category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {techs.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché scegliere me */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Testi a sinistra */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Perché scegliere me</h2>
              <ul className="list-disc pl-5 space-y-3 text-base sm:text-lg text-gray-700">
                <li>
Collaboro con <strong>agenzie e aziende a livello locale e internazionale</strong>, dalla Toscana a Londra fino a Panama.  
Questa esperienza mi ha permesso di capire le esigenze di mercati diversi e di adattare strategie e strumenti a seconda del contesto.
</li>

<li>
Offro una <strong>comunicazione diretta e trasparente</strong>: niente tecnicismi incomprensibili o promesse irrealistiche.  
Chi lavora con me sa sempre a che punto siamo, quali sono le priorità e quando riceverà il risultato.
</li>

<li>
Il mio obiettivo è consegnare <strong>progetti di alta qualità</strong>, curati nel design e solidi nello sviluppo.  
Dalla <em>prototipazione in Figma</em> allo sviluppo frontend in <em>Next.js/React</em>, fino all’ottimizzazione SEO tecnica,  
porto avanti ogni fase con attenzione ai dettagli, performance misurabili e massima usabilità per l’utente finale.
</li>
              </ul>
            </div>
            {/* Immagine a destra */}
            <div className="flex justify-center md:justify-end w-full">
              <img
                src="https://res.cloudinary.com/dxw32sprq/image/upload/v1758303442/perche-scegliermi_h2mqpf.png"
                alt="Perché scegliere me"
                className="w-4/5 sm:w-3/4 md:w-[70%] rounded-[13px] mx-auto md:mx-0"
                style={{maxWidth:'400px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Progetti Recenti */}
      {recentProjects.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 -mx-3 sm:-mx-6 lg:-mx-8 px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Progetti recenti
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Un’assaggio dei lavori migliori: click per vedere case study con aumento delle conversioni, UI / UX redesign, app performance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {recentProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-aurora-600 hover:text-aurora-700 font-medium group"
            >
              Vedi i Progetti 
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-aurora-600 hover:text-aurora-700 font-medium group"
            >
              Contattami 
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Servizi Principali */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Come posso aiutarti
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Servizi focalizzati su risultati concreti per il tuo business digitale.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {topServices.map((service, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardHeader className="relative z-10 p-6 sm:p-8">
                <CardTitle className="font-display text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/skills-services"
            className="bg-gradient-to-r from-aurora-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:from-aurora-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Tutti i servizi e competenze
          </Link>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-50 via-aurora-50 to-purple-50 rounded-2xl sm:rounded-3xl text-center -mx-3 sm:-mx-6 lg:-mx-8 px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Parliamone insieme. Dalla strategia all&apos;implementazione, 
            creiamo qualcosa di straordinario per i tuoi utenti.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-emerald-500 to-aurora-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:from-emerald-600 hover:to-aurora-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Iniziamo una conversazione
          </Link>
        </div>
      </section>
    </div>
  )
}