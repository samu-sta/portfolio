# 🚀 Portafolio — Software Developer

Portafolio bento construido con Astro.

- Stack: Astro, TypeScript (implícito), Tailwind CSS (opcional), GSAP (animaciones)
- Entrada principal: [src/pages/index.astro](src/pages/index.astro)
- Layout base: [src/layouts/Layout.astro](src/layouts/Layout.astro)
- Componentes: [src/components/Header.astro](src/components/Header.astro), [src/components/Footer.astro](src/components/Footer.astro)
- Estilos globales: [src/styles/global.css](src/styles/global.css)
- Configuración: [astro.config.mjs](astro.config.mjs), [package.json](package.json)

## 🛠️ Desarrollo

Instalar dependencias y levantar el entorno local.

```sh
pnpm install
pnpm dev
```

Build y previsualización de producción.

```sh
pnpm build
pnpm preview
```

## 📁 Estructura

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```