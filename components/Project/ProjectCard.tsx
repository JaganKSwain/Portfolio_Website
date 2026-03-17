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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="module-card h-full flex flex-col overflow-hidden group"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/5 border border-primary/20 text-primary group-hover:bg-primary/10 transition-all">
              <Cpu size={16} />
            </div>
            <span className="chip-badge">
              {project.category}
            </span>
          </div>
          {project.featured && (
            <span className="copper-badge">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-500 mb-6 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-surface-light/50 border border-glass-border rounded text-[11px] font-mono text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-glass-border">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
            >
              <Github size={14} />
              <span className="font-mono text-xs">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors ml-auto"
            >
              <span className="font-mono text-xs">Live</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
