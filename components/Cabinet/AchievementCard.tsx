'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Trophy,
  FileCheck,
  Calendar,
  Building2,
  Sparkles,
  Shield,
  Layers,
} from 'lucide-react'
import { Achievement } from '@/data/achievements'

interface AchievementCardProps {
  achievement: Achievement
  index: number
}

const iconMap = {
  Grant: Shield,
  Award: Award,
  Competition: Trophy,
  Certification: FileCheck,
}

export default function AchievementCard({
  achievement,
  index,
}: AchievementCardProps) {
  const Icon = iconMap[achievement.type] || Award
  const isGrantOrAward =
    achievement.type === 'Grant' || achievement.type === 'Award'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="modern-card p-5 sm:p-6 flex flex-col justify-between group h-full"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
              isGrantOrAward
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                : 'bg-primary/10 border-primary/30 text-primary'
            }`}
          >
            <Icon size={18} />
          </div>

          <div className="flex items-center gap-2">
            <span
              className={
                isGrantOrAward ? 'copper-badge' : 'cyan-badge'
              }
            >
              {achievement.type}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-primary transition-colors mb-2">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
          {achievement.description}
        </p>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-glass-border flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500">
        {achievement.issuer && (
          <span className="flex items-center gap-1.5 text-slate-300">
            <Building2 size={13} className="text-primary" />
            <span className="truncate max-w-[220px]">{achievement.issuer}</span>
          </span>
        )}

        <span className="flex items-center gap-1 ml-auto text-slate-400">
          <Calendar size={12} />
          <span>{achievement.date}</span>
        </span>
      </div>
    </motion.div>
  )
}
