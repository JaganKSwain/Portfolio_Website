import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer/Footer'
import CabinetSection from '@/components/Cabinet/CabinetSection'

export const metadata = {
  title: 'Cabinet & Achievements | Jagan Kumar Swain',
  description: 'Grants, awards, hackathon recognitions, and professional certifications earned by Jagan Kumar Swain.',
}

export default function CabinetPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <div className="pt-16">
        <CabinetSection />
      </div>
      <Footer />
    </main>
  )
}
