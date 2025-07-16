"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const { t } = useLanguage()

  const projects = [
    // Eventos
    {
      id: "fallen-equinox",
      title: "Fallen Equinox",
      description: "Lanzamiento de colección de la marca Named Collective.",
      image: "/public/fallen-equinox/images/1.png",
      technologies: ["IA", "Dirección Arte", "Escenografia"],
      category: "eventos",
    },
    {
      id: "sonidos-de-origen",
      title: "Sonidos de Origen",
      description: "festival que nace para transformar la escena musical española conectando artistas emergentes con figuras consagradas en un formato de curaduría invertida.",
      image: "/public/sonidos-de-origen/images/1.png",
      technologies: ["Curación musical", "Dirección Arte", "Dirección de Proyecto"],
      category: "eventos",
    },
    {
      id: "circuito-glovo-btt-xco",
      title: "Circuito GLovo BTT XCO",
      description: "propuesta de reposicionamiento de marca a través de un circuito nacional de carreras de XCO (Cross Country Olímpico).",
      image: "/public/circuito-glovo-btt-xco/images/1.png",
      technologies: ["IA", "Marketing", "Dirección Arte"],
      category: "eventos",
    },

    // Interactivo
    {
      id: "ecos-de-la-tierra",
      title: "Ecos de la Tierra",
      description: "Visuales interactivos que exploran la conexión entre la naturaleza y los humanos.",
      image: "/public/ecos-de-la-tierra/images/1.png",
      technologies: ["TouchDesigner", "After Effects", "Sonido"],
      category: "interactivo",
    },
    {
      id: "falla-tio-pep",
      title: "Falla Tio Pep",
      description: "Diseño de secuencia de luces inspirada en los poemas del poeta valenciano Vicent Andrés Estellés",
      image: "/public/falla-tio-pep/images/1.jpg",
      technologies: ["Touchdesigner", "Sonido", "Iluminación"],
      category: "interactivo",
    },
    {
      id: "back2play",
      title: "Back2play",
      description: "Un evento de eSports para los gamers no gamers",
      image: "/public/back2play/images/1.png",
      technologies: ["Dirección Arte", "Marketing", "Producción"],
      category: "eventos",
    },
    {
      id: "serenates",
      title: "Serenates 2024",
      description:
        "Creación de visuales en directo inspirados en la obra pictórica de Joaquín Sorolla.",
      image: "/public/serenates/images/1.jpg",
      technologies: ["TouchDesigner", "After Effects", "Resolume Arena"],
      category: "interactivo",
    },
    {
      id: "juego",
      title: "Juego",
      description: "Juego físico,digital que combinan electrónica DIY con visuales generados en tiempo real.",
      image: "/projects/juego/experiencia-ludica.jpg",
      technologies: ["Gamificación", "Arduino", "TouchDesigner"],
      category: "interactivo",
    },

    // Interiores
    {
      id: "deep-end-skatepark",
      title: "Deep End Skatepark",
      description: "Diseño de interiores para un skatepark urbano que fusiona funcionalidad y estética contemporánea.",
      image: "/projects/deep-end-skatepark/vista-general.jpg",
      technologies: ["Diseño Urbano", "Arquitectura", "Deporte"],
      category: "interiores",
    },
    {
      id: "formentera",
      title: "Formentera",
      description:
        "Diseño de interiores para una residencia en Formentera que integra la esencia mediterránea con un enfoque contemporáneo.",
      image: "/projects/formentera/residencia-mediterranea.jpg",
      technologies: ["Residencial", "Mediterráneo", "Sostenibilidad"],
      category: "interiores",
    },
    {
      id: "dona-carmen",
      title: "Doña Carmen",
      description: "Rediseño de un espacio gastronómico que combina tradición culinaria y diseño de vanguardia.",
      image: "/projects/dona-carmen/espacio-gastronomico.jpg",
      technologies: ["Hostelería", "Iluminación", "Experiencia"],
      category: "interiores",
    },

    // IA/RA/VR
    {
      id: "bailar-en-el-desierto",
      title: "Bailar en el desierto",
      description:
        "Experiencia de realidad virtual que transporta a los usuarios a un desierto donde el movimiento se traduce en expresiones visuales y sonoras.",
      image: "/projects/bailar-en-el-desierto/vr-desierto.jpg",
      technologies: ["VR", "Danza", "Arte Digital"],
      category: "ia-ra-vr",
    },
    {
      id: "the-next-serve",
      title: "The Next Serve",
      description:
        "Aplicación de realidad aumentada que transforma el entrenamiento deportivo a través de análisis de movimiento en tiempo real.",
      image: "/projects/the-next-serve/ar-entrenamiento.jpg",
      technologies: ["RA", "Deporte", "Análisis de Movimiento"],
      category: "ia-ra-vr",
    },
    {
      id: "onirix",
      title: "Onirix",
      description:
        "Experiencia inmersiva que utiliza inteligencia artificial para crear paisajes oníricos personalizados basados en las emociones del usuario.",
      image: "/projects/onirix/paisajes-oniricos.jpg",
      technologies: ["IA", "Emociones", "Arte Generativo"],
      category: "ia-ra-vr",
    },
  ]

  const categories = [
    { id: "all", name: t("allProjects") },
    { id: "eventos", name: t("eventos") },
    { id: "interactivo", name: t("interactivo") },
    { id: "interiores", name: t("interiores") },
    { id: "ia-ra-vr", name: t("ia-ra-vr") },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">proyectos.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">{">"}</span> {t("showingDirectory")}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
