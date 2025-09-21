import { Badge } from '@/components/ui/badge'

interface Project {
  roles?: string[]
  stack?: string[]
  impact?: string[]
  date: string
}

interface ProjectMetaProps {
  project: Project
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
    })
  }

  return (
    <div className="space-y-4">
      {/* Roles */}
      {project.roles && project.roles.length > 0 && (
        <div>
          <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wide mb-2">
            Ruolo
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.roles.map((role) => (
              <Badge key={role} variant="default">
                {role}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Stack */}
      {project.stack && project.stack.length > 0 && (
        <div>
          <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wide mb-2">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Impact */}
      {project.impact && project.impact.length > 0 && (
        <div>
          <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wide mb-2">
            Impact
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {project.impact.map((item, index) => (
              <li key={index} className="text-sm text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Date */}
      <div>
        <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wide mb-2">
          Data
        </h3>
        <p className="text-sm text-gray-700">{formatDate(project.date)}</p>
      </div>
    </div>
  )
}