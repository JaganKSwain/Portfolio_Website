'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Brain,
  Cpu,
  Layers,
  Globe,
  Terminal,
  Sparkles,
  CheckCircle,
} from 'lucide-react'
import { skillGroups } from '@/data/skills'

const iconMap = {
  code: <Code className="w-5 h-5 text-primary" />,
  brain: <Brain className="w-5 h-5 text-cyan-400" />,
  cpu: <Cpu className="w-5 h-5 text-secondary" />,
  microchip: <Layers className="w-5 h-5 text-accent" />,
  globe: <Globe className="w-5 h-5 text-sky-400" />,
  terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background Section Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Architecture & <span className="text-gradient">Core Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive catalog of languages, hardware description tools, AI frameworks, and cloud infrastructure
            validated through deployed systems and published research.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="modern-card p-6 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-light border border-glass-border flex items-center justify-center flex-shrink-0">
                    {iconMap[group.iconName]}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors">
                    {group.category}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {group.description}
                </p>

                {/* Skills Badges */}
                <div className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2 rounded-lg bg-surface-light/60 border border-glass-border hover:border-primary/30 transition-all flex items-center justify-between gap-2"
                    >
                      <span className="text-xs font-mono font-medium text-slate-200">
                        {skill.name}
                      </span>
                      {skill.context && (
                        <span className="text-[10px] font-mono text-slate-400 truncate max-w-[170px] text-right">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
