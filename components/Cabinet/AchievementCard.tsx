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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-effect rounded-lg p-6 border border-signal-neon/30 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-signal-neon/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-signal-neon" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
            <span className="px-2 py-1 bg-signal-neon/20 text-signal-neon rounded text-xs font-semibold">
              {achievement.type}
            </span>
          </div>
          <p className="text-gray-400 mb-3">{achievement.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {achievement.issuer && (
              <span>Issued by: <span className="text-signal-cyan">{achievement.issuer}</span></span>
            )}
            <span>{new Date(achievement.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

