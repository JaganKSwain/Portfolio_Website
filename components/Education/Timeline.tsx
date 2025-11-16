'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { EducationItem } from '@/data/education'

interface TimelineProps {
  items: EducationItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-signal-neon/30 hidden md:block" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative flex items-start gap-6"
          >
            {/* Timeline Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-circuit-dark border-4 border-signal-neon flex items-center justify-center hidden md:flex">
                <GraduationCap className="w-8 h-8 text-signal-neon" />
              </div>
            </div>

            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-1 glass-effect rounded-lg p-6 border border-signal-neon/30"
            >
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <h3 className="text-2xl font-bold text-white">{item.institution}</h3>
                <span className="px-3 py-1 bg-signal-neon/20 text-signal-neon rounded-full text-sm font-semibold">
                  {item.degree}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{item.description}</p>

              {item.activities && item.activities.length > 0 && (
                <div className="mt-4 pt-4 border-t border-signal-neon/20">
                  <h4 className="text-signal-cyan font-semibold mb-2">Key Activities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    {item.activities.map((activities, i) => (
                      <li key={i}>{activities}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

