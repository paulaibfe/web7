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
      image: "/fallen-equinox/images/1.png",
      technologies: ["IA", "Dirección Arte", "Escenografia"],
      category: "eventos",
    },
    {
      id: "sonidos-de-origen",
      title: "Sonidos de Origen",
      description: "Festival que nace para transformar la escena musical española conectando artistas emergentes con figuras consagradas en un formato de curaduría invertida.",
      image: "/sonidos-de-origen/images/1.png",
      technologies: ["Curación musical", "Dirección Arte", "Dirección de Proyecto"],
      category: "eventos",
    },
    {
      id: "circuito-glovo-btt-xco",
      title: "Circuito GLovo BTT XCO",
      description: "propuesta de reposicionamiento de marca a través de un circuito nacional de carreras de XCO (Cross Country Olímpico).",
      image: "/circuito-glovo-btt-xco/images/1.png",
      technologies: ["IA", "Marketing", "Dirección Arte"],
      category: "eventos",
    },

    // Interactivo
    {
      id: "ecos-de-la-tierra",
      title: "Ecos de la Tierra",
      description: "Visuales interactivos que exploran la conexión entre la naturaleza y los humanos.",
      image: "/ecos-de-la-tierra/images/1.png",
      technologies: ["TouchDesigner", "After Effects", "Sonido"],
      category: "interactivo",
    },
    {
      id: "falla-tio-pep",
      title: "Falla Tio Pep",
      description: "Diseño de secuencia de luces inspirada en los poemas del poeta valenciano Vicent Andrés Estellés",
      image: "/falla-tio-pep/images/1.png",
      technologies: ["Touchdesigner", "Sonido", "Iluminación"],
      category: "interactivo",
    },
    {
      id: "back2play",
      title: "Back2play",
      description: "Un evento de eSports para los gamers no gamers",
      image: "/back2play/images/1.png",
      technologies: ["Dirección Arte", "Marketing", "Producción"],
      category: "eventos",
    },
    {
      id: "serenates",
      title: "Serenates 2024",
      description:
        "Creación de visuales en directo inspirados en la obra pictórica de Joaquín Sorolla.",
      image: "/serenates/images/1.jpg",
      technologies: ["TouchDesigner", "After Effects", "Resolume Arena"],
      category: "interactivo",
    },
    {
      id: "juego",
      title: "Juego",
      description: "Juego físico,digital que combinan electrónica DIY con visuales generados en tiempo real.",
      image: "/juego/images/1.png",
      technologies: ["Gamificación", "Arduino", "TouchDesigner"],
      category: "interactivo",
    },

    // Interiores
    {
      id: "deep-end-skatepark",
      title: "Deep End Skatepark",
      description: "Este proyecto plantea un skatepark indoor que complemente la oferta existente al aire libre, satisfaciendo la creciente afición local.",
      image: "/deep-end-skatepark/images/1.png",
      technologies: ["Planimetria", "Conceptualización", "Visualización 3D"],
      category: "interiores",
    },
    {
      id: "formentera",
      title: "Formentera",
      description:
        "Rehabilitación de una vivienda de dos plantas entre medianeras.",
      image: "/formentera/images/1.png",
      technologies: ["Arquitectura", "Planimetria", "Visualización 3D"],
      category: "interiores",
    },
    {
      id: "dona-carmen",
      title: "Doña Carmen",
      description: "Rediseño de un espacio gastronómico que combina tradición culinaria y diseño de vanguardia.",
      image: "/dona-carmen/espacio-gastronomico.jpg",
      technologies: ["Hostelería", "Iluminación", "Experiencia"],
      category: "interiores",
    },

    // IA/RA/VR
    {
      id: "bailar-en-el-desierto",
      title: "Bailar en el desierto",
      description:
        "Bailar en el Desierto es una experiencia inmersiva de realidad virtual que traslada al usuario a un festival de música electrónica en medio de un páramo infinito",
      image: "/bailar-en-el-desierto/images/1.png",
      technologies: ["VR", "Experiencia Inmersiva", "Arte Digital"],
      category: "ia-ra-vr",
    },
    {
      id: "the-next-serve",
      title: "The Next Serve",
      description:
        "Exhibición de tenis conceptual diseñada para celebrar los Juegos Olímpicos de Los Ángeles 2028.",
      image: "the-next-serve/1.jpg",
      technologies: ["IA", "Conceptualización"],
      category: "ia-ra-vr",
    },
    {
      id: "dialogos",
      title: "Diálogos 2024",
      description:
        "Con “La Inteligencia de Nuestros Cuerpos”, el Máster de Diseño Interactivo exploró cómo lo físico, lo virtual y lo algorítmico pueden integrarse para ofrecer experiencias colaborativas.",
      image: "/dialogos/images/1.png",
      technologies: ["IA", "Producción", "Arte Generativo"],
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
