# Fisiomamifera - Web Profesional

Web profesional para **Marina González Galán**, matrona y fisioterapeuta especializada en suelo pélvico. Desarrollada con Next.js 14, TypeScript y Tailwind CSS.

## 🎯 Características

- **Diseño elegante y minimalista** con paleta de colores suaves (rosas empolvados, verdes suaves y crudos)
- **Completamente responsive** para todos los dispositivos
- **Optimizada para SEO** con metadata dinámica y sitemap automático
- **Formularios funcionales** con validación y envío de emails
- **Blog con artículos MDX** para contenido educativo
- **Integración con WhatsApp** para reservas rápidas
- **Accesibilidad mejorada** con navegación por teclado y contraste AA

## 🚀 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Formularios**: React Hook Form
- **Fuentes**: Inter + Playfair Display (Google Fonts)
- **Despliegue**: Vercel (recomendado)

## 📁 Estructura del Proyecto

```
fisiomamifera/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   ├── globals.css         # Estilos globales
│   │   ├── sobre-mi/
│   │   │   └── page.tsx        # Página "Sobre mí"
│   │   ├── servicios/
│   │   │   └── page.tsx        # Página de servicios
│   │   ├── cita/
│   │   │   ├── page.tsx        # Formulario de reserva
│   │   │   └── api/
│   │   │       └── submit.ts   # API para envío de emails
│   │   ├── blog/
│   │   │   ├── page.tsx        # Listado de artículos
│   │   │   └── [slug]/
│   │   │       └── page.mdx    # Artículos individuales
│   │   ├── contacto/
│   │   │   └── page.tsx        # Página de contacto
│   │   └── sitemap.xml/
│   │       └── route.ts        # Sitemap dinámico
│   └── lib/                    # Utilidades y configuraciones
├── public/                     # Archivos estáticos
├── tailwind.config.ts          # Configuración de Tailwind
└── package.json
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/fisiomamifera.git
   cd fisiomamifera
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus configuraciones:
   ```env
   # Email (para formularios)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=tu-email@gmail.com
   SMTP_PASS=tu-contraseña-de-aplicación
   
   # WhatsApp
   WHATSAPP_NUMBER=+34XXXXXXXXX
   
   # URLs
   NEXT_PUBLIC_SITE_URL=https://fisiomamifera.com
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abre [http://localhost:3000](http://localhost:3000)** en tu navegador

## 📧 Configuración de Email

Para que los formularios funcionen correctamente, configura un servicio SMTP:

### Gmail (recomendado para desarrollo)
1. Activa la verificación en 2 pasos
2. Genera una contraseña de aplicación
3. Usa esa contraseña en `SMTP_PASS`

### Otros proveedores
- **Zoho**: `smtp.zoho.com:587`
- **Outlook**: `smtp-mail.outlook.com:587`
- **SendGrid**: `smtp.sendgrid.net:587`

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conecta tu repositorio a Vercel**
2. **Configura las variables de entorno** en el dashboard de Vercel
3. **Despliega automáticamente** en cada push a `main`

### Otros proveedores

- **Netlify**: Compatible con Next.js
- **Railway**: Soporte nativo para Next.js
- **Render**: Deploy automático desde GitHub

## 📝 Personalización

### Colores y Tipografías

Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  rose: {
    // Rosas empolvados
  },
  sage: {
    // Verdes suaves
  },
  cream: {
    // Crudos
  }
}
```

### Contenido

- **Información personal**: Edita `src/app/sobre-mi/page.tsx`
- **Servicios**: Modifica `src/app/servicios/page.tsx`
- **Artículos del blog**: Añade archivos `.mdx` en `src/app/blog/[slug]/`

### SEO

Cada página tiene su metadata configurada. Edita los objetos `metadata` en cada archivo:

```typescript
export const metadata: Metadata = {
  title: 'Título de la página',
  description: 'Descripción para SEO',
  // ... más configuraciones
}
```

## 📱 Características Responsive

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navegación**: Menú hamburguesa en móviles
- **Imágenes**: Optimizadas para diferentes tamaños de pantalla

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📊 SEO y Rendimiento

- **Lighthouse Score**: ≥90 en todas las métricas
- **Core Web Vitals**: Optimizadas
- **Sitemap**: Generado automáticamente
- **Robots.txt**: Configurado
- **Open Graph**: Metadatos para redes sociales
- **Schema.org**: Marcado estructurado

## 🎨 Componentes Reutilizables

El proyecto incluye componentes comunes:
- Botones con variantes
- Tarjetas de servicios
- Formularios con validación
- Secciones hero
- Navegación responsive

## 📞 Soporte

Para dudas o problemas:
- **Issues**: [GitHub Issues](https://github.com/tu-usuario/fisiomamifera/issues)
- **Email**: contacto@fisiomamifera.com

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Marina González Galán - Fisiomamifera**
