import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { allProjects } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import ProjectMeta from '@/components/project-meta'
import Gallery from '@/components/gallery'

interface ProjectDetailProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allProjects
    .filter(project => process.env.NODE_ENV === 'development' || !project.draft)
    .map((project) => ({
      slug: project.slug,
    }))
}

export function generateMetadata({ params }: ProjectDetailProps): Metadata {
  const project = allProjects.find((project) => project.slug === params.slug)
  
  if (!project) {
    return {}
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  return {
    title: project.title,
    description: project.summary || `Progetto ${project.title}`,
    // keywords: '', // Inserisci qui le keyword SEO per il progetto
    alternates: {
      canonical: `${siteUrl}${project.url}`,
    },
  }
}

export const dynamicParams = false

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const project = allProjects.find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Hide drafts in production
  if (process.env.NODE_ENV !== 'development' && project.draft) {
    notFound()
  }

  const MDXContent = useMDXComponent(project.body.code)

  return (
    <div className="py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        {project.summary && (
          <p className="text-lg text-gray-600 mb-6">{project.summary}</p>
        )}

        <ProjectMeta project={project} />

        {project.cover && (
          <div className="mt-8 aspect-video relative rounded-lg overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Content */}
      <article className="prose prose-gray max-w-none mb-12">
        <MDXContent />
      </article>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <Gallery images={project.gallery} projectTitle={project.title} />
        </section>
      )}
    </div>
  )
}