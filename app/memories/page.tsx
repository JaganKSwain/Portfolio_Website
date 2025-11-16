import Navbar from '@/components/Navigation/Navbar'
import CircuitBoard from '@/components/Circuit/CircuitBoard'
import MemoryGallery from '@/components/Memories/MemoryGallery'
import { memoriesData } from '@/data/memories'

export default function MemoriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative pt-24 pb-16">
        <CircuitBoard />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-signal-neon to-signal-cyan bg-clip-text text-transparent">
            Memories
          </h1>
          <p className="text-center text-gray-400 mb-12">
            Seminars, Conferences & Professional Events
          </p>
          {memoriesData.length > 0 ? (
            <MemoryGallery memories={memoriesData} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No memories to display yet.</p>
              <p className="text-sm text-gray-500">
                Add your professional memories to the data/memories.ts file
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

