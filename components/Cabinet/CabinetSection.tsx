'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AchievementCard from './AchievementCard'
import { achievementsData, Achievement } from '@/data/achievements'

const filterTabs = ['All', 'Grant', 'Award', 'Competition', 'Certification']

export default function CabinetSection() {
  const [selectedTab, setSelectedTab] = useState('All')

  const filtered =
    selectedTab === 'All'
      ? achievementsData
      : achievementsData.filter((a) => a.type === selectedTab)

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      {/* Background Section Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            <span>HONORS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Grants, Awards & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Competitive grants, national hackathons, coding championships, and cloud industry credentials.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = selectedTab === tab
            return (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-primary/15 border-primary/40 text-primary shadow-teal-glow'
                    : 'bg-surface-container/70 border-glass-border text-slate-400 hover:text-white hover:border-slate-600'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <AchievementCard key={item.id} achievement={item} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

