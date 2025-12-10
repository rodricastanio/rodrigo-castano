import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutMe } from '../components/AboutMe'
import { SkillsSection } from '../components/SkillsSection'
import { Projects } from '../components/Projects'
import { ContactMe } from '../components/ContactMe'
import { Footer } from '../components/Footer'


const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle */}
        <ThemeToggle/>
        {/* Background Effects */}
        <StarBackground/>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection/>
          <AboutMe/>
          <SkillsSection/>
          <Projects/>
          <ContactMe/>
        </main>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home