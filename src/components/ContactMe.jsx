import { Github, Instagram, Linkedin, Mail, MapPin, Send, Twitter, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { useLanguage } from "../lib/language-context";
import { Toast } from "./Toast";
import { staggerContainer, fadeUp, fadeLeft } from "../lib/animations";

export const ContactMe = () =>{
    const { t } = useLanguage();
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then(() => {
          setToast({ message: t("contact.alertSuccess"), type: "success" });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          setToast({ message: t("contact.alertError"), type: "error" });
        })
        .finally(() => setIsSubmitting(false));
    };


    return (
        <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="py-24 px-4 relative bg-secondary/30 snap-section"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t("contact.title")} <span className="text-primary">{t("contact.titleHighlight")}</span>
                </motion.h2>

                <motion.p variants={fadeUp} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t("contact.description")}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div variants={fadeLeft} className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6">{t("contact.infoTitle")}</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">{t("contact.email")}</h4>
                                    <a href="mailto:rodrigodcasta@gmail.com" target="_blank"
                                        className="text-muted-foreground text-left hover:text-primary transition-colors duration-300">
                                        rodrigodcasta@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">{t("contact.linkedin")}</h4>
                                    <a href="https://www.linkedin.com/in/rodrigocastano" target="_blank"
                                        className="text-muted-foreground text-left hover:text-primary transition-colors duration-300">
                                        Rodrigo Daniel Castaño
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">{t("contact.location")}</h4>
                                    <span className="text-muted-foreground text-left">{t("contact.locationValue")}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">{t("contact.connectTitle")}</h4>
                            <div className="flex space-x-4 justify-center">
                                <a className="hover:text-primary" target="_blank" href="https://github.com/rodricastanio"><Github/></a>
                                <a className="hover:text-primary" target="_blank" href="https://www.instagram.com/rorocassti"><Instagram/></a>
                                <a className="hover:text-primary" target="_blank" href="https://twitter.com/rorocassti"><Twitter/></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="glass-dark rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-6">{t("contact.formTitle")}</h3>

                        <form onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-left" htmlFor="name">{t("contact.formName")}</label>
                                <input type="text" id="name" name="name" value={formData.name}
                                    onChange={(e) => setFormData({...formData, name:e.target.value})} required
                                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder={t("contact.formNamePlaceholder")}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-left" htmlFor="email">{t("contact.formEmail")}</label>
                                <input type="email" id="email" name="email" value={formData.email}
                                    onChange={(e) => setFormData({...formData, email:e.target.value})} required
                                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder={t("contact.formEmailPlaceholder")}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-left" htmlFor="message">{t("contact.formMessage")}</label>
                                <textarea id="message" name="message" value={formData.message}
                                    onChange={(e) => setFormData({...formData, message:e.target.value})} required
                                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder={t("contact.formMessagePlaceholder")}
                                />
                            </div>

                            <button type="submit" disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                    isSubmitting && "opacity-70 cursor-not-allowed")}>
                                {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                                {isSubmitting ? "Enviando..." : t("contact.submit")}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            {toast && (
                <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
            )}
        </motion.section>
    )
}