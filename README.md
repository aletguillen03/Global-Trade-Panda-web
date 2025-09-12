# 🐼 Panda Global Trade - Sitio Web Corporativo

> **Sitio web profesional para servicios de importación desde China para empresas**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)

## 📋 Descripción

Panda Global Trade es una empresa especializada en servicios de importación desde China para empresas. Este sitio web corporativo presenta de manera profesional y moderna los servicios ofrecidos, incluyendo un proceso de importación interactivo y transparente.

### 🎯 Características Principales

- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Proceso Interactivo**: Timeline visual del proceso de importación con desvíos clickeables
- **Navegación Intuitiva**: Navbar transparente con scroll suave entre secciones
- **Formulario de Contacto**: Sistema de contacto integrado
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple estándares de accesibilidad web

## 🚀 Tecnologías Utilizadas

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

## 📁 Estructura del Proyecto

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
│   └── testimonials.tsx  # Testimonios de clientes
├── lib/                  # Utilidades
│   └── utils.ts          # Funciones helper
├── public/               # Archivos estáticos
│   └── images/           # Imágenes del sitio
└── styles/               # Archivos de estilos adicionales
```

## 🎨 Secciones del Sitio

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

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- npm, yarn o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/global-trade-panda-web.git
   cd global-trade-panda-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar ESLint
```

## 🎯 Características Técnicas

### Performance
- **Lazy Loading**: Carga diferida de imágenes
- **Optimización de fuentes**: Google Fonts con preconnect
- **Bundle splitting**: Código dividido automáticamente

### SEO
- **Meta tags**: Título, descripción y Open Graph
- **Estructura semántica**: HTML5 semántico
- **URLs amigables**: Rutas optimizadas

### Accesibilidad
- **ARIA labels**: Etiquetas de accesibilidad
- **Navegación por teclado**: Soporte completo
- **Contraste**: Cumple estándares WCAG

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primario**: Negro (#000000)
- **Acento**: Naranja (#FF6A00)
- **Fondo**: Blanco (#FFFFFF)
- **Texto**: Grises escalados

### Tipografía
- **Principal**: Inter (Google Fonts)
- **Monospace**: IBM Plex Mono

### Componentes
- **Cards**: Con hover effects y sombras
- **Botones**: Variantes primary, secondary, outline
- **Formularios**: Validación y estados de error

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid y Flexbox
- **Navegación**: Adaptativa para diferentes tamaños

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Otras Plataformas
- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte completo
- **Docker**: Containerización disponible

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Panda Global Trade**
- 📧 Email: contacto@pandaglobaltrade.com
- 🌐 Website: [pandaglobaltrade.com](https://pandaglobaltrade.com)
- 📱 Teléfono: +54 11 1234-5678

---

<div align="center">
  <p>Hecho con ❤️ por el equipo de Panda Global Trade</p>
  <p>© 2024 Panda Global Trade. Todos los derechos reservados.</p>
</div>