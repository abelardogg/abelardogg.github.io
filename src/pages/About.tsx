import Footer from '../components/Footer'

const mainSkills = ['React', 'Next.js', 'TypeScript', 'Tailwind']
const otherSkills = ['Figma', 'Node.js', 'Git', 'Vercel']

export default function About() {
  return (
    <>
      <section className="min-h-screen pt-32 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-heading mb-6">
            Sobre mí
          </h1>

          <p className="text-text text-lg leading-relaxed mb-6">
            Llevo 10 años construyendo productos web con atención al detalle: desde la arquitectura del componente hasta cómo lo indexa Google. Me especializo en frontend con React y Next.js, cuidando siempre la experiencia de usuario y el rendimiento. Disponible para proyectos freelance de cualquier escala.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-text-heading text-sm font-semibold mb-2">Principales</p>
              <div className="flex flex-wrap gap-2">
                {mainSkills.map((s) => (
                  <span key={s} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-text-heading text-sm font-semibold mb-2">Complementarios</p>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((s) => (
                  <span key={s} className="px-3 py-1 bg-surface-3 text-text-muted text-sm rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
