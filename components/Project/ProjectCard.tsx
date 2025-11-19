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
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card h-full flex flex-col overflow-hidden group"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:text-white group-hover:bg-primary transition-colors">
              <Cpu size={20} />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          {project.featured && (
            <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-bold border border-secondary/30">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-surface border border-white/5 rounded-full text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

