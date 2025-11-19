'use client'

import { motion } from 'framer-motion'
import SkillRadar from './SkillRadar'
import { skills } from '@/data/skills'

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 relative bg-surface/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise in software development,
                        electronics, and data science.
                    </p>
                </motion.div>

                <SkillRadar skills={skills} />
            </div>
        </section>
    )
}
