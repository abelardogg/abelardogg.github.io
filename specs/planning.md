# Sitio principal del portafolio

Hub central que enlaza a todos los proyectos. Una sola página (SPA estática).

**Deploy:** GitHub Pages → URL `username.github.io` (limpia, sin restricciones comerciales)
**Proyectos individuales:** Vercel (se benefician de SSR, API routes, preview deployments)

---

## Stack

- **Framework:** Vite + React — más simple que Next.js para sitio 100% estático, deploy a GH Pages sin workarounds
- **Alternativa válida:** Next.js con `output: 'export'` si ya lo conoces bien (ver limitaciones abajo)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion (solo entradas suaves, nada pesado)
- **Íconos:** Lucide React
- **Deploy:** GitHub Pages (gratis, sin límites de proyectos, sin restricción de uso comercial)

### Por qué Vite sobre Next.js para este sitio

El hub es 100% estático: no tiene API routes, no necesita SSR, no usa `next/image` con optimización. Next.js en modo `output: 'export'` funciona, pero desactiva features clave y requiere configuración extra para GH Pages. Vite es más directo para este caso.

Si prefieres Next.js igual, agrega esto en `next.config.ts` y ten en cuenta las limitaciones:

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // next/image no funciona en modo export
  basePath: '/portfolio',        // si el repo NO es username.github.io sino username.github.io/portfolio
}
export default nextConfig
```

**Lo que se pierde con `output: 'export'`:**
- ❌ `next/image` con optimización automática → usar `<img>` normal o `unoptimized: true`
- ❌ API routes
- ❌ SSR / ISR
- ✅ Todo lo demás (Tailwind, Framer Motion, filtros, componentes) funciona igual

---

## Estructura de carpetas

```
portfolio/
├── index.html             ← entry point (Vite lo toma directo)
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx            ← toda la landing (secciones importadas)
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx   ← grid + filtros
│   │   ├── ProjectCard.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── projects.ts    ← array de proyectos (source of truth)
└── public/
    ├── og.png             ← 1200×630px para compartir en redes
    └── previews/          ← screenshots de cada proyecto (.webp)
```

---

## Secciones

### ① Navbar

- Logo / nombre a la izquierda
- Links: Proyectos · Sobre mí · Contacto (scroll suave con `href="#section-id"`)
- Sticky con `position: sticky top-0`
- Fondo con `backdrop-blur` al hacer scroll para no tapar contenido
- Sin menú hamburguesa en desktop, sí en móvil (solo los 3 links)

**Efecto secundario:** `backdrop-blur` puede causar parpadeo en Safari. Testear en iOS antes de publicar.

---

### ② Hero

Primer impacto. Debe quedar en el viewport sin hacer scroll.

**Contenido:**
- Headline orientado al cliente, no autobiográfico
  - Ejemplo: *"Frontend developer — interfaces que convierten"*
  - Evitar: *"Hola, soy Juan desarrollador web"*
- Tagline de 1-2 líneas explicando qué haces y para quién
  - Ejemplo: *"Construyo productos web modernos, rápidos y bien diseñados para negocios y emprendedores."*
- 2 CTAs: **Ver proyectos** (primario, scroll a #proyectos) · **Contactar** (secundario)
- Opcional: fila de íconos del stack tecnológico debajo del tagline

**No incluir:** foto de perfil en el hero (distrae del mensaje principal)

---

### ③ Proyectos

Sección principal. La más importante para clientes de Workana.

**Filtros (encima del grid):**
- Botones tipo pill: Todos · Diseño · Datos · Funcional · Contenido
- Filtrado en cliente con estado React (sin recarga)
- El filtro activo con color de acento

**Grid de tarjetas:**
- 3 columnas desktop → 2 tablet → 1 móvil (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- Animación de entrada suave con Framer Motion al cargar

**Cada tarjeta (`ProjectCard`) contiene:**
- Preview visual (screenshot del proyecto, `object-cover`, altura fija ~200px)
- Nombre del proyecto
- Descripción corta — 1 línea, orientada a lo que resuelve
  - Ejemplo: *"Landing page para invitaciones de eventos con RSVP y countdown"*
- Stack como tags pequeños (React, Tailwind, etc.)
- 2 links: **Ver demo** (abre en nueva pestaña) · **Ver código** (GitHub)
- Hover: leve elevación o borde de acento — sin efectos pesados

**Source of truth — `data/projects.ts`:**
```ts
export const projects = [
  {
    id: "dashboard",
    name: "Dashboard analytics",
    description: "Panel de métricas con gráficas, filtros y tablas interactivas.",
    category: "datos",
    stack: ["React", "Recharts", "TanStack Table", "Tailwind"],
    demo: "https://...",
    repo: "https://github.com/...",
    preview: "/previews/dashboard.png",
  },
  // ...resto de proyectos
]
```

Agregar un proyecto nuevo = agregar un objeto a este array. El grid se actualiza solo.

---

### ④ Sobre mí

Breve. El cliente quiere saber con quién trabaja, no leer un CV.

**Contenido:**
- 1 párrafo, máximo 80 palabras
- Menciona: años de experiencia, tipo de proyectos que haces, qué te interesa
- Skills como tags, **no como barras de progreso** (las barras no dicen nada real)
- Dividir tags en 2 grupos visuales: principales (React, Next.js, TypeScript, Tailwind) y complementarios (Figma, Node.js, Git, Vercel)

**Opcional:** foto pequeña al lado del párrafo (no en el hero)

---

### ⑤ Contacto

Simple y directo. No un formulario complejo.

**Contenido:**
- Email visible y copiable (botón de copiar al portapapeles)
- Link a perfil de Workana
- Link a GitHub
- Link a LinkedIn (opcional)

**Por qué no formulario aquí:** clientes de Workana ya tienen su propio canal de mensajería. Un formulario aquí agrega fricción sin valor real.

---

### ⑥ Footer

Una sola línea:
- Nombre · © 2025 · Links de redes (íconos pequeños)

---

## SEO y metadata

Con Vite la metadata va directo en `index.html` — no hay `layout.tsx`:

```html
<!-- index.html -->
<head>
  <title>Juan García — Frontend Developer</title>
  <meta name="description" content="Portfolio de proyectos web: dashboards, landings, agendas y más." />

  <!-- Open Graph (WhatsApp, Slack, redes) -->
  <meta property="og:title" content="Juan García — Frontend Developer" />
  <meta property="og:description" content="Portfolio de proyectos web modernos y responsivos." />
  <meta property="og:image" content="https://username.github.io/og.png" />
  <meta property="og:url" content="https://username.github.io" />
  <meta property="og:type" content="website" />

  <!-- Twitter/X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://username.github.io/og.png" />
