'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/data/skills'

interface SkillRadarProps {
  skills: Skill[]
}

export default function SkillRadar({ skills }: SkillRadarProps) {
  // Group skills by category
  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((category, catIndex) => {
        const categorySkills = skills.filter((s) => s.category === category)
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="glass p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-primary mb-6 border-b border-white/10 pb-2">
              {category}
            </h3>
            <div className="space-y-5">
              {categorySkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
                    </motion.div>
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

