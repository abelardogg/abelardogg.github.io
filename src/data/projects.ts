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
    repo: "https://github.com/abelardogg/product-page",
    preview: "/previews/product-page.webp",
  },
]
