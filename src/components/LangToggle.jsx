import { useLanguage } from "../lib/language-context"
import { cn } from "../lib/utils"
import { Languages } from "lucide-react"

export const LangToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "fixed top-12 md:top-2 right-14 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden text-foreground/70 hover:text-primary"
      )}
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Languages size={24} />
    </button>
  )
}
