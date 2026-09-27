# Freddy Villca Villegas · Portfolio

Portafolio personal de Freddy Villca Villegas, enfocado en oportunidades de Data Science, Machine Learning y AI Engineering. Presenta proyectos públicos con enlaces al código, perfil profesional y contacto.

## Desarrollo local

```sh
pnpm install
pnpm dev
```

Abre `http://localhost:4321/es/` o `http://localhost:4321/en/`.

Para verificar la versión de producción:

```sh
pnpm build
pnpm preview
```

El sitio está hecho con Astro y se genera como HTML estático. El contenido de ambos idiomas y los enlaces de los proyectos viven en [`src/data/portfolio.ts`](src/data/portfolio.ts). La página usa [`src/components/astro/Portfolio.astro`](src/components/astro/Portfolio.astro) y [`src/styles/portfolio.css`](src/styles/portfolio.css).

## Publicación

El portafolio se publica en `https://freddxvill.github.io/` mediante el workflow de GitHub Pages. Cada push a la rama `portfolio/freddy-villca-villegas` genera y despliega el sitio.

El workflow configura `PUBLIC_SITE_URL` con esa URL. Si cambias de dominio, actualiza ese valor en `.github/workflows/deploy-pages.yml` para que Astro genere el sitemap, las URLs canónicas, las etiquetas `hreflang` y Open Graph con la dirección correcta.

La ruta principal dirige a `/es/`. Hay una versión inglesa en `/en/`. El middleware de Vercel detecta el idioma cuando se visita una ruta sin prefijo; Astro hace lo mismo durante el desarrollo local.

## Contenido y fuentes

Los datos profesionales y las descripciones de proyectos se redactaron a partir del [perfil de GitHub](https://github.com/freddxvill), los README de los repositorios enlazados, el [perfil de LinkedIn](https://www.linkedin.com/in/freddy-villca-villegas/) y el [sitio público de Thinka AI](https://thinka-ia.com/). El repositorio de Thinka AI es privado, por lo que su ficha enlaza al producto. Revisa los textos antes de publicar si quieres añadir experiencia laboral, resultados medibles o un CV descargable.
