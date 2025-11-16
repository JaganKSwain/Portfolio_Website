import Navbar from '@/components/Navigation/Navbar'
import CircuitBoard from '@/components/Circuit/CircuitBoard'
import SkillRadar from '@/components/Skills/SkillRadar'
import { skillsData } from '@/data/skills'

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative pt-24 pb-16">
        <CircuitBoard />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-signal-neon to-signal-cyan bg-clip-text text-transparent">
            Skills
          </h1>
          <p className="text-center text-gray-400 mb-12">
            Technologies and tools I work with
          </p>
          <div className="max-w-4xl mx-auto">
            <SkillRadar skills={skillsData} />
          </div>
        </div>
      </div>
    </main>
  )
}

