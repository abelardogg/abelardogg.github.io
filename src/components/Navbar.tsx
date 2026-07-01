import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Proyectos', section: 'proyectos', path: '/' },
  { label: 'Sobre mí', section: null, path: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (link: (typeof links)[number]) => {
    setOpen(false)

    if (link.path === location.pathname && link.section) {
      const el = document.getElementById(link.section)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      const to = link.section ? `${link.path}#${link.section}` : link.path
      navigate(to)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/70 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-text-heading font-semibold text-lg cursor-pointer"
        >
          abgg<span className="text-accent">.</span>
        </button>

        <button
          className="sm:hidden text-text-heading cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleClick(link)}
                className="text-text hover:text-text-heading transition-colors text-sm font-medium cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="sm:hidden bg-surface-2 border-b border-border">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleClick(link)}
                  className="block text-text hover:text-text-heading transition-colors text-sm font-medium cursor-pointer w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
