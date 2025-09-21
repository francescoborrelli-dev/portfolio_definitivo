import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface Project {
  slug: string
  url: string
  title: string
  summary?: string
  cover?: string
  stack: string[]
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.url} className="group">
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        {project.cover && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          {project.summary && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {project.summary}
            </p>
          )}
          {project.stack && project.stack.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.stack.length - 4}
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}