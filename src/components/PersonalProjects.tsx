import { motion } from 'framer-motion'
import { personalProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function PersonalProjects() {
  return (
    <section id="proyectos" className="pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-2">
          Proyectos
        </h2>
        <p className="text-text mb-10 max-w-2xl">
          Ideas propias que estoy construyendo, no demos de muestra.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {personalProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
