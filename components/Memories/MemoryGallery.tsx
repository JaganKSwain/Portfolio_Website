'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award, Trophy, Mic } from 'lucide-react'
import { Memory } from '@/data/memories'

interface MemoryGalleryProps {
  memories: Memory[]
}

const typeIcon = {
  Conference: <Mic size={15} className="text-primary" />,
  Hackathon: <Trophy size={15} className="text-secondary" />,
  Competition: <Award size={15} className="text-accent" />,
  Seminar: <Users size={15} className="text-cyan-400" />,
}

export default function MemoryGallery({ memories }: MemoryGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {memories.map((memory, index) => (
        <motion.div
          key={memory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="modern-card p-6 flex flex-col justify-between group h-full"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="cyan-badge flex items-center gap-1.5">
                {typeIcon[memory.type] || null}
                <span>{memory.type}</span>
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar size={12} className="text-primary" />
                <span>{memory.date}</span>
              </span>
            </div>

            <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors mb-2">
              {memory.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              {memory.description}
            </p>
          </div>

          <div className="pt-3 border-t border-glass-border space-y-1.5 text-xs font-mono text-slate-400">
            {memory.role && (
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Role:</span>
                <span className="text-slate-200">{memory.role}</span>
              </div>
            )}
            {memory.location && (
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin size={12} className="text-primary" />
                <span>{memory.location}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
