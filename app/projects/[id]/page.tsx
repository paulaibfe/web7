"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { MediaCarousel } from "@/components/media-carousel"
import { useLanguage } from "@/contexts/language-context"

interface ProjectLink {
  text: string
  url: string
}

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useLanguage()

  // Estructura organizada de proyectos con carpetas de medios y links opcionales
  const projects = {
    // Eventos
    "fallen-equinox": {
      title: "Fallen Equinox",
      description: "Experiencia inmersiva que combina arte digital y sonido para crear un ambiente único.",
      technologies: ["Sonido", "Instalación", "Arte Digital"],
      category: "eventos",
      media: [
        {
          type: "image" as const,
          src: "/projects/fallen-equinox/ambiente-nocturno.jpg",
          alt: "Fallen Equinox - Ambiente nocturno",
          caption: "Ambiente nocturno del evento Fallen Equinox",
        },
        {
          type: "video" as const,
          src: "/projects/fallen-equinox/video-promocional.mp4",
          caption: "Video promocional del evento",
        },
        {
          type: "image" as const,
          src: "/projects/fallen-equinox/performance-vivo.jpg",
          alt: "Performance en vivo",
          caption: "Performance en vivo durante el evento",
        },
        {
          type: "image" as const,
          src: "/projects/fallen-equinox/setup-tecnico.jpg",
          alt: "Setup técnico",
          caption: "Configuración técnica del evento",
        },
      ],
      links: [
        {
          text: "Named Collective - Colección Oficial",
          url: "https://namedcollective.com/collection",
        },
        {
          text: "Galería de fotos del evento",
          url: "https://instagram.com/fallen_equinox_event",
        },
      ],
      longDescription:
        "Fallen Equinox es una experiencia nocturna diseñada para el lanzamiento de colección de Named Collective, donde la moda se convierte en ritual y el entorno en símbolo. Enmarcado en un espacio natural, el evento fusiona performance, cena ceremonial, shooting y activaciones sensoriales como tarot, tatuajes o confesionario.\n\nCon una estética que combina lo gótico moderno, la melancolía urbana y el imaginario del renacimiento, el encuentro celebra la identidad fluida, la comunidad y la creación de contenido como forma de relato.",
    },
    "sonidos-de-origen": {
      title: "Sonidos de Origen",
      description: "Exploración sonora que investiga las raíces culturales a través de paisajes auditivos.",
      technologies: ["Audio", "Cultura", "Instalación"],
      category: "eventos",
      media: [
        {
          type: "image" as const,
          src: "/projects/sonidos-de-origen/festival-overview.jpg",
          alt: "Vista general del festival",
          caption: "Vista general del festival Sonidos de Origen",
        },
        {
          type: "video" as const,
          src: "/projects/sonidos-de-origen/artistas-colaboracion.mp4",
          caption: "Colaboración entre artistas emergentes y consagrados",
        },
        {
          type: "image" as const,
          src: "/projects/sonidos-de-origen/jardin-botanico.jpg",
          alt: "Real Jardín Botánico Alfonso XIII",
          caption: "Escenario en el Real Jardín Botánico Alfonso XIII",
        },
      ],
      links: [
        {
          text: "Real Jardín Botánico Alfonso XIII",
          url: "https://www.rjb.csic.es/",
        },
        {
          text: "Programa completo del festival",
          url: "https://sonidesdeorigen.es/programa",
        },
      ],
      longDescription:
        "Sonidos de Origen es un festival que nace para transformar la escena musical española conectando artistas emergentes con figuras consagradas en un formato de curaduría invertida. Celebrado en su primera edición en el Real Jardín Botánico Alfonso XIII (Madrid, mayo 2025), propone un encuentro intergeneracional y sonoro donde la tradición no se revive: se reinventa.\n\nA través de fusiones inéditas entre músicas de raíz y lenguajes contemporáneos —como la electrónica, el pop o el rap— el festival se posiciona como una plataforma viva para una nueva generación cultural. Su propuesta se aleja del modelo de festival jerárquico para poner el poder creativo en manos de los propios artistas.",
    },
    "rastro-vol-2": {
      title: "Rastro Vol.2",
      description: "Festival urbano que celebra la cultura local a través de intervenciones artísticas efímeras.",
      technologies: ["Festival", "Arte Urbano", "Comunidad"],
      category: "eventos",
      media: [
        {
          type: "image" as const,
          src: "/projects/rastro-vol-2/festival-urbano.jpg",
          alt: "Festival urbano",
          caption: "Vista del festival Rastro Vol.2 en el centro de Madrid",
        },
        {
          type: "image" as const,
          src: "/projects/rastro-vol-2/stands-marcas.jpg",
          alt: "Stands de marcas",
          caption: "Stands de marcas independientes",
        },
        {
          type: "video" as const,
          src: "/projects/rastro-vol-2/talleres-customizacion.mp4",
          caption: "Talleres de customización en vivo",
        },
      ],
      // Este proyecto no tiene links - ejemplo de proyecto sin links
      longDescription:
        "Rastro Vol.2 es un evento diseñado para poner en valor los accesorios dentro del panorama de la moda urbana. Concebido como un espacio de encuentro entre marcas independientes, público joven y cultura local, el festival convierte el centro de Madrid en un mercado especializado, abierto y accesible.\n\nDurante dos días, el público puede recorrer una selección de stands, asistir a talleres de customización, participar en dinámicas performativas como el regateo y disfrutar de gastronomía y música en directo. Todo ello en un entorno cuidado, donde la identidad visual y espacial están pensadas para reforzar la experiencia de marca y fomentar la interacción.\n\nEl proyecto se construye desde una mirada contemporánea, pero con referencias claras a la tradición madrileña. No solo celebra el objeto —la gorra, el pañuelo, el pendiente— sino todo lo que representa: expresión personal, pertenencia y estilo.",
    },
    "ecos-de-la-tierra": {
      title: "Ecos de la Tierra",
      description: "Instalación interactiva que explora la conexión entre la naturaleza y la tecnología.",
      technologies: ["Sensores", "Ecología", "Sonido"],
      category: "interactivo",
      media: [
        {
          type: "image" as const,
          src: "/projects/ecos-de-la-tierra/instalacion-general.jpg",
          alt: "Instalación interactiva",
          caption: "Vista general de la instalación interactiva",
        },
        {
          type: "video" as const,
          src: "/projects/ecos-de-la-tierra/interaccion-sensores.mp4",
          caption: "Demostración de la interacción con sensores",
        },
        {
          type: "image" as const,
          src: "/projects/ecos-de-la-tierra/detalle-sensores.jpg",
          alt: "Detalle de sensores",
          caption: "Detalle del sistema de sensores ecológicos",
        },
        {
          type: "image" as const,
          src: "/projects/ecos-de-la-tierra/evolucion-ecosistema.jpg",
          alt: "Evolución del ecosistema",
          caption: "Representación visual de la evolución del ecosistema",
        },
      ],
      longDescription:
        "Esta idea explora la evolución del ecosistema desde un mundo dominado por la naturaleza hasta uno transformado por la presencia humana, y finalmente, el retorno de la naturaleza tras la hipotética desaparición de la humanidad.\n\nEste ciclo de vida ilustra la fragilidad y la resiliencia de los ecosistemas. Subraya la responsabilidad humana en el cuidado del medio ambiente y cómo nuestras acciones pueden tener consecuencias duraderas.\n\nTambién destaca la capacidad de la naturaleza para recuperarse y regenerarse, ofreciendo una reflexión sobre la sostenibilidad y la coexistencia armoniosa.",
    },
    "falla-tio-pep": {
      title: "Falla Tio Pep",
      description: "Instalación interactiva para las Fallas de Valencia que combina tradición y tecnología.",
      technologies: ["Mapping", "Tradición", "Interacción"],
      category: "interactivo",
      media: [
        {
          type: "image" as const,
          src: "/projects/falla-tio-pep/falla-iluminada.jpg",
          alt: "Falla iluminada",
          caption: "La Falla Tio Pep iluminada con el sistema de mapping",
        },
        {
          type: "video" as const,
          src: "/projects/falla-tio-pep/secuencia-luces.mp4",
          caption: "Secuencia completa de luces sincronizada con poemas",
        },
        {
          type: "image" as const,
          src: "/projects/falla-tio-pep/sistema-tecnico.jpg",
          alt: "Sistema técnico",
          caption: "Configuración técnica del sistema DMX y Artnet",
        },
        {
          type: "image" as const,
          src: "/projects/falla-tio-pep/realidad-aumentada.jpg",
          alt: "Realidad aumentada",
          caption: "Experiencia de realidad aumentada con historia de Valencia",
        },
        {
          type: "image" as const,
          src: "/projects/falla-tio-pep/premio-experimental.jpg",
          alt: "Premio experimental",
          caption: "Tercer premio de Fallas experimentales",
        },
      ],
      links: [
        {
          text: "Obra de Vicent Andrés Estellés",
          url: "https://www.vicentandresestelles.cat/",
        },
        {
          text: "TouchDesigner - Herramienta utilizada",
          url: "https://derivative.ca/",
        },
        {
          text: "Virginia Lorente - Diseñadora",
          url: "https://virginialorente.com/",
        },
      ],
      longDescription:
        'Diseñamos una secuencia de luces inspirada en los poemas del poeta valenciano Vicent Andrés Estellés, que se proyectaban sobre las figuras de la Falla, utilizando PAR LEDs conectados con DMX y protocolo Artnet, en sincronía con los poemas del poeta. Con la ayuda de TouchDesigner, logramos crear un sistema autosuficiente que encendía y apagaba automáticamente la instalación, garantizando su funcionamiento sin problemas durante todo el evento.\n\nY no nos detuvimos ahí. También llevamos la experiencia a la realidad aumentada, agregando imágenes que representaban la historia de la Falla, la Plaza de la Reina y Valencia en la época de Estellés.\n\nY para nuestra alegría, la Falla Tio Pep, diseñada por Virginia Lorente y creada por el artista Ricardo Alcaide, recibió el tercer premio de Fallas experimentales. Fue un verdadero honor haber sido parte de este proyecto y trabajar junto a verdaderos profesionales.\n\nVirginia Lorente: "Las Fallas son una oportunidad increíble para incorporar todos los ámbitos del diseño."\n\nA través de las luces y el sonido, las personas que visiten el monumento podrán escuchar los versos, "y sentir el latido de ese abrazo".',
    },
    "deep-end-skatepark": {
      title: "Deep End Skatepark",
      description: "Diseño de interiores para un skatepark urbano que fusiona funcionalidad y estética contemporánea.",
      technologies: ["Diseño Urbano", "Arquitectura", "Deporte"],
      category: "interiores",
      media: [
        {
          type: "image" as const,
          src: "/projects/deep-end-skatepark/vista-general.jpg",
          alt: "Vista general del skatepark",
          caption: "Vista general del Deep End Skatepark",
        },
        {
          type: "video" as const,
          src: "/projects/deep-end-skatepark/recorrido-virtual.mp4",
          caption: "Recorrido virtual por las instalaciones",
        },
        {
          type: "image" as const,
          src: "/projects/deep-end-skatepark/zona-social.jpg",
          alt: "Zona social",
          caption: "Área social y de descanso",
        },
        {
          type: "image" as const,
          src: "/projects/deep-end-skatepark/iluminacion.jpg",
          alt: "Sistema de iluminación",
          caption: "Sistema de iluminación especializado",
        },
      ],
      longDescription:
        "Deep End Skatepark es un proyecto de diseño interior que transforma un antiguo espacio industrial en un centro dinámico para la cultura del skateboarding. El diseño respeta y realza las características arquitectónicas originales del edificio, incorporando elementos de diseño inspirados en la estética urbana y la cultura skate. Más allá de las rampas y obstáculos técnicamente optimizados, el espacio integra áreas sociales, expositivas y educativas, creando un hub cultural completo. La iluminación, acústica y materiales han sido cuidadosamente seleccionados para crear un ambiente que es tanto funcional para la práctica deportiva como visualmente impactante.",
    },
    formentera: {
      title: "Formentera",
      description:
        "Diseño de interiores para una residencia en Formentera que integra la esencia mediterránea con un enfoque contemporáneo.",
      technologies: ["Residencial", "Mediterráneo", "Sostenibilidad"],
      category: "interiores",
      media: [
        {
          type: "image" as const,
          src: "/projects/formentera/residencia-mediterranea.jpg",
          alt: "Residencia mediterránea",
          caption: "Vista exterior de la residencia en Formentera",
        },
        {
          type: "image" as const,
          src: "/projects/formentera/interior-salon.jpg",
          alt: "Interior del salón",
          caption: "Salón principal con vistas al mar",
        },
        {
          type: "image" as const,
          src: "/projects/formentera/terraza-exterior.jpg",
          alt: "Terraza exterior",
          caption: "Terraza con mobiliario mediterráneo",
        },
      ],
      // Proyecto solo con imágenes, sin videos
      longDescription:
        "Formentera es un proyecto de diseño interior residencial que captura la esencia de la isla balear homónima. El diseño se inspira en la simplicidad de la arquitectura tradicional mediterránea, utilizando una paleta de colores que refleja el paisaje natural de la isla: blancos cálidos, azules profundos y tonos terrosos. Los materiales naturales y locales como la madera recuperada, la piedra caliza y los textiles artesanales dominan el espacio, creando una sensación de autenticidad y conexión con el entorno. La distribución espacial maximiza la luz natural y las vistas al exterior, difuminando los límites entre el interior y el paisaje circundante.",
    },
    "bailar-en-el-desierto": {
      title: "Bailar en el desierto",
      description:
        "Experiencia de realidad virtual que transporta a los usuarios a un desierto donde el movimiento se traduce en expresiones visuales y sonoras.",
      technologies: ["VR", "Danza", "Arte Digital"],
      category: "ia-ra-vr",
      media: [
        {
          type: "video" as const,
          src: "/projects/bailar-en-el-desierto/experiencia-vr.mp4",
          caption: "Demostración de la experiencia de realidad virtual",
        },
        {
          type: "image" as const,
          src: "/projects/bailar-en-el-desierto/paisaje-desierto.jpg",
          alt: "Paisaje del desierto virtual",
          caption: "Paisaje del desierto virtual generado",
        },
      ],
      links: [
        {
          text: "Tecnología de captura de movimiento",
          url: "https://www.mocap-systems.com/",
        },
      ],
      // Proyecto con menos medios - solo 1 video y 1 imagen
      longDescription:
        "Bailar en el desierto es una experiencia de realidad virtual que invita a los participantes a explorar la expresión corporal en un paisaje desértico virtual. Utilizando tecnología de captura de movimiento, la experiencia traduce los gestos y movimientos del usuario en elementos visuales y sonoros que transforman el entorno virtual. El desierto, inicialmente minimalista y estático, cobra vida con cada movimiento, generando dunas ondulantes, tormentas de arena rítmicas y fenómenos atmosféricos que responden a la intensidad y fluidez de la danza. La experiencia explora la relación entre el cuerpo, el espacio y la transformación digital del movimiento.",
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> {t("backToProjects")}
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">detalles_proyecto.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">{">"}</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">{t("title")}:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">{t("category")}:</span> {t(project.category)}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">{t("technologies")}:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Media Carousel */}
      {project.media && <MediaCarousel media={project.media} className="mb-8" />}

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">{t("projectDescription")}</h2>
        <div className="text-muted-foreground whitespace-pre-line mb-6">{project.longDescription}</div>

        {/* Links Section - Only show if project has links */}
        {project.links && project.links.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Enlaces Relacionados</h3>
            <div className="space-y-3">
              {project.links.map((link: ProjectLink, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-secondary/50 hover:bg-secondary/80 rounded-md transition-colors group"
                >
                  <ExternalLink size={16} className="text-primary group-hover:text-primary/80" />
                  <span className="text-white group-hover:text-primary/90">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
