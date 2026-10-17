# Prana & Mar — Estudio de Yoga y Bienestar en Barranco, Lima

Landing page de estética editorial, cálida y orgánica diseñada para **Prana & Mar**, un santuario de yoga contemporáneo, meditación y sonido frente al océano Pacífico en Barranco, Lima.

## ✨ Características

- **Diseño Editorial Cálido**: Paleta inspirada en la costa limeña (arena húmeda, terracota colonial, salvia costera y carbón cálido) con tipografías *Cormorant Garamond* y *Plus Jakarta Sans*.
- **Animaciones al hacer Scroll con GSAP + ScrollTrigger**: Revelado progresivo de textos y tarjetas, parallax suave en imágenes, contadores e interacciones de línea de tiempo.
- **Accesibilidad (`prefers-reduced-motion`)**: Todas las animaciones utilizan `gsap.matchMedia()` para desactivar desplazamientos y efectos intensos si el usuario prefiere movimiento reducido.
- **Horario Interactivo y Modal de Reserva**: Filtro funcional por días de la semana y por disciplina (Vinyasa, Yin, Kundalini, Sound Healing) conectado directamente con el formulario de reserva.
- **100% Responsive**: Navegación móvil adaptable, grillas editoriales fluidas y optimización para todo tamaño de pantalla.

## 🛠️ Tecnologías utilizadas

- [Astro 4](https://astro.build/) — Framework web orientado al rendimiento.
- [Tailwind CSS 3.4](https://tailwindcss.com/) — Sistema de estilos utilitarios configurado a medida.
- [GSAP 3 + ScrollTrigger](https://gsap.com/) — Librería profesional de animación web instalada vía npm.

## 📁 Estructura de archivos

```text
├── public/
│   └── favicon.svg          # Ícono vectorial de loto y sol
├── src/
│   ├── components/
│   │   ├── Navbar.astro     # Cabecera fija con blur y menú móvil
│   │   ├── Hero.astro       # Portada editorial con parallax y tarjetas flotantes
│   │   ├── Philosophy.astro # Manifiesto y métricas del santuario
│   │   ├── Classes.astro    # Catálogo detallado de disciplinas y niveles
│   │   ├── Instructors.astro# Guías y maestros con especialidades
│   │   ├── Schedule.astro   # Horario interactivo filtrable por día y estilo
│   │   ├── Testimonials.astro# Voces de la comunidad y membresías
│   │   ├── Contact.astro    # Formulario de clase de prueba y mapa de Barranco
│   │   └── Footer.astro     # Pie de página editorial
│   ├── layouts/
│   │   └── Layout.astro     # Plantilla base con fuentes, SEO y estilos globales
│   ├── pages/
│   │   └── index.astro      # Página principal con orquestación de GSAP ScrollTrigger
│   └── styles/
│       └── global.css       # Directivas Tailwind, textura sutil y utilidades
├── astro.config.mjs         # Configuración de Astro con soporte BASE_PATH
├── postcss.config.js        # Configuración de PostCSS
├── tailwind.config.js       # Paleta cálida y tipografías personalizadas
└── package.json             # Dependencias y scripts
```

## 🚀 Cómo ejecutar localmente

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre `http://localhost:4321` en tu navegador.

3. **Compilar para producción:**
   ```bash
   npm run build
   npm run preview
   ```
