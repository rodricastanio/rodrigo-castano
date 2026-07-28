import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from "../lib/language-context";

export const AboutMe = () => {
    const { t } = useLanguage();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return <section id="about" className="py-24 px-4 relative">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                {t("about.title")} <span className="text-primary">{t("about.titleHighlight")}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">{t("about.subtitle")}</h3>

                    <p className="text-muted-foreground md:text-left">
                        {t("about.p1")}
                    </p>

                    <p className="text-muted-foreground md:text-left">
                        {t("about.p2")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {t("about.cta")}
                        </a>

                        <a href="/Resume/RodrigoCastanoEN.pdf" download className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {t("about.downloadCV")}
                        </a>
                    </div>
                </div>

                <div className='bg-card rounded-lg overflow-hidden shadow-xs card-hover flex justify-center'>
                    <img className='h-100 overflow-hidden object-cover' src="/Images/Profile-Img-1.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
}