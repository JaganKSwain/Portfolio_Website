import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer/Footer'
import MemoryGallery from '@/components/Memories/MemoryGallery'
import { memoriesData } from '@/data/memories'

export const metadata = {
  title: 'Conferences & Milestones | Jagan Kumar Swain',
  description: 'Conferences, hackathons, and technical presentations attended by Jagan Kumar Swain.',
}

export default function MemoriesPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <div className="relative pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
              <span>EVENTS & HACKATHONS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              Conferences & <span className="text-gradient">Milestones</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Memorable national hackathon finals, defense summits, and open-source conventions.
            </p>
          </div>

          <MemoryGallery memories={memoriesData} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
