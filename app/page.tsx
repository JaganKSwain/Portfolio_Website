import Navbar from '@/components/Navigation/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import AboutSection from '@/components/About/AboutSection'
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
  title: 'Jagan Kumar Swain | Electronics & Communication Engineer • AI/ML & Embedded Systems',
  description:
    'Portfolio of Jagan Kumar Swain — Dual Degree in ECE (NIST University, CGPA 9.1) and Data Science (IIT Madras, CGPA 8.1). Researcher at IISER Berhampur, former Micro Drone Intern at PE Geometry, and ₹50,000 Defence Grant Recipient.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-primary/25 selection:text-primary relative overflow-x-hidden">
      {/* Background Ambient Signal Bus Canvas */}
      <SignalTraceCanvas />

      <Navbar />
      <HeroSection />
      <AboutSection />
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
