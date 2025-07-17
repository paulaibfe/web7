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
      description: "Lanzamiento de colección de la marca Named Collective.",
      technologies: ["IA", "Dirección Arte", "Escenografia"],
      category: "eventos",
      media: [
        {
          type: "image" as const,
          src: "/fallen-equinox/images/1.png",
          alt: "Imagen IA",
          caption: "Escenografia (Imagen generada con IA)",
        },
        {
          type: "image" as const,
          src: "/fallen-equinox/images/2.png",
          alt: "Colección",
          caption: "Presentación colección chandal",
        },
        {
          type: "image" as const,
          src: "/fallen-equinox/images/3.png",
          alt: "Moodboard",
          caption: "MoodBoard",
        },
        {
          type: "image" as const,
          src: "/fallen-equinox/images/4.png",
          alt: "Planimetria",
          caption: "Planimetria",
        },
        {
          type: "image" as const,
          src: "/fallen-equinox/images/5.png",
          alt: "Invitados",
          caption: "Ejemplo invitados",
        },
        {
          type: "image" as const,
          src: "/fallen-equinox/images/6.png",
          alt: "Catering",
          caption: "Concepto Catering cena",
        },
        {
          type: "image" as const,
          src: "/fallen-equinox/images/7.png",
          alt: "Curación-musical",
          caption: "Curación musical del evento",
        },
        {
          type: "image" as const,
          src: "/fallen-equinox/images/8.png",
          alt: "Seeding-pack",
          caption: "Seeding pack",
        },
      ],
      links: [
        {
          text: "Enlace a la presentación completa",
          url: "https://www.canva.com/design/DAGjUptrQ-k/iRR-yicQu-evhegHzplPdQ/view?utm_content=DAGjUptrQ-k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9916e4fde7",
        },
        {
          text: "Web de la marca",
          url: "https://namedcollective.com/?srsltid=AfmBOoplbe4_z1PioPOHqpfpsQAKNMZMFshF2mCkF3e1ogu39Arg9yJC",
        },
      ],
      longDescription:
        "Fallen Equinox es una experiencia nocturna diseñada para el lanzamiento de colección de Named Collective, donde la moda se convierte en ritual y el entorno en símbolo. Enmarcado en un espacio natural, el evento fusiona performance, cena ceremonial, shooting y activaciones sensoriales como tarot, tatuajes o confesionario. Con una estética que combina lo gótico moderno, la melancolía urbana y el imaginario del renacimiento, el encuentro celebra la identidad fluida, la comunidad y la creación de contenido como forma de relato.",
    },
    "sonidos-de-origen": {
      title: "Sonidos de Origen",
      description: "Festival que nace para transformar la escena musical española conectando artistas emergentes con figuras consagradas en un formato de curaduría invertida.",
      technologies: ["Curación musical", "Dirección Arte", "Dirección de Proyecto"],
      category: "eventos",
      media: [
        {
          type: "image" as const,
          src: "/sonidos-de-origen/images/1.png",
          alt: "Vista general del festival",
          caption: "Vista general del festival Sonidos de Origen",
        },
        {
          type: "image" as const,
          src: "/sonidos-de-origen/images/2.png",
          alt: "Folclore antiguo",
          caption: "Lo que entendemos cuando escuchamos hablar del folclore español",
        },
        {
          type: "image" as const,
          src: "/sonidos-de-origen/images/3.png",
          alt: "Folclore actual",
          caption: "Lo que actualmente es el folclore español",
        },
        {
          type: "image" as const,
          src: "/sonidos-de-origen/images/4.png",
          alt: "Cartel del festival",
          caption: "Cartel del festival",
        },
        {
          type: "image" as const,
          src: "/sonidos-de-origen/images/5.png",
          alt: "Problema actual",
          caption: "Problema actual",
        },
        {
          type: "image" as const,
          src: "/sonidos-de-origen/images/6.png",
          alt: "Oportunidad",
          caption: "Oportunidad",
        },
      ],
      links: [
        {
          text: "Enlace a la presentación completa",
          url: "https://www.canva.com/design/DAGiQO375UE/BxSPtxfz4oGN9zQNG0G1sg/view?utm_content=DAGiQO375UE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h56d89b37de",
        },
        {
          text: "Enlaces de interés",
          url: "https://linktr.ee/neonoia",
        },
      ],
      longDescription:
        "Sonidos de Origen es un festival que nace para transformar la escena musical española conectando artistas emergentes con figuras consagradas en un formato de curaduría invertida. Celebrado en su primera edición en el Real Jardín Botánico Alfonso XIII (Madrid, mayo 2025), propone un encuentro intergeneracional y sonoro donde la tradición no se revive: se reinventa.\n\nA través de fusiones inéditas entre músicas de raíz y lenguajes contemporáneos —como la electrónica, el pop o el rap— el festival se posiciona como una plataforma viva para una nueva generación cultural. Su propuesta se aleja del modelo de festival jerárquico para poner el poder creativo en manos de los propios artistas.",
    },
    "circuito-glovo-btt-xco": {
      title: "Circuito GLovo BTT XCO",
      description: "Propuesta de reposicionamiento de marca a través de un circuito nacional de carreras de XCO (Cross Country Olímpico).",
      technologies: ["IA", "Marketing", "Dirección Arte"],
      category: "eventos",
      media: [
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/1.png",
          alt: "concepto",
          caption: "Concepto: Activa tu Modo Glovo",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/2.png",
          alt: "Carreras",
          caption: "Circuito de carreras",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/3.png",
          alt: "Tabla comparativa competencia",
          caption: "Tabla comparativa competencia",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/4.png",
          alt: "Activaciones",
          caption: "Activaciones",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/5.png",
          alt: "Activación 1",
          caption: "Activación 1",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/6.png",
          alt: "Activación 2",
          caption: "Activación 2",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/7.png",
          alt: "Activación 3",
          caption: "Activación 3",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/8.png",
          alt: "Arco de salida",
          caption: "Arco de salida/meta",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/9.png",
          alt: "Comunicación estrategica",
          caption: "Comunicación estratégica",
        },
        {
          type: "image" as const,
          src: "/circuito-glovo-btt-xco/images/10.png",
          alt: "Circuito Glovo BTT XCO",
          caption: "Circuito Glovo BTT XCO",
        },
      ],
      links: [
        {
          text: "Enlace a la presentación completa",
          url: "https://www.canva.com/design/DAGoAnHGVdw/OhTcrU0zMEc4b_nB39LUhg/view?utm_content=DAGoAnHGVdw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h42211b5cd6",
        },
        {
          text: "Web marca",
          url: "https://glovoapp.com/es",
        },
      ],
      
      longDescription:
        "¿Y si Glovo dejara de verse solo como una app de reparto y se convirtiera en una marca que te acompaña cuando estás en tu mejor momento?Glovo XCO Series es una propuesta de reposicionamiento de marca a través de un circuito nacional de carreras de XCO (Cross Country Olímpico). Un deporte técnico, exigente y rápido, pero también muy sensorial. En él, cada decisión cuenta. Cada curva, cada subida, cada segundo. Desde Glovo nos preguntamos: ¿cuándo es que todo empieza a ir bien? ¿Ese punto en el que dejas de sufrir y empiezas a fluir? Eso es entrar en Modo Glovo. El momento donde cuerpo y mente están en sincronía, donde tomas decisiones con claridad, disfrutas y avanzas. Sin ruido, sin fricciones. Solo tú, el camino y la dirección correcta.",
    },
    "ecos-de-la-tierra": {
      title: "Ecos de la Tierra",
      description: "Visuales interactivos que exploran la conexión entre la naturaleza y los humanos.",
      technologies: ["Sensores", "Ecología", "Sonido"],
      category: "interactivo",
      media: [
        {
          type: "image" as const,
          src: "/ecos-de-la-tierra/images/1.png",
          alt: "Parte 1",
          caption: "Parte 1",
        },
        {
          type: "video" as const,
          src: "/ecos-de-la-tierra/videos/1.mp4",
          caption: "Video completo",
        },
        {
          type: "video" as const,
          src: "/ecos-de-la-tierra/videos/2.mp4",
          caption: "Fragmento",
        },
        {
          type: "video" as const,
          src: "/ecos-de-la-tierra/videos/3.mp4",
          caption: "Ejemplo de posibles combinaciones",
        },
        {
          type: "video" as const,
          src: "/ecos-de-la-tierra/videos/4.mp4",
          caption: "El planeta no nos pertenece, nosotros pertenecemos al planeta",
        },
      ],
      longDescription:
        "Esta idea explora la evolución del ecosistema desde un mundo dominado por la naturaleza hasta uno transformado por la presencia humana, y finalmente, el retorno de la naturaleza tras la hipotética desaparición de la humanidad.\n\nEste ciclo de vida ilustra la fragilidad y la resiliencia de los ecosistemas. Subraya la responsabilidad humana en el cuidado del medio ambiente y cómo nuestras acciones pueden tener consecuencias duraderas.\n\nTambién destaca la capacidad de la naturaleza para recuperarse y regenerarse, ofreciendo una reflexión sobre la sostenibilidad y la coexistencia armoniosa.",
    },
    "falla-tio-pep": {
      title: "Falla Tio Pep",
      description: "Diseño de secuencia de luces inspirada en los poemas del poeta valenciano Vicent Andrés Estellés",
      technologies: ["Touchdesigner", "Sonido", "Iluminación"],
      category: "interactivo",
      media: [
        {
          type: "image" as const,
          src: "/falla-tio-pep/images/1.png",
          alt: "Cartel Promocional",
          caption: "Cartel Promocional",
        },
        {
          type: "image" as const,
          src: "/falla-tio-pep/images/2.png",
          alt: "Falla Iluminada",
          caption: "Falla Iluminada",
        },
        {
          type: "video" as const,
          src: "/falla-tio-pep/videos/1.mp4",
          caption: "Prueba digital secuencia completa de luces sincronizada con poemas",
        },
        {
          type: "image" as const,
          src: "/falla-tio-pep/images/3.png",
          alt: "Realidad aumentada",
          caption: "Experiencia de realidad aumentada con imágenes historicas de la Falla",
        },
        {
          type: "image" as const,
          src: "/falla-tio-pep/images/4.png",
          alt: "Diagrama de sonido e iluminación poemas",
          caption: "Diagrama de sonido e iluminación poemas",
        },
        {
          type: "image" as const,
          src: "/falla-tio-pep/images/5.png",
          alt: "QR Realidad Aumentada",
          caption: "Cartel con QR de la Realidad Aumentada",
        },
        {
          type: "image" as const,
          src: "/falla-tio-pep/images/6.png",
          alt: "Alzado y planta Falla",
          caption: "Representación del alzado y planta de la Falla",
        },
        {
          type: "image" as const,
          src: "/falla-tio-pep/images/7.png",
          alt: "Patch de Control DMX en TouchDesigner",
          caption: "El backstage",
        },
        {
          type: "image" as const,
          src: "/falla-tio-pep/images/8.png",
          alt: "Haciendo pruebas",
          caption: "Últimos ajustes",
        },
      ],
      links: [
        {
          text: "Virginia Lorente <<Las Fallas son una oportunidad increíble para incorporar todos los ámbitos del diseño.>>",
          url: "https://dissenycv.es/virginia-lorente-las-fallas-son-una-oportunidad-increible-para-incorporar-todos-los-ambitos-del-diseno/",
        },
        {
          text: "A través de las luces y el sonido, las personas que visiten el monumento podrán escuchar los versos, <<y sentir el latido de ese abrazo.>>",
          url: "https://flatmagazine.es/diseno/virginia-lorente-disena-el-abrazo-de-estelles-en-la-plaza-de-la-reina/",
        },
        {
          text: "3º Premio Sección experimentales",
          url: "https://www.valenciaextra.com/es/fallas/mejores-fallas-experimentales-valencia-2024_529918_102.html",
        },
      ],
      longDescription:
        'Diseñamos una secuencia de luces inspirada en los poemas del poeta valenciano Vicent Andrés Estellés, que se proyectaban sobre las figuras de la Falla, utilizando PAR LEDs conectados con DMX y protocolo Artnet, en sincronía con los poemas del poeta. Con la ayuda de TouchDesigner, logramos crear un sistema autosuficiente que encendía y apagaba automáticamente la instalación, garantizando su funcionamiento sin problemas durante todo el evento.\n\nY no nos detuvimos ahí. También llevamos la experiencia a la realidad aumentada, agregando imágenes que representaban la historia de la Falla, la Plaza de la Reina y Valencia en la época de Estellés.\n\nY para nuestra alegría, la Falla Tio Pep, diseñada por Virginia Lorente y creada por el artista Ricardo Alcaide, recibió el tercer premio de Fallas experimentales. Fue un verdadero honor haber sido parte de este proyecto y trabajar junto a verdaderos profesionales.\n\nVirginia Lorente: "Las Fallas son una oportunidad increíble para incorporar todos los ámbitos del diseño."\n\nA través de las luces y el sonido, las personas que visiten el monumento podrán escuchar los versos, "y sentir el latido de ese abrazo".',
    },
    "back2play": {
      title: "Back2play",
      description: "Un evento de eSports para los gamers no gamers",
      technologies: ["Dirección Arte", "Marketing", "Producción"],
      category: "eventos",
      media: [
        {
          type: "image" as const,
          src: "/back2play/images/1.png",
          alt: "Portada",
          caption: "Portada",
        },
        {
          type: "image" as const,
          src: "/back2play/images/2.png",
          alt: "¿te consideras gamer?",
          caption: "¿te consideras gamer?",
        },
        {
          type: "image" as const,
          src: "/back2play/images/3.png",
          alt: "¿seguro?",
          caption: "¿seguro?",
        },
        {
          type: "image" as const,
          src: "/back2play/images/4.png",
          alt: "venga admitelo",
          caption: "venga admitelo",
        },
        {
          type: "image" as const,
          src: "/back2play/images/5.png",
          alt: "sí, eres un poquito gamer",
          caption: "sí, eres un poquito gamer",
        },
        {
          type: "image" as const,
          src: "/back2play/images/6.png",
          alt: "planta distribución",
          caption: "Planta distribución",
        },
        {
          type: "image" as const,
          src: "/back2play/images/7.png",
          alt: "Key Visual",
          caption: "Moodboard",
        },
        {
          type: "image" as const,
          src: "/back2play/images/10.png",
          alt: "Programa actividades",
          caption: "Programa actividades",
        },
      ],
      links: [
        {
          text: "Enlace a la presentación completa",
          url: "https://www.canva.com/design/DAGpeGTCskc/zNa7k7noGv1JqyubvRNM7g/view?utm_content=DAGpeGTCskc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h606babc5fd",
        },
      ],
      longDescription:
        "Un evento que une esports y cultura de festival para abrir el gaming a más gente. \nBACK2PLAY es un evento de tres días que combina competiciones de videojuegos con una programación cultural pensada para ampliar el alcance de los esports. Nuestro objetivo es reunir en un mismo espacio a jugadores habituales, fans casuales y personas que nunca se han sentido representadas en este tipo de eventos, pero que crecieron jugando. \n\nSí, hay torneos con nivel, reglas y premios. Pero también hay conciertos, talleres, zona retro, actividades interactivas y experiencias que invitan a participar desde otros lugares: el recuerdo, la música, la comunidad o simplemente la curiosidad. No se trata de restar importancia a la competición, sino de sumar capas de contenido que conecten con una generación que no vive el gaming solo como deporte, sino como cultura.\n\n Durante tres días, el Sant Jordi Club se transforma en un entorno híbrido: una LAN party con espíritu de festival, donde se puede competir, aprender, jugar, mirar o simplemente disfrutar. BACK2PLAY no es una feria ni un campeonato al uso. Es una propuesta nueva para una comunidad más amplia, más diversa y más conectada con el presente.",
    },
    "serenates": {
      title: "Serenates 2024",
      description: "Creación de visuales en directo inspirados en la obra pictórica de Joaquín Sorolla.",
      technologies: ["TouchDesigner", "After Effects", "Resolume Arena"],
      category: "interactivo",
      media: [
        {
          type: "image" as const,
          src: "/serenates/images/1.jpg",
          alt: "Cuadro Los Nazarenos - Joaquín Sorolla",
          caption: "Cuadro Los Nazarenos - Joaquín Sorolla",
        },
        {
          type: "video" as const,
          src: "/serenates/videos/1.mp4",
          caption: "Introducción",
        },
        {
          type: "video" as const,
          src: "/serenates/videos/2.mp4",
          caption: "Los Nazarenos",
        },
        {
          type: "video" as const,
          src: "/serenates/videos/3.mp4",
          caption: "Los Nazarenos",
        },
        {
          type: "video" as const,
          src: "/serenates/videos/4.mp4",
          caption: "Los Toreros",
        },
      ],
      links: [
        {
          text: "Virginia Lorente <<Las Fallas son una oportunidad increíble para incorporar todos los ámbitos del diseño.>>",
          url: "https://dissenycv.es/virginia-lorente-las-fallas-son-una-oportunidad-increible-para-incorporar-todos-los-ambitos-del-diseno/",
        },
        {
          text: "A través de las luces y el sonido, las personas que visiten el monumento podrán escuchar los versos, <<y sentir el latido de ese abrazo.>>",
          url: "https://flatmagazine.es/diseno/virginia-lorente-disena-el-abrazo-de-estelles-en-la-plaza-de-la-reina/",
        },
        {
          text: "3º Premio Sección experimentales",
          url: "https://www.valenciaextra.com/es/fallas/mejores-fallas-experimentales-valencia-2024_529918_102.html",
        },
      ],
      longDescription:
        'Diseñamos una secuencia de luces inspirada en los poemas del poeta valenciano Vicent Andrés Estellés, que se proyectaban sobre las figuras de la Falla, utilizando PAR LEDs conectados con DMX y protocolo Artnet, en sincronía con los poemas del poeta. Con la ayuda de TouchDesigner, logramos crear un sistema autosuficiente que encendía y apagaba automáticamente la instalación, garantizando su funcionamiento sin problemas durante todo el evento.\n\nY no nos detuvimos ahí. También llevamos la experiencia a la realidad aumentada, agregando imágenes que representaban la historia de la Falla, la Plaza de la Reina y Valencia en la época de Estellés.\n\nY para nuestra alegría, la Falla Tio Pep, diseñada por Virginia Lorente y creada por el artista Ricardo Alcaide, recibió el tercer premio de Fallas experimentales. Fue un verdadero honor haber sido parte de este proyecto y trabajar junto a verdaderos profesionales.\n\nVirginia Lorente: "Las Fallas son una oportunidad increíble para incorporar todos los ámbitos del diseño."\n\nA través de las luces y el sonido, las personas que visiten el monumento podrán escuchar los versos, "y sentir el latido de ese abrazo".',
    },
    "juego": {
      title: "Juego",
      description: "Juego físico,digital que combinan electrónica DIY con visuales generados en tiempo real.",
      technologies: ["Gamificación", "Arduino", "TouchDesigner"],
      category: "interactivo",
      media: [
        {
          type: "image" as const,
          src: "/juego/images/1.png",
          alt: "Imagen del juego",
          caption: "Imagen del juego",
        },
        {
          type: "video" as const,
          src: "/juego/videos/1.mp4",
          caption: "Juego digital",
        },
        {
          type: "video" as const,
          src: "/juego/videos/2.mp4",
          caption: "Juego físico",
        },
        {
          type: "video" as const,
          src: "/juego/videos/3.mp4",
          caption: "Juego físico",
        },
      ],

      longDescription:
        'En este trabajo desarrollé un juego físico/digital que pone al usuario en el centro de una experiencia lúdica y sensorial, combinando electrónica DIY (Arduino) con visuales generados en tiempo real (TouchDesigner). \n\n El desafío era crear una dinámica de juego sencilla pero inmersiva, donde la interacción manual con hardware (botones, potenciómetros o sensores de proximidad) se traduzca en una respuesta audiovisual directa y atractiva. \n\n El resultado fue una experiencia lúdica de 2/3 min por participante, que combinaba la satisfacción táctil del hardware con la sorpresa audiovisual en tiempo real.',
    },
    "deep-end-skatepark": {
      title: "Deep End Skatepark",
      description: "Este proyecto plantea un skatepark indoor que complemente la oferta existente al aire libre, satisfaciendo la creciente afición local.",
      technologies: ["Planimetria", "Conceptualización", "Visualización 3D"],
      category: "interiores",
      media: [
        {
          type: "image" as const,
          src: "/deep-end-skatepark/images/1.png",
          alt: "Render entrada y tienda skate",
          caption: "Render entrada y tienda skate",
        },
        {
          type: "image" as const,
          src: "/deep-end-skatepark/images/7.png",
          alt: "Planta distribución",
          caption: "Planta distribución",
        },
        {
          type: "image" as const,
          src: "/deep-end-skatepark/images/3.png",
          alt: "Zona skatepark",
          caption: "Zona skatepark",
        },
        {
          type: "image" as const,
          src: "/deep-end-skatepark/images/6.png",
          alt: "Zona Rocodromo",
          caption: "Zona rocodromo",
        },
      ],
      links: [
        {
          text: "Proyecto completo",
          url: "https://drive.google.com/drive/folders/1cvVtWuP-GHSUtzv_d6JJwQOz1vn74q3T?usp=drive_link",
        },
      ],
      longDescription:
        "Deep End Skatepark es un proyecto de diseño interior que transforma un antiguo espacio industrial en un centro dinámico para la cultura del skateboarding. El diseño respeta y realza las características arquitectónicas originales del edificio, incorporando elementos de diseño inspirados en la estética urbana y la cultura skate. Más allá de las rampas y obstáculos técnicamente optimizados, el espacio integra áreas sociales, expositivas y educativas, creando un hub cultural completo. La iluminación, acústica y materiales han sido cuidadosamente seleccionados para crear un ambiente que es tanto funcional para la práctica deportiva como visualmente impactante.",
    },
    formentera: {
      title: "Formentera",
      description:
        "Rehabilitación de una vivienda de dos plantas entre medianeras.",
      technologies: ["Arquitectura", "Planimetria", "Visualización 3D"],
      category: "interiores",
      media: [
        {
          type: "image" as const,
          src: "/formentera/images/1.png",
          alt: "Salón / cocina",
          caption: "Salón / cocina",
        },
        {
          type: "image" as const,
          src: "/formentera/images/2.png",
          alt: "Terraza",
          caption: "Terraza",
        },
        {
          type: "image" as const,
          src: "/formentera/images/3.png",
          alt: "Baño planta baja",
          caption: "Baño planta baja",
        },
        {
          type: "image" as const,
          src: "/formentera/images/5.png",
          alt: "Baño primera planta",
          caption: "Baño primera planta",
        },
        {
          type: "image" as const,
          src: "/formentera/images/6.png",
          alt: "Distribución antes de la reforma",
          caption: "Distribución antes de la reforma",
        },
        {
          type: "image" as const,
          src: "/formentera/images/7.png",
          alt: "Distribución tras la reforma",
          caption: "Distribución tras la reforma",
        },
      ],
      
      longDescription:
        "Este proyecto consiste en la transformación de una vivienda adosada de dos plantas en pleno centro de Valencia, optimizando su distribución original (garaje, cocina, salón, tres dormitorios y dos baños) para adaptarla a un estilo de vida contemporáneo y sensorial. Se buscó maximizar la luz natural, generar espacios abiertos y emplear materiales claros y texturas suaves para transmitir frescura y comodidad.",
    },
    "bailar-en-el-desierto": {
      title: "Bailar en el desierto",
      description:
        "Bailar en el Desierto es una experiencia inmersiva de realidad virtual que traslada al usuario a un festival de música electrónica en medio de un páramo infinito",
      technologies: ["VR", "Experiencia Inmersiva", "Arte Digital"],
      category: "ia-ra-vr",
      media: [
        {
          type: "image" as const,
          src: "/bailar-en-el-desierto/images/1.png",
          alt: "Escena general atardecer",
          caption: "Escena general atardecer",
        },
        {
          type: "video" as const,
          src: "/bailar-en-el-desierto/videos/1.mp4",
          caption: "Video completo",
        },
        {
          type: "image" as const,
          src: "/bailar-en-el-desierto/images/4.png",
          alt: "Escenario 1",
          caption: "Escenario 1",
        },
        {
          type: "image" as const,
          src: "/bailar-en-el-desierto/images/3.png",
          alt: "Escenario 2",
          caption: "Escenario 2",
        },
        {
          type: "image" as const,
          src: "/bailar-en-el-desierto/images/2.png",
          alt: "Escenario 3",
          caption: "Escenario 3",
        },
        {
          type: "image" as const,
          src: "/bailar-en-el-desierto/images/5.png",
          alt: "Imagen aérea",
          caption: "Escenario aérea",
        },
      ],
      longDescription:
        "Bailar en el Desierto es una experiencia inmersiva de realidad virtual que traslada al usuario a un festival de música electrónica en medio de un páramo infinito. Todos los escenarios están construidos con materiales y objetos reciclados, y persiguen el objetivo de ofrecer la emoción de un gran evento sin los costes elevados de producción ni la huella ambiental de los festivales tradicionales. \n\n Bailar en el Desierto demuestra cómo la creatividad y la tecnología pueden unirse para ofrecer un festival electrónico sostenible, accesible y memorable, totalmente reinventado para el metaverso.",
    },
    "dialogos": {
      title: "Diálogos 2024",
      description:
        "Con <<La Inteligencia de Nuestros Cuerpo>>, el Máster de Diseño Interactivo exploró cómo lo físico, lo virtual y lo algorítmico pueden integrarse para ofrecer experiencias colaborativas.",
      technologies: ["IA", "Producción", "Arte Generativo"],
      category: "ia-ra-vr",
      media: [
        {
          type: "image" as const,
          src: "/dialogos/images/1.png",
          alt: "Últimas pruebas",
          caption: "Últimas pruebas",
        },
        {
          type: "video" as const,
          src: "/dialogos/videos/1.png",
          caption: "Mesa reactiva",
        },
        {
          type: "image" as const,
          src: "/dialogos/images/2.png",
          alt: "Proceso de construcción y pruebas",
          caption: "Proceso de construcción y pruebas",
        },
        {
          type: "image" as const,
          src: "/dialogos/images/4.png",
          alt: "Cartel funcionamiento mesa reactiva",
          caption: "Cartel funcionamiento mesa reactiva",
        },
        {
          type: "image" as const,
          src: "/dialogos/images/3.png",
          alt: "Accesorios Realidad Aumentada",
          caption: "Accesorios Realidad Aumentada",
        },
        {
          type: "video" as const,
          src: "/dialogos/videos/2.mp4",
          caption: "Fibra de vidrio",
        },
      ],
      links: [
        {
          text: "Video Resumen",
          url: "https://www.youtube.com/watch?v=VxZrawqOUE8",
        },
      ],
      longDescription:
        "Durante Diálogos 2024 en la EASD de Valencia, mis compañeros Julud, Humber, Amina, Maria, Sandra y yo presentamos “La Inteligencia de Nuestros Cuerpos”, un conjunto de instalaciones que fusionan interacción física, visuales en tiempo real y realidad aumentada. La pieza central fue una mesa interactiva basada en ReacTIVsion: los asistentes escaneaban un código QR, elegían un diseñador en la web y veían cargar su ficha –foto, biografía y enlaces– directamente sobre la superficie retroiluminada. \n\n En paralelo, desplegamos una estructura de fibra óptica controlada por DMX, cuyos haces de luz respondían en directo al ritmo musical gracias a un teclado MIDI y TouchDesigner. Y en el proyecto GALER(IA) de Iván Pastor, los visitantes alimentaban un motor de IA con sus gestos para generar y proyectar imágenes inéditas, evidenciando la importancia del factor humano en la creación algorítmica. \n\n Para completar la experiencia, ofrecimos un probador virtual AR que permitía “probarse” accesorios de diseñadores mediante ARKit/ARCore",
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
