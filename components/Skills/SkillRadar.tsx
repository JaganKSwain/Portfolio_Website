'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/data/skills'

interface SkillRadarProps {
  skills: Skill[]
}

export default function SkillRadar({ skills }: SkillRadarProps) {
  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categorySkills = skills.filter((s) => s.category === category)
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-lg p-6 border border-signal-neon/30"
          >
            <h3 className="text-2xl font-bold text-signal-cyan mb-6">{category}</h3>
            <div className="space-y-4">
              {categorySkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-signal-neon">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-pcb-dark-green rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-signal-neon to-signal-cyan rounded-full"
                      style={{
                        boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

