# Lex Advisors - File Structure
# Estructura de Archivos - Lex Advisors

```
lexadvisors/
│
├── index.html                    # Root redirect → /en/index.html
├── style.css                     # Main stylesheet / Hoja de estilos principal
├── script.js                     # JavaScript functionality / Funcionalidad JavaScript
├── package.json                  # npm configuration
├── README.md                     # Project documentation
├── tree.md                       # This file / Este archivo
│
├── en/                           # English version / Versión en inglés
│   ├── index.html                # Home page
│   ├── about.html                # About page
│   ├── services.html             # Services listing
│   ├── team.html                 # Team page
│   ├── contact.html              # Contact page
│   ├── privacy.html              # Privacy policy
│   ├── gracias.html              # Thank you page
│   ├── header.html               # Header component (loaded via JS)
│   ├── footer.html               # Footer component (loaded via JS)
│   ├── contact-form.html         # Contact form component (loaded via JS)
│   │
│   ├── services/                 # Individual service pages
│   │   ├── alternative-dispute-resolution.html
│   │   ├── appraisals.html
│   │   ├── compliance-anti-money-laundering-privacy-law.html
│   │   ├── construction-and-development.html
│   │   ├── corporate.html
│   │   ├── labour-employment-law.html
│   │   ├── notary-services.html
│   │   ├── real-estate-law.html
│   │   ├── rights-entitlement.html
│   │   ├── tax-law.html
│   │   └── title-search-due-diligence.html
│   │
│   └── team/                     # Individual team member pages
│       ├── javier-mazoy.html
│       ├── laura-nava.html
│       ├── luis-espinoza.html
│       └── maria-lourdes-de-la-torre.html
│
├── es/                           # Spanish version / Versión en español
│   ├── index.html                # Página principal
│   ├── about.html                # Página de nosotros
│   ├── services.html             # Lista de servicios
│   ├── team.html                 # Página del equipo
│   ├── contact.html              # Página de contacto
│   ├── privacy.html              # Política de privacidad
│   ├── gracias.html              # Página de agradecimiento
│   ├── header.html               # Componente de encabezado
│   ├── footer.html               # Componente de pie de página
│   ├── contact-form.html         # Componente de formulario de contacto
│   │
│   ├── services/                 # Páginas individuales de servicios
│   │   ├── alternative-dispute-resolution.html
│   │   ├── appraisals.html
│   │   ├── compliance-anti-money-laundering-privacy-law.html
│   │   ├── construction-and-development.html
│   │   ├── corporate.html
│   │   ├── labour-employment-law.html
│   │   ├── notary-services.html
│   │   ├── real-estate-law.html
│   │   ├── rights-entitlement.html
│   │   ├── tax-law.html
│   │   └── title-search-due-diligence.html
│   │
│   └── team/                     # Páginas individuales de miembros del equipo
│       ├── javier-mazoy.html
│       ├── laura-nava.html
│       ├── luis-espinoza.html
│       └── maria-lourdes-de-la-torre.html
│
├── files/                        # Static assets / Recursos estáticos
│   ├── logos/                    # Logo files
│   │   └── lex_logo.png
│   │
│   └── images/
│       ├── general/              # General site images
│       │   ├── about_us.jpg
│       │   ├── hero_img.jpg
│       │   ├── 1_prop_closed.jpg
│       │   ├── 2_property_value.jpg
│       │   ├── 3_years_experience.jpeg
│       │   └── 4_business_established.jpg
│       │
│       ├── services/             # Service page images
│       │   ├── ADR.jpeg
│       │   ├── appraisal.jpg
│       │   ├── compliance.jpeg
│       │   ├── construction.jpg
│       │   ├── corporate_services.jpg
│       │   ├── labour_employment.jpg
│       │   ├── notary_services.jpg
│       │   ├── real_estate.jpg
│       │   ├── rights_entitlement.jpeg
│       │   ├── tax_law.jpg
│       │   └── title_search.jpeg
│       │
│       ├── team/                 # Team member images
│       │   ├── Profile/          # Profile photos (used on website)
│       │   │   └── profile_*.png
│       │   ├── photoshoot_1/     # Photoshoot session 1 (archive)
│       │   └── photoshoot_2/     # Photoshoot session 2 (archive)
│       │
│       ├── developments/         # Development project images
│       │
│       └── not_used/             # Unused images (archive)
│
├── services/                     # Service documentation (internal)
│   └── all_services_descriptions.md
│
├── team/                         # Team documentation (internal)
│   ├── CV_laura.md
│   ├── CV_luis.md
│   ├── CV_lulu.md
│   └── PROFILE_PAGES_PENDING.md
│
├── not-used/                     # Unused HTML files (archive)
│   ├── developments-section.html
│   └── roles-responsibilities.html
│
└── .claude/                      # Claude Code settings
    └── settings.local.json
```

## Notes / Notas

- The root `index.html` redirects to `/en/index.html` by default
- El `index.html` raíz redirige a `/en/index.html` por defecto
- Header, footer, and contact form are dynamically loaded via JavaScript
- Encabezado, pie de página y formulario de contacto se cargan dinámicamente via JavaScript
- All hreflang tags point to the appropriate language version for SEO
- Todas las etiquetas hreflang apuntan a la versión de idioma apropiada para SEO
