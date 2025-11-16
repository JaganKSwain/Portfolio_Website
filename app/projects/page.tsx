'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navigation/Navbar'
import CircuitBoard from '@/components/Circuit/CircuitBoard'
import ProjectCard from '@/components/Project/ProjectCard'
import { projectsData, Project } from '@/data/projects'

const categories = ['All', 'Gaming', 'Web Development', 'Electronics', 'VLSI', 'Other']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects: Project[] =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative pt-24 pb-16">
        <CircuitBoard />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-signal-neon to-signal-cyan bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-center text-gray-400 mb-8">
              Exploring innovative solutions through code and circuits
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-signal-neon text-circuit-dark font-semibold'
                    : 'bg-pcb-green/50 text-gray-300 hover:bg-pcb-green hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

