import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group bg-surface-2 border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors">
      <div className="aspect-video bg-surface-3 overflow-hidden">
        <img
          src={project.preview}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-text-heading font-semibold text-lg mb-1">
          {project.name}
        </h3>

        <p className="text-text text-sm leading-relaxed mb-4">
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

        <div className="flex items-center gap-4">
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
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text hover:text-text-heading transition-colors"
            >
              <Github size={14} />
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
