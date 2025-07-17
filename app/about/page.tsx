"use client"

import { useState } from "react"
import { Terminal } from "@/components/terminal"
import { Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const [introComplete, setIntroComplete] = useState(false)
  const [bioComplete, setBioComplete] = useState(false)
  const { t } = useLanguage()

  const workExperience = [
    {
      title: "AMB ARQUITECTURA",
      sections: [
        {
          subtitle: "Colaboración en proyectos residenciales",
          tasks: [
            "Desarrollo de propuestas de distribución",
            "Diseño de interiores",
            "Elaboración de planos técnicos",
            "Modelado 3D",
          ],
        },
        {
          subtitle: "Tareas técnicas y normativas",
          tasks: [
            "Redacción de Certificados de Eficiencia Energética",
            "Elaboración de Informes de Evaluación de Edificios (IEE)",
            "Aplicación de normativa vigente",
            "Análisis del estado constructivo de edificaciones existentes",
          ],
        },
      ],
    },
  ]

  const education = [
    {
      title: "Curso de Alto Rendimiento Creativo — Creación de Eventos y Experiencias Inmersivas",
      institution: "Barcelona School of Creativity",
      period: "2024-2025",
      description:
        "Programa intensivo enfocado en la generación de conceptos, diseño de experiencias y dirección creativa de eventos. Me permitió desarrollar una mirada transversal para combinar storytelling, espacio y emoción en proyectos culturales y de marca.",
    },
    {
      title: "Máster Oficial en Diseño Interactivo",
      institution: "Escola d'Art i Superior de Disseny de València (EASD)",
      period: "2023-2024",
      description:
        "Formación especializada en instalaciones interactivas, escenografías digitales, diseño de dispositivos físicos y visuales generativos. Aprendí a trabajar con herramientas como Arduino, TouchDesigner y lenguajes de programación creativa para generar experiencias tecnológicas centradas en el usuario.",
    },
    {
      title: "Grado en Diseño de Interiores",
      institution: "Barreira Arte + Diseño, València",
      period: "2018 - 2023",
      description:
        "Carrera de 4 años centrada en el diseño de espacios habitables, comerciales y efímeros. Me formé en representación técnica, conceptualización espacial y gestión de proyectos. Durante este periodo realicé una estancia Erasmus en Hanze UAS (Groningen, Países Bajos), donde descubrí el diseño interactivo y enfoques alternativos a la práctica del diseño.",
    },
  ]

  const skills = [
    {
      category: "Diseño3D_Visualizacion",
      items: [
        "Modelado y renderizado de espacios y objetos.",
        "Herramientas: SketchUp, 3ds Max, Twinmotion.",
      ],
    },
    {
      category: "Planimetria_Representación",
      items: [
        "Documentación gráfica completa de proyectos arquitectónicos e interiores.",
        "Herramientas: AutoCad",
      ],
    },
    {
      category: "Diseño_Interactivo",
      items: [
       "Proyectos interactivos, visuales en tiempo real y prototipos tecnológicos conectados al espacio o estímulos sensoriales.",  
        "Herramientas: TouchDesigner, Arduino, Python básico y Resolume Arena.",
      ],
    },
    {
      category: "Edición",
      items: [
        "Desarrollo de identidad gráfica, presentaciones, contenido audiovisual y editorial.",
        "Herramientas: Adobe Suite (Photoshop, Illustrator, InDesign, After Effects) y Canva.",
        
      ],
    },
    {
      category: "Idiomas",
      items: [
        "Español | nativo",
        "Catalán | nativo",
        "Inglés  | Cambridge C1"
      ],
    },
  ]

  return (
    <div className="space-y-16">
      <section>
        {/* Terminal de inicialización - solo se muestra si no está completo */}
        {!introComplete && (
          <Terminal
            text={t("loadingProfile")}
            typingSpeed={30}
            className="max-w-3xl mx-auto"
            onComplete={() => setIntroComplete(true)}
          />
        )}

        {/* Layout principal - imagen y texto de presentación */}
        {introComplete && (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Imagen de perfil */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative h-96">
                  <img
                    src="/about-me/images/1.png"
                    alt="Paula Ibor - Perfil"
                    className="w-full h-full object-contain rounded-md border border-primary/30 shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-md"></div>
                </div>
              </div>

              {/* Texto biográfico en contenedor con misma altura */}
              <div className="w-full lg:w-1/2 flex items-center">
                <div className="w-full h-96 terminal-window flex flex-col">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">about_paula.sh</div>
                  </div>
                  <div className="terminal-content flex-1 flex items-center">
                    <div className="w-full">
                      <p className="mb-2">
                        <span className="text-primary">{">"}</span> cat /about/intro.txt
                      </p>
                      <div className="text-white leading-relaxed">{t("aboutIntro")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {introComplete && (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-6">{t("workExperience")}</h2>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.title}.sh</div>
                  </div>
                  <div className="terminal-content">
                    {exp.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-4">
                        <p className="mb-2">
                          <span className="text-primary">{">"}</span> {section.subtitle}
                        </p>
                        <ul className="space-y-1 ml-6">
                          {section.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-2">
                              <span className="text-primary">-</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">{t("education")}</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">educacion_{index + 1}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">{">"}</span> {edu.title}
                    </p>
                    <div className="mb-4 ml-6">
                      <p className="text-sm text-muted-foreground">
                        {edu.institution} | {edu.period}
                      </p>
                      <p className="mt-2">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">{t("skills")}</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">skills.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">{">"}</span> cat /habilidades
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-primary font-bold">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-start gap-2">
                            <span className="text-primary">-</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">{t("contact")}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">contact_form.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">{">"}</span> ./send_message.sh
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">
                        <span className="text-primary">{t("name")}:</span>
                      </label>
                      <Input
                        id="name"
                        placeholder={`Enter your ${t("name")}`}
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        <span className="text-primary">{t("email")}:</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={`Enter your ${t("email")}`}
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        <span className="text-primary">{t("message")}:</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder={`Enter your ${t("message")}`}
                        rows={4}
                        className="bg-background border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {t("sendMessage")}
                    </Button>
                  </form>
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">network_connections.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">{">"}</span> cat /contacto.txt
                  </p>
                  <div className="mb-4">
                    <p className="text-primary font-bold">NOMBRE:</p>
                    <p className="mb-2">PAULA IBOR FERRER</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-primary">mail0:</p>
                      <Link
                        href="mailto:paulaibfe@gmail.com"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail size={16} />
                        paulaibfe@gmail.com
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">linkedin0:</p>
                      <Link
                        href="http://linkedin.com/in/paula-ibor-4278761ba"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Linkedin size={16} />
                        linkedin.com/in/paula-ibor-4278761ba
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">instagram0:</p>
                      <Link
                        href="https://instagram.com/neonoia.studio"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Instagram size={16} />
                        @neonoia.studio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
