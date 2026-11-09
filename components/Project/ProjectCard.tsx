'use client'

import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Award,
  ArrowUpRight,
  Maximize2,
} from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  onSelect?: (project: Project) => void
}

export default function ProjectCard({
  project,
  index,
  onSelect,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onSelect && onSelect(project)}
      className="modern-card p-6 sm:p-7 flex flex-col justify-between group h-full relative cursor-pointer hover:border-primary/50 transition-all duration-300"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="cyan-badge">{project.category}</span>

          {project.metric && (
            <span className="copper-badge">{project.metric}</span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1 mb-3">
          <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <Maximize2
              size={16}
              className="text-slate-500 group-hover:text-primary transition-colors flex-shrink-0"
            />
          </h3>
          {project.subtitle && (
            <p className="text-xs font-mono text-slate-400 font-medium">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Award Highlight if any */}
        {project.award && (
          <div className="mb-4 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-start gap-2 text-xs font-mono text-amber-300">
            <Award size={15} className="flex-shrink-0 mt-0.5 text-amber-400" />
            <span>{project.award}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-glass-border mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-surface-light border border-glass-border text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div
          className="flex items-center justify-between gap-3 pt-2"
          onClick={(e) => e.stopPropagation()}
        >
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-primary transition-colors"
            >
              <Github size={14} />
              <span>Source Code</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-500">
              Proprietary / Grant NDA
            </span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-secondary hover:text-amber-300 transition-colors ml-auto"
            >
              <span>Live System</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
