import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Spott",
    description: "Spott es una plataforma web que conecta organizadores con asistentes. Permite a las empresas gestionar y promocionar eventos centralizando el feedback, mientras que los usuarios descubren experiencias personalizadas según sus gustos, ubicación y música, gracias a la integración con Spotify.",
    image: "/Projects/project-4.jpeg",
    tags: ["React.js", "React Router", "TailwindCSS", "Vite", "node.js", "express.js", "typescript", "Prisma ORM", "supabase", "Zod", "JWT", "postgreSQL", "Docker"],
    url: "https://utn-ds-25-grupo-05.vercel.app/",
    git: "https://github.com/IstFranco/UTN-DS25-Grupo-05",
  },

  {
    id: 2,
    title: "Clima AR",
    description:
      "Aplicación web interactiva que consume APIs externas para brindar información climática en tiempo real de distintas ubicaciones, diseño responsive adaptable, interfaz moderna e intuitiva, enfoque en la experiencia del usuario.",
    image: "/Projects/project-2.jpg",
    tags: [
      "Node.js",
      "HTML",
      "Javascript",
      "CSS",
      "React.js",
      "Vite",
    ],
    url: "https://clima-ar-rc.vercel.app/",
    git: "https://github.com/rodricastanio/clima-ar",
  },

  {
    id: 3,
    title: "Malla Curricular Interactiva",
    description:
      "Aplicación móvil desarrollada con React Native y Expo para visualizar el plan de estudios de Ingeniería en Sistemas. Permite filtrar por año, correlatividades y estado de cursada, con sistema de login y una interfaz amigable y colorida.",
    image: "/Projects/project-1.png",
    tags: ["Javascript", "HTML", "React.js", "Vite", "CSS"],
    url: "https://malla-utn-sistemas.vercel.app/",
    git: "https://github.com/rodricastanio/malla-utn-ing-sistemas",
  },

  {
    id: 4,
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
    id: 5,
    title: "Gestion de turnos Psicologicos",
    description:
      "Plataforma web integral para optimizar la captación de pacientes y la gestión de turnos en consultorios psicológicos. Centraliza la oferta de servicios y permite al paciente solicitar citas mediante un calendario inteligente.",
    image: "/Projects/project-5.png",
    tags: [
      "HTML",
      "JavaScript",
      "CSS",
    ],
    url: "https://nicolas-francioli.vercel.app/",
    git: "https://github.com/rodricastanio/NicolasFrancioli",
  },
  {
    id: 6,
    title: "Invitacion virtual de evento",
    description: 
    "pagina web que sirve como invitacion virtual para un evento especial, con informacion relevante, galeria de imagenes y confirmacion de asistencia.",
    image: "/Projects/project-6.jpeg",
    tags: [
      "HTML",
      "JavaScript",
      "CSS",
    ],
    url: "https://invitacion-virtual-xv.vercel.app/",
    git: "https://github.com/rodricastanio/invitacion-virtual",
  }

];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation happens only once
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyectos <span className="text-primary">Destacados</span>
        </h2>

        <p className="txet-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estos proyectos reflejan mi enfoque en escribir código limpio y fácil de mantener, así como en crear interfaces intuitivas. Me he centrado en soluciones prácticas que equilibran rendimiento, usabilidad y fiabilidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
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
                    Enlace En Vivo <ArrowUpRight size={16} />
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
            Chequea Mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
