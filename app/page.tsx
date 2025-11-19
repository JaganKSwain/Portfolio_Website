import Navbar from '@/components/Navigation/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import AboutSection from '@/components/About/AboutSection'
import SkillsSection from '@/components/Skills/SkillsSection'
import ProjectsSection from '@/components/Project/ProjectsSection'
import ContactSection from '@/components/Contact/ContactSection'
import Footer from '@/components/Footer/Footer'
import JourneySection from '@/components/Journey/JourneySection'
import ParticlesBackground from '@/components/Background/ParticlesBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <ParticlesBackground />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <JourneySection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
