'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, FileText, BookOpen } from 'lucide-react'
import { Achievement } from '@/data/achievements'

interface AchievementCardProps {
  achievement: Achievement
  index: number
}

const iconMap = {
  Award: Award,
  Certification: FileText,
  Competition: Trophy,
  Publication: BookOpen,
}

export default function AchievementCard({ achievement, index }: AchievementCardProps) {
  const Icon = iconMap[achievement.type] || Award
  const isAwardOrCompetition = achievement.type === 'Award' || achievement.type === 'Competition'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="module-card p-6 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${isAwardOrCompetition
              ? 'bg-secondary/5 border-secondary/20 text-secondary'
              : 'bg-primary/5 border-primary/20 text-primary'
            }`}>
            <Icon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-heading font-bold text-white group-hover:text-primary transition-colors leading-tight">
              {achievement.title}
            </h3>
            <span className={`flex-shrink-0 ${isAwardOrCompetition ? 'copper-badge' : 'chip-badge'}`}>
              {achievement.type}
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-3 leading-relaxed">{achievement.description}</p>
          <div className="flex items-center gap-4 text-xs text-gray-600 font-mono">
            {achievement.issuer && (
              <span>
                <span className={isAwardOrCompetition ? 'text-secondary/70' : 'text-primary/70'}>
                  {achievement.issuer}
                </span>
              </span>
            )}
            <span>{new Date(achievement.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
