import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils";
import { useLanguage } from "../lib/language-context";
import { staggerContainer, fadeUp } from "../lib/animations";

const skills = [
    // FRONTEND
    { name: "HTML", level: 95, category: "frontend", logo: "/Images/html-5_5968267.png" },
    { name: "CSS", level: 95, category: "frontend", logo: "/Images/css-3_5968242.png" },
    { name: "Javascript", level: 95, category: "frontend", logo: "/Images/js_5968292.png" },
    { name: "Typescript", level: 85, category: "frontend", logo: "/Images/typescript_5968381.png" }, 
    { name: "React", level: 90, category: "frontend", logo: "/Images/molecule_10285707.png" },
    { name: "React Native", level: 85, category: "frontend", logo: "/Images/molecule_10285707.png" }, 
    { name: "Next.js", level: 70, category: "frontend", logo: "/Images/icons8-next.js.svg" },
    { name: "Tailwind CSS", level: 90, category: "frontend", logo: "/Images/Tailwind CSS.png" },
    { name: "Vite", level: 80, category: "frontend", logo: "/Images/Vite.js.png" },

    // BACKEND & DATABASES 
    { name: "Node.js", level: 90, category: "backend", logo: "/Images/programing_15484303.png" },
    { name: "Express.js", level: 85, category: "backend", logo: "/Images/icons8-express-js (1).svg" },
    { name: "PostgreSQL", level: 80, category: "backend", logo: "/Images/postgresql.png" },
    { name: "SQL", level: 80, category: "backend", logo: "/Images/sql.png" }, 
    { name: "Prisma ORM", level: 80, category: "backend", logo: "/Images/prisma.png" }, 
    { name: "Supabase / Firebase", level: 75, category: "backend", logo: "/Images/supabase.jpg" }, 
    { name: "Python", level: 75, category: "backend", logo: "/Images/python.png" },
    { name: "MongoDB", level: 55, category: "backend", logo: "/Images/MongoDB.png" },
    { name: "Java", level: 50, category: "backend", logo: "/Images/Java.png" }, 

    // TOOLS & INFRASTRUCTURE
    { name: "Git/Github", level: 95, category: "herramientas", logo: "/Images/Git.png" },
    { name: "Docker", level: 70, category: "herramientas", logo: "/Images/docker.png" }, 
    { name: "Postman", level: 80, category: "herramientas", logo: "/Images/Postman.png" }, 
    { name: "VS Code", level: 95, category: "herramientas", logo: "/Images/Visual Studio Code (VS Code).png" },
    { name: "Figma", level: 85, category: "herramientas", logo: "/Images/Figma.png" },
]

export const SkillsSection = () => {
    const { t } = useLanguage();
    const categories = [
        { key: "all", label: t("skills.all") },
        { key: "frontend", label: t("skills.frontend") },
        { key: "backend", label: t("skills.backend") },
        { key: "herramientas", label: t("skills.tools") },
    ]

    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleBars, setVisibleBars] = useState({});
    const barRefs = useRef({});

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    useEffect(() => {
        const observers = [];
        Object.entries(barRefs.current).forEach(([key, el]) => {
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleBars((prev) => ({ ...prev, [key]: true }));
                        observer.unobserve(el);
                    }
                },
                { threshold: 0.3 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, [filteredSkills]);

    return (
        <motion.section
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="py-24 px-4 relative bg-secondary/30 snap-section"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t("skills.title")} <span className="text-primary">{t("skills.titleHighlight")}</span>
                </motion.h2>

                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === cat.key
                                    ? "bg-primary text-primary-foreground gradient-border-glow"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary",
                            )}>
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                <motion.div variants={fadeUp} className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="glass rounded-2xl p-4 sm:p-6 card-hover">
                            <div className="flex flex-col items-center gap-2">
                                <img className="h-9 sm:h-8" src={skill.logo} alt={skill.name + " logo"} />
                                <h3 className="font-semibold text-sm sm:text-base">{skill.name}</h3>
                            </div>

                            <div className="mt-4 w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    ref={(el) => (barRefs.current[key] = el)}
                                    className="bg-primary h-2 rounded-full origin-left"
                                    style={{
                                        width: skill.level + "%",
                                        transform: visibleBars[key] ? "scaleX(1)" : "scaleX(0)",
                                        transition: "transform 1.5s ease-out",
                                    }}
                                />
                            </div>

                            <div className="flex justify-end mt-1">
                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}