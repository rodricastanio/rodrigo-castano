import { ArrowUp } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export const Footer = () => {
    const { t } = useLanguage()
    return <footer className="py-4 px-4 bg-card relative border-t border-border mt-12  flex items-center flex-wrap justify-around">
        <p className="text-sm text-muted-foreground"> 
            &copy; {new Date().getFullYear()} Rodrigo Castaño {t("footer.rights")}
        </p>

        <a href="#home" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <ArrowUp/>
        </a>
    </footer>
}