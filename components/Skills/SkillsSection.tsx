'use client'

import { motion } from 'framer-motion'
import SkillsHexagon from './SkillsHexagon'
import { skills } from '@/data/skills'

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute inset-0 bg-surface/30" />
            <div className="absolute inset-0 grid-pattern opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise across software, hardware, and AI.
                    </p>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
                </motion.div>

                <SkillsHexagon skills={skills} />
            </div>
        </section>
    )
}
