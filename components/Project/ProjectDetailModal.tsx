'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ExternalLink,
  Github,
  Award,
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  BarChart2,
} from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectDetailModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl modern-card bg-surface-container/95 border-primary/30 p-6 sm:p-8 z-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-surface-light border border-glass-border text-slate-400 hover:text-white hover:border-primary/40 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="space-y-2 mb-6 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="cyan-badge">{project.category}</span>
              {project.metric && (
                <span className="copper-badge">{project.metric}</span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-sm font-mono text-slate-400 font-medium">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Award Ribbon if present */}
          {project.award && (
            <div className="mb-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs font-mono text-amber-300">
              <Award size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <span>{project.award}</span>
            </div>
          )}

          {/* Body Content */}
          <div className="space-y-6 text-sm text-slate-300">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold">
                Project Overview & Problem Statement
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="p-4 rounded-xl bg-surface-light/60 border border-glass-border space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-2">
                <Layers size={14} />
                <span>System Architecture & Engineering Choices</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 block font-mono">Edge Compute & Hardware:</span>
                  <span className="text-white font-medium">
                    Optimized for constrained microcontrollers and low power budgets.
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 block font-mono">Inference Pipeline:</span>
                  <span className="text-white font-medium">
                    Quantized weights and low-latency pipeline achieving sub-20ms latency.
                  </span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-bold">
                Technologies & Tools Implemented
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-surface-light border border-glass-border text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-glass-border flex flex-wrap items-center justify-between gap-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-surface-light border border-glass-border hover:border-primary/40 text-slate-200 hover:text-primary transition-all"
                >
                  <Github size={15} />
                  <span>Inspect Source Code</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500">
                  Proprietary / Under Defense Grant NDA
                </span>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-gradient-to-r from-primary to-cyan-400 text-slate-950 hover:shadow-teal-glow transition-all"
                >
                  <span>Launch Live Deployment</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

