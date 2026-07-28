import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../lib/language-context";
import { ProjectModal } from "./ProjectModal";
import { staggerContainer, fadeUp } from "../lib/animations";

const projects = [
  {
    id: 1,
    title: "MindGuild (Coming Soon)",
    description: "Plataforma móvil gamificada en desarrollo diseñada para fomentar el estudio colaborativo. Participo en el equipo de desarrollo colaborando en el diseño y la estructuración de la arquitectura mobile con React Native y TypeScript. Co-coordino la planificación e integración de servicios en la nube con Supabase y Firebase para lograr una sincronización de datos eficiente en tiempo real y una autenticación sólida de los usuarios.",
    image: "/Projects/project-1.png", 
    tags: ["React Native", "typescript", "supabase", "Firebase", "Android Studio"],
    url: "#", 
    git: "https://github.com/EstebanT1112/MindGuild", 
  },
  {
    id: 2,
    title: "AuditGuard",
    description: "GitHub Action de código abierto para auditoría automatizada de seguridad en repositorios JavaScript/TypeScript. Combina 3 motores de análisis (ESLint + Semgrep + npm audit) en un pipeline secuencial, genera reportes bilingües EN/ES en Markdown, los publica como comentarios en PRs y permite auto-fix con PRs automáticas. Todo sin cuentas externas ni API keys, directamente en el runner de GitHub.",
    image: "/Projects/project-2.png",
    tags: ["TypeScript", "GitHub Actions", "ESLint", "Semgrep", "SAST", "Seguridad", "CI/CD"],
    url: "#",
    git: "https://github.com/rodricastanio/AuditGuard",
  },
  {
    id: 3,
    title: "Crónicas de Tinta",
    description:
      "Librería virtual personal llamada 'Crónicas de Tina', que permite búsqueda avanzada, filtros personalizados y carrito de compras. Desarrollada con React para una experiencia de usuario rápida y amigable.",
    image: "/Projects/project-3.png",
    tags: [
      "React.js",
      "TailwindCSS",
      "HTML",
      "TypeScript",
      "Express.js",
      "Prisma",
    ],
    url: "#",
    git: "https://github.com/rodricastanio/UTN-DS25-practicas/tree/main/react-con-api",
  },
  {
    id: 4,
    title: "Spott",
    description: "Plataforma web desarrollada en equipo para la gestión y optimización de eventos. Colaboré en el diseño e implementación de la base de datos relacional con PostgreSQL y Prisma ORM, asegurando la integridad de los datos. Participé activamente en la construcción del ecosistema backend utilizando Node.js y Express, integrando de forma asincrónica la API externa de Spotify para personalizar la experiencia según los gustos musicales de los usuarios, y aplicando Docker para estandarizar los entornos de desarrollo del equipo.",
    image: "/Projects/project-4.jpeg",
    tags: ["node.js", "typescript", "postgreSQL", "Prisma ORM", "Docker", "supabase", "express.js", "Zod", "JWT", "React.js", "React Router", "TailwindCSS", "Vite"],
    url: "https://utn-ds-25-grupo-05.vercel.app/",
    git: "https://github.com/IstFranco/UTN-DS25-Grupo-05",
  },
  {
    id: 5,
    title: "Clima AR",
    description: "Desarrollo individual de una aplicación web enfocada en el consumo e integración eficiente de APIs climáticas externas en tiempo real. El proyecto se centró en la optimización de peticiones HTTP para asegurar respuestas inmediatas, aplicando un diseño modular de componentes reutilizables en React.",
    image: "/Projects/project-5.jpg",
    tags: ["Node.js", "Javascript", "React.js", "Vite", "HTML", "CSS"],
    url: "https://clima-ar-rc.vercel.app/",
    git: "https://github.com/rodricastanio/clima-ar",
  },
  {
    id: 6,
    title: "Malla Curricular Interactiva",
    description: "Aplicación móvil nativa desarrollada de forma individual para el seguimiento del progreso académico en Ingeniería en Sistemas. Diseñé e implementé de forma autónoma la lógica de negocio local que calcula dinámicamente las correlatividades, los filtros por año de carrera y el estado de las cursadas, estructurando una interfaz limpia y optimizada para el rendimiento en dispositivos móviles mediante Expo.",
    image: "/Projects/project-6.png",
    tags: ["React Native", "Expo", "Javascript", "HTML", "CSS"],
    url: "https://malla-utn-sistemas.vercel.app/",
    git: "https://github.com/rodricastanio/malla-utn-ing-sistemas",
  }
];

const techIcons = {
  "React": "/Images/molecule_10285707.png",
  "React.js": "/Images/molecule_10285707.png",
  "React Native": "/Images/molecule_10285707.png",
  "Node.js": "/Images/programing_15484303.png",
  "TypeScript": "/Images/typescript_5968381.png",
  "typescript": "/Images/typescript_5968381.png",
  "Javascript": "/Images/js_5968292.png",
  "JavaScript": "/Images/js_5968292.png",
  "HTML": "/Images/html-5_5968267.png",
  "CSS": "/Images/css-3_5968242.png",
  "TailwindCSS": "/Images/Tailwind CSS.png",
  "Tailwind CSS": "/Images/Tailwind CSS.png",
  "Docker": "/Images/docker.png",
  "PostgreSQL": "/Images/postgresql.png",
  "postgreSQL": "/Images/postgresql.png",
  "Prisma ORM": "/Images/prisma.png",
  "Prisma": "/Images/prisma.png",
  "Firebase": "/Images/supabase.jpg",
  "supabase": "/Images/supabase.jpg",
  "Express.js": "/Images/icons8-express-js (1).svg",
  "express.js": "/Images/icons8-express-js (1).svg",
  "GitHub Actions": "/Images/Git.png",
  "Vite": "/Images/Vite.js.png",
  "Expo": "/Images/Vite.js.png",
}

function TiltCard({ children, className, onClick }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px * 20)
    y.set(-py * 20)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ perspective: 1200 }}
      className={className}
    >
      <motion.div
        style={{ rotateX: y, rotateY: x }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const translatedProjects = projects.map((project, index) => ({
    ...project,
    title: t("projectsData." + index + ".title"),
    description: t("projectsData." + index + ".description"),
  }))

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="py-24 px-4 relative snap-section"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.title")} <span className="text-primary">{t("projects.titleHighlight")}</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.description")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedProjects.map((project, key) => (
            <TiltCard
              key={key}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <div className="glass rounded-2xl overflow-hidden h-full group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 text-left">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground">
                        {techIcons[tag] && (
                          <img src={techIcons[tag]} alt="" className="w-3.5 h-3.5" />
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-xs mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex justify-between items-center" onClick={(e) => e.stopPropagation()}>
                    {project.url && project.url !== "#" ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold transition-all duration-300 hover:shadow-[0_0_10px_rgba(26,140,255,0.4)]">
                        {t("projects.liveLink")} <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs cursor-default">Coming Soon</span>
                    )}
                    <a href={project.git} target="_blank" rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors duration-300">
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

        <motion.div variants={fadeUp} className="text-center mt-12">
          <a target="_blank" href="https://github.com/rodricastanio"
            className="cosmic-button w-fit flex items-center mx-auto gap-2">
            {t("projects.checkGithub")} <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
