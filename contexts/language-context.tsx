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
    "home.about.title": "About Exdata",
    "home.about.description1":
      "Founded by physicists and data scientists, Exdata bridges the gap between theoretical knowledge and practical applications.",
    "home.about.description2":
      "Our unique approach combines rigorous scientific methodology with innovative AI techniques to deliver solutions that are both robust and scalable.",

    // About page
    "about.hero.title": "About Exdata",
    "about.hero.description1":
      "Founded by physicists and data scientists, we bridge the gap between theoretical knowledge and practical applications.",
    "about.hero.description2":
      "Our unique approach combines rigorous scientific methodology with innovative AI techniques.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To democratize advanced analytics and AI, making sophisticated data science accessible to organizations of all sizes.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "A world where data-driven insights power every decision, creating more efficient, sustainable, and innovative solutions.",
    "about.values.title": "Our Values",
    "about.values.scientific": "Scientific Rigor",
    "about.values.scientific.desc": "Every solution is built on solid theoretical foundations",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc": "Pushing boundaries with cutting-edge AI and machine learning",
    "about.values.collaboration": "Collaboration",
    "about.values.collaboration.desc": "Working closely with clients to understand their unique challenges",

    // Services
    "service.analytics": "Advanced Analytics",
    "service.analytics.desc": "Transform raw data into actionable insights with our comprehensive analytics solutions.",
    "service.dataStrategy": "Data Strategy",
    "service.dataStrategy.desc": "Develop a roadmap for your data initiatives with our strategic consulting services.",
    "service.predictive": "Predictive Modeling",
    "service.predictive.desc": "Forecast trends and outcomes with sophisticated machine learning models.",
    "service.ai": "AI Solutions",
    "service.ai.desc": "Custom artificial intelligence solutions tailored to your specific business needs.",

    // Footer
    "footer.description": "Transforming data into intelligent solutions through physics-powered AI.",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.ourTeam": "Our Team",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.services": "Services",
    "footer.copyright": "All rights reserved.",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to transform your data into intelligent solutions?",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Team
    "team.title": "Meet Our Team",
    "team.subtitle": "The brilliant minds behind Exdata's innovative solutions",

    // Technologies
    "technologies.title": "Our Technology Stack",
    "technologies.subtitle": "Cutting-edge tools and frameworks powering our solutions",
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
    "home.about.title": "Acerca de Exdata",
    "home.about.description1":
      "Fundada por físicos y científicos de datos, Exdata conecta el conocimiento teórico con aplicaciones prácticas.",
    "home.about.description2":
      "Nuestro enfoque único combina metodología científica rigurosa con técnicas innovadoras de IA para entregar soluciones robustas y escalables.",

    // About page
    "about.hero.title": "Acerca de Exdata",
    "about.hero.description1":
      "Fundada por físicos y científicos de datos, conectamos el conocimiento teórico con aplicaciones prácticas.",
    "about.hero.description2":
      "Nuestro enfoque único combina metodología científica rigurosa con técnicas innovadoras de IA.",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description":
      "Democratizar la analítica avanzada y la IA, haciendo la ciencia de datos sofisticada accesible a organizaciones de todos los tamaños.",
    "about.vision.title": "Nuestra Visión",
    "about.vision.description":
      "Un mundo donde los insights basados en datos impulsen cada decisión, creando soluciones más eficientes, sostenibles e innovadoras.",
    "about.values.title": "Nuestros Valores",
    "about.values.scientific": "Rigor Científico",
    "about.values.scientific.desc": "Cada solución se construye sobre fundamentos teóricos sólidos",
    "about.values.innovation": "Innovación",
    "about.values.innovation.desc": "Empujando límites con IA y aprendizaje automático de vanguardia",
    "about.values.collaboration": "Colaboración",
    "about.values.collaboration.desc": "Trabajando estrechamente con clientes para entender sus desafíos únicos",

    // Services
    "service.analytics": "Analítica Avanzada",
    "service.analytics.desc":
      "Transforma datos en bruto en insights accionables con nuestras soluciones analíticas integrales.",
    "service.dataStrategy": "Estrategia de Datos",
    "service.dataStrategy.desc":
      "Desarrolla una hoja de ruta para tus iniciativas de datos con nuestros servicios de consultoría estratégica.",
    "service.predictive": "Modelado Predictivo",
    "service.predictive.desc": "Pronostica tendencias y resultados con modelos sofisticados de aprendizaje automático.",
    "service.ai": "Soluciones de IA",
    "service.ai.desc":
      "Soluciones de inteligencia artificial personalizadas adaptadas a las necesidades específicas de tu negocio.",

    // Footer
    "footer.description": "Transformando datos en soluciones inteligentes a través de IA impulsada por física.",
    "footer.company": "Empresa",
    "footer.aboutUs": "Acerca de Nosotros",
    "footer.ourTeam": "Nuestro Equipo",
    "footer.careers": "Carreras",
    "footer.contact": "Contacto",
    "footer.services": "Servicios",
    "footer.copyright": "Todos los derechos reservados.",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "¿Listo para transformar tus datos en soluciones inteligentes?",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.company": "Empresa",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

    // Team
    "team.title": "Conoce Nuestro Equipo",
    "team.subtitle": "Las mentes brillantes detrás de las soluciones innovadoras de Exdata",

    // Technologies
    "technologies.title": "Nuestro Stack Tecnológico",
    "technologies.subtitle": "Herramientas y frameworks de vanguardia que impulsan nuestras soluciones",
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
