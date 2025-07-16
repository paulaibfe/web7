"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en" | "ca"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    home: "inicio",
    projects: "proyectos",
    inspiration: "inspiración",
    about: "sobre mi",

    // Homepage
    intro:
      "Hola, Mundo. Soy Paula Ibor. Aún estoy en proceso de definir exactamente mi rol profesional, pero me gusta identificarme como directora creativa de nuevos formatos y diseñadora de experiencias.",
    knowMore: "Conoce más sobre mi",
    featuredProjects: "Proyectos Destacados",
    viewAll: "Ver todos",
    specialties: "Especialidades",

    // Projects
    showingDirectory: "Mostrando directorio de proyectos. Selecciona una categoría para filtrar resultados.",
    allProjects: "Todos los Proyectos",
    backToProjects: "Volver a proyectos",
    projectDetails: "Detalles del Proyecto",
    projectDescription: "Descripción del Proyecto",
    relatedLinks: "Enlaces Relacionados",
    category: "categoría",
    title: "título",
    technologies: "tecnologías",

    // Project categories
    eventos: "Eventos",
    interactivo: "Interactivo",
    interiores: "Interiores",
    "ia-ra-vr": "IA/RA/VR",

    // About
    workExperience: "Experiencia Laboral",
    education: "Educación",
    skills: "Habilidades",
    contact: "Contacto",
    loadingProfile: "Inicializando perfil... Acceso concedido. Cargando datos...",
    aboutIntro:
      "Hola, NeoNoia es mi proyecto personal y mi forma de jugar con lo que me remueve por dentro. Un espacio vivo que evoluciona conmigo, donde mezclo lo que me inspira, me obsesiona o me hace dudar.",

    // Contact
    sendMessage: "Enviar Mensaje",
    name: "nombre",
    email: "email",
    message: "mensaje",
    contactInfo: "Información de Contacto",

    // Skills
    interiorDesign: "Diseño de Interiores",
    interactiveInstallations: "Instalaciones Interactivas",
    eventProduction: "Producción de Eventos",
    augmentedReality: "Realidad Aumentada",
    virtualReality: "Realidad Virtual",
    artificialIntelligence: "Inteligencia Artificial",
    soundDesign: "Diseño Sonoro",
    lighting: "Iluminación",

    // Blog/Inspiration
    readingTime: "min de lectura",
    backToInspiration: "Volver a inspiración",
    showingInspiration: "ls -la /inspiracion",

    // Chat
    chatTitle: "Chat con Paula",
    typeMessage: "Escribe tu mensaje...",
    chatWelcome:
      "Bienvenidx al chat.\nAquí puedes preguntar lo que quieras sobre Paula o cualquiera de sus proyectos.\nEste es un experimento en construcción, creado por ella para explorar nuevas formas de presentar su trabajo.\nSi te apetece, puedes dejar tu feedback en la sección de contacto.\nGracias por formar parte del proceso. <3",
  },
  en: {
    // Navigation
    home: "home",
    projects: "projects",
    inspiration: "inspiration",
    about: "about",

    // Homepage
    intro:
      "Hello, World. I'm Paula Ibor. I'm still in the process of defining exactly my professional role, but I like to identify myself as a creative director of new formats and experience designer.",
    knowMore: "Get to know me",
    featuredProjects: "Featured Projects",
    viewAll: "View all",
    specialties: "Specialties",

    // Projects
    showingDirectory: "Showing project directory. Select a category to filter results.",
    allProjects: "All Projects",
    backToProjects: "Back to projects",
    projectDetails: "Project Details",
    projectDescription: "Project Description",
    relatedLinks: "Related Links",
    category: "category",
    title: "title",
    technologies: "technologies",

    // Project categories
    eventos: "Events",
    interactivo: "Interactive",
    interiores: "Interiors",
    "ia-ra-vr": "AI/AR/VR",

    // About
    workExperience: "Work Experience",
    education: "Education",
    skills: "Skills",
    contact: "Contact",
    loadingProfile: "Initializing profile... Access granted. Loading data...",
    aboutIntro:
      "Hello, NeoNoia is my personal project and my way of playing with what moves me inside. A living space that evolves with me, where I mix what inspires me, obsesses me or makes me doubt.",

    // Contact
    sendMessage: "Send Message",
    name: "name",
    email: "email",
    message: "message",
    contactInfo: "Contact Information",

    // Skills
    interiorDesign: "Interior Design",
    interactiveInstallations: "Interactive Installations",
    eventProduction: "Event Production",
    augmentedReality: "Augmented Reality",
    virtualReality: "Virtual Reality",
    artificialIntelligence: "Artificial Intelligence",
    soundDesign: "Sound Design",
    lighting: "Lighting",

    // Blog/Inspiration
    readingTime: "min read",
    backToInspiration: "Back to inspiration",
    showingInspiration: "ls -la /inspiration",

    // Chat
    chatTitle: "Chat with Paula",
    typeMessage: "Type your message...",
    chatWelcome:
      "Welcome to the chat.\nHere you can ask anything about Paula or any of her projects.\nThis is an experiment under construction, created by her to explore new ways of presenting her work.\nIf you feel like it, you can leave your feedback in the contact section.\nThanks for being part of the process. <3",
  },
  ca: {
    // Navigation
    home: "inici",
    projects: "projectes",
    inspiration: "inspiració",
    about: "sobre mi",

    // Homepage
    intro:
      "Hola, Món. Sóc Paula Ibor. Encara estic en procés de definir exactament el meu rol professional, però m'agrada identificar-me com a directora creativa de nous formats i dissenyadora d'experiències.",
    knowMore: "Coneix-me més",
    featuredProjects: "Projectes Destacats",
    viewAll: "Veure tots",
    specialties: "Especialitats",

    // Projects
    showingDirectory: "Mostrant directori de projectes. Selecciona una categoria per filtrar resultats.",
    allProjects: "Tots els Projectes",
    backToProjects: "Tornar als projectes",
    projectDetails: "Detalls del Projecte",
    projectDescription: "Descripció del Projecte",
    relatedLinks: "Enllaços Relacionats",
    category: "categoria",
    title: "títol",
    technologies: "tecnologies",

    // Project categories
    eventos: "Esdeveniments",
    interactivo: "Interactiu",
    interiores: "Interiors",
    "ia-ra-vr": "IA/RA/VR",

    // About
    workExperience: "Experiència Laboral",
    education: "Educació",
    skills: "Habilitats",
    contact: "Contacte",
    loadingProfile: "Inicialitzant perfil... Accés concedit. Carregant dades...",
    aboutIntro:
      "Hola, NeoNoia és el meu projecte personal i la meva manera de jugar amb el que em remou per dins. Un espai viu que evoluciona amb mi, on barrego el que m'inspira, m'obsessiona o em fa dubtar.",

    // Contact
    sendMessage: "Enviar Missatge",
    name: "nom",
    email: "email",
    message: "missatge",
    contactInfo: "Informació de Contacte",

    // Skills
    interiorDesign: "Disseny d'Interiors",
    interactiveInstallations: "Instal·lacions Interactives",
    eventProduction: "Producció d'Esdeveniments",
    augmentedReality: "Realitat Augmentada",
    virtualReality: "Realitat Virtual",
    artificialIntelligence: "Intel·ligència Artificial",
    soundDesign: "Disseny Sonor",
    lighting: "Il·luminació",

    // Blog/Inspiration
    readingTime: "min de lectura",
    backToInspiration: "Tornar a la inspiració",
    showingInspiration: "ls -la /inspiracio",

    // Chat
    chatTitle: "Xat amb Paula",
    typeMessage: "Escriu el teu missatge...",
    chatWelcome:
      "Benvingut/da al xat.\nAquí pots preguntar el que vulguis sobre Paula o qualsevol dels seus projectes.\nAixò és un experiment en construcció, creat per ella per explorar noves formes de presentar el seu treball.\nSi et ve de gust, pots deixar el teu feedback a la secció de contacte.\nGràcies per formar part del procés. <3",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
