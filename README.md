# GlobalTradePandawebTest

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/alejos-projects-8cce0e74/v0-global-trade-pandaweb-test)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/aVUtC1CrpLF)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/alejos-projects-8cce0e74/v0-global-trade-pandaweb-test](https://vercel.com/alejos-projects-8cce0e74/v0-global-trade-pandaweb-test)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/aVUtC1CrpLF](https://v0.app/chat/projects/aVUtC1CrpLF)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)

## Sobre la empresa:

Panda Global Trade es una empresa especializada en servicios de importación desde China para empresas. Este sitio web corporativo presenta de manera profesional y moderna los servicios ofrecidos, incluyendo un proceso de importación interactivo y transparente.

### Características Principales

- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Proceso Interactivo**: Timeline visual del proceso de importación con desvíos clickeables
- **Navegación Intuitiva**: Navbar transparente con scroll suave entre secciones
- **Formulario de Contacto**: Sistema de contacto integrado
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple estándares de accesibilidad web

### Frontend
- **Next.js 14.2.16** - Framework React con App Router
- **TypeScript 5.0** - Tipado estático
- **Tailwind CSS 4.1.9** - Framework de CSS utilitario
- **React 18** - Biblioteca de interfaz de usuario

### Componentes UI
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Iconografía moderna
- **Class Variance Authority** - Gestión de variantes de componentes

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## Estructura

```
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales y variables CSS
│   ├── layout.tsx         # Layout principal con metadata
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes base (Button, Card, etc.)
│   ├── about.tsx         # Sección "Quiénes Somos"
│   ├── contact.tsx       # Formulario de contacto
│   ├── faq.tsx           # Preguntas frecuentes
│   ├── footer.tsx        # Pie de página
│   ├── header.tsx        # Navegación principal
│   ├── hero.tsx          # Sección hero con CTA
│   ├── process.tsx       # Proceso de importación interactivo
│   ├── services.tsx      # Servicios ofrecidos
│   └── clients.tsx       # Testimonios de clientes
├── lib/                  # Utilidades
│   └── utils.ts          # Funciones helper
├── public/               # Archivos estáticos
│   └── images/           # Imágenes del sitio
└── styles/               # Archivos de estilos adicionales
```

## Secciones

### 1. **Hero Section**
- Imagen de fondo con overlay
- Título principal y subtítulo
- Botones de llamada a la acción
- Indicadores de confianza

### 2. **Quiénes Somos**
- Información sobre la empresa
- Valores y experiencia

### 3. **Servicios**
- Grid de servicios con iconos
- Descripción detallada de cada servicio

### 4. **Nuestro Proceso de Importación** ⭐
- Timeline vertical interactivo
- 8 pasos del proceso
- Desvíos clickeables ("Precio elevado", "Calidad no esperada")
- Hitos de pago destacados
- CTA final

### 5. **Contacto**
- Formulario de contacto
- Información de contacto
- Mapa de ubicación

### 6. **FAQ**
- Preguntas frecuentes con acordeón
- Respuestas detalladas

### 7. **Testimonios**
- Testimonios de clientes
- Casos de éxito

## Integraciones y variables de entorno

### Chatkit Widget
- `NEXT_PUBLIC_CHATKIT_WIDGET_URL`: URL del script del widget de Chatkit que se inyecta de manera dinámica en el sitio.

### Google Sheets
- `GOOGLE_SHEETS_CLIENT_EMAIL`: Email del servicio (Service Account) con acceso de edición al Google Sheet.
- `GOOGLE_SHEETS_PRIVATE_KEY`: Clave privada asociada al Service Account (recordá reemplazar los `\n` por saltos de línea reales en producción).
- `GOOGLE_SHEETS_SPREADSHEET_ID`: Identificador del Google Sheet donde se registran las consultas.
- `GOOGLE_SHEETS_QUOTE_RANGE` *(opcional)*: Rango donde se insertarán las respuestas. Por defecto se usa `Leads!A:G`.
