'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  MapPin,
  UserCheck,
  CheckCircle2,
  ExternalLink,
  Building2,
  GraduationCap,
} from 'lucide-react'
import { experiences } from '@/data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
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
            <span>EXPERIENCE & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Research & <span className="text-gradient">Industry Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Hands-on institutional research and industrial hardware engineering across medical deep learning
            and autonomous micro drone systems.
          </p>
        </motion.div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const isResearch = exp.type === 'Research'

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="modern-card p-6 sm:p-8 relative group"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-glass-border">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={
                          isResearch ? 'cyan-badge' : 'copper-badge'
                        }
                      >
                        {exp.type} Internship
                      </span>
                      {exp.department && (
                        <span className="text-xs font-mono text-slate-400">
                          {exp.department}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Building2 size={15} className="text-primary" />
                        {exp.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <MapPin size={13} className="text-slate-400" />
                        {exp.location}
                      </span>
                      {exp.supervisor && (
                        <>
                          <span className="text-slate-500">•</span>
                          <span className="flex items-center gap-1 text-xs text-secondary font-mono">
                            <UserCheck size={13} />
                            Supervisor: {exp.supervisor}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light border border-glass-border text-xs font-mono text-slate-300 self-start">
                    <Calendar size={13} className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="pt-5 space-y-4">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-400 leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${
                            isResearch ? 'text-primary' : 'text-secondary'
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags */}
                  <div className="pt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-1">
                      Tech & Domains:
                    </span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-light border border-glass-border text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

