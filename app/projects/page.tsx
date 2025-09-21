import type { Metadata } from 'next'
import { allProjects } from 'contentlayer/generated'
import ProjectCard from '@/components/project-card'

export const metadata: Metadata = {
  title: 'Progetti',
  description: 'Una selezione dei miei progetti più rappresentativi in design e sviluppo frontend.',
  // keywords: '', // Inserisci qui le keyword SEO separate da virgola
}

export default function ProjectsPage() {
  // Filter out draft projects in production
  const publishedProjects = allProjects
    .filter(project => process.env.NODE_ENV === 'development' || !project.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Progetti</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Una selezione dei miei lavori più rappresentativi, dal design alla realizzazione tecnica.
        </p>
      </div>

      {publishedProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">
            Nessun progetto pubblicato al momento. Torna presto per vedere i miei lavori!
          </p>
        </div>
      )}
    </div>
  )
}