'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/data/skills'

interface SkillsHexagonProps {
    skills: Skill[]
}

const categoryIcons: Record<string, string> = {
    'Programming': '< />',
    'AI & ML': '🧠',
    'Embedded & Hardware': '⚡',
    'VLSI Tools': '🔧',
    'Tools & Platforms': '☁️',
    'CAD': '📐',
}

const SkillsHexagon = ({ skills }: SkillsHexagonProps) => {
    const categories = Array.from(new Set(skills.map((s) => s.category)))

    return (
        <div className="w-full max-w-6xl mx-auto">
            {categories.map((category, catIndex) => (
                <div key={category} className="mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.1 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="text-lg">{categoryIcons[category] || '⚙️'}</span>
                        <h3 className="text-xl font-heading font-bold text-white">
                            {category}
                        </h3>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
                    </motion.div>

                    <div className="flex flex-wrap gap-3 justify-start">
                        {skills
                            .filter((s) => s.category === category)
                            .map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.03 }}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    className="module-card px-4 py-3 cursor-pointer group min-w-[120px]"
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <h4 className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors whitespace-nowrap">
                                            {skill.name}
                                        </h4>
                                        {/* Level bar */}
                                        <div className="w-full h-1 bg-surface-light rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                                className="h-full rounded-full"
                                                style={{
                                                    background: `linear-gradient(90deg, #10b981, ${skill.level > 75 ? '#14b8a6' : '#065f46'})`
                                                }}
                                            />
                                        </div>
                                        <span className="text-[10px] text-gray-600 font-mono">{skill.level}%</span>
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
