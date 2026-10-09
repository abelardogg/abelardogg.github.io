import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <section className="min-h-screen pt-32 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-heading mb-6">
            Sobre mí
          </h1>

          <p className="text-text text-lg leading-relaxed mb-4">
            Ingeniero de software desde 2016. Construyo sitios y aplicaciones
            web de principio a fin, con amplia experiencia en UI/UX, SEO y
            performance para sitios veloces.
          </p>

          <p className="text-text text-lg leading-relaxed">
            Disponible para proyectos freelance.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
