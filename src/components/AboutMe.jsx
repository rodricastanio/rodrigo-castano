import { motion } from "framer-motion"
import { useLanguage } from "../lib/language-context"
import { staggerContainer, fadeLeft, fadeRight, fadeUp } from "../lib/animations"

export const AboutMe = () => {
    const { t } = useLanguage();

    return (
        <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="py-24 px-4 relative snap-section"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t("about.title")} <span className="text-primary">{t("about.titleHighlight")}</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={fadeLeft} className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t("about.subtitle")}</h3>
                        <p className="text-muted-foreground md:text-left">{t("about.p1")}</p>
                        <p className="text-muted-foreground md:text-left">{t("about.p2")}</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">{t("about.cta")}</a>
                            <a
                                href="/Resume/RodrigoCastanoEN.pdf"
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                {t("about.downloadCV")}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeRight} className="glass rounded-2xl overflow-hidden flex justify-center p-2">
                        <img
                            className="h-100 object-cover rounded-xl"
                            src="/Images/Profile-Img-1.jpg"
                            alt="Foto de perfil de Rodrigo Castaño"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}