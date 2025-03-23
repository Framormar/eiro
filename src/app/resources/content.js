import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "NERVA",
  lastName: "SECURITY",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Empresa Especialista en Ciberseguridad",
  avatar: "/images/avatar.jpg",
  location: "Europe/Madrid", // IANA time zone identifier, puedes ajustarlo si lo deseas, ej: 'Europe/Madrid'
  languages: ["Español"], // Se puede modificar o agregar otros idiomas si es necesario
};

const newsletter = {
  display: true,
  title: <>Suscríbete al Newsletter de {person.firstName}</>,
  description: (
    <>
      Recibe actualizaciones ocasionales sobre cursos, talleres y novedades en el ámbito de la
      ciberseguridad que ofrecemos en NERVA LDPTS.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Framormar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/victor-bazaga-velasco-48284b313/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contacto@NERVA-ldpts.com",
  },
];

const home = {
  label: "Inicio",
  title: `${person.name}`,
  description: `Sitio web de ${person.role} demostrando nuestros servicios y paquetes de formación.`,
  headline: <>Ciberseguridad y Formación</>,
  subline: (
    <>
      Bienvenido a <InlineCode>NERVA LDPTS</InlineCode>, una empresa dedicada a la enseñanza y
      consultoría en ciberseguridad. Ofrecemos paquetes de capacitación para diferentes audiencias:
      alumnos de colegios, trabajadores de PyMEs, responsables de TI y más.
    </>
  ),
};

const about = {
  label: "Acerca de",
  title: "Sobre nosotros",
  description: `Conoce a ${person.name}, ${person.role} con sede en ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendario.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        NERVA LDPTS es una empresa enfocada en la enseñanza de ciberseguridad y la protección de
        datos, proporcionando soluciones formativas a organizaciones, instituciones educativas y
        profesionales que buscan adquirir o reforzar sus conocimientos en seguridad digital. Nuestro
        equipo cuenta con amplia experiencia en la prevención de amenazas, protección de la
        información y auditorías de seguridad.
      </>
    ),
  },
  work: {
    display: true,
    title: "Nuestros Paquetes de Capacitación",
    experiences: [
      {
        company: "Conciencia básica de ciberseguridad (Alumnos de colegios)",
        timeframe: "Programa corto",
        role: "Paquete 1",
        achievements: [
          <>
            - Temas: Introducción a la seguridad en internet, uso seguro de redes sociales,
            reconocimiento de amenazas básicas (phishing, malware, ciberacoso) y protección de
            datos personales.
          </>,
          <>
            - Modalidades de pago:
            <ul>
              <li>Pago por persona</li>
              <li>Pago por hora</li>
              <li>Pago por sesión</li>
            </ul>
          </>,
        ],
        images: [],
      },
      {
        company: "Ciberseguridad esencial para trabajadores de PyMEs",
        timeframe: "Programa intermedio",
        role: "Paquete 2",
        achievements: [
          <>
            - Temas: Contraseñas seguras, autenticación multifactor, reconocimiento de amenazas,
            buenas prácticas en uso de redes WiFi y protección de información confidencial.
          </>,
          <>
            - Modalidades de pago:
            <ul>
              <li>Pago por persona</li>
              <li>Pago por hora</li>
              <li>Pago por sesión</li>
            </ul>
          </>,
        ],
        images: [],
      },
      {
        company: "Curso avanzado de Ciberseguridad para responsables de TI (PyMEs)",
        timeframe: "Programa intensivo",
        role: "Paquete 3",
        achievements: [
          <>
            - Temas: Detección, análisis y respuesta a incidentes, configuración segura de redes,
            cifrado avanzado, auditorías de seguridad y pruebas de penetración.
          </>,
          <>
            - Modalidades de pago:
            <ul>
              <li>Pago por persona</li>
              <li>Pago por hora</li>
              <li>Pago por sesión</li>
            </ul>
          </>,
        ],
        images: [],
      },
      {
        company: "Ideas Complementarias",
        timeframe: "Opciones adicionales",
        role: "Cursos y Talleres Adicionales",
        achievements: [
          <>
            - Seguridad en dispositivos móviles
          </>,
          <>
            - Formación para padres y educadores
          </>,
          <>
            - Cursos de ciberseguridad para directivos
          </>,
          <>
            - Taller de respuesta a incidentes y crisis cibernéticas
          </>,
          <>
            - Programa de actualización continua en ciberseguridad
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Certificaciones y Trayectoria",
    institutions: [
      {
        name: "Certificaciones Internacionales",
        description: <>Contamos con personal certificado en CEH, CISSP y CompTIA Security+.</>,
      },
      {
        name: "Experiencia en múltiples sectores",
        description: <>Hemos colaborado con instituciones educativas y empresas de diferentes rubros.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Competencias Técnicas",
    skills: [
      {
        title: "Pentesting",
        description: <>Realizamos pruebas de penetración para identificar vulnerabilidades.</>,
        images: [],
      },
      {
        title: "Gestión de incidentes",
        description: <>Diseño de planes de contingencia y respuesta a ciberataques.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Artículos sobre Ciberseguridad",
  description: `Lee las últimas novedades y consejos de ${person.name} para reforzar tu seguridad digital.`,
};

const work = {
  label: "Servicios",
  title: "Asesorías y Proyectos",
  description: `Conoce los proyectos y colaboraciones que ${person.name} ha realizado para implementar soluciones de seguridad.`,
};

const gallery = {
  label: "Galería",
  title: "Galería de imágenes",
  description: `Colección de fotos y recursos visuales de ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
