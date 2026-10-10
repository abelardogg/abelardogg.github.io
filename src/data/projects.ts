export interface Project {
  id: string
  name: string
  description: string
  category: 'diseno' | 'datos' | 'funcional' | 'contenido'
  stack: string[]
  demo?: string
  preview: string
}

export const projects: Project[] = [
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
