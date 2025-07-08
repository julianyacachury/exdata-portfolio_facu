"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Translation data
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
    "home.projects.button1": "View All Projects",
    "home.projects.button2": "Our Technologies",

    "home.about.title": "About Exdata",
    "home.about.description1":
      "We are a team of physicists and data scientists passionate about solving complex problems through innovative AI solutions.",
    "home.about.description2":
      "Our unique background in physics gives us a deep understanding of mathematical modeling and statistical analysis, enabling us to tackle challenges that others might find insurmountable.",
    "home.about.button": "Learn More About Us",

    "home.cta.title": "Ready to Transform Your Business?",
    "home.cta.description": "Let's discuss how our AI and data science expertise can drive your business forward.",
    "home.cta.button": "Get Started Today",

    // Services
    "service.analytics": "Advanced Analytics",
    "service.dataStrategy": "Data Strategy",
    "service.predictive": "Predictive Modeling",

    "services.analytics.title": "Advanced Analytics",
    "services.analytics.description":
      "Transform raw data into actionable insights with our comprehensive analytics solutions.",
    "services.analytics.details":
      "We help businesses unlock the full potential of their data through advanced statistical analysis, data visualization, and custom reporting solutions.",

    "services.dataStrategy.title": "Data Strategy & Architecture",
    "services.dataStrategy.description": "Build a robust data foundation that scales with your business needs.",
    "services.dataStrategy.details":
      "Our team designs and implements comprehensive data strategies, from data collection and storage to processing pipelines and governance frameworks.",

    "services.predictive.title": "Predictive Modeling",
    "services.predictive.description": "Leverage machine learning to forecast trends and optimize decision-making.",
    "services.predictive.details":
      "We develop custom predictive models that help businesses anticipate market changes, optimize operations, and reduce risks through data-driven forecasting.",

    "services.bi.title": "Business Intelligence",
    "services.bi.description": "Create interactive dashboards and reports for real-time business insights.",
    "services.bi.details":
      "Transform your data into compelling visual stories with our BI solutions, featuring real-time dashboards, automated reporting, and self-service analytics.",

    "services.ai.title": "AI Solutions",
    "services.ai.description": "Implement cutting-edge AI technologies to automate and enhance your processes.",
    "services.ai.details":
      "From natural language processing to computer vision, we develop custom AI solutions that automate complex tasks and provide intelligent insights.",

    "services.consulting.title": "Data Science Consulting",
    "services.consulting.description": "Expert guidance to help you navigate your data science journey.",
    "services.consulting.details":
      "Our consultants work closely with your team to identify opportunities, develop strategies, and implement best practices for data-driven decision making.",

    // Projects
    "projects.filter.all": "All Projects",

    "projects.roof.title": "Roof Detection System",
    "projects.roof.category": "Computer Vision",
    "projects.roof.description":
      "Computer vision system for roof detection in satellite images, area measurement, and shape classification.",
    "projects.roof.challenge":
      "A roof repair company needed to efficiently identify potential clients by analyzing satellite imagery to detect roofs requiring maintenance.",
    "projects.roof.solution":
      "We developed a computer vision system that automatically detects roofs in satellite images, measures their area, and classifies their shapes and conditions.",
    "projects.roof.results":
      "The system increased the company's lead generation by 45% while reducing the time spent on manual property assessment by 70%.",

    "projects.pharma.title": "Pharmaceutical Distribution Chatbot",
    "projects.pharma.category": "AI Assistant",
    "projects.pharma.description":
      "AI-powered chatbot for answering questions about pharmaceutical shipments and purchases.",
    "projects.pharma.challenge":
      "A pharmaceutical distributor needed to handle a high volume of customer inquiries about shipments and purchases efficiently.",
    "projects.pharma.solution":
      "We created an intelligent chatbot using large language models that could accurately answer questions about order status, shipping details, and product information.",
    "projects.pharma.results":
      "The chatbot reduced response time from hours to seconds, handling 85% of routine inquiries without human intervention and improving customer satisfaction scores by 32%.",

    // Team
    "team.expertise": "Expertise",

    "team.facundo.role": "Data Scientist & Physicist",
    "team.facundo.bio":
      "Data Scientist with 3 years of experience in diverse projects. Facundo combines his physics background with data science expertise to extract meaningful insights from complex datasets and develop innovative solutions for clients across various industries.",
    "team.facundo.expertise.1": "Data Science",
    "team.facundo.expertise.2": "Machine Learning",
    "team.facundo.expertise.3": "Statistical Analysis",
    "team.facundo.expertise.4": "Python Programming",

    "team.agustin.role": "AI Engineer",
    "team.agustin.bio":
      "AI Engineer with 3 years of experience building products from the ground up. Agustin specializes in developing end-to-end AI solutions, from concept to deployment, with a focus on creating practical, scalable applications that solve real-world problems.",
    "team.agustin.expertise.1": "AI Development",
    "team.agustin.expertise.2": "Product Engineering",
    "team.agustin.expertise.3": "Deep Learning",
    "team.agustin.expertise.4": "MLOps",

    "team.emiliano.role": "Physicist & ML Specialist",
    "team.emiliano.bio":
      "Physicist with 1 year of experience training ML models. Emiliano applies his strong theoretical physics background to machine learning, specializing in developing and optimizing models that incorporate statistical principles to improve performance and interpretability.",
    "team.emiliano.expertise.1": "Machine Learning",
    "team.emiliano.expertise.2": "Model Training",
    "team.emiliano.expertise.3": "Statistical Physics",

    "team.andres.role": "Physicist & Backend Developer",
    "team.andres.bio":
      "Physicist and backend developer with 1 year of experience. Andres combines his physics knowledge with software engineering skills to build robust backend systems that power our AI applications, ensuring they're scalable, efficient, and reliable.",
    "team.andres.expertise.1": "Backend Development",
    "team.andres.expertise.2": "API Design",
    "team.andres.expertise.3": "System Architecture",

    // Technologies
    "tech.languages.title": "Languages & Frameworks",
    "tech.ai.title": "AI & LLM Tools",
    "tech.ml.title": "Machine Learning",
    "tech.deployment.title": "Deployment & Infrastructure",

    "tech.python.description": "Primary language for data science, ML, and backend development",
    "tech.fastapi.description": "High-performance API framework for building scalable web services",
    "tech.flask.description": "Lightweight web application framework for rapid prototyping",

    "tech.langchain.description": "Framework for building LLM-powered applications and workflows",
    "tech.pydantic.description": "Data validation using Python type annotations for robust applications",
    "tech.openai.description": "Integration with OpenAI's GPT models and API services",
    "tech.anthropic.description": "Integration with Anthropic's Claude models for advanced AI capabilities",
    "tech.multivendor.description": "Compatible with all major LLM providers for maximum flexibility",

    "tech.sklearn.description": "Traditional ML algorithms and comprehensive data analysis tools",
    "tech.tensorflow.description": "End-to-end machine learning platform for complex model development",
    "tech.pytorch.description": "Deep learning framework for research and production environments",

    "tech.docker.description": "Containerization platform for consistent deployment environments",
    "tech.aws.description": "Cloud infrastructure services including ECS, EC2, and Lambda",
    "tech.azure.description": "Managed container services and cloud computing platform",
    "tech.databases.description": "Robust database solutions for both relational and NoSQL needs",
    "tech.redis.description": "In-memory data store and caching solution for high performance",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.team": "Equipo",
    "nav.technologies": "Tecnologías",
    "nav.contact": "Contacto",

    // Home page
    "home.hero.title": "Transforma Tus Datos En",
    "home.hero.subtitle": "Soluciones Inteligentes",
    "home.hero.description":
      "Combinamos profunda experiencia en física con IA de vanguardia para resolver problemas complejos e impulsar la innovación en todas las industrias.",

    "home.services.title": "Nuestros Servicios Principales",
    "home.services.description":
      "Soluciones integrales de ciencia de datos e IA adaptadas a las necesidades de tu negocio",
    "home.services.button": "Ver Todos los Servicios",

    "home.projects.title": "Proyectos Destacados",
    "home.projects.description":
      "Descubre cómo hemos ayudado a las empresas a transformar sus operaciones con soluciones basadas en datos",
    "home.projects.button1": "Ver Todos los Proyectos",
    "home.projects.button2": "Nuestras Tecnologías",

    "home.about.title": "Acerca de Exdata",
    "home.about.description1":
      "Somos un equipo de físicos y científicos de datos apasionados por resolver problemas complejos a través de soluciones innovadoras de IA.",
    "home.about.description2":
      "Nuestro trasfondo único en física nos da una comprensión profunda del modelado matemático y análisis estadístico, permitiéndonos abordar desafíos que otros podrían encontrar insuperables.",
    "home.about.button": "Conoce Más Sobre Nosotros",

    "home.cta.title": "¿Listo para Transformar Tu Negocio?",
    "home.cta.description":
      "Hablemos sobre cómo nuestra experiencia en IA y ciencia de datos puede impulsar tu negocio hacia adelante.",
    "home.cta.button": "Comienza Hoy",

    // Services
    "service.analytics": "Análisis Avanzado",
    "service.dataStrategy": "Estrategia de Datos",
    "service.predictive": "Modelado Predictivo",

    "services.analytics.title": "Análisis Avanzado",
    "services.analytics.description":
      "Transforma datos en bruto en insights accionables con nuestras soluciones integrales de análisis.",
    "services.analytics.details":
      "Ayudamos a las empresas a desbloquear todo el potencial de sus datos a través de análisis estadístico avanzado, visualización de datos y soluciones de reportes personalizados.",

    "services.dataStrategy.title": "Estrategia y Arquitectura de Datos",
    "services.dataStrategy.description":
      "Construye una base de datos robusta que escale con las necesidades de tu negocio.",
    "services.dataStrategy.details":
      "Nuestro equipo diseña e implementa estrategias integrales de datos, desde la recolección y almacenamiento hasta pipelines de procesamiento y marcos de gobernanza.",

    "services.predictive.title": "Modelado Predictivo",
    "services.predictive.description":
      "Aprovecha el machine learning para pronosticar tendencias y optimizar la toma de decisiones.",
    "services.predictive.details":
      "Desarrollamos modelos predictivos personalizados que ayudan a las empresas a anticipar cambios del mercado, optimizar operaciones y reducir riesgos a través de pronósticos basados en datos.",

    "services.bi.title": "Inteligencia de Negocios",
    "services.bi.description": "Crea dashboards interactivos y reportes para insights de negocio en tiempo real.",
    "services.bi.details":
      "Transforma tus datos en historias visuales convincentes con nuestras soluciones de BI, incluyendo dashboards en tiempo real, reportes automatizados y análisis de autoservicio.",

    "services.ai.title": "Soluciones de IA",
    "services.ai.description": "Implementa tecnologías de IA de vanguardia para automatizar y mejorar tus procesos.",
    "services.ai.details":
      "Desde procesamiento de lenguaje natural hasta visión por computadora, desarrollamos soluciones de IA personalizadas que automatizan tareas complejas y proporcionan insights inteligentes.",

    "services.consulting.title": "Consultoría en Ciencia de Datos",
    "services.consulting.description": "Orientación experta para ayudarte a navegar tu viaje en ciencia de datos.",
    "services.consulting.details":
      "Nuestros consultores trabajan estrechamente con tu equipo para identificar oportunidades, desarrollar estrategias e implementar mejores prácticas para la toma de decisiones basada en datos.",

    // Projects
    "projects.filter.all": "Todos los Proyectos",

    "projects.roof.title": "Sistema de Detección de Techos",
    "projects.roof.category": "Visión por Computadora",
    "projects.roof.description":
      "Sistema de visión por computadora para detección de techos en imágenes satelitales, medición de área y clasificación de formas.",
    "projects.roof.challenge":
      "Una empresa de reparación de techos necesitaba identificar eficientemente clientes potenciales analizando imágenes satelitales para detectar techos que requieren mantenimiento.",
    "projects.roof.solution":
      "Desarrollamos un sistema de visión por computadora que detecta automáticamente techos en imágenes satelitales, mide su área y clasifica sus formas y condiciones.",
    "projects.roof.results":
      "El sistema aumentó la generación de leads de la empresa en un 45% mientras redujo el tiempo dedicado a la evaluación manual de propiedades en un 70%.",

    "projects.pharma.title": "Chatbot de Distribución Farmacéutica",
    "projects.pharma.category": "Asistente IA",
    "projects.pharma.description":
      "Chatbot impulsado por IA para responder preguntas sobre envíos y compras farmacéuticas.",
    "projects.pharma.challenge":
      "Un distribuidor farmacéutico necesitaba manejar eficientemente un alto volumen de consultas de clientes sobre envíos y compras.",
    "projects.pharma.solution":
      "Creamos un chatbot inteligente usando modelos de lenguaje grandes que podía responder con precisión preguntas sobre estado de pedidos, detalles de envío e información de productos.",
    "projects.pharma.results":
      "El chatbot redujo el tiempo de respuesta de horas a segundos, manejando el 85% de consultas rutinarias sin intervención humana y mejorando las puntuaciones de satisfacción del cliente en un 32%.",

    // Team
    "team.expertise": "Experiencia",

    "team.facundo.role": "Científico de Datos y Físico",
    "team.facundo.bio":
      "Científico de datos con 3 años de experiencia en proyectos diversos. Facundo combina su formación en física con experiencia en ciencia de datos para extraer insights significativos de conjuntos de datos complejos y desarrollar soluciones innovadoras para clientes en varias industrias.",
    "team.facundo.expertise.1": "Ciencia de Datos",
    "team.facundo.expertise.2": "Machine Learning",
    "team.facundo.expertise.3": "Análisis Estadístico",
    "team.facundo.expertise.4": "Programación Python",

    "team.agustin.role": "Ingeniero de IA",
    "team.agustin.bio":
      "Ingeniero de IA con 3 años de experiencia construyendo productos desde cero. Agustín se especializa en desarrollar soluciones de IA de extremo a extremo, desde el concepto hasta el despliegue, con enfoque en crear aplicaciones prácticas y escalables que resuelven problemas del mundo real.",
    "team.agustin.expertise.1": "Desarrollo de IA",
    "team.agustin.expertise.2": "Ingeniería de Productos",
    "team.agustin.expertise.3": "Deep Learning",
    "team.agustin.expertise.4": "MLOps",

    "team.emiliano.role": "Físico y Especialista en ML",
    "team.emiliano.bio":
      "Físico con 1 año de experiencia entrenando modelos de ML. Emiliano aplica su sólida formación en física teórica al machine learning, especializándose en desarrollar y optimizar modelos que incorporan principios estadísticos para mejorar el rendimiento y la interpretabilidad.",
    "team.emiliano.expertise.1": "Machine Learning",
    "team.emiliano.expertise.2": "Entrenamiento de Modelos",
    "team.emiliano.expertise.3": "Física Estadística",

    "team.andres.role": "Físico y Desarrollador Backend",
    "team.andres.bio":
      "Físico y desarrollador backend con 1 año de experiencia. Andrés combina su conocimiento en física con habilidades de ingeniería de software para construir sistemas backend robustos que alimentan nuestras aplicaciones de IA, asegurando que sean escalables, eficientes y confiables.",
    "team.andres.expertise.1": "Desarrollo Backend",
    "team.andres.expertise.2": "Diseño de APIs",
    "team.andres.expertise.3": "Arquitectura de Sistemas",

    // Technologies
    "tech.languages.title": "Lenguajes y Frameworks",
    "tech.ai.title": "Herramientas de IA y LLM",
    "tech.ml.title": "Machine Learning",
    "tech.deployment.title": "Despliegue e Infraestructura",

    "tech.python.description": "Lenguaje principal para ciencia de datos, ML y desarrollo backend",
    "tech.fastapi.description": "Framework de API de alto rendimiento para construir servicios web escalables",
    "tech.flask.description": "Framework de aplicación web ligero para prototipado rápido",

    "tech.langchain.description": "Framework para construir aplicaciones y flujos de trabajo impulsados por LLM",
    "tech.pydantic.description": "Validación de datos usando anotaciones de tipo Python para aplicaciones robustas",
    "tech.openai.description": "Integración con modelos GPT de OpenAI y servicios de API",
    "tech.anthropic.description": "Integración con modelos Claude de Anthropic para capacidades avanzadas de IA",
    "tech.multivendor.description": "Compatible con todos los principales proveedores de LLM para máxima flexibilidad",

    "tech.sklearn.description": "Algoritmos de ML tradicionales y herramientas integrales de análisis de datos",
    "tech.tensorflow.description":
      "Plataforma de machine learning de extremo a extremo para desarrollo de modelos complejos",
    "tech.pytorch.description": "Framework de deep learning para entornos de investigación y producción",

    "tech.docker.description": "Plataforma de contenedorización para entornos de despliegue consistentes",
    "tech.aws.description": "Servicios de infraestructura en la nube incluyendo ECS, EC2 y Lambda",
    "tech.azure.description": "Servicios de contenedores gestionados y plataforma de computación en la nube",
    "tech.databases.description": "Soluciones de base de datos robustas para necesidades relacionales y NoSQL",
    "tech.redis.description": "Almacén de datos en memoria y solución de caché para alto rendimiento",
  },
}

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
