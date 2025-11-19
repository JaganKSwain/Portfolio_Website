'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/data/skills'

interface SkillsHexagonProps {
    skills: Skill[]
}

const SkillsHexagon = ({ skills }: SkillsHexagonProps) => {
    // Group skills by category
    const categories = Array.from(new Set(skills.map((s) => s.category)))

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            {categories.map((category, catIndex) => (
                <div key={category} className="mb-12">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.1 }}
                        className="text-2xl font-bold mb-6 text-primary border-l-4 border-accent pl-4"
                    >
                        {category}
                    </motion.h3>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {skills
                            .filter((s) => s.category === category)
                            .map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.1, zIndex: 10 }}
                                    className="relative w-32 h-36 group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm hexagon border-2 border-primary/30 group-hover:border-accent transition-colors duration-300 flex flex-col items-center justify-center p-2 text-center shadow-lg group-hover:neon-glow">
                                        <div className="text-3xl mb-2 group-hover:text-accent transition-colors">
                                            {/* We could add icons here if available in the data */}
                                            ⚡
                                        </div>
                                        <h4 className="text-sm font-bold text-white group-hover:text-accent transition-colors">
                                            {skill.name}
                                        </h4>
                                        <div className="mt-2 text-xs text-gray-400 group-hover:text-white">
                                            {skill.level}%
                                        </div>

                                        {/* Level Indicator */}
                                        <div className="absolute bottom-4 w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-primary to-accent"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsHexagon
