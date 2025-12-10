import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    {name: 'Home', url: '#home'},
    {name: 'Sobre mi', url: '#about'},
    {name: 'Habilidades', url: '#skills'},
    {name: 'Proyectos', url: '#projects'},
    {name: 'Contacto', url: '#contact'},
];

export const Navbar = () => {
    const[isScrolled,setIsScrolled] = useState(true);
    const[isMenuOpen,setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    }, [])
    

    return <nav className= {cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur shadow-xs" : "py-5"
    )}>
        <div className="container flex items-center justify-between md:justify-around">
            <a className="font-bold text-xl text-primary flex items-center" href="#home">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Rodrigo Castaño</span> Portafolio
                </span>
            </a>

            {/* Desktop Nav */}
               <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a href={item.url} key={key} className="text-foreground/80 hover:text-primary transition-colors duration-500">
                        {item.name}
                    </a>
                ))}
               </div>


            {/* Mobile Nav */}

            <button onClick={()=> setIsMenuOpen((prev)=> !prev)} 
                    className="md:hidden p-2 mr-8 text-foreground z-50 cursor-pointer"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

            
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
               <div className=" flex flex-col space-y-8 text-xl">
                  {navItems.map((item, key) => (
                    <a href={item.url} key={key} className="text-foreground/80 hover:text-primary transition-colors duration-500" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                   ))}
               </div>
            </div>
        </div>
    </nav>
}