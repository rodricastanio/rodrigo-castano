import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutMe = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // animation happens only once
        });
    }, []);

    return <section id="about" className="py-24 px-4 relative">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Sobre <span className="text-primary">Mi</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Aspiring Software Engineer & Full Stack Web Dev</h3>

                    <p className="text-muted-foreground md:text-left">
                        Soy estudiante de 4to año de Ingeniería en Sistemas, apasionado por crear soluciones digitales completas que unen funcionalidad y diseño. Mi perfil combina una sólida base técnica en desarrollo Full Stack con un enfoque detallista en UI/UX. Tengo experiencia construyendo aplicaciones web y móviles escalables utilizando tecnologías como React, React Native y Node.js.                    </p>

                    <p className="text-muted-foreground md:text-left">
                        Me apasiona especialmente el diseño de bases de datos y la arquitectura de la información. Disfruto transformar requerimientos complejos en interfaces intuitivas y código eficiente, aplicando siempre buenas prácticas y metodologías ágiles.                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Estemos en Contacto
                        </a>

                        <a href="/Resume/CastañoRodrigo.pdf" download className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Descargar CV
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