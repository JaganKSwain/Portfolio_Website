'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navigation/Navbar'
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
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="relative pt-24 pb-16">
        {/* Grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">
              <span className="text-gradient">Cabinet</span>
            </h1>
            <p className="text-center text-gray-500 mb-2 text-sm">
              Achievements, Certificates & Recognition
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${selectedType === type
                    ? 'bg-primary/10 border-primary/40 text-primary shadow-emerald'
                    : 'bg-surface/50 border-glass-border text-gray-500 hover:text-gray-300 hover:border-primary/20'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {filteredAchievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>

          {filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-2 font-mono text-sm">No achievements to display.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
