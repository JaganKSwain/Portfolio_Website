'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Cpu } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-effect rounded-lg p-6 border border-signal-neon/30 h-full flex flex-col"
    >
      {/* IC Chip Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-6 h-6 text-signal-neon" />
          <span className="px-2 py-1 bg-signal-neon/20 text-signal-neon rounded text-xs font-semibold">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <span className="px-2 py-1 bg-chip-gold/20 text-chip-gold rounded text-xs font-semibold">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-pcb-green/50 text-signal-cyan rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-pcb-green/50 hover:bg-pcb-green rounded text-signal-neon transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">GitHub</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-signal-neon/20 hover:bg-signal-neon/30 rounded text-signal-neon transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Live</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}

