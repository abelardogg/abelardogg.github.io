import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      setTimeout(() => el?.scrollIntoView({ behavior: 'smooth' }), 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Hero />
      <Projects />
      <Footer />
    </>
  )
}
