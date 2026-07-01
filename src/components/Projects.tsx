import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'

const categories = [
  { key: 'todas', label: 'Todas' },
  { key: 'diseno', label: 'Diseño' },
  { key: 'datos', label: 'Datos' },
  { key: 'funcional', label: 'Funcional' },
  { key: 'contenido', label: 'Contenido' },
] as const

type CategoryKey = (typeof categories)[number]['key']

export default function Projects() {
  const [active, setActive] = useState<CategoryKey>('todas')

  const filtered: Project[] =
    active === 'todas'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="proyectos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-2">
          Proyectos
        </h2>
        <p className="text-text mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === cat.key
                  ? 'bg-accent text-surface'
                  : 'bg-surface-2 text-text hover:text-text-heading border border-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
