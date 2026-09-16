# Contexto y Guía del Proyecto: Ópticas Plaza (`AGENTS.md`)

Este repositorio contiene el sitio web y landing page de alta conversión de **Ópticas Plaza** ([`opticasplaza.cl`](https://opticasplaza.cl)), solución B2B orientada a la coordinación de operativos oftalmológicos en terreno y salud visual preventiva para empresas y colaboradores en Chile.

La configuración, capacidades operativas y gobernanza del agente se gestionan de forma determinista mediante el estándar de **AAS (Agentic Awesome Skills)** a través del manifiesto [`aas-stack.json`](./aas-stack.json) (Schema Version 2) y sus habilidades instaladas localmente en [`.agents/skills/`](./.agents/skills/).

---

## 1. Propósito y Flujo del Sistema

El sitio actúa como el canal principal de adquisición y conversión B2B para líderes de Recursos Humanos, Bienestar y Prevención de Riesgos:
1. **Propuesta de Valor Inmediata:** Hero section mobile-first con mensaje claro, propuesta sin traslados ni costos ocultos, y credibilidad profesional inmediata.
2. **Canal de Conversión Directo (WhatsApp Click-to-Chat):** Enlaces directos a WhatsApp Business (`https://wa.me/message/ECLLEMER5KLGH1`) integrados estratégicamente para cotización y coordinación ágil sin formularios tediosos.
3. **Pilares de Beneficios (Card-Based):** 3 tarjetas modulares destacadas (Atención en terreno, Coordinación sencilla, Beneficio concreto).
4. **Desglose del Operativo:** Fases estructuradas del servicio (Evaluación visual, Asesoría óptica personalizada, Gestión de la jornada).
5. **Gobernanza SEO y Crawlers de IA:** Directivas estrictas en [`robots.txt`](./robots.txt) permitiendo indexación a motores de búsqueda tradicionales (Googlebot, Bingbot) y bloqueando crawlers de entrenamiento de modelos de IA (`GPTBot`, `Google-Extended`, `Bytespider`, `CCBot`).

---

## 2. Arquitectura Técnica y Principios de Diseño

El proyecto sigue una arquitectura **Zero-Dependency Vanilla Web** (sin frameworks pesados, sin paso de build obligatorio, carga instantánea):

```text
├── .agents/
│   └── skills/                     # Habilidades AAS instaladas a nivel de proyecto (39 skills)
├── images/
│   ├── atencion-oftalmologica-corporativa.webp # Imagen optimizada de servicios
│   ├── atencion-oftalmologica-corporativa.png
│   ├── operativo-visual-empresa.webp           # Imagen hero optimizada
│   └── operativo-visual-empresa.png
├── aas-stack.json                  # Manifiesto oficial de habilidades AAS (Schema Version 2)
├── AGENTS.md                       # Guía de contexto y estándares para agentes IA
├── index.html                      # Marcado semántico HTML5, Open Graph, W3C compliant
├── styles.css                      # CSS3 moderno, CSS Grid, Flexbox, clamp(), @media contrast/motion
├── robots.txt                      # Control de rastreo y bloqueo de bots de entrenamiento IA
└── sitemap.xml                     # Mapa de sitio XML canónico
```

### Invariantes Técnicas:
* **Cero JavaScript en Runtime:** Sin dependencias externas de JS para garantizar máxima velocidad, 100/100 en Core Web Vitals y nula superficie de ataque XSS.
* **Tokens de Diseño CSS:** Variables en `:root` (`--aqua`, `--petrol`, `--ink`, `--mist`, etc.) con fluid typography mediante `clamp()`.
* **Accesibilidad Universal (WCAG 2.1/2.2 AA):**
  * Skip-link (`#contenido`) para usuarios con lector de pantalla y teclado.
  * Soporte nativo para `@media (prefers-reduced-motion: reduce)` y `@media (prefers-contrast: more)`.
  * Enlaces externos seguros con `target="_blank"` y `rel="noopener noreferrer"`.
* **Optimización de Imágenes:** Atributos explícitos `width`, `height`, `fetchpriority="high"` en hero LCP, y `loading="lazy"` en imágenes bajo el pliegue.

---

## 3. Stack de Habilidades AAS ([`aas-stack.json`](./aas-stack.json))

El proyecto adopta el catálogo `agentic-awesome-skills@17.3.0` fijado por integridad criptográfica (`sha256-22f3b35c33cfa3057bc4a713756852f1461624609655b99123bd3f0e6f26d613`), instalado en [`.agents/skills/`](./.agents/skills/):

### A. Arquitectura y Estándares Frontend
- **`frontend-dev-guidelines`**: Directrices estrictas de ingeniería frontend, rendimiento y organización modular.
- **`frontend-ui-engineering`**: Construcción de interfaces de usuario robustas con estándares de producción.
- **`ckw-design`**: Filosofía visual, sistema de espaciado, jerarquía tipográfica y dirección de arte web.
- **`design-system`**: Arquitectura de tokens, escalas tipográficas e invariantes de layout.
- **`iconsax-library`**: Prácticas de diseño y marcado SVG escalable y accesible.

### B. Conversión B2B, CRO y Copywriting
- **`page-cro`**: Diagnóstico y optimización de conversión a nivel de página de aterrizaje.
- **`cro`**: Playbook de optimización de conversión para llamados a la acción (CTAs) y propuesta de valor.
- **`copywriting`**: Redacción publicitaria B2B persuasiva enfocada en beneficios tangibles para RRHH.
- **`marketing-psychology`**: Modelos mentales de confianza, prueba social y reducción de fricción en la toma de decisiones.
- **`copy-editing`**: Pulido editorial continuo de textos para claridad, tono y precisión en español de Chile (`es-CL`).

### C. Integraciones, SEO Técnico y Redes Sociales
- **`social-metadata-hardening`**: Endurecimiento de tarjetas Open Graph y Twitter Cards para previsualización enriquecida en WhatsApp.
- **`seo-technical`**: Auditoría técnica de rastreabilidad, `robots.txt`, compatibilidad móvil y Core Web Vitals.
- **`seo-sitemap`**: Validación y optimización de estructura de mapa del sitio XML.
- **`schema-markup-generator`**: Implementación de datos estructurados JSON-LD (`MedicalBusiness`, `LocalBusiness`).
- **`fixing-metadata`**: Auditoría y corrección de metadatos HTML (títulos, descripciones, etiquetas canónicas).

### D. Accesibilidad y Pruebas de Calidad
- **`accesslint-audit`**: Escaneo de accesibilidad WCAG 2.2 y reporte de conformidad.
- **`fixing-accessibility`**: Remediación directa de atributos ARIA, navegación por teclado y contraste de color.
- **`screen-reader-testing`**: Verificación con tecnologías asistivas (VoiceOver, NVDA, JAWS).
- **`high-contrast`**: Implementación y validación del modo de alto contraste (`prefers-contrast`).
- **`fixing-motion-performance`**: Prevención de jank, optimización de transiciones y respeto a `prefers-reduced-motion`.
- **`frontend-lighthouse`**: Puerta de calidad CI con presupuestos estrictos de Core Web Vitals.
- **`pagespeed-enhancer`**: Auditoría y optimización de los 4 pilares de Google PageSpeed Insights.
- **`ui-visual-validator`**: Validación visual rigurosa entre resoluciones móviles y de escritorio.
- **`uxui-principles`**: Evaluación heurística contra 168 principios de UX/UI.
- **`clean-code`**: Principios de Clean Code aplicados a la legibilidad y mantenimiento del código fuente.
- **`clean-code-guard`**: Validación de estándares SOLID, DRY, KISS y YAGNI.

### E. Seguridad y Privacidad Web
- **`web-security-testing`**: Verificación de seguridad web (defensa contra tabnabbing, cabeceras seguras, HTTPS).
- **`seo-drift`**: Monitoreo de regresiones en directivas de rastreo de `robots.txt` y metadatos.
- **`client-secret-exposure-audit`**: Auditoría preventiva contra fuga de credenciales o información confidencial en el frontend.

### F. Diseño y Experiencia de Usuario
- **`design-taste-frontend`**: Refinamiento estético de alta agencia, armonía de color y balance espacial.
- **`card-based-design`**: Patrones de diseño para contenedores de beneficios en tarjetas modulares.
- **`typography-first`**: Jerarquía editorial basada en tipografía fluida y legibilidad óptima.

### G. Despliegue, Operaciones y Mantenimiento
- **`deploy-to-vercel`**: Despliegue y configuración en redes CDN perimetrales de alta disponibilidad.
- **`deployment-procedures`**: Buenas prácticas de despliegue seguro, smoke testing y rollback.
- **`shipping-and-launch`**: Lista de verificación pre-lanzamiento para entornos productivos.
- **`seo-images`**: Análisis de optimización de imágenes (alt text, WebP, compresión y lazy loading).
- **`git-pr-workflows-git-workflow`**: Orquestación de revisiones, ramas y pull requests.
- **`git-advanced-workflows`**: Gestión de historial limpio y recuperación en Git.
- **`commit`**: Convenciones semánticas estrictas de Conventional Commits.

---

## 4. Brechas de Catálogo Identificadas (Catalog Gaps)

* **Protocolos Clínicos Oftalmológicos y Operativos de Salud Ocupacional Móvil:** El catálogo oficial de AAS carece de módulos especializados en salud visual ocupacional, optometría clínica y regulaciones sanitarias locales para policlínicos móviles. Las decisiones clínicas y normativas de salud deben consultarse con el equipo médico especialista de Ópticas Plaza.
