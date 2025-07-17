"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight, MessageSquare } from "lucide-react"
import { ChatInterface } from "@/components/chat-interface"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const { t } = useLanguage()

  const featuredProjects = [
    {
      id: "fallen-equinox",
      title: "Fallen Equinox",
      description: "Lanzamiento de colección de la marca Named Collective.",
      image: "/fallen-equinox/images/1.png",
      technologies: ["IA", "Dirección Arte", "Escenografia"],
    },
    {
      id: "ecos-de-la-tierra",
      title: "Ecos de la Tierra",
      description: "Visuales interactivos que exploran la conexión entre la naturaleza y los humanos.",
      image: "/ecos-de-la-tierra/images/1.png",
      technologies: ["TouchDesigner", "After Effects", "Sonido"],
    },
    {
      id: "formentera",
      title: "Formentera",
      description: "Rehabilitación de una vivienda de dos plantas entre medianeras.",
      image: "/formentera/images/1.png",
      technologies: ["Arquitectura", "Planimetria", "Visualización 3D"],
    },
  ]

  const latestPosts = [
    {
      id: "future-of-ai",
      title: "El futuro de la IA en el arte",
      excerpt:
        "Explorando las implicaciones éticas y avances tecnológicos en la inteligencia artificial aplicada al arte.",
      date: "2023-05-15",
      readingTime: "5 min de lectura",
    },
  ]

  const skills = [
    t("Estratégia Experiencial"),
    t("Prototipado Ágil"),
    t("Sistemas Modulares"),
    t("Sostenibilidad Circular"),
    t("Coordinación Interdisciplinar"),
    //t("artificialIntelligence"),
    //t("soundDesign"),
    //t("lighting"),
  ]

  const handleChatClick = () => {
    setShowChat(true)
  }

  const handleCloseChat = () => {
    setShowChat(false)
  }

  return (
    <div className="space-y-16">
      <section className="py-12">
        <Terminal
          text={t("intro")}
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handleChatClick}
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              {t("knowMore")} <MessageSquare size={16} />
            </button>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
            >
              {t("about")} <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t("featuredProjects")}</h2>
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            {t("viewAll")} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">{t("specialties")}</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">especialidades.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">{">"}</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t("inspiration")}</h2>
          <Link href="/blog" className="text-primary hover:underline inline-flex items-center gap-1">
            {t("viewAll")} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* Chat Interface */}
      <ChatInterface isOpen={showChat} onClose={handleCloseChat} />
    </div>
  )
}
