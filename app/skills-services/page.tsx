import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Competenze & Servizi',
  description: 'Le mie competenze tecniche e i servizi offerti per creare prodotti digitali performanti e che convertono.',
  // keywords: '', // Inserisci qui le keyword SEO separate da virgola
}

export default function SkillsServicesPage() {
  const skillCategories = [
    {
      title: 'Linguaggi & Core',
      skills: ['HTML5', 'CSS3/Sass', 'JavaScript ES6+', 'TypeScript', 'PHP'],
      color: 'emerald'
    },
    {
      title: 'Framework & Libraries',
      skills: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'aurora'
    },
    {
      title: 'Design & UI Systems',
      skills: ['Figma', 'Adobe Creative Suite', 'Design Systems', 'Prototyping', 'shadcn/ui', 'Radix UI'],
      color: 'purple'
    },
    {
      title: 'CMS & Content',
      skills: ['WordPress Headless', 'Contentlayer', 'Sanity', 'REST APIs', 'GraphQL'],
      color: 'emerald'
    },
    {
      title: 'Performance & SEO',
      skills: ['Core Web Vitals', 'Bundle Optimization', 'SEO Tecnica', 'Analytics', 'A/B Testing'],
      color: 'aurora'
    },
    {
      title: 'Deploy & Tools',
      skills: ['Vercel', 'Netlify', 'GitHub Actions', 'Git', 'npm/yarn'],
      color: 'purple'
    }
  ]

  const services = [
    {
      category: "Design & Strategy",
      items: [
        {
          title: 'Brand & Visual Identity',
          description: 'Logo, palette colori, tipografia e componenti visual per un brand coerente e riconoscibile.',
          deliverables: ['Logo Design', 'Palette Colori', 'Tipografia', 'Brand Guidelines', 'Assets Esportabili']
        },
        {
          title: 'UI/UX Design & Prototipazione',
          description: 'Interfacce user-centered, wireframe e prototipi interattivi per validare l\'esperienza utente.',
          deliverables: ['User Research', 'Wireframing', 'Prototipi Figma', 'User Testing', 'Handoff Development']
        },
        {
          title: 'Design System & Component Library',
          description: 'Librerie di componenti scalabili e consistenti per team e prodotti in crescita.',
          deliverables: ['Token Design', 'Component Library', 'Design Tokens', 'Documentation', 'Figma Systems']
        }
      ]
    },
    {
      category: "Sviluppo & Implementazione",
      items: [
        {
          title: 'Siti Web Next.js & React',
          description: 'Applicazioni moderne con App Router, SSR/SSG, e performance ottimizzate per utenti e SEO.',
          deliverables: ['Setup Next.js', 'Routing & Pages', 'API Integration', 'Responsive Design', 'Deploy Production']
        },
        {
          title: 'E-commerce & Landing Page',
          description: 'Soluzioni e-commerce performanti e landing page ad alta conversione con CRO integrato.',
          deliverables: ['Setup E-commerce', 'Payment Gateway', 'CRO Analysis', 'A/B Testing', 'Analytics Setup']
        },
        {
          title: 'CMS Headless & Content Strategy',
          description: 'Integrazione WordPress Headless, Sanity o Contentlayer per content management scalabile.',
          deliverables: ['CMS Setup', 'Content Modeling', 'API Integration', 'Admin Dashboard', 'Content Migration']
        }
      ]
    },
    {
      category: "Performance & Ottimizzazione",
      items: [
        {
          title: 'SEO Tecnica & Core Web Vitals',
          description: 'Ottimizzazione per motori di ricerca, performance score 90+ e Core Web Vitals eccellenti.',
          deliverables: ['SEO Audit', 'Performance Optimization', 'Schema Markup', 'Sitemap XML', 'Analytics Setup']
        },
        {
          title: 'Conversion Rate Optimization',
          description: 'Analisi comportamentale, A/B testing e ottimizzazioni per aumentare le conversioni.',
          deliverables: ['CRO Audit', 'A/B Test Setup', 'Heatmaps Analysis', 'Funnel Optimization', 'Report Mensili']
        },
        {
          title: 'Maintenance & Support',
          description: 'Manutenzione continuativa, aggiornamenti sicurezza e supporto tecnico per i tuoi progetti.',
          deliverables: ['Security Updates', 'Performance Monitoring', 'Bug Fixing', 'Content Updates', 'Technical Support']
        }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'from-emerald-500 to-emerald-600 text-emerald-600 border-emerald-200'
      case 'aurora':
        return 'from-aurora-500 to-aurora-600 text-aurora-600 border-aurora-200'
      case 'purple':
        return 'from-purple-500 to-purple-600 text-purple-600 border-purple-200'
      default:
        return 'from-gray-500 to-gray-600 text-gray-600 border-gray-200'
    }
  }

  return (
    <div className="py-8 sm:py-12 space-y-12 sm:space-y-16 lg:space-y-20">
      {/* Header */}
      <section className="text-center">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-emerald-600 via-aurora-600 to-purple-600 bg-clip-text text-transparent">
          Competenze & Servizi
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Tecnologie moderne e servizi completi per trasformare le tue idee in prodotti digitali che funzionano e convertono.
        </p>
      </section>

      {/* Technical Skills */}
      <section>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Stack Tecnologico
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Competenze consolidate nelle tecnologie più moderne ed efficaci del panorama web.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => {
            const colorClasses = getColorClasses(category.color)
            return (
              <Card key={category.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="font-display text-lg flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className={`${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} border-current`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Servizi Completi
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Dalla strategia all'implementazione, ogni fase del processo digitale per risultati concreti.
          </p>
        </div>
        <div className="space-y-12 sm:space-y-16">
          {services.map((serviceCategory, categoryIndex) => (
            <div key={serviceCategory.category}>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                {serviceCategory.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {serviceCategory.items.map((service, serviceIndex) => {
                  const colorIndex = (categoryIndex * serviceCategory.items.length + serviceIndex) % 3
                  const colors = ['emerald', 'aurora', 'purple']
                  const colorClasses = getColorClasses(colors[colorIndex])
                  
                  return (
                    <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className={`w-full h-1 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} mb-4 rounded-full`}></div>
                        <CardTitle className="font-display text-lg mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-gray-800 mb-3">Include:</h4>
                          <ul className="space-y-1">
                            {service.deliverables.map((deliverable) => (
                              <li key={deliverable} className="text-sm text-gray-600 flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-emerald-50 via-aurora-50 to-purple-50 rounded-2xl sm:rounded-3xl text-center -mx-3 sm:-mx-6 lg:-mx-8 px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Pronto per il tuo progetto?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Che tu abbia bisogno di design, sviluppo o ottimizzazione, 
            troviamo insieme la soluzione migliore per i tuoi obiettivi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-aurora-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:from-emerald-600 hover:to-aurora-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Richiedi una consulenza
            </Link>
            <Link
              href="/projects"
              className="bg-white border-2 border-aurora-300 text-aurora-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-aurora-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Guarda i progetti
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}