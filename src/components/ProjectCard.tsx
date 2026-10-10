import { ExternalLink } from 'lucide-react'
import { etiquetaEstado, type Project } from '../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group h-full flex flex-col bg-surface-2 border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors">
      <div className="aspect-video shrink-0 bg-surface-3 overflow-hidden relative">
        {project.estado && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur text-accent text-xs font-medium border border-accent/30">
            {etiquetaEstado[project.estado]}
          </span>
        )}
        <img
          src={project.preview}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-text-heading font-semibold text-lg mb-1 line-clamp-1">
          {project.name}
        </h3>

        <p className="text-text text-sm leading-relaxed mb-4 line-clamp-3 min-h-[3.9375rem]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-surface-3 text-text-muted text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
            >
              <ExternalLink size={14} />
              Ver demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
