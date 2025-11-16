'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'
import { Memory } from '@/data/memories'

interface MemoryGalleryProps {
  memories: Memory[]
}

export default function MemoryGallery({ memories }: MemoryGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {memories.map((memory, index) => (
        <motion.div
          key={memory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-effect rounded-lg p-6 border border-signal-neon/30"
        >
          <div className="mb-4">
            <span className="px-3 py-1 bg-signal-neon/20 text-signal-neon rounded-full text-xs font-semibold">
              {memory.type}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{memory.title}</h3>
          <p className="text-gray-400 mb-4">{memory.description}</p>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(memory.date).toLocaleDateString()}</span>
            </div>
            {memory.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{memory.location}</span>
              </div>
            )}
            {memory.role && (
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{memory.role}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

