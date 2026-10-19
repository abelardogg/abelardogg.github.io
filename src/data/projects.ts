export type Estado = 'desarrollo' | 'beta' | 'estable'

export const etiquetaEstado: Record<Estado, string> = {
  desarrollo: 'En desarrollo',
  beta: 'Beta',
  estable: 'Estable',
}

export interface Project {
  id: string
  name: string
  description: string
  category: 'diseno' | 'datos' | 'funcional' | 'contenido'
  stack: string[]
  demo?: string
  preview?: string
  estado?: Estado
}

export const projects: Project[] = [
  {
    id: "trailinfo",
    name: "TrailInfo",
    description: "Catálogo de senderos de El Paso con un índice de dificultad de 0 a 100 por ruta: buscador con autocompletado, filtros y mapa topográfico interactivo.",
    category: "datos",
    stack: ["Next.js", "TypeScript", "Tailwind", "Leaflet"],
    demo: "https://city-info-inky.vercel.app/",
  },
  {
    id: "web-invitations",
    name: "Invitaciones Web",
    description: "Invitaciones digitales para bodas, fiestas, marchas y workshops con RSVP, countdown, galería y mapa.",
    category: "diseno",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "React Hook Form", "Zod"],
    demo: "https://web-invitations-ten.vercel.app/boda",
    preview: "/previews/web-invitations.webp",
  },
  {
    id: "product-page",
    name: "Página de Producto",
    description: "Ficha de producto e-commerce con galería, variantes, carrito, reseñas y FAQ.",
    category: "funcional",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://product-page-olive-nine.vercel.app/",
    preview: "/previews/product-page.webp",
  },
  {
    id: "agenda",
    name: "Agenda de Citas",
    description: "Agenda para barbería con calendario de disponibilidad por día, horarios por barbero y resumen del turno.",
    category: "funcional",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://agenda-eta-eight.vercel.app/",
    preview: "/previews/agenda.webp",
  },
  {
    id: "sales-dashboard",
    name: "Dashboard de Ventas",
    description: "Dashboard de una agencia de seminuevos: ingresos por periodo, formas de pago, inventario y gastos de operación.",
    category: "datos",
    stack: ["Next.js", "TypeScript", "Tailwind", "SVG"],
    demo: "https://sales-dashboard-livid-theta.vercel.app/",
    preview: "/previews/sales-dashboard.webp",
  },
]

export const personalProjects: Project[] = [
  {
    id: "guitar-lessons",
    name: "Lecciones de Guitarra",
    description: "Mástil interactivo con sonido real sintetizado en el navegador, metrónomo y las cinco posiciones CAGED. Primera lección: la escala mayor.",
    category: "contenido",
    stack: ["Next.js", "TypeScript", "Tailwind", "Web Audio"],
    demo: "https://guitar-lessons-zeta.vercel.app/",
    preview: "/previews/guitar-lessons.webp",
    estado: "desarrollo",
  },
]
