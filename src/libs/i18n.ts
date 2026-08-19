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
      tagline: "Junior Backend Developer",
      phrases: [
        "Building reliable REST APIs with Java & Spring Boot",
        "Developing performant backend systems with Rust & Node.js",
        "Relational database design & optimization with PostgreSQL",
        "Containerized applications using Docker",
        "Cross-platform desktop tools with Tauri & React",
        "Continuous integration & deployment pipelines",
      ],
      p1: "Computer Science student specialized in backend development, transactional APIs, and efficient database modeling. Focused on writing clean, scalable, and maintainable code.",
      p2: "Hands-on experience developing RESTful web services, working with relational databases (PostgreSQL, MySQL), and deploying containerized applications with Docker.",
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
        items: ["Java", "TypeScript", "JavaScript", "SQL", "Rust"],
      },
      backend: {
        title: "Backend & Systems",
        items: [
          "Java (Spring Boot / Spring MVC)",
          "Node.js (Express) & Rust (Actix-web)",
          "RESTful APIs & Microservices",
          "Clean Architecture & SOLID Principles",
        ],
      },
      frontend: {
        title: "Frontend & Desktop",
        items: ["React", "Preact", "Tauri", "HTML5 & CSS3"],
      },
      infra: {
        title: "DevOps & Infrastructure",
        items: [
          "Containerization with Docker",
          "GitHub Actions (CI/CD)",
          "PostgreSQL, MySQL & SQLite",
          "Linux Environment & Git Workflow",
        ],
      },
      extra: {
        title: "Tools & Extras",
        items: ["Git & GitHub", "Postman / Bruno", "Maven & Build Tools", "AI-Assisted Development (Copilot, Cursor)"],
      },
    },

    projects: {
      title: "Projects",
      subtitle:
        "Practical applications and deployed software.",
      note: "Live demos, source code, and walk-throughs available upon request.",
      cta: {
        requestDemo: "Request demo",
        contact: "Contact",
      },
      items: [
        {
          title: "Authentication & Authorization Service API",
          status: "Deployed / Live",
          description:
            "RESTful backend service implementing JWT authentication, role-based access control, and secure token management.",
          highlights: [
            "User registration, login, and JWT validation flow",
            "Deployed and running in cloud environment (Railway)",
            "Integration with relational SQL database for user state persistence",
            "Exception handling and clean layered backend architecture"
          ],
          stack: ["Java", "Spring Boot", "Spring Security", "SQL", "Railway"],
        },
        {
          title: "Automotive Service & Vehicle History Manager",
          status: "In progress",
          description:
            "Management platform for mechanics to track clients, vehicle service history, and ongoing repair jobs.",
          highlights: [
            "Relational database design linking clients, vehicles, and work orders",
            "CRUD operations for client records and detailed maintenance logs",
            "Fast query lookup for complete vehicle repair history",
            "Modular architecture designed for straightforward business operation"
          ],
          stack: ["Java", "Spring Boot", "SQL", "REST APIs"],
        },
        {
          title: "Type-Safe Task Management Application",
          status: "Open Source",
          description:
            "Desktop application focused on task organization, user accessibility, and local data persistence.",
          highlights: [
            "Clean UI with keyboard navigation and accessible components",
            "Type-safe communication between frontend interface and backend",
            "Local storage handling for user data",
            "Optimized cross-platform build pipeline"
          ],
          stack: ["TypeScript", "Preact", "Tauri", "Rust", "Tailwind CSS"],
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
              label: 'Repository'
            }
          },
        }
      ],
    },

    contact: {
      title: "Let's get in touch",
      subtitle: "Have a job opportunity or project idea? Feel free to reach out.",
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
      privacyNote: "Messages sent through this form are delivered via FormSubmit (formsubmit.co). Please avoid including sensitive information.",
      deliveryNote: 'If you don\'t receive a reply within a few days, feel free to reach out via LinkedIn.',
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
      tagline: "Desarrollador Backend Junior",
      phrases: [
        "Desarrollo de APIs RESTful con Java y Spring Boot",
        "Sistemas backend eficientes con Rust y Node.js",
        "Diseño y optimización de bases de datos relacionales con PostgreSQL",
        "Contenedorización de aplicaciones con Docker",
        "Herramientas de escritorio multiplataforma con Tauri y React",
        "Integración continua y despliegue de aplicaciones",
      ],
      p1: "Estudiante de Lic. en Informática orientado al desarrollo backend, APIs transaccionales y modelado de bases de datos. Enfocado en escribir código limpio, escalable y mantenible.",
      p2: "Experiencia práctica en el desarrollo de servicios web REST, trabajo con bases de datos relacionales (PostgreSQL, MySQL) y despliegue de aplicaciones en contenedores con Docker.",
      ctas: {
        projects: "Ver proyectos",
        contact: "Contactarme",
      },
    },

    technologies: {
      title: "Tecnologías",
      languages: {
        title: "Lenguajes",
        items: ["Java", "TypeScript", "JavaScript", "SQL", "Rust"],
      },
      backend: {
        title: "Backend y Sistemas",
        items: [
          "Java (Spring Boot / Spring MVC)",
          "Node.js (Express) & Rust (Actix-web)",
          "APIs RESTful y Arquitectura en Capas",
          "Principios SOLID y Buenas Prácticas",
        ],
      },
      frontend: {
        title: "Frontend y Desktop",
        items: ["React", "Preact", "Tauri", "HTML5 & CSS3"],
      },
      infra: {
        title: "DevOps e Infraestructura",
        items: [
          "Contenedorización con Docker",
          "GitHub Actions (Pipelines CI/CD)",
          "PostgreSQL, MySQL y SQLite",
          "Entornos Linux y Control de Versiones (Git)",
        ],
      },
      extra: {
        title: "Herramientas y extras",
        items: ["Git & GitHub", "Postman / Bruno", "Maven", "Desarrollo Asistido con IA (Copilot, Cursor)"],
      },
    },

    projects: {
      title: "Proyectos",
      subtitle:
        "Aplicaciones prácticas y software desplegado.",
      note: "Demos en vivo, código fuente y explicaciones disponibles a pedido.",
      cta: {
        requestDemo: "Pedir demo",
        contact: "Contacto",
      },
      items: [
        {
          title: "API de Servicio de Autenticación y Autorización",
          status: "Desplegado / En vivo",
          description:
            "Servicio backend RESTful que implementa autenticación JWT, control de accesos basado en roles y gestión segura de tokens.",
          highlights: [
            "Flujo completo de registro, inicio de sesión y validación de tokens JWT",
            "Desplegado y en funcionamiento en entorno cloud (Railway)",
            "Integración con base de datos SQL para la persistencia de usuarios",
            "Manejo global de excepciones y arquitectura backend en capas"
          ],
          stack: ["Java", "Spring Boot", "Spring Security", "SQL", "Railway"],
        },
        {
          title: "Sistema de Gestión Mecánica e Historial Vehicular",
          status: "En desarrollo",
          description:
            "Plataforma de gestión para talleres mecánicos orientada al control de clientes, vehículos e historial de servicios realizados.",
          highlights: [
            "Modelado de base de datos relacional vinculando clientes, vehículos y órdenes de trabajo",
            "Operaciones CRUD para registros de clientes y fichas de mantenimiento",
            "Búsqueda rápida de historial completo de reparaciones por vehículo",
            "Arquitectura modular orientada a simplificar la operativa del taller"
          ],
          stack: ["Rust", "Tauri", "SQL", "React", "TypeScript", "Shadcn", "Tailwind CSS"],
        },
        {
          title: "Aplicación de Gestión de Tareas Segura",
          status: "Open Source",
          description:
            "Aplicación de escritorio enfocada en la organización de tareas, accesibilidad de usuario y persistencia local de datos.",
          highlights: [
            "Interfaz limpia con navegación por teclado y componentes accesibles",
            "Comunicación type-safe entre la interfaz y la lógica interna",
            "Gestión de almacenamiento local para los datos del usuario",
            "Pipeline de compilación optimizado para multiplataforma"
          ],
          stack: ["TypeScript", "Preact", "Tauri", "Rust", "Tailwind CSS"],
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
              label: 'Repositorio'
            }
          },
        }
      ],
    },

    contact: {
      title: "Contacto",
      subtitle: "¿Tenés una oportunidad laboral o propuesta? Escribime.",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        subject: "Asunto",
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
      privacyNote: "Los mensajes se envían mediante FormSubmit (formsubmit.co). Evitá incluir información sensible.",
      deliveryNote: "Si no recibís respuesta en unos días, podés contactarme por LinkedIn.",
    },
  },
} as const;
