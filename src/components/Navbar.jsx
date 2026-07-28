import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../lib/language-context";

export const Navbar = () => {
    const { t } = useLanguage();
    const navItems = [
        {name: t("nav.home"), url: '#home'},
        {name: t("nav.about"), url: '#about'},
        {name: t("nav.skills"), url: '#skills'},
        {name: t("nav.projects"), url: '#projects'},
        {name: t("nav.contact"), url: '#contact'},
    ];
    const[isScrolled,setIsScrolled] = useState(false);
    const[isMenuOpen,setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    }, [])
    

    return <nav className= {cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-xl shadow-xs" : "py-5 bg-transparent"
    )}>
        <div className="container flex items-center justify-between md:justify-around">
            <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-xl text-primary flex items-center"
                href="#home"
            >
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Rodrigo Castaño</span> {t("nav.portfolio")}
                </span>
            </motion.a>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex space-x-8"
            >
                {navItems.map((item, key) => (
                    <a href={item.url} key={key} className="text-foreground/80 hover:text-primary transition-colors duration-500">
                        {item.name}
                    </a>
                ))}
            </motion.div>

            <button onClick={()=> setIsMenuOpen((prev)=> !prev)} 
                    className="md:hidden p-2 mr-8 text-foreground z-50 cursor-pointer"
                    aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden")}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                            className="flex flex-col space-y-8 text-xl"
                        >
                            {navItems.map((item, key) => (
                                <motion.a
                                    key={key}
                                    href={item.url}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: key * 0.1 }}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-500"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </nav>
}