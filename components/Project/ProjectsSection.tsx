'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectDetailModal from './ProjectDetailModal'
import { projects, Project } from '@/data/projects'

const categories = [
  'All',
  'Embedded & Drones',
  'AI & ML',
  'VLSI & Hardware',
  'Full-Stack',
]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background Section Glow */}
      <div className="absolute inset-0 bg-section-glow pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Engineered <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Click on any project to explore its full architecture breakdown, hardware specifications, and benchmarks.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-primary/15 border-primary/40 text-primary shadow-teal-glow'
                    : 'bg-surface-container/70 border-glass-border text-slate-400 hover:text-white hover:border-slate-600'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={(p) => setActiveProject(p)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
