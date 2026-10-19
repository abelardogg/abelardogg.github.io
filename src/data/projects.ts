import datos from './projects.json'

export type Estado = 'desarrollo' | 'beta' | 'estable'

export const etiquetaEstado: Record<Estado, string> = {
  desarrollo: 'En desarrollo',
  beta: 'Beta',
  estable: 'Estable',
}

export interface Project {
  posicion: number
  id: string
  name: string
  description: string
  category: 'diseno' | 'datos' | 'funcional' | 'contenido'
  stack: string[]
  demo?: string
  preview?: string
  estado?: Estado
}

const porPosicion = (lista: unknown) =>
  [...(lista as Project[])].sort((a, b) => a.posicion - b.posicion)

export const projects = porPosicion(datos.showcase)
export const personalProjects = porPosicion(datos.personales)
