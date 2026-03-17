'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/data/skills'

interface SkillRadarProps {
  skills: Skill[]
}

export default function SkillRadar({ skills }: SkillRadarProps) {
  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category, catIndex) => {
        const categorySkills = skills.filter((s) => s.category === category)
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="module-card p-6"
          >
            <h3 className="text-lg font-heading font-bold text-primary mb-5 border-b border-glass-border pb-2">
              {category}
            </h3>
            <div className="space-y-4">
              {categorySkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white text-sm font-medium">{skill.name}</span>
                    <span className="text-gray-600 text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-surface-light rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.08 }}
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #10b981, #14b8a6)'
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
