export interface Project {
  id: string
  name: string
  description: string
  category: 'diseno' | 'datos' | 'funcional' | 'contenido'
  stack: string[]
  demo?: string
  repo?: string
  preview: string
}

export const projects: Project[] = [
  {
    id: "dashboard-analytics",
    name: "Dashboard Analytics",
    description: "Panel de métricas con gráficas interactivas, filtros y tablas dinámicas.",
    category: "datos",
    stack: ["React", "TypeScript", "Recharts", "Tailwind"],
    demo: "https://example.com/dashboard",
    repo: "https://github.com/abelardogg/dashboard",
    preview: "/previews/dashboard.webp",
  },
  {
    id: "event-landing",
    name: "Event Landing Page",
    description: "Landing page para invitaciones con RSVP, countdown y galería.",
    category: "diseno",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    demo: "https://example.com/event",
    repo: "https://github.com/abelardogg/event-landing",
    preview: "/previews/event.webp",
  },
  {
    id: "ecommerce",
    name: "E-commerce UI",
    description: "Tienda online con carrito, filtros, buscador y checkout simulado.",
    category: "funcional",
    stack: ["React", "Redux", "Stripe", "Tailwind"],
    demo: "https://example.com/shop",
    repo: "https://github.com/abelardogg/ecommerce",
    preview: "/previews/ecommerce.webp",
  },
  {
    id: "blog-platform",
    name: "Blog Platform",
    description: "CMS ligero con editor Markdown, tags y comentarios embebidos.",
    category: "contenido",
    stack: ["Next.js", "MDX", "Prisma", "Tailwind"],
    demo: "https://example.com/blog",
    repo: "https://github.com/abelardogg/blog",
    preview: "/previews/blog.webp",
  },
  {
    id: "weather-app",
    name: "Weather App",
    description: "App del clima con geolocalización, gráficos semanales y alerts.",
    category: "funcional",
    stack: ["React", "OpenWeather API", "Chart.js"],
    demo: "https://example.com/weather",
    repo: "https://github.com/abelardogg/weather",
    preview: "/previews/weather.webp",
  },
  {
    id: "portfolio-template",
    name: "Portfolio Template",
    description: "Template de portafolio open-source para developers freelance.",
    category: "diseno",
    stack: ["Astro", "Tailwind", "MDX"],
    demo: "https://example.com/template",
    repo: "https://github.com/abelardogg/portfolio-template",
    preview: "/previews/template.webp",
  },
]
