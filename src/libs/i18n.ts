export const MESSAGES = {
  en: {
    layout: {
      langLabel: "Language",
      openNav: 'Open navigation',
      closeNav: 'Close navigation',
      nav: {
        hero: 'Profile',
        technologies: 'Technologies',
        projects: 'Projects',
        contact: 'Contact',
      }
    },

    hero: {
      name: "Nicolás Barragán",
      tagline: "Backend & Systems-oriented Software Engineer",
      phrases: [
        "Building high-reliability backends with Rust",
        "Event-driven architectures with Apache Kafka",
        "Distributed transactions via Saga Pattern",
        "Cross-platform desktop apps with Tauri",
        "PostgreSQL & SQLCipher for reliable data modeling",
        "Containerized zero-downtime CI/CD pipelines",
      ],
      p1: "Computer Science and Cybersecurity undergraduate specializing in high-reliability backends, transactional APIs, and distributed systems. Focused on data correctness, fault tolerance, and clean architecture.",
      p2: "Proven experience building event-driven systems (Saga Pattern, Kafka), designing optimized relational schemas (PostgreSQL, SQLCipher), and deploying containerized services with Docker and Podman.",
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
        items: ["Rust", "TypeScript", "JavaScript", "SQL"],
      },
      backend: {
        title: "Backend & Systems",
        items: [
          "Actix-web & Node.js / Express",
          "Apache Kafka & Saga Pattern",
          "REST APIs & Microservices",
          "Distributed Transactions & Idempotency",
        ],
      },
      frontend: {
        title: "Frontend & Desktop",
        items: ["React", "Preact", "Tauri", "HTML5 & CSS3"],
      },
      infra: {
        title: "DevOps & Infrastructure",
        items: [
          "Containerization with Docker & Podman",
          "GitHub Actions (CI/CD pipelines)",
          "Nginx & Linux Sysadmin (VPS)",
          "PostgreSQL, MySQL & Valkey/Redis",
        ],
      },
      extra: {
        title: "Tools & Extras",
        items: ["Git & GitHub", "Postman", "Encrypted SQLite (SQLCipher)", "Documentation-First Dev"],
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
          title: "Advenire – International Logistics & Financial Backend",
          status: "Private",
          description:
            "Distributed backend engine designed to process international logistics workflows, multi-currency operations, and complex tax calculations with fault-tolerant transactions.",
          highlights: [
            "Event-driven microservice coordination using Apache Kafka",
            "Long-running transaction management via Saga Pattern",
            "Strict idempotency and recovery logic preventing data inconsistencies",
            "High-throughput REST APIs and ACID-compliant PostgreSQL data modeling"
          ],
          stack: ["Rust", "Actix-web", "Apache Kafka", "PostgreSQL", "Docker", "Saga Pattern"],
        },
        {
          title: "Grovu – Secure Business Management Platform",
          status: "In progress",
          description:
            "Cross-platform desktop application for SMBs integrating appointment scheduling, financial tracking, and encrypted local storage with a cloud-ready migration path.",
          highlights: [
            "Low-resource consumption using Tauri, Rust, and React/Preact",
            "Encrypted local data persistence powered by SQLite and SQLCipher",
            "Decoupled architecture built for seamless local-to-cloud migration",
            "Modular Actix-web backend design applying Clean Architecture"
          ],
          stack: ["Rust", "Tauri", "React", "Actix-web", "SQLCipher", "SQLite"],
        },
        {
          title: "Local LLM Chat Client",
          status: "Private",
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
          title: "Synthetic Data Generation Pipeline",
          status: "Private / Prototype",
          description:
            "Synthetic identity generation pipeline for testing environments integrating unique identifier derivation, cryptographic credential hashing (Argon2), and AES-GCM encryption.",
          highlights: [
            "Deterministic ID generation (nanoid)",
            "Credential hashing with Argon2",
            "AES-GCM encryption for reversible fields",
            "Seeded generation with faker.js",
            "Testing environment ready datasets"
          ],
          stack: ["TypeScript", "Preact", "Tauri", "Rust"],
        },
        {
          title: "Type-Safe Secure Task Management Application",
          status: "Open Source / Showcase",
          description:
            "Full-stack desktop application with enterprise-grade security architecture integrating end-to-end encryption via Stronghold, multi-layer authentication, WCAG-compliant accessible components, and optimized build pipeline with Vite. Demonstrates advanced state patterns using Context API and type-safe IPC communication between Preact frontend and Rust backend.",
          highlights: [
            "End-to-end encryption with Stronghold (IOTA protocol)",
            "Type-safe IPC between Preact and Tauri",
            "Multi-layer Context API for scalable state management",
            "Accessible components with ARIA labels & full keyboard navigation",
            "Preact with HMR (3KB bundle vs 42KB React)",
            "Internationalization (i18n) with multi-language support",
            "Incremental build system with TypeScript + Vite (~2s dev, ~5s prod)"
          ],
          stack: ["TypeScript", "Preact", "Tauri", "Rust", "Tailwind CSS", "Stronghold"],
          links: {
            windows: {
              href: '/Todo.App_1.1.2_x64-setup.exe',
              label: 'Download for Windows',
            },
            deb: {
              href: '/Todo.App_1.1.2_amd64.deb',
              label: 'Download for Linux',
            },
            repo: {
              href: 'https://github.com/Nicobgn/todo-app',
              label: 'Repository (Private)'
            }
          },
        }
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
        sending: "Sending...",
        required: "Please complete name, email, and subject.",
        invalidEmail: "Please enter a valid email address.",
        successHint: "If your email client didn't open, you can copy the message and send it manually.",
      },
      feedback: {
        success: "Message sent! Thanks for reaching out.",
        error: "There was an error sending your message. Please try again later.",
        validation: {
          required: "Please complete all fields",
          tooFast: "It looks like you're sending messages too quickly. Please wait a moment before trying again.",
          honeypot: "There was an issue with the form submission. Please try again.",
        }
      },
      privacyNote: "Messages sent through this form are delivered via the third-party service FormSubmit (formsubmit.co). Please avoid including sensitive information.",
      deliveryNote: 'Some messages may be filtered as spam. If you don\'t receive a reply within a few days, feel free to try again or reach out via LinkedIn or GitHub.',
    },
  },
  es: {
    layout: {
      langLabel: "Idioma",
      openNav: 'Abrir navegación',
      closeNav: 'Cerrar navegación',
      nav: {
        hero: 'Perfil',
        technologies: 'Tecnologías',
        projects: 'Proyectos',
        contact: 'Contacto',
      }
    },

    hero: {
      name: "Nicolás Barragán",
      tagline: "Desarrollador Software orientado a Backend y Sistemas",
      phrases: [
        "Construyo backend de alta confiabilidad con Rust",
        "Arquitecturas orientadas a eventos con Apache Kafka",
        "Transacciones distribuidas con Saga Pattern",
        "Apps de escritorio multiplataforma con Tauri",
        "Modelado con PostgreSQL y SQLCipher",
        "Pipelines CI/CD y despliegues en contenedores",
      ],
      p1: "Estudiante de Lic. en Informática y Lic. en Ciberseguridad. Desarrollo soluciones backend de alta confiabilidad con fuerte foco en APIs transaccionales, modelado de datos y sistemas distribuidos.",
      p2: "Con experiencia comprobada en sistemas orientados a eventos (Saga Pattern, Kafka), esquemas relacionales optimizados (PostgreSQL, SQLCipher) y despliegue de servicios contenedorizados con Docker y Podman.",
      ctas: {
        projects: "Ver proyectos",
        contact: "Contactarme",
      },
    },

    technologies: {
      title: "Tecnologías",
      languages: {
        title: "Lenguajes",
        items: ["Rust", "TypeScript", "JavaScript", "SQL"],
      },
      backend: {
        title: "Backend y Sistemas",
        items: [
          "Actix-web & Node.js / Express",
          "Apache Kafka & Saga Pattern",
          "Diseño y desarrollo de APIs REST",
          "Transacciones distribuidas e Idempotencia",
        ],
      },
      frontend: {
        title: "Frontend y Desktop",
        items: ["React", "Preact", "Tauri", "HTML5 & CSS3"],
      },
      infra: {
        title: "DevOps e Infraestructura",
        items: [
          "Contenedorización con Docker & Podman",
          "GitHub Actions (Pipelines CI/CD)",
          "Nginx & Administración Linux (VPS)",
          "PostgreSQL, MySQL & Valkey/Redis",
        ],
      },
      extra: {
        title: "Herramientas y extras",
        items: ["Git & GitHub", "Postman", "SQLite cifrado (SQLCipher)", "Desarrollo orientado a documentación"],
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
          title: "Advenire – Backend Financiero y Logístico Internacional",
          status: "Private",
          description:
            "Motor backend distribuido diseñado para procesar flujos de logística internacional, operaciones multimoneda y regulaciones impositivas complejas bajo transacciones tolerantes a fallos.",
          highlights: [
            "Coordinación asíncrona de microservicios usando Apache Kafka",
            "Gestión de transacciones de larga duración mediante Saga Pattern",
            "Lógica estricta de idempotencia para prevenir inconsistencias de datos",
            "APIs REST de alto rendimiento y modelado PostgreSQL con cumplimiento ACID"
          ],
          stack: ["Rust", "Actix-web", "Apache Kafka", "PostgreSQL", "Docker", "Saga Pattern"],
        },
        {
          title: "Grovu – Plataforma de Gestión Empresarial Segura",
          status: "En desarrollo",
          description:
            "Aplicación de escritorio multiplataforma para PyMEs que integra agenda, control financiero y almacenamiento local cifrado con ruta de migración a la nube.",
          highlights: [
            "Bajo consumo de recursos mediante la integración Tauri, Rust y React/Preact",
            "Persistencia local segura usando SQLite cifrado con SQLCipher",
            "Arquitectura desacoplada lista para migración transparente hacia la nube",
            "Diseño backend modular con Actix-web aplicando Clean Architecture"
          ],
          stack: ["Rust", "Tauri", "React", "Actix-web", "SQLCipher", "SQLite"],
        },
        {
          title: "Cliente de Chat para LLMs Locales",
          status: "Privado",
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
          title: "Sistema de Generación de Datos Sintéticos",
          status: "Privado / Prototipo",
          description:
            "Pipeline de generación de identidades sintéticas para testing que integra derivación de identificadores únicos, hashing criptográfico de credenciales (Argon2) y cifrado AES-GCM.",
          highlights: [
            "Generación determinística de IDs (nanoid)",
            "Hashing de credenciales con Argon2",
            "Cifrado AES-GCM para datos reversibles",
            "Seeded data generation con faker.js",
            "Preparado para entornos de testing"
          ],
          stack: ["TypeScript", "Preact", "Tauri", "Rust"],
        },
        {
          title: "Aplicación de Tareas Type-Safe",
          status: "Privado / Showcase",
          description:
            "Aplicación de escritorio full-stack con arquitectura segura que integra encriptación end-to-end mediante Stronghold, autenticación multinivel, componentes accesibles (WCAG) y un pipeline de construcción optimizado con Vite. Demuestra patrones de estado avanzados con Context API y comunicación IPC TypeScript-safe entre frontend Preact y backend Rust.",
          highlights: [
            "Encriptación end-to-end con Stronghold (protocolo IOTA)",
            "Type-safe IPC entre Preact y Tauri",
            "Context API multi-capa para state management escalable",
            "Componentes accesibles con ARIA labels & keyboard navigation",
            "Preact con HMR (3KB bundle vs 42KB de React)",
            "Internacionalización (i18n) con soporte multiidioma",
            "Build system incremental con TypeScript + Vite (~2s dev, ~5s prod)"
          ],
          stack: ["TypeScript", "Preact", "Tauri", "Rust", "Tailwind CSS", "Stronghold"],
          links: {
            windows: {
              href: '/Todo.App_1.1.2_x64-setup.exe',
              label: 'Descarga para Windows',
            },
            deb: {
              href: '/Todo.App_1.1.2_amd64.deb',
              label: 'Descarga para Linux',
            },
            repo: {
              href: 'https://github.com/Nicobgn/todo-app',
              label: 'Repositorio (Privado)'
            }
          },
        }
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
        sending: "Enviando...",
        required: "Completá nombre, correo y asunto.",
        invalidEmail: "Ingresá un correo válido.",
        successHint: "Si no se abrió tu cliente de correo, podés copiar el mensaje y enviarlo manualmente.",
      },
      feedback: {
        success: "¡Mensaje enviado! Gracias por contactarme.",
        error: "Hubo un error al enviar tu mensaje. Por favor, intentá nuevamente más tarde.",
        validation: {
          required: "Por favor completa todos los campos",
          tooFast: "Parece que estás enviando mensajes muy rápido. Por favor, espera un momento antes de intentar de nuevo.",
          honeypot: "Hubo un error con el formulario. Por favor, intentá nuevamente.",
        }
      },
      privacyNote: "Los mensajes enviados a través de este formulario se entregan mediante el servicio externo FormSubmit (formsubmit.co). Por favor, evitá incluir información sensible.",
      deliveryNote: "Algunos mensajes pueden ser filtrados como spam. Si no recibís respuesta en unos días, podés intentar nuevamente o contactarme por LinkedIn o GitHub.",
    },
  },
} as const;