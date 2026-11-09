'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { EducationItem } from '@/data/education'

interface TimelineProps {
  items: EducationItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-glass-border hidden md:block" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-start gap-6"
          >
            {/* Timeline Dot */}
            <div className="relative z-10 flex-shrink-0 hidden md:flex">
              <div className="w-16 h-16 rounded-2xl bg-surface-container border border-primary/40 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 modern-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="text-xl font-heading font-bold text-white">
                  {item.institution}
                </h3>
                <span className="cyan-badge">
                  {item.degree}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-primary" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-slate-400" />
                  <span>{item.location}</span>
                </div>
                {item.score && (
                  <span className="emerald-badge">
                    {item.score}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {(item.highlights || item.activities) && (
                <div className="mt-4 pt-4 border-t border-glass-border space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {(item.highlights || item.activities || []).map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
