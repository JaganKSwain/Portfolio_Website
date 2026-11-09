import Navbar from '@/components/Navigation/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import AboutSection from '@/components/About/AboutSection'
import PublicationsSection from '@/components/Publications/PublicationsSection'
import InteractiveLab from '@/components/InteractiveLab/InteractiveLab'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import ProjectsSection from '@/components/Project/ProjectsSection'
import SkillsSection from '@/components/Skills/SkillsSection'
import EducationSection from '@/components/Education/EducationSection'
import MentorSection from '@/components/Mentor/MentorSection'
import CabinetSection from '@/components/Cabinet/CabinetSection'
import ContactSection from '@/components/Contact/ContactSection'
import Footer from '@/components/Footer/Footer'
import SignalTraceCanvas from '@/components/Circuit/SignalTraceCanvas'

export const metadata = {
  title: 'Jagan Kumar Swain | Electronics & Communication Engineer • AI/ML & VLSI Researcher',
  description:
    'Portfolio of Jagan Kumar Swain — Dual Degree in ECE (NIST University, CGPA 9.1) and Data Science (IIT Madras, CGPA 8.1). First author on 15-architecture retinal DL benchmark (IISER Berhampur) and 10T SRAM Compute-In-Memory macro in SkyWater 130nm. Recipient of ₹50,000 Defence R&D Grant.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-primary/25 selection:text-primary relative overflow-x-hidden">
      {/* Background Ambient Signal Bus Canvas */}
      <SignalTraceCanvas />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <PublicationsSection />
      <InteractiveLab />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <MentorSection />
      <CabinetSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