</head>
```

`og.png` es importante: cuando un cliente comparte tu link en WhatsApp o Slack, esta imagen es lo primero que ve.

---

## Performance — objetivos mínimos

| Métrica | Objetivo |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| Lighthouse Performance | > 90 |

- Imágenes de preview en formato `.webp` con `loading="lazy"` manual (no hay `next/image`)
- No cargar librerías de animación pesadas si solo se usan en 1 sección
- Fuente: usar la de sistema o Google Fonts con `display: swap`

Agregar el score de Lighthouse al README del repo como diferenciador técnico.

---

## Checklist de construcción

### Setup
- [ ] Crear repo llamado exactamente `username.github.io` en GitHub (esto activa GH Pages en la raíz)
- [ ] Inicializar Vite + React + TypeScript: `npm create vite@latest`
- [ ] Instalar dependencias: Tailwind CSS · Framer Motion · Lucide React
- [ ] Configurar deploy automático a GH Pages con GitHub Actions (ver config abajo)
- [ ] Habilitar GitHub Pages en Settings → Pages → Source: GitHub Actions

**GitHub Actions — `.github/workflows/deploy.yml`:**
```yaml
name: Deploy portfolio
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v4
        with:
          artifact_name: dist  # Vite genera la build en /dist
```

Con esto cada push a `main` despliega automáticamente — igual que Vercel.

### Contenido primero
- [ ] Escribir headline y tagline del hero (lo más importante, no dejarlo para el final)
- [ ] Redactar párrafo de "Sobre mí" (< 80 palabras)
- [ ] Definir los 7-8 proyectos en `data/projects.ts` aunque aún no estén listos
- [ ] Tomar screenshots de proyectos y exportar a `.webp`

### Desarrollo (orden sugerido)
- [ ] Layout base + Navbar
- [ ] Hero
- [ ] ProjectCard (componente aislado, probar con datos mock)
- [ ] Sección Proyectos + filtros
- [ ] About
- [ ] Contacto + Footer
- [ ] Animaciones de entrada (al final, no al principio)
- [ ] Responsive (mobile-first desde el inicio, no al final)

### Antes de publicar
- [ ] Revisar en Safari iOS (backdrop-blur, fuentes)
- [ ] Correr Lighthouse y documentar score en README
- [ ] Agregar `og.png` (1200×630px) en `/public`
- [ ] Verificar que todos los links de demo y GitHub funcionen
- [ ] Verificar metadata en `index.html` con URLs absolutas de `username.github.io`
- [ ] Confirmar que el repo se llama exactamente `username.github.io` (si no, las rutas de assets se rompen)