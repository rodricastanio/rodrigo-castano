import { useState } from "react"
import { cn } from "../lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const skills = [
    {name: "HTML", level: 95, category: "frontend", logo: "/Images/html-5_5968267.png"},
    {name: "CSS", level: 95, category: "frontend", logo: "/Images/css-3_5968242.png"},
    {name: "Javascript", level: 95, category: "frontend", logo: "/Images/js_5968292.png"},
    {name: "React", level: 90, category: "frontend", logo: "/Images/molecule_10285707.png"},
    {name: "Next.js", level: 70, category: "frontend", logo: "/Images/icons8-next.js.svg"},
    {name: "Tailwind CSS", level: 90, category: "frontend", logo: "/Images/Tailwind CSS.png"},
    {name: "Typescript", level: 70, category: "frontend", logo: "/Images/typescript_5968381.png"},
    {name: "Python", level: 75, category: "frontend", logo: "/Images/python.png"},
    {name: "Vite", level: 80, category: "frontend", logo: "/Images/Vite.js.png"},

    {name: "Node.js", level: 90, category: "backend", logo: "/Images/programing_15484303.png"},
    {name: "Express.js", level: 80, category: "backend", logo: "/Images/icons8-express-js (1).svg"},
    {name: "MongoDB", level: 55, category: "backend", logo: "/Images/MongoDB.png"},
    {name: "Java", level: 40, category: "backend", logo: "/Images/Java.png"},

    {name: "Git/Github", level: 95, category: "herramientas", logo: "/Images/Git.png"},
    {name: "VS Code", level: 95, category: "herramientas", logo: "/Images/Visual Studio Code (VS Code).png"},
    {name: "Postman", level: 60, category: "herramientas", logo: "/Images/Postman.png"},
    {name: "Figma", level: 85, category: "herramientas", logo: "/Images/Figma.png"},
]

const categories = ["todo", "frontend", "backend", "herramientas"]

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("todo");

    const filteredSkills = skills.filter((skill) => activeCategory === "todo" || skill.category === activeCategory);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // animation happens only once
      });
    }, []);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Mis <span className="text-primary">Habilidades</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full trasnition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                        )}>
                           {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {filteredSkills.map((skill,key) => (
                    <div key={key} className="sm:bg-card sm:p-6 sm:rounded-lg sm:shadow-xs card-hover" >
                        
                        <div className="flex items-center bg-card p-4 sm:bg-none sm:p-0 rounded-full justify-center sm:space-x-6">
                            <div className="sm:h-6 sm:w-6 sm:mb-4">
                              <img className="h-9 sm:h-6" src={skill.logo} alt="" />
                            </div>

                            <div className="hidden sm:flex mb-4">
                              <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>

                        <div className="hidden sm:flex w-full bg-secondary/50 h-2 rounded-full overflow-hidden ">
                            <div className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s_ease-out" 
                              style={{width: skill.level + "%"}}
                            />
                        </div>

                        <div className="hidden sm:flex justify-end text-right mt-1">
                            <span className="text-sm text-muted-foregound">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}