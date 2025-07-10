"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.team": "Team",
    "nav.technologies": "Technologies",
    "nav.contact": "Contact",

    // Home page
    "home.hero.title": "Transform Your Data Into",
    "home.hero.subtitle": "Intelligent Solutions",
    "home.hero.description":
      "We combine deep expertise in physics with cutting-edge AI to solve complex problems and drive innovation across industries.",
    "home.services.title": "Our Core Services",
    "home.services.description": "Comprehensive data science and AI solutions tailored to your business needs",
    "home.services.button": "View All Services",
    "home.projects.title": "Featured Projects",
    "home.projects.description":
      "Discover how we've helped businesses transform their operations with data-driven solutions",
    "home.projects.button": "View All Projects",
    "home.projects.button2": "Our Technologies",

    // About page
    "about.hero.title": "About Exdata",
    "about.hero.description1":
      "We are a team of physicists and data scientists passionate about transforming complex data into actionable insights.",
    "about.hero.description2":
      "Our unique approach combines rigorous scientific methodology with cutting-edge AI technologies to deliver solutions that drive real business value.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To bridge the gap between complex data and practical solutions, empowering businesses to make informed decisions through advanced analytics and AI.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be the leading provider of physics-informed AI solutions, setting new standards for precision and innovation in data science.",
    "about.values.title": "Our Values",
    "about.values.precision": "Precision",
    "about.values.precision.desc": "We apply scientific rigor to every analysis",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc": "We push the boundaries of what's possible with data",
    "about.values.collaboration": "Collaboration",
    "about.values.collaboration.desc": "We work closely with our clients to understand their unique challenges",

    // Services
    "service.analytics": "Advanced Analytics",
    "service.dataStrategy": "Data Strategy",
    "service.predictive": "Predictive Modeling",
    "service.ai": "AI Solutions",

    // Footer
    "footer.description": "Transforming data into intelligent solutions through physics-powered AI.",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.ourTeam": "Our Team",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.services": "Services",
    "footer.copyright": "All rights reserved.",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.team": "Equipo",
    "nav.technologies": "Tecnologías",
    "nav.contact": "Contacto",

    // Home page
    "home.hero.title": "Transforma Tus Datos En",
    "home.hero.subtitle": "Soluciones Inteligentes",
    "home.hero.description":
      "Combinamos experiencia profunda en física con IA de vanguardia para resolver problemas complejos e impulsar la innovación en todas las industrias.",
    "home.services.title": "Nuestros Servicios Principales",
    "home.services.description":
      "Soluciones integrales de ciencia de datos e IA adaptadas a las necesidades de tu negocio",
    "home.services.button": "Ver Todos los Servicios",
    "home.projects.title": "Proyectos Destacados",
    "home.projects.description":
      "Descubre cómo hemos ayudado a las empresas a transformar sus operaciones con soluciones basadas en datos",
    "home.projects.button": "Ver Todos los Proyectos",
    "home.projects.button2": "Nuestras Tecnologías",

    // About page
    "about.hero.title": "Acerca de Exdata",
    "about.hero.description1":
      "Somos un equipo de físicos y científicos de datos apasionados por transformar datos complejos en insights accionables.",
    "about.hero.description2":
      "Nuestro enfoque único combina metodología científica rigurosa con tecnologías de IA de vanguardia para entregar soluciones que generan valor real para el negocio.",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description":
      "Cerrar la brecha entre datos complejos y soluciones prácticas, empoderando a las empresas para tomar decisiones informadas a través de análisis avanzados e IA.",
    "about.vision.title": "Nuestra Visión",
    "about.vision.description":
      "Ser el proveedor líder de soluciones de IA informadas por la física, estableciendo nuevos estándares de precisión e innovación en ciencia de datos.",
    "about.values.title": "Nuestros Valores",
    "about.values.precision": "Precisión",
    "about.values.precision.desc": "Aplicamos rigor científico a cada análisis",
    "about.values.innovation": "Innovación",
    "about.values.innovation.desc": "Empujamos los límites de lo que es posible con los datos",
    "about.values.collaboration": "Colaboración",
    "about.values.collaboration.desc":
      "Trabajamos estrechamente con nuestros clientes para entender sus desafíos únicos",

    // Services
    "service.analytics": "Análisis Avanzado",
    "service.dataStrategy": "Estrategia de Datos",
    "service.predictive": "Modelado Predictivo",
    "service.ai": "Soluciones de IA",

    // Footer
    "footer.description": "Transformando datos en soluciones inteligentes a través de IA potenciada por la física.",
    "footer.company": "Empresa",
    "footer.aboutUs": "Acerca de Nosotros",
    "footer.ourTeam": "Nuestro Equipo",
    "footer.careers": "Carreras",
    "footer.contact": "Contacto",
    "footer.services": "Servicios",
    "footer.copyright": "Todos los derechos reservados.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

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
