import { ThemeToggle } from '../components/ThemeToggle'
import { LangToggle } from '../components/LangToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutMe } from '../components/AboutMe'
import { StatsSection } from '../components/StatsSection'
import { SkillsSection } from '../components/SkillsSection'
import { Projects } from '../components/Projects'
import { ContactMe } from '../components/ContactMe'
import { Footer } from '../components/Footer'
import { ScrollProgress } from '../components/ScrollProgress'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <ScrollProgress/>
        <ThemeToggle/>
        <LangToggle/>
        <StarBackground/>
        <Navbar/>
        <main>
          <HeroSection/>
          <AboutMe/>
          <StatsSection/>
          <SkillsSection/>
          <Projects/>
          <ContactMe/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home