import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguage } from "../lib/language-context";

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

export const Projects = () => {
  const { t } = useLanguage();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const translatedProjects = projects.map((project, index) => ({
    ...project,
    title: t("projectsData." + index + ".title"),
    description: t("projectsData." + index + ".description"),
  }))

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.title")} <span className="text-primary">{t("projects.titleHighlight")}</span>
        </h2>

        <p className="txet-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover trasnition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-left font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-left text-xs mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1"
                  >
                    {t("projects.liveLink")} <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.git} target="_blank"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/rodricastanio"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            {t("projects.checkGithub")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
