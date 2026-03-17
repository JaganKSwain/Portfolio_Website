'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute inset-0 bg-section-glow" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        From embedded hardware to AI-driven applications — each project represents a deployed solution.
                    </p>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
