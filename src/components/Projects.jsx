import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Softude - Website Landing Page",
    description:
      "Softude is a global IT & digital-services company that offers enterprise-level solutions such as web and mobile app development, digital transformation, AI & cloud services, ",
    image: "/Projects/Softude.png",
    tags: ["React.js", "Framer Motion", "TailwindCSS", "Vite"],
    url: "https://softude.netlify.app/",
    git: "https://github.com/abhicodes01/Softude_Redesign_LandingPage",
  },

  {
    id: 2,
    title: "Mech2Door",
    description:
      "A full-stack MERN web app connecting users with verified local mechanics, featuring real-time booking, admin verification, and secure authentication for trusted on-demand service.",
    image: "/Projects/Mech2Door.png",
    tags: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "PostMan",
      "TailwindCSS",
      "React.js",
    ],
    url: "#",
    git: "#",
  },

  {
    id: 3,
    title: "VirtualR - Developer Tools Website",
    description:
      "A dynamic and responsive virtual reality showcase built with React, featuring sleek UI and interactive components.",
    image: "/Projects/VirtualR.png",
    tags: ["Javascript", "TailwindCSS", "React.js", "Vite"],
    url: "https://virtualr-react.netlify.app/",
    git: "#",
  },

  {
    id: 4,
    title: "Jarvis - AI Personal Assistant",
    description:
      "Jarvis listens to voice commands, responds in real-time with speech output, and features a dynamic 3D animated interface for an immersive experience.",
    image: "/Projects/Jarvis.png",
    tags: [
      "React.js",
      "TailwindCSS",
      "Three.js",
      "Gemini API",
      "SpeechRecognition",
    ],
    url: "#",
    git: "https://github.com/abhicodes01/voice-assistant-jarvis",
  },

  {
    id: 5,
    title: "SynergyTop - Website Landing Page",
    description:
      "SynergyTop is presented as a full-service IT agency offering services such as custom software development, web development, eCommerce & mobile-app development",
    image: "/Projects/SynergyTop.png",
    tags: ["React.js", "TailwindCSS", "Framer Motion", "Vite"],
    url: "https://synergytop.netlify.app/",
    git: "https://github.com/abhicodes01/StrategyTop_Redesign_LandingPage",
  },
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
                    href={project.git}
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
            href="https://github.com/abhicodes01"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Chequea Mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
