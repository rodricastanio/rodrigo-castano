import { Github, Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils";
import emailjs from 'emailjs-com';
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from "../lib/language-context";

export const ContactMe = () =>{
    const { t } = useLanguage();
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const SERVICE_ID = "service_6uu0u4c";
    const TEMPLATE_ID = "template_nov41ge";
    const PUBLIC_KEY = "Z1BCHklq9W8Px8M_M";
    const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target, PUBLIC_KEY)
  .then(
    (result) => alert(t("contact.alertSuccess")),
    setFormData({name:"", email:"", message:""})
  )
  .catch(() => alert(t("contact.alertError")))
};

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
}, []);


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               {t("contact.title")} <span className="text-primary">{t("contact.titleHighlight")}</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               {t("contact.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-6">{t("contact.infoTitle")}</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">{t("contact.email")}</h4>
                                <a href="mailto:rodrigodcasta@gmail.com"
                                target="_blank"
                                  className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
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
                                <a href="https://www.linkedin.com/in/rodrigocastano"
                                 target="_blank"
                                  className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
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
                                <a
                                  className="text-muted-foreground text-left"
                                >
                                    {t("contact.locationValue")}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">{t("contact.connectTitle")}</h4>
                        <div className="flex space-x-4 justify-center">
                          <a className="hover:text-primary" target="_blank" href="https://github.com/rodricastanio">
                            <Github/>
                          </a>

                          <a className="hover:text-primary" target="_blank" href="https://www.instagram.com/rorocassti">
                            <Instagram/>
                          </a>

                          <a className="hover:text-primary" target="_blank" href="https://twitter.com/rorocassti">
                            <Twitter/>
                          </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">{t("contact.formTitle")}</h3>

                    <form onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="name">{t("contact.formName")}</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                              placeholder={t("contact.formNamePlaceholder")}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="email">{t("contact.formEmail")}</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                              placeholder={t("contact.formEmailPlaceholder")}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="message">{t("contact.formMessage")}</label>
                            <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                              placeholder={t("contact.formMessagePlaceholder")}
                            />
                        </div>

                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            {t("contact.submit")} <Send size={16}/>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
}