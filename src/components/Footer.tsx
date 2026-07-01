import { Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          Abelardo Gándara &copy; {year}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abelardogg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/abelardo-gandara-a97ab611a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.workana.com/freelancer/4637d33b20e407f582750662332a415c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-1"
          >
            Workana <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
