import type { Lang } from "../contexts/lang";


export const MESSAGES = {
  en: {
    layout: {
      langLabel: "Language",
      toggleNav: 'Toggle navigation sidebar',
      nav: {
        hero: 'Profile',
        technologies: 'Technologies',
        projects: 'Projects',
        contact: 'Contact',
      }
    },

    hero: {
      name: "Nicolás Barragán",
      tagline: "Backend & Systems-oriented Fullstack Developer",
      phrases: [
        "Building systems with Rust and TypeScript",
        "Microservices-first architecture mindset",
        "Containerizing workloads with Podman",
        "Cross-platform apps with Tauri",
        "PostgreSQL for reliable data modeling",
        "Learning Kubernetes for orchestration",
      ],
      p1: "Computer Science and Cybersecurity undergraduate. I build full-stack solutions with a strong backend focus: APIs, data modeling, and scalable services.",
      p2: "Comfortable with DevOps/GitOps practices, containers, and Linux fundamentals. Currently deepening Kubernetes and distributed systems skills.",
      ctas: {
        projects: "View projects",
        contact: "Contact me",
      },
      langLabel: "Language",
    },
    
    technologies: {
      title: "Tech stack",
      languages: {
        title: "Languages",
        items: ["Rust", "TypeScript", "JavaScript"],
      },
      backend: {
        title: "Backend",
        items: [
          "REST API design & development",
          "Microservices architecture",
          "Data modeling",
          "PostgreSQL",
        ],
      },
      frontend: {
        title: "Frontend",
        items: ["Preact", "React", "HTML5", "CSS3"],
      },
      infra: {
        title: "DevOps / Infrastructure",
        items: [
          "Containerization with Podman",
          "GitOps principles",
          "Linux (basic sysadmin)",
          "Kubernetes (learning)",
        ],
      },
      extra: {
        title: "Tools & Extras",
        items: ["Git", "GitHub", "Postman", "Tauri (desktop & mobile apps)"],
      },
    },

    projects: {
      title: "Projects",
      subtitle:
        "Selected work and case studies.",
      note: "Some projects are in progress or private. Demos and code walkthroughs available on request.",
      cta: {
        requestDemo: "Request a private demo",
        contact: "Contact",
      },
      items: [
        {
          title: "Local LLM Chat Client",
          status: "Private / In progress",
          description:
            "Cross-platform client for orchestrating local LLM inference through an extensible architecture focused on session persistence and provider abstraction.",
          highlights: [
            "Local inference orchestration layer",
            "Conversational state persistence",
            "Provider-based extensible architecture",
            "Context & session management",
            "Cross-platform desktop integration"
          ],
          stack: ["Rust", "Tauri", "TypeScript", "Preact"],
        },
        {
          title: "ERP System (Relational Inventory & Invoicing)",
          status: "In progress",
          description:
            "Design and implementation of an ERP focused on real-time inventory consistency, capable of modeling product dependencies through BOM structures and propagating transactional stock updates across multiple warehouses.",
          highlights: [
            "SKU dependency graph for derived stock",
            "Inventory decomposition via BOM",
            "Transactional updates for bundles & composite products",
            "Multi-warehouse stock consistency",
            "Physical inventory localization",
            "Relational model optimized for state propagation"
          ],
          stack: ["PostgreSQL", "Tauri", "TypeScript", "Preact", "Rust", "Actix-web"],
        },
        {
          title: "Modular E-commerce WebApp",
          status: "Under restructuring",
          description:
            "Full-stack e-commerce platform built with a backend-first architecture emphasizing domain separation and reproducible containerized deployments.",
          highlights: [
            "Domain-driven modular architecture",
            "Relational API focused on transactional integrity",
            "Containerized development workflow",
            "Application/data layer separation",
            "Horizontally scalable foundation"
          ],
          stack: ["TypeScript", "PostgreSQL", "NodeJS", "Express"],
        },
        {
          title: "Synthetic Data Generation Pipeline",
          status: "Prototype",
          description:
            "Synthetic identity generation pipeline for testing environments integrating unique identifier derivation, credential hashing and symmetric encryption for reversible data.",
          highlights: [
            "Deterministic ID generation (nanoid)",
            "Credential hashing with Argon2",
            "AES-GCM encryption for reversible fields",
            "Seeded generation with faker.js",
            "Testing environment ready datasets"
          ],
          stack: ["TypeScript", 'Preact', 'Tauri'],
        },
      ],
    },

    contact: {
      title: "Let's get in touch",
      subtitle: "Have an opportunity, project, or idea? Send me a message.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        sending: "Opening your email client…",
        required: "Please complete name, email, and subject.",
        invalidEmail: "Please enter a valid email address.",
        successHint: "If your email client didn't open, you can copy the message and send it manually.",
      },
    },
  },
  es: {
    layout: {
      langLabel: "Idioma",
      toggleNav: 'Alternar barra de navegación',
      nav: {
        hero: 'Perfil',
        technologies: 'Tecnologías',
        projects: 'Proyectos',
        contact: 'Contacto',
      }
    },

    hero: {
      name: "Nicolás Barragán",
      tagline: "Desarrollador Fullstack orientado a Backend y Sistemas",
      phrases: [
        "Construyo sistemas con Rust y TypeScript",
        "Mentalidad de arquitectura en microservicios",
        "Contenedorizo servicios con Podman",
        "Apps multiplataforma con Tauri",
        "Modelado de datos con PostgreSQL",
        "Aprendiendo Kubernetes para orquestación",
      ],
      p1: "Estudiante de Lic. en Informática y Lic. en Ciberseguridad. Desarrollo soluciones full-stack con fuerte foco backend: APIs, modelado de datos y servicios escalables.",
      p2: "Con conocimientos en prácticas DevOps/GitOps, contenedores y fundamentos de Linux. Actualmente profundizando Kubernetes y sistemas distribuidos.",
      ctas: {
        projects: "Ver proyectos",
        contact: "Contactarme",
      },
    },

    technologies: {
      title: "Tecnologías",
      languages: {
        title: "Lenguajes",
        items: ["Rust", "TypeScript", "JavaScript"],
      },
      backend: {
        title: "Backend",
        items: [
          "Diseño y desarrollo de APIs REST",
          "Arquitectura basada en microservicios",
          "Modelado de datos",
          "PostgreSQL",
        ],
      },
      frontend: {
        title: "Frontend",
        items: ["Preact", "React", "HTML5", "CSS3"],
      },
      infra: {
        title: "DevOps / Infraestructura",
        items: [
          "Contenedorización con Podman",
          "Principios de GitOps",
          "Linux (sysadmin básico)",
          "Kubernetes (en aprendizaje)",
        ],
      },
      extra: {
        title: "Herramientas y extras",
        items: ["Git", "GitHub", "Postman", "Tauri (apps desktop y mobile)"],
      },
    },

    projects: {
      title: "Proyectos",
      subtitle:
        "Trabajos seleccionados y mini case studies.",
      note: "Algunos proyectos se encuentran en desarrollo o son privados. Puedo mostrar demos o explicar la arquitectura a pedido.",
      cta: {
        requestDemo: "Pedir demo privada",
        contact: "Contacto",
      },
      items: [
        {
          title: "Cliente de Chat para LLMs Locales",
          status: "Privado / En desarrollo",
          description:
            "Cliente multiplataforma para orquestar inferencia local de LLMs mediante una arquitectura extensible orientada a persistencia de sesiones y desacople entre proveedores de inferencia.",
          highlights: [
            "Capa de orquestación para inferencia local",
            "Persistencia de estado conversacional",
            "Arquitectura extensible basada en proveedores",
            "Gestión de contexto y sesiones",
            "Integración desktop multiplataforma"
          ],
          stack: ["Rust", "Tauri", "TypeScript", "Preact"],
        },
        {
          title: "Sistema ERP (Facturación e Inventario Relacional)",
          status: "En desarrollo",
          description:
            "Diseño e implementación de un ERP orientado a consistencia de inventario en tiempo real, capaz de modelar dependencias entre productos mediante estructuras BOM y propagar actualizaciones de stock en forma transaccional a través de múltiples almacenes.",
          highlights: [
            "Grafo de dependencias entre SKUs para stock derivado",
            "Descomposición de inventario vía BOM (recipes)",
            "Actualización transaccional de combos y productos compuestos",
            "Consistencia de stock multi-almacén",
            "Localización física de inventario",
            "Modelo relacional optimizado para propagación de estado"
          ],
          stack: ["PostgreSQL", "Tauri", "TypeScript", "Preact", "Rust", "Actix-web"],
        },
        {
          title: "WebApp E-commerce Modular",
          status: "En reestructuración",
          description:
            "Aplicación e-commerce full-stack con arquitectura backend-first orientada a separación de dominios y despliegue reproducible mediante contenedores.",
          highlights: [
            "Arquitectura modular basada en dominios",
            "API relacional orientada a integridad transaccional",
            "Workflow de desarrollo contenedorizado",
            "Separación de capas aplicación/datos",
            "Preparada para escalabilidad horizontal"
          ],
          stack: ["TypeScript", "PostgreSQL", "NodeJS", "Express"],
        },
        {
          title: "Sistema de Generación de Datos Sintéticos",
          status: "Prototipo",
          description:
            "Pipeline de generación de identidades sintéticas para testing que integra derivación de identificadores únicos, hashing criptográfico de credenciales y cifrado simétrico para datos reversibles.",
          highlights: [
            "Generación determinística de IDs (nanoid)",
            "Hashing de credenciales con Argon2",
            "Cifrado AES-GCM para datos reversibles",
            "Seeded data generation con faker.js",
            "Preparado para entornos de testing"
          ],
          stack: ["TypeScript", 'Preact', 'Tauri'],
        },
      ],
    },

    contact: {
      title: "Contacto",
      subtitle: "¿Tenés una oportunidad, proyecto o idea? Escribime.",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        subject: "Asunto / Propuesta",
        message: "Mensaje",
        send: "Enviar",
        sending: "Abriendo tu cliente de correo…",
        required: "Completá nombre, correo y asunto.",
        invalidEmail: "Ingresá un correo válido.",
        successHint: "Si no se abrió tu cliente de correo, podés copiar el mensaje y enviarlo manualmente.",
      },
    },
  },
} as const;

export function t<L extends Lang, K1 extends keyof typeof MESSAGES[L], K2 extends keyof typeof MESSAGES[L][K1]>(
  lang: L,
  k1: K1,
  k2: K2
) {
  return MESSAGES[lang][k1][k2];
}