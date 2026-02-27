export type Lang = "en" | "es";

export const DEFAULT_LANG: Lang = "en";

export const MESSAGES = {
  en: {
    layout: {
      langLabel: "Language",
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
        "Selected work and case studies. Some projects are private or currently being rebuilt.",
      note: "Some projects are in progress or private. Demos and code walkthroughs available on request.",
      cta: {
        requestDemo: "Request a private demo",
        contact: "Contact",
      },
      items: [
        {
          title: "Ollama Chat Client",
          status: "Private / In progress",
          description:
            "A cross-platform chat client to interact with locally running LLMs via Ollama, focused on a clean UX and extensible integrations.",
          highlights: [
            "API integration with local inference runtime",
            "Conversation/session management",
            "Cross-platform app architecture",
          ],
          stack: ["Rust", "Tauri", "TypeScript", "Preact"],
        },
        {
          title: "Database Modeling (ERD)",
          status: "In progress",
          description:
            "Entity-relationship modeling for a data-driven system, prioritizing normalization, constraints, and maintainability.",
          highlights: [
            "Relational modeling & normalization",
            "Integrity constraints and schema design",
            "PostgreSQL-focused approach",
          ],
          stack: ["PostgreSQL", 'Tauri', 'TypeScript', 'Preact', 'Rust', 'Actix-web'],
        },
        {
          title: "Mock Info App (Prototype)",
          status: "Prototype",
          description:
            "A mock application to explore information architecture, UI flows, and data representation for future implementation.",
          highlights: [
            "UX flow exploration",
            "Data presentation structure",
            "Prepared for incremental implementation",
          ],
          stack: ["TypeScript", "Preact", 'Tauri', 'Rust'],
        },
        {
          title: "Cards Store E-commerce (Academic - Team)",
          status: "Private / Academic",
          description:
            "Team project: a fictional e-commerce platform for a trading cards store, built with modular structure and containerized services.",
          highlights: [
            "Collaboration and modular design",
            "Backend-first approach",
            "Containerized development workflow",
          ],
          stack: ["JavaScript", "PostgreSQL"],
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
        "Trabajos seleccionados y mini case studies. Algunos proyectos son privados o están en reconstrucción.",
      note: "Algunos proyectos se encuentran en desarrollo o son privados. Puedo mostrar demos o explicar la arquitectura a pedido.",
      cta: {
        requestDemo: "Pedir demo privada",
        contact: "Contacto",
      },
      items: [
        {
          title: "Cliente de Chat para Ollama",
          status: "Privado / En progreso",
          description:
            "Cliente multiplataforma para interactuar con LLMs locales vía Ollama, con foco en UX limpia e integraciones extensibles.",
          highlights: [
            "Integración con API de inferencia local",
            "Gestión de conversaciones/sesiones",
            "Arquitectura de app multiplataforma",
          ],
          stack: ["Rust", "Tauri", "TypeScript", "Preact"],
        },
        {
          title: "Modelado de Base de Datos (ERD)",
          status: "En progreso",
          description:
            "Modelado entidad-relación para un sistema basado en datos, priorizando normalización, constraints y mantenibilidad.",
          highlights: [
            "Modelado relacional y normalización",
            "Constraints e integridad referencial",
            "Enfoque orientado a PostgreSQL",
          ],
          stack: ["PostgreSQL", 'Tauri', 'TypeScript', 'Preact', 'Actix-web'],
        },
        {
          title: "App de Información (Mockup)",
          status: "Prototipo",
          description:
            "Aplicación mock para explorar arquitectura de información, flujos de UI y representación de datos para una futura implementación.",
          highlights: [
            "Exploración de flujos UX",
            "Estructura de presentación de datos",
            "Preparada para implementación incremental",
          ],
          stack: ["TypeScript", "Preact"],
        },
        {
          title: "E-commerce de Tienda de Cartas (Académico - Equipo)",
          status: "Privado / Académico",
          description:
            "Proyecto en equipo: plataforma e-commerce ficticia para una tienda de cartas, con estructura modular y workflow con contenedores.",
          highlights: [
            "Trabajo colaborativo y diseño modular",
            "Enfoque backend-first",
            "Entorno de desarrollo contenedorizado",
          ],
          stack: ["TypeScript", "PostgreSQL", "Podman"],
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