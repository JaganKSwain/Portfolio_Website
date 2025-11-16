'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navigation/Navbar'
import CircuitBoard from '@/components/Circuit/CircuitBoard'
import AchievementCard from '@/components/Cabinet/AchievementCard'
import { achievementsData, Achievement } from '@/data/achievements'

const filterTypes = ['All', 'Award', 'Certification', 'Competition', 'Publication']

export default function CabinetPage() {
  const [selectedType, setSelectedType] = useState('All')

  const filteredAchievements: Achievement[] =
    selectedType === 'All'
      ? achievementsData
      : achievementsData.filter((a) => a.type === selectedType)

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative pt-24 pb-16">
        <CircuitBoard />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-signal-neon to-signal-cyan bg-clip-text text-transparent">
              Cabinet
            </h1>
            <p className="text-center text-gray-400 mb-8">
              Achievements, Certificates & Recognition
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedType === type
                    ? 'bg-signal-neon text-circuit-dark font-semibold'
                    : 'bg-pcb-green/50 text-gray-300 hover:bg-pcb-green hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredAchievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>

          {filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No achievements to display yet.</p>
              <p className="text-sm text-gray-500">
                Add your achievements to the data/achievements.ts file
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

