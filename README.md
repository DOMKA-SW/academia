# Marketing Intelligent Academy

Una plataforma educativa moderna para aprender marketing digital, SEO, Google Ads y análisis de datos.

## 🚀 Características

- **Landing Page Atractiva**: Hero moderno con gradientes y animaciones
- **Sistema de Cursos**: Exploración de cursos con diferentes niveles
- **Dashboard de Estudiante**: Seguimiento de progreso y cursos activos
- **Autenticación**: Sistema de login/registro (preparado para Google OAuth)
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Modo Oscuro/Claro**: Sistema de temas completo
- **Animaciones Suaves**: Transiciones y microinteracciones

## 🛠️ Tecnologías

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router v6
- **Estilos**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Lovable Cloud (Supabase)
- **Build**: Vite

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes UI de shadcn
│   ├── Navbar.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── Features.tsx    # Características
│   └── Footer.tsx      # Pie de página
├── pages/              # Páginas de la aplicación
│   ├── Index.tsx       # Landing page
│   ├── Courses.tsx     # Catálogo de cursos
│   ├── Dashboard.tsx   # Dashboard del estudiante
│   ├── Auth.tsx        # Login/Registro
│   └── NotFound.tsx    # Página 404
└── integrations/       # Integraciones backend
    └── supabase/       # Cliente y tipos de Supabase
```

## 🎨 Sistema de Diseño

### Colores Principales
- **Primary**: Púrpura vibrante (#8B5CF6)
- **Secondary**: Verde esmeralda (#059669)
- **Accent**: Naranja energético (#F97316)

### Características del Diseño
- Gradientes modernos
- Sombras suaves con efecto glow
- Tipografía limpia y legible
- Animaciones CSS personalizadas
- Sistema de tokens CSS para consistencia

## 🚀 Próximos Pasos

### Autenticación
- [ ] Implementar Google OAuth
- [ ] Sistema de perfiles de usuario
- [ ] Gestión de sesiones

### Base de Datos
- [ ] Tabla de cursos con módulos y lecciones
- [ ] Sistema de progreso de estudiantes
- [ ] Gestión de certificados

### Funcionalidades
- [ ] Reproductor de video
- [ ] Sistema de quiz
- [ ] Generación de certificados PDF
- [ ] Panel de administración
- [ ] Integración de pagos (Mercado Pago/Wompi)
- [ ] Avatar interactivo con IA
- [ ] Multilenguaje (ES/EN)

## 📝 Despliegue

Este proyecto está listo para desplegarse en Lovable con un solo clic.

Para desarrollo local:
```bash
npm install
npm run dev
```

## 🔐 Backend (Lovable Cloud)

El proyecto tiene Lovable Cloud habilitado, proporcionando:
- Base de datos PostgreSQL
- Autenticación
- Almacenamiento de archivos
- Funciones serverless

<lov-actions>
<lov-open-backend>Ver Backend</lov-open-backend>
</lov-actions>


---

Desarrollado con 💜 por Marketing Intelligent Academy
