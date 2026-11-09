import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer/Footer'
import EducationSection from '@/components/Education/EducationSection'

export const metadata = {
  title: 'Education & Dual Degree | Jagan Kumar Swain',
  description: 'Academic background of Jagan Kumar Swain: B.Tech in Electronics and Communication Engineering at NIST University (CGPA 9.1) and BS in Data Science & Applications at IIT Madras (CGPA 8.1).',
}

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <div className="pt-16">
        <EducationSection />
      </div>
      <Footer />
    </main>
  )
}
