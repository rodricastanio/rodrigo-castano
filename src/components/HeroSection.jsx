import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "../lib/language-context"
import { Typewriter } from "./Typewriter"
import { letterReveal, staggerContainer } from "../lib/animations"

const HeroCanvas = lazy(() => import("./HeroCanvas").then((m) => ({ default: m.HeroCanvas })))

export const HeroSection = () => {
    const { t, language } = useLanguage()

    const greeting = t("hero.greeting") + " "
    const name = t("hero.name")
    const lastName = t("hero.lastName")

    const subtitleTexts = language === "es"
        ? [
            "Estudiante de Ingeniería en Sistemas",
            "Full Stack Developer (Backend Focus)",
            "Arquitectura de datos escalable",
        ]
        : [
            "Systems Engineering Student",
            "Full Stack Developer (Backend Focus)",
            "Scalable data architecture",
        ]

    return (
        <section id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
            <Suspense fallback={<div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent" />}>
                <HeroCanvas />
            </Suspense>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                        <span className="inline-flex flex-wrap justify-center gap-x-2">
                            {greeting.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterReveal}
                                    className="inline-block"
                                    style={{ textShadow: "0 0 30px rgba(26,140,255,0.15)" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            {name.split("").map((char, i) => (
                                <motion.span
                                    key={`n-${i}`}
                                    custom={i + greeting.length}
                                    variants={letterReveal}
                                    className="inline-block text-primary"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            <motion.span
                                custom={greeting.length + name.length + 1}
                                variants={letterReveal}
                                className="inline-block text-gradient ml-2"
                            >
                                {lastName}
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        custom={greeting.length + name.length + lastName.length + 5}
                        variants={letterReveal}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto h-8"
                    >
                        <Typewriter texts={subtitleTexts} speed={60} pause={2500} />
                    </motion.p>

                    <motion.div
                        custom={greeting.length + name.length + lastName.length + 10}
                        variants={letterReveal}
                        className="flex flex-col space-y-5 items-center justify-center pt-4"
                    >
                        <a href="#projects" className="cosmic-button text-lg px-8 py-3">
                            {t("hero.cta")}
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center"
            >
                <span className="text-sm text-muted-foreground mb-2">{t("hero.scroll")}</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="h-5 w-5 text-primary" />
                </motion.div>
            </motion.div>
        </section>
    )
}